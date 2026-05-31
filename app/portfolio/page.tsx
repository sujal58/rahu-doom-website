import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import { DotGrid, Glow } from "@/components/Backdrop";
import PortfolioClient from "./PortfolioClient";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "See the web apps, CRM systems, and software solutions Rahu Doom has built for clients in Nepal and beyond.",
};

export default function PortfolioPage() {
  return (
    <section className="relative overflow-hidden">
      <Glow className="-right-28 -top-32 h-[420px] w-[420px]" />
      <DotGrid className="h-[480px]" />
      <div className="relative mx-auto max-w-container px-5 py-20 lg:px-8 lg:py-24">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-wider text-brand">
            Our work
          </p>
          <h1 className="mt-2 text-4xl font-extrabold sm:text-5xl">
            Projects we&apos;re proud of
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-white/60">
            A selection of the products and systems we&apos;ve built for our clients.
          </p>
        </Reveal>

        <PortfolioClient />
      </div>
    </section>
  );
}
