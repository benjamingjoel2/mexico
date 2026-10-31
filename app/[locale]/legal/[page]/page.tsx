import { getLocale, setLocale, t, trusted } from "@/i18n/server";
import Link from "@/i18n/Link";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/ui/PageHero";
import { legal, legalUpdated, type LegalSet } from "@/data/legal";
import { pageMetadata } from "@/lib/seo";

const slugs = ["privacy", "terms", "cookies"] as const;
type Slug = (typeof slugs)[number];
const isSlug = (s: string): s is Slug => (slugs as readonly string[]).includes(s);

/** Renders "[text](/path)" inside legal text as links. */
function linkify(text: string) {
  return text.split(/(\[[^\]]+\]\(\/[^)]*\))/g).map((part, i) => {
    const m = part.match(/^\[([^\]]+)\]\((\/[^)]*)\)$/);
    if (!m) return part;
    const href = m[2] === "/cookies/" ? "/legal/cookies" : m[2].replace(/\/$/, "");
    return <Link key={i} href={href} className="underline underline-offset-4">{m[1]}</Link>;
  });
}

export function generateStaticParams() {
  return slugs.map((page) => ({ page }));
}

export async function generateMetadata({ params }: { params: Promise<{ page: string; locale: string }> }) {
  setLocale((await params).locale);
  const page = (await params).page;
  if (!isSlug(page)) return {};
  const d = legal[getLocale()][page as keyof LegalSet];
  trusted(d.title, d.description);
  return pageMetadata({ title: d.title, description: d.description, path: `/legal/${page}` });
}

export default async function LegalPage({ params }: { params: Promise<{ page: string; locale: string }> }) {
  setLocale((await params).locale);
  const page = (await params).page;
  if (!isSlug(page)) notFound();
  const locale = getLocale();
  const d = legal[locale][page];
  trusted(d.title, d.description);
  return (
    <>
      <PageHero crumbs={[{ label: d.title }]} title={d.title} intro={d.description} />
      <section className="container-x prose-ch max-w-3xl py-16">
        <p className="text-sm text-ink-soft">{t("Last updated:")} {legalUpdated[locale]}</p>

        {d.sections.map((s) => (
          <div key={s.h}>
            <h2>{s.h}</h2>
            {s.p.map((p, i) => <p key={i}>{linkify(p)}</p>)}
          </div>
        ))}
      </section>
    </>
  );
}
