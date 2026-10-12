import type { ReactNode } from "react";
import type { ImageKey } from "@/data/images";
import { emphasis } from "@/lib/emphasis";
import { Img } from "./Img";
import { Breadcrumbs, type Crumb } from "./Breadcrumbs";

export function PageHero({ title, eyebrow, intro, image, crumbs, children, size = "lg" }: {
  title: string; eyebrow?: string; intro?: string; image?: ImageKey; crumbs?: Crumb[]; children?: ReactNode; size?: "lg" | "md";
}) {
  if (!image) {
    return (
      <section className="border-b border-sand-200 bg-sand-100">
        <div className="container-x py-14 md:py-20">
          {crumbs && <Breadcrumbs items={crumbs} />}
          {eyebrow && <p className="eyebrow mt-6 text-terra-600">{eyebrow}</p>}
          <h1 className="mt-4 max-w-4xl text-5xl text-cenote-900 sm:text-6xl lg:text-7xl">{emphasis(title)}</h1>
          {intro && <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-soft">{intro}</p>}
          {children}
        </div>
      </section>
    );
  }
  return (
    <section className={`relative isolate flex items-end overflow-hidden bg-cenote-950 text-white ${size === "lg" ? "min-h-[72svh]" : "min-h-[52svh]"}`}>
      <Img image={image} sizes="100vw" priority className="-z-20 opacity-85" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-cenote-950/95 via-cenote-950/35 to-cenote-950/20" />
      <div className="container-x pb-12 pt-28 md:pb-16">
        {crumbs && <Breadcrumbs items={crumbs} tone="light" />}
        {eyebrow && <p className="eyebrow mt-6 text-cenote-300">{eyebrow}</p>}
        <h1 className="mt-4 max-w-4xl text-5xl sm:text-6xl lg:text-[5.2rem]">{emphasis(title)}</h1>
        {intro && <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/85">{intro}</p>}
        {children}
      </div>
    </section>
  );
}
