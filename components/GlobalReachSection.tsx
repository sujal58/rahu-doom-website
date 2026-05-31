"use client";

import dynamic from "next/dynamic";
import { useState } from "react";
import { Globe, MapPin, HeartHandshake } from "lucide-react";
import Reveal from "@/components/Reveal";
import type { CountryKey } from "@/components/GlobalMap";

// Leaflet touches `window` — must not SSR
const GlobalMap = dynamic(() => import("@/components/GlobalMap"), {
  ssr: false,
  loading: () => (
    <div className="flex h-full items-center justify-center rounded-2xl bg-cloud">
      <p className="text-sm text-ink-mute">Loading map…</p>
    </div>
  ),
});

const PILLS: { key: CountryKey; label: string }[] = [
  { key: "usa",   label: "🇺🇸 USA"   },
  { key: "india", label: "🇮🇳 India" },
  { key: "nepal", label: "🇳🇵 Nepal" },
];

const CARDS = [
  {
    icon: Globe,
    title: "Global Expertise",
    text: "Built by founders with international experience.",
    red: true,
  },
  {
    icon: MapPin,
    title: "Local Delivery",
    text: "Based in Nepal, close to our clients.",
    red: false,
  },
  {
    icon: HeartHandshake,
    title: "Trusted Partnership",
    text: "Long-term support, not one-off projects.",
    red: false,
  },
];

export default function GlobalReachSection() {
  const [selected, setSelected] = useState<CountryKey | "all">("all");

  return (
    <section className="border-b border-white/10 bg-[#15181D]">
      <div className="mx-auto max-w-container px-5 py-20 lg:px-8 lg:py-24">

        {/* Heading */}
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <span className="inline-flex items-center rounded-full bg-brand/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-brand">
              Global Reach
            </span>
            <h2 className="mt-4 text-4xl font-extrabold leading-tight text-white sm:text-5xl">
              Global Experience,{" "}
              <span className="text-brand">Local Roots</span>
            </h2>
            <p className="mt-4 text-white/60">
              Our founders bring international expertise from the USA and India,
              now building world-class solutions right here in Nepal.
            </p>
          </div>
        </Reveal>

        {/* Country filter pills */}
        <Reveal delay={80}>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {PILLS.map((p) => (
              <button
                key={p.key}
                onClick={() => setSelected(selected === p.key ? "all" : p.key)}
                className={`rounded-full px-5 py-2 text-sm font-semibold transition-colors ${
                  selected === p.key
                    ? "bg-brand text-white"
                    : "border border-white/15 text-white/60 hover:border-brand hover:text-brand"
                }`}
              >
                {p.label}
              </button>
            ))}
          </div>
        </Reveal>

        {/* Map + right cards */}
        <Reveal delay={140}>
          <div className="mt-8 grid gap-6 lg:grid-cols-[1fr_280px]">

            {/* Map */}
            <div className="relative h-[360px] overflow-hidden rounded-2xl border border-white/10 shadow-[0_4px_24px_-8px_rgba(0,0,0,0.4)] lg:h-[440px]">
              <GlobalMap selected={selected} />

              {/* Floating info card — z-[1000] to sit above Leaflet tiles but below controls */}
              <div className="absolute bottom-4 left-4 z-[1000] flex max-w-[220px] items-center gap-3 rounded-xl bg-white px-4 py-3 shadow-lg">
                <Globe size={18} className="shrink-0 text-brand" />
                <div>
                  <p className="text-xs font-bold text-ink">Serving Clients Worldwide</p>
                  <p className="mt-0.5 text-[11px] text-ink-mute">built on global expertise</p>
                </div>
              </div>
            </div>

            {/* Right cards */}
            <div className="flex flex-col gap-4">
              {CARDS.map((c) => (
                <div
                  key={c.title}
                  className={`flex flex-1 flex-col justify-center rounded-2xl p-6 ${
                    c.red
                      ? "bg-brand"
                      : "border border-white/10 bg-white/[0.04]"
                  }`}
                >
                  <c.icon
                    size={22}
                    className={c.red ? "text-white/80" : "text-brand"}
                  />
                  <h3 className={`mt-3 font-bold ${c.red ? "text-white" : "text-white"}`}>
                    {c.title}
                  </h3>
                  <p className={`mt-1 text-sm ${c.red ? "text-white/75" : "text-white/60"}`}>
                    {c.text}
                  </p>
                </div>
              ))}
            </div>

          </div>
        </Reveal>

      </div>
    </section>
  );
}
