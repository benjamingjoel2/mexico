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

export const steps = ["When", "Where", "Budget", "Who", "Contact"] as const;

export const regionOptions: { id: string; label: string; detail: string; image: ImageKey }[] = [
  { id: "cdmx-oaxaca", label: "Mexico City & Oaxaca", detail: "Museums, mezcal, markets", image: "oaxaca" },
  { id: "yucatan-riviera", label: "Yucatán & Riviera Maya", detail: "Cenotes, ruins, haciendas", image: "merida" },
  { id: "tulum-bacalar", label: "Tulum & Bacalar", detail: "Jungle, lagoon, Caribbean", image: "bacalar" },
  { id: "colonial", label: "Colonial heartland", detail: "CDMX, San Miguel, Guanajuato", image: "guanajuato" },
  { id: "baja", label: "Baja & Los Cabos", detail: "Desert, whales, Sea of Cortez", image: "los-cabos" },
  { id: "chiapas-yucatan", label: "Chiapas & Yucatán", detail: "Highlands, Palenque, jungle", image: "chiapas" },
  { id: "pacific", label: "Pacific coast", detail: "Surf towns, Vallarta, Oaxaca coast", image: "puerto-escondido" },
  { id: "not-sure", label: "Not sure yet", detail: "Help us choose", image: "cenote-1" },
];

export const budgetOptions = [
  { id: "value-luxury", label: "Value luxury", fromUSD: 350, toUSD: 600, detail: "Characterful boutique hotels, private guides where they matter most." },
  { id: "premium", label: "Premium", fromUSD: 600, toUSD: 1100, detail: "Our favourite haciendas and design hotels, private drivers throughout." },
  { id: "ultra-luxury", label: "Ultra luxury", fromUSD: 1100, toUSD: null, detail: "The finest suites, private villas, charter flights and exclusive access." },
  { id: "not-sure", label: "Not sure yet", fromUSD: null, toUSD: null, detail: "We'll suggest options at a few price points." },
] as const;

export const addonOptions = [
  { id: "insurance", label: "Travel insurance", detail: "We'll share information on suitable policies." },
  { id: "international-flights", label: "International flights", detail: "Help finding flights to and from Mexico." },
  { id: "domestic-flights", label: "Domestic flights", detail: "We book internal flights as part of your trip." },
  { id: "private-drivers", label: "Private drivers", detail: "Door-to-door transfers with bilingual drivers." },
];

export const contactOptions = ["Email", "WhatsApp", "Telephone"];

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
    if (!d.arrivalDate) e.arrivalDate = "Choose an approximate arrival date.";
    else if (new Date(d.arrivalDate) < new Date(new Date().toDateString())) e.arrivalDate = "Arrival date must be in the future.";
    if (!(d.nights >= 1 && d.nights <= 50)) e.nights = "Length of stay must be between 1 and 50 nights.";
    if (!d.dateFlex) e.dateFlex = "Let us know if your dates are fixed.";
    if (!d.travellerType) e.travellerType = "Tell us if this is your first trip to Mexico.";
  }
  if (step === 1 && d.regions.length === 0) e.regions = "Pick at least one region, or “Not sure yet”.";
  if (step === 2 && !d.budget) e.budget = "Choose a budget, or “Not sure yet”.";
  if (step === 3) {
    if (d.adults < 1) e.adults = "At least one adult is required.";
    d.childAges.slice(0, d.children).forEach((age, i) => {
      if (age === "") e[`childAge${i}`] = "Age required";
    });
  }
  if (step === 4) {
    if (d.name.trim().length < 2) e.name = "Please enter your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(d.email)) e.email = "Please enter a valid email address.";
    if (d.phone && !/^[\d\s()-]{6,}$/.test(d.phone)) e.phone = "Please enter a valid phone number.";
    if (d.contactMethods.length === 0) e.contactMethods = "Choose at least one way to reach you.";
    if ((d.contactMethods.includes("WhatsApp") || d.contactMethods.includes("Telephone")) && !d.phone)
      e.phone = "Add a phone number so we can reach you on WhatsApp or by phone.";
  }
  return e;
}
