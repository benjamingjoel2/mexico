import { destinations, experiences, itineraries, stays, destinationName } from "@/lib/data";
import { getAllPosts } from "@/lib/blog";

export interface SearchItem {
  type: "Destination" | "Experience" | "Trip" | "Stay" | "Journal";
  title: string;
  subtitle: string;
  href: string;
  keywords: string;
}

/** Built on the server and passed to the client overlay (small, static). */
export function buildSearchIndex(): SearchItem[] {
  return [
    ...destinations.map((d) => ({
      type: "Destination" as const, title: d.name, subtitle: d.regionLabel, href: `/destinations/${d.slug}`,
      keywords: [d.hook, d.bestFor, d.keyHighlights, d.regionLabel].join(" "),
    })),
    ...experiences.map((e) => ({
      type: "Experience" as const, title: e.name, subtitle: e.destinations.map(destinationName).slice(0, 3).join(", "),
      href: `/experiences/${e.slug}`, keywords: e.summary,
    })),
    ...itineraries.map((i) => ({
      type: "Trip" as const, title: i.title, subtitle: `${i.nights} nights · ${i.regionLabel}`, href: `/trips/${i.slug}`,
      keywords: [i.summary, i.highlights.join(" "), i.destinations.join(" ")].join(" "),
    })),
    ...stays.map((s) => ({
      type: "Stay" as const, title: s.name, subtitle: `${s.type} · ${s.locationLabel}`, href: `/stays/${s.slug}`,
      keywords: [s.summary, s.features.join(" ")].join(" "),
    })),
    ...getAllPosts().map((p) => ({
      type: "Journal" as const, title: p.title, subtitle: p.description, href: `/blog/${p.slug}`, keywords: p.tags.join(" "),
    })),
  ];
}
