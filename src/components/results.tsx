"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Star, Users, Target } from "lucide-react";

const Results: React.FC = () => {
  const [count, setCount] = useState(1);
  const [hasAnimated, setHasAnimated] = useState(false);
  const targetValue = 10.48;

  useEffect(() => {
    if (!hasAnimated) return;

    const duration = 3000; // 3 seconds
    const steps = 60; // 60 steps for smooth animation
    const increment = (targetValue - 1) / steps;
    const stepDuration = duration / steps;

    let currentStep = 0;
    const timer = setInterval(() => {
      currentStep++;
      const newValue = 1 + increment * currentStep;

      if (currentStep >= steps) {
        setCount(targetValue);
        clearInterval(timer);
      } else {
        setCount(newValue);
      }
    }, stepDuration);

    return () => clearInterval(timer);
  }, [hasAnimated, targetValue]);

  const handleAnimationStart = () => {
    if (!hasAnimated) {
      setHasAnimated(true);
    }
  };

  return (
    <section id="results" className="py-20 px-6 bg-black/20">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Real <span className="text-purple-400">Results</span>
        </h2>
        <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
          We don&apos;t just run ads — we build growth that matters.
        </p>

        <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 p-12 rounded-3xl border border-purple-500/20 mb-12">
          <motion.div
            className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            onAnimationComplete={handleAnimationStart}
          >
            ₹30 Lakhs Spent → ₹{count.toFixed(2)} Crores Earned
          </motion.div>
          <motion.p
            className="text-xl text-gray-300 mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            viewport={{ once: true }}
          >
            All through smart performance marketing and proven digital
            strategies that turn every rupee into real revenue.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-purple-900/30 p-8 rounded-2xl border border-purple-500/20">
            <Star className="text-purple-400 mx-auto mb-4" size={32} />
            <h3 className="text-2xl font-bold mb-2">Proven Track Record</h3>
            <p className="text-gray-300">
              4+ years of delivering consistent, measurable growth across
              diverse industries.
            </p>
          </div>
          <div className="bg-purple-900/30 p-8 rounded-2xl border border-purple-500/20">
            <Users className="text-purple-400 mx-auto mb-4" size={32} />
            <h3 className="text-2xl font-bold mb-2">🤝 Mentor Network</h3>
            <p className="text-gray-300">
              Trained and guided 1,000+ aspiring marketers to launch and scale
              their careers.
            </p>
          </div>
          <div className="bg-purple-900/30 p-8 rounded-2xl border border-purple-500/20">
            <Target className="text-purple-400 mx-auto mb-4" size={32} />
            <h3 className="text-2xl font-bold mb-2">🚀 Mission Driven</h3>
            <p className="text-gray-300">
              Focused on ethical marketing that creates real impact and serves
              real people.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Results;
