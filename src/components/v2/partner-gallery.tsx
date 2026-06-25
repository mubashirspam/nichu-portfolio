"use client";

import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import { partnerLogos } from "../images";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { useScrollRevealText, revealTextStyle } from "./use-scroll-reveal";

// Tile config — size × rotation × optional accent chip
type TileConf = {
  span: string; // grid span classes
  rotate: number;
  accent?: "lime" | "sky" | "black" | "white";
  label?: string;
};

const TILES: TileConf[] = [
  { span: "col-span-2 row-span-2", rotate: -2 },
  { span: "col-span-1 row-span-1", rotate: 3, accent: "lime", label: "Top spender" },
  { span: "col-span-1 row-span-1", rotate: -1 },
  { span: "col-span-1 row-span-1", rotate: 2 },
  { span: "col-span-1 row-span-2", rotate: -3 },
  { span: "col-span-1 row-span-1", rotate: 1, accent: "sky" },
  { span: "col-span-1 row-span-1", rotate: -2 },
  { span: "col-span-2 row-span-1", rotate: 2 },
  { span: "col-span-1 row-span-1", rotate: -1, accent: "black", label: "Long term" },
  { span: "col-span-1 row-span-1", rotate: 3 },
  { span: "col-span-1 row-span-1", rotate: -2 },
  { span: "col-span-1 row-span-2", rotate: 2 },
];

const accentBg: Record<NonNullable<TileConf["accent"]>, string> = {
  lime: "bg-[#c5f542]",
  sky: "bg-sky-400",
  black: "bg-black",
  white: "bg-white",
};

const accentText: Record<NonNullable<TileConf["accent"]>, string> = {
  lime: "text-black",
  sky: "text-black",
  black: "text-white",
  white: "text-black",
};

const PARTNERS_PER_PAGE = TILES.length;

