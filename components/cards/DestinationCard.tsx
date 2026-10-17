import Link from "next/link";
import type { Destination } from "@/data/types";
import { coordsFor } from "@/data/coordinates";
import { Img } from "@/components/ui/Img";

export function DestinationCard({ d, stays, priority }: { d: Destination; stays?: number; priority?: boolean }) {
  const coords = coordsFor(d.slug);
  return (
    <article className="group relative">
      <Link href={`/destinations/${d.slug}`} className="block">
        <div className="relative aspect-[3/4] overflow-hidden rounded-2xl bg-sand-200">
          <Img image={d.image} sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 90vw" priority={priority}
            className="transition-transform duration-[1.4s] ease-out group-hover:scale-[1.06]" />
          <div className="absolute inset-0 bg-gradient-to-t from-cenote-950/90 via-cenote-950/10 to-transparent" />
          {coords && <p className="coords absolute left-5 top-5 text-white/85">{coords}</p>}
          <div className="absolute inset-x-0 bottom-0 p-6 text-white">
            <p className="eyebrow text-cenote-300">{d.regionLabel}</p>
            <h3 className="mt-2 text-[2rem] leading-none">{d.name}</h3>
            <p className="mt-3 line-clamp-2 text-sm leading-relaxed text-white/80">{d.hook}</p>
          </div>
        </div>
      </Link>
      {stays !== undefined && (
        <Link href={`/destinations/${d.slug}#stays`} className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-cenote-800 hover:text-terra-600">
          {stays} partner stays <span aria-hidden>→</span>
        </Link>
      )}
    </article>
  );
}
