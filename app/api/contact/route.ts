import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json().catch(() => null);
  if (!body?.email || !body?.name || !body?.message) return NextResponse.json({ ok: false }, { status: 422 });
  console.log("[contact] new message", body);
  // TODO: forward to email / CRM.
  return NextResponse.json({ ok: true });
}
