"use client";
import Link from "next/link";
import { motion } from "framer-motion";

export default function CompareHeroSection() {
  return (
    <section className="relative w-full overflow-hidden bg-black">
      {/* Static Premium background pattern */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/bannerphoto.png')", opacity: 0.49 }}
      />

      {/* Overlay for contrast */}
      <div className="absolute inset-0 bg-black/40" />

      <div className="relative z-10 max-w-7xl mx-auto px-8 py-20 md:py-32 flex items-center justify-center min-h-screen">
        <motion.div
          className="text-center text-white space-y-8 max-w-4xl"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: false }}
        >
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-tight">
            Compare <span className="text-gray-300">Our Perfumes</span>
          </h1>

          <motion.p
            className="text-lg md:text-xl text-gray-300 leading-relaxed mx-auto"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: false }}
          >
            Easily compare your favorite fragrances side by side. Check notes, intensity, and longevity to find the perfect scent that matches your style.
          </motion.p>

          <motion.p
            className="text-md md:text-lg text-gray-400 mx-auto max-w-2xl"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
            viewport={{ once: false }}
          >
            Make informed choices with detailed comparisons of premium handcrafted perfumes.
          </motion.p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
              viewport={{ once: false }}
            >
              <Link
                href="/products"
                className="inline-block px-10 py-3 bg-white text-black font-bold text-lg rounded-2xl hover:bg-gray-300 transition"
              >
                Shop All Fragrances
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
              viewport={{ once: false }}
            >
              <Link
                href="/products"
                className="inline-block px-10 py-3 border-2 rounded-2xl border-gray-300 text-gray-300 hover:bg-gray-300 hover:text-black transition"
              >
                View Best Sellers
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
