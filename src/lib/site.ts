/**
 * Single source of truth for everything the owner needs to confirm.
 * Search the project for "TODO(owner)" to find every placeholder.
 */

export const site = {
  name: "Ngolo's Cafe & Bistro",
  shortName: "Ngolo's",
  // TODO(owner): replace with the real domain once bought
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.ngoloscafe.com.np",
  description:
    "Ngolo's Cafe & Bistro is a cafe on ADP Road at Thakali Chowk, Kanchan, Rudrapur (Rupandehi). Fresh espresso, cold coffee, steam and jhol momo, sandwiches, pasta and desserts. Open daily.",

  // TODO(owner): real phone number (also used for the call button and schema)
  phone: "+977 98XXXXXXXX",
  phoneHref: "tel:+97798XXXXXXXX",

  address: {
    street: "Thakali Chowk, ADP Road",
    locality: "Kanchan, Rudrapur",
    district: "Rupandehi",
    region: "Lumbini Province",
    country: "NP",
    countryName: "Nepal",
  },
  // Approximate centre of Rudrapur. TODO(owner): exact pin from Google Maps.
  geo: { lat: 27.6556, lng: 83.5217 },
  mapsQuery: "Thakali Chowk, Rudrapur, Rupandehi, Nepal",

  // Taken from the cafe's own public pages.
  social: {
    facebook: "https://www.facebook.com/p/Ngolos-Cafe-Bistro-61573922379932/",
    tiktok: "https://www.tiktok.com/@ngolos.cafe.bistro",
  },

  // TODO(owner): confirm kitchen time and takeaway policy
  kitchenCloses: "8:30 PM",
  takeaway: "Takeaway orders by phone.",

  // TODO(owner): confirm opening hours. 0 = Sunday ... 6 = Saturday.
  hours: [
    { day: "Sunday", short: "Su", open: "07:00", close: "21:00" },
    { day: "Monday", short: "Mo", open: "07:00", close: "21:00" },
    { day: "Tuesday", short: "Tu", open: "07:00", close: "21:00" },
    { day: "Wednesday", short: "We", open: "07:00", close: "21:00" },
    { day: "Thursday", short: "Th", open: "07:00", close: "21:00" },
    { day: "Friday", short: "Fr", open: "07:00", close: "21:00" },
    { day: "Saturday", short: "Sa", open: "07:00", close: "21:00" },
  ],
  timezone: "Asia/Kathmandu",
} as const;

export const mapsDirectionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
  site.mapsQuery,
)}`;

export const mapsEmbedUrl = `https://www.google.com/maps?q=${encodeURIComponent(
  site.mapsQuery,
)}&output=embed`;

export function formatTime(t: string) {
  const [h, m] = t.split(":").map(Number);
  const suffix = h >= 12 ? "PM" : "AM";
  const hour = h % 12 === 0 ? 12 : h % 12;
  return `${hour}${m ? `:${String(m).padStart(2, "0")}` : ""} ${suffix}`;
}
