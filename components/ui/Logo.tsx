import Link from "next/link";
import { site } from "@/config/site";

/** Text-based placeholder logo: a cenote mark (sinkhole opening + water) beside the wordmark. */
export function Logo({ tone = "dark", className = "" }: { tone?: "dark" | "light"; className?: string }) {
  const color = tone === "light" ? "text-white" : "text-cenote-900";
  return (
    <Link href="/" aria-label={`${site.name} — home`} className={`group inline-flex items-center gap-2.5 ${color} ${className}`}>
      <svg aria-hidden viewBox="0 0 32 32" className="h-8 w-8 shrink-0">
        <circle cx="16" cy="16" r="15" fill="none" stroke="currentColor" strokeWidth="1.3" />
        <path d="M5 15.5c2.2-4.2 6.2-7 11-7s8.8 2.8 11 7" fill="none" stroke="currentColor" strokeWidth="1.3" />
        <path d="M6.5 19.5c3 1.6 6 1.6 9.5 0s6.5-1.6 9.5 0" fill="none" stroke="var(--color-cenote-500)" strokeWidth="1.6" strokeLinecap="round" />
        <path d="M9 23.5c2.4 1.1 4.6 1.1 7 0s4.6-1.1 7 0" fill="none" stroke="var(--color-cenote-500)" strokeWidth="1.6" strokeLinecap="round" opacity=".6" />
        <circle cx="16" cy="12.5" r="1.4" fill="var(--color-terra-500)" />
      </svg>
      <span className="whitespace-nowrap font-display text-[1.45rem] leading-none tracking-tight">
        Cenote <em className="italic">House</em>
      </span>
    </Link>
  );
}
