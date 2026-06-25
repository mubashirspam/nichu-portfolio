"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";
import { FAQ_ITEMS, FAQ_CATEGORIES } from "./faq-data";

const FaqFull: React.FC = () => {
  // Open the very first question by default; key is `${category}-${index}`.
  const [open, setOpen] = useState<string | null>(`${FAQ_CATEGORIES[0]}-0`);

  return (
    <div className="space-y-16 md:space-y-24">
      {FAQ_CATEGORIES.map((category) => {
        const items = FAQ_ITEMS.filter((i) => i.category === category);
        if (items.length === 0) return null;
        return (
          <section key={category} className="grid md:grid-cols-[1fr_1.6fr] gap-8 md:gap-16 items-start">
            <div className="md:sticky md:top-28">
              <div className="flex items-center gap-2 text-xs tracking-[0.3em] uppercase text-neutral-500 mb-3">
                <span className="inline-block w-6 h-px bg-neutral-400" />
                {String(FAQ_CATEGORIES.indexOf(category) + 1).padStart(2, "0")}
              </div>
              <h2 className="text-2xl md:text-4xl font-semibold tracking-tight">
                {category}
              </h2>
              <p className="mt-2 text-neutral-500 text-sm">
                {items.length} question{items.length > 1 ? "s" : ""}
              </p>
            </div>

            <div className="border-t border-black/15">
              {items.map((item, i) => {
                const key = `${category}-${i}`;
                const isOpen = open === key;
                return (
                  <div key={key} className="border-b border-black/15">
                    <button
                      onClick={() => setOpen(isOpen ? null : key)}
                      className="w-full flex items-center justify-between gap-6 py-5 md:py-6 text-left group"
                      aria-expanded={isOpen}
                    >
                      <span className="text-base md:text-xl font-medium tracking-tight">
                        {item.q}
                      </span>
                      <span
                        className={`flex-shrink-0 w-8 h-8 md:w-9 md:h-9 rounded-full border border-black/20 flex items-center justify-center transition-all ${
                          isOpen ? "bg-[#c5f542] rotate-45" : "group-hover:bg-black/5"
                        }`}
                      >
                        <Plus size={17} />
                      </span>
                    </button>
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                          className="overflow-hidden"
                        >
                          <p className="text-neutral-600 text-base leading-relaxed pb-5 md:pb-6 max-w-2xl">
                            {item.a}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </section>
        );
      })}
    </div>
  );
};

export default FaqFull;
