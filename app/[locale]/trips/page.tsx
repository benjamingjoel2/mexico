import { setLocale } from "@/i18n/server";
import { itineraries, regionLabels, budgetLabels } from "@/lib/data";
import { pageMetadata } from "@/lib/seo";
import { PageHero } from "@/components/ui/PageHero";
import { TripFilters } from "@/components/trips/TripFilters";
import { CtaBand } from "@/components/ui/CtaBand";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  setLocale((await params).locale);
  return pageMetadata({
    title: "Mexico trips & sample itineraries",
    description: "Tailor-made Mexico itineraries from 8 to 14 nights: the Yucatán's cenotes, Mexico City and Oaxaca, the colonial heartland, Baja's whales and the Copper Canyon.",
    path: "/trips",
    image: "cenote-2",
  });
}

export default async function TripsPage({ params }: { params: Promise<{ locale: string }> }) {
  setLocale((await params).locale);
  return (
    <>
      <PageHero
        crumbs={[{ label: "Trips" }]}
        eyebrow="Sample itineraries"
        title="Journeys to start a *conversation*."
        intro="These are routes we love, priced honestly. Treat them as a first draft: your specialist will reshape every day around your dates, pace and interests."
      />
      <TripFilters trips={[...itineraries]} regionLabels={{ ...regionLabels }} budgetLabels={{ ...budgetLabels }} />

      <CtaBand />
    </>
  );
}
