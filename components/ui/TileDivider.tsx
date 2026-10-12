/**
 * Divider inspired by Talavera tile borders and Oaxacan textile repeats.
 * Kept intentionally small and quiet.
 */
export function TileDivider({ className = "", tone = "terra" }: { className?: string; tone?: "terra" | "cenote" | "light" }) {
  const stroke = tone === "terra" ? "#ad5230" : tone === "cenote" ? "#1a7a80" : "rgba(255,255,255,.55)";
  const id = `tile-${tone}`;
  return (
    <div className={`flex items-center gap-4 ${className}`} aria-hidden>
      <span className="h-px flex-1" style={{ background: stroke, opacity: 0.35 }} />
      <svg width="132" height="16" viewBox="0 0 132 16">
        <defs>
          <pattern id={id} width="22" height="16" patternUnits="userSpaceOnUse">
            <path d="M11 1 L18 8 L11 15 L4 8 Z" fill="none" stroke={stroke} strokeWidth="1.1" />
            <circle cx="11" cy="8" r="1.6" fill={stroke} />
            <path d="M0 8 H3 M19 8 H22" stroke={stroke} strokeWidth="1.1" />
          </pattern>
        </defs>
        <rect width="132" height="16" fill={`url(#${id})`} />
      </svg>
      <span className="h-px flex-1" style={{ background: stroke, opacity: 0.35 }} />
    </div>
  );
}

/** Thin zig-zag band (textile stitch) used at section edges. */
export function StitchBand({ className = "" }: { className?: string }) {
  return <div aria-hidden className={`h-2.5 w-full opacity-50 ${className}`} style={{ backgroundImage: "var(--tile-band)", backgroundSize: "20px 10px" }} />;
}
