import { menu } from "@/lib/menu";
import { site } from "@/lib/site";

const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

/** schema.org CafeOrCoffeeShop, used for Google local results. */
export function localBusinessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "CafeOrCoffeeShop",
    "@id": `${site.url}/#cafe`,
    name: site.name,
    description: site.description,
    url: site.url,
    telephone: site.phone,
    image: `${site.url}/opengraph-image`,
    servesCuisine: ["Coffee", "Nepali", "Momo", "Snacks", "Continental"],
    priceRange: "Rs. 120 - Rs. 280",
    currenciesAccepted: "NPR",
    hasMenu: `${site.url}/#menu`,
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.street,
      addressLocality: site.address.locality,
      addressRegion: site.address.region,
      addressCountry: site.address.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: site.geo.lat,
      longitude: site.geo.lng,
    },
    openingHoursSpecification: site.hours.map((h, i) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: dayNames[i],
      opens: h.open,
      closes: h.close,
    })),
    sameAs: [site.social.facebook, site.social.tiktok],
    areaServed: "Rudrapur, Rupandehi",
  };
}

export function menuJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Menu",
    name: `${site.name} menu`,
    hasMenuSection: menu.map((c) => ({
      "@type": "MenuSection",
      name: c.label,
      hasMenuItem: c.items.map((i) => ({
        "@type": "MenuItem",
        name: i.name,
        ...(i.note ? { description: i.note } : {}),
        offers: { "@type": "Offer", price: i.price, priceCurrency: "NPR" },
      })),
    })),
  };
}
