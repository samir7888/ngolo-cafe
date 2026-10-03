"use client";

import { motion, type Variants } from "framer-motion";
import { MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { OpenStatus } from "@/components/open-status";
import { Photo } from "@/components/photo";
import { images } from "@/lib/images";
import { mapsDirectionsUrl, site } from "@/lib/site";

const ease = [0.22, 1, 0.36, 1] as const;

/** One orchestrated entrance on page load. Nothing else on the page animates on scroll. */
const line: Variants = {
  hidden: { y: "105%" },
  show: (i: number) => ({ y: 0, transition: { duration: 0.9, ease, delay: 0.1 + i * 0.12 } }),
};

const fade: Variants = {
  hidden: { opacity: 0, y: 12 },
  show: (i: number) => ({ opacity: 1, y: 0, transition: { duration: 0.7, ease, delay: 0.55 + i * 0.1 } }),
};

export function Hero() {
  return (
    <section id="top" className="mx-auto grid max-w-6xl gap-10 px-5 pb-16 pt-10 md:px-8 md:pb-24 md:pt-16 lg:grid-cols-12 lg:gap-14">
      <div className="flex flex-col justify-center lg:col-span-7">
        <h1 className="text-[clamp(2.7rem,7.2vw,5.25rem)] font-semibold">
          <span className="sr-only">{site.name}: </span>
          {["Coffee, momo,", "and a table at", "Thakali Chowk."].map((text, i) => (
            <span key={text} className="block overflow-hidden whitespace-nowrap pb-[0.1em]">
              <motion.span
                className="block"
                variants={line}
                custom={i}
                initial="hidden"
                animate="show"
              >
                {text}
              </motion.span>
            </span>
          ))}
        </h1>

        <motion.p
          className="mt-8 max-w-xl text-xl text-ink/80"
          variants={fade}
          custom={0}
          initial="hidden"
          animate="show"
        >
          {site.name} is a small neighbourhood cafe on ADP Road. Fresh espresso, steaming plates of momo,
          sandwiches, pasta and desserts, every day from 7 AM to 9 PM.
        </motion.p>

        <motion.div
          className="mt-9 flex flex-wrap gap-3"
          variants={fade}
          custom={1}
          initial="hidden"
          animate="show"
        >
          <Button asChild>
            <a href="#menu">See the menu</a>
          </Button>
          <Button asChild variant="outline">
            <a href={mapsDirectionsUrl} target="_blank" rel="noopener noreferrer">
              <MapPin /> Get directions
            </a>
          </Button>
        </motion.div>

        <motion.div variants={fade} custom={2} initial="hidden" animate="show" className="mt-8">
          <OpenStatus />
        </motion.div>
      </div>

      <motion.div
        className="relative lg:col-span-5"
        initial={{ clipPath: "inset(100% 0 0 0)" }}
        animate={{ clipPath: "inset(0% 0 0 0)" }}
        transition={{ duration: 1.1, ease, delay: 0.2 }}
      >
        <div className="relative aspect-[4/5] w-full overflow-hidden rounded-md bg-paper-2 lg:aspect-auto lg:h-full lg:min-h-[560px]">
          <Photo
            src={images.hero.src}
            fallback={images.hero.fallback}
            alt={images.hero.alt}
            priority
            sizes="(min-width: 1024px) 40vw, 100vw"
          />
        </div>
      </motion.div>
    </section>
  );
}
