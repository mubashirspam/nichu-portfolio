"use client";

import React, { useRef } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useScrollRevealText, revealTextStyle } from "./use-scroll-reveal";

type CaseStudy = {
  title: string;
  metric?: string;
  note: string;
  category: string;
  image: string;
  accent: string;
  size: "lg" | "sm";
};

const ITEMS: CaseStudy[] = [
  {
    title: "Skillage Academy",
    metric: "2 Cr+ Revenue · 200+ Trained",
    note: "Built Kerala's leading EdTech brand from the ground up — in-house team, agency (WindAge) and Academic Head, all within a year.",
    category: "Built & Scaled · EdTech",
    image:
      "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=1200&q=80&auto=format&fit=crop",
    accent: "bg-[#c5f542]",
    size: "lg",
  },
  {
    title: "WinTouch Academy",
    metric: "₹2L → ₹2 Cr · <1 Month",
    note: "₹2L ad spend turned into ₹2 Cr revenue for Kasaragod's first NEET coaching academy. Meta Ads, full strategy, influencer marketing.",
    category: "Performance Marketing · EdTech",
    image:
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=1200&q=80&auto=format&fit=crop",
    accent: "bg-sky-400",
    size: "sm",
  },
  {
    title: "Raasta Realty",
    note: "A creative website and Meta Ads strategy for purpose-driven real estate — built around impact, not just transactions.",
    category: "Web + Performance · Real Estate",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&q=80&auto=format&fit=crop",
    accent: "bg-black text-white",
    size: "sm",
  },
  {
    title: "Sabi Inspire",
    note: "Full-funnel marketing for a Kerala & Dubai influencer brand. Strategy built for two markets, one brand voice.",
    category: "Meta Ads + Strategy · Fragrance / Travel",
    image:
      "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=1200&q=80&auto=format&fit=crop",
    accent: "bg-[#c5f542]",
    size: "lg",
  },
  {
    title: "Mobile Mate",
    note: "Meta Ads and creative strategy for a mobile brand — sharper campaigns, stronger angles, built to drive store interest.",
    category: "Performance Marketing · Retail",
    image:
      "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=1200&q=80&auto=format&fit=crop",
    accent: "bg-sky-400",
    size: "sm",
  },
  {
    title: "Lilac Clothing",
    note: "Built brand value and a consistent online presence for a clothing label through strategy-led social and creative direction.",
    category: "Branding · Fashion",
    image:
      "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=1200&q=80&auto=format&fit=crop",
    accent: "bg-black text-white",
    size: "sm",
  },
  {
    title: "Blossom Store",
    note: "Managed social media, brand value and Meta Ads end-to-end — keeping the brand active and converting.",
    category: "Social + Performance · Retail",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200&q=80&auto=format&fit=crop",
    accent: "bg-sky-400",
    size: "sm",
  },
];

const GalleryV2: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headingBg = useScrollRevealText(sectionRef);

  return (
    <section
      id="gallery"
      ref={sectionRef}
      className="relative bg-[#f5f2ec] py-20 md:py-32 px-4 md:px-6"
    >
      <div className="max-w-[1400px] mx-auto">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14 md:mb-20">
          <div>
            <div className="flex items-center gap-2 text-xs tracking-[0.3em] uppercase text-neutral-500 mb-4">
              <span className="inline-block w-6 h-px bg-neutral-400" />
              Performance Portfolio
            </div>
            <motion.h2
              className="text-4xl md:text-6xl lg:text-7xl font-semibold tracking-tight leading-[1.03]"
              style={{ backgroundImage: headingBg, ...revealTextStyle }}
            >
              Selected case studies,<br />
              real numbers.
            </motion.h2>
          </div>
          
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 auto-rows-[280px] md:auto-rows-[340px] gap-4 md:gap-6">
          {ITEMS.map((item, i) => (
            <motion.a
              key={i}
              href="#contact"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.06 }}
              className={`group relative rounded-3xl overflow-hidden bg-neutral-200 ${
                item.size === "lg" ? "md:col-span-2" : ""
              }`}
            >
              {/* bg image */}
              <div
                className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-700"
                style={{ backgroundImage: `url(${item.image})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

              {/* top tag */}
              <div className="relative p-5 md:p-6 flex items-start justify-between">
                <span className="inline-block bg-white/90 backdrop-blur text-black text-[11px] tracking-[0.15em] uppercase px-3 py-1.5 rounded-full">
                  {item.category}
                </span>
                <span className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center group-hover:rotate-45 transition-transform">
                  <ArrowUpRight size={16} />
                </span>
              </div>

              {/* bottom content */}
              <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6 text-white">
                <h3 className="text-2xl md:text-3xl font-semibold tracking-tight mb-1">
                  {item.title}
                </h3>
                <p className="text-white/80 text-sm mb-4">{item.note}</p>
                {item.metric && (
                  <span
                    className={`inline-block px-4 py-2 rounded-full text-sm font-medium ${item.accent}`}
                  >
                    {item.metric}
                  </span>
                )}
              </div>
            </motion.a>
          ))}
        </div>

        {/* Closing stats strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="mt-10 md:mt-14 rounded-3xl bg-black text-white px-6 py-6 md:px-10 md:py-7 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm md:text-base text-center"
        >
          <span><span className="font-semibold">₹10.48 Cr</span> revenue generated</span>
          <span className="text-white/25">·</span>
          <span><span className="font-semibold">100+</span> brands scaled</span>
          <span className="text-white/25">·</span>
          <span><span className="font-semibold">2,000+</span> marketers mentored</span>
          <span className="text-white/25">·</span>
          <span className="text-[#c5f542]">Kerala → UAE</span>
        </motion.div>
      </div>
    </section>
  );
};

export default GalleryV2;
