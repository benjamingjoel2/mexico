"use client";

import { useEffect, useRef } from "react";
import { useUI } from "@/components/providers/UIProvider";
import { CloseIcon } from "@/components/ui/icons";
import { PlannerForm } from "./PlannerForm";

export function PlannerModal() {
  const { plannerOpen, closePlanner } = useUI();
  const panel = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!plannerOpen) return;
    const prev = document.activeElement as HTMLElement | null;
    document.body.style.overflow = "hidden";
    panel.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closePlanner();
      if (e.key === "Tab" && panel.current) {
        const f = panel.current.querySelectorAll<HTMLElement>('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
        const first = f[0], last = f[f.length - 1];
        if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
        else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
      }
    };
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
      prev?.focus?.();
    };
  }, [plannerOpen, closePlanner]);

  if (!plannerOpen) return null;

  return (
    <div className="fixed inset-0 z-[70] flex items-end justify-center bg-cenote-950/70 backdrop-blur-sm sm:items-center sm:p-6" onClick={closePlanner}>
      <div
        ref={panel}
        role="dialog"
        aria-modal="true"
        aria-label="Plan your trip"
        tabIndex={-1}
        onClick={(e) => e.stopPropagation()}
        className="relative max-h-[94vh] w-full max-w-3xl animate-fade-up overflow-y-auto rounded-t-3xl bg-paper px-5 pb-8 pt-14 shadow-2xl outline-none sm:rounded-3xl sm:px-10"
      >
        <button type="button" onClick={closePlanner} className="absolute right-4 top-4 rounded-full p-2 hover:bg-sand-100" aria-label="Close planner">
          <CloseIcon width={22} height={22} />
        </button>
        <PlannerForm onDone={closePlanner} compact />
      </div>
    </div>
  );
}
