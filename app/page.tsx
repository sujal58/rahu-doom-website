import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Quote, Zap, Star, Check, Globe } from "lucide-react";
import Reveal from "@/components/Reveal";
import StatCounter from "@/components/StatCounter";
import BlogCard from "@/components/BlogCard";
import GlobalReachSection from "@/components/GlobalReachSection";
import {
  services,
  solutions,
  whyChooseUs,
  stats,
  testimonials,
  techStack,
  projects,
  blogPosts,
} from "@/lib/data";

export const metadata: Metadata = {
  title: "Rahu Doom Pvt Ltd — Web, Software, CRM & Digital Marketing in Nepal",
  description:
    "Rahu Doom Pvt Ltd is a Kathmandu-based IT company building web apps, custom software, CRM solutions, and digital marketing for businesses in Nepal and beyond.",
};

export default function Home() {
  return (
    <>
      {/* ─────────────────────────────────────────────
          1. HERO
      ───────────────────────────────────────────── */}
      <section className="relative flex min-h-screen items-center overflow-hidden bg-[#080A0E]">

        <div aria-hidden className="pointer-events-none absolute inset-0">
          <div className="absolute -right-32 -top-32 h-[640px] w-[640px] rounded-full bg-brand/[0.14] blur-[150px]" />
          <div className="absolute -bottom-40 -left-24 h-[440px] w-[440px] rounded-full bg-brand/[0.08] blur-[130px]" />
          <div
            className="absolute inset-0 opacity-[0.022]"
            style={{
              backgroundImage: "radial-gradient(rgba(255,255,255,0.9) 1px, transparent 1px)",
              backgroundSize: "28px 28px",
            }}
          />
          <div
            className="absolute inset-0 opacity-[0.025]"
            style={{
              backgroundImage:
                "linear-gradient(to bottom, transparent calc(100% - 1px), rgba(255,255,255,0.4) 1px)",
              backgroundSize: "100% 88px",
            }}
          />
        </div>

        <div className="relative mx-auto grid w-full max-w-container items-center gap-16 px-5 py-24 lg:grid-cols-[1.15fr_1fr] lg:px-8 lg:min-h-screen lg:py-0">

          {/* LEFT — Typography */}
          <Reveal>
            <span className="inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 backdrop-blur-sm">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-brand" />
              <span className="text-xs font-semibold uppercase tracking-widest text-white/65">
                IT Company · Kathmandu, Nepal
              </span>
            </span>

            <h1 className="mt-8 font-display leading-[0.92] tracking-tight">
              <span className="block text-[clamp(3rem,8vw,6rem)] font-black text-white">
                We Build
              </span>
              <span
                className="block text-[clamp(3rem,8vw,6rem)] font-black text-brand"
                style={{ textShadow: "0 0 100px rgba(164,22,26,0.45)" }}
              >
                Software
              </span>
              <span className="mt-1 block text-[clamp(1.8rem,4.5vw,3.5rem)] font-bold text-white/50">
                that grows your business.
              </span>
            </h1>

            <p className="mt-8 max-w-lg text-lg leading-relaxed text-white/45">
              Web apps, custom software, CRM tools, and AI-powered digital
              marketing — all under one roof. From Kathmandu to the world.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2.5 rounded-xl bg-brand px-8 py-4 font-bold text-white shadow-[0_0_50px_rgba(164,22,26,0.45)] transition-all hover:bg-brand-dark hover:shadow-[0_0_70px_rgba(164,22,26,0.65)]"
              >
                Start Your Project
                <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/portfolio"
                className="inline-flex items-center gap-2.5 rounded-xl border border-white/15 px-8 py-4 font-bold text-white/80 backdrop-blur-sm transition-all hover:border-white/40 hover:text-white"
              >
                See Our Work
              </Link>
            </div>

            <div className="mt-12 flex flex-wrap gap-8 border-t border-white/[0.06] pt-10">
              {[
                { val: "80+", label: "Projects Delivered" },
                { val: "50+", label: "Happy Clients" },
                { val: "3",   label: "Countries" },
              ].map((s) => (
                <div key={s.label}>
                  <div className="font-display text-2xl font-extrabold text-white">{s.val}</div>
                  <div className="mt-0.5 text-[11px] font-semibold uppercase tracking-widest text-white/35">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>

          {/* RIGHT — CSS dashboard mockup */}
          <Reveal delay={220}>
            <div className="relative mx-auto w-full max-w-[420px] lg:mx-0">
              <div aria-hidden className="absolute inset-0 scale-110 rounded-3xl bg-brand/[0.06] blur-3xl" />

              <div className="relative rounded-3xl border border-white/[0.08] bg-white/[0.03] p-6 shadow-[0_40px_120px_rgba(0,0,0,0.75)] backdrop-blur-xl">
                <div className="mb-6 flex items-center gap-1.5">
                  <span className="h-3 w-3 rounded-full bg-brand" />
                  <span className="h-3 w-3 rounded-full bg-white/15" />
                  <span className="h-3 w-3 rounded-full bg-white/15" />
                  <span className="ml-auto text-[10px] font-semibold uppercase tracking-widest text-white/25">
                    Project Dashboard
                  </span>
                </div>

                <div className="mb-5 grid grid-cols-3 gap-3">
                  {[
                    { label: "Active",  val: "12",  cls: "bg-brand/15 text-brand" },
                    { label: "Done",    val: "68",  cls: "bg-green-500/10 text-green-400" },
                    { label: "Clients", val: "50+", cls: "bg-blue-500/10 text-blue-400" },
                  ].map((item) => (
                    <div key={item.label} className={`rounded-xl p-3 ${item.cls}`}>
                      <div className="text-xl font-extrabold">{item.val}</div>
                      <div className="mt-0.5 text-[9px] font-bold uppercase tracking-wider opacity-60">
                        {item.label}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mb-5 space-y-3">
                  {[
                    { label: "Web Development",   pct: 92 },
                    { label: "Digital Marketing", pct: 87 },
                    { label: "CRM Solutions",     pct: 78 },
                  ].map((bar) => (
                    <div key={bar.label}>
                      <div className="mb-1 flex justify-between">
                        <span className="text-xs text-white/40">{bar.label}</span>
                        <span className="text-xs font-bold text-white">{bar.pct}%</span>
                      </div>
                      <div className="h-1.5 overflow-hidden rounded-full bg-white/[0.06]">
                        <div className="h-full rounded-full bg-brand" style={{ width: `${bar.pct}%` }} />
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2">
                  {["Next.js", "React", "Laravel", "AI SEO", "CRM"].map((t) => (
                    <span key={t} className="rounded-lg border border-white/[0.08] bg-white/[0.04] px-3 py-1.5 text-xs font-semibold text-white/50">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="absolute -right-3 -top-3 flex items-center gap-1.5 rounded-2xl border border-white/10 bg-[#0F1115] px-3 py-2 shadow-xl">
                <Zap size={13} className="text-brand" />
                <span className="text-[11px] font-bold text-white">Fast Delivery</span>
              </div>
              <div className="absolute -bottom-3 -left-3 flex items-center gap-1.5 rounded-2xl border border-white/10 bg-[#0F1115] px-3 py-2 shadow-xl">
                <Star size={13} className="text-yellow-400" />
                <span className="text-[11px] font-bold text-white">5-Star Quality</span>
              </div>
            </div>
          </Reveal>

        </div>
      </section>

      {/* ─────────────────────────────────────────────
          2. TECH MARQUEE
      ───────────────────────────────────────────── */}
      <div className="border-y border-white/[0.06] bg-[#0A0C10] py-4">
        <div className="flex overflow-hidden">
          <div className="flex shrink-0 animate-marquee">
            {[...techStack, ...techStack].map((t, i) => (
              <span key={i} className="whitespace-nowrap px-7 py-1.5 font-display text-xs font-bold uppercase tracking-[0.25em] text-white/20">
                {t}
                <span className="ml-7 text-white/10">·</span>
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* ─────────────────────────────────────────────
          3. SERVICES — Editorial numbered list
      ───────────────────────────────────────────── */}
      <section className="border-b border-white/[0.06] bg-[#080A0E]">
        <div className="mx-auto max-w-container px-5 py-20 lg:px-8 lg:py-28">
          <div className="grid gap-16 lg:grid-cols-[280px_1fr] lg:gap-20">

            {/* Left — sticky label + portrait */}
            <Reveal>
              <div className="lg:sticky lg:top-28 lg:self-start">
                <p className="text-xs font-bold uppercase tracking-[0.22em] text-brand">What We Do</p>
                <h2 className="mt-3 text-4xl font-extrabold leading-tight text-white">Our Core Services</h2>
                <p className="mt-4 text-sm leading-relaxed text-white/40">
                  End-to-end technology solutions — from first idea to final product, and everything in between.
                </p>
                <Link href="/contact" className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-brand hover:underline">
                  Work with us <ArrowRight size={14} />
                </Link>

                {/* Services portrait */}
                <div className="relative mt-8 hidden lg:block">
                  <div className="group h-64 w-64 overflow-hidden rounded-full ring-4 ring-brand/20 ring-offset-4 ring-offset-[#080A0E]">
                    <Image
                      src="/services-portrait.png"
                      alt="Rahu Doom services"
                      width={1254}
                      height={1254}
                      className="h-full w-full scale-110 object-cover object-top transition-transform duration-500 group-hover:scale-125"
                    />
                  </div>
                  <div aria-hidden className="absolute inset-0 -z-10 rounded-full bg-brand/10 blur-2xl scale-125" />
                </div>
              </div>
            </Reveal>

            {/* Right — numbered list */}
            <div className="divide-y divide-white/[0.05]">
              {services.map((s, i) => (
                <Reveal key={s.slug} delay={i * 70}>
                  <Link
                    href={`/services/${s.slug}`}
                    className="group flex items-center gap-6 py-8 transition-all hover:pl-2"
                  >
                    <span className="shrink-0 font-display text-5xl font-black text-white/[0.07] transition-colors group-hover:text-brand/25 lg:text-7xl">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-3">
                        <s.icon size={19} className="shrink-0 text-brand" />
                        <h3 className="text-lg font-bold text-white transition-colors group-hover:text-brand">
                          {s.title}
                        </h3>
                      </div>
                      <p className="mt-1.5 max-w-lg text-sm text-white/40">{s.short}</p>
                    </div>
                    <ArrowUpRight size={20} className="shrink-0 text-white/15 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-brand" />
                  </Link>
                </Reveal>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────
          4. ABOUT US
      ───────────────────────────────────────────── */}
      <section className="border-b border-white/[0.06] bg-[#0C0E13]">
        <div className="mx-auto grid max-w-container items-center gap-12 px-5 py-20 lg:grid-cols-2 lg:px-8 lg:py-28">

          {/* LEFT — overlapping photos */}
          <Reveal>
            <div className="relative mx-auto w-full max-w-md pb-10 lg:mx-0 lg:pb-12">

              {/* Larger photo */}
              <div className="overflow-hidden rounded-2xl shadow-[0_24px_60px_rgba(0,0,0,0.6)]">
                <Image
                  src="/about-1.png"
                  alt="Rahu Doom team"
                  width={1122}
                  height={1402}
                  className="w-full object-cover"
                />
              </div>

              {/* Smaller photo — bottom-right overlap */}
              <div className="absolute -bottom-8 -right-4 w-[46%] overflow-hidden rounded-2xl shadow-[0_16px_40px_rgba(0,0,0,0.5)] ring-4 ring-[#0C0E13] sm:-right-8">
                <Image
                  src="/about-2.png"
                  alt="Rahu Doom founders"
                  width={1122}
                  height={1402}
                  className="w-full object-cover"
                />
              </div>

              {/* Floating badge */}
              <div className="absolute -left-4 -top-5 flex items-center gap-3 rounded-2xl border border-white/10 bg-brand px-4 py-3 shadow-lg sm:-left-8">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/20">
                  <Globe size={18} className="text-white" />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-white/70">Global Experience</p>
                  <p className="text-sm font-bold text-white">USA, India &amp; Nepal</p>
                </div>
              </div>
            </div>
          </Reveal>

          {/* RIGHT — copy */}
          <Reveal delay={150}>
            <span className="inline-flex items-center rounded-full bg-brand/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-brand">
              About Us
            </span>
            <h2 className="mt-4 text-4xl font-extrabold leading-[1.08] text-white sm:text-5xl">
              Transforming Ideas Into Technology
            </h2>
            <p className="mt-5 text-lg text-white/50">
              Rahu Doom Pvt Ltd brings together international experience and
              local insight to deliver web apps, custom software, CRM tools, and
              digital marketing — helping businesses in Nepal and beyond grow
              with confidence.
            </p>

            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {[
                "Custom Web & Software Development",
                "CRM & Automation Tools",
                "AI-Powered SEO & Marketing",
                "Dedicated Ongoing Support",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand text-white">
                    <Check size={11} strokeWidth={3} />
                  </span>
                  <span className="text-sm font-medium text-white/70">{item}</span>
                </li>
              ))}
            </ul>

            <Link
              href="/about"
              className="mt-8 inline-flex items-center gap-2 rounded-xl border border-white/15 px-7 py-3 font-bold text-white transition-all hover:border-brand/50 hover:bg-brand/[0.08]"
            >
              Discover More <ArrowRight size={16} />
            </Link>
          </Reveal>

        </div>
      </section>

      {/* ─────────────────────────────────────────────
          5. SOLUTIONS — Bento grid
      ───────────────────────────────────────────── */}
      <section className="border-b border-white/[0.06] bg-[#080A0E]">
        <div className="mx-auto max-w-container px-5 py-20 lg:px-8 lg:py-28">

          <Reveal>
            <div className="mb-12 flex flex-wrap items-end justify-between gap-6">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.22em] text-brand">What We Build</p>
                <h2 className="mt-3 text-4xl font-extrabold leading-tight text-white sm:text-5xl">
                  Industry Solutions
                </h2>
              </div>
              <p className="max-w-sm text-sm text-white/40">
                From education to hospitality — real software for real industries, built to last.
              </p>
            </div>
          </Reveal>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {solutions.map((s, i) => {
              const featured = i === 0 || i === 4;
              return (
                <Reveal key={s.title} delay={i * 55}>
                  <div className={`group relative flex h-full flex-col overflow-hidden rounded-2xl border p-6 transition-all hover:-translate-y-0.5 ${
                    featured
                      ? "border-brand/25 bg-gradient-to-br from-brand/[0.10] to-brand/[0.03] hover:border-brand/50 hover:shadow-[0_20px_60px_-15px_rgba(164,22,26,0.3)]"
                      : "border-white/[0.06] bg-white/[0.025] hover:border-brand/20 hover:bg-white/[0.04] hover:shadow-[0_16px_50px_-15px_rgba(0,0,0,0.4)]"
                  }`}>
                    <div className="flex items-start justify-between gap-2">
                      <span className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl transition-colors ${
                        featured ? "bg-brand text-white" : "bg-brand/10 text-brand group-hover:bg-brand group-hover:text-white"
                      }`}>
                        <s.icon size={23} />
                      </span>
                      <span className="rounded-full border border-white/[0.08] bg-white/[0.04] px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-white/35">
                        {s.tag}
                      </span>
                    </div>
                    <h3 className="mt-5 font-bold text-white">{s.title}</h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-white/45">{s.desc}</p>
                    {featured && (
                      <div className="mt-5 inline-flex items-center gap-1.5 text-xs font-bold text-brand">
                        Learn more <ArrowRight size={12} />
                      </div>
                    )}
                    {featured && (
                      <div aria-hidden className="absolute -right-8 -top-8 h-36 w-36 rounded-full bg-brand/15 blur-3xl" />
                    )}
                  </div>
                </Reveal>
              );
            })}

            <Reveal delay={480}>
              <div className="group flex h-full flex-col items-center justify-center rounded-2xl border border-dashed border-white/12 p-6 text-center transition-all hover:border-brand/35 hover:bg-brand/[0.04]">
                <p className="font-bold text-white">Have a custom idea?</p>
                <p className="mt-1.5 text-sm text-white/40">We build solutions tailored exactly to your needs.</p>
                <Link href="/contact" className="mt-5 inline-flex items-center gap-2 rounded-xl bg-brand px-5 py-2.5 text-sm font-bold text-white transition-colors hover:bg-brand-dark">
                  Tell Us <ArrowRight size={14} />
                </Link>
              </div>
            </Reveal>
          </div>

        </div>
      </section>

      {/* ─────────────────────────────────────────────
          6. STATS — Red band
      ───────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-brand">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              "linear-gradient(to right,rgba(255,255,255,0.5) 1px,transparent 1px),linear-gradient(to bottom,rgba(255,255,255,0.5) 1px,transparent 1px)",
            backgroundSize: "44px 44px",
          }}
        />
        <div className="relative mx-auto grid max-w-container grid-cols-2 gap-y-12 px-5 py-16 lg:grid-cols-3 lg:px-8">
          {stats.map((s) => (
            <StatCounter key={s.label} value={s.value} suffix={s.suffix} label={s.label} />
          ))}
        </div>
      </section>

      {/* ─────────────────────────────────────────────
          7. WHY CHOOSE US — with photo
      ───────────────────────────────────────────── */}
      <section className="border-b border-white/[0.06] bg-[#0C0E13]">
        <div className="mx-auto max-w-container px-5 py-20 lg:px-8 lg:py-28">
          <div className="grid gap-14 lg:grid-cols-2 lg:items-center">

            {/* LEFT — copy + feature list */}
            <Reveal>
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-brand">Why Choose Us</p>
              <h2 className="mt-4 text-4xl font-extrabold leading-[1.05] text-white sm:text-5xl">
                We don&apos;t just deliver code.
                <br />
                <span className="text-brand">We deliver results.</span>
              </h2>
              <p className="mt-5 max-w-md text-lg text-white/45">
                A dedicated in-house team that ships on time, communicates clearly,
                and sticks around long after launch.
              </p>

              <ul className="mt-8 space-y-5">
                {whyChooseUs.map((w, i) => (
                  <Reveal key={w.title} delay={i * 70}>
                    <li className="flex items-start gap-4">
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-brand/10 text-brand">
                        <w.icon size={20} />
                      </span>
                      <div>
                        <h3 className="font-bold text-white">{w.title}</h3>
                        <p className="mt-0.5 text-sm text-white/45">{w.text}</p>
                      </div>
                    </li>
                  </Reveal>
                ))}
              </ul>
            </Reveal>

            {/* RIGHT — photo with decorative elements */}
            <Reveal delay={160}>
              <div className="relative mx-auto w-full max-w-lg lg:mx-0">
                {/* Decorative glows */}
                <div aria-hidden className="absolute -right-10 -top-10 h-56 w-56 rounded-full bg-brand/10 blur-3xl" />
                <div aria-hidden className="absolute -bottom-8 -left-8 h-40 w-40 rounded-full bg-brand/10 blur-2xl" />

                {/* Dot accent */}
                <div
                  aria-hidden
                  className="absolute -bottom-2 -left-2 h-28 w-28 bg-dots opacity-40"
                  style={{
                    maskImage: "radial-gradient(ellipse at bottom left, #000 20%, transparent 80%)",
                    WebkitMaskImage: "radial-gradient(ellipse at bottom left, #000 20%, transparent 80%)",
                  }}
                />

                <div className="relative overflow-hidden rounded-2xl shadow-[0_24px_60px_rgba(0,0,0,0.6)]">
                  <Image
                    src="/why-choose.png"
                    alt="Why choose Rahu Doom"
                    width={1586}
                    height={992}
                    className="w-full object-cover"
                  />
                  {/* Dark overlay to blend with dark theme */}
                  <div className="absolute inset-0 bg-[#0C0E13]/20" />
                </div>
              </div>
            </Reveal>

          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────
          8. PROCESS — with photos
      ───────────────────────────────────────────── */}
      <section className="border-b border-white/[0.06] bg-[#080A0E]">
        <div className="mx-auto grid max-w-container items-start gap-12 px-5 py-20 lg:grid-cols-2 lg:px-8 lg:py-28">

          {/* LEFT — steps */}
          <div>
            <Reveal>
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-brand">Our Process</p>
              <h2 className="mt-3 text-4xl font-extrabold leading-tight text-white sm:text-5xl">
                How we turn ideas into reality
              </h2>
              <p className="mt-4 max-w-md text-white/45">
                A clear, proven process — from understanding your needs to
                launching and supporting your solution.
              </p>
            </Reveal>

            <div className="mt-10 space-y-4">
              {[
                { num: "01", title: "Understand Your Needs", text: "We start by fully understanding your business goals to ensure the right solution." },
                { num: "02", title: "Design & Develop",      text: "We craft and build tailor-made software aligned with your specific targets." },
                { num: "03", title: "Launch & Support",      text: "We launch smoothly and provide ongoing support for continual improvement." },
              ].map((s, i) => (
                <Reveal key={s.num} delay={i * 110}>
                  <div className="flex items-start gap-5 rounded-2xl border border-white/[0.07] bg-white/[0.03] p-5">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand text-sm font-extrabold text-white">
                      {s.num}
                    </span>
                    <div>
                      <h3 className="font-bold text-white">{s.title}</h3>
                      <p className="mt-1 text-sm text-white/45">{s.text}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          {/* RIGHT — photos */}
          <Reveal delay={180}>
            <div className="flex flex-col gap-4">

              {/* Large photo */}
              <div className="overflow-hidden rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.6)]">
                <Image
                  src="/process-meeting.png"
                  alt="Team meeting"
                  width={1448}
                  height={1086}
                  className="w-full object-cover"
                />
              </div>

              {/* Bottom row */}
              <div className="grid grid-cols-2 gap-4">
                <div className="overflow-hidden rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
                  <Image
                    src="/process-coding.png"
                    alt="Developer coding"
                    width={1448}
                    height={1086}
                    className="w-full object-cover"
                  />
                </div>
                <div className="flex flex-col justify-center rounded-2xl bg-brand p-5 shadow-[0_0_30px_rgba(164,22,26,0.35)]">
                  <p className="text-lg font-extrabold leading-snug text-white">Global Expertise</p>
                  <p className="mt-2 text-sm text-white/80">Founders from the USA, India &amp; Nepal</p>
                </div>
              </div>

            </div>
          </Reveal>

        </div>
      </section>

      {/* ─────────────────────────────────────────────
          9. PORTFOLIO PREVIEW
      ───────────────────────────────────────────── */}
      <section className="border-b border-white/[0.06] bg-[#0C0E13]">
        <div className="mx-auto max-w-container px-5 py-20 lg:px-8 lg:py-24">

          <Reveal>
            <div className="mb-12 flex flex-wrap items-end justify-between gap-4">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.22em] text-brand">Our Work</p>
                <h2 className="mt-3 text-4xl font-extrabold text-white">Recent Projects</h2>
              </div>
              <Link href="/portfolio" className="inline-flex items-center gap-1.5 text-sm font-bold text-brand hover:underline">
                View all projects <ArrowRight size={14} />
              </Link>
            </div>
          </Reveal>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {projects.slice(0, 3).map((p, i) => (
              <Reveal key={p.title} delay={i * 80}>
                <div className="group overflow-hidden rounded-2xl border border-white/[0.07] bg-white/[0.025] transition-all hover:-translate-y-1 hover:border-brand/25 hover:shadow-[0_28px_60px_-18px_rgba(164,22,26,0.22)]">
                  <div className="relative h-52 overflow-hidden bg-white/[0.04]">
                    <Image
                      src={p.image}
                      alt={p.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#080A0E]/80 via-transparent to-transparent" />
                    <span className="absolute left-3 top-3 rounded-lg bg-black/60 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-white backdrop-blur-sm">
                      {p.category}
                    </span>
                    <div className="absolute inset-0 bg-brand/15 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  </div>
                  <div className="p-6">
                    <h3 className="font-bold text-white">{p.title}</h3>
                    <p className="mt-1.5 text-sm text-white/40">{p.text}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

        </div>
      </section>

      {/* ─────────────────────────────────────────────
          10. TESTIMONIALS
      ───────────────────────────────────────────── */}
      <section className="border-b border-white/[0.06] bg-[#080A0E]">
        <div className="mx-auto max-w-container px-5 py-20 lg:px-8 lg:py-24">

          <Reveal>
            <div className="mb-12">
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-brand">Testimonials</p>
              <h2 className="mt-3 text-4xl font-extrabold text-white">Trusted by our clients</h2>
            </div>
          </Reveal>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((t, i) => (
              <Reveal key={i} delay={i * 80}>
                <figure className="flex h-full flex-col rounded-2xl border border-white/[0.07] bg-white/[0.025] p-7 transition-all hover:border-brand/20">
                  <Quote size={30} className="text-brand/35" />
                  <blockquote className="mt-4 flex-1 text-[15px] leading-relaxed text-white/70">
                    {t.quote}
                  </blockquote>
                  <figcaption className="mt-6 flex items-center gap-3 border-t border-white/[0.06] pt-5">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand text-sm font-extrabold text-white">
                      {t.name.charAt(0)}
                    </div>
                    <div>
                      <div className="text-sm font-bold text-white">{t.name}</div>
                      <div className="text-xs text-white/30">{t.role}</div>
                    </div>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>

        </div>
      </section>

      {/* ─────────────────────────────────────────────
          11. GLOBAL REACH
      ───────────────────────────────────────────── */}
      <GlobalReachSection />

      {/* ─────────────────────────────────────────────
          12. BLOG
      ───────────────────────────────────────────── */}
      <section className="border-b border-white/[0.06] bg-[#080A0E]">
        <div className="mx-auto max-w-container px-5 py-20 lg:px-8 lg:py-24">

          <Reveal>
            <div className="mb-12 flex flex-wrap items-end justify-between gap-4">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.22em] text-brand">Blog</p>
                <h2 className="mt-3 text-4xl font-extrabold text-white">Exploring Technology</h2>
              </div>
              <Link href="/blog" className="inline-flex items-center gap-1.5 text-sm font-bold text-brand hover:underline">
                All articles <ArrowRight size={14} />
              </Link>
            </div>
          </Reveal>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post, i) => (
              <Reveal key={post.slug} delay={i * 110}>
                <BlogCard post={post} />
              </Reveal>
            ))}
          </div>

        </div>
      </section>

      {/* ─────────────────────────────────────────────
          13. CTA — Dramatic full-section
      ───────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-[#080A0E]">
        <div aria-hidden className="pointer-events-none absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand/[0.12] blur-[130px]" />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.018]"
          style={{
            backgroundImage: "radial-gradient(rgba(255,255,255,0.9) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />

        <div className="relative mx-auto max-w-container px-5 py-32 text-center lg:px-8 lg:py-40">
          <Reveal>
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-brand">Get Started</p>
            <h2 className="mx-auto mt-5 max-w-3xl font-display text-5xl font-black leading-[1.02] text-white sm:text-6xl lg:text-7xl">
              Ready to build
              <br />
              something{" "}
              <span className="text-brand" style={{ textShadow: "0 0 80px rgba(164,22,26,0.5)" }}>
                great?
              </span>
            </h2>
            <p className="mx-auto mt-6 max-w-lg text-lg text-white/40">
              The first consultation is free — no pressure, just honest advice
              about what we can build for you.
            </p>

            <div className="mt-12 flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2.5 rounded-xl bg-brand px-10 py-4 font-bold text-white shadow-[0_0_70px_rgba(164,22,26,0.5)] transition-all hover:bg-brand-dark hover:shadow-[0_0_100px_rgba(164,22,26,0.7)]"
              >
                Get Free Consultation
                <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/portfolio"
                className="inline-flex items-center gap-2.5 rounded-xl border border-white/15 px-10 py-4 font-bold text-white/80 backdrop-blur-sm transition-all hover:border-white/35 hover:text-white"
              >
                View Our Portfolio
              </Link>
            </div>

            <div className="mt-14 flex flex-wrap justify-center gap-x-10 gap-y-2 text-xs font-semibold uppercase tracking-widest text-white/20">
              <span>80+ Projects</span>
              <span className="hidden h-3 w-px self-center bg-white/10 sm:block" />
              <span>50+ Clients</span>
              <span className="hidden h-3 w-px self-center bg-white/10 sm:block" />
              <span>USA · India · Nepal</span>
              <span className="hidden h-3 w-px self-center bg-white/10 sm:block" />
              <span>Est. 2026</span>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
