import type { MetadataRoute } from "next";
import { site } from "@/config/site";
import { destinations, experiences, itineraries, stays } from "@/lib/data";
import { getAllPosts } from "@/lib/blog";
import { locales, localizeHref } from "@/i18n/locales";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  // One entry per page per language (en, fr, de, es), each listing its alternates.
  const entry = (path: string, priority: number, lastModified: Date = now): MetadataRoute.Sitemap =>
    locales.map((l) => ({
      url: `${site.url}${localizeHref(l, path || "/")}`.replace(/\/$/, ""),
      lastModified,
      changeFrequency: "monthly" as const,
      priority,
      alternates: { languages: Object.fromEntries(locales.map((x) => [x, `${site.url}${localizeHref(x, path || "/")}`.replace(/\/$/, "")])) },
    }));
  return [
    ...entry("", 1),
    ...["/destinations", "/trips", "/experiences", "/plan-your-trip"].flatMap((p) => entry(p, 0.9)),
    ...destinations.flatMap((d) => entry(`/destinations/${d.slug}`, 0.8)),
    ...itineraries.flatMap((i) => entry(`/trips/${i.slug}`, 0.8)),
    ...experiences.flatMap((e) => entry(`/experiences/${e.slug}`, 0.7)),
    ...stays.flatMap((s) => entry(`/stays/${s.slug}`, 0.6)),
    ...entry("/blog", 0.7),
    ...getAllPosts().flatMap((p) => entry(`/blog/${p.slug}`, 0.7, new Date(p.date))),
    ...["/about", "/why-travel-with-us", "/faq", "/contact"].flatMap((p) => entry(p, 0.5)),
    ...["/legal/privacy", "/legal/terms", "/legal/cookies"].flatMap((p) => entry(p, 0.3)),
  ];
}
