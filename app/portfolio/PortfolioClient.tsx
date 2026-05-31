"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Reveal from "@/components/Reveal";
import { projects } from "@/lib/data";

const categories = ["All", "Web App", "Software", "CRM", "Marketing"];

export default function PortfolioClient() {
  const [filter, setFilter] = useState("All");
  const filtered =
    filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
    <>
      {/* Filters */}
      <div className="mt-10 flex flex-wrap gap-2">
        {categories.map((c) => (
          <button
            key={c}
            onClick={() => setFilter(c)}
            className={`rounded-full px-5 py-2 text-sm font-semibold transition-colors ${
              filter === c
                ? "bg-brand text-white"
                : "border border-white/10 text-white/60 hover:border-brand hover:text-brand"
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((p, i) => (
          <Reveal key={p.title} delay={i * 60}>
            <div className="group overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] transition-all hover:-translate-y-1 hover:border-brand/40 hover:shadow-[0_16px_40px_-12px_rgba(164,22,26,0.18)]">
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={p.image}
                  alt={p.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                {/* Category badge overlaid top-left */}
                <span className="absolute left-3 top-3 rounded-md bg-black/55 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-white backdrop-blur-sm">
                  {p.category}
                </span>
                {/* Hover brand overlay */}
                <div className="absolute inset-0 bg-brand/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold">{p.title}</h3>
                <p className="mt-2 text-sm text-white/60">{p.text}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      <div className="mt-16 overflow-hidden rounded-2xl border border-white/10 bg-[#15181D] p-10 text-center">
        <h2 className="text-2xl font-bold">Have a project in mind?</h2>
        <Link
          href="/contact"
          className="mt-5 inline-flex items-center gap-2 rounded-lg bg-brand px-7 py-3.5 font-semibold text-white transition-colors hover:bg-brand-dark"
        >
          Let&apos;s talk <ArrowRight size={17} />
        </Link>
      </div>
    </>
  );
}
