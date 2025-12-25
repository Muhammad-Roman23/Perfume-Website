// components/MissionVisionValuesSection.tsx

'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

type Tab = 'mission' | 'vision' | 'values';

export default function MissionVisionValuesSection() {
  const [activeTab, setActiveTab] = useState<Tab>('mission');

  const content = {
    mission: {
      title: "Our Mission",
      text: "To craft exquisite fragrances that inspire confidence, evoke emotions, and become an essential part of your daily ritual. We are committed to delivering luxury scents using the finest ingredients, blending artistry with innovation to create unforgettable experiences for every individual.",
      image: "https://static.vecteezy.com/system/resources/thumbnails/053/715/993/small/elegant-crystal-perfume-bottle-with-a-golden-cap-isolated-on-a-transparent-background-perfect-for-luxury-fragrance-and-beauty-themes-png.png", // Attractive transparent PNG
    },
    vision: {
      title: "Our Vision",
      text: "To redefine luxury in the world of fragrances by setting new standards of excellence and sustainability. We envision a future where every scent tells a unique story, empowering people worldwide to express their true selves through timeless and modern perfumes.",
      image: "https://static.vecteezy.com/system/resources/previews/051/339/704/non_2x/luxury-perfume-bottle-with-a-transparent-isolated-on-transparent-background-png.png", // Premium transparent
    },
    values: {
      title: "Our Values",
      text: "Quality, authenticity, and passion guide everything we do. We prioritize premium natural ingredients, ethical sourcing, and meticulous craftsmanship. Trust, innovation, and customer satisfaction are at our core — creating scents that are not just perfumes, but lasting legacies.",
      image: "https://static.vecteezy.com/system/resources/previews/070/649/024/non_2x/luxury-golden-perfume-bottle-with-ornate-design-isolated-on-transparent-background-png.png", // Golden luxury transparent
    },
  };

  const current = content[activeTab];

  return (
    <section className="relative w-full py-20 md:py-32 bg-white overflow-hidden">
      {/* Subtle Soft Floral Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-10"
        style={{
          backgroundImage: `url('https://theperfumeoilcompany.com/cdn/shop/files/Fragrance_Images_Set-03.png?v=1726879830&width=2000')`,
        }}
      />

      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 max-w-7xl mx-auto px-8"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side: Tabs + Animated Content */}
          <div className="">
            {/* Tabs - Smaller Font */}
            <div className="flex flex-wrap gap-8 mb-10">
              {(['mission', 'vision', 'values'] as Tab[]).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`relative text-xl font-medium transition-colors pb-2 ${activeTab === tab ? 'text-gray-900' : 'text-gray-500 hover:text-gray-700'}`}
                >
                  {tab === 'mission' ? 'Our Mission' : tab === 'vision' ? 'Our Vision' : 'Our Values'}
                  {activeTab === tab && (
                    <motion.span 
                      layoutId="underline"
                      className="absolute bottom-0 left-0 w-full h-0.5 bg-gray-900"
                    />
                  )}
                </button>
              ))}
            </div>

            {/* Animated Text Content */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                  {current.title}
                </h3>
                <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                  {current.text}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right Side: Animated Transparent PNG Image */}
          <div className="relative flex justify-end">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                className="relative w-full h-full max-w-md"
              >
                <img
                  src={current.image}
                  alt={current.title}
                //   fill
                  className="object-contain drop-shadow-2xl me-auto"
                //   priority
                />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </motion.div>
    </section>
  );
}