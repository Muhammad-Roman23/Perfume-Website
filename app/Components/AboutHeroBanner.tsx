"use client";

// components/AboutHeroBanner.tsx

import { motion } from "framer-motion";

const bgPatternUrl =
  "https://thumbs.dreamstime.com/b/luxury-dark-perfume-bottle-elegant-texture-dramatic-lighting-black-table-luxurious-textured-surface-shown-398748408.jpg";

export default function AboutHeroBanner() {
  return (
    <section className="relative w-full overflow-hidden bg-black">
      {/* Static elegant background */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{ backgroundImage: `url('${bgPatternUrl}')` }}
      />

      {/* Overlay for text readability */}
      <div className="absolute inset-0 bg-black/50" />

      <div className="relative z-10 max-w-7xl mx-auto px-8 py-20 md:py-32 flex items-center justify-center min-h-screen">
        {/* Animated Content */}
        <motion.div
          className="text-center text-white space-y-8 max-w-4xl"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: false }}
        >
          <motion.h1
            className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-tight"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false }}
          >
            About Us
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl text-gray-300 leading-relaxed mx-auto"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: false }}
          >
            We are passionate creators of luxury fragrances, dedicated to crafting timeless scents
            that evoke emotion, elegance, and individuality.
          </motion.p>

          <motion.p
            className="text-md md:text-lg text-gray-400 mx-auto max-w-3xl"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: false }}
          >
            From sourcing the finest rare ingredients across the globe to blending them with artistry and precision,
            every perfume tells a story of sophistication and excellence. Our journey began with a vision to redefine luxury
            in the world of fragrances — bringing you unforgettable scents that become a part of your legacy.
          </motion.p>

          <motion.p
            className="text-md md:text-lg text-gray-400 italic"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: false }}
          >
            Experience the essence of true luxury.
          </motion.p>
        </motion.div>
      </div>

      {/* Scroll down indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        viewport={{ once: false }}
      >
        <svg
          className="w-10 h-10 text-white/70 animate-bounce"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </motion.div>
    </section>
  );
}
