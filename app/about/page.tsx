import fs from "node:fs";
import path from "node:path";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Target, Eye, Heart, Linkedin } from "lucide-react";
import Reveal from "@/components/Reveal";
import { stats, company } from "@/lib/data";
import StatCounter from "@/components/StatCounter";
import { DotGrid, DotGridLight, Glow } from "@/components/Backdrop";

// Whether a file actually exists in /public — lets a founder card fall back to
// the letter-initial avatar instead of rendering a broken image when a photo
// hasn't been added yet. Resolved at build time (this is a server component).
function publicAssetExists(src: string) {
  return fs.existsSync(
    path.join(process.cwd(), "public", src.replace(/^\//, "")),
  );
}

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Rahu Doom Pvt Ltd — a Kathmandu-based IT company building software, web apps, CRM, and digital marketing solutions.",
};

const founders = [
  {
    name: "Kamal Neupane",
    role: "Co-Founder",
    note: "Spent several years in the USA, now bringing that experience and expertise home to Nepal",
    image: "/Kamal_Neupane.png",
    flag: "us",
    flagLabel: "USA",
    linkedin: "#",
  },
  {
    name: "Sunil Sharma",
    role: "Co-Founder",
    note: "Founder of ZilFox Digital Solutions · IT & Marketing",
    image: "/Sunil_Sharma.png",
    flag: "in",
    flagLabel: "India",
    linkedin: "#",
  },
];

const values = [
  {
    icon: Target,
    title: "Our Mission",
    text: "To help businesses in Nepal and beyond grow through reliable, well-built technology — without the agency runaround.",
  },
  {
    icon: Eye,
    title: "Our Vision",
    text: "To be Nepal's most trusted software partner, known for quality work and genuine, long-term relationships.",
  },
  {
    icon: Heart,
    title: "Our Values",
    text: "Honesty, craftsmanship, and real ownership of the outcomes we deliver for every client.",
  },
];

const journey = [
  {
    year: "2024",
    title: "Where it began",
    text: "Kamal and Sunil first connected over LinkedIn, discovering a shared vision to build something meaningful back home.",
  },
  {
    year: "2025",
    title: "Planning the foundation",
    text: "Months of conversations turned an idea into a plan — the team, the mission, and the roadmap for Rahu Doom took shape.",
  },
  {
    year: "2026",
    title: "Officially launched",
    text: "In May 2026, Rahu Doom Pvt Ltd officially opened its doors in Nepal, ready to spark a digital revolution.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-white/10 bg-[#0F1115]">
        <Glow className="-right-32 -top-40 h-[460px] w-[460px]" />
        <DotGrid />
        <div className="relative mx-auto max-w-container px-5 py-20 lg:px-8 lg:py-28">
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-wider text-brand">
              About {company.shortName}
            </p>
            <h1 className="mt-2 max-w-3xl text-4xl font-extrabold leading-[1.05] sm:text-5xl">
              Building ideas. Creating future.
            </h1>
            <p className="mt-5 max-w-2xl text-lg text-white/60">
              Rahu Doom Pvt Ltd was born from a shared belief — that world-class
              technology and marketing don&apos;t have to come from abroad. They
              can be built right here in Nepal.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Our Story */}
      <section className="border-b border-white/10 bg-[#15181D]">
        <div className="mx-auto max-w-container px-5 py-20 lg:px-8 lg:py-24">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr]">
            <Reveal>
              <p className="text-sm font-semibold uppercase tracking-wider text-brand">
                Our story
              </p>
              <h2 className="mt-2 text-4xl font-bold">
                Two journeys,
                <br /> one dream
              </h2>
            </Reveal>
            <Reveal delay={120}>
              <div className="space-y-5 text-lg text-white/60">
                <p>
                  The company was founded by two professionals who each carved
                  their own path before coming together. Kamal Neupane spent
                  several years in the United States running an IT company, and
                  returned home eager to put that experience and expertise to
                  work in Nepal. Sunil Sharma, after working across multiple
                  companies in India, went on to successfully launch his own
                  venture —{" "}
                  <a
                    href="https://zilfox.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-brand underline-offset-4 hover:underline"
                  >
                    ZilFox Digital Solutions Pvt Ltd
                  </a>{" "}
                  — bringing strong expertise in both IT and digital marketing.
                </p>
                <p>
                  Two different journeys, one common dream: to return home and
                  build something meaningful for their own country. Together,
                  they founded Rahu Doom Pvt Ltd in Nepal — driven by a single
                  mission: to spark a digital revolution at home and help Nepali
                  businesses compete on the global stage.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Our Journey — timeline */}
      <section className="bg-[#0F1115]">
        <div className="mx-auto max-w-container px-5 py-20 lg:px-8 lg:py-24">
          <Reveal>
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-wider text-brand">
                Our journey
              </p>
              <h2 className="mt-2 text-4xl font-bold">How we got here</h2>
            </div>
          </Reveal>

          <ol className="mt-14 max-w-3xl">
            {journey.map((m, i) => (
              <Reveal key={m.year} delay={i * 140}>
                <li className="relative pb-14 pl-12 last:pb-0">
                  {/* Connecting line down to the next milestone (skipped on the last) */}
                  {i < journey.length - 1 && (
                    <span
                      aria-hidden
                      className="absolute left-[7px] top-3 h-full w-0.5 bg-white/15"
                    />
                  )}
                  {/* Marker dot sitting on the line */}
                  <span
                    aria-hidden
                    className="absolute left-0 top-2 h-4 w-4 rounded-full border-2 border-brand bg-white ring-4 ring-[#0F1115]"
                  />
                  <div className="font-display text-4xl font-extrabold leading-none text-brand sm:text-5xl">
                    {m.year}
                  </div>
                  <h3 className="mt-3 text-lg font-bold text-white">
                    {m.title}
                  </h3>
                  <p className="mt-2 text-white/60">{m.text}</p>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* Mission / Vision / Values */}
      <section className="relative overflow-hidden border-y border-white/10 bg-[#15181D]">
        <div className="relative mx-auto max-w-container px-5 py-20 lg:px-8 lg:py-24">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 100}>
                <div className="h-full rounded-2xl border border-white/10 bg-white/[0.04] p-7">
                  <v.icon size={28} className="text-brand" />
                  <h2 className="mt-4 text-xl font-bold">{v.title}</h2>
                  <p className="mt-2 text-white/60">{v.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="relative overflow-hidden bg-ink">
        <DotGridLight />
        <Glow className="-top-24 left-1/3 h-72 w-72 bg-brand/20" />
        <div className="relative mx-auto grid max-w-container grid-cols-2 gap-8 px-5 py-16 lg:grid-cols-3 lg:px-8">
          {stats.map((s) => (
            <StatCounter
              key={s.label}
              value={s.value}
              suffix={s.suffix}
              label={s.label}
            />
          ))}
        </div>
      </section>

      {/* Founders */}
      <section className="bg-ink">
        <div className="mx-auto max-w-container px-5 py-20 lg:px-8 lg:py-24">
          {/* Heading */}
          <Reveal>
            <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-brand">
                  Our Founders
                </p>
                <h2 className="mt-2 text-4xl font-extrabold text-white sm:text-5xl">
                  Meet the founders
                </h2>
              </div>
              <p className="max-w-xs text-sm text-white/50">
                Two paths, one shared mission — to build world-class technology
                right here in Nepal.
              </p>
            </div>
          </Reveal>

          {/* Cards */}
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
            {founders.map((m, i) => {
              const hasPhoto = m.image && publicAssetExists(m.image);
              return (
                <Reveal key={m.name} delay={i * 100}>
                  <article className="group relative flex h-2/3 flex-col overflow-hidden rounded-3xl border border-white/[0.08] bg-white/[0.04] transition-all duration-300 hover:-translate-y-2 hover:border-brand/40 hover:shadow-[0_28px_60px_-22px_rgba(164,22,26,0.55)]">
                    {/* Portrait */}
                    <div className="relative aspect-[4/5] overflow-hidden">
                      {hasPhoto ? (
                        <Image
                          src={m.image}
                          alt={m.name}
                          fill
                          sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 33vw"
                          className="object-cover object-top grayscale-[35%] transition-all duration-500 group-hover:scale-105 group-hover:grayscale-0"
                        />
                      ) : (
                        <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-ink-soft to-ink font-display text-7xl font-extrabold text-white/15">
                          {m.name.charAt(0)}
                        </div>
                      )}

                      {/* Gradient so the photo blends into the card */}
                      <div
                        aria-hidden
                        className="absolute inset-0 bg-gradient-to-t from-[#0e0e0e] via-transparent to-transparent"
                      />

                      {/* Flag badge */}
                      <span className="absolute right-3 top-3 flex items-center gap-1.5 rounded-full border border-white/15 bg-black/50 py-1 pl-1.5 pr-2.5 backdrop-blur-sm">
                        <Image
                          src={`https://flagcdn.com/w40/${m.flag}.png`}
                          alt={m.flagLabel}
                          width={18}
                          height={13}
                          className="h-3.5 w-auto rounded-[2px]"
                        />
                        <span className="text-[10px] font-bold uppercase tracking-wider text-white/90">
                          {m.flagLabel}
                        </span>
                      </span>
                    </div>

                    {/* Info */}
                    <div className="flex flex-1 flex-col p-6">
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <h3 className="text-lg font-extrabold leading-tight text-white">
                            {m.name}
                          </h3>
                          <span className="mt-1.5 inline-flex items-center rounded-full bg-brand px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-widest text-white">
                            {m.role}
                          </span>
                        </div>
                        {/* LinkedIn */}
                        <a
                          href={m.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`${m.name} on LinkedIn`}
                          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.06] text-white/60 transition-colors hover:border-brand hover:bg-brand hover:text-white"
                        >
                          <Linkedin size={16} />
                        </a>
                      </div>
                      <p className="mt-4 text-sm leading-relaxed text-white/55">
                        {m.note}
                      </p>
                    </div>

                    {/* Red bottom accent line */}
                    <div className="h-[3px] w-full bg-brand/30 transition-colors duration-300 group-hover:bg-brand" />
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand">
        <div className="mx-auto flex max-w-container flex-col items-center justify-between gap-6 px-5 py-14 text-center sm:flex-row sm:text-left lg:px-8">
          <h2 className="text-3xl font-extrabold text-white">
            Want to work with us?
          </h2>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-lg bg-white px-7 py-3.5 font-semibold text-brand transition-colors hover:bg-ink hover:text-white"
          >
            Get in touch <ArrowRight size={17} />
          </Link>
        </div>
      </section>
    </>
  );
}
