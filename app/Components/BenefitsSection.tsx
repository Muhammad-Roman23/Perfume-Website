"use client";

import { motion } from "framer-motion";
import { Clock, Sparkles, Leaf, Package } from "lucide-react";
import Link from "next/link";

export default function BenefitsSection() {
  const benefits = [
    {
      icon: Sparkles,
      title: "Premium Ingredients",
      description: "Hand-selected rare essences and finest natural oils from around the world",
    },
    {
      icon: Clock,
      title: "Long-Lasting Fragrance",
      description: "Expertly crafted formulas that linger beautifully throughout the day",
    },
    {
      icon: Leaf,
      title: "Eco-Friendly Packaging",
      description: "Sustainable, recyclable materials with minimal environmental impact",
    },
    {
      icon: Package,
      title: "Luxury Craftsmanship",
      description: "Every bottle is designed and assembled with meticulous attention to detail",
    },
  ];

  return (
    <section className="py-24 px-6 relative bg-white text-black overflow-hidden">
      {/* Subtle perfume-related white marble texture background (luxury perfume bottle on marble vibe) */}
      <div
        className="absolute inset-0 opacity-12 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://thumbs.dreamstime.com/b/elegant-glass-perfume-bottle-gold-cap-marble-surface-stunning-golden-elegantly-placed-image-captures-luxury-375034846.jpg')",
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-20"
        >
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="text-5xl md:text-6xl font-extrabold tracking-tight mb-6"
          >
            Why Choose <span className="text-black">Us</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.4 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto font-light"
          >
            Experience the difference of true luxury perfumery — where quality meets conscience
          </motion.p>
        </motion.div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{
                duration: 0.8,
                delay: index * 0.15,
                ease: "easeOut",
              }}
              className="group relative bg-white border border-gray-200 rounded-3xl p-10 text-center transition-all duration-700 hover:shadow-2xl hover:border-black/30 hover:-translate-y-4"
            >
              <motion.div
                initial={{ scale: 0.8 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: index * 0.15 + 0.3 }}
                className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-black text-white mb-8 transition-all duration-500 group-hover:scale-110"
              >
                <benefit.icon size={36} />
              </motion.div>

              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 + 0.5, duration: 0.7 }}
                className="text-2xl font-bold mb-5 tracking-tight"
              >
                {benefit.title}
              </motion.p>

              <motion.p 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 + 0.6, duration: 0.7 }}
                className="text-gray-600 leading-relaxed text-base"
              >
                {benefit.description}
              </motion.p>

              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-1 bg-black rounded-full group-hover:w-24 transition-all duration-700" />
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9, delay: 0.6 }}
          className="text-center mt-10"
        >
        <Link
          href="/contact"
          className="inline-block px-10 py-4 bg-black text-white font-bold text-xl rounded-2xl"
        >
          Contact Now
        </Link>
        </motion.div>
      </div>
    </section>
  );
}