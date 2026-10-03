"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { menu, menuNote, rupees } from "@/lib/menu";
import { cn } from "@/lib/utils";

export function Menu() {
  const [active, setActive] = useState(menu[0].id);

  return (
    <section id="menu" className="bg-forest text-paper">
      <div className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
        <div className="max-w-2xl">
          <h2 className="text-4xl font-semibold md:text-6xl">Menu</h2>
          <p className="mt-4 text-lg text-paper/70">
            {menuNote}
          </p>
        </div>

        <Tabs value={active} onValueChange={setActive} className="mt-12 grid gap-10 lg:grid-cols-12 lg:gap-16">
          <TabsList
            aria-label="Menu categories"
            className="-mx-5 flex gap-1 overflow-x-auto px-5 pb-1 lg:col-span-4 lg:mx-0 lg:flex-col lg:gap-0 lg:overflow-visible lg:px-0 lg:pb-0"
          >
            {menu.map((c) => {
              const isActive = c.id === active;
              return (
                <TabsTrigger
                  key={c.id}
                  value={c.id}
                  className={cn(
                    "shrink-0 whitespace-nowrap py-3 pr-5 font-display text-xl font-medium lg:border-b lg:border-paper/15 lg:py-4 lg:text-2xl",
                    isActive ? "text-paper" : "text-paper/50 hover:text-paper/80",
                  )}
                >
                  {isActive && (
                    <motion.span
                      layoutId="menu-marker"
                      aria-hidden
                      className="absolute bottom-0 left-0 right-0 h-[3px] bg-marigold lg:bottom-0 lg:right-auto lg:top-0 lg:h-auto lg:w-[3px]"
                      transition={{ type: "spring", stiffness: 500, damping: 42 }}
                    />
                  )}
                  <span className={cn("block transition-transform duration-300", isActive && "lg:translate-x-4")}>
                    {c.label}
                  </span>
                </TabsTrigger>
              );
            })}
          </TabsList>

          <div className="lg:col-span-8">
            {menu.map((c) => (
              <TabsContent key={c.id} value={c.id}>
                  <motion.div
                    key={c.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <p className="mb-8 text-lg italic text-paper/70">{c.intro}</p>
                    <ul>
                      {c.items.map((item) => (
                        <li key={item.name} className="py-4">
                          <div className="flex items-baseline gap-3">
                            <h3 className="font-display text-xl font-medium tracking-normal md:text-2xl">
                              {item.name}
                            </h3>
                            <span
                              aria-hidden
                              className="min-w-6 flex-1 translate-y-[-0.3em] border-b-2 border-dotted border-paper/30"
                            />
                            <span className="font-display text-xl font-medium tabular-nums md:text-2xl">
                              {rupees(item.price)}
                            </span>
                          </div>
                          {item.note && <p className="mt-0.5 text-base text-paper/65">{item.note}</p>}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
              </TabsContent>
            ))}
          </div>
        </Tabs>
      </div>
    </section>
  );
}
