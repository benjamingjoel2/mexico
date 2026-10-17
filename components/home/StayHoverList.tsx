"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import type { Stay } from "@/data/types";
import { images } from "@/data/images";
import { Price } from "@/components/ui/Price";

/**
 * Desktop: a list of stay names; hovering or focusing one swaps the large photo beside it.
 * Mobile: falls back to a stack of image cards.
 */
export function StayHoverList({ stays }: { stays: Stay[] }) {
  const [active, setActive] = useState(0);
  return (
    <>
      <div className="hidden gap-14 lg:grid lg:grid-cols-12">
        <ol className="lg:col-span-6">
          {stays.map((s, i) => (
            <li key={s.slug} className="border-b border-sand-300 first:border-t">
              <Link
                href={`/stays/${s.slug}`}
                onMouseEnter={() => setActive(i)}
                onFocus={() => setActive(i)}
                className="group grid grid-cols-[3rem_1fr_auto] items-baseline gap-4 py-7"
              >
                <span className={`coords transition-colors ${active === i ? "text-terra-600" : "text-ink-soft"}`}>{String(i + 1).padStart(2, "0")}</span>
                <span>
                  <span className={`block font-display text-[2.1rem] leading-tight transition-colors ${active === i ? "text-cenote-900" : "text-cenote-900/45"}`}>
                    {active === i ? <em className="italic">{s.name}</em> : s.name}
                  </span>
                  <span className="mt-1 block text-sm text-ink-soft">{s.type} · {s.locationLabel}</span>
                </span>
                <span className="text-right text-sm text-ink-soft">
                  from <span className="font-semibold text-ink"><Price usd={s.priceFromUSD} /></span>
                  <span className="block text-xs">per person · night</span>
                </span>
              </Link>
            </li>
          ))}
        </ol>
        <div className="relative lg:col-span-6">
          <div className="sticky top-28 aspect-[4/5] overflow-hidden rounded-2xl bg-sand-200">
            {stays.map((s, i) => (
              <Image
                key={s.slug}
                src={images[s.image].src}
                alt={images[s.image].alt}
                fill
                sizes="45vw"
                className={`object-cover transition-[opacity,transform] duration-700 ease-out ${active === i ? "scale-100 opacity-100" : "scale-[1.04] opacity-0"}`}
              />
            ))}
            <p className="absolute bottom-5 left-5 rounded-full bg-paper/95 px-3 py-1 text-xs font-semibold text-cenote-900">{stays[active].summary.split(".")[0]}.</p>
          </div>
        </div>
      </div>

      {/* Mobile / tablet */}
      <div className="grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:hidden">
        {stays.map((s) => (
          <Link key={s.slug} href={`/stays/${s.slug}`} className="group">
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-sand-200">
              <Image src={images[s.image].src} alt={images[s.image].alt} fill sizes="(min-width: 640px) 45vw, 90vw" className="object-cover" />
              <span className="absolute left-4 top-4 rounded-full bg-paper/95 px-3 py-1 text-xs font-semibold text-cenote-900">{s.type}</span>
            </div>
            <p className="eyebrow mt-4 text-terra-600">{s.locationLabel}</p>
            <h3 className="mt-1.5 text-2xl text-cenote-900">{s.name}</h3>
            <p className="mt-1.5 text-sm text-ink-soft">From <span className="font-semibold text-ink"><Price usd={s.priceFromUSD} /></span> per person · night</p>
          </Link>
        ))}
      </div>
    </>
  );
}
