import { destinations as rawDestinations, partnerStayCounts } from "@/data/destinations";
import { experiences as rawExperiences } from "@/data/experiences";
import { itineraries as rawItineraries } from "@/data/itineraries";
import { stays as rawStays } from "@/data/stays";
import { faqs as rawFaqs } from "@/data/faqs";
import type { BudgetTier, RegionId } from "@/data/types";
import { getLocale, tr } from "@/i18n/server";
import type { Locale } from "@/i18n/locales";

/**
 * Content in the current page's language. Each export reads like the plain data, but a property
 * access returns the copy translated into the locale set by the page (setLocale), via the
 * dictionaries in i18n/*.json. Slugs, image keys and other identifiers are left untouched.
 */
function localized<T extends object>(raw: T): T {
  const cache = new Map<Locale, T>();
  return new Proxy(raw, {
    get(target, key) {
      const l = getLocale();
      let v = target;
      if (l !== "en") {
        v = cache.get(l) as T;
        if (!v) cache.set(l, (v = tr(target)));
      }
      const r = Reflect.get(v, key);
      return typeof r === "function" ? r.bind(v) : r;
    },
  });
}

export const destinations = localized(rawDestinations);
export const experiences = localized(rawExperiences);
export const itineraries = localized(rawItineraries);
export const stays = localized(rawStays);
export const faqs = localized(rawFaqs);
export { partnerStayCounts };

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

export const regionLabels: Record<RegionId, string> = localized({
  "yucatan-caribbean": "Yucatán & Caribbean",
  "central-highlands": "Central highlands",
  "oaxaca-chiapas": "Oaxaca & Chiapas",
  "pacific-coast": "Pacific coast",
  "baja-north": "Baja & the north",
});

export const budgetLabels: Record<BudgetTier, string> = localized({
  "value-luxury": "Value luxury",
  premium: "Premium",
  "ultra-luxury": "Ultra luxury",
});
