"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronDown, ArrowRight } from "lucide-react";
import { navLinks, services } from "@/lib/data";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "border-b border-white/[0.08] bg-[#080A0E]/90 shadow-[0_4px_30px_rgba(0,0,0,0.5)] backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-container items-center justify-between px-5 lg:px-8">

        {/* Logo */}
        <Link href="/" className="logo-ring" aria-label="Rahu Doom home">
          <div className="logo-ring-inner">
            <Image
              src="/logo.png"
              alt="Rahu Doom Pvt Ltd"
              width={677}
              height={229}
              priority
              className="h-10 w-auto"
            />
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 lg:flex">
          <Link href="/" className="text-sm font-medium text-white/60 transition-colors hover:text-white">
            Home
          </Link>

          {/* Services dropdown */}
          <div className="group relative">
            <button className="flex items-center gap-1.5 text-sm font-medium text-white/60 transition-colors hover:text-white">
              Services
              <ChevronDown size={14} className="transition-transform duration-200 group-hover:rotate-180" />
            </button>
            <div className="invisible absolute left-1/2 top-full w-72 -translate-x-1/2 pt-4 opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100">
              <div className="overflow-hidden rounded-2xl border border-white/[0.08] bg-[#0D0F14]/95 p-2 shadow-[0_20px_60px_rgba(0,0,0,0.7)] backdrop-blur-2xl">
                {services.map((s) => (
                  <Link
                    key={s.slug}
                    href={`/services/${s.slug}`}
                    className="flex items-start gap-3 rounded-xl p-3 transition-colors hover:bg-white/[0.05]"
                  >
                    <s.icon size={17} className="mt-0.5 shrink-0 text-brand" />
                    <span className="text-sm font-medium text-white/75">{s.title}</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {navLinks.filter((l) => l.href !== "/").map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-white/60 transition-colors hover:text-white"
            >
              {l.label}
            </Link>
          ))}

          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-xl bg-brand px-5 py-2.5 text-sm font-bold text-white shadow-[0_0_20px_rgba(164,22,26,0.35)] transition-all hover:bg-brand-dark hover:shadow-[0_0_30px_rgba(164,22,26,0.55)]"
          >
            Get Free Consultation <ArrowRight size={14} />
          </Link>
        </nav>

        {/* Mobile toggle */}
        <button
          className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 text-white/70 transition-colors hover:border-white/20 hover:text-white lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-white/[0.07] bg-[#080A0E]/95 backdrop-blur-2xl lg:hidden">
          <nav className="mx-auto flex max-w-container flex-col px-5 py-5">
            <Link href="/" onClick={() => setOpen(false)} className="py-3 text-sm font-medium text-white/70 hover:text-white">
              Home
            </Link>
            <button
              onClick={() => setServicesOpen((v) => !v)}
              className="flex items-center justify-between py-3 text-sm font-medium text-white/70"
            >
              Services
              <ChevronDown size={16} className={`transition-transform ${servicesOpen ? "rotate-180" : ""}`} />
            </button>
            {servicesOpen && (
              <div className="mb-2 space-y-1 rounded-xl border border-white/[0.06] bg-white/[0.03] p-2">
                {services.map((s) => (
                  <Link
                    key={s.slug}
                    href={`/services/${s.slug}`}
                    onClick={() => setOpen(false)}
                    className="flex items-center gap-2.5 rounded-lg px-3 py-2.5 text-sm text-white/60 hover:bg-white/[0.05] hover:text-white"
                  >
                    <s.icon size={15} className="shrink-0 text-brand" /> {s.title}
                  </Link>
                ))}
              </div>
            )}
            {navLinks.filter((l) => l.href !== "/").map((l) => (
              <Link key={l.href} href={l.href} onClick={() => setOpen(false)} className="py-3 text-sm font-medium text-white/70 hover:text-white">
                {l.label}
              </Link>
            ))}
            <Link href="/contact" onClick={() => setOpen(false)} className="mt-4 inline-flex items-center justify-center gap-2 rounded-xl bg-brand px-5 py-3 font-bold text-white hover:bg-brand-dark">
              Get Free Consultation <ArrowRight size={15} />
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
