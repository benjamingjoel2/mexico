"use client";

import { useCurrency } from "@/components/providers/CurrencyProvider";
import { formatPrice } from "@/lib/currency";

/** Renders a base-USD amount in the visitor's selected currency. */
export function Price({ usd, multiplier = 1 }: { usd: number; multiplier?: number }) {
  const { currency } = useCurrency();
  return <span suppressHydrationWarning>{formatPrice(usd * multiplier, currency)}</span>;
}
