"use client";

import React, { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";
import { ArrowUpRight } from "lucide-react";
import { useScrollRevealText, revealTextStyle } from "./use-scroll-reveal";
import { HOME_FAQ_ITEMS } from "./faq-data";

const FaqV2: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headingBg = useScrollRevealText(sectionRef);
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section
      id="faq"
      ref={sectionRef}
      className="relative bg-[#f5f2ec] py-20 md:py-32 px-4 md:px-6"
    >
      <div className="max-w-[1400px] mx-auto grid md:grid-cols-[1fr_1.4fr] gap-12 md:gap-20 items-start">
        {/* Left: heading */}
        <div className="md:sticky md:top-28">
          <div className="flex items-center gap-2 text-xs tracking-[0.3em] uppercase text-neutral-500 mb-5">
            <span className="inline-block w-6 h-px bg-neutral-400" />
            FAQ
          </div>
          <motion.h2
            className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.03]"
            style={{ backgroundImage: headingBg, ...revealTextStyle }}
          >
            Have doubts?<br />I have clarity.
          </motion.h2>
          <p className="mt-6 text-neutral-600 text-base md:text-lg leading-relaxed max-w-sm">
            Straight answers on results, services and how we&apos;d work
            together. Still unsure? Message me on WhatsApp.
          </p>
          <a
            href="/faq/"
            className="group mt-7 inline-flex items-center gap-2 bg-black text-white text-sm pl-5 pr-2 py-2 rounded-full hover:bg-neutral-800 transition-colors"
          >
            See all 50 FAQs
            <span className="w-8 h-8 rounded-full bg-[#c5f542] text-black flex items-center justify-center group-hover:rotate-45 transition-transform">
              <ArrowUpRight size={15} />
            </span>
          </a>
        </div>

        {/* Right: accordion */}
        <div className="border-t border-black/15">
          {HOME_FAQ_ITEMS.map((item, i) => {
            const isOpen = open === i;
            return (
              <div key={i} className="border-b border-black/15">
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-6 py-6 md:py-7 text-left group"
                  aria-expanded={isOpen}
                >
                  <span className="text-lg md:text-2xl font-medium tracking-tight">
                    {item.q}
                  </span>
                  <span
                    className={`flex-shrink-0 w-9 h-9 rounded-full border border-black/20 flex items-center justify-center transition-all ${
                      isOpen ? "bg-[#c5f542] rotate-45" : "group-hover:bg-black/5"
                    }`}
                  >
                    <Plus size={18} />
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <p className="text-neutral-600 text-base md:text-lg leading-relaxed pb-6 md:pb-7 max-w-2xl">
                        {item.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FaqV2;
