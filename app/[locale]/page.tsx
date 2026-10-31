import { setLocale, t, tf, trusted } from "@/i18n/server";
import { emphasis } from "@/lib/emphasis";
import Link from "@/i18n/Link";
import Image from "next/image";
import { site } from "@/config/site";
import { pageMetadata } from "@/lib/seo";
import { images } from "@/data/images";
import { destinations, experiences, itineraries, stays, partnerStayCounts, itinerariesFor } from "@/lib/data";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { DestinationCard } from "@/components/cards/DestinationCard";
import { ExperienceTile } from "@/components/cards/ExperienceTile";
import { ItineraryCard } from "@/components/cards/ItineraryCard";
import { StayHoverList } from "@/components/home/StayHoverList";
import { formatCoords, heroCoordinates } from "@/data/coordinates";
import { PlannerButton } from "@/components/ui/PlannerButton";
import { BrochureForm } from "@/components/home/BrochureForm";
import { CtaBand } from "@/components/ui/CtaBand";
import { StitchBand } from "@/components/ui/TileDivider";
import { ShieldIcon } from "@/components/ui/icons";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  setLocale((await params).locale);
  const title = `${site.name} · ${t("Tailor-made Mexico trips, below the surface")}`;
  trusted(title);
  return pageMetadata({
    title,
    description: site.description,
    path: "/",
    image: "hero-cenote",
  });
}

const pick = <T extends { slug: string }>(list: T[], slugs: string[]) =>
  slugs.map((s) => list.find((x) => x.slug === s)).filter((x): x is T => Boolean(x));

const years = new Date().getFullYear() - site.foundedYear;

const manifestoEn = [
  "Most people see Mexico from a sun lounger.",
  "We'd rather show you the *other* one.",
  "The cenote at dawn, before the coaches arrive.",
  "The kitchen behind the market stall.",
  "The hacienda with nine rooms and no sign on the gate.",
  "One specialist. One country. Planned *below* the surface.",
];

const stepsEn = [
  { t: "Tell us the shape of it", d: "Five minutes in our planner or a quick email. Half-formed ideas are welcome." },
  { t: "Meet your specialist", d: "One person who knows Mexico first-hand replies within hours, not days." },
  { t: "Shape the route together", d: "A day-by-day draft with hotels, guides and honest timing notes. Revise it as often as you like." },
  { t: "Book with one deposit", d: "We reserve every room, guide, flight and transfer, then send a clear travel guide before you go." },
  { t: "Travel, quietly supported", d: "A local host meets you on arrival and your specialist stays in touch until you're home." },
];

