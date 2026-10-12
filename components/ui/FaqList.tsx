import type { FAQ } from "@/data/types";

/** Accessible native disclosure list + FAQPage structured data. */
export function FaqList({ faqs, schema = true }: { faqs: FAQ[]; schema?: boolean }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.question, acceptedAnswer: { "@type": "Answer", text: f.answer } })),
  };
  return (
    <div className="divide-y divide-sand-200 border-y border-sand-200">
      {faqs.map((f) => (
        <details key={f.id} className="group py-1" id={`faq-${f.id}`}>
          <summary className="flex cursor-pointer list-none items-start justify-between gap-6 py-5 [&::-webkit-details-marker]:hidden">
            <span className="font-display text-xl text-cenote-900 sm:text-[1.35rem]">{f.question}</span>
            <span aria-hidden className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-sand-300 text-cenote-700 transition-transform group-open:rotate-45">+</span>
          </summary>
          <p className="max-w-3xl pb-6 leading-relaxed text-ink-soft">{f.answer}</p>
        </details>
      ))}
      {schema && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />}
    </div>
  );
}
