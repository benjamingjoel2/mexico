"use client";

import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import { useUI } from "@/components/providers/UIProvider";
import type { SearchItem } from "@/lib/search";
import { CloseIcon, SearchIcon } from "@/components/ui/icons";

const norm = (s: string) => s.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "");
const suggestions = ["Cenotes", "Oaxaca", "Haciendas", "Day of the Dead", "Whale sharks", "Copper Canyon"];

export function SearchOverlay({ index }: { index: SearchItem[] }) {
  const { searchOpen, closeSearch } = useUI();
  const [q, setQ] = useState("");
  const [active, setActive] = useState(0);
  const input = useRef<HTMLInputElement>(null);

  const results = useMemo(() => {
    const terms = norm(q).split(/\s+/).filter(Boolean);
    if (!terms.length) return [];
    return index
      .map((item) => {
        const title = norm(item.title);
        const hay = norm(`${item.title} ${item.subtitle} ${item.keywords}`);
        if (!terms.every((t) => hay.includes(t))) return null;
        const score = terms.reduce((s, t) => s + (title.startsWith(t) ? 6 : title.includes(t) ? 3 : 1), 0);
        return { item, score };
      })
      .filter((r): r is { item: SearchItem; score: number } => r !== null)
      .sort((a, b) => b.score - a.score)
      .slice(0, 12)
      .map((r) => r.item);
  }, [q, index]);

  useEffect(() => {
    if (!searchOpen) return;
    setQ("");
    setActive(0);
    const t = setTimeout(() => input.current?.focus(), 30);
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && closeSearch();
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      clearTimeout(t);
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [searchOpen, closeSearch]);

  useEffect(() => setActive(0), [q]);

  if (!searchOpen) return null;

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown") { e.preventDefault(); setActive((a) => Math.min(a + 1, results.length - 1)); }
    if (e.key === "ArrowUp") { e.preventDefault(); setActive((a) => Math.max(a - 1, 0)); }
    if (e.key === "Enter" && results[active]) document.querySelector<HTMLAnchorElement>(`#sr-${active} a`)?.click();
  };

  return (
    <div role="dialog" aria-modal="true" aria-label="Search Cenote House" className="fixed inset-0 z-[60] flex justify-center bg-cenote-950/70 px-4 pt-[8vh] backdrop-blur-sm" onClick={closeSearch}>
      <div className="h-fit max-h-[80vh] w-full max-w-2xl animate-fade-up overflow-hidden rounded-2xl bg-paper shadow-2xl" onClick={(e) => e.stopPropagation()}>
        <div className="flex items-center gap-3 border-b border-sand-200 px-5">
          <SearchIcon className="shrink-0 text-cenote-700" />
          <label htmlFor="site-search" className="sr-only">Search destinations, stays, experiences and journal</label>
          <input
            id="site-search"
            ref={input}
            value={q}
            onChange={(e) => setQ(e.target.value)}
            onKeyDown={onKeyDown}
            placeholder="Search destinations, stays, experiences…"
            autoComplete="off"
            role="combobox"
            aria-expanded={results.length > 0}
            aria-controls="search-results"
            aria-activedescendant={results[active] ? `sr-${active}` : undefined}
            className="h-16 flex-1 bg-transparent text-lg outline-none placeholder:text-ink-soft/60"
          />
          <kbd className="hidden rounded border border-sand-300 px-1.5 py-0.5 text-[0.7rem] text-ink-soft sm:block">Esc</kbd>
          <button type="button" onClick={closeSearch} aria-label="Close search" className="rounded-full p-2 hover:bg-sand-100"><CloseIcon /></button>
        </div>

        <div className="max-h-[60vh] overflow-y-auto p-3">
          {!q && (
            <div className="p-3">
              <p className="eyebrow mb-3 text-ink-soft">Popular searches</p>
              <div className="flex flex-wrap gap-2">
                {suggestions.map((s) => (
                  <button key={s} type="button" onClick={() => setQ(s)} className="rounded-full border border-sand-300 px-3.5 py-1.5 text-sm hover:border-cenote-600 hover:text-cenote-700">{s}</button>
                ))}
              </div>
            </div>
          )}
          {q && results.length === 0 && (
            <p className="p-4 text-ink-soft">Nothing matches &ldquo;{q}&rdquo; yet. Our specialists know far more than this site does — <Link href="/contact" onClick={closeSearch} className="underline">ask us</Link>.</p>
          )}
          <ul id="search-results" role="listbox">
            {results.map((r, i) => (
              <li key={r.href} id={`sr-${i}`} role="option" aria-selected={i === active}>
                <Link
                  href={r.href}
                  onClick={closeSearch}
                  onMouseEnter={() => setActive(i)}
                  className={`flex items-baseline gap-4 rounded-xl px-3 py-3 ${i === active ? "bg-cenote-50" : ""}`}
                >
                  <span className="eyebrow w-24 shrink-0 text-terra-600">{r.type}</span>
                  <span className="min-w-0">
                    <span className="block font-display text-lg text-cenote-900">{r.title}</span>
                    <span className="block truncate text-sm text-ink-soft">{r.subtitle}</span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
