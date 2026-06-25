import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { BLOG_POSTS_SORTED } from "../../lib/blog-data";

const fmtDate = (iso: string) =>
  new Date(iso).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });

const BlogTeaserV2: React.FC = () => {
  const posts = BLOG_POSTS_SORTED.slice(0, 3);

  return (
    <section
      id="blog"
      className="relative bg-[#f5f2ec] py-20 md:py-32 px-4 md:px-6"
    >
      <div className="max-w-[1400px] mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14 md:mb-20">
          <div>
            <div className="flex items-center gap-2 text-xs tracking-[0.3em] uppercase text-neutral-500 mb-4">
              <span className="inline-block w-6 h-px bg-neutral-400" />
              From the blog
            </div>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-semibold tracking-tight leading-[1.03]">
              Strategy, written down.
            </h2>
          </div>
          <Link
            href="/blog"
            className="group inline-flex items-center gap-2 bg-black text-white text-sm pl-5 pr-2 py-2 rounded-full hover:bg-neutral-800 transition-colors w-fit"
          >
            All articles
            <span className="w-8 h-8 rounded-full bg-[#c5f542] text-black flex items-center justify-center group-hover:rotate-45 transition-transform">
              <ArrowUpRight size={15} />
            </span>
          </Link>
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group flex flex-col rounded-3xl bg-white border border-black/5 overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <span className="absolute top-4 left-4 bg-white/90 backdrop-blur text-black text-[11px] tracking-[0.15em] uppercase px-3 py-1.5 rounded-full">
                  {post.category}
                </span>
              </div>
              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center gap-2 text-xs text-neutral-500 mb-3">
                  <span>{fmtDate(post.date)}</span>
                  <span className="text-neutral-300">·</span>
                  <span>{post.readingTime}</span>
                </div>
                <h3 className="text-xl font-semibold tracking-tight leading-snug mb-3">
                  {post.title}
                </h3>
                <p className="text-neutral-600 text-sm leading-relaxed flex-1">
                  {post.excerpt}
                </p>
                <span className="inline-flex items-center gap-1.5 text-sm font-medium mt-5 text-black">
                  Read article
                  <ArrowUpRight
                    size={15}
                    className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                  />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogTeaserV2;
