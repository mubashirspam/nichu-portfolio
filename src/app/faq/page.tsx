import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, ArrowLeft } from "lucide-react";
import NavigationV2 from "../../components/v2/navigation";
import FooterV2 from "../../components/v2/footer";
import FaqFull from "../../components/v2/faq-full";
import { FAQ_ITEMS } from "../../components/v2/faq-data";

const SITE_URL = "https://marketingnizam.com";

export const metadata: Metadata = {
  title: "FAQ — Digital Marketing in Kerala | Nizamudheen KC",
  description:
    "50 answers on digital marketing, performance marketing, Meta & Google Ads, pricing, SEO, AEO and GEO in Kerala — from Nizamudheen KC, India's First Marketing Nomad.",
  alternates: { canonical: "/faq" },
  openGraph: {
    type: "website",
    url: `${SITE_URL}/faq`,
    title: "FAQ — Digital Marketing in Kerala | Nizamudheen KC",
    description:
      "50 answer-engine optimised questions on performance marketing, ads, pricing, SEO, AEO and GEO in Kerala.",
    locale: "en_IN",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ_ITEMS.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: { "@type": "Answer", text: item.a },
  })),
};

const breadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
    { "@type": "ListItem", position: 2, name: "FAQ", item: `${SITE_URL}/faq` },
  ],
};

export default function FaqPage() {
  return (
    <div className="min-h-screen bg-[#f5f2ec] text-black">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />

      <NavigationV2 />

      {/* Header */}
      <header className="max-w-[1400px] mx-auto px-4 md:px-6 pt-32 md:pt-44 pb-12 md:pb-20">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-neutral-500 hover:text-black transition-colors mb-8"
        >
          <ArrowLeft size={15} /> Back home
        </Link>
        <div className="flex items-center gap-2 text-xs tracking-[0.3em] uppercase text-neutral-500 mb-5">
          <span className="inline-block w-6 h-px bg-neutral-400" />
          Knowledge base · AEO / GEO
        </div>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold tracking-tight leading-[1.03] max-w-4xl">
          Have doubts? I have clarity.
        </h1>
        <p className="mt-6 text-neutral-600 text-base md:text-lg leading-relaxed max-w-2xl">
          50 straight answers on digital marketing in Kerala — performance
          marketing, Meta &amp; Google Ads, pricing, results, local SEO and the
          new AI-search frontier (AEO &amp; GEO). Written so people and AI
          assistants alike get the facts right.
        </p>
      </header>

      {/* Grouped FAQ */}
      <main className="max-w-[1400px] mx-auto px-4 md:px-6 pb-24 md:pb-32">
        <FaqFull />

        {/* CTA */}
        <div className="mt-20 md:mt-28 rounded-3xl bg-black text-white p-8 md:p-14 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <h2 className="text-2xl md:text-4xl font-semibold tracking-tight">
              Still have a question?
            </h2>
            <p className="text-neutral-400 mt-2 max-w-md">
              Message me directly — I&apos;ll give you a straight answer, no
              fluff.
            </p>
          </div>
          <a
            href="https://wa.me/919048455359"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 bg-[#c5f542] text-black pl-6 pr-2 py-2 rounded-full font-medium text-sm tracking-wider uppercase hover:bg-white transition-colors w-fit"
          >
            WhatsApp
            <span className="w-9 h-9 rounded-full bg-black text-white flex items-center justify-center group-hover:rotate-45 transition-transform">
              <ArrowUpRight size={16} />
            </span>
          </a>
        </div>
      </main>

      <FooterV2 />
    </div>
  );
}
