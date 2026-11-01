import { getLocale, setLocale, trusted } from "@/i18n/server";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/ui/PageHero";
import { legal, type LegalSet } from "@/data/legal";
import { pageMetadata } from "@/lib/seo";

const slugs = ["privacy", "terms", "cookies"] as const;
type Slug = (typeof slugs)[number];
const isSlug = (s: string): s is Slug => (slugs as readonly string[]).includes(s);

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
      <section className="container-x prose-ch legal max-w-3xl py-16">
        <p className="text-sm text-ink-soft">{d.updated}</p>
        {/* Static, trusted copy from data/legal.ts (no user input). */}
        <div dangerouslySetInnerHTML={{ __html: d.html }} />
      </section>
    </>
  );
}
