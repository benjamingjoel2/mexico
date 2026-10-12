"use client";

import Image from "next/image";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { images } from "@/data/images";
import { whatsappHref } from "@/config/site";
import { Price } from "@/components/ui/Price";
import { CheckIcon } from "@/components/ui/icons";
import {
  addonOptions, budgetOptions, contactOptions, countryCodes, emptyPlanner, regionOptions, steps, validateStep,
  type Errors, type PlannerData,
} from "./plannerSchema";

const STORAGE_KEY = "ch.planner.v1";

export function PlannerForm({ onDone, compact = false }: { onDone?: () => void; compact?: boolean }) {
  const [data, setData] = useState<PlannerData>(emptyPlanner);
  const [step, setStep] = useState(0);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "error">("idle");
  const [loaded, setLoaded] = useState(false);
  const top = useRef<HTMLDivElement>(null);

  // Restore saved progress
  useEffect(() => {
    try {
      const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) ?? "null");
      if (saved?.data) {
        setData({ ...emptyPlanner, ...saved.data });
        setStep(Math.min(Math.max(saved.step ?? 0, 0), steps.length - 1));
      }
    } catch {
      /* ignore */
    }
    setLoaded(true);
  }, []);

  // Persist progress
  useEffect(() => {
    if (!loaded || status === "done") return;
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify({ data, step }));
    } catch {
      /* ignore */
    }
  }, [data, step, loaded, status]);

  const set = <K extends keyof PlannerData>(key: K, value: PlannerData[K]) => {
    setData((d) => ({ ...d, [key]: value }));
    setErrors((e) => ({ ...e, [key]: undefined }));
  };
  const toggle = (key: "regions" | "addons" | "contactMethods", value: string) => {
    setData((d) => {
      let list = d[key].includes(value) ? d[key].filter((v) => v !== value) : [...d[key], value];
      if (key === "regions") list = value === "not-sure" ? (list.includes("not-sure") ? ["not-sure"] : []) : list.filter((v) => v !== "not-sure");
      return { ...d, [key]: list };
    });
    setErrors((e) => ({ ...e, [key]: undefined }));
  };

  const scrollTop = () => top.current?.scrollIntoView({ block: "start", behavior: "smooth" });

  const next = () => {
    const e = validateStep(step, data);
    setErrors(e);
    if (Object.keys(e).length) {
      requestAnimationFrame(() => (top.current?.parentElement?.querySelector('[aria-invalid="true"], [data-error]') as HTMLElement | null)?.focus?.());
      return;
    }
    if (step < steps.length - 1) {
      setStep(step + 1);
      scrollTop();
    } else submit();
  };
  const back = () => { setErrors({}); setStep(Math.max(0, step - 1)); scrollTop(); };

  async function submit() {
    setStatus("sending");
    try {
      const res = await fetch("/api/plan", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(data) });
      if (!res.ok) throw new Error(await res.text());
      setStatus("done");
      try { localStorage.removeItem(STORAGE_KEY); } catch { /* ignore */ }
    } catch {
      setStatus("error");
    }
  }

  if (status === "done") {
    return (
      <div className="py-10 text-center">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-cenote-100 text-cenote-700"><CheckIcon width={30} height={30} /></div>
        <h2 className="mt-6 text-4xl text-cenote-900">Gracias, {data.name.split(" ")[0]}. We&rsquo;re <em>on it</em>.</h2>
        <p className="mx-auto mt-4 max-w-md text-ink-soft">
          Your specialist will be in touch {data.contactMethods.length ? `by ${data.contactMethods.join(" or ").toLowerCase()}` : "shortly"} — usually within a few hours, and always within one working day — with first ideas for your trip.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <a href={whatsappHref(`Hola! I just sent a trip request as ${data.name}.`)} target="_blank" rel="noopener noreferrer" className="btn btn-dark">Say hello on WhatsApp</a>
          {onDone && <button type="button" onClick={onDone} className="btn btn-outline text-cenote-800">Keep exploring</button>}
        </div>
      </div>
    );
  }

  return (
    <div ref={top} className="scroll-mt-24">
      {/* Progress */}
      <div className="mb-8">
        <div className="flex items-baseline justify-between">
          <p className="eyebrow text-terra-600" aria-live="polite">Step {step + 1} of {steps.length}</p>
          <p className="text-sm text-ink-soft">{steps[step]}</p>
        </div>
        <ol className="mt-3 grid grid-cols-5 gap-1.5" aria-label="Progress">
          {steps.map((s, i) => (
            <li key={s} className={`h-1 rounded-full transition-colors ${i <= step ? "bg-cenote-600" : "bg-sand-200"}`}>
              <span className="sr-only">{s}{i < step ? " (complete)" : i === step ? " (current)" : ""}</span>
            </li>
          ))}
        </ol>
      </div>

      <form noValidate onSubmit={(e) => { e.preventDefault(); next(); }}>
        {step === 0 && (
          <Step title="When are you *thinking*?" intro="Approximate is perfect — we'll work around the seasons for you.">
            <div className="grid gap-5 sm:grid-cols-2">
              <Field label="Arrival date" error={errors.arrivalDate} htmlFor="arrivalDate">
                <input id="arrivalDate" type="date" className="field" value={data.arrivalDate} min={new Date().toISOString().slice(0, 10)}
                  onChange={(e) => set("arrivalDate", e.target.value)} aria-invalid={!!errors.arrivalDate} aria-describedby={errors.arrivalDate ? "arrivalDate-err" : undefined} />
              </Field>
              <Field label="Length of stay" error={errors.nights} htmlFor="nights">
                <select id="nights" className="field" value={data.nights} onChange={(e) => set("nights", Number(e.target.value))} aria-invalid={!!errors.nights}>
                  {Array.from({ length: 50 }, (_, i) => i + 1).map((n) => <option key={n} value={n}>{n} {n === 1 ? "night" : "nights"}</option>)}
                </select>
              </Field>
            </div>
            <Choice legend="Are your dates…" error={errors.dateFlex} name="dateFlex"
              options={[{ id: "exact", label: "Exact" }, { id: "approximate", label: "Approximate" }]}
              value={data.dateFlex} onChange={(v) => set("dateFlex", v as PlannerData["dateFlex"])} />
            <Choice legend="Have you been to Mexico before?" error={errors.travellerType} name="travellerType"
              options={[{ id: "first-timer", label: "First time in Mexico" }, { id: "experienced", label: "I've been before" }]}
              value={data.travellerType} onChange={(v) => set("travellerType", v as PlannerData["travellerType"])} />
          </Step>
        )}

        {step === 1 && (
          <Step title="Where would you like to *go*?" intro="Choose as many as you like. Most of our guests combine two regions.">
            <fieldset>
              <legend className="sr-only">Regions</legend>
              <div className={`grid gap-3 ${compact ? "grid-cols-2" : "grid-cols-2 md:grid-cols-4"}`} data-error={errors.regions ? "" : undefined} tabIndex={errors.regions ? -1 : undefined}>
                {regionOptions.map((r) => {
                  const on = data.regions.includes(r.id);
                  return (
                    <label key={r.id} className={`group relative cursor-pointer overflow-hidden rounded-xl ring-2 transition ${on ? "ring-cenote-600" : "ring-transparent hover:ring-sand-300"}`}>
                      <input type="checkbox" className="peer sr-only" checked={on} onChange={() => toggle("regions", r.id)} />
                      <div className="relative aspect-[4/3]">
                        <Image src={images[r.image].src} alt="" fill sizes="(min-width: 768px) 220px, 45vw" className="object-cover transition-transform duration-500 group-hover:scale-105" />
                        <div className="absolute inset-0 bg-gradient-to-t from-cenote-950/85 via-cenote-950/20 to-transparent" />
                        <span className={`absolute right-2.5 top-2.5 flex h-6 w-6 items-center justify-center rounded-full border-2 border-white ${on ? "bg-cenote-600" : "bg-black/20"}`}>
                          {on && <CheckIcon width={14} height={14} className="text-white" />}
                        </span>
                        <div className="absolute inset-x-0 bottom-0 p-3 text-white">
                          <p className="font-display text-[1.05rem] leading-tight">{r.label}</p>
                          <p className="mt-0.5 text-xs text-white/75">{r.detail}</p>
                        </div>
                      </div>
                      <span className="pointer-events-none absolute inset-0 rounded-xl peer-focus-visible:ring-4 peer-focus-visible:ring-terra-500" />
                    </label>
                  );
                })}
              </div>
              {errors.regions && <p className="mt-2 text-sm text-terra-700" role="alert">{errors.regions}</p>}
            </fieldset>
            <Field label="Any specific hotels, places or experiences in mind? (optional)" htmlFor="specifics">
              <textarea id="specifics" rows={3} className="field" value={data.specifics} onChange={(e) => set("specifics", e.target.value)}
                placeholder="e.g. a night in a hacienda, swimming with whale sharks, Día de Muertos in Oaxaca…" />
            </Field>
          </Step>
        )}

        {step === 2 && (
          <Step title="What budget feels *right*?" intro="Approximate, per person, per day, including accommodation, guiding and private transfers. International flights excluded.">
            <fieldset data-error={errors.budget ? "" : undefined} tabIndex={errors.budget ? -1 : undefined}>
              <legend className="sr-only">Budget</legend>
              <div className="grid gap-3 sm:grid-cols-2">
                {budgetOptions.map((b) => {
                  const on = data.budget === b.id;
                  return (
                    <label key={b.id} className={`relative cursor-pointer rounded-xl border p-5 transition ${on ? "border-cenote-600 bg-cenote-50" : "border-sand-300 bg-white hover:border-sand-500"}`}>
                      <input type="radio" name="budget" className="peer sr-only" checked={on} onChange={() => set("budget", b.id)} />
                      <span className="pointer-events-none absolute inset-0 rounded-xl peer-focus-visible:ring-4 peer-focus-visible:ring-terra-500" />
                      <span className="flex items-baseline justify-between gap-3">
                        <span className="font-display text-xl text-cenote-900">{b.label}</span>
                        <span className="text-sm font-semibold text-terra-600">
                          {b.fromUSD ? (<><Price usd={b.fromUSD} />{b.toUSD ? <>–<Price usd={b.toUSD} /></> : "+"}</>) : "—"}
                        </span>
                      </span>
                      <span className="mt-2 block text-sm text-ink-soft">{b.detail}</span>
                    </label>
                  );
                })}
              </div>
              {errors.budget && <p className="mt-2 text-sm text-terra-700" role="alert">{errors.budget}</p>}
            </fieldset>
          </Step>
        )}

        {step === 3 && (
          <Step title="Who's *coming*?" intro="Tell us who's travelling so we can match rooms, guides and pace.">
            <div className="grid gap-5 sm:grid-cols-2">
              <Stepper label="Adults" value={data.adults} min={1} max={12} onChange={(v) => set("adults", v)} error={errors.adults} />
              <Stepper label="Children (under 18)" value={data.children} min={0} max={10}
                onChange={(v) => setData((d) => ({ ...d, children: v, childAges: Array.from({ length: v }, (_, i) => d.childAges[i] ?? "") }))} />
            </div>
            {data.children > 0 && (
              <fieldset>
                <legend className="mb-2 text-sm font-medium">Children&rsquo;s ages at time of travel</legend>
                <div className="flex flex-wrap gap-3">
                  {Array.from({ length: data.children }).map((_, i) => {
                    const err = errors[`childAge${i}`];
                    return (
                      <label key={i} className="flex flex-col text-xs text-ink-soft">
                        Child {i + 1}
                        <select className="field mt-1 !w-24" value={data.childAges[i] ?? ""} aria-invalid={!!err}
                          onChange={(e) => { const ages = [...data.childAges]; ages[i] = e.target.value; setData((d) => ({ ...d, childAges: ages })); setErrors((x) => ({ ...x, [`childAge${i}`]: undefined })); }}>
                          <option value="">Age</option>
                          {Array.from({ length: 18 }, (_, a) => <option key={a} value={a}>{a === 0 ? "Under 1" : a}</option>)}
                        </select>
                        {err && <span className="mt-1 text-terra-700">{err}</span>}
                      </label>
                    );
                  })}
                </div>
              </fieldset>
            )}
            <fieldset>
              <legend className="mb-3 text-sm font-medium">Would you like help with any of these? (optional)</legend>
              <div className="grid gap-3 sm:grid-cols-2">
                {addonOptions.map((a) => (
                  <CheckCard key={a.id} checked={data.addons.includes(a.id)} onChange={() => toggle("addons", a.id)} label={a.label} detail={a.detail} />
                ))}
              </div>
            </fieldset>
          </Step>
        )}

        {step === 4 && (
          <Step title="How can we reach *you*?" intro="Your specialist will reply personally — no call centres, no automated sequences.">
            <Field label="Full name" error={errors.name} htmlFor="name">
              <input id="name" className="field" autoComplete="name" value={data.name} onChange={(e) => set("name", e.target.value)} aria-invalid={!!errors.name} />
            </Field>
            <Field label="Email" error={errors.email} htmlFor="email">
              <input id="email" type="email" className="field" autoComplete="email" value={data.email} onChange={(e) => set("email", e.target.value)} aria-invalid={!!errors.email} />
            </Field>
            <Field label="Phone (optional unless you choose WhatsApp or telephone)" error={errors.phone} htmlFor="phone">
              <div className="flex gap-2">
                <label htmlFor="countryCode" className="sr-only">Country code</label>
                <select id="countryCode" className="field !w-32" value={data.countryCode} onChange={(e) => set("countryCode", e.target.value)}>
                  {countryCodes.map((c) => <option key={c.code} value={c.code}>{c.label}</option>)}
                </select>
                <input id="phone" type="tel" className="field" autoComplete="tel-national" value={data.phone} onChange={(e) => set("phone", e.target.value)} aria-invalid={!!errors.phone} />
              </div>
            </Field>
            <fieldset data-error={errors.contactMethods ? "" : undefined} tabIndex={errors.contactMethods ? -1 : undefined}>
              <legend className="mb-3 text-sm font-medium">Preferred ways to contact you</legend>
              <div className="flex flex-wrap gap-2">
                {contactOptions.map((c) => {
                  const on = data.contactMethods.includes(c);
                  return (
                    <label key={c} className={`relative cursor-pointer rounded-full border px-4 py-2 text-sm font-medium transition ${on ? "border-cenote-600 bg-cenote-600 text-white" : "border-sand-300 bg-white hover:border-sand-500"}`}>
                      <input type="checkbox" className="peer sr-only" checked={on} onChange={() => toggle("contactMethods", c)} />
                      <span className="pointer-events-none absolute inset-0 rounded-full peer-focus-visible:ring-4 peer-focus-visible:ring-terra-500" />
                      {c}
                    </label>
                  );
                })}
              </div>
              {errors.contactMethods && <p className="mt-2 text-sm text-terra-700" role="alert">{errors.contactMethods}</p>}
            </fieldset>
            <Field label="Anything else we should know? (optional)" htmlFor="notes">
              <textarea id="notes" rows={4} className="field" value={data.notes} onChange={(e) => set("notes", e.target.value)}
                placeholder="Celebrations, dietary needs, mobility, the pace you like…" />
            </Field>
            {status === "error" && <p className="rounded-lg bg-terra-100 p-3 text-sm text-terra-700" role="alert">Something went wrong sending your request. Please try again, or message us on WhatsApp.</p>}
          </Step>
        )}

        <div className="mt-10 flex items-center justify-between gap-3 border-t border-sand-200 pt-6">
          {step > 0 ? (
            <button type="button" onClick={back} className="btn btn-outline text-cenote-800">← Back</button>
          ) : <span />}
          <button type="submit" disabled={status === "sending"} className="btn btn-primary disabled:opacity-60">
            {step === steps.length - 1 ? (status === "sending" ? "Sending…" : "Send to a specialist") : "Next →"}
          </button>
        </div>
        <p className="mt-4 text-center text-xs text-ink-soft">Your progress is saved on this device. No payment, no obligation.</p>
      </form>
    </div>
  );
}

