"use client";

import React, { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const VIDEO_URL = "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260511_131941_d136af49-e243-493a-be14-6ff3f24e09e6.mp4";

const HeroV2: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    const update = () => setIsDesktop(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  // Frame grows to full-bleed as you scroll: padding & radius → 0, width → full.
  // A short scroll (~40% of the section) snaps it open on both mobile & desktop.
  const pad = useTransform(scrollYProgress, [0, 0.4], [isDesktop ? 24 : 14, 0]);
  const radius = useTransform(scrollYProgress, [0, 0.4], [isDesktop ? 56 : 36, 0]);
  const maxWidth = useTransform(scrollYProgress, [0, 0.4], [1400, 3000]);

  return (
    <section id="home" ref={sectionRef} className="relative h-[180vh] md:h-[400vh]">
      <motion.div
        className="sticky top-0 h-screen flex items-center justify-center"
        style={{ padding: pad }}
      >
        <motion.div
          className="relative w-full h-full overflow-hidden"
          style={{ maxWidth, borderRadius: radius }}
        >
          <video
            src={VIDEO_URL}
            className="absolute inset-0 w-full h-full object-cover"
            preload="metadata"
            autoPlay
            muted
            loop
            playsInline
          />

          <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/10 to-black/10" />

          <div className="relative h-full flex flex-col items-center justify-center text-center px-6 md:px-12 lg:px-16 py-16">
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
              className="text-white"
            >
              <span className="inline-flex items-center gap-2 mb-4 md:mb-6 px-3.5 py-1.5 rounded-full border border-white/25 bg-white/10 backdrop-blur-sm text-[10px] md:text-[11px] tracking-[0.22em] md:tracking-[0.25em] uppercase text-black font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-[#c5f542] shadow-[0_0_8px_#c5f542]" />
                Best Performance Marketer in Kerala
              </span>
              <span className="block font-heading italic text-white tracking-tight leading-[1.05] text-[clamp(2.1rem,7vw,6.5rem)] drop-shadow-[0_2px_20px_rgba(0,0,0,0.4)]">
                India&apos;s First Marketing<br />Nomad
              </span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="mt-6 md:mt-8 flex items-center gap-3 flex-wrap justify-center"
            >
              <a
                href="#contact"
                className="hidden md:inline-flex items-center gap-2 bg-black text-white text-sm pl-6 pr-2 py-2 rounded-full hover:bg-neutral-800 transition-colors"
              >
                Let&apos;s Talk
                <span className="w-9 h-9 rounded-full bg-[#c5f542] text-black flex items-center justify-center">
                  <ArrowUpRight size={16} />
                </span>
              </a>
              <a
                href="#mentorship"
                className="inline-flex items-center gap-2 bg-[#c5f542] text-black font-medium text-sm px-5 py-3.5 rounded-full hover:bg-[#b3e436] transition-colors"
              >
                Join 1:1 Mentoring
              </a>
            </motion.div>

            
          </div>

          <div className="absolute bottom-6 right-6 md:bottom-8 md:right-8 text-white/70 text-[11px] tracking-[0.3em] uppercase flex items-center gap-2 z-10">
            <span className="inline-block w-6 h-px bg-white/50" />
            Scroll
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroV2;
