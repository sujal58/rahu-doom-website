import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Reveal from "@/components/Reveal";
import { company } from "@/lib/data";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms of Service for Rahu Doom Pvt Ltd — the rules and conditions governing use of our services.",
};

const sections = [
  {
    heading: "1. Acceptance of Terms",
    body: `By accessing our website or engaging our services, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any part of these terms, you may not use our services.

These terms apply to all visitors, clients, and anyone who accesses or uses the services provided by ${company.name}.`,
  },
  {
    heading: "2. Services",
    body: `Rahu Doom Pvt Ltd provides technology and digital marketing services including, but not limited to:

• Web application and website development
• Custom software development
• CRM and management system development
• Digital marketing and SEO services
• Consulting and technical advisory services

The specific scope, deliverables, timeline, and pricing for each engagement are defined in a separate project agreement or proposal signed by both parties.`,
  },
  {
    heading: "3. Project Agreements",
    body: `All client engagements begin with a written project agreement or signed proposal that outlines the scope of work, timeline, payment schedule, and deliverables. These Terms of Service apply to all such engagements in addition to the specific terms of the project agreement.

In the event of a conflict between these Terms and a signed project agreement, the signed project agreement shall take precedence.`,
  },
  {
    heading: "4. Payment Terms",
    body: `Payment terms are specified in each project agreement. Generally:

• A deposit is required before work commences (typically 30–50% of the project value).
• Subsequent payments are tied to project milestones as defined in the agreement.
• Final payment is due before final delivery of the completed project.
• Invoices are due within 7 days of issue unless otherwise agreed in writing.

Late payments may result in work being paused until outstanding balances are settled.`,
  },
  {
    heading: "5. Intellectual Property",
    body: `Upon receipt of full payment, the client receives full ownership of all custom code, designs, and deliverables created specifically for their project.

Rahu Doom retains ownership of any pre-existing tools, frameworks, libraries, or generic components used in the development — including our internal toolkits and development frameworks. These are licensed (not sold) to the client for use in the delivered project.

We reserve the right to feature completed projects in our portfolio and marketing materials unless the client requests otherwise in writing.`,
  },
  {
    heading: "6. Confidentiality",
    body: `Both parties agree to keep confidential any proprietary business information, trade secrets, or sensitive data shared during the course of a project engagement.

We will not share your confidential business information with third parties without your written consent, except as required by law.

This obligation survives the termination of any project agreement.`,
  },
  {
    heading: "7. Revisions and Scope Changes",
    body: `Each project agreement includes a defined number of revision rounds. Requests for changes that fall outside the agreed scope will be quoted and billed separately as change requests.

We encourage clients to review deliverables thoroughly at each stage to minimize the need for out-of-scope revisions.`,
  },
  {
    heading: "8. Timeline and Delays",
    body: `We commit to the timelines specified in project agreements. Timelines may be affected by:

• Delayed feedback or approvals from the client side.
• Provision of incomplete or incorrect content/assets by the client.
• Force majeure events beyond our control.

We will communicate any delays proactively and work to minimize their impact.`,
  },
  {
    heading: "9. Warranties and Liability",
    body: `We warrant that our work will be performed professionally and in accordance with the agreed specifications.

We do not guarantee specific business outcomes (such as search rankings, conversion rates, or revenue) as these depend on many factors outside our control.

Our liability in connection with any project is limited to the amount paid by the client for that specific project. We are not liable for indirect, incidental, or consequential damages.`,
  },
  {
    heading: "10. Termination",
    body: `Either party may terminate a project agreement with 14 days' written notice.

Upon termination, the client is liable for payment for all work completed up to the termination date. Work completed and paid for will be delivered to the client. Work in progress at time of termination will be delivered upon receipt of payment for the portion completed.

Deposits are non-refundable unless Rahu Doom initiates the termination without cause.`,
  },
  {
    heading: "11. Governing Law",
    body: `These Terms of Service are governed by and construed in accordance with the laws of Nepal. Any disputes arising from these terms or our services shall be subject to the exclusive jurisdiction of the courts of Kathmandu, Nepal.`,
  },
  {
    heading: "12. Changes to These Terms",
    body: `We reserve the right to update these Terms of Service at any time. Changes will be posted on this page with a revised date. Continued use of our services after changes constitutes acceptance of the updated terms.

For active project agreements, changes to these terms do not affect the agreed terms of the existing project unless both parties agree in writing.`,
  },
  {
    heading: "13. Contact",
    body: `For any questions regarding these Terms of Service, please contact us:

Company: ${company.name}
Address: ${company.address}
Email: ${company.email}
Phone: ${company.phone}`,
  },
];

export default function TermsOfServicePage() {
  return (
    <section className="bg-[#080A0E]">
      <div className="mx-auto max-w-3xl px-5 py-20 lg:px-8 lg:py-24">

        <Reveal>
          <Link href="/" className="inline-flex items-center gap-2 text-sm text-white/40 transition-colors hover:text-white">
            <ArrowLeft size={14} /> Back to Home
          </Link>
          <p className="mt-6 text-xs font-bold uppercase tracking-widest text-brand">Legal</p>
          <h1 className="mt-2 text-4xl font-extrabold text-white">Terms of Service</h1>
          <p className="mt-3 text-sm text-white/40">Last updated: May 2026</p>
          <p className="mt-6 text-lg text-white/55">
            These Terms of Service govern your use of {company.name}&apos;s website and services.
            Please read them carefully before engaging with us.
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
            <p className="font-semibold text-white">Questions about our terms?</p>
            <Link href="/contact" className="mt-3 inline-flex items-center gap-2 rounded-xl bg-brand px-6 py-2.5 text-sm font-bold text-white hover:bg-brand-dark">
              Contact Us
            </Link>
          </div>
        </Reveal>

      </div>
    </section>
  );
}
