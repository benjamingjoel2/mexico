import type { MonthInfo } from "@/data/types";
import { t } from "@/i18n/server";

const ratingStyle = {
  best: "bg-cenote-700 text-white border-cenote-700",
  good: "bg-cenote-100 text-cenote-900 border-cenote-100",
  mixed: "bg-white text-ink-soft border-sand-300",
} as const;
const ratingLabel = { best: "Best", good: "Good", mixed: "Mixed" } as const;
const hurricaneMonths = ["Jun", "Jul", "Aug", "Sep", "Oct", "Nov"];

export function MonthGrid({ months, hurricaneSeason }: { months: MonthInfo[]; hurricaneSeason: boolean }) {
  return (
    <div>
      <ul className="grid grid-cols-3 gap-2 sm:grid-cols-4 lg:grid-cols-6">
        {months.map((m) => {
          const storm = hurricaneSeason && hurricaneMonths.includes(m.month);
          return (
            <li key={m.month} className={`relative rounded-xl border p-3 ${ratingStyle[m.rating]}`}>
              <div className="flex items-baseline justify-between">
                <span className="font-display text-lg">{t(m.month)}</span>
                <span className="text-[0.65rem] font-semibold uppercase tracking-wider">{t(ratingLabel[m.rating])}</span>
              </div>
              <p className="mt-1 text-xs leading-snug">{m.note}</p>
              {storm && (
                <span className="mt-2 inline-flex items-center gap-1 rounded-full bg-terra-100 px-2 py-0.5 text-[0.65rem] font-semibold text-terra-700" title={t("Atlantic/Pacific hurricane season")}>
                  <span aria-hidden>🌀</span> {t("Hurricane season")}
                </span>
              )}
            </li>
          );
        })}
      </ul>
      <div className="mt-4 flex flex-wrap gap-4 text-xs text-ink-soft">
        <span className="inline-flex items-center gap-2"><span className="h-3 w-3 rounded bg-cenote-700" /> {t("Best time")}</span>
        <span className="inline-flex items-center gap-2"><span className="h-3 w-3 rounded bg-cenote-100" /> {t("Good")}</span>
        <span className="inline-flex items-center gap-2"><span className="h-3 w-3 rounded border border-sand-300 bg-white" /> {t("Mixed")}</span>
        {hurricaneSeason && <span className="inline-flex items-center gap-2"><span className="h-3 w-3 rounded bg-terra-100" /> {t("Hurricane season Jun–Nov (peak Aug–Oct). Storms are infrequent, but we build in flexibility and recommend insurance.")}</span>}

      </div>
    </div>
  );
}
