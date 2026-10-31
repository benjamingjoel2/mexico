import type { Metadata } from "next";
import { site } from "@/config/site";
import { images, type ImageKey } from "@/data/images";
import { getLocale, t } from "@/i18n/server";
import { locales, localizeHref, ogLocales } from "@/i18n/locales";

/** Canonical + hreflang alternates (en, fr, de, es, x-default) for a path in the current locale. */
export function languageAlternates(path: string) {
  const locale = getLocale();
  return {
    canonical: localizeHref(locale, path),
    languages: { ...Object.fromEntries(locales.map((l) => [l, localizeHref(l, path)])), "x-default": path },
  };
}

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
  title = t(title);
  description = t(description);
  const base = title.replace(/\s*[|·–-]\s*Cenote House\s*$/i, "");
  const full = base.length + SUFFIX.length <= MAX_TITLE ? base + SUFFIX : base;
  const img = images[image ?? "hero-cenote"] ?? images["hero-cenote"];
  return {
    title: { absolute: full },
    description,
    alternates: languageAlternates(path),
    openGraph: {
      title: full,
      description,
      url: localizeHref(getLocale(), path),
      siteName: site.name,
      locale: ogLocales[getLocale()],
      type,
      ...(publishedTime && { publishedTime }),
      images: [{ url: img.src, width: 2000, height: 1333, alt: t(img.alt) }],
    },
    twitter: { card: "summary_large_image", title: full, description, images: [img.src] },
  };
}
