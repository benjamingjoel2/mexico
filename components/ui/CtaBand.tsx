import Link from "next/link";
import { whatsappHref } from "@/config/site";
import { emphasis } from "@/lib/emphasis";
import { PlannerButton } from "./PlannerButton";
import { TileDivider } from "./TileDivider";
import { WhatsAppIcon } from "./icons";

export function CtaBand({
  title = "Plan a trip, the *unhurried* way.",
  text = "Tell us how you like to travel. Your specialist will come back with a first sketch of a route, honest advice on timing, and no pressure to book.",
}: { title?: string; text?: string }) {
  return (
    <section className="relative overflow-hidden bg-sand-100 py-20 md:py-28">
      <div className="container-x relative text-center">
        <TileDivider className="mx-auto mb-10 max-w-md" />
        <h2 className="mx-auto max-w-3xl text-4xl text-cenote-900 sm:text-6xl">{emphasis(title)}</h2>
        <p className="mx-auto mt-6 max-w-xl text-lg text-ink-soft">{text}</p>
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <PlannerButton>Plan your trip <span aria-hidden>→</span></PlannerButton>
          <a href={whatsappHref()} target="_blank" rel="noopener noreferrer" className="btn btn-dark">
            <WhatsAppIcon width={18} height={18} /> Chat on WhatsApp
          </a>
        </div>
        <p className="mt-8 text-sm text-ink-soft">
          Travelling with a larger group, or need complete privacy?{" "}
          <Link href="/contact?topic=private" className="font-semibold text-cenote-800 underline underline-offset-4 hover:text-terra-600">Private &amp; bespoke travel →</Link>
        </p>
      </div>
    </section>
  );
}
