/**
 * Approximate centre coordinates per destination, shown as expedition-style labels
 * (e.g. "20.97° N · 89.62° W"). Decimal degrees; west longitudes are negative.
 */
export const coordinates: Record<string, [lat: number, lng: number]> = {
  "mexico-city": [19.43, -99.13],
  tulum: [20.21, -87.46],
  oaxaca: [17.07, -96.73],
  "cancun-riviera-maya": [21.16, -86.85],
  "los-cabos": [22.89, -109.92],
  "san-miguel-de-allende": [20.91, -100.74],
  merida: [20.97, -89.62],
  valladolid: [20.69, -88.2],
  holbox: [21.52, -87.38],
  "isla-mujeres": [21.23, -86.73],
  bacalar: [18.68, -88.39],
  "playa-del-carmen": [20.63, -87.07],
  puebla: [19.04, -98.21],
  guanajuato: [21.02, -101.26],
  "puerto-vallarta": [20.65, -105.23],
  "puerto-escondido": [15.86, -97.07],
  chiapas: [16.74, -92.64],
  "copper-canyon": [27.53, -107.82],
};

/** Cenote Suytun, near Valladolid: the hero's point of reference. */
export const heroCoordinates: [number, number] = [20.68, -88.15];

export function formatCoords([lat, lng]: [number, number]) {
  const f = (v: number, pos: string, neg: string) => `${Math.abs(v).toFixed(2)}° ${v >= 0 ? pos : neg}`;
  return `${f(lat, "N", "S")} · ${f(lng, "E", "W")}`;
}

export const coordsFor = (slug: string) => (coordinates[slug] ? formatCoords(coordinates[slug]) : null);