/* ---------- small building blocks ---------- */

function Step({ title, intro, children }: { title: string; intro?: string; children: ReactNode }) {
  const parts = title.split(/(\*[^*]+\*)/g);
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl text-cenote-900 sm:text-4xl">
          {parts.map((p, i) => (p.startsWith("*") ? <em key={i}>{p.slice(1, -1)}</em> : p))}
        </h2>
        {intro && <p className="mt-2 text-ink-soft">{intro}</p>}
      </div>
      {children}
    </div>
  );
}

function Field({ label, htmlFor, error, children }: { label: string; htmlFor: string; error?: string; children: ReactNode }) {
  return (
    <div>
      <label htmlFor={htmlFor} className="mb-1.5 block text-sm font-medium">{label}</label>
      {children}
      {error && <p id={`${htmlFor}-err`} className="mt-1.5 text-sm text-terra-700" role="alert">{error}</p>}
    </div>
  );
}

function Choice({ legend, name, options, value, onChange, error }: {
  legend: string; name: string; options: { id: string; label: string }[]; value: string; onChange: (v: string) => void; error?: string;
}) {
  return (
    <fieldset data-error={error ? "" : undefined} tabIndex={error ? -1 : undefined}>
      <legend className="mb-2 text-sm font-medium">{legend}</legend>
      <div className="flex flex-wrap gap-2">
        {options.map((o) => {
          const on = value === o.id;
          return (
            <label key={o.id} className={`relative cursor-pointer rounded-full border px-4 py-2 text-sm font-medium transition ${on ? "border-cenote-600 bg-cenote-600 text-white" : "border-sand-300 bg-white hover:border-sand-500"}`}>
              <input type="radio" name={name} className="peer sr-only" checked={on} onChange={() => onChange(o.id)} />
              <span className="pointer-events-none absolute inset-0 rounded-full peer-focus-visible:ring-4 peer-focus-visible:ring-terra-500" />
              {o.label}
            </label>
          );
        })}
      </div>
      {error && <p className="mt-2 text-sm text-terra-700" role="alert">{error}</p>}
    </fieldset>
  );
}

