// components/ContactHeroBanner.tsx

'use client';

import Image from 'next/image';

export default function ContactHeroBanner() {
  return (
    <section className="relative w-full overflow-hidden bg-black">
      {/* Premium Dark Luxury Perfume Background */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-40"
        style={{
          backgroundImage: "url('https://thumbs.dreamstime.com/b/luxury-dark-perfume-bottle-elegant-texture-dramatic-lighting-black-table-luxurious-textured-surface-shown-398748408.jpg')",
        }}
      />
      {/* Ya upar wali koi aur image URL daal sakte ho, jaise: 'https://thumbs.dreamstime.com/b/luxury-dark-perfume-bottle-elegant-texture-dramatic-lighting-black-table-luxurious-textured-surface-shown-398748368.jpg' */}

      {/* Subtle overlay for text contrast and premium feel */}
      <div className="absolute inset-0 bg-black/50" />

      <div className="relative z-10 max-w-7xl mx-auto px-8 py-20 md:py-32 flex items-center justify-center min-h-screen">
        <div className="text-center text-white space-y-8 max-w-4xl">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-tight">
            Contact <span className="text-gray-300">Us</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-300 leading-relaxed mx-auto">
            We’re here to help you discover your signature scent.
          </p>

          <p className="text-md md:text-lg text-gray-400 mx-auto max-w-2xl">
            Whether you have questions about our fragrances, need assistance with an order, 
            or want to explore collaboration opportunities — our team is ready to assist you.
          </p>
        </div>
      </div>
    </section>
  );
}