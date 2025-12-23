  'use client'
  import React, { useState } from 'react';
  import { motion } from 'framer-motion';
  import { Star } from 'lucide-react'; // Make sure lucide-react is installed

  export const FeaturedProducts = () => {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    // Premium black & gold luxury perfume bottle images (high-quality, dark theme)
    const productImages = [
    'https://thumbs.dreamstime.com/b/elegant-black-perfume-bottle-display-luxurious-design-elegant-black-perfume-bottle-display-luxurious-design-studio-setting-close-370609572.jpg',
    'https://thumbs.dreamstime.com/b/expensive-luxury-black-gold-background-cosmetics-cosmetic-bottles-marble-elegant-premium-cream-template-ai-generated-351877705.jpg',
    'https://thumbs.dreamstime.com/b/close-up-elegant-perfume-bottle-surrounded-mist-dark-background-ai-generated-close-up-elegant-perfume-321357162.jpg',
    'https://thumbs.dreamstime.com/b/soft-light-beautifully-reflected-perfume-bottle-golden-black-color-381640112.jpg',
    'https://static.vecteezy.com/system/resources/thumbnails/071/917/995/small/luxury-perfume-bottle-with-black-cap-and-gold-collar-elegant-fragrance-studio-shot-photo.jpg',
    'https://img.freepik.com/premium-photo/perfume-bottle-black-gold-elegance-generative-ai_431161-17493.jpg',
    
    ];

    const productDetails = [
      { name: 'Velvet Oud', category: 'Floral Oriental', gender: 'Female', rating: 4.8, price: '$185', description: 'A captivating blend of Turkish rose and rare oud wood, enriched with saffron threads, ambergris, and subtle vanilla undertones. This intoxicating fragrance creates a luxurious, long-lasting trail that evokes mystery, elegance, and timeless sophistication.' },
      { name: 'Midnight Amber', category: 'Woody Spicy', gender: 'Both', rating: 4.9, price: '$210', description: 'Deep resonant amber notes intertwined with Madagascar vanilla, sandalwood cream, black pepper, and sacred incense. Warm, seductive, and enveloping – perfect for evening wear and intimate moments.' },
      { name: 'Citrus Noir', category: 'Fresh Citrus', gender: 'Male', rating: 4.6, price: '$165', description: 'Vibrant Italian bergamot, Sicilian lemon zest, and pink grapefruit burst open into a heart of dark leather accord, Haitian vetiver, and black musk. A bold contrast between sparkling freshness and masculine depth.' },
      { name: 'Gold Saffron', category: 'Spicy Oriental', gender: 'Both', rating: 5.0, price: '$240', description: 'Opulent Persian saffron blended with Damascus rose absolute, warm frankincense, patchouli noir, and Cambodian oud. An extravagant royal scent that radiates power, luxury, and unmatched elegance.' },
      { name: 'Ocean Breeze', category: 'Aquatic Fresh', gender: 'Male', rating: 4.7, price: '$155', description: 'Crisp marine accords fused with Atlantic sea salt, driftwood, pink grapefruit, and fresh mint leaves. Evokes the invigorating feeling of standing on a coastal cliff with the ocean wind in your face.' },
      { name: 'Royal Musk', category: 'Musky Floral', gender: 'Female', rating: 4.8, price: '$195', description: 'Pure white musk layered with jasmine sambac absolute, ylang-ylang extra, dark patchouli, and creamy tonka bean. Soft, sensual, addictive, and leaves an unforgettable skin-scent trail.' },
     
    ];
    return (
       <section className="py-24 px-6 relative bg-black text-white overflow-hidden">
            <div className="absolute inset-0 z-0">
              <div 
                className="w-full h-full bg-cover bg-center bg-fixed bg-black"
                style={{
                  backgroundImage:
                    "url('https://images.fineartamerica.com/images/artworkimages/mediumlarge/3/seamless-minimal-black-abstract-glossy-soft-waves-background-texture-elegant-wavy-carved-marble-luxury-wallpaper-pattern-tileable-subtle-dark-grey-presentation-or-display-backdrop-3d-rendering-n-akkash.jpg')",
                }}
              />
              <div className="absolute inset-0 bg-black/70" />
            </div>
      
            <div className="relative z-10 py-16 md:px-8">
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
                      className="group relative overflow-hidden rounded-2xl shadow-2xl cursor-pointer border border-gray-400 h-[500px]" // increased height slightly for better centering
                    >
                      <div className="relative h-full w-full">
                        <img
                          src={image}
                          alt={productDetails[index].name}
                          className={`absolute inset-0 w-full h-full object-cover object-center transition-all duration-1000 ease-out ${
                            hoveredIndex === index ? 'blur-md scale-110' : 'blur-0 scale-100'
                          }`}
                        />
      
                        {/* Dark overlay on hover */}
                        <div 
                          className={`absolute inset-0 bg-black/60 transition-opacity duration-700 ${
                            hoveredIndex === index ? 'opacity-100' : 'opacity-0'
                          }`}
                        />
      
                        {/* Centered Details Panel on Hover */}
                        <motion.div
                          initial={{ opacity: 0, scale: 0.95 }}
                          animate={{ 
                            opacity: hoveredIndex === index ? 1 : 0,
                            scale: hoveredIndex === index ? 1 : 0.95,
                            translateY:" -40px "
                          }}
                          transition={{ duration: 0.6, ease: "easeOut" }}
                          className="absolute inset-0 flex items-center justify-center px-4 md:p-8 pointer-events-none"
                        >
                          <div className="w-full max-w-md space-y-6 backdrop-blur-lg bg-black/60 rounded-2xl p-8 border border-gray-600">
                            <div className="space-y-4 text-center">
                              <p className="text-sm font-semibold uppercase tracking-widest text-gray-300">
                                {productDetails[index].category} • {productDetails[index].gender === 'Both' ? 'Unisex' : productDetails[index].gender}
                              </p>
                              <h3 className="text-4xl font-extrabold drop-shadow-2xl">
                                {productDetails[index].name}
                              </h3>
      
                              <div className="flex items-center justify-center gap-2">
                                {[...Array(5)].map((_, i) => (
                                  <Star
                                    key={i}
                                    size={22}
                                    className={i < Math.floor(productDetails[index].rating) 
                                      ? "fill-white text-white" 
                                      : "text-gray-600"}
                                  />
                                ))}
                                <span className="text-gray-300 ml-2">({productDetails[index].rating})</span>
                              </div>
      
                              <p className="text-gray-200 text-base leading-relaxed line-clamp-2">
                                {productDetails[index].description}
                              </p>
      
                              <div className="pt-4">
                                <span className="text-4xl font-bold text-white">
                                  {productDetails[index].price}
                                </span>
                              </div>
                            </div>
                          </div>
                        </motion.div>
      
                        {/* Full Width View Details Button at Bottom */}
                        <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-0">
                          <button className="w-full bg-white text-black py-4 font-bold text-lg uppercase tracking-wider rounded-xl shadow-2xl transition-all duration-300 hover:bg-amber-400 hover:scale-105 pointer-events-auto">
                            View Details
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </section>
    );
  };