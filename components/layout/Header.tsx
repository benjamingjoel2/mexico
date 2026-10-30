"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { nav, site, type NavColumn, type NavLink } from "@/config/site";
import { Logo } from "@/components/ui/Logo";
import { CurrencySwitcher } from "@/components/ui/CurrencySwitcher";
import { useUI } from "@/components/providers/UIProvider";
import { ChevronDown, CloseIcon, MenuIcon, SearchIcon } from "@/components/ui/icons";

type MenuId = "destinations" | "experiences" | "about";

const menus: { id: MenuId; label: string; href: string; columns: NavColumn[]; footer: NavLink }[] = [
  { id: "destinations", label: nav.destinations.label, href: nav.destinations.href, columns: nav.destinations.columns, footer: { label: "All destinations", href: "/destinations" } },
  {
    id: "experiences", label: nav.experiences.label, href: nav.experiences.href,
    columns: [
      { heading: "By the kind of trip", links: nav.experiences.links.slice(0, 6) },
      { heading: " ", links: nav.experiences.links.slice(6) },
    ],
    footer: { label: "All experiences", href: "/experiences" },
  },
  {
    id: "about", label: nav.about.label, href: nav.about.href,
    columns: [
      { heading: "The company", links: nav.about.links.slice(0, 4) },
      { heading: "Practical", links: nav.about.links.slice(4) },
    ],
    footer: { label: "Our story", href: "/about" },
  },
];

