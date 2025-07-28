"use client";

import React from "react";
import { BarChart3, Heart } from "lucide-react";

interface GalleryProps {
  scrollToSection: (sectionId: string) => void;
}

const Gallery: React.FC<GalleryProps> = ({ scrollToSection }) => {
  const galleryItems = [
    {
      type: "result",
      title: "EduTech Startup",
      description: "₹5L spent → ₹1.38Cr revenue",
      metric: "+2660% Growth",
      category: "Performance Marketing",
      colorTheme: "green",
    },
    {
      type: "result",
      title: "Personal Branding Transformation",
      description: "140K followers gained",
      metric: "500% Follower Growth",
      category: "Social Media",
      colorTheme: "blue",
    },
    {
      type: "result",
      title: "Fashion Brand",
      description: "Influencer + Content Marketing",
      metric: "1M+ Reach in 30 Days",
      category: "Moment Marketing",
      colorTheme: "pink",
    },
    {
      type: "result",
      title: "Educational Platform",
      description: "Smart Content Strategy",
      metric: "10K+ Students Enrolled",
      category: "📚Content Marketing",
      colorTheme: "orange",
    },
    {
      type: "result",
      title: "Educational Institution",
      description: "Facebook Ads Optimization",
      metric: "1000+ Quality Leads",
      category: "Paid Advertising",
      colorTheme: "red",
    },
    {
      type: "result",
      title: "Film Industry",
      description: "Viral Campaigns",
      metric: "5M+ Reach in 15 Days",
      category: "Growth Marketing",
      colorTheme: "indigo",
    },
  ];

  return (
    <section id="gallery" className="py-20 px-6 bg-black/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Success <span className="text-purple-400">Gallery</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A showcase of transformations, growth stories, and digital
            victories
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {galleryItems.map((item, index) => {
            // Define color classes based on the colorTheme
            const getColorClasses = (theme: string) => {
              switch (theme) {
                case "green":
                  return {
                    gradient: "from-green-900/40 to-emerald-900/40",
                    border: "border-green-500/20 hover:border-green-400/40",
                    badge: "bg-green-500/20 text-green-300",
                    icon: "text-green-400",
                    hover: "group-hover:text-green-400",
                    resultBg: "from-green-600/20 to-emerald-600/20",
                    resultBorder: "border-green-500/20",
                    resultText: "text-green-300"
                  };
                case "blue":
                  return {
                    gradient: "from-blue-900/40 to-cyan-900/40",
                    border: "border-blue-500/20 hover:border-blue-400/40",
                    badge: "bg-blue-500/20 text-blue-300",
                    icon: "text-blue-400",
                    hover: "group-hover:text-blue-400",
                    resultBg: "from-blue-600/20 to-cyan-600/20",
                    resultBorder: "border-blue-500/20",
                    resultText: "text-blue-300"
                  };
                case "pink":
                  return {
                    gradient: "from-pink-900/40 to-rose-900/40",
                    border: "border-pink-500/20 hover:border-pink-400/40",
                    badge: "bg-pink-500/20 text-pink-300",
                    icon: "text-pink-400",
                    hover: "group-hover:text-pink-400",
                    resultBg: "from-pink-600/20 to-rose-600/20",
                    resultBorder: "border-pink-500/20",
                    resultText: "text-pink-300"
                  };
                case "orange":
                  return {
                    gradient: "from-orange-900/40 to-amber-900/40",
                    border: "border-orange-500/20 hover:border-orange-400/40",
                    badge: "bg-orange-500/20 text-orange-300",
                    icon: "text-orange-400",
                    hover: "group-hover:text-orange-400",
                    resultBg: "from-orange-600/20 to-amber-600/20",
                    resultBorder: "border-orange-500/20",
                    resultText: "text-orange-300"
                  };
                case "red":
                  return {
                    gradient: "from-red-900/40 to-rose-900/40",
                    border: "border-red-500/20 hover:border-red-400/40",
                    badge: "bg-red-500/20 text-red-300",
                    icon: "text-red-400",
                    hover: "group-hover:text-red-400",
                    resultBg: "from-red-600/20 to-rose-600/20",
                    resultBorder: "border-red-500/20",
                    resultText: "text-red-300"
                  };
                case "indigo":
                  return {
                    gradient: "from-indigo-900/40 to-purple-900/40",
                    border: "border-indigo-500/20 hover:border-indigo-400/40",
                    badge: "bg-indigo-500/20 text-indigo-300",
                    icon: "text-indigo-400",
                    hover: "group-hover:text-indigo-400",
                    resultBg: "from-indigo-600/20 to-purple-600/20",
                    resultBorder: "border-indigo-500/20",
                    resultText: "text-indigo-300"
                  };
                default:
                  return {
                    gradient: "from-purple-900/40 to-pink-900/40",
                    border: "border-purple-500/20 hover:border-purple-400/40",
                    badge: "bg-purple-500/20 text-purple-300",
                    icon: "text-purple-400",
                    hover: "group-hover:text-purple-400",
                    resultBg: "from-purple-600/20 to-pink-600/20",
                    resultBorder: "border-purple-500/20",
                    resultText: "text-purple-300"
                  };
              }
            };

            const colors = getColorClasses(item.colorTheme || "purple");

            return (
              <div key={index} className="group cursor-pointer">
                <div className={`bg-gradient-to-br ${colors.gradient} p-6 rounded-2xl border ${colors.border} transition-all duration-300 transform hover:scale-105`}>
                  <div className="flex items-center justify-between mb-4">
                    <span className={`${colors.badge} px-3 py-1 rounded-full text-sm`}>
                      {item.category}
                    </span>
                    <BarChart3 className={colors.icon} size={20} />
                  </div>

                  <h3 className={`text-xl font-bold text-white mb-2 ${colors.hover} transition-colors`}>
                    {item.title}
                  </h3>

                  <p className="text-gray-300 mb-4 text-sm">
                    {item.description}
                  </p>

                  <div className={`bg-gradient-to-r ${colors.resultBg} p-4 rounded-lg border ${colors.resultBorder}`}>
                    <div className="text-2xl font-bold text-white mb-1">
                      {item.metric}
                    </div>
                    <div className={`${colors.resultText} text-sm`}>
                      Result Achieved
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <div className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 p-8 rounded-2xl border border-purple-500/20 inline-block">
            <Heart className="text-purple-400 mx-auto mb-4" size={32} />
            <h3 className="text-2xl font-bold mb-2">Your Success Story</h3>
            <p className="text-gray-300 mb-4">
              Ready to be our next case study?
            </p>
            <button
              onClick={() => scrollToSection("contact")}
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105"
            >
              Let&apos;s Talk
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
