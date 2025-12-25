// components/AboutHeroBanner.tsx (ya .jsx)

import Image from 'next/image';

const bgPatternUrl = "https://thumbs.dreamstime.com/b/luxury-dark-perfume-bottle-elegant-texture-dramatic-lighting-black-table-luxurious-textured-surface-shown-398748408.jpg"; 
// Ya upar se koi aur pasand karo, jaise:
// "https://thumbs.dreamstime.com/b/luxury-perfume-bottle-raw-black-rock-elegant-fragrance-product-sophisticated-glass-containing-golden-liquid-meticulously-418472702.jpg"
// "https://thumbs.dreamstime.com/b/elegant-perfume-bottle-mystical-smoke-glass-glows-warmly-surrounded-ethereal-blue-against-dark-background-creating-390419409.jpg"

export default function AboutHeroBanner() {
  return (
    <section className="relative w-full overflow-hidden bg-black">
      {/* Premium elegant background image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{
          backgroundImage: `url('${bgPatternUrl}')`,
        }}
      />

      {/* Subtle overlay for better text readability */}
      <div className="absolute inset-0 bg-black/50" />

      <div className="relative z-10 max-w-7xl mx-auto px-8 py-20 md:py-32 flex items-center justify-center min-h-screen">
        <div className="text-center text-white space-y-8 max-w-4xl">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-tight">
            About Us
          </h1>

          <p className="text-lg md:text-xl text-gray-300 leading-relaxed mx-auto">
            We are passionate creators of luxury fragrances, dedicated to crafting timeless scents 
            that evoke emotion, elegance, and individuality.
          </p>

          <p className="text-md md:text-lg text-gray-400 mx-auto max-w-3xl">
            From sourcing the finest rare ingredients across the globe to blending them with artistry and precision, 
            every perfume tells a story of sophistication and excellence. Our journey began with a vision to redefine luxury 
            in the world of fragrances — bringing you unforgettable scents that become a part of your legacy.
          </p>

          <p className="text-md md:text-lg text-gray-400 italic">
            Experience the essence of true luxury.
          </p>
        </div>
      </div>

      {/* Optional scroll down indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
        <svg className="w-10 h-10 text-white/70 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}