"use client";

import { useMemo, useState } from "react";
import type { BudgetTier, Itinerary, RegionId } from "@/data/types";
import { ItineraryCard } from "@/components/cards/ItineraryCard";
import { PlannerButton } from "@/components/ui/PlannerButton";
import { useT } from "@/i18n/client";
import { msg } from "@/i18n/locales";
import { emphasis } from "@/lib/emphasis";

const durations = [
  { id: "all", label: msg("Any length"), test: () => true },
  { id: "short", label: msg("Up to 9 nights"), test: (n: number) => n <= 9 },
  { id: "mid", label: msg("10–12 nights"), test: (n: number) => n >= 10 && n <= 12 },
  { id: "long", label: msg("13+ nights"), test: (n: number) => n >= 13 },
];

export function TripFilters({ trips, regionLabels, budgetLabels }: {
  trips: Itinerary[]; regionLabels: Record<RegionId, string>; budgetLabels: Record<BudgetTier, string>;
}) {
  const t = useT();
  const [region, setRegion] = useState<RegionId | "all">("all");
  const [duration, setDuration] = useState("all");
  const [budget, setBudget] = useState<BudgetTier | "all">("all");

  const filtered = useMemo(() => {
    const dur = durations.find((d) => d.id === duration)!;
    return trips.filter((t) => (region === "all" || t.regions.includes(region)) && dur.test(t.nights) && (budget === "all" || t.budget === budget));
  }, [trips, region, duration, budget]);

  const regions = (Object.keys(regionLabels) as RegionId[]).filter((r) => trips.some((t) => t.regions.includes(r)));

  return (
    <>
      <div className="sticky top-[4.5rem] z-20 border-b border-sand-200 bg-paper/95 backdrop-blur">
        <div className="container-x flex flex-col gap-3 py-4 md:flex-row md:items-center md:gap-4">
          <p className="eyebrow text-ink-soft md:mr-2">{t("Filter")}</p>
          <Select label={t("Region")} value={region} onChange={(v) => setRegion(v as RegionId | "all")}
            options={[{ id: "all", label: t("All regions") }, ...regions.map((r) => ({ id: r, label: regionLabels[r] }))]} />
          <Select label={t("Duration")} value={duration} onChange={setDuration} options={durations.map((d) => ({ ...d, label: t(d.label) }))} />
          <Select label={t("Budget")} value={budget} onChange={(v) => setBudget(v as BudgetTier | "all")}
            options={[{ id: "all", label: t("Any budget") }, ...(Object.keys(budgetLabels) as BudgetTier[]).map((b) => ({ id: b, label: budgetLabels[b] }))]} />
          <p className="text-sm text-ink-soft md:ml-auto" aria-live="polite">{filtered.length} {filtered.length === 1 ? t("trip") : t("trips")}</p>
        </div>
      </div>
      <div className="container-x py-14">
        <h2 className="sr-only">{t("Matching trips")}</h2>
        {filtered.length ? (
          <div className="grid gap-6 lg:grid-cols-2">{filtered.map((t, i) => <ItineraryCard key={t.slug} it={t} priority={i === 0} />)}</div>
        ) : (
          <div className="rounded-2xl bg-sand-100 p-10 text-center">
            <p className="font-display text-3xl text-cenote-900">{emphasis(t("No sample trip fits — *yet*."))}</p>
            <p className="mt-3 text-ink-soft">{t("Every trip we plan is built from scratch, so this is no obstacle at all.")}</p>
            <div className="mt-6"><PlannerButton>{t("Design my trip")} →</PlannerButton></div>

          </div>
        )}
      </div>
    </>
  );
}

function Select({ label, value, onChange, options }: { label: string; value: string; onChange: (v: string) => void; options: { id: string; label: string }[] }) {
  return (
    <label className="flex items-center gap-2 text-sm">
      <span className="sr-only">{label}</span>
      <select value={value} onChange={(e) => onChange(e.target.value)} className="field !w-auto !rounded-full !py-2 !pl-4 !pr-9 text-sm font-medium">
        {options.map((o) => <option key={o.id} value={o.id}>{o.label}</option>)}
      </select>
    </label>
  );
}
