"use client";

import React, { useRef } from "react";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { useScrollRevealText, revealTextStyle } from "./use-scroll-reveal";

type Testimonial = {
  name: string;
  role: string;
  quote: string;
  metric?: string;
  bg: "black" | "white" | "lime" | "sky";
};

const FEATURED: Testimonial = {
  name: "Arun Krishnan",
  role: "Founder, EduLeap Kerala",
  quote:
    "Nizam took our ₹5 lakh ad budget and turned it into ₹1.38 crore in revenue within 90 days. That's not marketing — that's alchemy. He understands both the data and the human psychology behind every click.",
  metric: "2,660% ROAS",
  bg: "black",
};

const ROW1: Testimonial[] = [
  {
    name: "Divya Menon",
    role: "D2C Brand Owner",
    quote: "Instagram went from 2K to 140K followers in a single month. Nizam's content strategy is on another level.",
    bg: "lime",
  },
  {
    name: "Rehan Farooq",
    role: "SaaS Startup Founder",
    quote: "We tried three agencies before Nizam. Within 6 weeks of working with him, our CAC dropped by 60%.",
    bg: "white",
  },
  {
    name: "Sruthi Nair",
    role: "Wellness Creator, 280K Followers",
    quote: "He taught me to think about content like a product. My engagement tripled and brand deals started coming in.",
    bg: "sky",
  },
  {
    name: "Mithun George",
    role: "Film Production, Kerala",
    quote: "Our movie campaign hit 5M reach in 15 days. Nizam knows how to make things go viral the right way.",
    bg: "white",
  },
  {
    name: "Priya Rajendran",
    role: "Fashion Brand, Dubai",
    quote: "Working across time zones, Nizam was always accessible and results were always measurable. Exceptional.",
    bg: "lime",
  },
  {
    name: "Fahad Al-Rashid",
    role: "Restaurant Chain, Gulf",
    quote: "Our footfall doubled after the social media revamp. Nizam understands the Gulf market like a local.",
    bg: "white",
  },
];

const ROW2: Testimonial[] = [
  {
    name: "Anjali Kumar",
    role: "EdTech Platform, 10K Students",
    quote: "Nizam's mentorship program transformed my team. They now run campaigns I used to pay agencies six-figures for.",
    bg: "sky",
  },
  {
    name: "Vivek Pillai",
    role: "Solopreneur & Coach",
    quote: "From zero online presence to ₹15L in course sales in 4 months. Nizam made this possible through pure strategy.",
    bg: "lime",
  },
  {
    name: "Neha Sharma",
    role: "Luxury Wellness Brand",
    quote: "Our Meta ads were burning money for years. One month with Nizam and we finally had profitable campaigns.",
    bg: "white",
  },
  {
    name: "Arjun Dev",
    role: "Marketing Student Mentee",
    quote: "I landed a ₹8 LPA job at 21 because of the real-world skills Nizam taught. No other course comes close.",
    bg: "black",
  },
  {
    name: "Rahul Nambiar",
    role: "Real Estate Developer",
    quote: "Generated 1,000+ qualified leads in 60 days. The ROI on Nizam's strategy was 12x our investment.",
    bg: "lime",
  },
  {
    name: "Zara Hassan",
    role: "Beauty Brand Founder",
    quote: "He rebuilt our entire digital presence in 3 weeks and our conversion rate went from 0.8% to 4.2%.",
    bg: "white",
  },
];

const BG_MAP = {
  black: "bg-black text-white",
  white: "bg-white text-black",
  lime: "bg-[#c5f542] text-black",
  sky: "bg-sky-400 text-black",
};

const QUOTE_COLOR_MAP = {
  black: "text-neutral-400",
  white: "text-neutral-500",
  lime: "text-black/60",
  sky: "text-black/60",
};

const META_COLOR_MAP = {
  black: "text-neutral-300",
  white: "text-neutral-500",
  lime: "text-black/70",
  sky: "text-black/70",
};

const ICON_COLOR_MAP = {
  black: "text-[#c5f542]",
  white: "text-neutral-300",
  lime: "text-black/30",
  sky: "text-black/30",
};

const AVATAR_BG_MAP = {
  black: "bg-[#c5f542] text-black",
  white: "bg-black text-white",
  lime: "bg-black text-white",
  sky: "bg-black text-white",
};

