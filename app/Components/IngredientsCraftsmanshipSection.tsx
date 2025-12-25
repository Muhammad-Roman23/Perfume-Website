'use client'
import { motion } from 'framer-motion';

export default function IngredientsCraftsmanshipSection() {
  return (
    <motion.section
      className="relative w-full py-20 md:py-32 bg-white overflow-hidden"
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      viewport={{ once: false }}
    >
      {/* Subtle Light Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-10"
        style={{
          backgroundImage: `url('https://thumbs.dreamstime.com/b/closeup-bottle-perfume-essential-oil-white-background-wooden-spoon-dried-flowers-herbs-aromatic-ingredients-345589420.jpg')`,
        }}
      />

      {/* Optional light overlay */}
      <div className="absolute inset-0 bg-white/80" />

      <div className="relative z-10 max-w-7xl mx-auto px-8">
        {/* Top: Heading and Paragraph */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          viewport={{ once: false }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 tracking-wide">
            Ingredients & Craftsmanship
          </h2>
          <p className="mt-6 text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Our perfumes are created using high-quality fragrance oils and carefully balanced formulations. 
            Each scent goes through multiple refinement stages to ensure smooth projection, longevity, and depth.
          </p>
        </motion.div>

        {/* Bottom: 3 Cards Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "High-Quality Oils",
              desc: "We source only the finest, rare fragrance oils from around the world to create rich, authentic scents that stand the test of time.",
              icon: (
                <svg className="w-10 h-10 text-amber-500 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              )
            },
            {
              title: "Balanced Concentration",
              desc: "Our formulations are perfectly balanced for ideal strength — not too strong, not too weak, ensuring a harmonious and long-lasting wear.",
              icon: (
                <svg className="w-10 h-10 text-amber-500 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
                </svg>
              )
            },
            {
              title: "Careful Blending",
              desc: "Master perfumers blend each ingredient with precision, undergoing multiple refinements to achieve depth, smoothness, and unforgettable character.",
              icon: (
                <svg className="w-10 h-10 text-amber-500 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              )
            }
          ].map((card, index) => (
            <motion.div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition duration-300 border border-gray-100"
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2, ease: "easeOut" }}
              viewport={{ once: false }}
            >
              {card.icon}
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">{card.title}</h3>
              <p className="text-gray-600 leading-relaxed">{card.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
