"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

const LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Results", href: "#results" },
  { label: "Contact", href: "#contact" },
];

const NavigationV2: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const hero = document.getElementById("home");
      if (!hero) return;
      setScrolled(window.scrollY > hero.offsetTop + hero.offsetHeight * 0.1);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.div
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed left-0 right-0 z-50 px-3 md:px-6 transition-all duration-300 ${scrolled ? "top-5" : "top-5 md:top-10"}`}
    >
      <nav className="w-full max-w-4xl mx-auto bg-white backdrop-blur-xl border border-black/5 rounded-full pl-4 pr-2 py-2 flex items-center justify-between gap-6 shadow-lg shadow-black/5">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2 whitespace-nowrap">
          <div className="w-7 h-7 rounded-full bg-black flex items-center justify-center">
            <span className="text-[#c5f542] text-xs font-bold">N</span>
          </div>
          <span className="font-semibold text-black tracking-tight text-sm">
            marketing.nizam
          </span>
        </a>

        {/* Desktop links — center */}
        <div className="hidden md:flex items-center gap-1">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="px-3 py-1.5 text-sm text-neutral-700 hover:text-black rounded-full hover:bg-black/5 transition-colors"
            >
              {l.label}
            </a>
          ))}
        </div>

        {/* Right: Let's Talk / mobile toggle */}
        <div className="flex items-center gap-2">
          <a
            href="#contact"
            className="hidden md:inline-flex items-center gap-2 bg-black text-white text-sm px-4 py-2 rounded-full hover:bg-neutral-800 transition-colors"
          >
            Let&apos;s Talk
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#c5f542]" />
          </a>

          <button
            onClick={() => setOpen((v) => !v)}
            className="md:hidden w-9 h-9 flex items-center justify-center rounded-full bg-black text-white"
            aria-label="Toggle menu"
          >
            {open ? <X size={16} /> : <Menu size={16} />}
          </button>
        </div>
      </nav>

      {/* Mobile dropdown */}
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden absolute top-16 left-3 right-3 bg-white/95 backdrop-blur-xl border border-black/5 rounded-2xl px-4 py-3 flex flex-col gap-1 shadow-lg shadow-black/5"
        >
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="px-3 py-2 text-sm text-neutral-800 hover:bg-black/5 rounded-lg transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-2 inline-flex items-center justify-center gap-2 bg-black text-white text-sm px-4 py-2.5 rounded-full"
          >
            Let&apos;s Talk
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#c5f542]" />
          </a>
        </motion.div>
      )}
    </motion.div>
  );
};

export default NavigationV2;
