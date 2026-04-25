"use client";

import { RefObject } from "react";
import { useScroll, useTransform, useMotionTemplate } from "framer-motion";

export function useScrollRevealText(
  ref: RefObject<HTMLElement | null>,
  dark = false
) {
  const { scrollYProgress } = useScroll({
    target: ref as RefObject<HTMLElement>,
    offset: ["start end", "center center"],
  });
  const pct = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const from = dark ? "#ffffff" : "#000000";
  const to = dark ? "rgba(255,255,255,0.35)" : "#a3a3a3";
  return useMotionTemplate`linear-gradient(to right, ${from} ${pct}%, ${to} ${pct}%)`;
}

export const revealTextStyle = {
  WebkitBackgroundClip: "text" as const,
  backgroundClip: "text" as const,
  WebkitTextFillColor: "transparent" as const,
  color: "transparent" as const,
};
