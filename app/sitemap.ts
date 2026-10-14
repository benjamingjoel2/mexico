import type { MetadataRoute } from "next";
import { site } from "@/config/site";
import { destinations, experiences, itineraries, stays } from "@/lib/data";
import { getAllPosts } from "@/lib/blog";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const entry = (path: string, priority: number, lastModified: Date = now): MetadataRoute.Sitemap[number] => ({
    url: `${site.url}${path}`,
    lastModified,
    changeFrequency: "monthly",
    priority,
  });
  return [
    entry("", 1),
    ...["/destinations", "/trips", "/experiences", "/plan-your-trip"].map((p) => entry(p, 0.9)),
    ...destinations.map((d) => entry(`/destinations/${d.slug}`, 0.8)),
    ...itineraries.map((i) => entry(`/trips/${i.slug}`, 0.8)),
    ...experiences.map((e) => entry(`/experiences/${e.slug}`, 0.7)),
    ...stays.map((s) => entry(`/stays/${s.slug}`, 0.6)),
    entry("/blog", 0.7),
    ...getAllPosts().map((p) => entry(`/blog/${p.slug}`, 0.7, new Date(p.date))),
    ...["/about", "/why-travel-with-us", "/testimonials", "/faq", "/contact"].map((p) => entry(p, 0.5)),
  ];
}
