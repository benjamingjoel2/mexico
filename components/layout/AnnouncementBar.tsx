import Link from "next/link";
import { site } from "@/config/site";

export function AnnouncementBar() {
  return (
    <div className="bg-cenote-950 text-[0.78rem] text-cenote-100">
      <div className="container-x flex h-9 items-center justify-center gap-3 sm:justify-between">
        <Link href="/why-travel-with-us" className="hidden items-center gap-2 hover:text-white sm:inline-flex">
          <span aria-hidden className="inline-block h-1.5 w-1.5 rotate-45 bg-terra-300" />
          {site.tagline}
        </Link>
        <Link href="/contact" className="inline-flex items-center gap-2 hover:text-white">
          <span aria-hidden className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cenote-300 opacity-60" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-cenote-300" />
          </span>
          {site.replyTime} <span aria-hidden>→</span>
        </Link>
      </div>
    </div>
  );
}
