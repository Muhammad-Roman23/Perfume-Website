'use client'
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react'; // Make sure lucide-react is installed

export const FeaturedProducts = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  // Premium black & gold luxury perfume bottle images (high-quality, dark theme)
  const productImages = [
    'https://thumbs.dreamstime.com/b/luxury-perfume-bottle-gold-cap-black-fabric-fragrance-glass-faceted-glass-perfume-bottle-amber-liquid-gold-402329462.jpg',
    'https://thumbs.dreamstime.com/b/luxurious-black-perfume-bottle-gold-accents-captivating-image-exquisite-fragrance-showcases-stunning-adorned-355075965.jpg',
    'https://img.freepik.com/premium-photo/perfume-bottle-black-gold-elegance-generative-ai_431161-17493.jpg',
    'https://thumbs.dreamstime.com/z/exquisite-black-gold-perfume-bottle-candid-luxurious-fragrance-photography-capture-immerse-yourself-opulence-351183590.jpg',
    'https://thumbs.dreamstime.com/b/luxurious-gold-perfume-bottle-silk-fabric-captivating-image-resting-rich-golden-elegant-design-amber-colored-397689742.jpg',
    'https://thumbs.dreamstime.com/b/luxury-textured-perfume-bottle-golden-cap-smoky-spotlight-scene-stylish-rectangular-accents-dramatic-light-generative-408126859.jpg',
  ];

  const productDetails = [
    {
      name: 'Velvet Oud',
      category: 'Floral Oriental',
      gender: 'Female',           // Added gender
      rating: 4.8,                // Added rating
      price: '$185',
      description: 'A captivating blend of Turkish rose and rare oud wood'
    },
    {
      name: 'Mid Amber',
      category: 'Woody Spicy',
      gender: 'Both',
      rating: 4.9,
      price: '$210',
      description: 'Deep amber notes with hints of vanilla and sandalwood'
    },
    {
      name: 'Citrus Noir',
      category: 'Fresh Citrus',
      gender: 'Male',
      rating: 4.6,
      price: '$165',
      description: 'Vibrant bergamot meets dark leather and musk'
    },
    {
      name: 'Gold Saffron',
      category: 'Spicy Oriental',
      gender: 'Both',
      rating: 5.0,
      price: '$240',
      description: 'Luxurious saffron infused with warm incense'
    },
    {
      name: 'Ocean Breeze',
      category: 'Aquatic Fresh',
      gender: 'Male',
      rating: 4.7,
      price: '$155',
      description: 'Marine notes with crisp sea salt and driftwood'
    },
    {
      name: 'Royal Musk',
      category: 'Musky Floral',
      gender: 'Female',
      rating: 4.8,
      price: '$195',
      description: 'White musk layered with jasmine and patchouli'
    }
  ];

  return (
    <section className="py-24 px-6 relative bg-black text-white overflow-hidden">
      {/* Elegant Gold Mandala Background with Dark Overlay */}
      <div className=" inset-0 z-0">
        <div 
          className="w-full h-full bg-cover bg-center bg-fixed bg-black"
        style={{
            backgroundImage:
              "url('https://images.fineartamerica.com/images/artworkimages/mediumlarge/3/seamless-minimal-black-abstract-glossy-soft-waves-background-texture-elegant-wavy-carved-marble-luxury-wallpaper-pattern-tileable-subtle-dark-grey-presentation-or-display-backdrop-3d-rendering-n-akkash.jpg')",
          }}
        />
        <div className="absolute inset-0 bg-black/70" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 py-16 px-8">
        <div className="max-w-7xl mx-auto">
          <motion.h1 
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-5xl md:text-7xl font-extrabold text-white text-center mb-20 tracking-tight drop-shadow-2xl"
          >
            Luxury Fragrance Collection
          </motion.h1>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-12">
            {productImages.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.15 }}
                onHoverStart={() => setHoveredIndex(index)}
                onHoverEnd={() => setHoveredIndex(null)}
                className="group relative overflow-hidden shadow-2xl cursor-pointer border border-gray-400"
              >
                {/* Consistent Card Height */}
                <div className="relative h-[400px] md:h-[400px] w-full">
                  {/* Perfume Image */}
                  <img
                    src={image}
                    alt={productDetails[index].name}
                    className={`absolute inset-0 w-full h-full object-cover object-center transition-all duration-1000 ease-out ${
                      hoveredIndex === index ? ' blur-md' : 'blur-0'
                    } `}
                  />
                  
                  {/* Default Subtle Overlay | Hover: Stronger Blur + Dark Overlay */}
                  <div 
                    className={`absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20 transition-all duration-700 ${
                      hoveredIndex === index ? 'from-black/90 via-black/60 to-black/40 backdrop-blur-sm' : ''
                    }`}
                  />

                  {/* Details Panel - Fade & Slide Up on Hover */}
                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ 
                      opacity: hoveredIndex === index ? 1 : 0,
                      y: hoveredIndex === index ? 0 : 50
                    }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="absolute inset-0 flex flex-col justify-end p-10 text-white pointer-events-none"
                  >
                    <div className="space-y-4 backdrop-blur-md bg-black/40 rounded-2xl p-6 border border-gray-500">
                      <p className="text-sm font-semibold text-white uppercase tracking-widest">
                        {productDetails[index].category} • {productDetails[index].gender === 'Both' ? 'Unisex' : productDetails[index].gender}
                      </p>
                      <h3 className="text-3xl md:text-4xl font-extrabold drop-shadow-2xl">
                        {productDetails[index].name}
                      </h3>

                      {/* Rating Added Here */}
                      <div className="flex items-center gap-2">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            size={20}
                            className={i < Math.floor(productDetails[index].rating) 
                              ? "fill-white text-white" 
                              : "text-gray-500"}
                          />
                        ))}
                        <span className="text-gray-200 ml-1">({productDetails[index].rating})</span>
                      </div>

                      <p className="text-gray-200 text-base leading-relaxed max-w-md">
                        {productDetails[index].description}
                      </p>
                      <div className="flex items-center flex-wrap justify-between pt-6">
                        <span className="text-3xl md:text-4xl font-bold text-white drop-shadow-xl">
                          {productDetails[index].price}
                        </span>
                        <button className="bg-white hover:bg-black-500 rounded-md text-black px-8 py-3  font-bold text-sm uppercase tracking-wider transition-all duration-300 shadow-lg pointer-events-auto hover:scale-105">
                          View Details
                        </button>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};