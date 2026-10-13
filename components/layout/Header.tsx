"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { nav, site, whatsappHref, type NavColumn, type NavLink } from "@/config/site";
import { Logo } from "@/components/ui/Logo";
import { CurrencySwitcher } from "@/components/ui/CurrencySwitcher";
import { useUI } from "@/components/providers/UIProvider";
import { ChevronDown, CloseIcon, MenuIcon, SearchIcon, WhatsAppIcon } from "@/components/ui/icons";

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
    <header className={`sticky top-0 z-40 border-b transition-[background-color,box-shadow,border-color] duration-300 ${scrolled || open ? "border-sand-200 bg-paper/95 shadow-[0_8px_30px_-20px_rgba(8,47,51,.35)] backdrop-blur" : "border-transparent bg-paper"}`}>
      <div className="container-x flex h-[4.5rem] items-center gap-6">
        <Logo />

        <nav aria-label="Main" className="ml-6 hidden h-full lg:flex">
          <ul className="flex h-full items-center gap-1">
            {menus.map((m) => (
              <li key={m.id} className="h-full" onMouseEnter={() => enter(m.id)} onMouseLeave={leave}>
                <button
                  type="button"
                  aria-expanded={open === m.id}
                  aria-controls={`menu-${m.id}`}
                  onClick={() => setOpen(open === m.id ? null : m.id)}
                  className={`flex h-full items-center gap-1 px-3 text-[0.93rem] font-medium transition-colors ${open === m.id ? "text-terra-600" : "text-ink hover:text-terra-600"}`}
                >
                  {m.label}
                  <ChevronDown width={15} height={15} className={`transition-transform ${open === m.id ? "rotate-180" : ""}`} />
                </button>
              </li>
            ))}
            <li><Link href="/trips" className="flex h-full items-center px-3 text-[0.93rem] font-medium hover:text-terra-600">Trips</Link></li>
            <li><Link href="/blog" className="flex h-full items-center px-3 text-[0.93rem] font-medium hover:text-terra-600">Journal</Link></li>
          </ul>
        </nav>

        <div className="ml-auto flex items-center gap-2 sm:gap-3">
          <button type="button" onClick={openSearch} className="rounded-full p-2.5 text-ink hover:bg-sand-100" aria-label="Search the site">
            <SearchIcon />
          </button>
          <div className="hidden sm:block"><CurrencySwitcher /></div>
          <button type="button" onClick={openPlanner} className="btn btn-primary hidden !py-3 md:inline-flex">
            Start planning
          </button>
          <button type="button" className="rounded-full p-2.5 hover:bg-sand-100 lg:hidden" aria-label="Open menu" aria-expanded={drawer} onClick={() => setDrawer(true)}>
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
                        <Link href={l.href} className="font-display text-[1.15rem] text-cenote-900 hover:text-terra-600 hover:italic">
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

      {/* Mobile drawer */}
      <div className={`fixed inset-0 z-50 overflow-hidden lg:hidden ${drawer ? "" : "pointer-events-none"}`} inert={!drawer}>
        <div className={`absolute inset-0 bg-cenote-950/50 transition-opacity duration-300 ${drawer ? "opacity-100" : "opacity-0"}`} onClick={() => setDrawer(false)} />
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Menu"
          className={`absolute inset-y-0 right-0 flex w-full max-w-sm flex-col bg-paper shadow-2xl transition-transform duration-300 ease-out ${drawer ? "translate-x-0" : "translate-x-full"}`}
        >
          <div className="flex h-[4.5rem] items-center justify-between border-b border-sand-200 px-5">
            <Logo />
            <button type="button" onClick={() => setDrawer(false)} className="rounded-full p-2 hover:bg-sand-100" aria-label="Close menu" tabIndex={drawer ? 0 : -1}>
              <CloseIcon width={24} height={24} />
            </button>
          </div>
          <div className="flex-1 overflow-y-auto px-5 py-4">
            {menus.map((m) => (
              <MobileAccordion key={m.id} label={m.label} links={[...m.columns.flatMap((c) => c.links), m.footer].filter((l, i, a) => a.findIndex((x) => x.href === l.href) === i)} tabbable={drawer} />
            ))}
            <Link href="/trips" tabIndex={drawer ? 0 : -1} className="block border-b border-sand-200 py-4 font-display text-xl">Trips</Link>
            <Link href="/blog" tabIndex={drawer ? 0 : -1} className="block border-b border-sand-200 py-4 font-display text-xl">Journal</Link>
            <div className="mt-6 flex items-center justify-between">
              <span className="text-sm text-ink-soft">Currency</span>
              <CurrencySwitcher />
            </div>
          </div>
          <div className="space-y-3 border-t border-sand-200 p-5">
            <button type="button" tabIndex={drawer ? 0 : -1} onClick={() => { setDrawer(false); openPlanner(); }} className="btn btn-primary w-full">Start planning</button>
            <a href={whatsappHref()} tabIndex={drawer ? 0 : -1} target="_blank" rel="noopener noreferrer" className="btn btn-outline w-full text-cenote-800">
              <WhatsAppIcon /> Chat on WhatsApp
            </a>
            <p className="text-center text-xs text-ink-soft">{site.replyTime}</p>
          </div>
        </div>
      </div>
    </header>
  );
}

function MobileAccordion({ label, links, tabbable }: { label: string; links: NavLink[]; tabbable: boolean }) {
  const [expanded, setExpanded] = useState(false);
  const id = `acc-${label.toLowerCase()}`;
  return (
    <div className="border-b border-sand-200">
      <button
        type="button"
        tabIndex={tabbable ? 0 : -1}
        aria-expanded={expanded}
        aria-controls={id}
        onClick={() => setExpanded(!expanded)}
        className="flex w-full items-center justify-between py-4 text-left font-display text-xl"
      >
        {label}
        <ChevronDown className={`transition-transform ${expanded ? "rotate-180" : ""}`} />
      </button>
      <ul id={id} hidden={!expanded} className="pb-4">
        {links.map((l) => (
          <li key={l.href + l.label}>
            <Link href={l.href} className="block py-2 text-[0.98rem] text-ink-soft hover:text-terra-600">{l.label}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
