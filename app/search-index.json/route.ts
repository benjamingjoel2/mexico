import { NextResponse } from "next/server";
import { buildSearchIndex } from "@/lib/search";

// Built once at build time and served as a static file; the search overlay fetches it on first open.
export const dynamic = "force-static";

export function GET() {
  return NextResponse.json(buildSearchIndex());
}
