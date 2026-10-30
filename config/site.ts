/**
 * Single source of truth for brand, contact, currency and navigation.
 */

export const site = {
  name: "Cenote House",
  tagline: "Tailor-made Mexico, below the surface",
  description:
    "Tailor-made Mexico trips planned by one specialist who knows the country personally: cenotes, colonial cities, haciendas and the Mexico beyond the resorts.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://cenotehouse.tourground.com",
  locale: "en_US",
  foundedYear: 2014,
  replyTime: "Replies within one working day",
  /** One address for the brand. No phone, WhatsApp, social links, review badges or licence/membership claims (owner's decision). */
  contact: {
    email: "cenotehouse@tourground.com",
    /** Business address: IOS OFFICES Torre Reforma coworking, Mexico City (iosoffices.com). */
    address: "Paseo de la Reforma 483, Piso 14, Col. Cuauhtémoc, 06500 Ciudad de México, Mexico",
    street: "Paseo de la Reforma 483, Piso 14, Col. Cuauhtémoc",
    postalCode: "06500",
    locality: "Ciudad de México",
    hours: "Specialists available 7 days a week",
  },
  stats: { partnerStays: 120, regions: 9 },
} as const;

/* ---------------------------------------------------------------- Currency */

export const currencies = {
  USD: { code: "USD", symbol: "$", label: "US Dollar", rate: 1, locale: "en-US" },
  CAD: { code: "CAD", symbol: "CA$", label: "Canadian Dollar", rate: 1.37, locale: "en-CA" },
  EUR: { code: "EUR", symbol: "€", label: "Euro", rate: 0.92, locale: "en-IE" },
  GBP: { code: "GBP", symbol: "£", label: "British Pound", rate: 0.78, locale: "en-GB" },
  MXN: { code: "MXN", symbol: "MX$", label: "Mexican Peso", rate: 18.5, locale: "es-MX" },
} as const;

export type CurrencyCode = keyof typeof currencies;
export const defaultCurrency: CurrencyCode = "USD";
/** Indicative rates — TODO: replace with a live FX feed. */
export const fxNote = "Prices converted from USD at indicative rates and rounded.";

/* -------------------------------------------------------------- Navigation */

export interface NavLink {
  label: string;
  href: string;
}
export interface NavColumn {
  heading: string;
  links: NavLink[];
}

const d = (label: string, slug: string): NavLink => ({ label, href: `/destinations/${slug}` });
const e = (label: string, slug: string): NavLink => ({ label, href: `/experiences/${slug}` });

export const nav = {
  destinations: {
    label: "Destinations",
    href: "/destinations",
    columns: [
      {
        heading: "Top destinations",
        links: [
          d("Mexico City", "mexico-city"),
          d("Tulum", "tulum"),
          d("Oaxaca", "oaxaca"),
          d("Cancun & Riviera Maya", "cancun-riviera-maya"),
          d("Los Cabos", "los-cabos"),
          d("San Miguel de Allende", "san-miguel-de-allende"),
        ],
      },
      {
        heading: "Yucatán & Caribbean",
        links: [
          d("Mérida", "merida"),
          d("Valladolid", "valladolid"),
          d("Holbox", "holbox"),
          d("Isla Mujeres", "isla-mujeres"),
          d("Bacalar", "bacalar"),
          d("Playa del Carmen", "playa-del-carmen"),
        ],
      },
      {
        heading: "Central & Pacific",
        links: [
          d("Puebla", "puebla"),
          d("Guanajuato", "guanajuato"),
          d("Puerto Vallarta", "puerto-vallarta"),
          d("Puerto Escondido", "puerto-escondido"),
          d("Chiapas (San Cristóbal)", "chiapas"),
          d("Copper Canyon", "copper-canyon"),
        ],
      },
    ] as NavColumn[],
  },
  trips: { label: "Trips", href: "/trips" },
  experiences: {
    label: "Experiences",
    href: "/experiences",
    links: [
      e("Cenotes and caves", "cenotes-and-caves"),
      e("Mayan ruins", "mayan-ruins"),
      e("Food and mezcal journeys", "food-and-mezcal"),
      e("Day of the Dead", "day-of-the-dead"),
      e("Whale sharks and whale watching", "whale-sharks-and-whales"),
      e("Monarch butterfly sanctuaries", "monarch-butterflies"),
      e("Honeymoons", "honeymoons"),
      e("Family trips", "family-trips"),
      e("Luxury haciendas", "luxury-haciendas"),
      e("Wellness retreats", "wellness-retreats"),
      e("Surf trips", "surf-trips"),
      e("Copper Canyon rail journey", "copper-canyon-rail"),
    ] as NavLink[],
  },
  about: {
    label: "About",
    href: "/about",
    links: [
      { label: "Why travel with us", href: "/why-travel-with-us" },
      { label: "Our story", href: "/about" },
      { label: "Responsible travel", href: "/about#responsible-travel" },
      { label: "FAQ", href: "/faq" },
      { label: "Contact", href: "/contact" },
      { label: "Blog", href: "/blog" },
    ] as NavLink[],
  },
  blog: { label: "Journal", href: "/blog" },
};

export const footerNav: NavColumn[] = [
  {
    heading: "Featured trips",
    links: [
      { label: "Yucatán, below the surface", href: "/trips/yucatan-below-the-surface" },
      { label: "Mexico City & Oaxaca", href: "/trips/mexico-city-and-oaxaca" },
      { label: "The colonial heartland", href: "/trips/colonial-heartland" },
      { label: "Copper Canyon by rail", href: "/trips/copper-canyon-by-rail" },
      { label: "All trips", href: "/trips" },
    ],
  },
  {
    heading: "Popular reads",
    links: [
      { label: "The best of Mexico", href: "/blog/best-of-mexico" },
      { label: "Best cenotes in the Yucatán", href: "/blog/best-cenotes-yucatan" },
      { label: "Mexico City for first-timers", href: "/blog/mexico-city-first-timers-guide" },
      { label: "When to visit, month by month", href: "/blog/when-to-visit-mexico" },
    ],
  },
  {
    heading: "About",
    links: [
      { label: "Our story", href: "/about" },
      { label: "Why travel with us", href: "/why-travel-with-us" },
      { label: "Responsible travel", href: "/about#responsible-travel" },
    ],
  },
  {
    heading: "Resources",
    links: [
      { label: "Plan your trip", href: "/plan-your-trip" },
      { label: "All destinations", href: "/destinations" },
      { label: "FAQ", href: "/faq" },
      { label: "Contact", href: "/contact" },
      { label: "The Yucatán Guide (free)", href: "/#brochure" },
    ],
  },
];

export const legalLinks: NavLink[] = [
  { label: "Privacy policy", href: "/legal/privacy" },
  { label: "Booking terms", href: "/legal/terms" },
  { label: "Cookie policy", href: "/legal/cookies" },
];
