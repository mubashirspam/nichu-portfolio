import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { partnerLogos } from "./images";
import {
  Users,
  Grid3X3,
  LayoutGrid,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { useState, useRef } from "react";

const PartnerGallery: React.FC = () => {
  const [viewMode, setViewMode] = useState<"grid" | "masonry">("masonry");
  const [currentPage, setCurrentPage] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const totalImages = partnerLogos.length;
  const itemsPerPage = 12;
  const totalPages = Math.ceil(totalImages / itemsPerPage);

  // Get current page items
  const getCurrentPageItems = () => {
    const startIndex = currentPage * itemsPerPage;
    return partnerLogos.slice(startIndex, startIndex + itemsPerPage);
  };

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  // Container animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  // Item animation variants
  const itemVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  // Masonry heights for variety
  const getMasonryHeight = (index: number) => {
    const heights = ["h-48", "h-56", "h-44", "h-52", "h-40", "h-60"];
    return heights[index % heights.length];
  };

  return (
    <section
      id="partners"
      ref={ref}
      className="py-20 px-6 bg-gradient-to-br from-gray-900 to-black relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 to-pink-900/10" />

      <div className="max-w-7xl mx-auto relative">
        {/* Header Section */}
        <div className="text-center mb-12 md:mb-16">
          <motion.p
            className="text-purple-400 text-sm uppercase tracking-wider mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            PARTNERS
          </motion.p>

          <motion.h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            My Partner <span className="text-purple-400">Gallery</span>
          </motion.h2>

          <motion.p
            className="text-base md:text-lg text-gray-400 max-w-2xl mx-auto px-4"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            See the world through my lens: adventures in partnerships and
            collaborations
          </motion.p>
        </div>

        {/* View Mode Toggle */}
        <motion.div
          className="flex justify-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="bg-gradient-to-br from-purple-900/20 to-pink-900/20 backdrop-blur-sm rounded-full p-1 border border-purple-500/20">
            <button
              onClick={() => setViewMode("masonry")}
              className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                viewMode === "masonry"
                  ? "bg-purple-600 text-white"
                  : "text-gray-300 hover:text-white hover:bg-purple-600/50"
              }`}
            >
              <LayoutGrid className="w-4 h-4 inline mr-2" />
              Masonry
            </button>
            <button
              onClick={() => setViewMode("grid")}
              className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                viewMode === "grid"
                  ? "bg-purple-600 text-white"
                  : "text-gray-300 hover:text-white hover:bg-purple-600/50"
              }`}
            >
              <Grid3X3 className="w-4 h-4 inline mr-2" />
              Grid
            </button>
          </div>
        </motion.div>

        {/* Gallery Grid */}
        <motion.div
          className={`
            grid gap-4 md:gap-6 mb-8
            ${
              viewMode === "grid"
                ? "grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
                : "grid-cols-2 md:grid-cols-3 lg:grid-cols-4 auto-rows-min"
            }
          `}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {getCurrentPageItems().map((logo, index) => (
            <motion.div
              key={`${currentPage}-${index}`}
              variants={itemVariants}
              className={`
                group relative rounded-2xl overflow-hidden cursor-pointer
                transition-all duration-300 hover:scale-105
                ${viewMode === "masonry" ? getMasonryHeight(index) : "h-48"}
                bg-gradient-to-br from-gray-800/50 to-gray-900/50
                backdrop-blur-sm border border-gray-700/50
                shadow-lg hover:shadow-xl hover:shadow-purple-500/20
              `}
              whileHover={{
                scale: 1.02,
                boxShadow: "0 25px 50px -12px rgba(147, 51, 234, 0.25)",
              }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="relative w-full h-full p-2 flex items-center justify-center">
                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <Image
                  src={logo}
                  alt={`Partner ${index + 1}`}
                  fill
                  className="object-contain p-2 filter grayscale group-hover:grayscale-0 transition-all duration-300 group-hover:scale-110"
                  sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                />

                {/* Shine Effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                </div>
              </div>

              {/* Corner Glow */}
              <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-purple-400/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-bl-2xl" />
            </motion.div>
          ))}
        </motion.div>

        {/* Pagination */}
        {totalPages > 1 && (
          <motion.div
            className="flex items-center justify-center gap-6"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <button
              onClick={prevPage}
              className="p-3 rounded-full bg-gradient-to-br from-purple-900/20 to-pink-900/20 backdrop-blur-sm border border-purple-500/20 text-gray-300 hover:text-white hover:bg-purple-600/30 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={currentPage === 0}
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3">
              {Array.from({ length: totalPages }, (_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentPage(i)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    i === currentPage
                      ? "bg-purple-400 scale-125"
                      : "bg-gray-600 hover:bg-purple-400/70"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextPage}
              className="p-3 rounded-full bg-gradient-to-br from-purple-900/20 to-pink-900/20 backdrop-blur-sm border border-purple-500/20 text-gray-300 hover:text-white hover:bg-purple-600/30 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={currentPage === totalPages - 1}
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </motion.div>
        )}

        {/* Stats Section */}
        <motion.div
          className="text-center mt-8 md:mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
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
      </div>
    </section>
  );
};

export default PartnerGallery;
