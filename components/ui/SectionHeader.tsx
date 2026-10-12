import Link from "next/link";
import { emphasis } from "@/lib/emphasis";

interface Props {
  eyebrow?: string;
  title: string;
  intro?: string;
  link?: { label: string; href: string };
  align?: "left" | "center";
  tone?: "dark" | "light";
  as?: "h1" | "h2";
}

export function SectionHeader({ eyebrow, title, intro, link, align = "left", tone = "dark", as: H = "h2" }: Props) {
  const centered = align === "center";
  return (
    <div className={`mb-10 flex flex-col gap-6 md:mb-14 ${centered ? "items-center text-center" : "md:flex-row md:items-end md:justify-between"}`}>
      <div className={centered ? "max-w-2xl" : "max-w-2xl"}>
        {eyebrow && <p className={`eyebrow mb-4 ${tone === "light" ? "text-cenote-300" : "text-terra-600"}`}>{eyebrow}</p>}
        <H className={`text-[2.4rem] sm:text-5xl lg:text-[3.6rem] ${tone === "light" ? "text-white" : "text-cenote-900"}`}>{emphasis(title)}</H>
        {intro && <p className={`mt-5 text-lg leading-relaxed ${tone === "light" ? "text-white/80" : "text-ink-soft"}`}>{intro}</p>}
      </div>
      {link && (
        <Link href={link.href} className={`link-arrow shrink-0 ${tone === "light" ? "text-white" : "text-cenote-800"}`}>
          {link.label} <span aria-hidden>→</span>
        </Link>
      )}
    </div>
  );
}
