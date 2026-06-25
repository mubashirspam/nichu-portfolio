import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import NavigationV2 from "../../components/v2/navigation";
import FooterV2 from "../../components/v2/footer";
import { BLOG_POSTS_SORTED } from "../../lib/blog-data";

const SITE_URL = "https://marketingnizam.com";

export const metadata: Metadata = {
  title: "Blog — Digital Marketing in Kerala | Nizamudheen KC",
  description:
    "Practical, no-fluff guides on performance marketing, Meta & Google Ads, SEO, AEO and GEO for Kerala businesses — written by Nizamudheen KC, India's First Marketing Nomad.",
  alternates: { canonical: "/blog" },
  openGraph: {
    type: "website",
    url: `${SITE_URL}/blog`,
    title: "Blog — Digital Marketing in Kerala | Nizamudheen KC",
    description:
      "Guides on performance marketing, ads, pricing, local SEO and AI search (AEO/GEO) for Kerala businesses.",
    locale: "en_IN",
  },
};

const fmtDate = (iso: string) =>
  new Date(iso).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });

const blogSchema = {
  "@context": "https://schema.org",
  "@type": "Blog",
  name: "Marketing Nizam Blog",
  url: `${SITE_URL}/blog`,
  description:
    "Guides on performance marketing, ads, SEO, AEO and GEO for Kerala businesses.",
  blogPost: BLOG_POSTS_SORTED.map((p) => ({
    "@type": "BlogPosting",
    headline: p.title,
    description: p.metaDescription,
    datePublished: p.date,
    url: `${SITE_URL}/blog/${p.slug}`,
    author: { "@type": "Person", name: "Nizamudheen KC" },
  })),
};

export default function BlogIndexPage() {
  const [featured, ...rest] = BLOG_POSTS_SORTED;

  return (
    <div className="min-h-screen bg-[#f5f2ec] text-black">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }}
      />
      <NavigationV2 />

      <header className="max-w-[1400px] mx-auto px-4 md:px-6 pt-32 md:pt-44 pb-10 md:pb-16">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-neutral-500 hover:text-black transition-colors mb-8"
        >
          <ArrowLeft size={15} /> Back home
        </Link>
        <div className="flex items-center gap-2 text-xs tracking-[0.3em] uppercase text-neutral-500 mb-5">
          <span className="inline-block w-6 h-px bg-neutral-400" />
          Blog · SEO / AEO / GEO
        </div>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold tracking-tight leading-[1.03] max-w-4xl">
          Real strategy, written down.
        </h1>
        <p className="mt-6 text-neutral-600 text-base md:text-lg leading-relaxed max-w-2xl">
          No-fluff guides on performance marketing, Meta &amp; Google Ads,
          pricing, local SEO and the new AI-search frontier — built to help
          Kerala businesses grow and to get the facts right wherever they&apos;re
          read, by people or AI.
        </p>
      </header>

      <main className="max-w-[1400px] mx-auto px-4 md:px-6 pb-24 md:pb-32">
        {/* Featured */}
        <Link
          href={`/blog/${featured.slug}`}
          className="group grid md:grid-cols-2 gap-6 md:gap-10 rounded-3xl bg-white border border-black/5 overflow-hidden hover:shadow-xl transition-shadow mb-12 md:mb-16"
        >
          <div className="relative aspect-[16/10] md:aspect-auto md:min-h-[360px] overflow-hidden">
            <Image
              src={featured.image}
              alt={featured.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          </div>
          <div className="p-6 md:p-10 flex flex-col justify-center">
            <div className="flex items-center gap-3 text-xs tracking-[0.2em] uppercase text-neutral-500 mb-5">
              <span className="bg-[#c5f542] text-black px-3 py-1 rounded-full">
                {featured.category}
              </span>
              <span>{fmtDate(featured.date)}</span>
              <span className="text-neutral-300">·</span>
              <span>{featured.readingTime}</span>
            </div>
            <h2 className="text-2xl md:text-4xl font-semibold tracking-tight leading-tight mb-4">
              {featured.title}
            </h2>
            <p className="text-neutral-600 text-base md:text-lg leading-relaxed mb-6">
              {featured.excerpt}
            </p>
            <span className="inline-flex items-center gap-2 text-sm font-medium">
              Read article
              <span className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center group-hover:rotate-45 transition-transform">
                <ArrowUpRight size={15} />
              </span>
            </span>
          </div>
        </Link>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {rest.map((post) => (
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
      </main>

      <FooterV2 />
    </div>
  );
}
