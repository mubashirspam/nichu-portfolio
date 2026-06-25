import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import NavigationV2 from "../../../components/v2/navigation";
import FooterV2 from "../../../components/v2/footer";
import MarkdownBody from "../../../components/v2/markdown-body";
import {
  BLOG_POSTS,
  getPost,
  getRelatedPosts,
} from "../../../lib/blog-data";

const SITE_URL = "https://marketingnizam.com";

export function generateStaticParams() {
  return BLOG_POSTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return { title: "Article not found" };

  const url = `${SITE_URL}/blog/${post.slug}`;
  return {
    title: `${post.title} | Nizamudheen KC`,
    description: post.metaDescription,
    keywords: [post.keyword],
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      type: "article",
      url,
      title: post.title,
      description: post.metaDescription,
      publishedTime: post.date,
      authors: ["Nizamudheen KC"],
      images: [{ url: post.image }],
      locale: "en_IN",
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.metaDescription,
      images: [post.image],
    },
  };
}

const fmtDate = (iso: string) =>
  new Date(iso).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const related = getRelatedPosts(post);
  const url = `${SITE_URL}/blog/${post.slug}`;

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.metaDescription,
    image: post.image,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      "@type": "Person",
      name: "Nizamudheen KC",
      url: SITE_URL,
    },
    publisher: {
      "@type": "Person",
      name: "Nizamudheen KC",
      url: SITE_URL,
    },
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    keywords: post.keyword,
  };

  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
      { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE_URL}/blog` },
      { "@type": "ListItem", position: 3, name: post.title, item: url },
    ],
  };

  return (
    <div className="min-h-screen bg-[#f5f2ec] text-black">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
      <NavigationV2 />

      <article className="max-w-[820px] mx-auto px-4 md:px-6 pt-32 md:pt-40 pb-20">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-sm text-neutral-500 hover:text-black transition-colors mb-8"
        >
          <ArrowLeft size={15} /> All articles
        </Link>

        {/* Header */}
        <div className="flex items-center gap-3 text-xs tracking-[0.2em] uppercase text-neutral-500 mb-5">
          <span className="bg-[#c5f542] text-black px-3 py-1 rounded-full">
            {post.category}
          </span>
          <span>{fmtDate(post.date)}</span>
          <span className="text-neutral-300">·</span>
          <span>{post.readingTime}</span>
        </div>

        <h1 className="text-3xl md:text-5xl font-semibold tracking-tight leading-[1.05] mb-6">
          {post.title}
        </h1>
        <p className="text-neutral-600 text-lg md:text-xl leading-relaxed mb-8">
          {post.excerpt}
        </p>

        {/* Author */}
        <div className="flex items-center gap-3 pb-8 mb-10 border-b border-black/10">
          <span className="w-11 h-11 rounded-full bg-black text-[#c5f542] flex items-center justify-center font-bold">
            N
          </span>
          <div>
            <div className="font-semibold text-sm">Nizamudheen KC</div>
            <div className="text-neutral-500 text-xs">
              Performance Marketer · India&apos;s First Marketing Nomad
            </div>
          </div>
        </div>

        {/* Hero image */}
        <div className="relative aspect-[16/9] rounded-3xl overflow-hidden mb-10 md:mb-12 bg-neutral-200">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover"
            sizes="(max-width: 820px) 100vw, 820px"
            priority
          />
        </div>

        {/* Body */}
        <MarkdownBody content={post.body} />
      </article>

      {/* Related */}
      {related.length > 0 && (
        <section className="max-w-[1100px] mx-auto px-4 md:px-6 pb-24 md:pb-32">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-8">
            Keep reading
          </h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {related.map((r) => (
              <Link
                key={r.slug}
                href={`/blog/${r.slug}`}
                className="group flex items-center gap-5 rounded-3xl bg-white border border-black/5 p-4 hover:shadow-lg transition-shadow"
              >
                <div className="relative w-24 h-24 rounded-2xl overflow-hidden flex-shrink-0 bg-neutral-200">
                  <Image
                    src={r.image}
                    alt={r.title}
                    fill
                    className="object-cover"
                    sizes="96px"
                  />
                </div>
                <div className="min-w-0">
                  <div className="text-[11px] tracking-[0.15em] uppercase text-neutral-500 mb-1">
                    {r.category}
                  </div>
                  <h3 className="font-semibold leading-snug group-hover:text-neutral-700 transition-colors">
                    {r.title}
                  </h3>
                </div>
                <ArrowUpRight
                  size={18}
                  className="ml-auto flex-shrink-0 text-neutral-400 group-hover:text-black transition-colors"
                />
              </Link>
            ))}
          </div>
        </section>
      )}

      <FooterV2 />
    </div>
  );
}
