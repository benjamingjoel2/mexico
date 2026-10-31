/**
 * Content types. Every page on the site is generated from these shapes,
 * so a future CMS only needs to return objects that match them.
 * All prices are base USD; the currency switcher converts at render time.
 */

import type { ImageKey } from "./images";

export type RegionId =
  | "yucatan-caribbean"
  | "central-highlands"
  | "oaxaca-chiapas"
  | "pacific-coast"
  | "baja-north";

export type Month =
  | "Jan" | "Feb" | "Mar" | "Apr" | "May" | "Jun"
  | "Jul" | "Aug" | "Sep" | "Oct" | "Nov" | "Dec";

/** "best" = ideal, "good" = fine, "mixed" = trade-offs (heat, rain, crowds) */
export type MonthRating = "best" | "good" | "mixed";

export interface MonthInfo {
  month: Month;
  rating: MonthRating;
  /** short note e.g. "Dry, 30°C" */
  note: string;
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
  /** optional grouping for /faq */
  category?: "Before you go" | "On the ground" | "Money" | "Booking with us";
}

export interface Destination {
  slug: string;
  name: string;
  region: RegionId;
  /** Short label shown on cards, e.g. "Yucatán Peninsula" */
  regionLabel: string;
  /** One-line hook for cards */
  hook: string;
  /** "Best for" line, in the style of a personal travel guide */
  bestFor: string;
  /** Comma-style key highlights line */
  keyHighlights: string;
  image: ImageKey;
  gallery: ImageKey[];
  /** 2-3 paragraphs, first-hand voice */
  overview: string[];
  /** Hurricane season (Jun–Nov) is relevant on the Caribbean/Gulf/Pacific coasts */
  hurricaneSeason: boolean;
  bestTime: { summary: string; months: MonthInfo[] };
  highlights: { title: string; description: string }[];
  thingsToDo: { title: string; description: string }[];
  practicalTips: { title: string; description: string }[];
  faqs: FAQ[];
  seo: { title: string; description: string };
}

export interface Experience {
  slug: string;
  name: string;
  /** Short intro for cards */
  summary: string;
  description: string[];
  image: ImageKey;
  /** destination slugs */
  destinations: string[];
  bestMonths: string;
  whatToExpect: { title: string; description: string }[];
  seo: { title: string; description: string };
}

export type BudgetTier = "value-luxury" | "premium" | "ultra-luxury";

export interface ItineraryDay {
  /** e.g. "1" or "2–3" */
  day: string;
  title: string;
  location: string;
  description: string;
  /** stay slug, if one of ours */
  staySlug?: string;
  meals?: string;
}

export interface Itinerary {
  slug: string;
  title: string;
  nights: number;
  /** Region label shown on the card, e.g. "Yucatán · Quintana Roo" */
  regionLabel: string;
  regions: RegionId[];
  destinations: string[];
  experiences: string[];
  budget: BudgetTier;
  image: ImageKey;
  summary: string;
  /** e.g. "Breakfast daily, 6 guided activities, all private transfers" */
  inclusionLine: string;
  highlights: string[];
  /** Base USD per person, two sharing */
  priceFromUSD: number;
  days: ItineraryDay[];
  inclusions: string[];
  exclusions: string[];
  seo: { title: string; description: string };
}

export type StayType = "Hacienda" | "Boutique hotel" | "Beach resort" | "Eco-lodge";

export interface Stay {
  slug: string;
  name: string;
  type: StayType;
  destination: string;
  locationLabel: string;
  image: ImageKey;
  gallery: ImageKey[];
  summary: string;
  description: string[];
  /** Base USD per person per night, two sharing */
  priceFromUSD: number;
  rooms: number;
  features: string[];
  whyWeLoveIt: string;
  seo: { title: string; description: string };
}

export interface BlogPostMeta {
  slug: string;
  title: string;
  description: string;
  date: string;
  author: string;
  image: ImageKey;
  readingMinutes: number;
  tags: string[];
}
