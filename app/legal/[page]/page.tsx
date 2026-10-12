import { notFound } from "next/navigation";
import { site } from "@/config/site";
import { PageHero } from "@/components/ui/PageHero";

const pages = {
  terms: { title: "Terms & conditions", body: "Placeholder. Add your booking conditions: deposits, balance due dates, cancellation charges, amendments, insurance requirements, liability and governing law." },
  privacy: { title: "Privacy policy", body: "Placeholder. Explain what personal data you collect through the trip planner, brochure and contact forms, how it is stored, who it is shared with (suppliers, CRM, email providers) and how visitors can access or delete it." },
  cookies: { title: "Cookie policy", body: "Placeholder. This site stores your currency preference and planner progress in your browser's local storage. Describe any analytics or marketing cookies you add." },
} as const;

export function generateStaticParams() {
  return Object.keys(pages).map((page) => ({ page }));
}

export async function generateMetadata({ params }: { params: Promise<{ page: string }> }) {
  const p = pages[(await params).page as keyof typeof pages];
  return p ? { title: p.title, robots: { index: false } } : {};
}

export default async function LegalPage({ params }: { params: Promise<{ page: string }> }) {
  const p = pages[(await params).page as keyof typeof pages];
  if (!p) notFound();
  return (
    <>
      <PageHero crumbs={[{ label: p.title }]} title={p.title} />
      <section className="container-x prose-ch max-w-3xl py-16">
        <p>{p.body}</p>
        <p>Questions? Email {site.contact.email}.</p>
      </section>
    </>
  );
}
