import type { Metadata } from "next";
import { site } from "@/config/site";
import { images, type ImageKey } from "@/data/images";

/** Google shows roughly 60 characters of a title. */
const MAX_TITLE = 60;
const SUFFIX = ` · ${site.name}`;

/**
 * Per-page metadata: title, description, canonical URL, Open Graph and Twitter tags.
 * Titles get the " · Cenote House" suffix only when the result still fits in search results.
 */
export function pageMetadata({
  title,
  description,
  path,
  image,
  type = "website",
  publishedTime,
}: {
  title: string;
  description: string;
  path: string;
  image?: ImageKey;
  type?: "website" | "article";
  publishedTime?: string;
}): Metadata {
  const base = title.replace(/\s*[|·–-]\s*Cenote House\s*$/i, "");
  const full = base.length + SUFFIX.length <= MAX_TITLE ? base + SUFFIX : base;
  const img = images[image ?? "hero-cenote"] ?? images["hero-cenote"];
  return {
    title: { absolute: full },
    description,
    alternates: { canonical: path },
    openGraph: {
      title: full,
      description,
      url: path,
      siteName: site.name,
      locale: site.locale,
      type,
      ...(publishedTime && { publishedTime }),
      images: [{ url: img.src, width: 2000, height: 1333, alt: img.alt }],
    },
    twitter: { card: "summary_large_image", title: full, description, images: [img.src] },
  };
}
