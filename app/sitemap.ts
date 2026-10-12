import type { MetadataRoute } from "next";
import { site } from "@/config/site";
import { destinations, experiences, itineraries, stays } from "@/lib/data";
import { getAllPosts } from "@/lib/blog";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const paths = [
    "", "/destinations", "/trips", "/experiences", "/plan-your-trip", "/about", "/why-travel-with-us", "/testimonials", "/faq", "/contact", "/blog",
    ...destinations.map((d) => `/destinations/${d.slug}`),
    ...itineraries.map((i) => `/trips/${i.slug}`),
    ...experiences.map((e) => `/experiences/${e.slug}`),
    ...stays.map((s) => `/stays/${s.slug}`),
    ...getAllPosts().map((p) => `/blog/${p.slug}`),
  ];
  return paths.map((p) => ({ url: `${site.url}${p}`, lastModified: now, changeFrequency: "monthly", priority: p === "" ? 1 : 0.7 }));
}
