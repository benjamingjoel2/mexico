"use client";

import { useState } from "react";
import { CheckIcon } from "@/components/ui/icons";
import { postJSON } from "@/lib/api";

export function BrochureForm() {
  const [email, setEmail] = useState("");
  const [newsletter, setNewsletter] = useState(true);
  const [state, setState] = useState<"idle" | "sending" | "done" | "error">("idle");
  const [error, setError] = useState("");

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }
    setError("");
    setState("sending");
    try {
      const res = await postJSON("/api/brochure", { email, newsletter, guide: "yucatan" });
      setState(res.ok ? "done" : "error");
    } catch {
      setState("error");
    }
  }

  if (state === "done") {
    return (
      <div className="rounded-2xl bg-white/10 p-6" role="status">
        <div className="flex items-center gap-3">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-cenote-300 text-cenote-950"><CheckIcon width={18} height={18} /></span>
          <p className="font-display text-2xl text-white">Check your <em>inbox</em>.</p>
        </div>
        <p className="mt-3 text-sm text-white/75">The Yucatán Guide is on its way to {email}. If it hasn&rsquo;t arrived in ten minutes, peek in your promotions folder.</p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-4">
      <div className="flex flex-col gap-3 sm:flex-row">
        <label htmlFor="brochure-email" className="sr-only">Email address</label>
        <input
          id="brochure-email"
          type="email"
          autoComplete="email"
          placeholder="Your email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          aria-invalid={!!error}
          aria-describedby={error ? "brochure-err" : undefined}
          className="field !border-white/30 !bg-white/10 !text-white placeholder:!text-white/60 focus:!border-cenote-300"
        />
        <button type="submit" disabled={state === "sending"} className="btn btn-primary shrink-0 disabled:opacity-60">
          {state === "sending" ? "Sending…" : "Send me the guide"}
        </button>
      </div>
      {error && <p id="brochure-err" className="text-sm text-terra-300" role="alert">{error}</p>}
      {state === "error" && <p className="text-sm text-terra-300" role="alert">Something went wrong. Please try again.</p>}
      <label className="flex cursor-pointer items-start gap-3 text-sm text-white/75">
        <input type="checkbox" checked={newsletter} onChange={(e) => setNewsletter(e.target.checked)} className="mt-0.5 h-4 w-4 accent-terra-500" />
        Also send me the monthly Cenote House letter: new places, seasonal tips, no spam.
      </label>
    </form>
  );
}