function Stepper({ label, value, min, max, onChange, error }: { label: string; value: number; min: number; max: number; onChange: (v: number) => void; error?: string }) {
  return (
    <div>
      <p className="mb-1.5 text-sm font-medium" id={`lbl-${label}`}>{label}</p>
      <div className="flex items-center gap-3" role="group" aria-labelledby={`lbl-${label}`}>
        <button type="button" onClick={() => onChange(Math.max(min, value - 1))} disabled={value <= min} aria-label={`Fewer ${label.toLowerCase()}`}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-sand-300 bg-white text-xl disabled:opacity-40">−</button>
        <output className="w-8 text-center font-display text-2xl" aria-live="polite">{value}</output>
        <button type="button" onClick={() => onChange(Math.min(max, value + 1))} disabled={value >= max} aria-label={`More ${label.toLowerCase()}`}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-sand-300 bg-white text-xl disabled:opacity-40">+</button>
      </div>
      {error && <p className="mt-1.5 text-sm text-terra-700" role="alert">{error}</p>}
    </div>
  );
}

function CheckCard({ checked, onChange, label, detail }: { checked: boolean; onChange: () => void; label: string; detail: string }) {
  return (
    <label className={`relative flex cursor-pointer gap-3 rounded-xl border p-4 transition ${checked ? "border-cenote-600 bg-cenote-50" : "border-sand-300 bg-white hover:border-sand-500"}`}>
      <input type="checkbox" className="peer sr-only" checked={checked} onChange={onChange} />
      <span className="pointer-events-none absolute inset-0 rounded-xl peer-focus-visible:ring-4 peer-focus-visible:ring-terra-500" />
      <span className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded border ${checked ? "border-cenote-600 bg-cenote-600 text-white" : "border-sand-500"}`}>
        {checked && <CheckIcon width={13} height={13} />}
      </span>
      <span>
        <span className="block text-sm font-semibold">{label}</span>
        <span className="block text-xs text-ink-soft">{detail}</span>
      </span>
    </label>
  );
}
