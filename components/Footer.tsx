import Link from "next/link";
import Image from "next/image";
import { Facebook, Linkedin, Instagram, Mail, Phone, MapPin } from "lucide-react";
import { company, navLinks, services } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="bg-[#0D0F14]">

      {/* Top brand accent */}
      <div className="h-[3px] bg-brand" />

      {/* Main grid */}
      <div className="mx-auto grid max-w-container gap-10 px-5 py-14 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1.3fr] lg:px-8">

        {/* Brand */}
        <div>
          <div className="logo-ring">
            <div className="logo-ring-inner">
              <Image
                src="/logo.png"
                alt="Rahu Doom Pvt Ltd"
                width={677}
                height={229}
                className="h-9 w-auto max-w-[160px]"
              />
            </div>
          </div>

          <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/40">
            A Kathmandu-based IT company building web apps, custom software,
            CRM tools, and digital marketing for businesses in Nepal and worldwide.
          </p>

          <div className="mt-5 flex gap-2.5">
            {[
              { Icon: Facebook,  href: company.social.facebook,  label: "Facebook"  },
              { Icon: Linkedin,  href: company.social.linkedin,  label: "LinkedIn"  },
              { Icon: Instagram, href: company.social.instagram, label: "Instagram" },
            ].map(({ Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/[0.07] bg-white/[0.04] text-white/40 transition-all hover:border-brand hover:bg-brand hover:text-white"
              >
                <Icon size={15} />
              </a>
            ))}
          </div>
        </div>

        {/* Company */}
        <div>
          <h4 className="text-[10px] font-bold uppercase tracking-widest text-white/30">Company</h4>
          <ul className="mt-4 space-y-2.5 text-sm">
            {navLinks.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="text-white/50 transition-colors hover:text-white">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="text-[10px] font-bold uppercase tracking-widest text-white/30">Services</h4>
          <ul className="mt-4 space-y-2.5 text-sm">
            {services.map((s) => (
              <li key={s.slug}>
                <Link href={`/services/${s.slug}`} className="text-white/50 transition-colors hover:text-white">
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact + newsletter */}
        <div>
          <h4 className="text-[10px] font-bold uppercase tracking-widest text-white/30">Get in touch</h4>
          <ul className="mt-4 space-y-3 text-sm text-white/50">
            <li className="flex items-start gap-2.5">
              <MapPin size={14} className="mt-0.5 shrink-0 text-brand" /> {company.address}
            </li>
            <li className="flex items-center gap-2.5">
              <Phone size={14} className="shrink-0 text-brand" /> {company.phone}
            </li>
            <li className="flex items-center gap-2.5">
              <Mail size={14} className="shrink-0 text-brand" /> {company.email}
            </li>
          </ul>
          <form className="mt-5 flex overflow-hidden rounded-lg border border-white/[0.07] bg-white/[0.03]">
            <input
              type="email"
              required
              placeholder="Your email"
              aria-label="Newsletter"
              className="w-full bg-transparent px-3 py-2.5 text-sm text-white placeholder:text-white/25 focus:outline-none"
            />
            <button
              type="submit"
              className="bg-brand px-4 text-xs font-bold uppercase tracking-wider text-white transition-colors hover:bg-brand-dark"
            >
              Join
            </button>
          </form>
        </div>
      </div>

      {/* Sub-footer */}
      <div className="border-t border-white/[0.06] bg-[#080A0E]">
        <div className="mx-auto flex max-w-container flex-col items-center justify-between gap-2 px-5 py-4 text-xs text-white/25 sm:flex-row lg:px-8">
          <p>© {new Date().getFullYear()} {company.name}. All rights reserved.</p>
          <div className="flex gap-5">
            <Link href="/privacy-policy" className="transition-colors hover:text-white/60">Privacy Policy</Link>
            <Link href="/terms-of-service" className="transition-colors hover:text-white/60">Terms of Service</Link>
          </div>
        </div>
      </div>

    </footer>
  );
}
