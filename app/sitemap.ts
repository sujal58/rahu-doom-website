import type { MetadataRoute } from "next";
import { company, services } from "@/lib/data";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = company.url;
  const staticPages = ["", "/about", "/portfolio", "/blog", "/contact"];
  const servicePages = services.map((s) => `/services/${s.slug}`);
  return [...staticPages, ...servicePages].map((path) => ({
    url: `${base}${path}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: path === "" ? 1 : 0.7,
  }));
}
