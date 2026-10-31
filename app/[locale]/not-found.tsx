"use client";

import Link from "@/i18n/Link";
import { useT } from "@/i18n/client";
import { emphasis } from "@/lib/emphasis";

export default function NotFound() {
  const t = useT();
  return (
    <section className="container-x py-28 text-center">
      <p className="eyebrow text-terra-600">404</p>
      <h1 className="mt-4 text-5xl text-cenote-900 sm:text-6xl">{emphasis(t("This path goes a little too *deep*."))}</h1>
      <p className="mx-auto mt-5 max-w-md text-lg text-ink-soft">{t("The page you were looking for doesn’t exist, but plenty of Mexico does.")}</p>
      <div className="mt-10 flex flex-wrap justify-center gap-3">
        <Link href="/" className="btn btn-primary">{t("Back to home")}</Link>
        <Link href="/destinations" className="btn btn-outline text-cenote-800">{t("Explore destinations")}</Link>
      </div>
    </section>
  );
}
