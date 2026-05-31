import Link from "next/link";
import { Check, ArrowRight, ArrowUpRight } from "lucide-react";
import Reveal from "@/components/Reveal";
import { DotGrid, LineGrid, Glow } from "@/components/Backdrop";
import { Service, services, process } from "@/lib/data";

export default function ServiceDetail({ service }: { service: Service }) {
  const Icon = service.icon;
  const others = services.filter((s) => s.slug !== service.slug);

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-white/10 bg-[#0F1115]">
        <Glow className="-right-32 -top-40 h-[460px] w-[460px]" />
        <DotGrid />
        <div className="relative mx-auto max-w-container px-5 py-20 lg:px-8 lg:py-28">
          <Reveal>
            <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-brand text-white chevron-accent">
              <Icon size={26} />
            </div>
            <p className="mt-6 text-sm font-semibold uppercase tracking-wider text-brand">Our Services</p>
            <h1 className="mt-2 max-w-3xl text-4xl font-extrabold leading-[1.05] sm:text-5xl">
              {service.title}
            </h1>
            <p className="mt-5 max-w-2xl text-lg text-white/60">{service.hero}</p>
            <Link
              href="/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-lg bg-brand px-6 py-3.5 font-semibold text-white transition-colors hover:bg-brand-dark"
            >
              Discuss your project <ArrowRight size={17} />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* What we offer */}
      <section className="mx-auto max-w-container px-5 py-20 lg:px-8 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-2">
          <Reveal>
            <h2 className="text-3xl font-bold">What we offer</h2>
            <p className="mt-4 text-white/60">
              Everything you need, delivered by an experienced in-house team that
              cares about getting the details right.
            </p>
          </Reveal>
          <Reveal delay={100}>
            <ul className="space-y-3">
              {service.offerings.map((o) => (
                <li key={o} className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/[0.04] p-4">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand/10 text-brand">
                    <Check size={14} />
                  </span>
                  <span className="font-medium text-white">{o}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* Benefits */}
      <section className="relative overflow-hidden border-y border-white/10 bg-[#15181D]">
        <LineGrid />
        <div className="relative mx-auto max-w-container px-5 py-20 lg:px-8 lg:py-24">
          <Reveal>
            <h2 className="text-3xl font-bold">Why it matters for you</h2>
          </Reveal>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {service.benefits.map((b, i) => (
              <Reveal key={b.title} delay={i * 100}>
                <div className="h-full rounded-2xl border border-white/10 bg-white/[0.04] p-6">
                  <div className="font-display text-3xl font-extrabold text-brand">0{i + 1}</div>
                  <h3 className="mt-3 text-lg font-bold">{b.title}</h3>
                  <p className="mt-2 text-sm text-white/60">{b.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Process recap */}
      <section className="mx-auto max-w-container px-5 py-20 lg:px-8 lg:py-24">
        <Reveal>
          <h2 className="text-3xl font-bold">How we work</h2>
        </Reveal>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {process.map((p, i) => (
            <Reveal key={p.step} delay={i * 60}>
              <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 transition-all hover:-translate-y-0.5 hover:border-brand/40 hover:shadow-[0_8px_24px_-8px_rgba(164,22,26,0.15)]">
                <span className="font-display text-sm font-bold text-brand">{p.step}</span>
                <h3 className="mt-1 text-base font-bold">{p.title}</h3>
                <p className="mt-1 text-sm text-white/60">{p.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Other services */}
      <section className="border-t border-white/10">
        <div className="mx-auto max-w-container px-5 py-16 lg:px-8">
          <h2 className="text-2xl font-bold">Explore other services</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            {others.map((s) => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                className="group flex items-center justify-between rounded-xl border border-white/10 p-5 transition-colors hover:border-brand"
              >
                <span className="flex items-center gap-3 font-semibold text-white">
                  <s.icon size={18} className="text-brand" /> {s.title}
                </span>
                <ArrowUpRight size={18} className="text-white-mute transition-colors group-hover:text-brand" />
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
