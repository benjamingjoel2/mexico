import Link from "next/link";
import { notFound } from "next/navigation";
import { stays, getStay, getDestination, itineraries } from "@/lib/data";
import { pageMetadata } from "@/lib/seo";
import { PageHero } from "@/components/ui/PageHero";
import { Img } from "@/components/ui/Img";
import { Price } from "@/components/ui/Price";
import { PlannerButton } from "@/components/ui/PlannerButton";
import { StayCard } from "@/components/cards/StayCard";
import { ItineraryCard } from "@/components/cards/ItineraryCard";
import { CtaBand } from "@/components/ui/CtaBand";
import { CheckIcon } from "@/components/ui/icons";

export function generateStaticParams() {
  return stays.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const s = getStay((await params).slug);
  if (!s) return {};
  return pageMetadata({ title: s.seo.title, description: s.seo.description, path: `/stays/${s.slug}`, image: s.image });
}

export default async function StayPage({ params }: { params: Promise<{ slug: string }> }) {
  const s = getStay((await params).slug);
  if (!s) notFound();
  const dest = getDestination(s.destination);
  const trips = itineraries.filter((i) => i.days.some((d) => d.staySlug === s.slug));
  const more = stays.filter((x) => x.slug !== s.slug).slice(0, 4);

  return (
    <>
      <PageHero image={s.image} size="md" crumbs={[{ label: "Destinations", href: "/destinations" }, ...(dest ? [{ label: dest.name, href: `/destinations/${dest.slug}` }] : []), { label: s.name }]}
        eyebrow={`${s.type} · ${s.locationLabel}`} title={s.name} intro={s.summary} />

      <section className="py-16 md:py-24">
        <div className="container-x grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <div className="prose-ch">{s.description.map((p, i) => <p key={i}>{p}</p>)}</div>
            <blockquote className="mt-10 rounded-2xl bg-sand-100 p-7">
              <p className="eyebrow text-terra-600">Why we love it</p>
              <p className="mt-3 font-display text-2xl leading-snug text-cenote-900">{s.whyWeLoveIt}</p>
            </blockquote>
            <h2 className="mt-12 text-3xl text-cenote-900">The <em>details</em></h2>
            <ul className="mt-5 grid gap-3 sm:grid-cols-2">
              {s.features.map((f) => <li key={f} className="flex gap-3"><CheckIcon className="mt-0.5 shrink-0 text-cenote-600" />{f}</li>)}
            </ul>
          </div>
          <aside className="lg:col-span-4 lg:col-start-9">
            <div className="rounded-2xl border border-sand-200 bg-white p-7 lg:sticky lg:top-28">
              <p className="text-sm text-ink-soft">From</p>
              <p className="font-display text-4xl text-cenote-900"><Price usd={s.priceFromUSD} /></p>
              <p className="text-sm text-ink-soft">per person · night, two sharing</p>
              <dl className="mt-6 space-y-2 border-t border-sand-200 pt-6 text-sm">
                <div className="flex justify-between"><dt className="text-ink-soft">Type</dt><dd className="font-medium">{s.type}</dd></div>
                <div className="flex justify-between"><dt className="text-ink-soft">Rooms</dt><dd className="font-medium">{s.rooms}</dd></div>
                {dest && <div className="flex justify-between"><dt className="text-ink-soft">Destination</dt><dd><Link href={`/destinations/${dest.slug}`} className="font-medium underline underline-offset-4">{dest.name}</Link></dd></div>}
              </dl>
              <PlannerButton className="btn btn-primary mt-6 w-full">Include in my trip</PlannerButton>
              <p className="mt-4 text-xs text-ink-soft">Placeholder property for demonstration.</p>
            </div>
          </aside>
        </div>
        <div className="container-x mt-14 grid grid-cols-2 gap-4 md:grid-cols-3">
          {s.gallery.slice(0, 3).map((g) => (
            <div key={g} className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-sand-200"><Img image={g} sizes="(min-width: 768px) 33vw, 50vw" /></div>
          ))}
        </div>
      </section>

      {trips.length > 0 && (
        <section className="bg-sand-50 py-16 md:py-24">
          <div className="container-x">
            <h2 className="mb-10 text-4xl text-cenote-900">Trips featuring <em>{s.name}</em></h2>
            <div className="grid gap-6 lg:grid-cols-2">{trips.slice(0, 2).map((t) => <ItineraryCard key={t.slug} it={t} />)}</div>
          </div>
        </section>
      )}

      <section className="py-16 md:py-24">
        <div className="container-x">
          <h2 className="mb-10 text-4xl text-cenote-900">More places to <em>stay</em></h2>
          <div className="grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">{more.map((x) => <StayCard key={x.slug} s={x} />)}</div>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
