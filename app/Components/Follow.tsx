"use client";

import { motion } from "framer-motion";

export default function Follow () {
    return(
        <section className="py-32 px-6 relative bg-black text-white overflow-hidden">
        {/* Subtle dark texture */}
        <div
          className="absolute inset-0 opacity-15 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.fineartamerica.com/images/artworkimages/mediumlarge/3/seamless-minimal-black-abstract-glossy-soft-waves-background-texture-elegant-wavy-carved-marble-luxury-wallpaper-pattern-tileable-subtle-dark-grey-presentation-or-display-backdrop-3d-rendering-n-akkash.jpg')",
          }}
        />

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Title */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-6">
              Follow Us on Instagram
            </h2>
            <p className="text-xl text-gray-400">
              @aura_fragrances – Discover the world of luxury scents
            </p>
          </motion.div>

          {/* Instagram Feed Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {[
              "https://i.etsystatic.com/48881932/r/il/f12472/6229963423/il_570xN.6229963423_afg1.jpg",
              "https://img.freepik.com/free-photo/black-white-beauty-product_23-2151307249.jpg",
              "https://img.freepik.com/premium-psd/drop-packaging-mockup-natural-context_23-2149179941.jpg",
              "https://i.etsystatic.com/41081634/r/il/393e37/4914580008/il_fullxfull.4914580008_2dac.jpg",
              "https://i.etsystatic.com/48881932/r/il/6df0a1/6229934785/il_340x270.6229934785_t7aw.jpg",
              "https://img.freepik.com/free-photo/black-white-beauty-product_23-2151307249.jpg",
            ].map((src, index) => (
              <motion.a
                key={index}
                href="https://instagram.com/aura_fragrances"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: index * 0.1 }}
                className="block rounded-2xl overflow-hidden shadow-2xl transition-all duration-500 hover:scale-105"
              >
                <img
                  src={src}
                  alt={`AURA Instagram Post ${index + 1}`}
                  width={400}
                  height={400}
                  className="object-cover w-full h-full"
                />
              </motion.a>
            ))}
          </div>
        </div>
      </section>
    )
}