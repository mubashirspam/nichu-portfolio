"use client";

import React from "react";

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 px-6 bg-black/20">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              My <span className="text-purple-400">Journey</span>
            </h2>
            <div className="space-y-6 text-gray-300 leading-relaxed">
              <p>
                Kerala is witnessing a startup revolution. New businesses, fresh ideas, and bold
                entrepreneurs are everywhere.
              </p>
              <p>
                My mission is to empower students, professionals, entrepreneurs, and even
                homemakers with the skill of digital marketing.
              </p>
              <p>
                I dream of teaching 100k people—turning them into confident creators and helping
                them build powerful brands and billion‑dollar businesses through social media literacy.
              </p>
            </div>
          </div>
          <div className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 p-8 rounded-2xl border border-purple-500/20">
            <h3 className="text-2xl font-bold mb-4 text-purple-300">
              How I Do It
            </h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <span className="text-2xl">👥</span>
                <span className="text-gray-300">
                  Gained 150K+ followers in a single month through content marketing
                </span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">🚀</span>
                <span className="text-gray-300">
                  Drove 10M+ impressions
                </span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">💰</span>
                <span className="text-gray-300">
                  Generated ₹6 crore in revenue by spending just ₹5 lakh
                </span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">📊</span>
                <span className="text-gray-300">
                  Managed ₹30+ lakh in ad spend on social media campaigns
                </span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">🎓</span>
                <span className="text-gray-300">
                  Now, I teach these strategies to others
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
