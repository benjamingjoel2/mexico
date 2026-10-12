"use client";

import { createContext, useContext, useState, type ReactNode } from "react";

interface UICtx {
  plannerOpen: boolean;
  openPlanner: () => void;
  closePlanner: () => void;
  searchOpen: boolean;
  openSearch: () => void;
  closeSearch: () => void;
}

const Ctx = createContext<UICtx | null>(null);

export function UIProvider({ children }: { children: ReactNode }) {
  const [plannerOpen, setPlanner] = useState(false);
  const [searchOpen, setSearch] = useState(false);
  return (
    <Ctx.Provider
      value={{
        plannerOpen,
        openPlanner: () => setPlanner(true),
        closePlanner: () => setPlanner(false),
        searchOpen,
        openSearch: () => setSearch(true),
        closeSearch: () => setSearch(false),
      }}
    >
      {children}
    </Ctx.Provider>
  );
}

export function useUI() {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error("useUI must be used inside UIProvider");
  return ctx;
}
