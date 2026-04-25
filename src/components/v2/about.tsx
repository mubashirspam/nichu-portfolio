"use client";

import React, { useRef } from "react";
import { motion } from "framer-motion";
import { PieChart, Lightbulb, BarChart3 } from "lucide-react";
import { useScrollRevealText, revealTextStyle } from "./use-scroll-reveal";

const AVATARS = [
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=96&q=80&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=96&q=80&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=96&q=80&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=96&q=80&auto=format&fit=crop",
];

const PORTRAIT =
  "https://ik.imagekit.io/marketingnizam/ChatGPT%20Image%20Apr%2025,%202026,%2004_26_02%20PM%20Large.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const, delay: i * 0.08 },
  }),
};

const AboutV2: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headingBg = useScrollRevealText(sectionRef);

  return (
    <section id="about" ref={sectionRef} className="relative py-20 md:py-32 px-4 md:px-6 bg-[#f5f2ec]">
      <div className="max-w-[1400px] mx-auto">
        {/* Kicker */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="flex items-center justify-center gap-2 mb-8"
        >
          <span className="w-6 h-px bg-neutral-400" />
          <span className="text-xs tracking-[0.35em] uppercase text-neutral-500">
            About
          </span>
          <span className="w-6 h-px bg-neutral-400" />
        </motion.div>

        {/* Big intro headline with inline icon chips */}
        <motion.h2
          className="text-center text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight leading-[1.05] mb-16 md:mb-24"
          style={{ backgroundImage: headingBg, ...revealTextStyle }}
        >
          A nomad marketer building{" "}
          <span className="inline-flex items-center gap-3 align-middle">
            <span className="inline-flex w-9 h-9 md:w-14 md:h-14 rounded-full bg-sky-400 items-center justify-center">
              <PieChart className="text-black" size={18} />
            </span>
            smarter
          </span>{" "}
          brands
          <br />
          from Kerala, and{" "}
          <span className="inline-flex items-center gap-3 align-middle">
            <span className="inline-flex w-9 h-9 md:w-14 md:h-14 rounded-full bg-[#c5f542] items-center justify-center">
              <Lightbulb className="text-black" size={18} />
            </span>
            shipping worldwide
          </span>
        </motion.h2>

        {/* Bento grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {/* Card 1 — blue with portrait */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            custom={0}
            className="relative rounded-3xl bg-sky-400 overflow-hidden min-h-[380px] md:min-h-[460px] group"
          >
            <div
              className="absolute inset-0 bg-cover bg-center opacity-90 mix-blend-luminosity group-hover:scale-105 transition-transform duration-700"
              style={{ backgroundImage: `url(${PORTRAIT})` }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-sky-500/60 via-transparent to-transparent" />
            <div className="relative p-6 flex flex-col h-full justify-between min-h-[380px] md:min-h-[460px]">
              <div className="flex items-start justify-between">
                <span className="font-bold tracking-tighter text-white text-2xl">
                  NIZAM<sup className="text-xs">®</sup>
                </span>
                <span className="w-9 h-9 rounded-full bg-white flex items-center justify-center">
                  <BarChart3 size={16} className="text-black" />
                </span>
              </div>

              <div className="bg-white rounded-2xl p-5 md:p-6 shadow-lg">
                <div className="text-4xl md:text-5xl font-semibold tracking-tight text-black">
                  150K+
                </div>
                <p className="text-neutral-600 text-sm mt-2 leading-snug">
                  Followers gained in a single month through content marketing.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Card 2 — neutral with testimonial */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            custom={1}
            className="relative rounded-3xl bg-white p-6 md:p-8 min-h-[380px] md:min-h-[460px] flex flex-col justify-between"
          >
            <div>
              <p className="text-neutral-500 text-sm mb-3">
                Commitment to measurable
              </p>
              <div className="text-5xl md:text-6xl font-semibold tracking-tight text-black">
                100%
              </div>
            </div>

            <div>
              <div className="flex -space-x-2 mb-4">
                {AVATARS.map((src, i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full border-2 border-neutral-100 overflow-hidden bg-neutral-200"
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={src}
                      alt=""
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
              <p className="text-neutral-800 text-sm md:text-base leading-relaxed">
                &ldquo;Nizam&apos;s strategy completely reshaped how we grow.
                Intelligent, efficient, and seamless.&rdquo;
              </p>
            </div>
          </motion.div>

          {/* Card 3 — lime + black stacked */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            custom={2}
            className="flex flex-col gap-4 md:gap-6"
          >
            <div className="flex-1 rounded-3xl bg-[#c5f542] p-6 md:p-8 min-h-[230px] md:min-h-[280px] flex flex-col justify-between">
              <p className="text-black/70 text-sm">Ad spend managed</p>
              <div>
                <div className="text-5xl md:text-6xl font-semibold tracking-tight text-black">
                  ₹30L+
                </div>
                <p className="text-black/70 text-sm mt-2 leading-snug max-w-[90%]">
                  Deployed across performance campaigns to power smarter growth.
                </p>
              </div>
            </div>

            <div className="rounded-3xl bg-black text-white p-6 md:p-8 flex items-center justify-between gap-4">
              <span className="text-sm text-neutral-300">Revenue generated</span>
              <span className="text-3xl md:text-4xl font-semibold tracking-tight">
                ₹10.48 Cr
              </span>
            </div>
          </motion.div>
        </div>

        {/* Paragraph block under bento */}
        <div className="grid md:grid-cols-2 gap-10 mt-16 md:mt-24 max-w-5xl">
          <p className="text-neutral-700 text-base md:text-lg leading-relaxed">
            Kerala is witnessing a startup revolution. New businesses, fresh
            ideas, and bold entrepreneurs are everywhere — and my mission is to
            empower students, professionals, and creators with the skill of
            digital marketing.
          </p>
          <p className="text-neutral-700 text-base md:text-lg leading-relaxed">
            I dream of teaching 100K people — turning them into confident
            creators and helping them build powerful brands and billion-rupee
            businesses through social media literacy.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutV2;
