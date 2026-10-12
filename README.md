# Cenote House — marketing site

Tailor-made Mexico travel, *below the surface*. Next.js 15 (App Router) + TypeScript + Tailwind CSS v4.

```bash
npm install
npm run dev      # http://localhost:3000
npm run build && npm start
```

## Where things live

| Path | What |
| --- | --- |
| `config/site.ts` | Brand name, contact details (`[PHONE]`, `[EMAIL]`, WhatsApp `[NUMBER]`), currencies + FX rates, navigation, footer links |
| `data/types.ts` | Content types — the contract a future CMS needs to satisfy |
| `data/destinations/` | 18 destinations (guide-style: hook, best for, key highlights, months, highlights, things to do, tips, FAQs) |
| `data/experiences.ts`, `itineraries.ts`, `stays.ts`, `testimonials.ts`, `faqs.ts`, `team.ts` | Seed content. Stays, testimonials and team are **placeholders** |
| `data/images.ts` | Image registry (Unsplash placeholders). Pages reference images by key — swap a `src` to change it everywhere |
| `content/blog/*.mdx` | Journal posts (frontmatter + markdown), rendered with `next-mdx-remote` |
| `app/globals.css` | Design tokens (cenote / sand / terra palette, fonts, buttons, article typography) |
| `components/planner/` | 5-step trip planner (modal + `/plan-your-trip`), validation, localStorage progress |
| `app/api/plan`, `app/api/brochure`, `app/api/contact` | Form endpoints — currently log the payload. See `TODO`s for email/CRM |

## Features

- Announcement bar, sticky header with mega-menus (Destinations / Experiences / About), mobile slide-out drawer with accordions
- Currency switcher (USD, CAD, EUR, GBP, MXN) — all prices are stored in USD and converted on render (`lib/currency.ts`); choice is remembered
- Site-wide search overlay (destinations, trips, stays, experiences, journal) — `⌘K`/`Ctrl+K` to open, `Esc` to close, arrow keys to navigate
- Floating WhatsApp button, footer with review badge + membership placeholders
- Pages: home, `/destinations` (guide-format index) + `/destinations/[slug]`, `/trips` (filter by region/duration/budget) + `/trips/[slug]`, `/experiences` + `/experiences/[slug]`, `/stays/[slug]`, `/about`, `/why-travel-with-us`, `/testimonials`, `/faq`, `/contact`, `/blog` + `/blog/[slug]`, `/legal/*`
- SEO: per-page metadata + Open Graph, canonical URLs, `sitemap.xml`, `robots.txt`, JSON-LD (TravelAgency, BreadcrumbList, FAQPage, TouristTrip, Article)
- Hurricane season (Jun–Nov) flagged in month grids for coastal destinations

## Before launch

- Replace every `[PLACEHOLDER]` in `config/site.ts` and set `NEXT_PUBLIC_SITE_URL`
- Replace placeholder stays, testimonials and team profiles with real ones
- Swap Unsplash images for your own photography (`data/images.ts`); add a hero cenote video in `app/page.tsx` if you have one
- Wire the API routes to email/CRM, add spam protection, and replace the static FX rates with a live feed
