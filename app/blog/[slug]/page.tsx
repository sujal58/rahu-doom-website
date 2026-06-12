"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Clock, MessageCircle, Tag } from "lucide-react";
import Reveal from "@/components/Reveal";
import { blogPosts } from "@/lib/data";
import type { BlogFullContent } from "@/lib/blog-content";

export default function BlogPostPage() {
  const { slug } = useParams<{ slug: string }>();
  const [content, setContent] = useState<BlogFullContent | null>(null);
  const [loading, setLoading] = useState(true);

  const post = blogPosts.find((p) => p.slug === slug);
  const related = blogPosts.filter((p) => p.slug !== slug).slice(0, 3);

  useEffect(() => {
    if (!slug) return;
    fetch(`/api/blog/${slug}`)
      .then((r) => r.json())
      .then((data) => {
        setContent(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [slug]);

  if (!post) return null;

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#080A0E]">
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <div className="absolute -right-32 -top-32 h-[500px] w-[500px] rounded-full bg-brand/10 blur-[140px]" />
        </div>
        <div className="relative mx-auto max-w-container px-5 pb-12 pt-16 lg:px-8 lg:pt-20">
          <Reveal>
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm font-medium text-white/40 transition-colors hover:text-white"
            >
              <ArrowLeft size={15} /> Back to Blog
            </Link>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <span className="rounded-full bg-brand/15 px-3 py-1 text-xs font-bold uppercase tracking-wider text-brand">
                <Tag size={10} className="mr-1 inline" />
                {post.category}
              </span>
              <span className="flex items-center gap-1.5 text-xs text-white/35">
                <Clock size={12} /> {post.readTime}
              </span>
              <span className="flex items-center gap-1.5 text-xs text-white/35">
                <MessageCircle size={12} /> {post.comments} comments
              </span>
              <span className="text-xs text-white/35">
                {post.day} {post.month}
              </span>
            </div>

            <h1 className="mt-5 max-w-4xl text-4xl font-extrabold leading-[1.08] text-white sm:text-5xl">
              {post.title}
            </h1>
            <p className="mt-4 max-w-3xl text-lg text-white/50">
              {post.excerpt}
            </p>
          </Reveal>
        </div>
      </section>

      {/* Thumbnail */}
      <div className="bg-[#080A0E]">
        <div className="mx-auto max-w-container px-5 lg:px-8">
          <div className="relative h-[300px] overflow-hidden rounded-2xl border border-white/[0.06] sm:h-[400px] lg:h-[480px]">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover object-center"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#080A0E]/60 to-transparent" />
          </div>
        </div>
      </div>

      {/* Content + Sidebar */}
      <div className="bg-[#080A0E]">
        <div className="mx-auto grid max-w-container gap-12 px-5 py-16 lg:grid-cols-[1fr_300px] lg:px-8 lg:py-20">
          {/* Article */}
          <article>
            {loading ? (
              /* Skeleton loader */
              <div className="space-y-6">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="space-y-3">
                    {i % 2 === 0 && (
                      <div className="h-6 w-48 animate-pulse rounded-lg bg-white/[0.06]" />
                    )}
                    <div className="h-4 w-full animate-pulse rounded bg-white/[0.04]" />
                    <div className="h-4 w-[90%] animate-pulse rounded bg-white/[0.04]" />
                    <div className="h-4 w-[95%] animate-pulse rounded bg-white/[0.04]" />
                  </div>
                ))}
              </div>
            ) : content ? (
              <>
                {content.sections.map((section, i) => (
                  <Reveal key={i} delay={i * 60}>
                    <div className="mb-8">
                      {section.heading && (
                        <h2 className="mb-3 text-2xl font-bold text-white">
                          {section.heading}
                        </h2>
                      )}
                      {section.body && (
                        <p className="text-[17px] leading-relaxed text-white/60">
                          {section.body}
                        </p>
                      )}
                      {section.image && (
                        <figure className="my-2">
                          <div className="relative h-[260px] overflow-hidden rounded-2xl border border-white/[0.06] sm:h-[360px] lg:h-[420px]">
                            <Image
                              src={section.image}
                              alt={section.imageCaption ?? post.title}
                              fill
                              className="object-cover"
                            />
                          </div>
                          {section.imageCaption && (
                            <figcaption className="mt-3 text-center text-sm text-white/35">
                              {section.imageCaption}
                            </figcaption>
                          )}
                        </figure>
                      )}
                    </div>
                  </Reveal>
                ))}

                <Reveal>
                  <div className="mt-12 rounded-2xl border border-brand/20 bg-brand/[0.06] p-8">
                    <p className="text-lg font-bold text-white">
                      Want to apply these ideas to your business?
                    </p>
                    <p className="mt-2 text-white/50">
                      Rahu Doom helps businesses in Nepal build technology and
                      marketing strategies that actually work. The first
                      consultation is free.
                    </p>
                    <Link
                      href="/contact"
                      className="mt-5 inline-flex items-center gap-2 rounded-xl bg-brand px-6 py-3 font-bold text-white transition-colors hover:bg-brand-dark"
                    >
                      Get Free Consultation
                    </Link>
                  </div>
                </Reveal>

                {content.author && (
                  <Reveal>
                    <div className="mt-12 rounded-2xl border border-white/[0.07] bg-white/[0.03] p-6 sm:p-8">
                      <p className="text-xs font-bold uppercase tracking-widest text-white/30">
                        About the author
                      </p>
                      <div className="mt-5 flex flex-col gap-5 sm:flex-row sm:items-start">
                        <div className="relative h-28 w-28 shrink-0 overflow-hidden rounded-2xl border border-white/[0.08]">
                          <Image
                            src={content.author.photo}
                            alt={content.author.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div>
                          <h2 className="text-2xl font-bold text-white">
                            {content.author.name}
                          </h2>
                          <p className="mt-1 text-sm font-medium text-brand">
                            {content.author.role}
                          </p>
                          <div className="mt-4 space-y-4">
                            {content.author.bio.map((para, i) => (
                              <p
                                key={i}
                                className="text-[17px] leading-relaxed text-white/60"
                              >
                                {para}
                              </p>
                            ))}
                          </div>
                        </div>
                      </div>

                      {content.author.gallery &&
                        content.author.gallery.length > 0 && (
                          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
                            {content.author.gallery.map((src, i) => (
                              <div
                                key={i}
                                className="relative h-56 overflow-hidden rounded-2xl border border-white/[0.06]"
                              >
                                <Image
                                  src={src}
                                  alt={`${content.author!.name} — photo ${i + 1}`}
                                  fill
                                  className="object-cover"
                                />
                              </div>
                            ))}
                          </div>
                        )}
                    </div>
                  </Reveal>
                )}
              </>
            ) : (
              <p className="text-white/40">Content not available.</p>
            )}
          </article>

          {/* Sidebar */}
          <aside className="space-y-8">
            <div className="rounded-2xl border border-white/[0.07] bg-white/[0.03] p-6">
              <p className="text-xs font-bold uppercase tracking-widest text-white/30">
                Written by
              </p>
              <div className="mt-3 flex items-center gap-3">
                {content?.author ? (
                  <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-full border border-white/[0.08]">
                    <Image
                      src={content.author.photo}
                      alt={content.author.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                ) : (
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand text-sm font-extrabold text-white">
                    S
                  </div>
                )}
                <div>
                  <p className="font-bold text-white">{post.author}</p>
                  <p className="text-xs text-white/40">{post.authorRole}</p>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-white/[0.07] bg-white/[0.03] p-6">
              <p className="text-xs font-bold uppercase tracking-widest text-white/30">
                More Articles
              </p>
              <div className="mt-4 space-y-4">
                {related.map((r) => (
                  <Link
                    key={r.slug}
                    href={`/blog/${r.slug}`}
                    className="group flex items-start gap-3"
                  >
                    <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-lg">
                      <Image
                        src={r.image}
                        alt={r.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <p className="text-sm font-semibold leading-snug text-white/70 transition-colors group-hover:text-white">
                        {r.title}
                      </p>
                      <p className="mt-1 text-xs text-white/30">
                        {r.day} {r.month}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-white/[0.07] bg-white/[0.03] p-6">
              <p className="text-xs font-bold uppercase tracking-widest text-white/30">
                Category
              </p>
              <span className="mt-3 inline-flex rounded-full bg-brand/15 px-4 py-1.5 text-sm font-bold text-brand">
                {post.category}
              </span>
            </div>
          </aside>
        </div>
      </div>
    </>
  );
}
