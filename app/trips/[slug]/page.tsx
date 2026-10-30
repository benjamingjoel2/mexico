import Link from "next/link";
import { notFound } from "next/navigation";
import { itineraries, getItinerary, getStay, destinationName, budgetLabels, getExperience } from "@/lib/data";
import { pageMetadata } from "@/lib/seo";
import { PageHero } from "@/components/ui/PageHero";
import { Price } from "@/components/ui/Price";
import { PlannerButton } from "@/components/ui/PlannerButton";
import { CtaBand } from "@/components/ui/CtaBand";
import { ItineraryCard } from "@/components/cards/ItineraryCard";
import { CheckIcon, CloseIcon } from "@/components/ui/icons";
import { fxNote } from "@/config/site";

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

      <nav aria-label="On this page" className="sticky top-[4.5rem] z-20 border-b border-sand-200 bg-paper">
        <ul className="container-x no-scrollbar flex gap-6 overflow-x-auto py-3.5 text-sm font-medium">
          {[["highlights", "Highlights"], ["days", "Day by day"], ["route", "Route"], ["included", "What's included"], ["price", "Price"]].map(([id, label]) => (
            <li key={id} className="shrink-0"><a href={`#${id}`} className="text-ink-soft hover:text-terra-600">{label}</a></li>
          ))}
        </ul>
      </nav>

      <div className="container-x grid gap-12 py-16 md:py-20 lg:grid-cols-12">
        <div className="lg:col-span-8">
          {/* Key facts */}
          <dl className="grid grid-cols-2 gap-6 rounded-2xl border border-sand-200 bg-white p-6 sm:grid-cols-4">
            <div><dt className="eyebrow text-ink-soft">Duration</dt><dd className="mt-1 font-display text-xl text-cenote-900">{it.nights} nights</dd></div>
            <div><dt className="eyebrow text-ink-soft">Style</dt><dd className="mt-1 font-display text-xl text-cenote-900">{budgetLabels[it.budget]}</dd></div>
            <div className="col-span-2"><dt className="eyebrow text-ink-soft">Places</dt><dd className="mt-1 text-cenote-900">{it.destinations.map(destinationName).join(" · ")}</dd></div>
          </dl>

          <div id="highlights" className="mt-10 scroll-mt-32">
            <h2 className="text-3xl text-cenote-900">Trip <em>highlights</em></h2>
            <ul className="mt-5 grid gap-3 sm:grid-cols-2">
              {it.highlights.map((h) => (
                <li key={h} className="flex gap-3 rounded-xl bg-sand-100 p-4"><CheckIcon className="mt-0.5 shrink-0 text-cenote-600" />{h}</li>
              ))}
            </ul>
          </div>

          {/* Day by day */}
          <div id="days" className="mt-16 scroll-mt-32">
            <h2 className="text-4xl text-cenote-900">Day by <em>day</em></h2>
            <ol className="mt-10 border-t border-sand-300">
              {it.days.map((d) => {
                const stay = d.staySlug ? getStay(d.staySlug) : undefined;
                const label = d.day.split(/[–-]/).map((n) => n.trim().padStart(2, "0")).join("–");
                return (
                  <li key={d.day + d.title} className="reveal grid gap-4 border-b border-sand-300 py-9 sm:grid-cols-[8.5rem_1fr] sm:gap-8">
                    <div>
                      <span className="eyebrow block text-ink-soft">Day</span>
                      <span className={`whitespace-nowrap font-display italic leading-none text-terra-500 ${label.length > 2 ? "text-4xl" : "text-5xl"}`}>{label}</span>
                    </div>
                    <div>
                      <p className="eyebrow text-terra-600">{d.location}</p>
                      <h3 className="mt-2 text-2xl text-cenote-900">{d.title}</h3>
                      <p className="mt-3 leading-relaxed text-ink-soft">{d.description}</p>
                      {(stay || d.meals) && (
                        <p className="mt-4 flex flex-wrap gap-x-6 gap-y-1 text-sm">
                          {stay && <span>Stay: <Link href={`/stays/${stay.slug}`} className="font-semibold text-cenote-800 underline underline-offset-4">{stay.name}</Link></span>}
                          {d.meals && <span className="text-ink-soft">Meals: {d.meals}</span>}
                        </p>
                      )}
                    </div>
                  </li>
                );
              })}
            </ol>
          </div>

          {/* Map placeholder */}
          <div id="route" className="mt-16 scroll-mt-32">
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
          <div id="included" className="mt-16 grid scroll-mt-32 gap-8 md:grid-cols-2">
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
        <aside id="price" className="scroll-mt-32 lg:col-span-4">
          <div className="rounded-2xl bg-cenote-800 p-7 text-white lg:sticky lg:top-36">
            <p className="text-sm text-white/70">From</p>
            <p className="font-display text-5xl"><Price usd={it.priceFromUSD} /></p>
            <p className="mt-1 text-sm text-white/80">per person, two sharing</p>
            <p className="mt-3 text-sm text-white/70">≈ <Price usd={it.priceFromUSD} multiplier={2} /> for two · international flights excluded</p>
            <p className="mt-5 border-t border-white/15 pt-5 text-sm text-white/80">{it.inclusionLine}</p>
            <div className="mt-6 flex flex-col gap-3">
              <PlannerButton className="btn btn-primary w-full">Enquire about this trip</PlannerButton>
              <Link href="/contact" className="btn btn-ghost-light w-full">Ask a question</Link>
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
