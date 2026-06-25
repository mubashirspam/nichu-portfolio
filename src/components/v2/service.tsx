"use client";

import React, { useState, useRef } from "react";
import { motion, AnimatePresence, useMotionValue, useSpring } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useScrollRevealText, revealTextStyle } from "./use-scroll-reveal";

const SERVICES = [
  {
    title: "Performance Marketing",
    description:
      "Meta & Google Ads built to turn spend into revenue, not just impressions. As a performance marketer in Kerala, I treat every rupee as accountable — tracked, tested and optimised toward a real business outcome. ₹1.57L turned into ₹1.5 Cr wasn't luck; it was structured targeting, sharp creative and relentless optimisation.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80&auto=format&fit=crop",
  },
  {
    title: "Search Engine Optimization (SEO)",
    description:
      "When people search on Google for what you sell, do they find you or your competitor? I get your website ranking where the buyers are looking — the SEO side of being a digital marketer in Kerala that brands actually trust. Long-term, compounding, free traffic.",
    image:
      "https://images.unsplash.com/photo-1559028012-481c04fa702d?w=1200&q=80&auto=format&fit=crop",
  },
  {
    title: "Brand Consultation",
    description:
      "Sometimes you don't need more ads — you need the right plan first. I help you nail positioning, messaging and growth direction before a single rupee goes into media.",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&q=80&auto=format&fit=crop",
  },
  {
    title: "Social Media Marketing (SMM)",
    description:
      "Your customers scroll Instagram and Facebook every day — the question is whether they see you. Content strategy, posting, engagement and community building that makes the algorithm work for you.",
    image:
      "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=1200&q=80&auto=format&fit=crop",
  },
  {
    title: "SEO / AEO / GEO",
    description:
      "Search isn't just Google anymore. I optimise your brand to show up on Google AND inside AI answers — ChatGPT, Gemini and Perplexity. The digital marketing expert Kerala businesses need for the next decade.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80&auto=format&fit=crop",
  },
  {
    title: "E-commerce & Lead Generation",
    description:
      "Scaling D2C and e-commerce brands — including the UAE / Dubai market — with funnels that turn clicks into customers. Lead capture, nurture, retargeting and the systems that keep your cost per result dropping as you scale.",
    image:
      "https://images.unsplash.com/photo-1552664688-cf412ec27db2?w=1200&q=80&auto=format&fit=crop",
  },
];

const ServiceV2: React.FC = () => {
  const [hovered, setHovered] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const headingBg = useScrollRevealText(sectionRef);

  // Follow-mouse image position
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 140, damping: 18 });
  const springY = useSpring(mouseY, { stiffness: 140, damping: 18 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = sectionRef.current?.getBoundingClientRect();
    if (!rect) return;
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  return (
    <section
      id="services"
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      className="relative bg-[#f5f2ec] text-black py-20 md:py-32 px-4 md:px-6 overflow-hidden"
    >
      <div className="max-w-[1400px] mx-auto">
        {/* Section header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14 md:mb-20">
          <div>
            <div className="flex items-center gap-2 text-xs tracking-[0.3em] uppercase text-neutral-500 mb-4">
              <span className="inline-block w-6 h-px bg-neutral-400" />
              Services
            </div>
            <motion.h2
              className="text-4xl md:text-6xl lg:text-7xl font-semibold tracking-tight leading-[1.03]"
              style={{ backgroundImage: headingBg, ...revealTextStyle }}
            >
              What I do —<br />
              everything growth.
            </motion.h2>
          </div>
          <p className="max-w-md text-neutral-600 text-base md:text-lg leading-relaxed">
            One marketer, the full growth stack — strategy, ads, content and the
            systems that tie them together.
          </p>
        </div>

        {/* Rows */}
        <div className="border-t border-black/15">
          {SERVICES.map((s, i) => {
            const isHovered = hovered === i;
            return (
              <motion.a
                key={i}
                href="#contact"
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
                className={`relative block border-b border-black/15 transition-colors duration-500 ${
                  isHovered ? "bg-[#c5f542]" : "bg-transparent"
                }`}
              >
                <div className="flex items-center justify-between gap-6 py-8 md:py-10 px-2 md:px-6">
                  <div className="flex-1 min-w-0">
                    <motion.div
                      animate={{ x: isHovered ? 12 : 0 }}
                      transition={{ duration: 0.4, ease: "easeOut" }}
                    >
                      <h3 className="text-2xl md:text-4xl lg:text-5xl font-semibold tracking-tight mb-2">
                        {s.title}
                      </h3>
                      <p className="text-neutral-700 text-sm md:text-base max-w-2xl">
                        {s.description}
                      </p>
                    </motion.div>
                  </div>

                  <motion.div
                    animate={{
                      rotate: isHovered ? 45 : 0,
                      scale: isHovered ? 1.1 : 1,
                    }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    className="flex-shrink-0 w-12 h-12 md:w-14 md:h-14 rounded-full border border-black/30 flex items-center justify-center"
                  >
                    <ArrowUpRight size={22} />
                  </motion.div>
                </div>
              </motion.a>
            );
          })}
        </div>
      </div>

      {/* Floating preview image that follows cursor */}
      <AnimatePresence>
        {hovered !== null && (
          <motion.div
            key={hovered}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.25 }}
            style={{
              x: springX,
              y: springY,
              translateX: "-50%",
              translateY: "-50%",
            }}
            className="pointer-events-none hidden md:block absolute top-0 left-0 w-80 h-56 rounded-2xl overflow-hidden shadow-2xl z-30"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={SERVICES[hovered].image}
              alt={SERVICES[hovered].title}
              className="w-full h-full object-cover"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ServiceV2;
