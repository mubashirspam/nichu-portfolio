"use client";

import React, { useEffect, useRef, useState } from "react";
import {
  motion,
  useInView,
  useScroll,
  useTransform,
  useMotionTemplate,
} from "framer-motion";
import { TrendingUp, Users, Eye, GraduationCap, ArrowUpRight } from "lucide-react";

type Stat = {
  value: number;
  suffix?: string;
  prefix?: string;
  decimals?: number;
  label: string;
  sub: string;
  Icon: React.ComponentType<{ size?: number; className?: string }>;
};

const FEATURED: Stat = {
  value: 10.48,
  prefix: "₹",
  suffix: " Cr",
  decimals: 2,
  label: "Revenue generated",
  sub: "From just ₹30L in ad spend across performance campaigns.",
  Icon: TrendingUp,
};

const OTHERS: Stat[] = [
  {
    value: 150,
    suffix: "K+",
    label: "Followers / month",
    sub: "Organic growth via content marketing",
    Icon: Users,
  },
  {
    value: 10,
    suffix: "M+",
    label: "Impressions",
    sub: "Paid + organic across platforms",
    Icon: Eye,
  },
  {
    value: 1000,
    suffix: "+",
    label: "Marketers mentored",
    sub: "From students to solopreneurs",
    Icon: GraduationCap,
  },
];

const Counter: React.FC<{ stat: Stat; inView: boolean; delay?: number }> = ({
  stat,
  inView,
  delay = 0,
}) => {
  const [v, setV] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const dur = 1800;
    const steps = 50;
    let i = 0;
    const id = setInterval(() => {
      i++;
      if (i >= steps) {
        setV(stat.value);
        clearInterval(id);
      } else {
        setV((stat.value / steps) * i);
      }
    }, dur / steps + delay / steps);
    return () => clearInterval(id);
  }, [inView, stat.value, delay]);

  const display =
    stat.decimals !== undefined
      ? v.toFixed(stat.decimals)
      : Math.floor(v).toLocaleString();
  return (
    <span>
      {stat.prefix}
      {display}
      {stat.suffix}
    </span>
  );
};

const StatsV2: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"],
  });
  const gradientPct = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const headingBg = useMotionTemplate`linear-gradient(to right, #000 ${gradientPct}%, #a3a3a3 ${gradientPct}%)`;

  return (
    <section ref={ref} className="relative bg-[#f5f2ec] py-20 md:py-28 px-4 md:px-6">
      <div className="max-w-[1400px] mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12 md:mb-16">
          <div>
            <div className="flex items-center gap-2 text-xs tracking-[0.3em] uppercase text-neutral-500 mb-4">
              <span className="inline-block w-6 h-px bg-neutral-400" />
              By the numbers
            </div>
            <motion.h2
              className="text-4xl md:text-6xl lg:text-7xl font-semibold tracking-tight leading-[1.03]"
              style={{
                backgroundImage: headingBg,
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                WebkitTextFillColor: "transparent",
                color: "transparent",
              }}
            >
              Proof, not promises.<br />
              Real campaigns. Real outcomes.
            </motion.h2>
          </div>
          
        </div>

        {/* Asymmetric stat grid */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 md:gap-6">
          {/* Featured — spans 3 cols */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="md:col-span-3 relative rounded-3xl bg-black text-white p-8 md:p-12 overflow-hidden min-h-[320px] flex flex-col justify-between"
          >
            {/* Decorative grid pattern */}
            <div
              className="absolute inset-0 opacity-[0.07]"
              style={{
                backgroundImage:
                  "linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)",
                backgroundSize: "40px 40px",
              }}
            />
            {/* Lime glow */}
            <div className="absolute -right-24 -top-24 w-80 h-80 rounded-full bg-[#c5f542]/20 blur-3xl" />

            <div className="relative flex items-start justify-between">
              <div className="flex items-center gap-2 text-[11px] tracking-[0.3em] uppercase text-neutral-400">
                <span className="w-2 h-2 rounded-full bg-[#c5f542] animate-pulse" />
                Headline stat
              </div>
              <FEATURED.Icon size={20} className="text-[#c5f542]" />
            </div>

            <div className="relative">
              <div className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-semibold tracking-tight leading-none">
                <Counter stat={FEATURED} inView={inView} />
              </div>
              <div className="mt-5 flex items-end justify-between gap-4 flex-wrap">
                <div>
                  <div className="text-white font-medium">{FEATURED.label}</div>
                  <p className="text-neutral-400 text-sm max-w-sm mt-1">
                    {FEATURED.sub}
                  </p>
                </div>
                <a
                  href="#results"
                  className="group inline-flex items-center gap-2 text-[#c5f542] text-sm tracking-wider uppercase"
                >
                  See breakdown
                  <span className="w-8 h-8 rounded-full bg-[#c5f542] text-black flex items-center justify-center group-hover:rotate-45 transition-transform">
                    <ArrowUpRight size={14} />
                  </span>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Supporting stats — right column stacked */}
          <div className="md:col-span-2 grid grid-cols-1 gap-4 md:gap-6">
            {OTHERS.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.15 + i * 0.1 }}
                className={`relative rounded-3xl p-6 md:p-7 overflow-hidden ${
                  i === 0
                    ? "bg-[#c5f542]"
                    : i === 1
                    ? "bg-sky-400"
                    : "bg-white border border-black/5"
                }`}
              >
                <div className="flex items-start justify-between mb-4">
                  <s.Icon size={20} className="text-black" />
                  <span className="text-[10px] tracking-[0.3em] uppercase text-black/60">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <div className="text-4xl md:text-5xl font-semibold tracking-tight text-black leading-none">
                  <Counter stat={s} inView={inView} delay={i * 100} />
                </div>
                <div className="mt-3">
                  <div className="text-black font-medium text-sm">{s.label}</div>
                  <p className="text-black/60 text-xs mt-0.5">{s.sub}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Trust strip — one thin line of text, no logos */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-10 md:mt-14 flex items-center gap-3 text-neutral-500 text-xs tracking-[0.3em] uppercase overflow-hidden"
        >
          <span className="inline-block w-10 h-px bg-neutral-400 flex-shrink-0" />
          <div className="flex items-center gap-6 whitespace-nowrap overflow-x-auto no-scrollbar">
            <span>Kerala → World</span>
            <span className="text-neutral-300">•</span>
            <span>4+ years</span>
            <span className="text-neutral-300">•</span>
            <span>500+ brands</span>
            <span className="text-neutral-300">•</span>
            <span>Bootstrapped</span>
            <span className="text-neutral-300">•</span>
            <span>Remote-first</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default StatsV2;
