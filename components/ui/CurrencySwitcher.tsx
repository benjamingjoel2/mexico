"use client";

import { currencies, type CurrencyCode } from "@/config/site";
import { useCurrency } from "@/components/providers/CurrencyProvider";
import { useT } from "@/i18n/client";

export function CurrencySwitcher({ className = "", tone = "dark" }: { className?: string; tone?: "dark" | "light" }) {
  const t = useT();
  const { currency, setCurrency } = useCurrency();
  return (
    <label className={`relative inline-flex items-center ${className}`}>
      <span className="sr-only">{t("Display prices in")}</span>

      <select
        value={currency}
        onChange={(e) => setCurrency(e.target.value as CurrencyCode)}
        className={`cursor-pointer appearance-none rounded-full border bg-transparent py-1.5 pl-3 pr-7 text-xs font-semibold tracking-wide focus:outline-none focus-visible:ring-2 focus-visible:ring-terra-500 ${
          tone === "light" ? "border-white/40 text-white" : "border-sand-300 text-ink"
        }`}
      >
        {(Object.keys(currencies) as CurrencyCode[]).map((code) => (
          <option key={code} value={code} className="text-ink">
            {currencies[code].symbol.replace(/[A-Z]+/, "").trim() || "$"} {code}
          </option>
        ))}
      </select>
      <svg aria-hidden className="pointer-events-none absolute right-2.5 h-3 w-3" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path d="M3 4.5 6 7.5l3-3" />
      </svg>
    </label>
  );
}
