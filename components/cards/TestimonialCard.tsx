import type { Testimonial } from "@/data/types";
import { StarIcon } from "@/components/ui/icons";

export function TestimonialCard({ t }: { t: Testimonial }) {
  return (
    <figure className="flex h-full flex-col rounded-2xl border border-sand-200 bg-white p-7">
      <div className="flex gap-0.5 text-terra-500" role="img" aria-label={`${t.rating} out of 5 stars`}>
        {Array.from({ length: t.rating }).map((_, i) => <StarIcon key={i} width={16} height={16} />)}
      </div>
      <blockquote className="mt-4 flex-1 font-display text-[1.2rem] leading-snug text-cenote-900">&ldquo;{t.quote}&rdquo;</blockquote>
      <figcaption className="mt-6 text-sm">
        <span className="font-semibold">{t.name}</span> · {t.location}
        <span className="block text-ink-soft">{t.trip} · {t.date}</span>
        <a href={t.sourceUrl} className="mt-2 inline-block text-xs text-cenote-700 underline">{t.sourceLabel}</a>
      </figcaption>
    </figure>
  );
}
