import type { Metadata, Viewport } from "next";
import "./globals.css";
import { MotionProvider } from "@/components/motion-provider";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} | Coffee, momo and sandwiches at Thakali Chowk, Rudrapur`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  keywords: [
    "cafe in Rudrapur",
    "cafe near Thakali Chowk",
    "Rudrapur restaurant",
    "Kanchan Rupandehi cafe",
    "coffee shop near Butwal",
    "momo Rudrapur",
    "Ngolo's Cafe",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_NP",
    url: "/",
    siteName: site.name,
    title: `${site.name} | Thakali Chowk, Rudrapur`,
    description: site.description,
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} | Thakali Chowk, Rudrapur`,
    description: site.description,
  },
  robots: { index: true, follow: true },
  other: {
    "geo.region": "NP-P5",
    "geo.placename": "Rudrapur, Rupandehi",
    "geo.position": `${site.geo.lat};${site.geo.lng}`,
  },
};

export const viewport: Viewport = {
  themeColor: "#f5f6f2",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <a
          href="#menu"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-marigold focus:px-4 focus:py-2 focus:font-display"
        >
          Skip to menu
        </a>
        <MotionProvider>{children}</MotionProvider>
      </body>
    </html>
  );
}
