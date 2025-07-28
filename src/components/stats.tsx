"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { brandLogos, partnerLogos } from "./images";
import { TrendingUp, Users, Award, Target } from "lucide-react";

// CountUp component for animating numbers
const CountUp = ({ value }: { value: string }) => {
  const isNumberWithPrefix = value.match(/^[₹$€£¥]?\s*[\d,.]+\+?$/); // Check if it's a number with optional prefix and suffix

  if (!isNumberWithPrefix) {
    return <>{value}</>; // If not a number format we can animate, just return the value
  }

  // Extract the numeric part and any prefix/suffix
  const prefix = value.match(/^[₹$€£¥]/) ? value.match(/^[₹$€£¥]/)![0] : "";
  const numericPart = value.replace(/[^\d,.]/g, "");
  const suffix = value.includes("+") ? "+" : "";

  // For simplicity, we'll just display the final value with a fade-in effect
  return (
    <motion.span
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        duration: 1.5,
        ease: "easeOut",
      }}
    >
      {prefix}
      {numericPart}
      {suffix}
    </motion.span>
  );
};

const Stats: React.FC = () => {
  const stats = [
    { number: "₹10.48 Cr", label: "Revenue Generated", icon: TrendingUp },
    { number: "1,000+", label: "Mentored Marketers", icon: Users },
    { number: "3+", label: "Years Experience", icon: Award },
    { number: "100K+", label: "Target Learners", icon: Target },
  ];

  return (
    <section className="py-16 px-6 bg-gradient-to-b from-black/30 to-purple-900/10">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Impactful <span className="text-purple-400">Results</span>
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="text-center bg-gradient-to-br from-purple-900/30 to-pink-900/30 p-4 rounded-xl border border-purple-500/20"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                ease: "easeOut",
              }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 10px 25px -5px rgba(124, 58, 237, 0.2)",
              }}
            >
              <motion.div
                className="flex justify-center mb-2"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 200,
                  delay: index * 0.1 + 0.3,
                  duration: 0.5,
                }}
              >
                <motion.div
                  animate={{ rotate: [0, 5, 0, -5, 0] }}
                  transition={{
                    duration: 2,
                    ease: "easeInOut",
                    times: [0, 0.25, 0.5, 0.75, 1],
                    repeat: Infinity,
                    repeatDelay: 1,
                  }}
                >
                  <stat.icon className="text-purple-400" size={28} />
                </motion.div>
              </motion.div>
              <motion.div
                className="text-2xl md:text-3xl font-bold text-white mb-1"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: index * 0.1 + 0.5 }}
              >
                <CountUp value={stat.number} />
              </motion.div>
              <motion.div
                className="text-gray-400 text-sm"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: index * 0.1 + 0.7 }}
              >
                {stat.label}
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Brand Partner Logos */}
        <div className="mt-16 max-w-6xl mx-auto">
          <motion.p
            className="text-gray-400 text-sm uppercase tracking-wider mb-5 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Trusted by Brands & Creators
          </motion.p>

          <motion.div
            className="mt-12 overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            {/* First row of logos scrolling left to right */}
            <motion.div
              className="flex space-x-12 mb-8"
              animate={{ x: ["-10%", "-60%"] }}
              transition={{
                repeat: Infinity,
                repeatType: "loop",
                duration: 30,
                ease: "linear",
              }}
            >
              {Array(32)
                .fill(0)
                .map((_, i) => {
                  const logoIndex = i % brandLogos.length;
                  return (
                    <div
                      key={`logo-row1-${i}`}
                      className="flex-shrink-0  flex items-center justify-center"
                    >
                      <Image
                        src={brandLogos[logoIndex]}
                        alt={`Brand partner ${logoIndex + 1}`}
                        width={180}
                        height={90}
                        className="object-contain filter brightness-90 hover:brightness-110 transition-all duration-300"
                      />
                    </div>
                  );
                })}
            </motion.div>

            {/* Second row of logos scrolling right to left */}
            <motion.div
              className="flex space-x-12"
              animate={{ x: ["-60%", "-10%"] }}
              transition={{
                repeat: Infinity,
                repeatType: "loop",
                duration: 35,
                ease: "linear",
              }}
            >
              {Array(12)
                .fill(0)
                .map((_, i) => {
                  const logoIndex = (i + 7) % partnerLogos.length; // Offset to show different logos
                  return (
                    <div
                      key={`logo-row2-${i}`}
                      className="flex-shrink-0 flex items-center justify-center rounded-lg"
                    >
                      <Image
                        src={partnerLogos[logoIndex]}
                        alt={`Brand partner ${logoIndex + 1}`}
                        width={320}
                        height={160}
                        className="object-contain filter brightness-90 hover:brightness-110 transition-all duration-300"
                        style={{ borderRadius: "16px" }}
                      />
                    </div>
                  );
                })}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
