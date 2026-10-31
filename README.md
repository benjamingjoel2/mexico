# Cenote House — marketing site

Tailor-made Mexico travel, *below the surface*. Next.js 15 (App Router) + TypeScript + Tailwind CSS v4.

```bash
npm install
npm run dev      # http://localhost:3000
npm run build && npm start
```

## Static preview build

`node scripts/build-preview.mjs` produces `preview-out/`: a fully static copy of the site with bundled images and
relative URLs, so it can be hosted from any sub-path for review. Forms simulate success in this build (no API routes).

## Where things live

| Path | What |
| --- | --- |
| `config/site.ts` | Brand name, email (`cenotehouse@tourground.com`), business address, currencies + FX rates, navigation, footer links |
| `data/types.ts` | Content types — the contract a future CMS needs to satisfy |
| `data/destinations/` | 18 destinations (guide-style: hook, best for, key highlights, months, highlights, things to do, tips, FAQs) |
| `data/experiences.ts`, `itineraries.ts`, `stays.ts`, `faqs.ts` | Seed content. Stays are **fictional placeholders** |
| `data/legal.ts` | Privacy policy, booking terms and cookie policy (complete; en/fr/de/es) |
| `data/images.ts` | Image registry (stock development images). Pages reference images by key — swap a `src` to change it everywhere |
| `content/blog/*.mdx` | Journal posts (frontmatter + markdown), rendered with `next-mdx-remote` |
| `app/globals.css` | Design tokens (cenote / sand / terra palette, fonts, buttons, article typography) |
| `components/planner/` | 5-step trip planner (modal + `/plan-your-trip`), validation, localStorage progress |
| `app/api/plan`, `app/api/brochure`, `app/api/contact` | Form endpoints — currently log the payload. See `TODO`s for email/CRM |

## Features

- Announcement bar, sticky header with mega-menus (Destinations / Experiences / About), mobile slide-out drawer with accordions
- Currency switcher (USD, CAD, EUR, GBP, MXN) — all prices are stored in USD and converted on render (`lib/currency.ts`); choice is remembered
- Site-wide search overlay (destinations, trips, stays, experiences, journal) — `⌘K`/`Ctrl+K` to open, `Esc` to close, arrow keys to navigate
- Footer with contact email, business address and legal links
- Pages: home, `/destinations` (guide-format index) + `/destinations/[slug]`, `/trips` (filter by region/duration/budget) + `/trips/[slug]`, `/experiences` + `/experiences/[slug]`, `/stays/[slug]`, `/about`, `/why-travel-with-us`, `/faq`, `/contact`, `/blog` + `/blog/[slug]`, `/legal/*`
- SEO: per-page metadata + Open Graph, canonical URLs, `sitemap.xml`, `robots.txt`, JSON-LD (TravelAgency, BreadcrumbList, FAQPage, TouristTrip, Article)
- Hurricane season (Jun–Nov) flagged in month grids for coastal destinations

## Languages (EN · FR · DE · ES)

English is served at the plain URLs; French, German and Spanish under `/fr`, `/de` and `/es`, all pre-rendered from the
same `app/[locale]` routes. `middleware.ts` maps unprefixed URLs to the English pages (and 308-redirects `/en/...` to them);
there is no redirect by browser language.

- Translations live in `i18n/{fr,de,es}.json`, keyed by the English text. Server components call `t()` / `tf()` /
  `tr()` from `i18n/server.ts`; content in `lib/data.ts` is translated automatically for the page's locale.
- A missing translation fails the build. To list what is missing, build with `I18N_COLLECT=/tmp/missing.txt`
  (add `I18N_PSEUDO=1` to bracket translated text, so anything untranslated stands out in `.next/server/app/fr`).
- Client components use `useT()`; their strings (`t("…")`, `tf("…")`, `msg("…")`) are collected into
  `i18n/client-keys.json` by `npm run i18n:keys` (runs before `dev` and `build`), so only those keys ship to the browser.
- Journal posts are translated per file in `content/blog/{fr,de,es}/`; legal pages per locale in `data/legal.ts`.
- Language selector: `components/layout/LanguageSelector.tsx` (header and mobile menu). Canonical + hreflang come from
  `languageAlternates()` in `lib/seo.ts`; the sitemap lists every page in all four languages.

## Before launch

- SEO: set `NEXT_PUBLIC_SITE_URL` to the final domain (canonical URLs, sitemap and Open Graph tags use it), set `GOOGLE_SITE_VERIFICATION` in Vercel, then submit `/sitemap.xml` in Google Search Console

- Set up the `cenotehouse@tourground.com` inbox and set `NEXT_PUBLIC_SITE_URL` (`https://cenotehouse.tourground.com`). The business address is IOS OFFICES Torre Reforma coworking, Paseo de la Reforma 483, Mexico City. By the owner's decision (October 2026) there is no phone, WhatsApp, social links, review badges, memberships, team profiles or testimonials; `/testimonials` redirects to `/about`.
- Have a lawyer review the privacy policy, booking terms and cookie policy (`data/legal.ts`)
- Replace the fictional placeholder stays with real ones
- Swap the stock development images for your own photography (`data/images.ts`); add a hero cenote video in `app/page.tsx` if you have one
- Wire the API routes to email/CRM, add spam protection, and replace the static FX rates with a live feed
