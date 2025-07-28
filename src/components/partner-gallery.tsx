
import { motion } from "framer-motion";
import Image from "next/image";
import { partnerLogos } from "./images";
import { Users } from "lucide-react";

const PartnerGallery: React.FC = () => {
  const totalImages = 32;

  // Create three columns of images with different arrangements
  const createColumnImages = (startIndex: number, count: number) => {
    const images = [];
    for (let i = 0; i < count; i++) {
      const imageIndex = (startIndex + i) % totalImages;
      // Use deterministic heights based on index instead of random
      const heightIndex = i % 3;
      const height = heightIndex === 0 ? "h-48" : heightIndex === 1 ? "h-64" : "h-40";
      
      images.push({
        src:
          partnerLogos[imageIndex] ||
          partnerLogos[imageIndex % partnerLogos.length],
        id: `${startIndex}-${i}`,
        height: height, // Deterministic height based on index
      });
    }
    return images;
  };

  // Create image sets for each column (doubled for infinite scroll)
  const leftColumnImages = [
    ...createColumnImages(0, 20),
    ...createColumnImages(0, 20), // Duplicate for seamless loop
  ];

  const centerColumnImages = [
    ...createColumnImages(20, 24),
    ...createColumnImages(20, 24), // Duplicate for seamless loop
  ];

  const rightColumnImages = [
    ...createColumnImages(44, 18),
    ...createColumnImages(44, 18), // Duplicate for seamless loop
  ];

  return (
    <section
      id="partner-gallery"
      className="py-12 md:py-20 px-4 md:px-6 bg-gradient-to-br from-purple-50/5 to-pink-50/5 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <motion.p
            className="text-purple-400 text-sm uppercase tracking-wider mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            GALLERY
          </motion.p>
          <motion.h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            My Partner <span className="text-purple-400">Diary</span>
          </motion.h2>
          <motion.p
            className="text-base md:text-lg text-gray-400 max-w-2xl mx-auto px-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            See the world through my lens: adventures in partnerships and
            collaborations
          </motion.p>
        </div>

        {/* Parallax Scrolling Gallery */}
        <div className="relative h-[600px] md:h-[700px] lg:h-[800px] overflow-hidden rounded-3xl">
          {/* Gradient overlays for smooth edges */}
          <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-gray-900/20 to-transparent z-10 pointer-events-none" />
          <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-gray-900/20 to-transparent z-10 pointer-events-none" />

          <div className="flex gap-4 md:gap-6 h-full">
            {/* Left Column - Slow upward scroll */}
            <div className="flex-1 relative overflow-hidden">
              <motion.div
                className="flex flex-col gap-4"
                animate={{
                  y: [0, (-50 * leftColumnImages.length) / 2], // Move up by half the duplicated content
                }}
                transition={{
                  duration: 60, // 60 seconds for full cycle
                  ease: "linear",
                  repeat: Infinity,
                }}
              >
                {leftColumnImages.map((image, index) => (
                  <motion.div
                    key={`left-${image.id}-${index}`}
                    className={`relative ${image.height} rounded-2xl overflow-hidden shadow-lg group cursor-pointer`}
                    whileHover={{ scale: 1.03, zIndex: 20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Image
                      src={image.src}
                      alt={`Partner ${index + 1}`}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                      sizes="(max-width: 768px) 33vw, 25vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                        <div className="w-0 h-0 border-l-[6px] border-l-white border-y-[4px] border-y-transparent ml-1"></div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* Center Column - Fast upward scroll */}
            <div className="flex-1 relative overflow-hidden">
              <motion.div
                className="flex flex-col gap-4"
                animate={{
                  y: [0, (-60 * centerColumnImages.length) / 2], // Move up faster
                }}
                transition={{
                  duration: 30, // 30 seconds for full cycle (2x faster)
                  ease: "linear",
                  repeat: Infinity,
                }}
              >
                {centerColumnImages.map((image, index) => (
                  <motion.div
                    key={`center-${image.id}-${index}`}
                    className={`relative ${image.height} rounded-2xl overflow-hidden shadow-xl group cursor-pointer`}
                    whileHover={{ scale: 1.03, zIndex: 20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Image
                      src={image.src}
                      alt={`Partner ${index + 1}`}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                      sizes="(max-width: 768px) 33vw, 25vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                        <div className="w-0 h-0 border-l-[8px] border-l-white border-y-[6px] border-y-transparent ml-1"></div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* Right Column - Medium upward scroll */}
            <div className="flex-1 relative overflow-hidden">
              <motion.div
                className="flex flex-col gap-4"
                animate={{
                  y: [0, (-55 * rightColumnImages.length) / 2], // Medium speed
                }}
                transition={{
                  duration: 45, // 45 seconds for full cycle
                  ease: "linear",
                  repeat: Infinity,
                }}
              >
                {rightColumnImages.map((image, index) => (
                  <motion.div
                    key={`right-${image.id}-${index}`}
                    className={`relative ${image.height} rounded-2xl overflow-hidden shadow-lg group cursor-pointer`}
                    whileHover={{ scale: 1.03, zIndex: 20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Image
                      src={image.src}
                      alt={`Partner ${index + 1}`}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                      sizes="(max-width: 768px) 33vw, 25vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                        <div className="w-0 h-0 border-l-[6px] border-l-white border-y-[4px] border-y-transparent ml-1"></div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="text-center mt-8">
          <motion.div
            className="inline-flex items-center gap-2 text-gray-400 text-sm"
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <div className="w-1 h-6 bg-gradient-to-b from-purple-400 to-transparent rounded-full"></div>
            <span>Auto-scrolling gallery</span>
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          className="text-center mt-8 md:mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
        >
          <div className="bg-gradient-to-br from-purple-900/20 to-pink-900/20 backdrop-blur-sm p-4 md:p-6 rounded-2xl border border-purple-500/20 inline-block mx-4">
            <div className="flex items-center gap-3 text-purple-300 mb-2">
              <Users size={20} className="md:w-6 md:h-6" />
              <span className="text-base md:text-lg font-semibold">
                {totalImages}+ Trusted Partners
              </span>
            </div>
            <p className="text-gray-300 text-xs md:text-sm">
              Join our growing network of successful partnerships
            </p>
          </div>
        </motion.div>

        {/* Speed Indicators */}
        <div className="flex justify-center gap-8 mt-6 text-xs text-gray-500">
          <div className="flex items-center gap-1">
            <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
            <span>Slow</span>
          </div>
          <div className="flex items-center gap-1">
            <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
            <span>Fast</span>
          </div>
          <div className="flex items-center gap-1">
            <div className="w-2 h-2 bg-pink-400 rounded-full"></div>
            <span>Medium</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnerGallery;
