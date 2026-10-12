import { NextResponse } from "next/server";
import { validateStep, type PlannerData } from "@/components/planner/plannerSchema";

export async function POST(req: Request) {
  let body: PlannerData;
  try {
    body = (await req.json()) as PlannerData;
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid JSON" }, { status: 400 });
  }

  // Re-validate every step on the server.
  const errors = [0, 1, 2, 3, 4].reduce((acc, s) => ({ ...acc, ...validateStep(s, body) }), {});
  if (Object.keys(errors).length) {
    return NextResponse.json({ ok: false, errors }, { status: 422 });
  }

  const enquiry = { ...body, receivedAt: new Date().toISOString(), source: "trip-planner" };
  console.log("[trip-planner] new enquiry", JSON.stringify(enquiry, null, 2));

  // TODO: send to email (e.g. Resend/Postmark) and/or CRM (HubSpot, Pipedrive, Airtable).
  // TODO: add spam protection (honeypot / Turnstile) and rate limiting before launch.

  return NextResponse.json({ ok: true });
}
