import Link from "@/i18n/Link";
import type { Experience } from "@/data/types";
import { destinationName } from "@/lib/data";
import { t } from "@/i18n/server";

export function ExperienceCard({ e, tripCount, index }: { e: Experience; tripCount: number; index?: number }) {
  return (
    <Link
      href={`/experiences/${e.slug}`}
      className="group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-sand-200 bg-white p-7 transition-colors duration-300 hover:border-cenote-700 hover:bg-cenote-800"
    >
      <div>
        {index !== undefined && (
          <p className="font-display text-sm italic text-terra-500 transition-colors group-hover:text-terra-300">{String(index + 1).padStart(2, "0")}</p>
        )}
        <h3 className="mt-3 text-[1.7rem] text-cenote-900 transition-colors group-hover:text-white">{e.name}</h3>
        <p className="mt-2 text-sm text-ink-soft transition-colors group-hover:text-white/70">
          {e.destinations.slice(0, 4).map(destinationName).join(" · ")}
        </p>
      </div>
      <p className="mt-8 flex items-center justify-between text-sm font-semibold text-cenote-800 transition-colors group-hover:text-white">
        <span>{tripCount > 0 ? `${tripCount} ${tripCount === 1 ? t("trip") : t("trips")}` : t("Tailor-made")}</span>

        <span aria-hidden className="transition-transform group-hover:translate-x-1">→</span>
      </p>
    </Link>
  );
}
