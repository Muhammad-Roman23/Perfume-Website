"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function AboutAndSocialSections() {
  return (
    <>
      {/* Section 7 – Brand Story / About Section */}
      <section className="py-32 px-6 relative bg-white overflow-hidden">
        {/* Subtle visible white marble texture */}
        <div
          className="absolute inset-0 opacity-30 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://thumbs.dreamstime.com/b/white-marble-texture-background-natural-gray-veins-smooth-stone-surface-pattern-luxury-interior-design-material-elegant-342895729.jpg')",
          }}
        />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9 }}
            >
              <h2 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-8">
                The AURA Philosophy
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                AURA is more than a fragrance — it's an essence of timeless masculinity. Founded on the belief that true luxury lies in simplicity and depth, we craft each cologne with meticulously sourced premium ingredients, blending bold notes that evolve with confidence throughout the day.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our philosophy celebrates the modern gentleman: refined, powerful, and unapologetically authentic. Every bottle embodies craftsmanship, sustainability, and the art of leaving a lasting impression.
              </p>
               <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.9, delay: 0.6 }}
                className=" mt-10"
        >
        <Link
          href="/contact"
          className="inline-block px-8 py-4 bg-black text-white font-bold text-xl rounded-2xl hover:bg-gray-800 transition-all duration-500"
        >
          Contact Now
        </Link>
        </motion.div>
            </motion.div>

            {/* Premium Images Grid for Visual Feel */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9 }}
              className="grid grid-cols-2 gap-8"
            >
 

<div className="rounded-3xl overflow-hidden shadow-2xl">
  <Image
    src="https://img.freepik.com/premium-photo/beautiful-perfume-bottle-black-marble-background_74656-929.jpg"
    alt="AURA Luxury Perfume Bottle"
    width={600}
    height={800}
    className="object-cover w-full h-full hover:scale-110 transition-transform duration-700"
  />
</div>

<div className="rounded-3xl overflow-hidden shadow-2xl -mt-16">
  <Image
    src="https://thumbs.dreamstime.com/b/black-perfume-bottle-marble-surface-suitable-wide-range-uses-354853099.jpg"
    alt="AURA Cologne on Marble"
    width={600}
    height={800}
    className="object-cover w-full h-full hover:scale-110 transition-transform duration-700"
  />
</div>

<div className="rounded-3xl overflow-hidden shadow-2xl">
  <Image
    src="https://thumbs.dreamstime.com/b/luxury-dark-perfume-bottle-elegant-texture-dramatic-lighting-black-table-luxurious-textured-surface-shown-398748408.jpg"
    alt="Dark Luxury AURA Bottle"
    width={600}
    height={800}
    className="object-cover w-full h-full hover:scale-110 transition-transform duration-700"
  />
</div>

<div className="rounded-3xl overflow-hidden shadow-2xl">
  <Image
    src="https://www.shutterstock.com/image-photo/luxury-mens-perfume-bottle-on-600nw-2456359291.jpg"
    alt="Men's Premium Cologne"
    width={600}
    height={800}
    className="object-cover w-full h-full hover:scale-110 transition-transform duration-700"
  />
</div>

            </motion.div>
          </div>
        </div>
      </section>

 
   
    </>
  );
}