import Link from "next/link";
import { getAllPosts, formatDate } from "@/lib/blog";
import { pageMetadata } from "@/lib/seo";
import { PageHero } from "@/components/ui/PageHero";
import { Img } from "@/components/ui/Img";
import { CtaBand } from "@/components/ui/CtaBand";

export const metadata = pageMetadata({
  title: "The Journal: Mexico travel guides & stories",
  description: "First-hand Mexico travel guides from Cenote House specialists: where to go, the best cenotes, Mexico City for first-timers and when to visit.",
  path: "/blog",
});

export default function BlogIndex() {
  const [lead, ...rest] = getAllPosts();
  return (
    <>
      <PageHero crumbs={[{ label: "Journal" }]} eyebrow="The Cenote House Journal" title="Notes from below the *surface*."
        intro="Guides, opinions and hard-won tips from the people who plan our trips — written from the road, not from a desk." />
      <section className="py-16 md:py-24">
        <div className="container-x">
          {lead && (
            <Link href={`/blog/${lead.slug}`} className="group grid items-center gap-8 lg:grid-cols-12">
              <div className="relative aspect-[16/10] overflow-hidden rounded-2xl bg-sand-200 lg:col-span-7">
                <Img image={lead.image} sizes="(min-width: 1024px) 58vw, 95vw" priority className="transition-transform duration-[1.2s] group-hover:scale-[1.03]" />
              </div>
              <div className="lg:col-span-5">
                <p className="eyebrow text-terra-600">Featured guide · {lead.readingMinutes} min read</p>
                <h2 className="mt-3 text-4xl text-cenote-900 group-hover:text-terra-600 sm:text-5xl">{lead.title}</h2>
                <p className="mt-4 text-lg text-ink-soft">{lead.description}</p>
                <p className="mt-4 text-sm text-ink-soft">{formatDate(lead.date)} · {lead.author}</p>
              </div>
            </Link>
          )}
          <div className="mt-20 grid gap-x-6 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
            {rest.map((p) => (
              <Link key={p.slug} href={`/blog/${p.slug}`} className="group">
                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-sand-200">
                  <Img image={p.image} sizes="(min-width: 1024px) 30vw, (min-width: 640px) 50vw, 95vw" className="transition-transform duration-[1.2s] group-hover:scale-[1.05]" />
                </div>
                <p className="eyebrow mt-5 text-terra-600">{p.tags[0] ?? "Guide"} · {p.readingMinutes} min</p>
                <h2 className="mt-2 text-2xl text-cenote-900 group-hover:text-terra-600">{p.title}</h2>
                <p className="mt-2 text-[0.95rem] text-ink-soft">{p.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
