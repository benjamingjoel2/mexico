import { setLocale, t, tf } from "@/i18n/server";
import Link from "@/i18n/Link";
import { experiences, itinerariesFor, destinationName } from "@/lib/data";
import { pageMetadata } from "@/lib/seo";
import { PageHero } from "@/components/ui/PageHero";
import { Img } from "@/components/ui/Img";
import { CtaBand } from "@/components/ui/CtaBand";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  setLocale((await params).locale);
  return pageMetadata({
    title: "Mexico experiences: cenotes, ruins, food, whales & more",
    description: "Build a Mexico trip around what moves you: cenotes and caves, Mayan ruins, mezcal and food journeys, Day of the Dead, whale sharks, monarchs and more.",
    path: "/experiences",
    image: "cenote-swim",
  });
}

export default async function ExperiencesPage({ params }: { params: Promise<{ locale: string }> }) {
  setLocale((await params).locale);
  return (
    <>
      <PageHero image="cenote-swim" size="md" crumbs={[{ label: "Experiences" }]} eyebrow="Experiences" title="By the kind of *trip*."
        intro="Some people arrive with a list of places. Others arrive with a feeling they want to chase. Start here and we'll build the route around it." />
      <section className="py-16 md:py-24">
        <div className="container-x grid gap-x-6 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
          {experiences.map((e) => {
            const n = itinerariesFor(e.slug).length;
            return (
              <article key={e.slug} className="group">
                <Link href={`/experiences/${e.slug}`} className="block">
                  <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-sand-200">
                    <Img image={e.image} sizes="(min-width: 1024px) 30vw, (min-width: 640px) 50vw, 95vw" className="transition-transform duration-[1.2s] group-hover:scale-[1.05]" />
                  </div>
                  <h2 className="mt-5 text-[1.9rem] text-cenote-900 group-hover:text-terra-600">{e.name}</h2>
                </Link>
                <p className="mt-2 leading-relaxed text-ink-soft">{e.summary}</p>
                <p className="mt-3 text-sm text-ink-soft">{e.destinations.slice(0, 4).map(destinationName).join(" · ")}</p>
                <p className="mt-3 text-sm font-semibold text-cenote-800">{t("Best:")} {e.bestMonths} · {n ? tf(n === 1 ? "{n} sample trip" : "{n} sample trips", { n }) : t("Tailor-made")}</p>

              </article>
            );
          })}
        </div>
      </section>
      <CtaBand />
    </>
  );
}
