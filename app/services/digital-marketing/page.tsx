import type { Metadata } from "next";
import ServiceDetail from "@/components/ServiceDetail";
import { services } from "@/lib/data";

const service = services.find((s) => s.slug === "digital-marketing")!;

export const metadata: Metadata = {
  title: service.title,
  description: service.hero,
};

export default function Page() {
  return <ServiceDetail service={service} />;
}
