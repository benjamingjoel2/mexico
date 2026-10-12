import Link from "next/link";
import type { Itinerary } from "@/data/types";
import { Img } from "@/components/ui/Img";
import { Price } from "@/components/ui/Price";

export function ItineraryCard({ it }: { it: Itinerary }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-sand-200 bg-white">
      <Link href={`/trips/${it.slug}`} className="relative block aspect-[16/10] overflow-hidden bg-sand-200" tabIndex={-1} aria-hidden>
        <Img image={it.image} sizes="(min-width: 1024px) 45vw, 95vw" className="transition-transform duration-[1.2s] group-hover:scale-[1.04]" />
        <div className="absolute left-4 top-4 flex gap-2">
          <span className="rounded-full bg-paper/95 px-3 py-1 text-xs font-semibold text-cenote-900">{it.nights + 1} days · {it.nights} nights</span>
        </div>
      </Link>
      <div className="flex flex-1 flex-col p-6 sm:p-8">
        <p className="eyebrow text-terra-600">{it.regionLabel}</p>
        <h3 className="mt-2 text-[1.8rem] text-cenote-900">
          <Link href={`/trips/${it.slug}`} className="hover:text-terra-600">{it.title}</Link>
        </h3>
        <p className="mt-3 text-sm text-ink-soft">{it.inclusionLine}</p>
        <ul className="mt-5 space-y-2 text-[0.95rem]">
          {it.highlights.slice(0, 4).map((h) => (
            <li key={h} className="flex gap-3">
              <span aria-hidden className="mt-2 h-1.5 w-1.5 shrink-0 rotate-45 bg-terra-500" />
              {h}
            </li>
          ))}
        </ul>
        <div className="mt-auto flex flex-wrap items-end justify-between gap-4 border-t border-sand-200 pt-6 [margin-top:max(1.75rem,auto)]">
          <div>
            <p className="text-sm text-ink-soft">From</p>
            <p className="font-display text-3xl text-cenote-900"><Price usd={it.priceFromUSD} /> <span className="font-sans text-sm text-ink-soft">per person</span></p>
            <p className="mt-1 text-xs text-ink-soft">≈ <Price usd={it.priceFromUSD} multiplier={2} /> for two · international flights excluded</p>
          </div>
          <Link href={`/trips/${it.slug}`} className="link-arrow text-cenote-800">View itinerary <span aria-hidden>→</span></Link>
        </div>
      </div>
    </article>
  );
}
