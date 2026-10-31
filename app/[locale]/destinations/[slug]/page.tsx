import { emphasis } from "@/lib/emphasis";
import { t, tf, setLocale } from "@/i18n/server";
import Link from "@/i18n/Link";
import { notFound } from "next/navigation";
import { destinations, getDestination, itinerariesIn, staysIn, partnerStayCounts } from "@/lib/data";
import { pageMetadata } from "@/lib/seo";
import { site } from "@/config/site";
import { images } from "@/data/images";
import { coordsFor } from "@/data/coordinates";
import { getLocale } from "@/i18n/server";
import { localizeHref } from "@/i18n/locales";
import { PageHero } from "@/components/ui/PageHero";
import { Img } from "@/components/ui/Img";
import { MonthGrid } from "@/components/ui/MonthGrid";
import { FaqList } from "@/components/ui/FaqList";
import { CtaBand } from "@/components/ui/CtaBand";
import { StayCard } from "@/components/cards/StayCard";
import { ItineraryCard } from "@/components/cards/ItineraryCard";
import { DestinationCard } from "@/components/cards/DestinationCard";
import { PlannerButton } from "@/components/ui/PlannerButton";

export function generateStaticParams() {
  return destinations.map((d) => ({ slug: d.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string; locale: string }> }) {
  setLocale((await params).locale);
  const d = getDestination((await params).slug);
  if (!d) return {};
  return pageMetadata({ title: d.seo.title, description: d.seo.description, path: `/destinations/${d.slug}`, image: d.image });
}

export default async function DestinationPage({ params }: { params: Promise<{ slug: string; locale: string }> }) {
  setLocale((await params).locale);
  const d = getDestination((await params).slug);
  if (!d) notFound();

  const localStays = staysIn(d.slug);
  const trips = itinerariesIn(d.slug);
  const nearby = destinations.filter((x) => x.region === d.region && x.slug !== d.slug).slice(0, 4);
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "TouristDestination",
    name: d.name,
    description: d.seo.description,
    url: `${site.url}${localizeHref(getLocale(), `/destinations/${d.slug}`)}`,
    image: images[d.image]?.src,
    containedInPlace: { "@type": "Country", name: "Mexico" },
    touristType: d.bestFor,
    includesAttraction: d.highlights.map((h) => ({ "@type": "TouristAttraction", name: h.title, description: h.description })),
  };
  const sections = [
    ["overview", "Overview"], ["when-to-go", "When to go"], ["highlights", "Highlights"], ["things-to-do", "Things to do"],
    ["tips", "Practical tips"], ...(localStays.length ? [["stays", "Where to stay"]] : []), ...(trips.length ? [["trips", "Trips"]] : []), ["faq", "FAQ"],
  ];

  return (
    <>
      <PageHero image={d.image} coords={coordsFor(d.slug)} crumbs={[{ label: "Destinations", href: "/destinations" }, { label: d.name }]} eyebrow={d.regionLabel} title={d.name} intro={d.hook}>
        <div className="mt-8 flex flex-wrap gap-3">
          <PlannerButton>{tf("Plan a trip to {name}", { name: d.name })} <span aria-hidden>→</span></PlannerButton>
        </div>
      </PageHero>

      {/* In-page nav */}
      <nav aria-label={t("On this page")} className="sticky top-[4.5rem] z-20 border-b border-sand-200 bg-paper/95 backdrop-blur">
        <ul className="container-x no-scrollbar flex gap-6 overflow-x-auto py-3.5 text-sm font-medium">
          {sections.map(([id, label]) => (
            <li key={id} className="shrink-0"><a href={`#${id}`} className="text-ink-soft hover:text-terra-600">{t(label)}</a></li>
          ))}
        </ul>
      </nav>

      <section id="overview" className="scroll-mt-32 py-16 md:py-24">
        <div className="container-x grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <h2 className="text-4xl text-cenote-900 sm:text-5xl">{emphasis(tf("Why we love *{name}*", { name: d.name }))}</h2>
            <div className="prose-ch mt-8">{d.overview.map((p, i) => <p key={i}>{p}</p>)}</div>
          </div>
          <aside className="lg:col-span-4 lg:col-start-9">
            <div className="rounded-2xl bg-sand-100 p-7 lg:sticky lg:top-36">
              <dl className="space-y-5">
                <div><dt className="eyebrow text-terra-600">{t("Best for")}</dt><dd className="mt-1.5 text-cenote-900">{d.bestFor}</dd></div>
                <div><dt className="eyebrow text-terra-600">{t("Key highlights")}</dt><dd className="mt-1.5 text-cenote-900">{d.keyHighlights}</dd></div>
                <div><dt className="eyebrow text-terra-600">{t("When to go")}</dt><dd className="mt-1.5 text-cenote-900">{d.bestTime.summary}</dd></div>
                <div><dt className="eyebrow text-terra-600">{t("Partner stays")}</dt><dd className="mt-1.5 text-cenote-900">{tf("{n} hand-picked hotels, haciendas and lodges", { n: partnerStayCounts[d.slug] })}</dd></div>
              </dl>
              <PlannerButton className="btn btn-dark mt-7 w-full">{t("Start planning")}</PlannerButton>
            </div>
          </aside>
        </div>
        {d.gallery.length > 0 && (
          <div className="container-x mt-14 grid grid-cols-2 gap-4 md:grid-cols-3">
            {d.gallery.slice(0, 3).map((g, i) => (
              <div key={g} className={`relative overflow-hidden rounded-2xl bg-sand-200 ${i === 0 ? "col-span-2 aspect-[16/10] md:col-span-1 md:aspect-[4/5]" : "aspect-[4/5]"}`}>
                <Img image={g} sizes="(min-width: 768px) 33vw, 50vw" />
              </div>
            ))}
          </div>
        )}
      </section>

      <section id="when-to-go" className="scroll-mt-32 bg-cenote-50 py-16 md:py-24">
        <div className="container-x">
          <h2 className="text-4xl text-cenote-900 sm:text-5xl">{emphasis(t("When to *go*"))}</h2>
          <p className="mt-4 max-w-2xl text-lg text-ink-soft">{d.bestTime.summary}</p>
          <div className="mt-10"><MonthGrid months={d.bestTime.months} hurricaneSeason={d.hurricaneSeason} /></div>
        </div>
      </section>

      <section id="highlights" className="scroll-mt-32 py-16 md:py-24">
        <div className="container-x">
          <h2 className="text-4xl text-cenote-900 sm:text-5xl">{emphasis(t("The *highlights*"))}</h2>
          <ol className="mt-12 grid gap-x-12 gap-y-10 md:grid-cols-2">
            {d.highlights.map((h, i) => (
              <li key={h.title} className="flex gap-5">
                <span className="font-display text-3xl italic text-terra-500">{i + 1}</span>
                <div>
                  <h3 className="text-2xl text-cenote-900">{h.title}</h3>
                  <p className="mt-2 leading-relaxed text-ink-soft">{h.description}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section id="things-to-do" className="scroll-mt-32 bg-sand-100 py-16 md:py-24">
        <div className="container-x">
          <h2 className="text-4xl text-cenote-900 sm:text-5xl">{emphasis(t("Things to *do*"))}</h2>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {d.thingsToDo.map((t) => (
              <div key={t.title} className="rounded-2xl border border-sand-200 bg-white p-7">
                <h3 className="text-xl text-cenote-900">{t.title}</h3>
                <p className="mt-2 text-[0.95rem] leading-relaxed text-ink-soft">{t.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="tips" className="scroll-mt-32 py-16 md:py-24">
        <div className="container-x grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <h2 className="text-4xl text-cenote-900 sm:text-5xl">{emphasis(t("Practical *tips*"))}</h2>
            <p className="mt-4 text-ink-soft">{t("The things we tell our own friends before they go.")}</p>
          </div>
          <dl className="divide-y divide-sand-200 border-y border-sand-200 lg:col-span-8">
            {d.practicalTips.map((t) => (
              <div key={t.title} className="grid gap-2 py-6 sm:grid-cols-3 sm:gap-8">
                <dt className="font-display text-xl text-cenote-900">{t.title}</dt>
                <dd className="leading-relaxed text-ink-soft sm:col-span-2">{t.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {localStays.length > 0 && (
        <section id="stays" className="scroll-mt-32 bg-cenote-50 py-16 md:py-24">
          <div className="container-x">
            <h2 className="text-4xl text-cenote-900 sm:text-5xl">{emphasis(t("Where to *stay*"))}</h2>
            <p className="mt-4 max-w-2xl text-ink-soft">{tf("A taste of the {n} places we work with in and around {name}.", { n: partnerStayCounts[d.slug], name: d.name })}</p>
            <div className="mt-12 grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
              {localStays.map((s) => <StayCard key={s.slug} s={s} />)}
            </div>
          </div>
        </section>
      )}

      {trips.length > 0 && (
        <section id="trips" className="scroll-mt-32 py-16 md:py-24">
          <div className="container-x">
            <h2 className="text-4xl text-cenote-900 sm:text-5xl">{emphasis(tf("Trips that include *{name}*", { name: d.name }))}</h2>
            <div className="mt-12 grid gap-6 lg:grid-cols-2">
              {trips.slice(0, 4).map((it) => <ItineraryCard key={it.slug} it={it} />)}
            </div>
          </div>
        </section>
      )}

      <section id="faq" className="scroll-mt-32 bg-sand-50 py-16 md:py-24">
        <div className="container-x grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <h2 className="text-4xl text-cenote-900 sm:text-5xl">{emphasis(tf("{name} *FAQ*", { name: d.name }))}</h2>
            <p className="mt-4 text-ink-soft">{t("More questions?")} <Link href="/faq" className="underline">{t("See our general FAQ")}</Link> {t("or ask your specialist.")}</p>
          </div>
          <div className="lg:col-span-8"><FaqList faqs={d.faqs} /></div>
        </div>
      </section>

      {nearby.length > 0 && (
        <section className="py-16 md:py-24">
          <div className="container-x">
            <h2 className="mb-10 text-4xl text-cenote-900">{emphasis(t("Pair it *with*"))}</h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {nearby.map((x) => <DestinationCard key={x.slug} d={x} stays={partnerStayCounts[x.slug]} />)}
            </div>
          </div>
        </section>
      )}

      <CtaBand title={tf("Your {name}, *unhurried*.", { name: d.name })} />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </>
  );
}
