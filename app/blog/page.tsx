import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import { DotGrid, Glow } from "@/components/Backdrop";
import BlogCard from "@/components/BlogCard";
import { blogPosts } from "@/lib/data";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Insights on software development, web apps, CRM, and digital marketing from the Rahu Doom team.",
};

export default function BlogPage() {
  return (
    <section className="relative overflow-hidden">
      <Glow className="-right-28 -top-32 h-[420px] w-[420px]" />
      <DotGrid className="h-[480px]" />
      <div className="relative mx-auto max-w-container px-5 py-20 lg:px-8 lg:py-24">

        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-wider text-brand">Insights</p>
          <h1 className="mt-2 text-4xl font-extrabold sm:text-5xl">From our blog</h1>
          <p className="mt-4 max-w-2xl text-lg text-white/60">
            Thoughts on technology, business, and building great software.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post, i) => (
            <Reveal key={post.slug} delay={i * 110}>
              <BlogCard post={post} />
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
}
