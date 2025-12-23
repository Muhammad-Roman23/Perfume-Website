"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen bg-black text-white overflow-hidden">
      {/* Subtle dark luxury texture background */}
      <div
        className="absolute inset-0 opacity-20 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.fineartamerica.com/images/artworkimages/mediumlarge/3/seamless-minimal-black-abstract-glossy-soft-waves-background-texture-elegant-wavy-carved-marble-luxury-wallpaper-pattern-tileable-subtle-dark-grey-presentation-or-display-backdrop-3d-rendering-n-akkash.jpg')",
        }}
      />

      <div className="relative z-10">
        {/* Navbar */}
 
        {/* Hero Content */}
        <div className="min-h-screen flex flex-col justify-center items-start px-8 md:px-16 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
            className="max-w-2xl"
          >
            <h2 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8 leading-tight">
              Evoke Every Emotion<br />
              With Fragrance
            </h2>
            <p className="text-xl text-gray-400 mb-12 max-w-lg">
              Discover premium men's colognes crafted to capture confidence, mystery, and timeless elegance.
            </p>

            {/* CTA Buttons */}
            <div className="flex gap-8">
              <a
                href="#shop"
                className="px-10 py-4 bg-white text-black font-bold text-lg rounded-full hover:bg-gray-200 transition-all duration-500 shadow-2xl hover:shadow-white/30 hover:scale-105"
              >
                Shop Now
              </a>
              <a
                href="#discover"
                className="px-10 py-4 border-2 border-white text-white font-bold text-lg rounded-full hover:bg-white/10 transition-all duration-500 hover:scale-105"
              >
                Discover
              </a>
            </div>
          </motion.div>
        </div>

        {/* Hero Images – Floating Bottles */}
        <div className="absolute right-0 bottom-0 top-0 w-full md:w-1/2 pointer-events-none">
          {/* Main Large Bottle */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -15 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1.5, delay: 0.5 }}
            className="absolute right-20 bottom-20 w-96 md:w-[500px]"
          >
            <img
              src="https://thumbs.dreamstime.com/b/luxury-dark-perfume-bottle-elegant-texture-dramatic-lighting-black-table-luxurious-textured-surface-shown-398748408.jpg"
              alt="AURA Premium Cologne"
              width={800}
              height={1000}
              className="object-contain drop-shadow-2xl"
            />
          </motion.div>

          {/* Secondary Bottle */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: 15 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1.5, delay: 0.8 }}
            className="absolute right-64 bottom-40 w-72 md:w-96"
          >
            <img
              src="https://thumbs.dreamstime.com/b/luxury-perfume-bottle-gold-cap-black-fabric-fragrance-glass-faceted-glass-perfume-bottle-amber-liquid-gold-402329462.jpg"
              alt="AURA Signature"
              width={700}
              height={900}
              className="object-contain drop-shadow-2xl"
            />
          </motion.div>

          {/* Small Accent Bottles */}
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 1 }}
            className="absolute left-1/2 bottom-10 flex gap-8"
          >
            <img
              src="https://thumbs.dreamstime.com/b/black-perfume-bottle-marble-surface-suitable-wide-range-uses-354853099.jpg"
              alt="AURA Collection"
              width={200}
              height={300}
              className="object-contain drop-shadow-xl"
            />
            <img
              src="https://img.freepik.com/premium-photo/perfume-men-black-glass-bottle-dark-metallic-background_84738-4845.jpg"
              alt="AURA Essence"
              width={200}
              height={300}
              className="object-contain drop-shadow-xl"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}