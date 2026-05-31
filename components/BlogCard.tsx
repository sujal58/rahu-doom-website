import Image from "next/image";
import Link from "next/link";
import { User, MessageCircle } from "lucide-react";
import type { BlogPost } from "@/lib/data";

export default function BlogCard({ post }: { post: BlogPost }) {
  return (
    <Link href={`/blog/${post.slug}`}>
    <article className="group cursor-pointer transition-transform duration-300 hover:-translate-y-1">

      {/* Photo + date badge */}
      <div className="relative overflow-hidden rounded-2xl">
        <Image
          src={post.image}
          alt={post.title}
          width={1536}
          height={1024}
          className="h-52 w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {/* Date badge — white card pinned top-right */}
        <div className="absolute right-3 top-3 min-w-[48px] rounded-xl bg-white px-3 py-2 text-center shadow-md">
          <p className="text-xl font-extrabold leading-none text-ink">{post.day}</p>
          <p className="mt-0.5 text-[10px] font-bold uppercase tracking-wide text-ink-mute">{post.month}</p>
        </div>
      </div>

      {/* Info card — overlaps photo bottom */}
      <div className="relative z-10 -mt-7 mx-4 rounded-2xl border-b-[3px] border-transparent bg-[#15181D] p-5 shadow-[0_8px_32px_-8px_rgba(0,0,0,0.5)] transition-colors duration-300 group-hover:border-brand">
        {/* Meta row */}
        <div className="flex flex-wrap items-center gap-4 text-xs text-white/45">
          <span className="flex items-center gap-1.5">
            <User size={12} className="text-brand" />
            Sunil Sharma
          </span>
          <span className="flex items-center gap-1.5">
            <MessageCircle size={12} className="text-brand" />
            Comments ({post.comments})
          </span>
        </div>

        <h3 className="mt-3 font-bold leading-snug text-white">{post.title}</h3>

        <span className="mt-3 inline-flex items-center gap-0.5 text-sm font-semibold text-brand">
          Read More ›
        </span>
      </div>

    </article>
    </Link>
  );
}
