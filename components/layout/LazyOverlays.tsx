"use client";

import dynamic from "next/dynamic";
import { useEffect } from "react";
import { useUI } from "@/components/providers/UIProvider";

const loadSearch = () => import("./SearchOverlay").then((m) => m.SearchOverlay);
const loadPlanner = () => import("@/components/planner/PlannerModal").then((m) => m.PlannerModal);

const SearchOverlay = dynamic(loadSearch, { ssr: false });
const PlannerModal = dynamic(loadPlanner, { ssr: false });

/**
 * The search overlay and trip planner aren't needed for the first paint, so their code
 * loads in the background once the page is idle (or immediately when opened).
 */
export function LazyOverlays() {
  const { searchOpen, plannerOpen } = useUI();

  useEffect(() => {
    const warm = () => {
      loadSearch();
      loadPlanner();
    };
    if ("requestIdleCallback" in window) {
      const id = window.requestIdleCallback(warm, { timeout: 4000 });
      return () => window.cancelIdleCallback(id);
    }
    const t = setTimeout(warm, 2500);
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      {searchOpen && <SearchOverlay />}
      {plannerOpen && <PlannerModal />}
    </>
  );
}
