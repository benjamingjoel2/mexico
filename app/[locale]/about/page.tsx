import { emphasis } from "@/lib/emphasis";
import { setLocale, t, tf, tr } from "@/i18n/server";
import Link from "@/i18n/Link";
import { site } from "@/config/site";
import { pageMetadata } from "@/lib/seo";
import { PageHero } from "@/components/ui/PageHero";
import { Img } from "@/components/ui/Img";
import { TileDivider } from "@/components/ui/TileDivider";
import { CtaBand } from "@/components/ui/CtaBand";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  setLocale((await params).locale);
  return pageMetadata({
    title: "Our story",
    description: "Why we named a Mexico travel company after the sacred cenotes of the Yucatán — and how one specialist per trip changes the way you see the country.",
    path: "/about",
    image: "cenote-3",
  });
}

const principles = [
  { t: "Below the surface", d: "We'd rather show you one village market properly than ten sights through a coach window. Depth over distance, always." },
  { t: "One person, start to finish", d: "Your specialist plans the trip, books it, briefs you, and stays in touch while you travel. No handoffs, no call centre." },
  { t: "Known, not listed", d: "We only recommend places we've stayed in, guides we've walked with and kitchens we've eaten in — and we revisit them every year." },
  { t: "Honest advice", d: "If it's sargassum season, if a town is overrun, if a hotel has slipped, we'll say so. Even when it costs us a booking." },
];

export default async function AboutPage({ params }: { params: Promise<{ locale: string }> }) {
  setLocale((await params).locale);
  return (
    <>
      <PageHero image="cenote-3" crumbs={[{ label: "Our story" }]} eyebrow="Our story" title="Named for a *doorway*."
        intro="The Maya believed cenotes were openings to Xibalbá, the underworld — places where the surface of things gave way. We think the best of Mexico works the same way." />

      <section className="py-16 md:py-24">
        <div className="container-x grid gap-12 lg:grid-cols-12">
          <div className="prose-ch lg:col-span-7">
            <p className="font-display !text-2xl leading-snug text-cenote-900">
              {t("Cenote House began with a swim. A late-afternoon dip in a cenote outside Homún, no one else around, light falling in shafts through the roots of a ceiba tree.")}
            </p>
            <p>
              {t("It was the kind of moment that never makes the brochure — and it made us realise how much of Mexico most visitors never reach. Millions fly into Cancún every year. Most of them see the airport, a hotel corridor and a beach. A few miles inland, the country opens up: Maya towns where Yucatec is still the first language, haciendas that once shipped henequen to the world, markets where the cochinita has been in the ground since before dawn.")}
            </p>
            <p>
              {tf("We founded Cenote House in {year} to plan trips that go there. Not “off the beaten path” for the sake of it, but beneath it: the same famous places, done differently — Chichén Itzá at opening time, Oaxaca with a cook rather than a coach, Mexico City through its neighbourhoods rather than its checklists.", { year: site.foundedYear })}
            </p>
            <p>
              {t("Every trip is designed by one specialist who has lived and travelled in Mexico. They know the drivers by name, which hacienda room catches the morning light, and which cenote empties out after 3pm. That’s the whole idea: one person, deep knowledge, a country seen properly.")}
            </p>
          </div>
          <div className="lg:col-span-4 lg:col-start-9">
            <div className="relative aspect-[3/4] overflow-hidden rounded-2xl bg-sand-200"><Img image="hacienda" sizes="(min-width: 1024px) 33vw, 95vw" /></div>
          </div>
        </div>
      </section>

      <section className="bg-sand-100 py-16 md:py-24">
        <div className="container-x">
          <h2 className="text-4xl text-cenote-900 sm:text-5xl">{emphasis(t("What we *believe*"))}</h2>
          <div className="mt-12 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
            {tr(principles).map((p, i) => (
              <div key={p.t}>
                <p className="font-display text-2xl italic text-terra-500">0{i + 1}</p>
                <h3 className="mt-2 text-2xl text-cenote-900">{p.t}</h3>
                <p className="mt-2 leading-relaxed text-ink-soft">{p.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="responsible-travel" className="scroll-mt-24 bg-cenote-900 py-16 text-white md:py-24">
        <div className="container-x grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="eyebrow text-cenote-300">{t("Responsible travel")}</p>
            <h2 className="mt-4 text-4xl sm:text-5xl">{emphasis(t("Leave the water *clearer*."))}</h2>
            <p className="mt-5 text-lg text-white/80">{t("Cenotes are windows onto the Yucatán’s only freshwater source. How we travel through them — and through Mexico — matters.")}</p>
          </div>
          <ul className="grid gap-6 sm:grid-cols-2 lg:col-span-7">
            {tr([
              ["Local first", "We favour family-run hotels, community-owned cenotes and local guides, so more of your spend stays where you travel."],
              ["Water-safe swimming", "We brief every guest on cenote etiquette: shower first, no sunscreen or repellent, never touch formations."],
              ["Fair partnerships", "We pay suppliers on time and at fair rates, and never squeeze guides on price."],
              ["Fewer, longer stays", "Routes with fewer one-night stops mean fewer transfers, lower emissions and a far better trip."],
            ]).map(([title, d]) => (
              <li key={title} className="rounded-2xl bg-white/5 p-6">
                <h3 className="text-xl">{title}</h3>

                <p className="mt-2 text-sm leading-relaxed text-white/75">{d}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <div className="container-x py-12"><TileDivider /></div>
      <section className="pb-16 text-center">
        <Link href="/why-travel-with-us" className="link-arrow text-cenote-800">{t("Why travel with us")} <span aria-hidden>→</span></Link>
      </section>
      <CtaBand />
    </>
  );
}
