"use client";

import { createContext, useCallback, useContext, useEffect, useState, type ReactNode } from "react";
import { currencies, defaultCurrency, type CurrencyCode } from "@/config/site";

const STORAGE_KEY = "ch.currency";

interface CurrencyCtx {
  currency: CurrencyCode;
  setCurrency: (c: CurrencyCode) => void;
}

const Ctx = createContext<CurrencyCtx>({ currency: defaultCurrency, setCurrency: () => {} });

export function CurrencyProvider({ children }: { children: ReactNode }) {
  const [currency, setState] = useState<CurrencyCode>(defaultCurrency);

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY) as CurrencyCode | null;
      if (saved && saved in currencies) setState(saved);
    } catch {
      /* storage unavailable */
    }
  }, []);

  const setCurrency = useCallback((c: CurrencyCode) => {
    setState(c);
    try {
      localStorage.setItem(STORAGE_KEY, c);
    } catch {
      /* storage unavailable */
    }
  }, []);

  return <Ctx.Provider value={{ currency, setCurrency }}>{children}</Ctx.Provider>;
}

export const useCurrency = () => useContext(Ctx);
