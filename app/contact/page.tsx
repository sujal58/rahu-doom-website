import type { Metadata } from "next";
import { Mail, Phone, MapPin, MessageCircle } from "lucide-react";
import Reveal from "@/components/Reveal";
import ContactForm from "@/components/ContactForm";
import { DotGrid, Glow } from "@/components/Backdrop";
import { company } from "@/lib/data";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Rahu Doom Pvt Ltd. Tell us about your web, software, CRM, or digital marketing project — the first consultation is free.",
};

export default function ContactPage() {
  return (
    <section className="relative overflow-hidden">
      <Glow className="-right-28 -top-32 h-[420px] w-[420px]" />
      <DotGrid className="h-[480px]" />
      <div className="relative mx-auto max-w-container px-5 py-20 lg:px-8 lg:py-24">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-wider text-brand">
            Contact us
          </p>
          <h1 className="mt-2 text-4xl font-extrabold sm:text-5xl">
            Let&apos;s build something together
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-white/60">
            Tell us about your project and we&apos;ll get back to you within one
            business day. The first consultation is always free.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-12 lg:grid-cols-[1fr_1.3fr]">
          {/* Details */}
          <Reveal>
            <div className="space-y-6">
              <div className="flex items-start gap-4 rounded-2xl border border-white/10 p-5 transition-colors hover:border-brand/40">
                <MapPin className="mt-0.5 shrink-0 text-brand" size={22} />
                <div>
                  <div className="font-bold">Office</div>
                  <div className="text-sm text-white/60">{company.address}</div>
                </div>
              </div>
              <div className="flex items-start gap-4 rounded-2xl border border-white/10 p-5 transition-colors hover:border-brand/40">
                <Phone className="mt-0.5 shrink-0 text-brand" size={22} />
                <div>
                  <div className="font-bold">Phone</div>
                  <div className="text-sm text-white/60">{company.phone}</div>
                </div>
              </div>
              <div className="flex items-start gap-4 rounded-2xl border border-white/10 p-5 transition-colors hover:border-brand/40">
                <Mail className="mt-0.5 shrink-0 text-brand" size={22} />
                <div>
                  <div className="font-bold">Email</div>
                  <div className="text-sm text-white/60">{company.email}</div>
                </div>
              </div>
              <a
                href={`https://wa.me/+9779708522226`}
                className="flex items-center justify-center gap-2 rounded-2xl bg-ink p-5 font-semibold text-white transition-colors hover:bg-brand"
              >
                <MessageCircle size={20} /> Chat on WhatsApp
              </a>
            </div>
          </Reveal>

          {/* Form */}
          <Reveal delay={120}>
            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-7">
              <ContactForm />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
