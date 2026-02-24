"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle, Sparkles } from "lucide-react";

const ProductCTA: React.FC = () => {
  return (
    <section className="py-20 px-6 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 via-pink-900/20 to-purple-900/20"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-3xl"></div>

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="bg-gradient-to-br from-purple-900/40 to-pink-900/40 border border-purple-500/30 rounded-3xl p-8 md:p-12 text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/20 rounded-full text-purple-300 text-sm mb-6">
            <Sparkles size={16} />
            New Digital Product
          </div>

          <h2 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">
            The Ultimate{" "}
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Habit Tracker
            </span>
          </h2>

          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-8 leading-relaxed">
            Build powerful daily habits that transform your life. Designed by Nizamudheen KC
            to help you stay consistent, track progress, and achieve your goals.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-10">
            {[
              "Daily habit tracking",
              "Progress analytics",
              "Goal setting framework",
              "Printable templates",
            ].map((feature, idx) => (
              <div
                key={idx}
                className="flex items-center gap-2 text-gray-300 text-sm md:text-base"
              >
                <CheckCircle size={16} className="text-purple-400 flex-shrink-0" />
                {feature}
              </div>
            ))}
          </div>

          <a
            href="https://app.marketingnizam.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 px-8 py-4 rounded-full font-semibold text-white transition-all duration-300 transform hover:scale-105 shadow-lg shadow-purple-500/25"
          >
            Get It Now <ArrowRight size={20} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ProductCTA;
