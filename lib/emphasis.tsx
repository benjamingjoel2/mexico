import { Fragment, type ReactNode } from "react";

/**
 * Turns "Where to *go*." into ["Where to ", <em>go</em>, "."].
 * Used for display headings where exactly one word is italicised.
 */
export function emphasis(text: string): ReactNode {
  const parts = text.split(/(\*[^*]+\*)/g);
  return parts.map((part, i) =>
    part.startsWith("*") && part.endsWith("*") ? (
      <em key={i}>{part.slice(1, -1)}</em>
    ) : (
      <Fragment key={i}>{part}</Fragment>
    ),
  );
}

export const stripEmphasis = (text: string) => text.replace(/\*/g, "");