const valuePropsT = () => [
  { k: t("One specialist"), v: t("The same person plans your trip, answers your questions and stays in touch while you travel.") },
  { k: tf("{n} years", { n: years }), v: tf("Planning Mexico since {year}. We've slept in, eaten at and tested what we recommend.", { year: site.foundedYear }) },
  { k: tf("{n}+ partner stays", { n: site.stats.partnerStays }), v: t("Haciendas, boutique hotels and lodges we know by name — and who know our guests.") },
  { k: t("Fair pricing"), v: t("You pay what you'd pay booking direct, often less, with our planning included.") },
  { k: t("24/7 support"), v: t("A real person on the ground in Mexico, any hour, from arrival to departure.") },
  { k: tf("{n} regions", { n: site.stats.regions }), v: t("From the cenotes of the Yucatán to the canyons of Chihuahua and the Baja coast.") },
];

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  setLocale((await params).locale);
  const manifesto = manifestoEn.map(t);
  const steps = stepsEn.map((s) => ({ t: t(s.t), d: t(s.d) }));
  const valueProps = valuePropsT();
  const featuredDest = pick(destinations, ["mexico-city", "tulum", "oaxaca", "san-miguel-de-allende"]);
  const featuredExp = pick(experiences, ["cenotes-and-caves", "mayan-ruins", "food-and-mezcal", "day-of-the-dead", "whale-sharks-and-whales", "luxury-haciendas"]);
  const featuredTrips = pick(itineraries, ["yucatan-below-the-surface", "mexico-city-and-oaxaca", "colonial-heartland", "baja-whales-and-cabos"]);
  const featuredStays = pick(stays, ["hacienda-sac-be", "casa-de-luz-oaxaca", "mar-de-cortes-cabos", "selva-azul-tulum"]);

  return (
    <>
      {/* 1 · Hero: full-bleed, sits under the transparent header */}
      <section className="relative isolate -mt-[4.5rem] flex min-h-[100svh] items-end overflow-hidden bg-cenote-950 text-white">
        {/* Swap for a <video autoPlay muted loop playsInline poster=…> when you have cenote footage. */}
        <Image src={images["hero-cenote"].src} alt={t(images["hero-cenote"].alt)} fill priority sizes="100vw" className="-z-20 animate-drift object-cover opacity-85" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-cenote-950 via-cenote-950/35 to-cenote-950/55" />
        <p className="coords absolute right-5 top-28 hidden text-white/75 sm:block md:right-10">{formatCoords(heroCoordinates)}</p>
        <div className="container-x pb-10 pt-40 md:pb-12">
          <div className="max-w-4xl">
            <p className="eyebrow text-cenote-300">{t("Tailor-made journeys through Mexico")}</p>
            <h1 className="mt-5 text-[3.2rem] leading-[0.98] sm:text-7xl lg:text-[6.4rem]">
              {emphasis(t("The Mexico *beneath* the postcard."))}
            </h1>
            <p className="mt-7 max-w-xl text-lg leading-relaxed text-white/85">
              {t("Private, tailor-made trips planned by one dedicated specialist who knows the country first-hand, from hidden cenotes and hacienda courtyards to the kitchens of Oaxaca. Beyond the resorts, at your pace.")}
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <PlannerButton>{t("Start planning")} <span aria-hidden>→</span></PlannerButton>
              <Link href="/why-travel-with-us" className="btn btn-ghost-light">{t("How we work")} <span aria-hidden>→</span></Link>
            </div>
          </div>
          <div className="mt-14 grid gap-4 border-t border-white/20 pt-5 text-sm text-white/80 md:grid-cols-[1fr_auto] md:items-center">
            <p className="flex flex-col gap-1 sm:flex-row sm:items-center sm:gap-4">
              <span className="inline-flex items-center gap-2 font-semibold text-white"><ShieldIcon width={18} height={18} className="text-cenote-300" /> {t("Included on every trip")}</span>
              <span>{t("Private airport transfers, a local host on arrival and 24/7 support while you travel.")} <Link href="/faq" className="underline underline-offset-4 hover:text-white">{t("See what’s included")}</Link></span>
            </p>
            <a href="#manifesto" className="hidden items-center gap-3 text-xs uppercase tracking-[0.2em] text-white/70 hover:text-white md:inline-flex">
              {t("Scroll")} <span aria-hidden className="scroll-cue inline-block">↓</span>
            </a>
          </div>
        </div>
      </section>

      {/* 2 · Value props */}
      <section aria-label={t("Why travel with Cenote House")} className="border-b border-sand-200 bg-paper">
        <ol className="container-x grid grid-cols-2 gap-x-6 gap-y-10 py-14 md:grid-cols-3 lg:grid-cols-6">
          {valueProps.map((p, i) => (
            <li key={p.k} className="reveal">
              <span className="coords text-terra-600 before:content-none after:content-none">{String(i + 1).padStart(2, "0")}</span>
              <hr className="rule-dashed my-3 text-cenote-900" />
              <p className="font-display text-xl text-cenote-900">{p.k}</p>
              <p className="mt-1.5 text-sm leading-relaxed text-ink-soft">{p.v}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* Manifesto: line-by-line reveal */}
      <section id="manifesto" aria-label={t("What we believe")} className="scroll-mt-20 bg-sand-100 py-24 md:py-36">
        <div className="container-x">
          <p className="eyebrow mb-10 text-terra-600">{t("Below the surface")}</p>
          <div className="max-w-5xl space-y-3 font-display text-[2.1rem] leading-[1.12] text-cenote-900 sm:text-5xl lg:text-[3.6rem]">
            {manifesto.map((line) => (
              <p key={line} className="reveal-line">
                {line.split(/(\*[^*]+\*)/g).map((part, i) => (part.startsWith("*") ? <em key={i} className="italic text-terra-600">{part.slice(1, -1)}</em> : part))}
              </p>
            ))}
          </div>
          <Link href="/about" className="link-arrow mt-12 text-cenote-800">{t("Read our story")} <span aria-hidden>→</span></Link>
        </div>
      </section>

      {/* 3 · Destinations */}
      <section className="py-20 md:py-28">
        <div className="container-x">
          <div className="reveal"><SectionHeader eyebrow="Most-loved destinations" title="Where to *go*." intro="Eighteen corners of Mexico we know intimately, each one deeper than its reputation."
            link={{ label: "All destinations", href: "/destinations" }} /></div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {featuredDest.map((d) => <div key={d.slug} className="reveal"><DestinationCard d={d} stays={partnerStayCounts[d.slug]} /></div>)}
          </div>
        </div>
      </section>

      {/* 4 · Experiences: indexed tiles */}
      <section className="bg-paper pb-20 md:pb-28">
        <div className="container-x">
          <div className="reveal"><SectionHeader eyebrow="Experiences" title="By the kind of *trip*." intro="Start with what moves you. We'll build the route around it."
            link={{ label: "All experiences", href: "/experiences" }} /></div>
          <div className="grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {featuredExp.map((e, i) => <div key={e.slug} className="reveal"><ExperienceTile e={e} index={i + 1} tripCount={itinerariesFor(e.slug).length} /></div>)}
          </div>
        </div>
      </section>

      {/* 5 · Itineraries */}
      <section className="bg-sand-50 py-20 md:py-28">
        <div className="container-x">
          <div className="reveal"><SectionHeader eyebrow="Sample itineraries" title="Our most considered *journeys*." intro="Starting points, not packages. Every one is reshaped around your dates, pace and budget."
            link={{ label: "All trips", href: "/trips" }} /></div>
          <div className="grid gap-6 lg:grid-cols-2">
            {featuredTrips.map((it) => <div key={it.slug} className="reveal"><ItineraryCard it={it} /></div>)}
          </div>
        </div>
      </section>

      {/* 6 · Stays: hover list */}
      <section className="py-20 md:py-28">
        <div className="container-x">
          <div className="reveal"><SectionHeader eyebrow="Where you'll sleep" title="A curated collection of Mexico's *finest*." intro="Restored haciendas, design-led townhouses, barefoot beach hideaways and jungle lodges. Every one personally vetted." /></div>
          <StayHoverList stays={featuredStays} />
        </div>
      </section>

      {/* 7 · Why Cenote House */}
      <section className="bg-cenote-900 py-20 text-white md:py-28">
        <div className="container-x grid gap-14 lg:grid-cols-12 lg:gap-20">
          <div className="reveal lg:col-span-7">
            <p className="eyebrow text-cenote-300">{t("Why Cenote House")}</p>
            <h2 className="mt-4 text-4xl sm:text-5xl lg:text-6xl">{emphasis(t("Named for the places most people *swim* past."))}</h2>
            <div className="mt-7 max-w-2xl space-y-4 text-lg leading-relaxed text-white/80">
              <p>
                {t("To the Maya, cenotes were gateways: openings in the limestone where the everyday world gave way to something older and stranger. We took our name from them because that’s what good travel in Mexico feels like: one step off the obvious path and the country opens up beneath you.")}
              </p>
              <p>
                {t("Every trip is planned by a single specialist who has lived and travelled here, working with family-run haciendas, guides and cooks we’ve known for years. No call centres, no handoffs, no padded mark-ups.")}
              </p>
            </div>
            <Link href="/about" className="link-arrow mt-8 text-cenote-100">{t("Read our story")} <span aria-hidden>→</span></Link>
          </div>
          <dl className="grid grid-cols-2 gap-x-8 gap-y-10 self-end lg:col-span-5">
            {[
              [`${years}`, t("years planning Mexico")],
              [`${site.stats.partnerStays}+`, t("partner stays, all visited")],
              [`${site.stats.regions}`, t("regions, coast to canyon")],
              ["24/7", t("support while you travel")],
            ].map(([n, l]) => (
              <div key={l} className="reveal border-t border-white/20 pt-4">
                <dt className="sr-only">{l}</dt>
                <dd className="font-display text-5xl leading-none text-white sm:text-6xl">{n}</dd>
                <dd className="mt-2 text-sm text-white/70">{l}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>


      {/* How it works */}
      <section aria-labelledby="how-it-works" className="py-20 md:py-28">
        <div className="container-x">
          <div className="reveal mb-14 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <p className="eyebrow text-terra-600">{t("How it works")}</p>
              <h2 id="how-it-works" className="mt-4 text-[2.4rem] text-cenote-900 sm:text-5xl lg:text-[3.6rem]">{emphasis(t("From first idea to *home* again."))}</h2>
            </div>
            <PlannerButton className="btn btn-dark">{t("Start step one")} <span aria-hidden>→</span></PlannerButton>
          </div>
          <ol className="grid gap-10 md:grid-cols-5 md:gap-6">
            {steps.map((st, i) => (
              <li key={st.t} className="reveal relative">
                <span className="font-display text-6xl italic leading-none text-terra-500">{String(i + 1).padStart(2, "0")}</span>
                <hr className="rule-dashed my-5 text-cenote-900" />
                <h3 className="text-xl text-cenote-900">{st.t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">{st.d}</p>
              </li>
            ))}
          </ol>
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
                <p className="eyebrow text-cenote-300">{t("Cenote House · Free guide")}</p>
                <p className="mt-3 font-display text-4xl leading-none">{emphasis(t("The Yucatán *Guide*"))}</p>
              </div>
              <p className="absolute bottom-6 left-7 right-7 text-xs text-white/80">{t("Cenotes · Haciendas · Ruins · Kitchens")}</p>
            </div>
          </div>
          <div>
            <p className="eyebrow text-cenote-300">{t("Free download")}</p>
            <h2 className="mt-4 text-4xl sm:text-5xl">{emphasis(t("The Yucatán, *unfolded*."))}</h2>
            <p className="mt-5 max-w-lg text-lg text-white/80">
              {t("Forty pages from our specialists: the cenotes worth the detour, which ruins to see at opening time, where to eat cochinita pibil in Mérida, and sample routes for 7, 10 and 14 nights.")}
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
