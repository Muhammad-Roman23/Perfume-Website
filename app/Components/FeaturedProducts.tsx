"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function FeaturedProducts() {
  const products = [
    { id: 1, name: "Noir Essence", price: "$120", tag: "Best Seller" },
    { id: 2, name: "Blanc Mystique", price: "$95", tag: "New" },
    { id: 3, name: "Shadow Bloom", price: "$140", tag: null },
    { id: 4, name: "Pure Midnight", price: "$110", tag: "Best Seller" },
    { id: 5, name: "Lunar Whisper", price: "$105", tag: "New" },
    { id: 6, name: "Eternal Void", price: "$130", tag: null },
  ];

  return (
    <section className="py-20 px-6 bg-black text-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black mb-4">
            Featured Fragrances
          </h2>
          <p className="text-gray-400 text-lg">
            Handpicked masterpieces for the discerning soul
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 lg:gap-12">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -12 }}
              className="group relative bg-white text-black rounded-2xl overflow-hidden shadow-2xl cursor-pointer transition-all duration-500"
            >
              {/* Product Image */}
              <div className="relative h-80 md:h-96 overflow-hidden bg-gray-100">
                <img
                  src={"https://img.freepik.com/premium-photo/mockup-design-perfume-bottle-with-plant-branch-empty-blank-copy-space-wallpaper-bottle-essential-oil-with-herbs-elegant-minimalistic-podium-scene-product-presentation_146482-9328.jpg?uid=R88737050&ga=GA1.1.87635697.1761204883&semt=ais_hybrid&w=740&q=80"}
                  alt={product.name}
                 
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                {/* Tag */}
                {product.tag && (
                  <span className="absolute top-4 left-4 px-4 py-1 bg-black text-white text-xs font-bold uppercase tracking-wider">
                    {product.tag}
                  </span>
                )}
              </div>

              {/* Product Info */}
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold mb-2">{product.name}</h3>
                <p className="text-2xl font-black mb-6">{product.price}</p>

                {/* Quick View Button */}
                <button className="w-full py-3 bg-black text-white font-bold rounded-full hover:bg-gray-800 transition-all duration-300">
                  Quick View
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}