import { destinations, partnerStayCounts } from "@/data/destinations";
import { experiences } from "@/data/experiences";
import { itineraries } from "@/data/itineraries";
import { stays } from "@/data/stays";
import { testimonials } from "@/data/testimonials";
import { faqs } from "@/data/faqs";
import { team } from "@/data/team";
import type { BudgetTier, RegionId } from "@/data/types";

export { destinations, experiences, itineraries, stays, testimonials, faqs, team, partnerStayCounts };

export const getDestination = (slug: string) => destinations.find((d) => d.slug === slug);
export const getExperience = (slug: string) => experiences.find((e) => e.slug === slug);
export const getItinerary = (slug: string) => itineraries.find((i) => i.slug === slug);
export const getStay = (slug: string) => stays.find((s) => s.slug === slug);

export const destinationName = (slug: string) => getDestination(slug)?.name ?? slug;

export const staysIn = (destinationSlug: string) => stays.filter((s) => s.destination === destinationSlug);
export const itinerariesIn = (destinationSlug: string) =>
  itineraries.filter((i) => i.destinations.includes(destinationSlug));
export const itinerariesFor = (experienceSlug: string) =>
  itineraries.filter((i) => i.experiences.includes(experienceSlug));

export const regionLabels: Record<RegionId, string> = {
  "yucatan-caribbean": "Yucatán & Caribbean",
  "central-highlands": "Central highlands",
  "oaxaca-chiapas": "Oaxaca & Chiapas",
  "pacific-coast": "Pacific coast",
  "baja-north": "Baja & the north",
};

export const budgetLabels: Record<BudgetTier, string> = {
  "value-luxury": "Value luxury",
  premium: "Premium",
  "ultra-luxury": "Ultra luxury",
};
