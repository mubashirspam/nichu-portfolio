"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const BG_IMAGE =
  "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=2400&q=80&auto=format&fit=crop";

const PhilosophyV2: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["-12%", "12%"]);
  const bgScale = useTransform(scrollYProgress, [0, 1], [1.1, 1.22]);

  return (
    <section
      id="philosophy"
      ref={ref}
      className="relative bg-[#f5f2ec] pt-6 pb-20 md:pb-28 px-4 md:px-6"
    >
      <div className="max-w-[1400px] mx-auto rounded-[28px] md:rounded-[40px] overflow-hidden relative min-h-[560px] md:min-h-[640px]">
        {/* Parallax bg */}
        <motion.div style={{ y: bgY, scale: bgScale }} className="absolute inset-0 -inset-y-12">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${BG_IMAGE})` }}
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/40 to-black/30" />

        <div className="relative p-6 md:p-14 lg:p-20 min-h-[560px] md:min-h-[640px] flex flex-col justify-end">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-2 text-xs tracking-[0.3em] uppercase text-white/70 mb-6"
          >
            <span className="inline-block w-6 h-px bg-white/50" />
            The Nomad way
          </motion.div>

          <motion.h3
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.05 }}
            className="font-heading italic text-white tracking-tight leading-[1.05] text-[clamp(2rem,5vw,4.5rem)] max-w-4xl"
          >
            Marketing should be felt, not just run from a desk.
          </motion.h3>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="mt-6 text-white/85 text-base md:text-lg max-w-2xl leading-relaxed"
          >
            I built my work around travel — because the best marketing comes from
            seeing how real people live, shop and decide. And I&apos;m on a
            mission to change Kerala&apos;s work culture: proving you can build a
            global marketing career from a small town, on your own terms, without
            burning out in a cubicle.
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default PhilosophyV2;