const PartnerGalleryV2: React.FC = () => {
  const [page, setPage] = useState(0);
  const [spotlight, setSpotlight] = useState(0);
  const contentRef = useRef<HTMLDivElement>(null);
  const headingBg = useScrollRevealText(contentRef);

  const pages = Math.ceil(partnerLogos.length / PARTNERS_PER_PAGE);
  const start = page * PARTNERS_PER_PAGE;
  const items = partnerLogos.slice(start, start + PARTNERS_PER_PAGE);

  return (
    <section id="partners" className="relative bg-[#f5f2ec] overflow-hidden">
      <div ref={contentRef} className="relative py-20 md:py-32 px-4 md:px-6">
        {/* Decorative grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(to right, #000 1px, transparent 1px), linear-gradient(to bottom, #000 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        <div className="max-w-[1400px] mx-auto relative">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12 md:mb-16">
            <div>
              <div className="flex items-center gap-2 text-xs tracking-[0.3em] uppercase text-neutral-500 mb-4">
                <span className="inline-block w-6 h-px bg-neutral-400" />
                Partner wall
              </div>
              <motion.h2
                className="text-4xl md:text-6xl lg:text-7xl font-semibold tracking-tight leading-[1.03]"
                style={{ backgroundImage: headingBg, ...revealTextStyle }}
              >
                Trusted by 100+ brands<br />
                across India &amp; the UAE.
              </motion.h2>
              <p className="mt-5 text-neutral-600 text-base md:text-lg max-w-md leading-relaxed">
                One playbook — strategy, not luck — behind every logo.
              </p>
            </div>
            <div className="max-w-md">
              {/* Pagination pills */}
              {pages > 1 && (
                <div className="flex items-center gap-2">
                  {Array.from({ length: pages }).map((_, i) => (
                    <button
                      key={i}
                      onClick={() => {
                        setPage(i);
                        setSpotlight(0);
                      }}
                      className={`h-2 rounded-full transition-all ${
                        i === page
                          ? "w-10 bg-black"
                          : "w-2 bg-black/25 hover:bg-black/50"
                      }`}
                      aria-label={`Page ${i + 1}`}
                    />
                  ))}
                  <span className="ml-3 text-xs text-neutral-500 tracking-widest uppercase">
                    {page + 1}/{pages}
                  </span>
                </div>
              )}
            </div>
          </div>

          {/* Split layout: mosaic left, spotlight right */}
          <div className="grid lg:grid-cols-[1.6fr_1fr] gap-6 md:gap-8">
            {/* Mosaic */}
            <motion.div
              key={page}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-4 auto-rows-[110px] md:auto-rows-[140px] gap-3 md:gap-4"
            >
              {items.map((logo, i) => {
                const conf = TILES[i % TILES.length];
                const isAccent = !!conf.accent;
                const bg = isAccent
                  ? accentBg[conf.accent!]
                  : "bg-white border border-black/5";
                return (
                  <motion.button
                    key={`${page}-${i}`}
                    onMouseEnter={() => setSpotlight(i)}
                    onFocus={() => setSpotlight(i)}
                    initial={{ opacity: 0, y: 20, rotate: conf.rotate }}
                    animate={{ opacity: 1, y: 0, rotate: conf.rotate }}
                    whileHover={{
                      rotate: 0,
                      y: -6,
                      scale: 1.04,
                      transition: { duration: 0.3 },
                    }}
                    transition={{ duration: 0.5, delay: i * 0.04 }}
                    className={`${conf.span} relative rounded-2xl overflow-hidden ${bg} hover:shadow-xl transition-shadow group cursor-pointer`}
                  >
                    {/* Logo */}
                    <div className="absolute inset-0 p-3 md:p-4 flex items-center justify-center">
                      <div className="relative w-full h-full">
                        <Image
                          src={logo as StaticImageData}
                          alt={`Brand logo of a client partnered with Nizamudheen KC for performance marketing`}
                          fill
                          className={`object-contain ${
                            conf.accent === "black" ? "invert" : ""
                          }`}
                          sizes="(max-width: 768px) 25vw, 15vw"
                        />
                      </div>
                    </div>

                    {/* Accent label badge */}
                    {conf.label && (
                      <div
                        className={`absolute top-2 left-2 text-[9px] tracking-[0.2em] uppercase px-2 py-0.5 rounded-full flex items-center gap-1 ${accentText[conf.accent!]} bg-black/10 backdrop-blur-sm`}
                      >
                        <Sparkles size={8} />
                        {conf.label}
                      </div>
                    )}

                    {/* Hover index */}
                    <div
                      className={`absolute bottom-2 right-2 text-[10px] tracking-[0.2em] uppercase opacity-0 group-hover:opacity-100 transition-opacity ${
                        isAccent ? accentText[conf.accent!] : "text-neutral-400"
                      }`}
                    >
                      {String(start + i + 1).padStart(2, "0")}
                    </div>
                  </motion.button>
                );
              })}
            </motion.div>

            {/* Spotlight card */}
            <div className="sticky top-24 self-start">
              <motion.div
                key={`spot-${page}-${spotlight}`}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                className="rounded-3xl bg-white border border-black/5 p-6 md:p-8 shadow-sm"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-2 text-[11px] tracking-[0.3em] uppercase text-neutral-500">
                    <span className="w-2 h-2 rounded-full bg-[#c5f542] animate-pulse" />
                    In spotlight
                  </div>
                  <span className="text-xs tracking-widest text-neutral-400">
                    #{String(start + spotlight + 1).padStart(2, "0")}
                  </span>
                </div>

                <div className="relative w-full aspect-[4/3] rounded-2xl bg-neutral-100 p-8 flex items-center justify-center mb-6">
                  {items[spotlight] && (
                    <div className="relative w-full h-full">
                      <Image
                        src={items[spotlight] as StaticImageData}
                        alt={`Spotlighted client brand logo — partner #${start + spotlight + 1} of Nizamudheen KC`}
                        fill
                        className="object-contain"
                        sizes="30vw"
                      />
                    </div>
                  )}
                </div>

                <div className="space-y-3">
                  <h3 className="text-xl md:text-2xl font-semibold tracking-tight">
                    Partner #{start + spotlight + 1}
                  </h3>
                  <p className="text-neutral-600 text-sm leading-relaxed">
                    Hover any tile in the wall to spotlight it here. Tilted tiles
                    straighten on hover — click one to dive deeper.
                  </p>
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 text-sm text-black hover:text-neutral-700 mt-2"
                  >
                    Become a partner
                    <ArrowUpRight size={14} />
                  </a>
                </div>
              </motion.div>

              {/* Summary chip */}
              <div className="mt-4 rounded-3xl bg-black text-white p-5 flex items-center justify-between">
                <div>
                  <div className="text-[11px] tracking-[0.3em] uppercase text-neutral-400">
                    Total
                  </div>
                  <div className="text-3xl font-semibold tracking-tight">
                    100+
                  </div>
                </div>
                <span className="text-xs text-neutral-400 max-w-[50%] text-right leading-snug">
                  Trusted partners across India &amp; the UAE
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnerGalleryV2;
