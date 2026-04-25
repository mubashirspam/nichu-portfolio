"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Instagram, Linkedin, Facebook, MessageCircle, Twitter } from "lucide-react";

const LINK_COLS = [
  {
    label: "Work",
    links: [
      { label: "Services", href: "#services" },
      { label: "Case studies", href: "#gallery" },
      { label: "Results", href: "#results" },
      { label: "Partners", href: "#partners" },
    ],
  },
  {
    label: "Company",
    links: [
      { label: "About", href: "#about" },
      { label: "Contact", href: "#contact" },
      { label: "Store", href: "https://app.marketingnizam.com" },
    ],
  },
  {
    label: "Elsewhere",
    links: [
      { label: "Instagram", href: "https://www.instagram.com/marketing.nizam/?hl=en" },
      { label: "LinkedIn", href: "https://www.linkedin.com/in/nizamudheen-kc/" },
      { label: "Twitter / X", href: "https://x.com/nizam_5359" },
      { label: "Threads", href: "https://www.threads.com/@nizam_.udheen" },
    ],
  },
];

const SOCIALS = [
  { href: "https://www.instagram.com/marketing.nizam/?hl=en", Icon: Instagram },
  { href: "https://www.linkedin.com/in/nizamudheen-kc/", Icon: Linkedin },
  { href: "https://x.com/nizam_5359", Icon: Twitter },
  { href: "https://www.facebook.com/profile.php?id=61578681628133", Icon: Facebook },
  { href: "https://www.threads.com/@nizam_.udheen", Icon: MessageCircle },
];

const FooterV2: React.FC = () => {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSent(true);
    setEmail("");
    setTimeout(() => setSent(false), 3000);
  };

  return (
    <footer className="relative bg-black text-white mt-0 pt-16 pb-10 px-4 md:px-6 rounded-t-[28px] md:rounded-t-[40px] -mt-6">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid md:grid-cols-[1.2fr_2fr] gap-12 md:gap-16 pb-14 md:pb-20 border-b border-white/10">
          {/* Brand + newsletter */}
          <div>
            <div className="flex items-center gap-2.5 mb-6">
              <div className="w-9 h-9 rounded-full bg-[#c5f542] flex items-center justify-center">
                <span className="text-black text-sm font-bold">N</span>
              </div>
              <span className="font-semibold tracking-tight text-lg">
                marketing.nizam
              </span>
            </div>
            <p className="text-neutral-400 text-sm md:text-base leading-relaxed max-w-sm mb-8">
              Nomad marketer from Kerala. Building brands that scale from a
              laptop — with strategy, not luck.
            </p>

            <p className="text-neutral-500 text-xs tracking-[0.25em] uppercase mb-3">
              Subscribe
            </p>
            <form
              onSubmit={handleSubmit}
              className="flex items-center gap-1 bg-white/5 border border-white/10 rounded-full p-1.5 max-w-md"
            >
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 bg-transparent px-4 py-2 text-sm placeholder:text-neutral-500 focus:outline-none text-white"
              />
              <button
                type="submit"
                className="group inline-flex items-center gap-2 bg-[#c5f542] text-black text-sm font-medium pl-4 pr-1 py-1 rounded-full hover:bg-white transition-colors"
              >
                {sent ? "Sent" : "Submit"}
                <span className="w-7 h-7 rounded-full bg-black text-white flex items-center justify-center group-hover:rotate-45 transition-transform">
                  <ArrowUpRight size={14} />
                </span>
              </button>
            </form>
          </div>

          {/* Link columns */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            {LINK_COLS.map((col) => (
              <div key={col.label}>
                <p className="text-neutral-500 text-xs tracking-[0.25em] uppercase mb-5">
                  {col.label}
                </p>
                <ul className="space-y-3">
                  {col.links.map((l) => (
                    <li key={l.label}>
                      <a
                        href={l.href}
                        target={l.href.startsWith("http") ? "_blank" : undefined}
                        rel={l.href.startsWith("http") ? "noopener noreferrer" : undefined}
                        className="text-white/90 hover:text-[#c5f542] text-sm transition-colors inline-flex items-center gap-1.5 group"
                      >
                        {l.label}
                        {l.href.startsWith("http") && (
                          <ArrowUpRight
                            size={12}
                            className="opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all"
                          />
                        )}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pt-8">
          <p className="text-neutral-500 text-xs md:text-sm">
            © {new Date().getFullYear()} marketing.nizam. Built with love in Kerala.
          </p>
          <div className="flex items-center gap-4">
            {SOCIALS.map(({ href, Icon }, i) => (
              <a
                key={i}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full border border-white/15 flex items-center justify-center text-white/70 hover:text-black hover:bg-[#c5f542] hover:border-[#c5f542] transition-all"
              >
                <Icon size={14} />
              </a>
            ))}
          </div>
        </div>

        {/* Big wordmark */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="mt-16 md:mt-24 text-center select-none"
        >
          <h3 className="font-semibold tracking-tighter leading-none text-[clamp(3.5rem,16vw,16rem)] bg-gradient-to-b from-white/20 to-white/0 bg-clip-text text-transparent">
            NIZAM
          </h3>
        </motion.div>
      </div>
    </footer>
  );
};

export default FooterV2;
