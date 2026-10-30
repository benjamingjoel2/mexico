import { site } from "@/config/site";
import { pageMetadata } from "@/lib/seo";
import { PageHero } from "@/components/ui/PageHero";
import { CtaBand } from "@/components/ui/CtaBand";

export const metadata = pageMetadata({
  title: "Why travel with us",
  description: "One dedicated Mexico specialist, fair pricing, hand-picked partner stays and 24/7 support while you travel. Here's how planning a trip with Cenote House works.",
  path: "/why-travel-with-us",
  image: "hacienda-pool",
});

const steps = [
  ["Tell us the shape of it", "Five minutes in our planner or a quick email. Dates can be vague; ideas can be half-formed."],
  ["Meet your specialist", "One person, who knows Mexico first-hand, replies within hours. You'll talk through what you love, how you like to travel and what to avoid."],
  ["Get a first draft", "A day-by-day route with hotels, guides and honest notes on timing, priced transparently. Revise it as many times as you like."],
  ["Book with confidence", "A deposit secures everything. We handle every reservation, transfer and timing detail, and send a beautifully clear travel guide before you go."],
  ["Travel, supported", "A local host meets you on arrival. Your specialist and our Mexico team are reachable 24/7 until you're home."],
];

const promises = [
  ["One specialist", "The person who plans your trip is the person you message from the road."],
  ["Fair pricing", "You pay what you'd pay booking direct — often less, thanks to our partner rates — with planning included."],
  [`${site.stats.partnerStays}+ partner stays`, "Every hotel and hacienda personally visited, revisited and held to our standards."],
  ["24/7 support", "Real people in Mexico, any hour, while you travel."],
  ["Flexible by design", "Hurricane-season contingencies, flexible routes and clear change policies."],
];

export default function WhyPage() {
  return (
    <>
      <PageHero image="hacienda-pool" size="md" crumbs={[{ label: "Why travel with us" }]} eyebrow="How we work" title="Planned by one person who *knows*."
        intro="No packages, no call centres. Just a specialist who has lived and travelled in Mexico, building a trip around you." />
      <section className="py-16 md:py-24">
        <div className="container-x grid gap-12 lg:grid-cols-12">
          <h2 className="text-4xl text-cenote-900 sm:text-5xl lg:col-span-4">How it <em>works</em></h2>
          <ol className="space-y-10 lg:col-span-8">
            {steps.map(([t, d], i) => (
              <li key={t} className="grid gap-4 border-b border-sand-200 pb-10 sm:grid-cols-[5rem_1fr]">
                <span className="font-display text-5xl italic text-terra-500">{i + 1}</span>
                <div><h3 className="text-2xl text-cenote-900">{t}</h3><p className="mt-2 leading-relaxed text-ink-soft">{d}</p></div>
              </li>
            ))}
          </ol>
        </div>
      </section>
      <section className="bg-sand-100 py-16 md:py-24">
        <div className="container-x">
          <h2 className="text-4xl text-cenote-900 sm:text-5xl">Our <em>promises</em></h2>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {promises.map(([t, d]) => (
              <div key={t} className="rounded-2xl bg-white p-7"><h3 className="text-2xl text-cenote-900">{t}</h3><p className="mt-2 text-ink-soft">{d}</p></div>
            ))}
          </div>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
