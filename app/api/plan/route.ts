import { NextResponse } from "next/server";
import { emptyPlanner, validateStep, type PlannerData } from "@/components/planner/plannerSchema";

export async function POST(req: Request) {
  let body: PlannerData;
  try {
    body = (await req.json()) as PlannerData;
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid JSON" }, { status: 400 });
  }

  if (typeof body !== "object" || body === null || Array.isArray(body)) {
    return NextResponse.json({ ok: false, error: "Invalid payload" }, { status: 400 });
  }
  body = { ...emptyPlanner, ...body };

  // Re-validate every step on the server. Wrong field types throw, so treat that as invalid too.
  let errors: Record<string, unknown>;
  try {
    errors = [0, 1, 2, 3, 4].reduce((acc, s) => ({ ...acc, ...validateStep(s, body) }), {});
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid payload" }, { status: 400 });
  }
  if (Object.keys(errors).length) {
    return NextResponse.json({ ok: false, errors }, { status: 422 });
  }

  const enquiry = { ...body, receivedAt: new Date().toISOString(), source: "trip-planner" };
  console.log("[trip-planner] new enquiry", JSON.stringify(enquiry, null, 2));

  // TODO: send to email (e.g. Resend/Postmark) and/or CRM (HubSpot, Pipedrive, Airtable).
  // TODO: add spam protection (honeypot / Turnstile) and rate limiting before launch.

  return NextResponse.json({ ok: true });
}
