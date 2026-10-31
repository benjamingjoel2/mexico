import { emphasis } from "@/lib/emphasis";
import { setLocale, t } from "@/i18n/server";
import { Suspense } from "react";
import { site } from "@/config/site";
import { pageMetadata } from "@/lib/seo";
import { PageHero } from "@/components/ui/PageHero";
import { ContactForm } from "@/components/contact/ContactForm";
import { PlannerButton } from "@/components/ui/PlannerButton";
import { MailIcon } from "@/components/ui/icons";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  setLocale((await params).locale);
  return pageMetadata({
    title: "Contact a Mexico specialist",
    description: "Talk to a Cenote House Mexico specialist by email or through the trip planner. We reply within one working day.",
    path: "/contact",
  });
}

export default async function ContactPage({ params }: { params: Promise<{ locale: string }> }) {
  setLocale((await params).locale);
  return (
    <>
      <PageHero crumbs={[{ label: "Contact" }]} eyebrow={site.replyTime} title="Talk to someone who's *been*."
        intro="Whether you have firm dates or just a feeling about Mexico, start a conversation. A specialist — not a bot — will reply." />
      <section className="py-16 md:py-24">
        <div className="container-x grid gap-14 lg:grid-cols-12">
          <div className="space-y-6 lg:col-span-5">
            {[
              { icon: <MailIcon />, label: t("Email"), value: site.contact.email, href: `mailto:${site.contact.email}`, note: t("We reply within one working day") },

            ].map((c) => (
              <a key={c.label} href={c.href} className="flex gap-5 rounded-2xl border border-sand-200 bg-white p-6 hover:border-cenote-600">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-cenote-50 text-cenote-700">{c.icon}</span>
                <span>
                  <span className="eyebrow block text-terra-600">{c.label}</span>
                  <span className="mt-1 block font-display text-2xl text-cenote-900">{c.value}</span>
                  <span className="text-sm text-ink-soft">{c.note}</span>
                </span>
              </a>
            ))}
            <p className="text-sm text-ink-soft">{site.contact.address}</p>
            <div className="rounded-2xl bg-cenote-800 p-7 text-white">
              <p className="font-display text-2xl">{emphasis(t("Ready to sketch a *route*?"))}</p>
              <p className="mt-2 text-sm text-white/75">{t("Our five-step planner gives your specialist everything they need.")}</p>
              <PlannerButton className="btn btn-primary mt-5">{t("Start planning")}</PlannerButton>
            </div>
          </div>
          <div className="lg:col-span-6 lg:col-start-7">
            <h2 className="mb-8 text-3xl text-cenote-900">{emphasis(t("Send a *message*"))}</h2>
            <Suspense><ContactForm /></Suspense>
          </div>
        </div>
      </section>
    </>
  );
}
