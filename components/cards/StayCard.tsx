import Link from "next/link";
import type { Stay } from "@/data/types";
import { Img } from "@/components/ui/Img";
import { Price } from "@/components/ui/Price";

export function StayCard({ s }: { s: Stay }) {
  return (
    <article className="group">
      <Link href={`/stays/${s.slug}`} className="block">
        <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-sand-200">
          <Img image={s.image} sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 90vw" className="transition-transform duration-[1.2s] group-hover:scale-[1.05]" />
          <span className="absolute left-4 top-4 rounded-full bg-paper/95 px-3 py-1 text-xs font-semibold text-cenote-900">{s.type}</span>
        </div>
        <p className="eyebrow mt-4 text-terra-600">{s.locationLabel}</p>
        <h3 className="mt-1.5 text-2xl text-cenote-900 group-hover:text-terra-600">{s.name}</h3>
        <p className="mt-1.5 text-sm text-ink-soft">
          From <span className="font-semibold text-ink"><Price usd={s.priceFromUSD} /></span> per person · night
        </p>
      </Link>
    </article>
  );
}
