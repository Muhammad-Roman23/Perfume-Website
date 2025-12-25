'use client';

import { motion } from 'framer-motion';

export default function ContactHeroBanner() {
  return (
    <section className="relative w-full overflow-hidden bg-black">
      {/* Static Premium Dark Luxury Perfume Background */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-40"
        style={{
          backgroundImage: "url('https://thumbs.dreamstime.com/b/luxury-dark-perfume-bottle-elegant-texture-dramatic-lighting-black-table-luxurious-textured-surface-shown-398748408.jpg')",
        }}
      />

      {/* Overlay for text contrast */}
      <div className="absolute inset-0 bg-black/50" />

      <div className="relative z-10 max-w-7xl mx-auto px-8 py-20 md:py-32 flex items-center justify-center min-h-screen">
        <motion.div
          className="text-center text-white space-y-8 max-w-4xl"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: false }}
        >
          <motion.h1
            className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-tight"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false }}
          >
            Contact <span className="text-gray-300">Us</span>
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl text-gray-300 leading-relaxed mx-auto"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: false }}
          >
            We’re here to help you discover your signature scent.
          </motion.p>

          <motion.p
            className="text-md md:text-lg text-gray-400 mx-auto max-w-2xl"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: false }}
          >
            Whether you have questions about our fragrances, need assistance with an order, 
            or want to explore collaboration opportunities — our team is ready to assist you.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
