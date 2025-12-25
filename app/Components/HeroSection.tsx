"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function HeroSection() {
  const bgPatternUrl = "https://images.stockcake.com/public/8/2/3/82316c0e-62e3-4473-9b58-b8f93e1b05bc_large/ethereal-fragrance-essence-stockcake.jpg"; 

  return (
    <section className="relative w-full overflow-hidden bg-black">
      {/* Static Premium silver elegant background pattern */}
      <div
        className="absolute inset-0 opacity-15 bg-cover bg-center"
        style={{ backgroundImage: `url('${bgPatternUrl}')` }}
      />

      {/* Overlay for contrast */}
      <div className="absolute inset-0 bg-black/40" />

      <div className="relative z-10 max-w-7xl mx-auto px-8 py-20 md:py-32 flex items-center justify-center min-h-screen">
        {/* Motion wrapper for all content */}
        <motion.div
          className="text-center text-white space-y-8 max-w-4xl"
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-tight">
            Our Complete <span className="text-gray-300">Collection</span>
          </h1>

          <motion.p
            className="text-lg md:text-xl text-gray-300 leading-relaxed mx-auto"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          >
            Explore our full range of premium handcrafted perfumes. From bold oriental notes to fresh and floral masterpieces — 
            discover the perfect signature scent that reflects your unique style and sophistication.
          </motion.p>

          <motion.p
            className="text-md md:text-lg text-gray-400 mx-auto max-w-2xl"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
          >
            Luxury fragrances crafted with rare ingredients for the discerning connoisseur.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center"
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
          >
            <Link
              href="/contact"
              className="inline-block px-10 py-3 bg-white text-black font-bold text-lg rounded-2xl hover:bg-gray-300 transition"
            >
              Contact Us
            </Link>

            <Link
              href="/about"
              className="inline-block px-10 py-3 border-2 rounded-2xl border-gray-300 text-gray-300 hover:bg-gray-300 hover:text-black transition"
            >
              Explore Us
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
