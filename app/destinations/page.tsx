import Link from "next/link";
import { destinations, partnerStayCounts, regionLabels } from "@/lib/data";
import type { RegionId } from "@/data/types";
import { pageMetadata } from "@/lib/seo";
import { PageHero } from "@/components/ui/PageHero";
import { coordsFor } from "@/data/coordinates";
import { Img } from "@/components/ui/Img";
import { CtaBand } from "@/components/ui/CtaBand";
import { TileDivider } from "@/components/ui/TileDivider";

export const metadata = pageMetadata({
  title: "Mexico destinations: where to go, region by region",
  description: "Our first-hand guide to the best of Mexico — 18 destinations from Mexico City and Oaxaca to the cenotes of the Yucatán, Baja and the Copper Canyon.",
  path: "/destinations",
  image: "colonial-street",
});

const regionOrder: RegionId[] = ["central-highlands", "yucatan-caribbean", "oaxaca-chiapas", "pacific-coast", "baja-north"];
const regionIntros: Record<RegionId, string> = {
  "central-highlands": "High-altitude colonial cities, world-class museums and the best food scene in the Americas. Cooler than you'd expect, and the place most first trips should begin.",
  "yucatan-caribbean": "Limestone, jungle and turquoise water. Cenotes, Maya cities, crumbling haciendas and the Caribbean coast — the region our name comes from.",
  "oaxaca-chiapas": "Mexico's indigenous heartland: markets, mezcal, textiles and misty highland towns. Slower, deeper, and endlessly rewarding.",
  "pacific-coast": "Surf breaks, fishing villages and Sierra Madre jungle tumbling into the ocean. Wilder and less polished than the Caribbean.",
  "baja-north": "Desert meeting sea, grey whales in winter lagoons, and canyons deeper than the Grand Canyon. Mexico at its most dramatic.",
};

export default function DestinationsPage() {
  let n = 0;
  const groups = regionOrder.map((r) => ({ region: r, items: destinations.filter((d) => d.region === r) })).filter((g) => g.items.length);

  return (
    <>
      <PageHero
        image="colonial-street"
        crumbs={[{ label: "Destinations" }]}
        eyebrow="The Cenote House guide"
        title="The best of Mexico, region by *region*."
        intro="Mexico is far bigger, and far more varied, than the resort strip suggests. These are the eighteen places our specialists return to again and again — who each one suits, what not to miss, and how to do it well."
      />

      {/* Table of contents */}
      <section className="border-b border-sand-200 bg-paper">
        <div className="container-x py-14">
          <div className="grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <h2 className="text-3xl text-cenote-900">In this <em>guide</em></h2>
              <p className="mt-3 text-ink-soft">Jump to a region, or scroll for the full story. Every entry links to a deeper destination guide.</p>
            </div>
            <ol className="grid gap-x-10 gap-y-2 sm:grid-cols-2 lg:col-span-8 lg:grid-cols-3">
              {groups.flatMap((g) => g.items).map((d, i) => (
                <li key={d.slug}>
                  <a href={`#${d.slug}`} className="group flex gap-3 py-1">
                    <span className="w-6 font-display italic text-terra-500">{i + 1}.</span>
                    <span className="text-cenote-900 group-hover:text-terra-600 group-hover:underline">{d.name}</span>
                  </a>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {groups.map((g) => (
        <section key={g.region} id={g.region} className="scroll-mt-24 py-16 md:py-24 odd:bg-paper even:bg-sand-50">
          <div className="container-x">
            <div className="mb-14 max-w-3xl">
              <p className="eyebrow text-terra-600">Region</p>
              <h2 className="mt-3 text-4xl text-cenote-900 sm:text-5xl">{regionLabels[g.region]}</h2>
              <p className="mt-4 text-lg text-ink-soft">{regionIntros[g.region]}</p>
            </div>
            <div className="space-y-20">
              {g.items.map((d) => {
                n += 1;
                const flip = n % 2 === 0;
                return (
                  <article key={d.slug} id={d.slug} className="grid scroll-mt-28 items-center gap-8 lg:grid-cols-12 lg:gap-14">
                    <Link href={`/destinations/${d.slug}`} className={`reveal-media group relative block aspect-[4/3] overflow-hidden rounded-2xl bg-sand-200 lg:col-span-6 ${flip ? "lg:order-2" : ""}`}>
                      <Img image={d.image} sizes="(min-width: 1024px) 45vw, 95vw" className="transition-transform duration-[1.2s] group-hover:scale-[1.04]" />
                    </Link>
                    <div className="lg:col-span-6">
                      <p className="flex items-baseline gap-4"><span className="font-display text-lg italic text-terra-500">{String(n).padStart(2, "0")}</span>{coordsFor(d.slug) && <span className="coords text-ink-soft">{coordsFor(d.slug)}</span>}</p>
                      <h3 className="mt-1 text-4xl text-cenote-900 sm:text-[2.8rem]">
                        <Link href={`/destinations/${d.slug}`} className="hover:text-terra-600">{d.name}</Link>
                        <span className="ml-3 align-middle font-sans text-sm font-medium tracking-normal text-ink-soft">{d.regionLabel}</span>
                      </h3>
                      <p className="mt-3 font-display text-xl italic text-cenote-700">{d.hook}</p>
                      <dl className="mt-6 space-y-2 text-[0.95rem]">
                        <div><dt className="inline font-semibold text-cenote-900">Best for: </dt><dd className="inline text-ink-soft">{d.bestFor}</dd></div>
                        <div><dt className="inline font-semibold text-cenote-900">Key highlights: </dt><dd className="inline text-ink-soft">{d.keyHighlights}</dd></div>
                      </dl>
                      <p className="mt-5 leading-relaxed text-ink-soft">{d.overview[0]}</p>
                      <div className="mt-6 flex flex-wrap items-center gap-6">
                        <Link href={`/destinations/${d.slug}`} className="link-arrow text-cenote-800">Read the {d.name} guide <span aria-hidden>→</span></Link>
                        <span className="text-sm text-ink-soft">{partnerStayCounts[d.slug]} partner stays</span>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>
      ))}

      <div className="container-x py-4"><TileDivider /></div>
      <CtaBand title="Can't *choose*? That's our job." text="Most of our guests combine two or three regions. Tell us what you love and we'll suggest the right mix for your dates." />
    </>
  );
}
