"use client";

import React from "react";
import Image, { StaticImageData } from "next/image";

/**
 * Logo ribbon marquee — sits right below the hero.
 * No heading, just an infinite scrolling band of client logos.
 *
 * Logos are served from ImageKit (folder "/Marketing nizam clinte Logo/logo").
 * `name` is used for SEO alt text — add/remove entries here to manage the wall.
 */

type Logo = { src: StaticImageData | string; alt: string };

const IK_BASE =
  "https://ik.imagekit.io/marketingnizam/Marketing%20nizam%20clinte%20Logo/logo";

// file = exact filename in ImageKit; alt = SEO alt text (brand + keyword phrase)
const IK_FILES: { file: string; alt: string }[] = [
  { file: "farook collage logo", alt: "Farook College logo — client of best digital marketer in Kerala" },
  { file: "https://ik.imagekit.io/marketingnizam/Marketing%20nizam%20clinte%20Logo/logo/digital%20marketer%20in%20Kerala-inspire%20go%201%20(1).png", alt: "Inspire Go logo — digital marketer in Kerala" },
  { file: "https://ik.imagekit.io/marketingnizam/Marketing%20nizam%20clinte%20Logo/logo/Frame%201.png?updatedAt=1782844083252", alt: "Wintouch logo — best digital marketing expert in Kerala" },
  { file: "best digital marketer in Kerala- skillage", alt: "Skillage logo — best digital marketer in Kerala" },
  { file: "best digital marketer in Kerala- raasta", alt: "Raasta logo — best digital marketer in Kerala" },
  { file: "best digital marketer in Kerala-global public school", alt: "Global Public School logo — best digital marketer in Kerala" },
  { file: "best digital marketer in Kerala-Fainbay", alt: "Fainbay logo — best digital marketer in Kerala" },
  { file: "digital marketer in Kerala-ruddo", alt: "Ruddo logo — digital marketer in Kerala" },
  { file: "digital marketer in Kerala-nilagiri collage", alt: "Nilgiri College logo — digital marketer in Kerala" },
  { file: "best digital marketing expert in Kerala-hillford school", alt: "Hillford School logo — best digital marketing expert in Kerala" },
  { file: "best digital marketer in Wayanad-ash-aspen", alt: "Ash Aspen logo — best digital marketer in Wayanad" },
  { file: "best digital marketer in Wayanad-straightpath", alt: "Straightpath logo — best digital marketer in Wayanad" },
];

const LOGOS: Logo[] = IK_FILES.map(({ file, alt }) => ({
  src: file.startsWith('http') ? file : `${IK_BASE}/${encodeURIComponent(file)}?tr=h-112`,
  alt,
}));

// Duplicate so the -50% keyframe loops seamlessly.
const TRACK = [...LOGOS, ...LOGOS];

// 8-point starburst separator (lime), like the reference tape.
const Star: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
    <path d="M12 0 14.6 8.2 21.5 3.2 16.4 10.2 24 12 16.4 13.8 21.5 20.8 14.6 15.8 12 24 9.4 15.8 2.5 20.8 7.6 13.8 0 12 7.6 10.2 2.5 3.2 9.4 8.2Z" />
  </svg>
);

const LogoMarquee: React.FC = () => {
  return (
    <section
      aria-label="Trusted by leading brands"
      className="relative flex items-center overflow-hidden bg-[#f5f2ec] h-44 md:h-60"
    >
      {/* Straight lime band (behind) */}
      <div className="absolute inset-x-0 top-1/2 h-28 -translate-y-1/2 bg-[#c5f542] md:h-36" />

      {/* Sloped black tape (front) carrying the marquee */}
      <div
        className="absolute left-1/2 top-1/2 w-[120%] -translate-x-1/2 -translate-y-1/2 -rotate-[4deg] overflow-hidden bg-[#1c1c1c] h-20 md:h-24"
      >
        <div className="flex h-full w-max marquee-left items-center">
          {TRACK.map((logo, i) => (
            <div key={i} className="flex shrink-0 items-center">
              <div className="flex items-center justify-center px-5 md:px-7">
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  height={64}
                  width={200}
                  sizes="200px"
                  className="h-10 md:h-12 w-auto max-w-none object-contain brightness-0 invert"
                />
              </div>
              <Star className="h-4 w-4 shrink-0 text-[#c5f542] md:h-5 md:w-5" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LogoMarquee;
