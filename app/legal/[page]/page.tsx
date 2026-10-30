import Link from "next/link";
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

export async function generateMetadata({ params }: { params: Promise<{ page: string }> }) {
  const page = (await params).page;
  if (!isSlug(page)) return {};
  const d = legal.en[page as keyof LegalSet];
  return pageMetadata({ title: d.title, description: d.description, path: `/legal/${page}` });
}

export default async function LegalPage({ params }: { params: Promise<{ page: string }> }) {
  const page = (await params).page;
  if (!isSlug(page)) notFound();
  const d = legal.en[page];
  return (
    <>
      <PageHero crumbs={[{ label: d.title }]} title={d.title} intro={d.description} />
      <section className="container-x prose-ch max-w-3xl py-16">
        <p className="text-sm text-ink-soft">Last updated: {legalUpdated.en}</p>
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
