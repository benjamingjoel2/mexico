import Link from "next/link";
import Image from "next/image";
import { site } from "@/config/site";
import { images } from "@/data/images";
import { destinations, experiences, itineraries, stays, testimonials, partnerStayCounts, itinerariesFor } from "@/lib/data";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { DestinationCard } from "@/components/cards/DestinationCard";
import { ExperienceCard } from "@/components/cards/ExperienceCard";
import { ItineraryCard } from "@/components/cards/ItineraryCard";
import { StayCard } from "@/components/cards/StayCard";
import { PlannerButton } from "@/components/ui/PlannerButton";
import { BrochureForm } from "@/components/home/BrochureForm";
import { CtaBand } from "@/components/ui/CtaBand";
import { StitchBand } from "@/components/ui/TileDivider";
import { ShieldIcon, StarIcon } from "@/components/ui/icons";

const pick = <T extends { slug: string }>(list: T[], slugs: string[]) =>
  slugs.map((s) => list.find((x) => x.slug === s)).filter((x): x is T => Boolean(x));

const years = new Date().getFullYear() - site.foundedYear;

const valueProps = [
  { k: "One specialist", v: "The same person plans your trip, answers your questions and is on WhatsApp while you travel." },
  { k: `${years} years`, v: `Planning Mexico since ${site.foundedYear}. We've slept in, eaten at and tested what we recommend.` },
  { k: `${site.stats.partnerStays}+ partner stays`, v: "Haciendas, boutique hotels and lodges we know by name — and who know our guests." },
  { k: "Fair pricing", v: "You pay what you'd pay booking direct, often less, with our planning included." },
  { k: "24/7 WhatsApp", v: "A real person on the ground in Mexico, any hour, from arrival to departure." },
  { k: `${site.stats.regions} regions`, v: "From the cenotes of the Yucatán to the canyons of Chihuahua and the Baja coast." },
];

