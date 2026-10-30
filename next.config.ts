import type { NextConfig } from "next";

const preview = process.env.NEXT_PUBLIC_PREVIEW_EXPORT === "1";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [{ protocol: "https", hostname: "images.unsplash.com" }],
    formats: ["image/avif", "image/webp"],
    // Keep optimised images cached for a month instead of re-optimising them from Unsplash.
    minimumCacheTTL: 2678400,
  },
  // Retired page (owner's fix list, October 2026): no testimonials.
  ...(!preview && {
    async redirects() {
      return [{ source: "/testimonials", destination: "/about", permanent: true }];
    },
  }),
  // Static, relative-path build used only for hosted previews (see scripts/build-preview.mjs).
  ...(preview && {
    output: "export",
    trailingSlash: true,
    assetPrefix: "/__AP__",
    images: { loader: "custom", loaderFile: "./lib/preview-image-loader.ts" },
  }),
};

export default nextConfig;
