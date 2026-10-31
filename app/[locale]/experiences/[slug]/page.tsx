import { emphasis } from "@/lib/emphasis";
import { t, tf, setLocale } from "@/i18n/server";
import { notFound } from "next/navigation";
import { experiences, getExperience, getDestination, itinerariesFor, partnerStayCounts } from "@/lib/data";
import { pageMetadata } from "@/lib/seo";
import { PageHero } from "@/components/ui/PageHero";
import { PlannerButton } from "@/components/ui/PlannerButton";
import { DestinationCard } from "@/components/cards/DestinationCard";
import { ItineraryCard } from "@/components/cards/ItineraryCard";
import { ExperienceCard } from "@/components/cards/ExperienceCard";
import { CtaBand } from "@/components/ui/CtaBand";

export function generateStaticParams() {
  return experiences.map((e) => ({ slug: e.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string; locale: string }> }) {
  setLocale((await params).locale);
  const e = getExperience((await params).slug);
  if (!e) return {};
  return pageMetadata({ title: e.seo.title, description: e.seo.description, path: `/experiences/${e.slug}`, image: e.image });
}

export default async function ExperiencePage({ params }: { params: Promise<{ slug: string; locale: string }> }) {
  setLocale((await params).locale);
  const e = getExperience((await params).slug);
  if (!e) notFound();
  const dests = e.destinations.map(getDestination).filter((d) => d !== undefined);
  const trips = itinerariesFor(e.slug);
  const more = experiences.filter((x) => x.slug !== e.slug).slice(0, 3);

  return (
    <>
      <PageHero image={e.image} crumbs={[{ label: "Experiences", href: "/experiences" }, { label: e.name }]} eyebrow={tf("Best: {months}", { months: e.bestMonths })}
 title={e.name} intro={e.summary}>
        <div className="mt-8"><PlannerButton>{t("Plan this experience")} <span aria-hidden>→</span></PlannerButton></div>
      </PageHero>

      <section className="py-16 md:py-24">
        <div className="container-x grid gap-12 lg:grid-cols-12">
          <div className="prose-ch lg:col-span-7">{e.description.map((p, i) => <p key={i}>{p}</p>)}</div>
          <div className="lg:col-span-4 lg:col-start-9">
            <h2 className="text-3xl text-cenote-900">{emphasis(t("What to *expect*"))}</h2>
            <ul className="mt-6 space-y-6">
              {e.whatToExpect.map((w) => (
                <li key={w.title} className="border-l-2 border-terra-500 pl-5">
                  <h3 className="text-xl text-cenote-900">{w.title}</h3>
                  <p className="mt-1 text-[0.95rem] leading-relaxed text-ink-soft">{w.description}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {dests.length > 0 && (
        <section className="bg-sand-100 py-16 md:py-24">
          <div className="container-x">
            <h2 className="mb-10 text-4xl text-cenote-900">{emphasis(t("Where to do *it*"))}</h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {dests.slice(0, 4).map((d) => <DestinationCard key={d.slug} d={d} stays={partnerStayCounts[d.slug]} />)}
            </div>
          </div>
        </section>
      )}

      {trips.length > 0 && (
        <section className="py-16 md:py-24">
          <div className="container-x">
            <h2 className="mb-10 text-4xl text-cenote-900">{emphasis(t("Sample *trips*"))}</h2>
            <div className="grid gap-6 lg:grid-cols-2">{trips.map((t) => <ItineraryCard key={t.slug} it={t} />)}</div>
          </div>
        </section>
      )}

      <section className="bg-cenote-50 py-16 md:py-24">
        <div className="container-x">
          <h2 className="mb-10 text-4xl text-cenote-900">{emphasis(t("More *experiences*"))}</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {more.map((x) => <ExperienceCard key={x.slug} e={x} tripCount={itinerariesFor(x.slug).length} />)}
          </div>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
