import { msg } from "@/i18n/locales";
import type { ImageKey } from "@/data/images";

export interface PlannerData {
  arrivalDate: string;
  nights: number;
  dateFlex: "exact" | "approximate" | "";
  travellerType: "first-timer" | "experienced" | "";
  regions: string[];
  specifics: string;
  budget: "value-luxury" | "premium" | "ultra-luxury" | "not-sure" | "";
  adults: number;
  children: number;
  childAges: string[];
  addons: string[];
  name: string;
  email: string;
  countryCode: string;
  phone: string;
  contactMethods: string[];
  notes: string;
}

export const emptyPlanner: PlannerData = {
  arrivalDate: "", nights: 10, dateFlex: "", travellerType: "",
  regions: [], specifics: "",
  budget: "",
  adults: 2, children: 0, childAges: [], addons: [],
  name: "", email: "", countryCode: "+1", phone: "", contactMethods: [], notes: "",
};

export const steps = [msg("When"), msg("Where"), msg("Budget"), msg("Who"), msg("Contact")] as const;

export const regionOptions: { id: string; label: string; detail: string; image: ImageKey }[] = [
  { id: "cdmx-oaxaca", label: msg("Mexico City & Oaxaca"), detail: msg("Museums, mezcal, markets"), image: "oaxaca" },
  { id: "yucatan-riviera", label: msg("Yucatán & Riviera Maya"), detail: msg("Cenotes, ruins, haciendas"), image: "merida" },
  { id: "tulum-bacalar", label: msg("Tulum & Bacalar"), detail: msg("Jungle, lagoon, Caribbean"), image: "bacalar" },
  { id: "colonial", label: msg("Colonial heartland"), detail: msg("CDMX, San Miguel, Guanajuato"), image: "guanajuato" },
  { id: "baja", label: msg("Baja & Los Cabos"), detail: msg("Desert, whales, Sea of Cortez"), image: "los-cabos" },
  { id: "chiapas-yucatan", label: msg("Chiapas & Yucatán"), detail: msg("Highlands, Palenque, jungle"), image: "chiapas" },
  { id: "pacific", label: msg("Pacific coast"), detail: msg("Surf towns, Vallarta, Oaxaca coast"), image: "puerto-escondido" },
  { id: "not-sure", label: msg("Not sure yet"), detail: msg("Help us choose"), image: "cenote-1" },
];

export const budgetOptions = [
  { id: "value-luxury", label: msg("Value luxury"), fromUSD: 350, toUSD: 600, detail: msg("Characterful boutique hotels, private guides where they matter most.") },
  { id: "premium", label: msg("Premium"), fromUSD: 600, toUSD: 1100, detail: msg("Our favourite haciendas and design hotels, private drivers throughout.") },
  { id: "ultra-luxury", label: msg("Ultra luxury"), fromUSD: 1100, toUSD: null, detail: msg("The finest suites, private villas, charter flights and exclusive access.") },
  { id: "not-sure", label: msg("Not sure yet"), fromUSD: null, toUSD: null, detail: msg("We'll suggest options at a few price points.") },
] as const;

export const addonOptions = [
  { id: "insurance", label: msg("Travel insurance"), detail: msg("We'll share information on suitable policies.") },
  { id: "international-flights", label: msg("International flights"), detail: msg("Help finding flights to and from Mexico.") },
  { id: "domestic-flights", label: msg("Domestic flights"), detail: msg("We book internal flights as part of your trip.") },
  { id: "private-drivers", label: msg("Private drivers"), detail: msg("Door-to-door transfers with bilingual drivers.") },
];

export const contactOptions = [msg("Email"), msg("Telephone")];

export const countryCodes = [
  { code: "+1", label: "US/CA +1" }, { code: "+44", label: "UK +44" }, { code: "+52", label: "MX +52" },
  { code: "+61", label: "AU +61" }, { code: "+353", label: "IE +353" }, { code: "+49", label: "DE +49" },
  { code: "+33", label: "FR +33" }, { code: "+34", label: "ES +34" }, { code: "+31", label: "NL +31" },
  { code: "+41", label: "CH +41" }, { code: "+64", label: "NZ +64" }, { code: "+65", label: "SG +65" },
];

export type Errors = Partial<Record<keyof PlannerData | `childAge${number}`, string>>;

export function validateStep(step: number, d: PlannerData): Errors {
  const e: Errors = {};
  if (step === 0) {
    if (!d.arrivalDate) e.arrivalDate = msg("Choose an approximate arrival date.");
    else if (new Date(d.arrivalDate) < new Date(new Date().toDateString())) e.arrivalDate = msg("Arrival date must be in the future.");
    if (!(d.nights >= 1 && d.nights <= 50)) e.nights = msg("Length of stay must be between 1 and 50 nights.");
    if (!d.dateFlex) e.dateFlex = msg("Let us know if your dates are fixed.");
    if (!d.travellerType) e.travellerType = msg("Tell us if this is your first trip to Mexico.");
  }
  if (step === 1 && d.regions.length === 0) e.regions = msg("Pick at least one region, or “Not sure yet”.");
  if (step === 2 && !d.budget) e.budget = msg("Choose a budget, or “Not sure yet”.");
  if (step === 3) {
    if (d.adults < 1) e.adults = msg("At least one adult is required.");
    d.childAges.slice(0, d.children).forEach((age, i) => {
      if (age === "") e[`childAge${i}`] = msg("Age required");
    });
  }
  if (step === 4) {
    if (d.name.trim().length < 2) e.name = msg("Please enter your name.");
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(d.email)) e.email = msg("Please enter a valid email address.");
    if (d.phone && !/^[\d\s()-]{6,}$/.test(d.phone)) e.phone = msg("Please enter a valid phone number.");
    if (d.contactMethods.length === 0) e.contactMethods = msg("Choose at least one way to reach you.");
    if (d.contactMethods.includes("Telephone") && !d.phone)
      e.phone = msg("Add a phone number so we can reach you by phone.");
  }
  return e;
}
