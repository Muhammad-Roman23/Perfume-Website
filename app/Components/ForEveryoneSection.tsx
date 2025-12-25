'use client'
import Link from 'next/link';
import { useState } from 'react';
import { motion } from 'framer-motion';

type Tab = 'male' | 'female' | 'unisex';

export default function ForEveryoneSection() {
  const [activeTab, setActiveTab] = useState<Tab>('male');

  const maleImages = [
    'https://thumbs.dreamstime.com/b/luxury-dark-perfume-bottle-elegant-texture-dramatic-lighting-black-table-luxurious-textured-surface-shown-398748408.jpg',
    'https://t3.ftcdn.net/jpg/13/76/48/16/360_F_1376481664_dlZnlhLEDJ1MEdLODdc03L6wLaB7A9BQ.jpg',
    'https://img.freepik.com/premium-photo/perfume-men-black-glass-bottle-dark-metallic-background_84738-4845.jpg',
  ];

  const femaleImages = [
    'https://thumbs.dreamstime.com/b/luxury-perfume-bottle-black-silk-satin-fabric-background-classic-design-cosmetic-fragrance-men-women-glass-gold-details-385688802.jpg',
    'https://www.shutterstock.com/image-photo/amsterdam-netherlands-10-31-2023-260nw-2382190717.jpg',
    'https://thumbs.dreamstime.com/b/elegant-black-perfume-bottle-display-luxurious-design-elegant-black-perfume-bottle-display-luxurious-design-studio-setting-close-370609572.jpg',
  ];

  const unisexImages = [
    'https://thumbs.dreamstime.com/b/advertisement-mockup-men-s-cologne-unisex-perfume-dark-bottle-sophisticated-background-convey-sense-luxury-418059002.jpg',
    'https://img.fragrancex.com/images/blog/unisex-fragrance.jpeg',
    'https://img.fragrancex.com/images/blog/perfumes-and-colognes.jpeg',
  ];

  const currentImages = activeTab === 'male' ? maleImages : activeTab === 'female' ? femaleImages : unisexImages;

  const perfumeNames = [
    { name: "Shadow Noir", desc: "Deep woody notes with smoky intensity" },
    { name: "Midnight Edge", desc: "Bold leather and spice for ultimate confidence" },
    { name: "Obsidian Rush", desc: "Dark amber and oud for timeless power" },
    { name: "Eclipse Intense", desc: "Mysterious blend of vetiver and musk" },
  ];

  return (
    <motion.section
      className="relative w-full py-20 md:py-32 bg-black overflow-hidden"
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      viewport={{ once: false }}
    >
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-25"
        style={{
          backgroundImage: `url('https://images.fineartamerica.com/images/artworkimages/mediumlarge/3/seamless-minimal-black-abstract-glossy-soft-waves-background-texture-elegant-wavy-carved-marble-luxury-wallpaper-pattern-tileable-subtle-dark-grey-presentation-or-display-backdrop-3d-rendering-n-akkash.jpg')`,
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-8">
        {/* Heading */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          viewport={{ once: false }}
        >
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-widest uppercase">
            For Everyone
          </h2>
          <p className="mt-6 text-lg md:text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
            Bold masculine power • Elegant feminine grace • Versatile unisex sophistication
          </p>
        </motion.div>

        {/* Tabs */}
        <motion.div
          className="flex justify-center gap-12 mb-16"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: false }}
        >
          {['male', 'female', 'unisex'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab as Tab)}
              className={`relative pb-4 text-2xl md:text-3xl font-semibold transition-colors ${activeTab === tab ? 'text-white' : 'text-gray-600 hover:text-gray-300'}`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
              {activeTab === tab && <span className="absolute bottom-0 left-0 w-full h-1 bg-white" />}
            </button>
          ))}
        </motion.div>

        {/* Images Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentImages.map((img, index) => (
            <motion.div
              key={index}
              className="group relative h-96 rounded-2xl overflow-hidden cursor-pointer"
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2, ease: "easeOut" }}
              viewport={{ once: false }}
            >
              <div 
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url('${img}')` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent group-hover:from-black/80 transition" />
              <div className="relative h-full flex flex-col justify-end p-8">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                  {perfumeNames[index].name}
                </h3>
                <p className="text-gray-300 mb-6 text-sm md:text-base">
                  {perfumeNames[index].desc}
                </p>
                <Link
                  href="/products"
                  className="relative text-white text-lg font-semibold pb-2 group"
                >
                  Discover
                  <span className="absolute bottom-0 left-0 h-0.5 bg-white w-0 group-hover:w-full transition-all duration-700 ease-out" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
