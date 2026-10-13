import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json().catch(() => null);
  const { email, newsletter, guide } = body && typeof body === "object" ? body : ({} as Record<string, unknown>);
  if (typeof email !== "string" || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ ok: false, error: "Invalid email" }, { status: 422 });
  }
  console.log("[brochure] request", { email, newsletter: !!newsletter, guide: guide ?? "yucatan" });
  // TODO: send the PDF guide via your email provider and add to newsletter list when opted in.
  return NextResponse.json({ ok: true });
}
