import { emphasis } from "@/lib/emphasis";
import { getLocale, t, tf, setLocale } from "@/i18n/server";
import { localizeHref } from "@/i18n/locales";
import type { ComponentProps } from "react";
import Link from "@/i18n/Link";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { rehypeHeadingIds } from "@/lib/rehype-heading-ids";
import remarkGfm from "remark-gfm";
import { getAllPosts, getPost, headings, formatDate } from "@/lib/blog";
import { pageMetadata } from "@/lib/seo";
import { site } from "@/config/site";
import { images } from "@/data/images";
import { PageHero } from "@/components/ui/PageHero";
import { CtaBand } from "@/components/ui/CtaBand";
import { BrochureForm } from "@/components/home/BrochureForm";
import { PlannerButton } from "@/components/ui/PlannerButton";

// Internal links in posts keep the reader in their language.
const mdxComponents = {
  a: ({ href = "", ...props }: ComponentProps<"a">) =>
    href.startsWith("/") ? <Link href={href} {...props} /> : <a href={href} {...props} />,
};

export function generateStaticParams() {

  return getAllPosts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string; locale: string }> }) {
  setLocale((await params).locale);
  const post = getPost((await params).slug, getLocale());
  if (!post) return {};
  return pageMetadata({ title: post.meta.title, description: post.meta.description, path: `/blog/${post.meta.slug}`, image: post.meta.image, type: "article", publishedTime: post.meta.date });
}

export default async function PostPage({ params }: { params: Promise<{ slug: string; locale: string }> }) {
  setLocale((await params).locale);
  const locale = getLocale();
  const post = getPost((await params).slug, locale);
  if (!post) notFound();
  const { meta, content } = post;
  const toc = headings(content);
  const related = getAllPosts(locale).filter((p) => p.slug !== meta.slug).slice(0, 3);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: meta.title,
    description: meta.description,
    datePublished: meta.date,
    dateModified: meta.date,
    inLanguage: locale,
    mainEntityOfPage: `${site.url}${localizeHref(locale, `/blog/${meta.slug}`)}`,
    author: { "@type": "Organization", name: meta.author, url: site.url },
    publisher: { "@type": "Organization", name: site.name, logo: { "@type": "ImageObject", url: `${site.url}/icon.svg` } },
    image: images[meta.image]?.src,
  };

  return (
    <>
      <PageHero image={meta.image} size="md" crumbs={[{ label: "Journal", href: "/blog" }, { label: meta.title }]} eyebrow={tf("{date} · {n} min read", { date: formatDate(meta.date, locale), n: meta.readingMinutes })} title={meta.title} intro={meta.description} />
      <div className="container-x grid gap-12 py-14 md:py-20 lg:grid-cols-12">
        <aside className="order-2 lg:order-1 lg:col-span-3">
          <div className="space-y-8 lg:sticky lg:top-28">
            {toc.length > 2 && (
              <nav aria-label={t("Table of contents")} className="rounded-2xl bg-sand-100 p-6">
                <p className="eyebrow text-terra-600">{t("In this guide")}</p>
                <ol className="mt-4 max-h-[50vh] space-y-2 overflow-y-auto text-sm">
                  {toc.map((h) => <li key={h.id}><a href={`#${h.id}`} className="text-ink-soft hover:text-cenote-800">{h.text}</a></li>)}
                </ol>
              </nav>
            )}
            <div className="rounded-2xl bg-cenote-800 p-6 text-white">
              <p className="font-display text-2xl leading-snug">{emphasis(t("Want this, *planned*?"))}</p>
              <p className="mt-2 text-sm text-white/75">{t("Our specialists turn guides like this into a trip that fits you.")}</p>
              <PlannerButton className="btn btn-primary mt-5 w-full">{t("Start planning")}</PlannerButton>
            </div>
          </div>
        </aside>
        <article className="order-1 lg:order-2 lg:col-span-8 lg:col-start-5">
          <p className="mb-8 text-sm text-ink-soft">{tf("By {author}", { author: meta.author })}{meta.tags.length > 0 && <> · {meta.tags.join(", ")}</>}</p>
          <div className="prose-ch">
            <MDXRemote source={content} components={mdxComponents} options={{ mdxOptions: { remarkPlugins: [remarkGfm], rehypePlugins: [rehypeHeadingIds] } }} />
          </div>
          <div className="mt-16 rounded-2xl bg-cenote-900 p-8 text-white">
            <p className="font-display text-3xl">{emphasis(t("Get the Yucatán *Guide*, free."))}</p>
            <p className="mt-2 mb-6 text-white/75">{t("Our 40-page guide to cenotes, haciendas, ruins and kitchens.")}</p>
            <BrochureForm />
          </div>
        </article>
      </div>
      <section className="bg-sand-50 py-16 md:py-20">
        <div className="container-x">
          <h2 className="mb-10 text-4xl text-cenote-900">{emphasis(t("Keep *reading*"))}</h2>
          <ul className="grid gap-6 md:grid-cols-3">
            {related.map((p) => (
              <li key={p.slug}><Link href={`/blog/${p.slug}`} className="block h-full rounded-2xl border border-sand-200 bg-white p-7 hover:border-cenote-600">
                <p className="eyebrow text-terra-600">{tf("{n} min read", { n: p.readingMinutes })}</p>
                <p className="mt-2 font-display text-2xl text-cenote-900">{p.title}</p>
                <p className="mt-2 text-sm text-ink-soft">{p.description}</p>
              </Link></li>
            ))}
          </ul>
        </div>
      </section>
      <CtaBand />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </>
  );
}
