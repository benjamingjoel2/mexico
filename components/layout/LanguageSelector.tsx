"use client";

import NextLink from "next/link";
import { usePathname } from "next/navigation";
import { useLocale, useT } from "@/i18n/client";
import { localeNames, locales, localizeHref, stripLocale } from "@/i18n/locales";

/** EN · FR · DE · ES — links to the same page in each language. */
export function LanguageSelector({ tone = "dark", className = "" }: { tone?: "dark" | "light"; className?: string }) {
  const t = useT();
  const current = useLocale();
  const path = stripLocale(usePathname() ?? "/");
  return (
    <nav aria-label={t("Language")} className={className}>
      <ul className="flex items-center gap-0.5 text-[0.78rem] font-semibold tracking-[0.08em]">
        {locales.map((l, i) => (
          <li key={l} className="flex items-center">
            {i > 0 && <span aria-hidden className={tone === "light" ? "px-0.5 text-white/40" : "px-0.5 text-ink-soft/50"}>·</span>}
            <NextLink
              href={localizeHref(l, path)}
              hrefLang={l}
              lang={l}
              aria-current={l === current ? "true" : undefined}
              title={localeNames[l]}
              className={`rounded px-1 py-1 uppercase focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-terra-500 ${
                l === current ? "underline decoration-2 underline-offset-4" : tone === "light" ? "opacity-70 hover:opacity-100" : "opacity-60 hover:text-terra-600 hover:opacity-100"
              }`}
            >
              {l}
              <span className="sr-only"> ({localeNames[l]})</span>
            </NextLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
