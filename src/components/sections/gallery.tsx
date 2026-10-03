import { Photo } from "@/components/photo";
import { images } from "@/lib/images";
import { cn } from "@/lib/utils";

export function Gallery() {
  return (
    <section id="gallery" className="border-b border-line">
      <div className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
        <h2 className="max-w-2xl text-4xl font-semibold md:text-5xl">From the kitchen and counter</h2>
        <div className="mt-12 grid gap-x-4 gap-y-8 md:grid-cols-12 md:gap-x-5">
          {images.gallery.map((img, i) => (
            <figure key={`${img.src}-${i}`} className={cn(img.span)}>
              <div className={cn("relative w-full overflow-hidden rounded-md bg-paper-2", img.ratio)}>
                <Photo src={img.src} alt={img.alt} sizes="(min-width: 768px) 50vw, 100vw" />
              </div>
              <figcaption className="mt-3 font-display text-base text-ink/80">{img.caption}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
