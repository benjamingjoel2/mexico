import type { Destination } from "../types";
import { yucatanDestinations } from "./yucatan";
import { mainlandDestinations } from "./mainland";

/** Order follows the Destinations mega-menu. */
const order = [
  "mexico-city", "tulum", "oaxaca", "cancun-riviera-maya", "los-cabos", "san-miguel-de-allende",
  "merida", "valladolid", "holbox", "isla-mujeres", "bacalar", "playa-del-carmen",
  "puebla", "guanajuato", "puerto-vallarta", "puerto-escondido", "chiapas", "copper-canyon",
];

export const destinations: Destination[] = [...yucatanDestinations, ...mainlandDestinations].sort(
  (a, b) => order.indexOf(a.slug) - order.indexOf(b.slug),
);

/**
 * Number of partner stays we work with per destination (shown on cards).
 * PLACEHOLDER figures — update from your supplier list or CMS.
 */
export const partnerStayCounts: Record<string, number> = {
  "mexico-city": 14, tulum: 12, oaxaca: 9, "cancun-riviera-maya": 16, "los-cabos": 11,
  "san-miguel-de-allende": 8, merida: 10, valladolid: 5, holbox: 6, "isla-mujeres": 4,
  bacalar: 6, "playa-del-carmen": 7, puebla: 4, guanajuato: 4, "puerto-vallarta": 7,
  "puerto-escondido": 5, chiapas: 5, "copper-canyon": 4,
};
