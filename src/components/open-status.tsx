"use client";

import { useOpenStatus } from "@/lib/use-open-status";
import { cn } from "@/lib/utils";

export function OpenStatus({ className, tone = "dark" }: { className?: string; tone?: "dark" | "light" }) {
  const status = useOpenStatus();

  return (
    <p
      className={cn(
        "flex min-h-7 items-center gap-2.5 font-display text-[0.95rem]",
        tone === "light" ? "text-paper" : "text-ink",
        className,
      )}
      aria-live="polite"
    >
      {status && (
        <>
          <span
            aria-hidden
            className={cn(
              "size-2.5 rounded-full",
              status.isOpen ? "bg-marigold" : "bg-muted/60",
            )}
          />
          {status.label}
        </>
      )}
    </p>
  );
}
