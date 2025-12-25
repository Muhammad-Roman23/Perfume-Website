"use client";

import { motion } from "framer-motion";

export default function OurPhilosophySection() {
  return (
    <motion.section
      className="relative w-full py-20 md:py-32 bg-black overflow-hidden"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
    >
      {/* Dark Premium Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{
          backgroundImage: `url('https://images.fineartamerica.com/images/artworkimages/mediumlarge/3/seamless-minimal-black-abstract-glossy-soft-waves-background-texture-elegant-wavy-carved-marble-luxury-wallpaper-pattern-tileable-subtle-dark-grey-presentation-or-display-backdrop-3d-rendering-n-akkash.jpg')`,
        }}
      />

      {/* Subtle overlay */}
      <div className="absolute inset-0 bg-black/50" />

      <div className="relative z-10 max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side: Unique Hexagonal Images (staggered) */}
          <div className="relative h-[500px] md:h-[600px] lg:h-[700px]">
            {/* Hexagon 1 - Top Left */}
            <div 
              className="absolute top-10 left-0 w-64 h-64 md:w-80 md:h-80 shadow-2xl border-8 border-black bg-cover bg-center bg-no-repeat"
              style={{
                clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
                backgroundImage: `url('https://static.vecteezy.com/system/resources/thumbnails/068/965/553/small/luxurious-gold-toned-perfume-bottle-with-a-hexagonal-design-displayed-against-a-dark-background-photo.jpg')`,
              }}
            />

            {/* Hexagon 2 - Top Right */}
            <div 
              className="absolute top-0 right-10 w-56 h-56 md:w-72 md:h-72 shadow-2xl border-8 border-black bg-cover bg-center bg-no-repeat"
              style={{
                clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
                backgroundImage: `url('https://thumbs.dreamstime.com/b/luxury-perfume-bottle-gold-cap-black-fabric-fragrance-glass-faceted-glass-perfume-bottle-amber-liquid-gold-402329462.jpg')`,
              }}
            />

            {/* Hexagon 3 - Bottom Left */}
            <div 
              className="absolute bottom-0 left-20 w-60 h-60 md:w-80 md:h-80 shadow-2xl border-8 border-black bg-cover bg-center bg-no-repeat"
              style={{
                clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
                backgroundImage: `url('https://thumbs.dreamstime.com/b/hexagonal-perfume-bottle-amber-liquid-rests-cream-colored-silk-fabric-features-faceted-crystal-like-stopper-401772668.jpg')`,
              }}
            />

            {/* Hexagon 4 - Bottom Right */}
            <div 
              className="absolute bottom-10 right-0 w-64 h-64 md:w-80 md:h-80 shadow-2xl border-8 border-black bg-cover bg-center bg-no-repeat"
              style={{
                clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
                backgroundImage: `url('https://thumbs.dreamstime.com/b/elegant-black-perfume-bottle-display-luxurious-design-elegant-black-perfume-bottle-display-luxurious-design-studio-setting-close-370609572.jpg')`,
              }}
            />
          </div>

          {/* Right Side: Content */}
          <div className="space-y-8 text-right lg:text-left">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-wide">
              Our Philosophy
            </h2>

            <div className="space-y-6 text-lg md:text-xl text-gray-300 leading-relaxed">
              <p>
                We believe a fragrance should speak before you do.
              </p>

              <p>
                Every blend is carefully crafted to balance intensity, elegance, and lasting impact — never overpowering, always memorable.
              </p>

              <p>
                Quality over quantity: We focus on premium, rare ingredients that deliver long-lasting impressions rather than fleeting scents.
              </p>

              <p>
                Our perfumes are designed to evoke confidence and celebrate individuality — helping you leave a unique mark wherever you go.
              </p>

              <p className="text-xl font-light italic text-gray-200">
                A great fragrance isn't worn; it's revealed.
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
