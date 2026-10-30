import type { Metadata, Viewport } from "next";
import { Fraunces, Instrument_Sans } from "next/font/google";
import "./globals.css";
import { site } from "@/config/site";
import { CurrencyProvider } from "@/components/providers/CurrencyProvider";
import { UIProvider } from "@/components/providers/UIProvider";
import { AnnouncementBar } from "@/components/layout/AnnouncementBar";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { LazyOverlays } from "@/components/layout/LazyOverlays";

// Display serif: weight axis only (the SOFT/WONK/opsz axes roughly tripled the file size).
const fraunces = Fraunces({ subsets: ["latin"], variable: "--font-fraunces", display: "swap" });
// The italic is used for one emphasised word per heading, so it is not preloaded.
const frauncesItalic = Fraunces({
  subsets: ["latin"],
  style: "italic",
  variable: "--font-fraunces-italic",
  display: "swap",
  preload: false,
});
const instrument = Instrument_Sans({ subsets: ["latin"], variable: "--font-instrument", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: `${site.name} · Tailor-made Mexico trips, below the surface`, template: `%s · ${site.name}` },
  description: site.description,
  applicationName: site.name,
  openGraph: { siteName: site.name, locale: site.locale, type: "website", url: "/" },
  twitter: { card: "summary_large_image" },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 } },
  // Set GOOGLE_SITE_VERIFICATION in Vercel to verify the site in Google Search Console.
  ...(process.env.GOOGLE_SITE_VERIFICATION && { verification: { google: process.env.GOOGLE_SITE_VERIFICATION } }),
  icons: process.env.NEXT_PUBLIC_PREVIEW_EXPORT === "1" ? undefined : { icon: "/icon.svg" },
};

export const viewport: Viewport = { themeColor: "#0b3d42", width: "device-width", initialScale: 1 };

const orgJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "TravelAgency",
      "@id": `${site.url}/#organization`,
      name: site.name,
      url: site.url,
      logo: `${site.url}/icon.svg`,
      image: `${site.url}/icon.svg`,
      description: site.description,
      email: site.contact.email,
      address: { "@type": "PostalAddress", streetAddress: site.contact.street, postalCode: site.contact.postalCode, addressLocality: site.contact.locality, addressCountry: "MX" },
      areaServed: { "@type": "Country", name: "Mexico" },
      foundingDate: String(site.foundedYear),
    },
    {
      "@type": "WebSite",
      "@id": `${site.url}/#website`,
      name: site.name,
      url: site.url,
      inLanguage: "en",
      publisher: { "@id": `${site.url}/#organization` },
    },
  ],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${fraunces.variable} ${frauncesItalic.variable} ${instrument.variable}`}>
      <body className="antialiased">
        <a href="#main" className="sr-only z-[100] rounded bg-white px-4 py-2 focus:not-sr-only focus:fixed focus:left-4 focus:top-4">
          Skip to content
        </a>
        <CurrencyProvider>
          <UIProvider>
            <AnnouncementBar />
            <Header />
            <main id="main">{children}</main>
            <Footer />
            <LazyOverlays />
          </UIProvider>
        </CurrencyProvider>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }} />
      </body>
    </html>
  );
}
