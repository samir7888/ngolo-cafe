"use client";

import { MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { OpenStatus } from "@/components/open-status";
import { useOpenStatus } from "@/lib/use-open-status";
import { formatTime, mapsDirectionsUrl, mapsEmbedUrl, site } from "@/lib/site";
import { cn } from "@/lib/utils";

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden className={className}>
      <path d="M13.5 21v-8.2h2.8l.4-3.3h-3.2V7.4c0-.9.3-1.6 1.6-1.6h1.7V3a22 22 0 0 0-2.5-.1c-2.5 0-4.2 1.5-4.2 4.3v2.3H7.3v3.3h2.8V21h3.4Z" />
    </svg>
  );
}

function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden className={className}>
      <path d="M19.6 6.7a4.8 4.8 0 0 1-3.8-4.2h-3.4v13.4a2.9 2.9 0 1 1-2-2.8V9.6a6.3 6.3 0 1 0 5.4 6.3V9.3a8.2 8.2 0 0 0 4.8 1.5V7.4a4.8 4.8 0 0 1-1-.7Z" />
    </svg>
  );
}

export function Visit() {
  const status = useOpenStatus();

  return (
    <section id="visit">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-20 md:px-8 md:py-28 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <h2 className="text-4xl font-semibold md:text-5xl">Find us at Thakali Chowk</h2>

          <address className="mt-6 not-italic text-ink/80">
            {site.address.street}
            <br />
            {site.address.locality}
            <br />
            {site.address.district}, {site.address.region}, {site.address.countryName}
          </address>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild>
              <a href={mapsDirectionsUrl} target="_blank" rel="noopener noreferrer">
                <MapPin /> Get directions
              </a>
            </Button>
            <Button asChild variant="outline">
              <a href={site.phoneHref}>
                <Phone /> {site.phone}
              </a>
            </Button>
          </div>

          <div className="mt-12">
            <h3 className="font-display text-2xl font-semibold">Opening hours</h3>
            <OpenStatus className="mt-2" />
            <table className="mt-4 w-full border-collapse font-display">
              <caption className="sr-only">Opening hours by day</caption>
              <tbody>
                {site.hours.map((h, i) => {
                  const isToday = status?.todayIndex === i;
                  return (
                    <tr key={h.day} className="border-b border-line">
                      <th
                        scope="row"
                        className={cn("py-3 text-left font-normal", isToday ? "font-semibold text-ink" : "text-muted")}
                      >
                        {h.day}
                        {isToday && <span className="sr-only"> (today)</span>}
                      </th>
                      <td className={cn("py-3 text-right tabular-nums", isToday && "font-semibold")}>
                        {formatTime(h.open)} to {formatTime(h.close)}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
            <p className="mt-3 text-base text-muted">
              Kitchen closes {site.kitchenCloses}. {site.takeaway}
            </p>
          </div>

          <div className="mt-10 flex gap-3">
            <Button asChild variant="outline" size="sm">
              <a href={site.social.facebook} target="_blank" rel="noopener noreferrer">
                <FacebookIcon className="size-4" /> Facebook
              </a>
            </Button>
            <Button asChild variant="outline" size="sm">
              <a href={site.social.tiktok} target="_blank" rel="noopener noreferrer">
                <TikTokIcon className="size-4" /> TikTok
              </a>
            </Button>
          </div>
        </div>

        <div className="lg:col-span-7">
          <div className="h-[380px] overflow-hidden rounded-md border border-line bg-paper-2 md:h-[520px] lg:h-full lg:min-h-[560px]">
            <iframe
              title={`Map showing ${site.name}`}
              src={mapsEmbedUrl}
              className="size-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  );
}
