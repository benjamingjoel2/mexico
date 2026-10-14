import Link from "next/link";
import { notFound } from "next/navigation";
import { itineraries, getItinerary, getStay, destinationName, budgetLabels, getExperience } from "@/lib/data";
import { pageMetadata } from "@/lib/seo";
import { PageHero } from "@/components/ui/PageHero";
import { Price } from "@/components/ui/Price";
import { PlannerButton } from "@/components/ui/PlannerButton";
import { CtaBand } from "@/components/ui/CtaBand";
import { ItineraryCard } from "@/components/cards/ItineraryCard";
import { CheckIcon, CloseIcon, WhatsAppIcon } from "@/components/ui/icons";
import { whatsappHref, fxNote } from "@/config/site";

export function generateStaticParams() {
  return itineraries.map((i) => ({ slug: i.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const it = getItinerary((await params).slug);
  if (!it) return {};
  return pageMetadata({ title: it.seo.title, description: it.seo.description, path: `/trips/${it.slug}`, image: it.image });
}

export default async function TripPage({ params }: { params: Promise<{ slug: string }> }) {
  const it = getItinerary((await params).slug);
  if (!it) notFound();
  const others = itineraries.filter((x) => x.slug !== it.slug && x.regions.some((r) => it.regions.includes(r))).slice(0, 2);
  const fallback = others.length ? others : itineraries.filter((x) => x.slug !== it.slug).slice(0, 2);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "TouristTrip",
    name: it.title,
    description: it.summary,
    itinerary: it.days.map((d) => ({ "@type": "TouristAttraction", name: `${d.title} (${d.location})` })),
    offers: { "@type": "Offer", price: it.priceFromUSD, priceCurrency: "USD", description: "From, per person, two sharing" },
  };

  return (
    <>
      <PageHero image={it.image} crumbs={[{ label: "Trips", href: "/trips" }, { label: it.title }]} eyebrow={`${it.nights + 1} days · ${it.regionLabel}`} title={it.title} intro={it.summary} />

      <div className="container-x grid gap-12 py-16 md:py-20 lg:grid-cols-12">
        <div className="lg:col-span-8">
          {/* Key facts */}
          <dl className="grid grid-cols-2 gap-6 rounded-2xl border border-sand-200 bg-white p-6 sm:grid-cols-4">
            <div><dt className="eyebrow text-ink-soft">Duration</dt><dd className="mt-1 font-display text-xl text-cenote-900">{it.nights} nights</dd></div>
            <div><dt className="eyebrow text-ink-soft">Style</dt><dd className="mt-1 font-display text-xl text-cenote-900">{budgetLabels[it.budget]}</dd></div>
            <div className="col-span-2"><dt className="eyebrow text-ink-soft">Places</dt><dd className="mt-1 text-cenote-900">{it.destinations.map(destinationName).join(" · ")}</dd></div>
          </dl>

          <div className="mt-10">
            <h2 className="text-3xl text-cenote-900">Trip <em>highlights</em></h2>
            <ul className="mt-5 grid gap-3 sm:grid-cols-2">
              {it.highlights.map((h) => (
                <li key={h} className="flex gap-3 rounded-xl bg-sand-100 p-4"><CheckIcon className="mt-0.5 shrink-0 text-cenote-600" />{h}</li>
              ))}
            </ul>
          </div>

          {/* Day by day */}
          <div className="mt-16">
            <h2 className="text-4xl text-cenote-900">Day by <em>day</em></h2>
            <ol className="relative mt-10 border-l border-sand-300 pl-8">
              {it.days.map((d) => {
                const stay = d.staySlug ? getStay(d.staySlug) : undefined;
                return (
                  <li key={d.day + d.title} className="relative pb-12 last:pb-0">
                    <span aria-hidden className="absolute -left-[2.45rem] top-1 flex h-5 w-5 rotate-45 items-center justify-center border border-terra-500 bg-paper">
                      <span className="h-1.5 w-1.5 bg-terra-500" />
                    </span>
                    <p className="eyebrow text-terra-600">Day {d.day} · {d.location}</p>
                    <h3 className="mt-2 text-2xl text-cenote-900">{d.title}</h3>
                    <p className="mt-3 leading-relaxed text-ink-soft">{d.description}</p>
                    {(stay || d.meals) && (
                      <p className="mt-3 flex flex-wrap gap-x-6 gap-y-1 text-sm">
                        {stay && <span>Stay: <Link href={`/stays/${stay.slug}`} className="font-semibold text-cenote-800 underline underline-offset-4">{stay.name}</Link></span>}
                        {d.meals && <span className="text-ink-soft">Meals: {d.meals}</span>}
                      </p>
                    )}
                  </li>
                );
              })}
            </ol>
          </div>

          {/* Map placeholder */}
          <div className="mt-16">
            <h2 className="text-3xl text-cenote-900">The <em>route</em></h2>
            <div className="relative mt-6 flex aspect-[16/9] items-center justify-center overflow-hidden rounded-2xl border border-dashed border-sand-300 bg-cenote-50">
              <svg aria-hidden className="absolute inset-0 h-full w-full opacity-30" viewBox="0 0 400 225" preserveAspectRatio="none">
                <path d="M20 180 C 90 120, 150 200, 220 120 S 340 60, 380 40" stroke="#ad5230" strokeWidth="2" strokeDasharray="6 6" fill="none" />
              </svg>
              <div className="relative text-center">
                <p className="font-display text-2xl text-cenote-900">Map coming soon</p>
                <p className="mt-1 text-sm text-ink-soft">{it.destinations.map(destinationName).join(" → ")}</p>
                {/* TODO: embed Mapbox/Google static map from route coordinates */}
              </div>
            </div>
          </div>

          {/* Inclusions */}
          <div className="mt-16 grid gap-8 md:grid-cols-2">
            <div className="rounded-2xl bg-cenote-50 p-7">
              <h2 className="text-2xl text-cenote-900">What&rsquo;s <em>included</em></h2>
              <ul className="mt-5 space-y-3">
                {it.inclusions.map((x) => <li key={x} className="flex gap-3 text-[0.95rem]"><CheckIcon className="mt-0.5 shrink-0 text-cenote-600" />{x}</li>)}
              </ul>
            </div>
            <div className="rounded-2xl bg-sand-100 p-7">
              <h2 className="text-2xl text-cenote-900">Not <em>included</em></h2>
              <ul className="mt-5 space-y-3">
                {it.exclusions.map((x) => <li key={x} className="flex gap-3 text-[0.95rem]"><CloseIcon className="mt-0.5 shrink-0 text-terra-600" />{x}</li>)}
              </ul>
            </div>
          </div>

          {it.experiences.length > 0 && (
            <p className="mt-10 text-sm text-ink-soft">
              Experiences on this trip:{" "}
              {it.experiences.map((e, i) => {
                const exp = getExperience(e);
                return exp ? <span key={e}>{i > 0 && " · "}<Link href={`/experiences/${e}`} className="underline underline-offset-4 hover:text-terra-600">{exp.name}</Link></span> : null;
              })}
            </p>
          )}
        </div>

        {/* Pricing / enquire */}
        <aside className="lg:col-span-4">
          <div className="rounded-2xl bg-cenote-800 p-7 text-white lg:sticky lg:top-28">
            <p className="text-sm text-white/70">From</p>
            <p className="font-display text-5xl"><Price usd={it.priceFromUSD} /></p>
            <p className="mt-1 text-sm text-white/80">per person, two sharing</p>
            <p className="mt-3 text-sm text-white/70">≈ <Price usd={it.priceFromUSD} multiplier={2} /> for two · international flights excluded</p>
            <p className="mt-5 border-t border-white/15 pt-5 text-sm text-white/80">{it.inclusionLine}</p>
            <div className="mt-6 flex flex-col gap-3">
              <PlannerButton className="btn btn-primary w-full">Enquire about this trip</PlannerButton>
              <a href={whatsappHref(`Hola! I'm interested in "${it.title}".`)} target="_blank" rel="noopener noreferrer" className="btn btn-ghost-light w-full"><WhatsAppIcon width={18} height={18} /> Ask on WhatsApp</a>
            </div>
            <p className="mt-5 text-xs text-white/75">Prices vary by season and availability. {fxNote}</p>
          </div>
        </aside>
      </div>

      <section className="bg-sand-50 py-16 md:py-24">
        <div className="container-x">
          <h2 className="mb-10 text-4xl text-cenote-900">You might also <em>like</em></h2>
          <div className="grid gap-6 lg:grid-cols-2">{fallback.map((x) => <ItineraryCard key={x.slug} it={x} />)}</div>
        </div>
      </section>
      <CtaBand title="Make this trip *yours*." />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </>
  );
}
