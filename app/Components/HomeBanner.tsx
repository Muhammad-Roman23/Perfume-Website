"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function HomeBanner() {
  const perfumeGridImages = [
    "https://thumbs.dreamstime.com/b/luxury-perfume-bottle-gold-cap-black-fabric-fragrance-glass-faceted-glass-perfume-bottle-amber-liquid-gold-402329462.jpg",
    "https://thumbs.dreamstime.com/b/luxurious-black-perfume-bottle-gold-accents-captivating-image-exquisite-fragrance-showcases-stunning-adorned-355075965.jpg",
    "https://img.freepik.com/premium-photo/perfume-bottle-black-gold-elegance-generative-ai_431161-17493.jpg",
    "https://thumbs.dreamstime.com/b/luxurious-gold-perfume-bottle-silk-fabric-captivating-image-resting-rich-golden-elegant-design-amber-colored-397689742.jpg",
    "https://thumbs.dreamstime.com/b/luxury-textured-perfume-bottle-golden-cap-smoky-spotlight-scene-stylish-rectangular-accents-dramatic-light-generative-408126859.jpg",
    "https://thumbs.dreamstime.com/b/exquisite-black-gold-perfume-bottle-candid-luxurious-fragrance-photography-capture-immerse-yourself-opulence-351183590.jpg",
  ];

  return (
    <section className="relative w-full overflow-hidden bg-black">
      {/* Static elegant background */}
      <div
        className="absolute inset-0 opacity-20 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://static.vecteezy.com/system/resources/previews/002/150/903/non_2x/luxury-elegant-background-with-gold-mandala-ornament-ornament-isolated-on-black-abstract-realistic-neomorphism-background-elegant-template-vector.jpg')",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-8 sm:py-20 md:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-screen">

          {/* Left Side - Text Content */}
          <motion.div
            className="text-white space-y-6"
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
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
              Discover <span className="text-amber-400">Luxury</span> Fragrances
            </motion.h1>

            <motion.p
              className="text-md md:text-md text-gray-300 leading-relaxed"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: false }}
            >
              Indulge in our exclusive collection of handcrafted perfumes, where rare ingredients meet masterful artistry. 
              Each scent tells a unique story — bold, elegant, and unforgettable. Elevate your presence with fragrances designed for the modern connoisseur.
            </motion.p>

            <motion.p
              className="text-md md:text-md text-gray-400"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: false }}
            >
              From deep woody notes to fresh floral accords, find the signature scent that defines you.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: false }}
            >
              <Link
                href="/products"
                className="inline-block px-10 py-3 bg-white text-black font-bold text-lg rounded-2xl"
              >
                Explore Collection
              </Link>

              <Link
                href="/products"
                className="inline-block px-10 py-3 border-2 rounded-2xl border-white"
              >
                Shop Best Sellers
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Side - Perfume Grid */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8"
            initial="hidden"
            whileInView="show"
            viewport={{ once: false }}
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: 0.15 } },
            }}
          >
            {perfumeGridImages.map((src, index) => (
              <motion.div
                key={index}
                className="group relative rounded-2xl overflow-hidden shadow-2xl hover:shadow-amber-500/30 transition-all duration-700 hover:scale-105 hover:-rotate-3"
                variants={{
                  hidden: { opacity: 0, scale: 0.9, y: 40 },
                  show: { opacity: 1, scale: 1, y: 0 },
                }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <Image
                  src={src}
                  alt={`Luxury Perfume Bottle ${index + 1}`}
                  width={400}
                  height={600}
                  priority
                  className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-1000"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-amber-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
