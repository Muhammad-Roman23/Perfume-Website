  "use client";

  // components/OurStorySection.tsx

  import Link from "next/link";
  import { motion } from "framer-motion";

  export default function OurStorySection() {
    return (
      <motion.section
        className="relative w-full py-20 md:py-32 bg-white overflow-hidden"
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        viewport={{ once: false }}
      >
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Side: Content + CTA */}
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: false }}
            >
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 tracking-wide">
                Our Story
              </h2>

              <div className="space-y-6 text-lg md:text-xl text-gray-700 leading-relaxed">
                <p>
                  Our journey began with a simple belief: fragrance is not just a scent, it’s an identity.
                </p>

                <p>
                  Founded with an unwavering passion for perfumes, we started from a small studio dedicated to exploring the art of scent-making. 
                  What drives us is the magic of how a single fragrance can evoke memories, boost confidence, and define moments.
                </p>

                <p>
                  Inspired by the luxury of timeless classics, the purity of nature’s finest ingredients, and the energy of modern lifestyles, 
                  we craft each perfume to feel personal, powerful, and refined.
                </p>

                <p className="text-xl font-light italic text-gray-800">
                  Today, we continue to blend tradition with innovation — bringing you scents that are more than perfume; 
                  they are an extension of who you are.
                </p>
              </div>

              {/* CTA Button */}
              <div className="pt-6">
                <Link
                  href="/products"
                  className="inline-block px-10 py-4 bg-black text-white font-bold text-xl rounded-2xl"
                >
                  Explore Our Collrction
                </Link>
              </div>
            </motion.div>

            {/* Right Side: 4 Circular Background Images */}
            <motion.div
              className="relative h-[500px] md:h-[600px] lg:h-[700px]"
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9, ease: "easeOut" }}
              viewport={{ once: false }}
            >
              {/* Circle 1 - Top Left */}
              <motion.div
                className="absolute top-0 left-10 w-64 h-64 md:w-80 md:h-80 rounded-full shadow-2xl border-8 border-white bg-cover bg-center bg-no-repeat"
                style={{
                  backgroundImage: `url('https://thumbs.dreamstime.com/b/elegant-perfume-bottle-minimalist-design-clear-glass-fragrance-luxury-aroma-isolated-white-background-delicate-elegant-385711445.jpg')`,
                }}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: false }}
              />

              {/* Circle 2 - Top Right */}
              <motion.div
                className="absolute top-20 right-0 w-56 h-56 md:w-72 md:h-72 rounded-full shadow-2xl border-8 border-white bg-cover bg-center bg-no-repeat"
                style={{
                  backgroundImage: `url('https://thumbs.dreamstime.com/b/sleek-perfume-bottle-minimalist-white-background-elegant-clear-glass-silver-cap-subtle-gradient-label-captivating-368519817.jpg')`,
                }}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: false }}
              />

              {/* Circle 3 - Bottom Left */}
              <motion.div
                className="absolute bottom-10 left-0 w-60 h-60 md:w-80 md:h-80 rounded-full shadow-2xl border-8 border-white bg-cover bg-center bg-no-repeat"
                style={{
                  backgroundImage: `url('https://thumbs.dreamstime.com/b/elegant-clear-glass-perfume-bottle-square-cap-white-surface-plant-shadows-minimalist-luxury-design-transparent-shiny-398464592.jpg')`,
                }}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: false }}
              />

              {/* Circle 4 - Bottom Right */}
              <motion.div
                className="absolute bottom-0 right-10 w-64 h-64 md:w-80 md:h-80 rounded-full shadow-2xl border-8 border-white bg-cover bg-center bg-no-repeat"
                style={{
                  backgroundImage: `url('https://thumbs.dreamstime.com/b/elegant-glass-perfume-bottle-luxurious-golden-cap-perfectly-captured-against-clean-white-background-exuding-410571749.jpg')`,
                }}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.9 }}
                viewport={{ once: false }}
              />
            </motion.div>

          </div>
        </div>
      </motion.section>
    );
  }
