"use client";

import { useMemo, useSyncExternalStore } from "react";
import { site, formatTime } from "@/lib/site";

export type OpenStatus = {
  todayIndex: number;
  isOpen: boolean;
  label: string;
};

const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

function compute(): OpenStatus {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: site.timezone,
    weekday: "long",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  }).formatToParts(new Date());

  const get = (t: string) => parts.find((p) => p.type === t)?.value ?? "";
  const todayIndex = Math.max(0, weekdays.indexOf(get("weekday")));
  const minutes = (Number(get("hour")) % 24) * 60 + Number(get("minute"));

  const today = site.hours[todayIndex];
  const toMin = (t: string) => {
    const [h, m] = t.split(":").map(Number);
    return h * 60 + m;
  };
  const open = toMin(today.open);
  const close = toMin(today.close);

  if (minutes >= open && minutes < close) {
    return { todayIndex, isOpen: true, label: `Open now, until ${formatTime(today.close)}` };
  }
  if (minutes < open) {
    return { todayIndex, isOpen: false, label: `Closed, opens at ${formatTime(today.open)}` };
  }
  const next = site.hours[(todayIndex + 1) % 7];
  return { todayIndex, isOpen: false, label: `Closed, opens tomorrow at ${formatTime(next.open)}` };
}

function subscribe(onChange: () => void) {
  const id = setInterval(onChange, 30_000);
  return () => clearInterval(id);
}

const getMinute = () => Math.floor(Date.now() / 60_000);

/** Returns null on the server and first paint to avoid hydration mismatch. */
export function useOpenStatus(): OpenStatus | null {
  const minute = useSyncExternalStore(subscribe, getMinute, () => null);
  return useMemo(() => (minute === null ? null : compute()), [minute]);
}
