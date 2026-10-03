"use client";

import Image from "next/image";
import { useState } from "react";
import { cn } from "@/lib/utils";

type Props = {
  src: string;
  fallback?: string;
  alt: string;
  className?: string;
  sizes?: string;
  priority?: boolean;
};

/** Tries `src`, then `fallback`, then shows a plain block. Never a broken image. */
export function Photo({ src, fallback, alt, className, sizes = "100vw", priority }: Props) {
  const [current, setCurrent] = useState(src);
  const [failed, setFailed] = useState(false);

  if (failed) {
    return <div role="img" aria-label={alt} className={cn("bg-paper-2", className)} />;
  }

  return (
    <Image
      key={current}
      src={current}
      alt={alt}
      fill
      sizes={sizes}
      priority={priority}
      onError={() => {
        if (fallback && current !== fallback) setCurrent(fallback);
        else setFailed(true);
      }}
      className={cn("object-cover", className)}
    />
  );
}
