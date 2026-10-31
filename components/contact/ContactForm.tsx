"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { postJSON } from "@/lib/api";
import { useT } from "@/i18n/client";
import { msg } from "@/i18n/locales";
import { emphasis } from "@/lib/emphasis";

const topics = [msg("Planning a trip"), msg("Private & bespoke travel"), msg("An existing booking"), msg("Press & partnerships"), msg("Something else")];

export function ContactForm() {
  const t = useT();
  const params = useSearchParams();
  const [topic, setTopic] = useState<string>(params.get("topic") === "private" ? topics[1] : topics[0]);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [state, setState] = useState<"idle" | "sending" | "done" | "error">("idle");

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    const errs: Record<string, string> = {};
    if (form.name.trim().length < 2) errs.name = t("Please enter your name.");
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errs.email = t("Please enter a valid email.");
    if (form.message.trim().length < 10) errs.message = t("Tell us a little more (10+ characters).");
    setErrors(errs);
    if (Object.keys(errs).length) return;
    setState("sending");
    const res = await postJSON("/api/contact", { ...form, topic }).catch(() => null);
    setState(res?.ok ? "done" : "error");
  }

  if (state === "done") return <p role="status" className="rounded-2xl bg-cenote-50 p-8 font-display text-2xl text-cenote-900">{emphasis(t("Thank you — a specialist will reply *shortly*."))}</p>;

  return (
    <form onSubmit={submit} noValidate className="space-y-5">
      <div>
        <label htmlFor="topic" className="mb-1.5 block text-sm font-medium">{t("Topic")}</label>
        <select id="topic" className="field" value={topic} onChange={(e) => setTopic(e.target.value)}>
          {topics.map((x) => <option key={x} value={x}>{t(x)}</option>)}
        </select>
      </div>
      {(["name", "email"] as const).map((k) => (
        <div key={k}>
          <label htmlFor={k} className="mb-1.5 block text-sm font-medium">{k === "name" ? t("Your name") : t("Email")}</label>
          <input id={k} type={k === "email" ? "email" : "text"} autoComplete={k} className="field" value={form[k]} aria-invalid={!!errors[k]}
            onChange={(e) => setForm({ ...form, [k]: e.target.value })} />
          {errors[k] && <p className="mt-1 text-sm text-terra-700" role="alert">{errors[k]}</p>}
        </div>
      ))}
      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm font-medium">{t("Message")}</label>
        <textarea id="message" rows={6} className="field" value={form.message} aria-invalid={!!errors.message} onChange={(e) => setForm({ ...form, message: e.target.value })} />
        {errors.message && <p className="mt-1 text-sm text-terra-700" role="alert">{errors.message}</p>}
      </div>
      {state === "error" && <p className="text-sm text-terra-700" role="alert">{t("Something went wrong. Please try again or email us.")}</p>}
      <button type="submit" disabled={state === "sending"} className="btn btn-primary">{state === "sending" ? t("Sending…") : t("Send message")}</button>

    </form>
  );
}
