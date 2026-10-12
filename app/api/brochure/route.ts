import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { email, newsletter, guide } = await req.json().catch(() => ({}));
  if (typeof email !== "string" || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ ok: false, error: "Invalid email" }, { status: 422 });
  }
  console.log("[brochure] request", { email, newsletter: !!newsletter, guide: guide ?? "yucatan" });
  // TODO: send the PDF guide via your email provider and add to newsletter list when opted in.
  return NextResponse.json({ ok: true });
}
