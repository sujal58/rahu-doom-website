import type { Metadata } from "next";
import { Archivo, Hanken_Grotesk } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContentProtection from "@/components/ContentProtection";
import { company } from "@/lib/data";

const display = Archivo({
  subsets: ["latin"],
  weight: ["600", "700", "800", "900"],
  variable: "--font-display",
  display: "swap",
});

const sans = Hanken_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(company.url),
  title: {
    default: `${company.name} — Web, Software, CRM & Digital Marketing in Nepal`,
    template: `%s | ${company.shortName}`,
  },
  description:
    "Rahu Doom Pvt Ltd is a Kathmandu-based IT company building web apps, custom software, CRM solutions, and digital marketing for businesses in Nepal and beyond.",
  keywords: [
    "software company Nepal",
    "web development Kathmandu",
    "CRM development Nepal",
    "digital marketing Nepal",
    "software development company",
  ],
  openGraph: {
    title: `${company.name}`,
    description:
      "Web apps, software, CRM, and digital marketing — all under one roof. Based in Kathmandu, Nepal.",
    url: company.url,
    siteName: company.name,
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Rahu Doom Pvt Ltd — Building Ideas. Creating Future.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${company.name} — Web, Software, CRM & Digital Marketing in Nepal`,
    description:
      "Web apps, software, CRM, and digital marketing — all under one roof. Based in Kathmandu, Nepal.",
    images: ["/og-image.png"],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${display.variable} ${sans.variable}`}>
      <body>
        <ContentProtection />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
