"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { useScrollRevealText, revealTextStyle } from "./use-scroll-reveal";
import { Star, Users, Target, ArrowUpRight } from "lucide-react";

const PILLARS = [
  {
    Icon: Star,
    title: "Proven track record",
    desc: "4+ years of consistent, measurable growth across diverse industries.",
  },
  {
    Icon: Users,
    title: "Mentor network",
    desc: "Trained 1,000+ aspiring marketers to launch and scale their careers.",
  },
  {
    Icon: Target,
    title: "Mission-driven",
    desc: "Ethical marketing that creates real impact and serves real people.",
  },
];

const ResultsV2: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const headingBg = useScrollRevealText(ref as React.RefObject<HTMLElement | null>);
  const [count, setCount] = useState(0);
  const target = 10.48;

  useEffect(() => {
    if (!inView) return;
    const steps = 60;
    const dur = 2200;
    let i = 0;
    const id = setInterval(() => {
      i++;
      if (i >= steps) {
        setCount(target);
        clearInterval(id);
      } else {
        setCount((target / steps) * i);
      }
    }, dur / steps);
    return () => clearInterval(id);
  }, [inView]);

  return (
    <section
      id="results"
      ref={ref}
      className="relative bg-[#f5f2ec] py-20 md:py-32 px-4 md:px-6"
    >
      <div className="max-w-[1400px] mx-auto">
        {/* Kicker */}
        <div className="flex items-center gap-2 text-xs tracking-[0.3em] uppercase text-neutral-500 mb-5">
          <span className="inline-block w-6 h-px bg-neutral-400" />
          Real results
        </div>

        <div className="grid md:grid-cols-[1.3fr_1fr] gap-10 md:gap-16 items-end mb-14 md:mb-20">
          <motion.h2
            className="text-4xl md:text-6xl lg:text-7xl font-semibold tracking-tight leading-[1.03]"
            style={{ backgroundImage: headingBg, ...revealTextStyle }}
          >
            We don&apos;t run ads —<br />
            we build growth.
          </motion.h2>
         
        </div>

        {/* Hero counter card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative rounded-3xl bg-black text-white p-8 md:p-14 overflow-hidden"
        >
          {/* Decorative lime blob */}
          <div className="absolute -right-20 -bottom-20 w-80 h-80 rounded-full bg-[#c5f542]/20 blur-3xl" />

          <div className="relative grid md:grid-cols-2 gap-8 items-end">
            <div>
              <p className="text-neutral-400 text-sm tracking-widest uppercase mb-4">
                Spend → Revenue
              </p>
              <div className="flex items-baseline gap-3 md:gap-5">
                <span className="text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tight">
                  ₹30L
                </span>
                <span className="text-neutral-500 text-2xl md:text-4xl">→</span>
                <span className="text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tight text-[#c5f542]">
                  ₹{count.toFixed(2)}Cr
                </span>
              </div>
              <p className="mt-5 text-neutral-300 max-w-md leading-relaxed">
                Performance marketing that turns every rupee into measurable
                revenue across e-commerce, education, and D2C brands.
              </p>
            </div>

            <div className="flex md:justify-end">
              <a
                href="#contact"
                className="group inline-flex items-center gap-3 bg-[#c5f542] text-black pl-6 pr-2 py-2 rounded-full font-medium text-sm tracking-wider uppercase hover:bg-white transition-colors"
              >
                Run my numbers
                <span className="w-9 h-9 rounded-full bg-black text-white flex items-center justify-center group-hover:rotate-45 transition-transform">
                  <ArrowUpRight size={16} />
                </span>
              </a>
            </div>
          </div>
        </motion.div>

        {/* Pillar cards */}
        <div className="grid md:grid-cols-3 gap-4 md:gap-6 mt-6">
          {PILLARS.map(({ Icon, title, desc }, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="rounded-3xl bg-white border border-black/5 p-6 md:p-8 hover:border-black/20 transition-colors"
            >
              <div className="w-11 h-11 rounded-full bg-[#c5f542] flex items-center justify-center mb-5">
                <Icon size={18} className="text-black" />
              </div>
              <h3 className="text-xl md:text-2xl font-semibold tracking-tight mb-2">
                {title}
              </h3>
              <p className="text-neutral-600 text-sm md:text-base leading-relaxed">
                {desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResultsV2;
