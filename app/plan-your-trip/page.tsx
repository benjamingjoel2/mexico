import { pageMetadata } from "@/lib/seo";
import { site, whatsappHref } from "@/config/site";
import { PlannerForm } from "@/components/planner/PlannerForm";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Img } from "@/components/ui/Img";

export const metadata = pageMetadata({
  title: "Plan your Mexico trip",
  description: "Tell us about your dream Mexico trip in five quick steps. A dedicated Cenote House specialist will reply personally with first ideas — no obligation.",
  path: "/plan-your-trip",
  image: "hacienda-pool",
});

export default function PlanYourTripPage() {
  return (
    <div className="grid lg:grid-cols-12">
      <aside className="relative hidden overflow-hidden bg-cenote-950 text-white lg:col-span-4 lg:block">
        <Img image="hacienda-pool" sizes="33vw" priority className="opacity-60" />
        <div className="absolute inset-0 bg-gradient-to-b from-cenote-950/40 to-cenote-950/90" />
        <div className="sticky top-[4.5rem] flex min-h-[calc(100vh-4.5rem)] flex-col justify-end p-10">
          <p className="eyebrow text-cenote-300">How it works</p>
          <ol className="mt-5 space-y-4 text-white/85">
            <li><span className="font-display text-xl italic text-terra-300">1.</span> Tell us the shape of your trip (five minutes).</li>
            <li><span className="font-display text-xl italic text-terra-300">2.</span> Your specialist replies — usually within hours.</li>
            <li><span className="font-display text-xl italic text-terra-300">3.</span> We refine it together until it&rsquo;s exactly right.</li>
          </ol>
          <p className="mt-8 text-sm text-white/70">Prefer to talk? <a className="underline" href={whatsappHref()} target="_blank" rel="noopener noreferrer">WhatsApp us</a> or email {site.contact.email}.</p>
        </div>
      </aside>
      <div className="px-5 py-12 sm:px-10 lg:col-span-8 lg:px-16 lg:py-16">
        <div className="mx-auto max-w-3xl">
          <Breadcrumbs items={[{ label: "Plan your trip" }]} />
          <h1 className="mt-6 text-5xl text-cenote-900 sm:text-6xl">Design your Mexico <em>trip</em>.</h1>
          <p className="mt-4 text-lg text-ink-soft">Five short steps. No payment, no obligation — just the start of a conversation with someone who knows Mexico well.</p>
          <div className="mt-12"><PlannerForm /></div>
        </div>
      </div>
    </div>
  );
}
