import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Reveal from "@/components/Reveal";
import { company } from "@/lib/data";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for Rahu Doom Pvt Ltd — how we collect, use, and protect your personal information.",
};

const sections = [
  {
    heading: "1. Information We Collect",
    body: `When you use our website or contact us, we may collect the following types of information:

• Personal identification information: name, email address, phone number, company name — provided voluntarily through our contact form or newsletter signup.
• Usage data: pages visited, time spent on site, browser type, device information, and referring URLs — collected automatically through standard web analytics.
• Communication data: the content of messages you send us through our contact form or email.

We do not collect payment information directly. Any transactions are handled through secure third-party payment processors.`,
  },
  {
    heading: "2. How We Use Your Information",
    body: `We use the information we collect for the following purposes:

• To respond to your enquiries and provide the services you request.
• To send project updates, proposals, and related communications.
• To send our newsletter, if you have subscribed (you can unsubscribe at any time).
• To improve our website and understand how visitors interact with it.
• To comply with legal obligations.

We do not sell, rent, or share your personal information with third parties for marketing purposes.`,
  },
  {
    heading: "3. Data Storage and Security",
    body: `Your information is stored securely. We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction.

Contact form submissions are processed through FormSubmit and delivered to our secure business email. Website analytics are collected through privacy-respecting tools.

While we take reasonable precautions, no method of transmission over the internet or method of electronic storage is 100% secure. We cannot guarantee absolute security.`,
  },
  {
    heading: "4. Cookies",
    body: `Our website uses minimal cookies necessary for basic functionality. We do not use tracking cookies for advertising purposes.

Analytics cookies may be used to understand aggregate website usage patterns. These cookies do not identify you personally.

You can control cookie settings through your browser preferences. Disabling cookies may affect some website functionality.`,
  },
  {
    heading: "5. Third-Party Services",
    body: `Our website may integrate with the following third-party services, each with their own privacy policies:

• FormSubmit — for contact form processing
• Google Fonts — for typography
• OpenStreetMap via Leaflet — for our interactive map

We are not responsible for the privacy practices of these third-party services. We encourage you to review their respective privacy policies.`,
  },
  {
    heading: "6. Your Rights",
    body: `You have the right to:

• Access the personal information we hold about you.
• Request correction of inaccurate information.
• Request deletion of your personal information, subject to any legal obligations we may have to retain it.
• Opt out of marketing communications at any time by clicking 'unsubscribe' in any email or contacting us directly.

To exercise any of these rights, please contact us at ${company.email}.`,
  },
  {
    heading: "7. Data Retention",
    body: `We retain personal information only for as long as necessary to fulfill the purposes for which it was collected, including any legal, accounting, or reporting requirements.

Contact form submissions are typically retained for the duration of the client relationship plus 3 years. Newsletter subscriber data is retained until you unsubscribe.`,
  },
  {
    heading: "8. Children's Privacy",
    body: `Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children. If you believe we have inadvertently collected information from a child, please contact us and we will promptly delete it.`,
  },
  {
    heading: "9. Changes to This Policy",
    body: `We may update this Privacy Policy from time to time to reflect changes in our practices or for legal reasons. We will post the updated policy on this page with a revised date. Your continued use of our website after any changes constitutes your acceptance of the updated policy.`,
  },
  {
    heading: "10. Contact Us",
    body: `If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:

Company: ${company.name}
Address: ${company.address}
Email: ${company.email}
Phone: ${company.phone}`,
  },
];

export default function PrivacyPolicyPage() {
  return (
    <section className="bg-[#080A0E]">
      <div className="mx-auto max-w-3xl px-5 py-20 lg:px-8 lg:py-24">

        <Reveal>
          <Link href="/" className="inline-flex items-center gap-2 text-sm text-white/40 transition-colors hover:text-white">
            <ArrowLeft size={14} /> Back to Home
          </Link>
          <p className="mt-6 text-xs font-bold uppercase tracking-widest text-brand">Legal</p>
          <h1 className="mt-2 text-4xl font-extrabold text-white">Privacy Policy</h1>
          <p className="mt-3 text-sm text-white/40">Last updated: May 2026</p>
          <p className="mt-6 text-lg text-white/55">
            {company.name} (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) is committed to protecting your privacy.
            This policy explains what information we collect, how we use it, and your rights regarding your data.
          </p>
        </Reveal>

        <div className="mt-14 space-y-10">
          {sections.map((s, i) => (
            <Reveal key={i} delay={i * 40}>
              <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-7">
                <h2 className="text-lg font-bold text-white">{s.heading}</h2>
                <p className="mt-3 whitespace-pre-line text-[15px] leading-relaxed text-white/55">
                  {s.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="mt-12 rounded-2xl border border-brand/20 bg-brand/[0.05] p-6 text-center">
            <p className="font-semibold text-white">Have a privacy question?</p>
            <Link href="/contact" className="mt-3 inline-flex items-center gap-2 rounded-xl bg-brand px-6 py-2.5 text-sm font-bold text-white hover:bg-brand-dark">
              Contact Us
            </Link>
          </div>
        </Reveal>

      </div>
    </section>
  );
}
