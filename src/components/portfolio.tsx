"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import Navigation from "./navigation";
import Hero from "./hero";
import Stats from "./stats";
import About from "./about";
import Service from "./service";
import Results from "./results";
import Testmonials from "./testmonials";
import Gallery from "./gallery";
import PartnerGallery from "./partner-gallery";
import ContactUs from "./contact-us";

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("home");

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveSection(sectionId);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      <Navigation
        activeSection={activeSection}
        scrollToSection={scrollToSection}
      />
      <Hero scrollToSection={scrollToSection} />
      <Stats />
      <About />
      <Service />
      <Results />
      {/* <Testmonials /> */}
      <Gallery scrollToSection={scrollToSection} />
      <PartnerGallery />
      <ContactUs />

      {/* Scroll to top button */}
      <button
        onClick={() => scrollToSection("home")}
        className="fixed bottom-8 right-8 bg-purple-600 hover:bg-purple-700 p-3 rounded-full transition-all duration-300 transform hover:scale-110"
      >
        <ChevronDown className="rotate-180" size={24} />
      </button>
    </div>
  );
}