function Card({ t, width = "w-[340px]" }: { t: Testimonial; width?: string }) {
  return (
    <div
      className={`flex-shrink-0 ${width} rounded-3xl p-6 md:p-7 flex flex-col gap-4 ${BG_MAP[t.bg]}`}
    >
      <Quote size={22} className={ICON_COLOR_MAP[t.bg]} />
      <p className={`text-sm md:text-base leading-relaxed flex-1 ${QUOTE_COLOR_MAP[t.bg]}`}>
        &ldquo;{t.quote}&rdquo;
      </p>
      <div className="flex items-center gap-3 mt-auto">
        <span
          className={`w-10 h-10 rounded-full flex items-center justify-center text-xs font-semibold flex-shrink-0 ${AVATAR_BG_MAP[t.bg]}`}
        >
          {t.name.split(" ").map((w) => w[0]).join("").slice(0, 2)}
        </span>
        <div>
          <div className="font-semibold text-sm">{t.name}</div>
          <div className={`text-xs ${META_COLOR_MAP[t.bg]}`}>{t.role}</div>
        </div>
      </div>
    </div>
  );
}

const TestimonialsV2: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headingBg = useScrollRevealText(sectionRef);

  return (
    <section
      id="testimonials"
      ref={sectionRef}
      className="relative bg-[#f5f2ec] py-20 md:py-32 overflow-hidden"
    >
      <div className="max-w-[1400px] mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14 md:mb-20">
          <div>
            <div className="flex items-center gap-2 text-xs tracking-[0.3em] uppercase text-neutral-500 mb-4">
              <span className="inline-block w-6 h-px bg-neutral-400" />
              Social proof
            </div>
            <motion.h2
              className="text-4xl md:text-6xl lg:text-7xl font-semibold tracking-tight leading-[1.03]"
              style={{ backgroundImage: headingBg, ...revealTextStyle }}
            >
              Clients speak,<br />numbers listen.
            </motion.h2>
          </div>
          <p className="max-w-md text-neutral-600 text-base md:text-lg leading-relaxed">
            Real words from real people. Every campaign, every transformation,
            every result — verified and repeatable.
          </p>
        </div>

        {/* Featured testimonial */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative rounded-3xl bg-black text-white p-8 md:p-14 mb-6 overflow-hidden"
        >
          {/* Glow */}
          <div className="absolute -left-24 -bottom-24 w-80 h-80 rounded-full bg-[#c5f542]/15 blur-3xl pointer-events-none" />
          <div className="absolute -right-16 -top-16 w-64 h-64 rounded-full bg-sky-400/10 blur-3xl pointer-events-none" />

          <div className="relative grid md:grid-cols-[1fr_auto] gap-8 items-end">
            <div>
              <Quote size={32} className="text-[#c5f542] mb-6" />
              <p className="text-xl md:text-2xl lg:text-3xl font-medium leading-[1.4] text-white max-w-3xl">
                &ldquo;{FEATURED.quote}&rdquo;
              </p>
            </div>
            <div className="flex flex-col items-start md:items-end gap-4 flex-shrink-0">
              <span className="inline-block bg-[#c5f542] text-black text-sm font-semibold px-5 py-2 rounded-full tracking-wide">
                {FEATURED.metric}
              </span>
              <div className="flex items-center gap-3">
                <span className="w-12 h-12 rounded-full bg-[#c5f542] text-black flex items-center justify-center font-semibold text-sm">
                  {FEATURED.name.split(" ").map((w) => w[0]).join("").slice(0, 2)}
                </span>
                <div>
                  <div className="font-semibold text-white">{FEATURED.name}</div>
                  <div className="text-neutral-400 text-sm">{FEATURED.role}</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Marquee rows — full bleed */}
      <div className="flex flex-col gap-4 mt-2">
        {/* Row 1 — left to right */}
        <div className="overflow-hidden">
          <div className="flex gap-4 marquee-right" style={{ width: "max-content" }}>
            {[...ROW1, ...ROW1].map((t, i) => (
              <Card key={i} t={t} />
            ))}
          </div>
        </div>

        {/* Row 2 — right to left */}
        <div className="overflow-hidden">
          <div className="flex gap-4 marquee-left" style={{ width: "max-content" }}>
            {[...ROW2, ...ROW2].map((t, i) => (
              <Card key={i} t={t} />
            ))}
          </div>
        </div>
      </div>

      {/* Bottom fade masks */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 md:w-40 bg-gradient-to-r from-[#f5f2ec] to-transparent z-10" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 md:w-40 bg-gradient-to-l from-[#f5f2ec] to-transparent z-10" />
    </section>
  );
};

export default TestimonialsV2;
