import { testimonials } from "@/lib/data";
import { site } from "@/config/site";
import { pageMetadata } from "@/lib/seo";
import { PageHero } from "@/components/ui/PageHero";
import { TestimonialCard } from "@/components/cards/TestimonialCard";
import { CtaBand } from "@/components/ui/CtaBand";

export const metadata = pageMetadata({
  title: "Guest reviews",
  description: "Reviews from guests who travelled Mexico with Cenote House: tailor-made trips to the Yucatán, Oaxaca, Mexico City, Chiapas and Baja.",
  path: "/testimonials",
});

export default function TestimonialsPage() {
  return (
    <>
      <PageHero crumbs={[{ label: "Testimonials" }]} eyebrow={`${site.review.score}/5 on ${site.review.platform}`} title="In our guests' *words*."
        intro="Placeholder reviews shown for layout. Replace with real, consented reviews from your review platform." />
      <section className="py-16 md:py-24">
        <div className="container-x grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t) => <TestimonialCard key={t.id} t={t} />)}
        </div>
      </section>
      <CtaBand />
    </>
  );
}
