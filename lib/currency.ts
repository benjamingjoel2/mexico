import { currencies, type CurrencyCode } from "@/config/site";

/** Round converted prices to tidy marketing numbers. */
function tidy(value: number, code: CurrencyCode) {
  const step = code === "MXN" ? 500 : value >= 1000 ? 10 : 5;
  return Math.round(value / step) * step;
}

export function convert(usd: number, code: CurrencyCode) {
  return tidy(usd * currencies[code].rate, code);
}

export function formatPrice(usd: number, code: CurrencyCode) {
  const c = currencies[code];
  const n = convert(usd, code);
  return `${c.symbol}${n.toLocaleString("en-US")}`;
}
