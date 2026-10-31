import { emphasis } from "@/lib/emphasis";
import { setLocale, t } from "@/i18n/server";
import { pageMetadata } from "@/lib/seo";
import { site } from "@/config/site";
import { PlannerForm } from "@/components/planner/PlannerForm";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Img } from "@/components/ui/Img";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  setLocale((await params).locale);
  return pageMetadata({
    title: "Plan your Mexico trip",
    description: "Tell us about your dream Mexico trip in five quick steps. A dedicated Cenote House specialist will reply personally with first ideas — no obligation.",
    path: "/plan-your-trip",
    image: "hacienda-pool",
  });
}

export default async function PlanYourTripPage({ params }: { params: Promise<{ locale: string }> }) {
  setLocale((await params).locale);
  return (
    <div className="grid lg:grid-cols-12">
      <aside className="relative hidden overflow-hidden bg-cenote-950 text-white lg:col-span-4 lg:block">
        <Img image="hacienda-pool" sizes="33vw" priority className="opacity-60" />
        <div className="absolute inset-0 bg-gradient-to-b from-cenote-950/40 to-cenote-950/90" />
        <div className="sticky top-[4.5rem] flex min-h-[calc(100vh-4.5rem)] flex-col justify-end p-10">
          <p className="eyebrow text-cenote-300">{t("How it works")}</p>
          <ol className="mt-5 space-y-4 text-white/85">
            <li><span className="font-display text-xl italic text-terra-300">1.</span> {t("Tell us the shape of your trip (five minutes).")}</li>
            <li><span className="font-display text-xl italic text-terra-300">2.</span> {t("Your specialist replies — usually within hours.")}</li>
            <li><span className="font-display text-xl italic text-terra-300">3.</span> {t("We refine it together until it’s exactly right.")}</li>
          </ol>
          <p className="mt-8 text-sm text-white/70">{t("Prefer to write? Email")} <a className="underline" href={`mailto:${site.contact.email}`}>{site.contact.email}</a>.</p>
        </div>
      </aside>
      <div className="px-5 py-12 sm:px-10 lg:col-span-8 lg:px-16 lg:py-16">
        <div className="mx-auto max-w-3xl">
          <Breadcrumbs items={[{ label: "Plan your trip" }]} />
          <h1 className="mt-6 text-5xl text-cenote-900 sm:text-6xl">{emphasis(t("Design your Mexico *trip*."))}</h1>
          <p className="mt-4 text-lg text-ink-soft">{t("Five short steps. No payment, no obligation — just the start of a conversation with someone who knows Mexico well.")}</p>
          <div className="mt-12"><PlannerForm /></div>
        </div>
      </div>
    </div>
  );
}
