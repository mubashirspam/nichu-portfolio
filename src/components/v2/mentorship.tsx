"use client";

import React, { useRef } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, GraduationCap } from "lucide-react";
import { useScrollRevealText, revealTextStyle } from "./use-scroll-reveal";

// Named Skillage mentees — neutral path labels only. Add real photos, quotes
// and outcomes here when confirmed (do not invent results).
const MENTEES = [
  { name: "Fayis", path: "Skillage graduate · Performance Marketing" },
  { name: "Sana", path: "Skillage graduate · Content & Production" },
  { name: "Mishal", path: "Skillage graduate · Social Media Marketing" },
];

const MentorshipV2: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headingBg = useScrollRevealText(sectionRef);

  return (
    <section
      id="mentorship"
      ref={sectionRef}
      className="relative bg-[#f5f2ec] py-20 md:py-32 px-4 md:px-6"
    >
      <div className="max-w-[1400px] mx-auto">
        {/* Header */}
        <div className="flex items-center gap-2 text-xs tracking-[0.3em] uppercase text-neutral-500 mb-5">
          <span className="inline-block w-6 h-px bg-neutral-400" />
          Mentorship
        </div>

        <div className="grid md:grid-cols-[1.3fr_1fr] gap-10 md:gap-16 items-end mb-14 md:mb-20">
          <motion.h2
            className="text-4xl md:text-6xl lg:text-7xl font-semibold tracking-tight leading-[1.03]"
            style={{ backgroundImage: headingBg, ...revealTextStyle }}
          >
            2,000+ marketers mentored —<br />
            here&apos;s what they say.
          </motion.h2>
          <p className="text-neutral-600 text-base md:text-lg leading-relaxed">
            Over the years I&apos;ve trained 2,000+ aspiring digital marketers
            across content creation, production, performance marketing and skill
            development.
          </p>
        </div>

        <div className="grid md:grid-cols-[1fr_1.2fr] gap-6 md:gap-8 items-stretch">
          {/* Body card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7 }}
            className="relative rounded-3xl bg-black text-white p-8 md:p-12 overflow-hidden flex flex-col justify-between min-h-[320px]"
          >
            <div className="absolute -right-20 -top-20 w-72 h-72 rounded-full bg-[#c5f542]/15 blur-3xl" />
            <GraduationCap size={28} className="text-[#c5f542] relative" />
            <p className="relative text-lg md:text-2xl font-medium leading-snug mt-6">
              Every student&apos;s journey is different. As a digital marketing
              educator in Kerala, my focus is the same for all of them: build
              practical, job-ready skills, gain real confidence, and turn learning
              into actual opportunities. Taught by someone who still does the work
              every day — not theory from a slide deck.
            </p>
            <a
              href="#contact"
              className="group relative inline-flex items-center gap-3 bg-[#c5f542] text-black pl-6 pr-2 py-2 rounded-full font-medium text-sm tracking-wider uppercase hover:bg-white transition-colors w-fit mt-8"
            >
              Join 1:1 Mentoring
              <span className="w-9 h-9 rounded-full bg-black text-white flex items-center justify-center group-hover:rotate-45 transition-transform">
                <ArrowUpRight size={16} />
              </span>
            </a>
          </motion.div>

          {/* Mentee cards */}
          <div className="grid sm:grid-cols-3 gap-4 md:gap-6">
            {MENTEES.map((m, i) => (
              <motion.div
                key={m.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="rounded-3xl bg-white border border-black/5 p-6 flex flex-col justify-between min-h-[200px]"
              >
                <span className="w-12 h-12 rounded-full bg-[#c5f542] text-black flex items-center justify-center font-semibold">
                  {m.name[0]}
                </span>
                <div className="mt-6">
                  <div className="font-semibold text-lg tracking-tight">
                    {m.name}
                  </div>
                  <p className="text-neutral-500 text-sm mt-1 leading-snug">
                    {m.path}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MentorshipV2;
