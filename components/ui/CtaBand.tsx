import Link from "@/i18n/Link";
import { emphasis } from "@/lib/emphasis";
import { PlannerButton } from "./PlannerButton";
import { TileDivider } from "./TileDivider";
import { t } from "@/i18n/server";

export function CtaBand({
  title = "Plan a trip, the *unhurried* way.",
  text = "Tell us how you like to travel. Your specialist will come back with a first sketch of a route, honest advice on timing, and no pressure to book.",
}: { title?: string; text?: string }) {
  title = t(title);
  text = t(text);
  return (
    <section className="relative overflow-hidden bg-sand-100 py-20 md:py-28">
      <div className="container-x relative text-center">
        <TileDivider className="mx-auto mb-10 max-w-md" />
        <h2 className="mx-auto max-w-3xl text-4xl text-cenote-900 sm:text-6xl">{emphasis(title)}</h2>
        <p className="mx-auto mt-6 max-w-xl text-lg text-ink-soft">{text}</p>
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <PlannerButton>{t("Plan your trip")} <span aria-hidden>→</span></PlannerButton>
          <Link href="/contact" className="btn btn-dark">{t("Contact us")}</Link>
        </div>
        <p className="mt-8 text-sm text-ink-soft">
          {t("Travelling with a larger group, or need complete privacy?")}{" "}
          <Link href="/contact?topic=private" className="font-semibold text-cenote-800 underline underline-offset-4 hover:text-terra-600">{t("Private & bespoke travel")} →</Link>

        </p>
      </div>
    </section>
  );
}
