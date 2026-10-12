"use client";

import type { ReactNode } from "react";
import { useUI } from "@/components/providers/UIProvider";

/** Any "Start planning" CTA: opens the 5-step planner modal. */
export function PlannerButton({ children, className = "btn btn-primary" }: { children: ReactNode; className?: string }) {
  const { openPlanner } = useUI();
  return (
    <button type="button" onClick={openPlanner} className={className}>
      {children}
    </button>
  );
}
