"use client";

import Link from "next/link";
import { Menu, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { site } from "@/lib/site";

const links = [
  { href: "#menu", label: "Menu" },
  { href: "#about", label: "About" },
  { href: "#gallery", label: "Photos" },
  { href: "#visit", label: "Visit" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-line bg-paper">
      <div className="mx-auto flex h-[72px] max-w-6xl items-center justify-between px-5 md:px-8">
        <Link href="#top" className="flex items-baseline gap-2 font-display">
          <span className="text-2xl font-semibold tracking-tight">{site.shortName}</span>
          <span className="hidden text-sm text-muted sm:inline">Cafe &amp; Bistro</span>
        </Link>

        <nav aria-label="Main" className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="font-display text-[0.95rem] font-medium text-ink/80 transition-colors hover:text-ink"
            >
              {l.label}
            </a>
          ))}
          <Button asChild size="sm">
            <a href={site.phoneHref}>
              <Phone /> Call us
            </a>
          </Button>
        </nav>

        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden" aria-label="Open menu">
              <Menu className="size-6" />
            </Button>
          </SheetTrigger>
          <SheetContent>
            <SheetTitle className="font-display text-2xl font-semibold">{site.shortName}</SheetTitle>
            <SheetDescription className="sr-only">Site navigation</SheetDescription>
            <nav aria-label="Mobile" className="mt-10 flex flex-col">
              {links.map((l) => (
                <SheetClose asChild key={l.href}>
                  <a
                    href={l.href}
                    className="border-b border-paper/15 py-4 font-display text-2xl font-medium"
                  >
                    {l.label}
                  </a>
                </SheetClose>
              ))}
            </nav>
            <Button asChild className="mt-8">
              <a href={site.phoneHref}>
                <Phone /> Call us
              </a>
            </Button>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
