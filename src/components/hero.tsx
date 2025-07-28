"use client";

import React, { useState, useEffect, Suspense } from "react";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import Image from "next/image";
import { heroImage } from "./images";
import {
  ArrowRight,
  Instagram,
  Linkedin,
  X,
  Facebook,
  MessageCircle,
} from "lucide-react";

// Texts for typing animation
const TYPING_TEXTS = [
  "I am a Marketing Expert",
  "I am a Digital Educator",
  "I am an Entrepreneur",
];

// Typing animation component for cycling through text
const TypingAnimation = () => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(50);

  useEffect(() => {
    const handleTyping = () => {
      const current = TYPING_TEXTS[currentTextIndex];

      if (isDeleting) {
        // Deleting text
        setCurrentText(current.substring(0, currentText.length - 1));
        setTypingSpeed(25); // Faster when deleting
      } else {
        // Typing text
        setCurrentText(current.substring(0, currentText.length + 1));
        setTypingSpeed(50); // Normal typing speed
      }

      // If text is fully typed
      if (!isDeleting && currentText === current) {
        // Pause before deleting
        setTimeout(() => setIsDeleting(true), 2000);
      }
      // If text is fully deleted
      else if (isDeleting && currentText === "") {
        setIsDeleting(false);
        // Move to next text
        setCurrentTextIndex((prev) => (prev + 1) % TYPING_TEXTS.length);
        setTypingSpeed(500); // Pause before starting new text
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentTextIndex, typingSpeed]);

  return (
    <span className="inline-flex items-center">
      <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent font-semibold">
        {currentText}
      </span>
      <span className="ml-1 w-0.5 h-6 bg-purple-400 animate-pulse inline-block"></span>
    </span>
  );
};

// Create a client-side only snow effect component
const SnowEffectComponent = () => {
  // Snowflake component definition
  const Snowflake = ({
    size,
    left,
    delay,
    duration,
  }: {
    size: number;
    left: string;
    delay: number;
    duration: number;
  }) => {
    return (
      <motion.div
        className="absolute top-0 rounded-full bg-white z-10"
        style={{
          width: size,
          height: size,
          left,
          opacity: (size / 10) * 0.8, // Smaller flakes are more transparent
        }}
        animate={{
          y: ["-10%", "100vh"],
          x: [
            "0%",
            `${Math.random() > 0.5 ? "+" : "-"}${Math.random() * 10}%`,
            `${Math.random() > 0.5 ? "+" : "-"}${Math.random() * 15}%`,
            `${Math.random() > 0.5 ? "+" : "-"}${Math.random() * 10}%`,
            "0%",
          ],
          rotate: [0, 360],
        }}
        transition={{
          duration: duration,
          repeat: Infinity,
          delay: delay,
          ease: "linear",
          times: [0, 0.25, 0.5, 0.75, 1],
          // Explicitly NOT using spring type for multi-keyframe animations
          type: "tween",
        }}
      />
    );
  };

  // Generate random snowflakes
  const [snowflakes, setSnowflakes] = useState<React.ReactNode[]>([]);

  useEffect(() => {
    // Generate random snowflakes only on the client side
    const flakes = Array.from({ length: 50 }).map((_, i) => {
      const size = Math.random() * 5 + 2; // Random size between 2-7px
      const left = `${Math.random() * 100}%`;
      const delay = Math.random() * 10; // Random delay for natural effect
      const duration = Math.random() * 10 + 10; // Random duration between 10-20s

      return (
        <Snowflake
          key={i}
          size={size}
          left={left}
          delay={delay}
          duration={duration}
        />
      );
    });

    setSnowflakes(flakes);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {snowflakes}
    </div>
  );
};

// Use dynamic import to prevent server-side rendering
const SnowEffect = dynamic(() => Promise.resolve(SnowEffectComponent), {
  ssr: false,
});

interface HeroProps {
  scrollToSection: (sectionId: string) => void;
}

const Hero: React.FC<HeroProps> = ({ scrollToSection }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section id="home" className="pt-20 pb-16 px-6 relative overflow-hidden">
      <Suspense fallback={null}>
        <SnowEffect />
      </Suspense>
      <div className="max-w-6xl mx-auto relative z-20">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="flex flex-col md:flex-row items-center gap-8 mb-12">
            {/* Left side text content */}
            <div className="md:w-1/2 text-left md:pr-8">
              <span className="inline-block px-4 py-2 bg-purple-500/20 rounded-full text-purple-300 text-sm mb-4">
                Best Social Media Marketing Expert in Kerala
              </span>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                The Growth
                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  {" "}
                  Starts Here
                </span>
              </h1>
              <div className="text-xl text-gray-300 mb-4 leading-relaxed">
                <div className="mb-1">
                  Helping brands & creators grow with AI-powered social media
                  marketing strategies | On a mission to teach 100k students{" "}
                  <TypingAnimation />
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <button
                  onClick={() => scrollToSection("contact")}
                  className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 px-8 py-4 rounded-full font-semibold flex items-center justify-center gap-2 transition-all duration-300 transform hover:scale-105"
                >
                  Start Growing Now <ArrowRight size={20} />
                </button>
                <button
                  onClick={() => scrollToSection("results")}
                  className="border border-purple-400 hover:bg-purple-400/10 px-8 py-4 rounded-full font-semibold transition-all duration-300"
                >
                  See Results
                </button>
              </div>
            </div>

            {/* Right side hero image with animation */}
            <div className="md:w-1/2 flex justify-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="relative w-full max-w-md"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur-3xl opacity-20 animate-pulse"></div>
                <div className="relative overflow-hidden shadow-purple-500/20">
                  <Image
                    src={heroImage}
                    alt="Nizamudheen KC - Digital Marketing Expert"
                    className="w-full h-auto object-cover"
                    priority
                  />
                </div>

                {/* Social Media Links */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  className="-mt-4 flex justify-center"
                >
                  <div className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 backdrop-blur-sm p-3 rounded-full border border-purple-500/20 shadow-lg">
                    <div className="flex justify-center gap-3">
                      <a
                        href="https://www.instagram.com/marketing.nizam/?hl=en"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 bg-gradient-to-br from-pink-500/20 to-purple-500/20 hover:from-pink-500/30 hover:to-purple-500/30 rounded-full flex items-center justify-center text-pink-400 hover:text-pink-300 transition-all duration-300 hover:scale-110 border border-pink-500/20 hover:border-pink-400/40"
                      >
                        <Instagram size={18} />
                      </a>
                      <a
                        href="https://www.linkedin.com/in/nizamudheen-kc/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 bg-gradient-to-br from-blue-500/20 to-purple-500/20 hover:from-blue-500/30 hover:to-purple-500/30 rounded-full flex items-center justify-center text-blue-400 hover:text-blue-300 transition-all duration-300 hover:scale-110 border border-blue-500/20 hover:border-blue-400/40"
                      >
                        <Linkedin size={18} />
                      </a>
                      <a
                        href="https://x.com/nizam_5359?s=21&t=-3EoI_oqgURTx18fw3qj4w"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 bg-gradient-to-br from-gray-500/20 to-purple-500/20 hover:from-gray-500/30 hover:to-purple-500/30 rounded-full flex items-center justify-center text-gray-400 hover:text-gray-300 transition-all duration-300 hover:scale-110 border border-gray-500/20 hover:border-gray-400/40"
                      >
                        <X size={18} />
                      </a>
                      <a
                        href="https://www.facebook.com/profile.php?id=61578681628133"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 bg-gradient-to-br from-blue-600/20 to-purple-500/20 hover:from-blue-600/30 hover:to-purple-500/30 rounded-full flex items-center justify-center text-blue-500 hover:text-blue-400 transition-all duration-300 hover:scale-110 border border-blue-500/20 hover:border-blue-400/40"
                      >
                        <Facebook size={18} />
                      </a>
                      <a
                        href="https://www.threads.com/@nizam_.udheen?igshid=NTc4MTIwNjQ2YQ=="
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 bg-gradient-to-br from-purple-500/20 to-pink-500/20 hover:from-purple-500/30 hover:to-pink-500/30 rounded-full flex items-center justify-center text-purple-400 hover:text-purple-300 transition-all duration-300 hover:scale-110 border border-purple-500/20 hover:border-purple-400/40"
                        title="Threads"
                      >
                        <MessageCircle size={18} />
                      </a>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
