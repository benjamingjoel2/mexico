import type { Metadata } from "next";
import { site } from "@/config/site";
import { images, type ImageKey } from "@/data/images";

export function pageMetadata({
  title,
  description,
  path,
  image,
}: {
  title: string;
  description: string;
  path: string;
  image?: ImageKey;
}): Metadata {
  const ogImage = images[image ?? "hero-cenote"]?.src;
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title,
      description,
      url: path,
      siteName: site.name,
      type: "website",
      images: ogImage ? [{ url: ogImage, width: 2000, height: 1333 }] : undefined,
    },
    twitter: { card: "summary_large_image", title, description, images: ogImage ? [ogImage] : undefined },
  };
}
