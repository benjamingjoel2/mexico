import Link from "next/link";
import type { Experience } from "@/data/types";
import { destinationName } from "@/lib/data";
import { Img } from "@/components/ui/Img";

/** Indexed image tile: two-digit index, dashed rule, name and where it happens. */
export function ExperienceTile({ e, index, tripCount }: { e: Experience; index: number; tripCount: number }) {
  return (
    <Link href={`/experiences/${e.slug}`} className="group block">
      <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-sand-200">
        <Img image={e.image} sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 90vw" className="transition-transform duration-[1.4s] ease-out group-hover:scale-[1.06]" />
        <div className="absolute inset-0 bg-gradient-to-t from-cenote-950/75 via-transparent to-transparent" />
        <span className="absolute left-5 top-5 font-display text-5xl italic leading-none text-white/90 drop-shadow">{String(index).padStart(2, "0")}</span>
        <span className="absolute bottom-5 left-5 right-5 text-sm font-medium text-white/85">
          {tripCount > 0 ? `${tripCount} sample ${tripCount === 1 ? "trip" : "trips"}` : "Tailor-made only"} <span aria-hidden className="inline-block transition-transform group-hover:translate-x-1">→</span>
        </span>
      </div>
      <hr className="rule-dashed mt-5 text-cenote-900" />
      <h3 className="mt-4 text-[1.65rem] text-cenote-900 transition-colors group-hover:text-terra-600">{e.name}</h3>
      <p className="mt-1.5 text-sm text-ink-soft">{e.destinations.slice(0, 3).map(destinationName).join(" · ")}</p>
    </Link>
  );
}
