import { Photo } from "@/components/photo";
import { images } from "@/lib/images";
import { formatTime, site } from "@/lib/site";

export function About() {
  const { open, close } = site.hours[1];

  return (
    <section id="about" className="border-t border-line">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-20 md:px-8 md:py-28 lg:grid-cols-12 lg:gap-16">
        <div className="relative aspect-[4/3] overflow-hidden rounded-md bg-paper-2 lg:col-span-6">
          <Photo
            src={images.story.src}
            fallback={images.story.fallback}
            alt={images.story.alt}
            sizes="(min-width: 1024px) 50vw, 100vw"
          />
        </div>

        <div className="lg:col-span-6">
          <h2 className="text-4xl font-semibold md:text-5xl">A cozy corner for Rudrapur.</h2>
          {/* TODO(owner): this copy came from the earlier draft; confirm it with the owner */}
          <div className="mt-6 space-y-4 text-ink/80">
            <p>
              Ngolo&apos;s Cafe &amp; Bistro is at Thakali Chowk in Kanchan, a place where students,
              travellers on ADP Road and neighbours can sit down to a proper cup of coffee and food
              made with care.
            </p>
            <p>
              The kitchen keeps things simple: good ingredients, honest portions and fair prices.
              Coffee is ground to order and everything is made fresh.
            </p>
          </div>

          <dl className="mt-10 divide-y divide-line border-y border-line font-display">
            <div className="grid grid-cols-[7rem_1fr] gap-4 py-4">
              <dt className="text-muted">Where</dt>
              <dd>
                {site.address.street}, {site.address.locality}
              </dd>
            </div>
            <div className="grid grid-cols-[7rem_1fr] gap-4 py-4">
              <dt className="text-muted">Serving</dt>
              <dd>Coffee, cold drinks, momo, sandwiches, pasta, desserts</dd>
            </div>
            <div className="grid grid-cols-[7rem_1fr] gap-4 py-4">
              <dt className="text-muted">Open</dt>
              <dd>
                Every day, {formatTime(open)} to {formatTime(close)}
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
}
