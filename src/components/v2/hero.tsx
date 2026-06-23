"use client";

import React, { useRef, useEffect } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const VIDEO_URL = "https://ik.imagekit.io/8i3ek2gje/noutput.mp4?tr=orig";

const HeroV2: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const durationRef = useRef(0);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const onMeta = () => {
      if (isFinite(video.duration)) durationRef.current = video.duration;
    };
    video.addEventListener("loadedmetadata", onMeta);
    if (video.readyState >= 1) onMeta();
    return () => video.removeEventListener("loadedmetadata", onMeta);
  }, []);

  useMotionValueEvent(scrollYProgress, "change", (progress) => {
    const video = videoRef.current;
    const duration = durationRef.current;
    if (!video || !duration) return;
    const t = Math.min(progress * duration, duration - 0.05);
    try {
      video.currentTime = t;
    } catch {
      /* seek errors before buffer ready */
    }
  });

  return (
    <section id="home" ref={sectionRef} className="relative h-[400vh]">
      <div className="sticky top-0 h-screen flex items-center justify-center md:p-6">
        <div className="relative w-full h-full max-w-[1400px] overflow-hidden rounded-none md:rounded-[25px] lg:rounded-[40px]">
          <video
            ref={videoRef}
            src={VIDEO_URL}
            className="absolute inset-0 w-full h-full object-cover"
            preload="metadata"
            muted
            playsInline
          />

          <div className="absolute inset-0 bg-black/30" />

          <div className="relative h-full flex flex-col items-center justify-center text-center px-6 md:px-12 lg:px-16">
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
              className="font-heading italic text-white tracking-tight leading-[1.05] text-[clamp(2.5rem,7vw,6.5rem)]"
            >
              India&apos;s First Marketing<br />Nomad
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.5 }}
              className="mt-5 text-white/75 text-sm md:text-base max-w-md leading-relaxed"
            >
              Turning ₹30 lakh in ad spend into ₹10.48 crore in revenue. 150K
              followers in a month. Real strategy, measurable growth, zero fluff.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="mt-8 flex items-center gap-3 flex-wrap justify-center"
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
                href="#results"
                className="inline-flex items-center gap-2 text-white/90 hover:text-white text-sm px-5 py-3 rounded-full border border-white/25 backdrop-blur-sm transition-colors"
              >
                Get Started
              </a>
            </motion.div>
          </div>

          <div className="absolute bottom-6 right-6 md:bottom-8 md:right-8 text-white/70 text-[11px] tracking-[0.3em] uppercase flex items-center gap-2 z-10">
            <span className="inline-block w-6 h-px bg-white/50" />
            Scroll
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroV2;
