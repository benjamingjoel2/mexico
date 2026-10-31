import Link from "@/i18n/Link";
import { site } from "@/config/site";
import { getLocale, t } from "@/i18n/server";
import { localizeHref } from "@/i18n/locales";

export interface Crumb { label: string; href?: string }

export function Breadcrumbs({ items, tone = "dark" }: { items: Crumb[]; tone?: "dark" | "light" }) {
  const all = [{ label: "Home", href: "/" }, ...items].map((c) => ({ ...c, label: t(c.label) }));
  const locale = getLocale();
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: all.map((c, i) => ({ "@type": "ListItem", position: i + 1, name: c.label, item: c.href ? `${site.url}${localizeHref(locale, c.href)}` : undefined })),
  };
  return (
    <nav aria-label={t("Breadcrumb")}
 className={`text-sm ${tone === "light" ? "text-white/70" : "text-ink-soft"}`}>
      <ol className="flex flex-wrap items-center gap-2">
        {all.map((c, i) => (
          <li key={i} className="flex items-center gap-2">
            {i > 0 && <span aria-hidden>/</span>}
            {c.href && i < all.length - 1 ? (
              <Link href={c.href} className={tone === "light" ? "hover:text-white" : "hover:text-cenote-800"}>{c.label}</Link>
            ) : (
              <span aria-current="page">{c.label}</span>
            )}
          </li>
        ))}
      </ol>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </nav>
  );
}
