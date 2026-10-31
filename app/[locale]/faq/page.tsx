import { setLocale, t } from "@/i18n/server";
import { faqs } from "@/lib/data";
import type { FAQ } from "@/data/types";
import { pageMetadata } from "@/lib/seo";
import { PageHero } from "@/components/ui/PageHero";
import { FaqList } from "@/components/ui/FaqList";
import { CtaBand } from "@/components/ui/CtaBand";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  setLocale((await params).locale);
  return pageMetadata({
    title: "Mexico travel FAQ: entry, FMM, safety, seasons & money",
    description: "Mexico travel questions answered: entry rules and the FMM tourist card, safety, when to go, hurricane season, getting around, tipping and payments.",
    path: "/faq",
  });
}

const order: NonNullable<FAQ["category"]>[] = ["Before you go", "On the ground", "Money", "Booking with us"];

export default async function FaqPage({ params }: { params: Promise<{ locale: string }> }) {
  setLocale((await params).locale);
  // Categories arrive translated with the rest of the FAQ, so compare in the page's language.
  const groups = order.map((c) => t(c)).map((c) => ({ c, items: faqs.filter((f) => (f.category ?? t("Before you go")) === c) })).filter((g) => g.items.length);

  return (
    <>
      <PageHero crumbs={[{ label: "FAQ" }]} eyebrow="Good to know" title="Questions, *answered*."
        intro="The things guests ask us most. Rules change, so always double-check entry requirements with your government before you travel." />
      <section className="py-16 md:py-24">
        <div className="container-x space-y-16">
          {groups.map((g) => (
            <div key={g.c} className="grid gap-8 lg:grid-cols-12">
              <h2 className="text-3xl text-cenote-900 lg:col-span-4">{g.c}</h2>
              <div className="lg:col-span-8"><FaqList faqs={g.items} schema={false} /></div>
            </div>
          ))}
        </div>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org", "@type": "FAQPage",
          mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.question, acceptedAnswer: { "@type": "Answer", text: f.answer } })),
        }) }} />
      </section>
      <CtaBand title="Still *wondering*?" text="Ask your specialist anything — there are no silly questions about a country this big." />
    </>
  );
}
