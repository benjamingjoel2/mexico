import { NextResponse } from "next/server";
import { buildSearchIndex } from "@/lib/search";
import { locales } from "@/i18n/locales";
import { withLocale } from "@/i18n/server";

// Built once per language at build time and served as a static file; the search overlay fetches it on first open.
export const dynamic = "force-static";
export const dynamicParams = false;

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function GET(_req: Request, { params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return NextResponse.json(withLocale(locale, buildSearchIndex));
}