export default function HomePage() {
  const featuredDest = pick(destinations, ["mexico-city", "tulum", "oaxaca", "san-miguel-de-allende"]);
  const featuredExp = pick(experiences, ["cenotes-and-caves", "mayan-ruins", "food-and-mezcal", "day-of-the-dead", "whale-sharks-and-whales", "luxury-haciendas"]);
  const featuredTrips = pick(itineraries, ["yucatan-below-the-surface", "mexico-city-and-oaxaca", "colonial-heartland", "baja-whales-and-cabos"]);
  const featuredStays = pick(stays, ["hacienda-sac-be", "casa-de-luz-oaxaca", "mar-de-cortes-cabos", "selva-azul-tulum"]);
  const featuredReview = testimonials.find((t) => t.featured) ?? testimonials[0];

  return (
    <>
      {/* 1 · Hero */}
      <section className="relative isolate flex min-h-[calc(100svh-6.75rem)] items-end overflow-hidden bg-cenote-950 text-white">
        {/* Swap for a <video autoPlay muted loop playsInline poster=…> when you have cenote footage. */}
        <Image src={images["hero-cenote"].src} alt={images["hero-cenote"].alt} fill priority sizes="100vw" className="-z-20 animate-drift object-cover opacity-80" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-cenote-950 via-cenote-950/45 to-cenote-950/10" />
        <div className="container-x pb-10 pt-32 md:pb-14">
          <div className="max-w-3xl">
            <p className="eyebrow text-cenote-300">Tailor-made journeys through Mexico</p>
            <h1 className="mt-5 text-[3rem] leading-[1.02] sm:text-7xl lg:text-[5.6rem]">
              The Mexico <em>beneath</em> the postcard.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/85">
              Private, tailor-made trips planned by one dedicated specialist who knows the country first-hand — from
              hidden cenotes and hacienda courtyards to the kitchens of Oaxaca. Beyond the resorts, at your pace.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <PlannerButton>Start planning <span aria-hidden>→</span></PlannerButton>
              <Link href="/why-travel-with-us" className="btn btn-ghost-light">How we work <span aria-hidden>→</span></Link>
            </div>
          </div>
          <div className="mt-12 flex flex-col gap-2 border-t border-white/20 pt-5 text-sm text-white/80 sm:flex-row sm:items-center sm:gap-4">
            <span className="inline-flex items-center gap-2 font-semibold text-white"><ShieldIcon width={18} height={18} className="text-cenote-300" /> Included on every trip</span>
            <span>Private airport transfers, a local host on arrival and 24/7 WhatsApp support. <Link href="/faq" className="underline underline-offset-4 hover:text-white">See what&rsquo;s included</Link></span>
          </div>
        </div>
      </section>

      {/* 2 · Value props */}
      <section aria-label="Why travel with Cenote House" className="border-b border-sand-200 bg-paper">
        <div className="container-x grid grid-cols-2 gap-x-6 gap-y-8 py-12 md:grid-cols-3 lg:grid-cols-6">
          {valueProps.map((p) => (
            <div key={p.k}>
              <p className="font-display text-xl text-cenote-900">{p.k}</p>
              <p className="mt-1.5 text-sm leading-relaxed text-ink-soft">{p.v}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 3 · Destinations */}
      <section className="py-20 md:py-28">
        <div className="container-x">
          <SectionHeader eyebrow="Most-loved destinations" title="Where to *go*." intro="Eighteen corners of Mexico we know intimately, each one deeper than its reputation."
            link={{ label: "All destinations", href: "/destinations" }} />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {featuredDest.map((d) => <DestinationCard key={d.slug} d={d} stays={partnerStayCounts[d.slug]} />)}
          </div>
        </div>
      </section>

      {/* 4 · Experiences */}
      <section className="bg-sand-100 py-20 md:py-28">
        <div className="container-x">
          <SectionHeader eyebrow="Experiences" title="By the kind of *trip*." intro="Start with what moves you. We'll build the route around it."
            link={{ label: "All experiences", href: "/experiences" }} />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {featuredExp.map((e, i) => <ExperienceCard key={e.slug} e={e} index={i} tripCount={itinerariesFor(e.slug).length} />)}
          </div>
        </div>
      </section>

      {/* 5 · Itineraries */}
      <section className="py-20 md:py-28">
        <div className="container-x">
          <SectionHeader eyebrow="Sample itineraries" title="Our most considered *journeys*." intro="Starting points, not packages. Every one is reshaped around your dates, pace and budget."
            link={{ label: "All trips", href: "/trips" }} />
          <div className="grid gap-6 lg:grid-cols-2">
            {featuredTrips.map((it) => <ItineraryCard key={it.slug} it={it} />)}
          </div>
        </div>
      </section>

      {/* 6 · Stays */}
      <section className="bg-cenote-50 py-20 md:py-28">
        <div className="container-x">
          <SectionHeader eyebrow="Where you'll sleep" title="A curated collection of Mexico's *finest*." intro="Restored haciendas, design-led townhouses, barefoot beach hideaways and jungle lodges. Every one personally vetted." />
          <div className="grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
            {featuredStays.map((s) => <StayCard key={s.slug} s={s} />)}
          </div>
        </div>
      </section>

      {/* 7 · Why Cenote House */}
      <section className="py-20 md:py-28">
        <div className="container-x grid gap-14 lg:grid-cols-12 lg:gap-20">
          <div className="lg:col-span-6">
            <p className="eyebrow text-terra-600">Why Cenote House</p>
            <h2 className="mt-4 text-4xl text-cenote-900 sm:text-5xl">Named for the places most people <em>swim</em> past.</h2>
            <div className="mt-6 space-y-4 text-lg leading-relaxed text-ink-soft">
              <p>
                To the Maya, cenotes were gateways: openings in the limestone where the everyday world gave way to something
                older and stranger. We took our name from them because that&rsquo;s what good travel in Mexico feels like —
                one step off the obvious path and the country opens up beneath you.
              </p>
              <p>
                Every trip is planned by a single specialist who has lived and travelled here, working with family-run
                haciendas, guides and cooks we&rsquo;ve known for years. No call centres, no handoffs, no padded mark-ups.
              </p>
            </div>
            <Link href="/about" className="link-arrow mt-8 text-cenote-800">Read our story <span aria-hidden>→</span></Link>
          </div>
          {featuredReview && (
            <figure className="relative self-center rounded-3xl bg-cenote-800 p-8 text-white sm:p-12 lg:col-span-6">
              <span aria-hidden className="absolute -top-6 left-8 font-display text-[7rem] leading-none text-terra-300">&ldquo;</span>
              <div className="flex gap-0.5 text-terra-300" role="img" aria-label={`${featuredReview.rating} out of 5 stars`}>
                {Array.from({ length: featuredReview.rating }).map((_, i) => <StarIcon key={i} width={18} height={18} />)}
              </div>
              <blockquote className="mt-5 font-display text-2xl leading-snug sm:text-[1.75rem]">{featuredReview.quote}</blockquote>
              <figcaption className="mt-8 text-sm text-white/80">
                <span className="font-semibold text-white">{featuredReview.name}</span> · {featuredReview.trip}, {featuredReview.date}
                <a href={featuredReview.sourceUrl} className="mt-2 block text-cenote-300 underline underline-offset-4">Read on {featuredReview.sourceLabel} →</a>
              </figcaption>
            </figure>
          )}
        </div>
      </section>

      {/* 8 · Brochure */}
      <section id="brochure" className="scroll-mt-24 bg-cenote-900 text-white">
        <StitchBand />
        <div className="container-x grid items-center gap-12 py-20 md:grid-cols-2 md:py-24">
          <div className="relative mx-auto w-full max-w-sm">
            <div className="relative aspect-[3/4] rotate-[-3deg] overflow-hidden rounded-lg shadow-[0_40px_80px_-30px_rgba(0,0,0,.7)]">
              <Image src={images["yucatan-guide-cover"].src} alt="" fill sizes="(min-width: 768px) 380px, 80vw" className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-b from-cenote-950/70 via-transparent to-cenote-950/80" />
              <div className="absolute inset-x-0 top-0 p-7">
                <p className="eyebrow text-cenote-300">Cenote House · Free guide</p>
                <p className="mt-3 font-display text-4xl leading-none">The Yucatán <em>Guide</em></p>
              </div>
              <p className="absolute bottom-6 left-7 right-7 text-xs text-white/80">Cenotes · Haciendas · Ruins · Kitchens</p>
            </div>
          </div>
          <div>
            <p className="eyebrow text-cenote-300">Free download</p>
            <h2 className="mt-4 text-4xl sm:text-5xl">The Yucatán, <em>unfolded</em>.</h2>
            <p className="mt-5 max-w-lg text-lg text-white/80">
              Forty pages from our specialists: the cenotes worth the detour, which ruins to see at opening time, where to
              eat cochinita pibil in Mérida, and sample routes for 7, 10 and 14 nights.
            </p>
            <div className="mt-8 max-w-lg"><BrochureForm /></div>
          </div>
        </div>
      </section>

      {/* 9 · Final CTA */}
      <CtaBand />
    </>
  );
}
