import Link from "next/link";
import { footerNav, legalLinks, site, whatsappHref } from "@/config/site";
import { Logo } from "@/components/ui/Logo";
import { StitchBand } from "@/components/ui/TileDivider";
import { MailIcon, PhoneIcon, StarIcon, WhatsAppIcon } from "@/components/ui/icons";

export function Footer() {
  return (
    <footer className="bg-cenote-950 text-cenote-100">
      <StitchBand className="!opacity-40" />
      <div className="container-x grid gap-12 py-16 lg:grid-cols-12 lg:py-20">
        <div className="lg:col-span-4">
          <Logo tone="light" />
          <p className="mt-5 max-w-sm leading-relaxed text-cenote-100/75">
            Tailor-made journeys through Mexico, planned by one specialist who knows the country first-hand. We take you
            past the resort strip to the cenotes, kitchens, markets and haciendas most visitors never find.
          </p>
          <ul className="mt-7 space-y-3 text-sm">
            <li><a href={site.contact.phoneHref} className="inline-flex items-center gap-3 hover:text-white"><PhoneIcon width={18} height={18} /> {site.contact.phone}</a></li>
            <li><a href={whatsappHref()} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 hover:text-white"><WhatsAppIcon width={18} height={18} /> WhatsApp {site.contact.whatsappNumber}</a></li>
            <li><a href={`mailto:${site.contact.email}`} className="inline-flex items-center gap-3 hover:text-white"><MailIcon width={18} height={18} /> {site.contact.email}</a></li>
          </ul>
        </div>

        <div className="grid grid-cols-2 gap-10 sm:grid-cols-3 lg:col-span-8 lg:grid-cols-5">
          {footerNav.map((col) => (
            <div key={col.heading}>
              <h2 className="eyebrow mb-4 font-sans !font-semibold !tracking-[0.18em] text-cenote-300">{col.heading}</h2>
              <ul className="space-y-2.5 text-sm">
                {col.links.map((l) => (
                  <li key={l.href}><Link href={l.href} className="text-cenote-100/80 hover:text-white">{l.label}</Link></li>
                ))}
              </ul>
            </div>
          ))}
          <div>
            <h2 className="eyebrow mb-4 font-sans !font-semibold !tracking-[0.18em] text-cenote-300">Connect</h2>
            <ul className="space-y-2.5 text-sm">
              {site.social.map((s) => (
                <li key={s.label}><a href={s.href} target="_blank" rel="noopener noreferrer" className="text-cenote-100/80 hover:text-white">{s.label}</a></li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-x flex flex-col gap-6 py-8 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-3">
            <div className="flex text-terra-300" aria-hidden>
              {Array.from({ length: 5 }).map((_, i) => <StarIcon key={i} width={16} height={16} />)}
            </div>
            <p className="text-sm"><span className="font-semibold text-white">{site.review.score}/5</span> · {site.review.count} on {site.review.platform}</p>
          </div>
          <ul className="flex flex-wrap gap-3" aria-label="Memberships">
            {site.memberships.map((m) => (
              <li key={m} className="rounded-md border border-dashed border-white/25 px-3 py-2 text-[0.7rem] uppercase tracking-wider text-cenote-100/60">{m}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-x flex flex-col gap-3 py-6 text-xs text-cenote-100/60 sm:flex-row sm:justify-between">
          <p>© {new Date().getFullYear()} {site.name}. All rights reserved. Prices are indicative and per person unless stated.</p>
          <ul className="flex gap-5">
            {legalLinks.map((l) => <li key={l.href}><Link href={l.href} className="hover:text-white">{l.label}</Link></li>)}
          </ul>
        </div>
      </div>
    </footer>
  );
}