export function Header() {
  const [open, setOpen] = useState<MenuId | null>(null);
  const [drawer, setDrawer] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { openPlanner, openSearch } = useUI();
  const pathname = usePathname();
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    setOpen(null);
    setDrawer(false);
  }, [pathname]);

  // On the homepage the header floats transparently over the cinematic hero until you scroll.
  const overlay = pathname === "/" && !scrolled && !open;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") { setOpen(null); setDrawer(false); }
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") { e.preventDefault(); openSearch(); }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [openSearch]);

  useEffect(() => {
    document.body.style.overflow = drawer ? "hidden" : "";
  }, [drawer]);

  const enter = (id: MenuId) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpen(id);
  };
  const leave = () => {
    closeTimer.current = setTimeout(() => setOpen(null), 140);
  };

  return (
    <header className={`sticky top-0 z-40 border-b transition-[background-color,box-shadow,border-color,color] duration-300 ${overlay ? "border-white/15 bg-transparent text-white" : scrolled || open ? "border-sand-200 bg-paper text-ink shadow-[0_8px_30px_-20px_rgba(8,47,51,.35)]" : "border-transparent bg-paper text-ink"}`}>
      <div className="container-x flex h-[4.5rem] items-center gap-6">
        <Logo tone={overlay ? "light" : "dark"} />

        <nav aria-label="Main" className="ml-6 hidden h-full lg:flex">
          <ul className="flex h-full items-center gap-1">
            {menus.map((m) => (
              <li key={m.id} className="h-full" onMouseEnter={() => enter(m.id)} onMouseLeave={leave}>
                <button
                  type="button"
                  aria-expanded={open === m.id}
                  aria-controls={`menu-${m.id}`}
                  onClick={() => setOpen(open === m.id ? null : m.id)}
                  className={`flex h-full items-center gap-1 px-3 text-[0.93rem] font-medium transition-colors ${open === m.id ? "text-terra-600" : overlay ? "hover:text-sand-200" : "hover:text-terra-600"}`}
                >
                  {m.label}
                  <ChevronDown width={15} height={15} className={`transition-transform ${open === m.id ? "rotate-180" : ""}`} />
                </button>
              </li>
            ))}
            <li><Link href="/trips" className={`flex h-full items-center px-3 text-[0.93rem] font-medium ${overlay ? "hover:text-sand-200" : "hover:text-terra-600"}`}>Trips</Link></li>
            <li><Link href="/blog" className={`flex h-full items-center px-3 text-[0.93rem] font-medium ${overlay ? "hover:text-sand-200" : "hover:text-terra-600"}`}>Journal</Link></li>
          </ul>
        </nav>

        <div className="ml-auto flex items-center gap-2 sm:gap-3">
          <button type="button" onClick={openSearch} className={`rounded-full p-2.5 ${overlay ? "hover:bg-white/10" : "hover:bg-sand-100"}`} aria-label="Search the site">
            <SearchIcon />
          </button>
          <div className="hidden sm:block"><CurrencySwitcher tone={overlay ? "light" : "dark"} /></div>
          <button type="button" onClick={openPlanner} className="btn btn-primary hidden !py-3 md:inline-flex">
            Start planning
          </button>
          <button type="button" className={`rounded-full p-2.5 lg:hidden ${overlay ? "hover:bg-white/10" : "hover:bg-sand-100"}`} aria-label="Open menu" aria-expanded={drawer} onClick={() => setDrawer(true)}>
            <MenuIcon width={24} height={24} />
          </button>
        </div>
      </div>

      {/* Desktop mega-menus */}
      {menus.map((m) => (
        <div
          key={m.id}
          id={`menu-${m.id}`}
          hidden={open !== m.id}
          onMouseEnter={() => enter(m.id)}
          onMouseLeave={leave}
          className="absolute inset-x-0 top-full hidden border-b border-sand-200 bg-paper shadow-[0_30px_60px_-30px_rgba(8,47,51,.35)] lg:block"
        >
          <div className="container-x grid grid-cols-12 gap-10 py-10">
            <div className={`col-span-9 grid gap-10 ${m.columns.length === 3 ? "grid-cols-3" : "grid-cols-2"}`}>
              {m.columns.map((col, idx) => (
                <div key={idx}>
                  <p className="eyebrow mb-4 text-terra-600">{col.heading}</p>
                  <ul className="space-y-2.5">
                    {col.links.map((l) => (
                      <li key={l.href + l.label}>
                        <Link href={l.href} className="font-display text-[1.15rem] text-cenote-900 hover:text-terra-600">
                          {l.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <div className="col-span-3 flex flex-col justify-between rounded-2xl bg-cenote-800 p-7 text-white">
              <div>
                <p className="eyebrow text-cenote-300">One specialist, start to finish</p>
                <p className="mt-3 font-display text-2xl leading-snug">Not sure where to <em>begin</em>?</p>
                <p className="mt-2 text-sm text-white/75">Tell us how you like to travel. We&rsquo;ll sketch a route within a day.</p>
              </div>
              <div className="mt-6 flex flex-col gap-3">
                <button type="button" onClick={() => { setOpen(null); openPlanner(); }} className="btn btn-primary">Start planning</button>
                <Link href={m.footer.href} className="link-arrow text-sm text-cenote-100">{m.footer.label} <span aria-hidden>→</span></Link>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Full-screen mobile menu */}
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Menu"
        inert={!drawer}
        className={`fixed inset-0 z-50 flex flex-col overflow-hidden bg-cenote-950 text-white transition-[opacity,transform] duration-500 ease-[cubic-bezier(.22,1,.36,1)] lg:hidden ${drawer ? "translate-y-0 opacity-100" : "pointer-events-none -translate-y-4 opacity-0"}`}
      >
        <div className="flex h-[4.5rem] shrink-0 items-center justify-between border-b border-white/10 px-5">
          <Logo tone="light" />
          <button type="button" onClick={() => setDrawer(false)} className="rounded-full p-2 hover:bg-white/10" aria-label="Close menu">
            <CloseIcon width={26} height={26} />
          </button>
        </div>
        <div className="flex-1 overflow-y-auto px-5 pb-6 pt-2">
          {menus.map((m, i) => (
            <MobileAccordion
              key={m.id}
              index={i + 1}
              label={m.label}
              links={[...m.columns.flatMap((c) => c.links), m.footer].filter((l, i, a) => a.findIndex((x) => x.href === l.href) === i)}
            />
          ))}
          {[{ label: "Trips", href: "/trips" }, { label: "Journal", href: "/blog" }].map((l, i) => (
            <Link key={l.href} href={l.href} className="flex items-baseline gap-4 border-b border-white/10 py-5 font-display text-[2rem] leading-none">
              <span className="coords !text-[0.65rem] text-cenote-300 before:content-none after:content-none">{String(menus.length + i + 1).padStart(2, "0")}</span>
              {l.label}
            </Link>
          ))}
          <div className="mt-8 flex items-center justify-between">
            <span className="eyebrow text-cenote-300">Currency</span>
            <CurrencySwitcher tone="light" />
          </div>
        </div>
        <div className="shrink-0 space-y-3 border-t border-white/10 p-5">
          <button type="button" onClick={() => { setDrawer(false); openPlanner(); }} className="btn btn-primary w-full">Start planning</button>
          <Link href="/contact" onClick={() => setDrawer(false)} className="btn btn-ghost-light w-full">
            Contact us
          </Link>
          <p className="text-center text-xs text-white/60">{site.replyTime}</p>
        </div>
      </div>
    </header>
  );
}

function MobileAccordion({ label, links, index }: { label: string; links: NavLink[]; index: number }) {
  const [expanded, setExpanded] = useState(false);
  const id = `acc-${label.toLowerCase()}`;
  return (
    <div className="border-b border-white/10">
      <button
        type="button"
        aria-expanded={expanded}
        aria-controls={id}
        onClick={() => setExpanded(!expanded)}
        className="flex w-full items-baseline gap-4 py-5 text-left font-display text-[2rem] leading-none"
      >
        <span className="coords !text-[0.65rem] text-cenote-300 before:content-none after:content-none">{String(index).padStart(2, "0")}</span>
        <span className={expanded ? "italic" : ""}>{label}</span>
        <ChevronDown className={`ml-auto self-center transition-transform ${expanded ? "rotate-180" : ""}`} />
      </button>
      <ul id={id} hidden={!expanded} className="grid grid-cols-1 gap-x-6 pb-5 pl-9 sm:grid-cols-2">
        {links.map((l) => (
          <li key={l.href + l.label}>
            <Link href={l.href} className="block py-2 text-[1rem] text-white/75 hover:text-white">{l.label}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
