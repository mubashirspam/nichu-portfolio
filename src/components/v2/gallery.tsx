"use client";

import React, { useRef } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useScrollRevealText, revealTextStyle } from "./use-scroll-reveal";

const ITEMS = [
  {
    title: "EduTech Startup",
    metric: "+2,660%",
    note: "₹5L spent → ₹1.38Cr revenue",
    category: "Performance Marketing",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200&q=80&auto=format&fit=crop",
    accent: "bg-[#c5f542]",
    size: "lg",
  },
  {
    title: "Personal Branding",
    metric: "+500%",
    note: "140K followers gained",
    category: "Social Media",
    image:
      "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=1200&q=80&auto=format&fit=crop",
    accent: "bg-sky-400",
    size: "sm",
  },
  {
    title: "Fashion Brand",
    metric: "1M+",
    note: "Reach in 30 days",
    category: "Moment Marketing",
    image:
      "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=1200&q=80&auto=format&fit=crop",
    accent: "bg-black text-white",
    size: "sm",
  },
  {
    title: "Educational Platform",
    metric: "10K+",
    note: "Students enrolled via smart content",
    category: "Content Marketing",
    image:
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=1200&q=80&auto=format&fit=crop",
    accent: "bg-[#c5f542]",
    size: "sm",
  },
  {
    title: "Film Campaign",
    metric: "5M+",
    note: "Reach in 15 days via viral campaigns",
    category: "Growth Marketing",
    image:
      "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=1200&q=80&auto=format&fit=crop",
    accent: "bg-black text-white",
    size: "lg",
  },
  {
    title: "Paid Lead Gen",
    metric: "1,000+",
    note: "Quality leads via Meta ads",
    category: "Paid Advertising",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80&auto=format&fit=crop",
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
              Work
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
                <span
                  className={`inline-block px-4 py-2 rounded-full text-sm font-medium ${item.accent}`}
                >
                  {item.metric}
                </span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GalleryV2;
