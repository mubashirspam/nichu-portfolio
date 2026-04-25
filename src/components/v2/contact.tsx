"use client";

import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { useScrollRevealText, revealTextStyle } from "./use-scroll-reveal";
import { ArrowUpRight, Phone, MessageCircle } from "lucide-react";

const BG_IMAGE =
  "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?w=2400&q=80&auto=format&fit=crop";

const ContactV2: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);
  const bgScale = useTransform(scrollYProgress, [0, 1], [1.1, 1.2]);
  const headingBg = useScrollRevealText(ref as React.RefObject<HTMLElement | null>, true);

  return (
    <section id="contact" ref={ref} className="relative bg-[#f5f2ec] pt-10 pb-20 md:pt-16 px-4 md:px-6">
      <div className="max-w-[1400px] mx-auto rounded-[28px] md:rounded-[40px] overflow-hidden relative min-h-[600px] md:min-h-[680px]">
        {/* Parallax bg */}
        <motion.div style={{ y: bgY, scale: bgScale }} className="absolute inset-0 -inset-y-12">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${BG_IMAGE})` }}
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/15 to-black/50" />

        <div className="relative p-6 md:p-14 lg:p-20 h-full flex flex-col justify-between min-h-[600px] md:min-h-[680px]">
          {/* Top trust */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3 text-white/90"
          >
            <span className="flex -space-x-2">
              {[0, 1, 2].map((i) => (
                <span
                  key={i}
                  className="w-8 h-8 rounded-full border-2 border-white/80 bg-white/40 backdrop-blur"
                />
              ))}
            </span>
            <span className="text-sm tracking-wide">
              Trusted over 500+ brands & creators
            </span>
          </motion.div>

          {/* Headline + body */}
          <div className="max-w-3xl">
            <motion.h2
              className="font-semibold tracking-tight leading-[1.02] text-[clamp(2rem,5vw,5rem)]"
              style={{ backgroundImage: headingBg, ...revealTextStyle }}
            >
              Let&apos;s make<br className="hidden sm:block" />
              something worth watching.
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mt-5 text-white/85 text-base md:text-lg max-w-xl leading-relaxed"
            >
              If you believe small-town dreams can go global — or you&apos;re
              tired of marketing fluff and want real strategy — let&apos;s talk.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.35 }}
              className="mt-8 flex flex-wrap items-center gap-3"
            >
              <a
                href="https://wa.me/919048455359"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 bg-[#c5f542] hover:bg-white text-black pl-6 pr-2 py-2 rounded-full font-medium text-sm tracking-wider uppercase transition-colors"
              >
                WhatsApp
                <span className="w-9 h-9 rounded-full bg-black text-white flex items-center justify-center group-hover:rotate-45 transition-transform">
                  <ArrowUpRight size={16} />
                </span>
              </a>
              <a
                href="tel:+919048455359"
                className="inline-flex items-center gap-2 text-white/90 hover:text-white text-sm px-5 py-3 rounded-full border border-white/25 backdrop-blur-sm transition-colors"
              >
                <Phone size={14} /> +91 9048 455 359
              </a>
              <a
                href="#services"
                className="inline-flex items-center gap-2 text-white/90 hover:text-white text-sm px-5 py-3 rounded-full border border-white/25 backdrop-blur-sm transition-colors"
              >
                <MessageCircle size={14} /> See services
              </a>
            </motion.div>
          </div>

          {/* Bottom stamp */}
          <div className="hidden md:flex items-center justify-between text-white/70 text-[11px] tracking-[0.3em] uppercase">
            <span>Kerala · India · Worldwide</span>
            <span>Available for new projects</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactV2;
