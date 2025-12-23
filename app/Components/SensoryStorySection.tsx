"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function SensoryStorySection() {
  return (
    <section className="py-32 px-6 relative bg-white overflow-hidden">
      {/* Subtle white marble texture */}
      <div
        className="absolute inset-0 opacity-25 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://thumbs.dreamstime.com/b/white-marble-texture-background-natural-gray-veins-smooth-stone-surface-pattern-luxury-interior-design-material-elegant-342895729.jpg')",
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: 3 Images in Custom Layout */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8"
          >
            {/* Tall Image (full height) */}
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://thumbs.dreamstime.com/b/mysterious-perfume-bottle-dramatic-impact-scene-dramatic-cinematic-d-render-sleek-black-perfume-bottle-412375985.jpg"
                alt="AURA Signature Bottle"
                width={600}
                height={1200}
                className="object-cover w-full h-full hover:scale-105 transition-transform duration-1000"
              />
            </div>

            {/* Two Smaller Images (stacked, equal to tall image height) */}
            <div className="grid grid-rows-2 gap-8">
              <div className="rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="https://thumbs.dreamstime.com/b/luxury-dark-perfume-bottle-elegant-texture-dramatic-lighting-black-table-luxurious-textured-surface-shown-398748408.jpg"
                  alt="AURA in Dramatic Light"
                  width={600}
                  height={600}
                  className="object-cover w-full h-full hover:scale-105 transition-transform duration-1000"
                />
              </div>
              <div className="rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="https://img.freepik.com/premium-photo/beautiful-perfume-bottle-black-marble-background_74656-929.jpg"
                  alt="AURA on Marble"
                  width={600}
                  height={600}
                  className="object-cover w-full h-full hover:scale-105 transition-transform duration-1000"
                />
              </div>
            </div>
          </motion.div>

          {/* Right: Emotional + Sensory Text */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
            className="space-y-10"
          >
            <h2 className="text-5xl md:text-6xl font-extrabold tracking-tight">
              Feel the Essence
            </h2>

            <div className="space-y-8 text-lg text-gray-700 leading-relaxed font-light">
              <p>
                Close your eyes and breathe in. The first moment brings crisp freshness – like cool mountain air brushing against your skin. Then warmth arrives: deep leather, smoked oud and a soft trace of spiced amber unfold slowly, wrapping you in quiet confidence.
              </p>

              <p>
                This is not merely a scent. It is presence that lingers, a subtle statement that speaks before words are needed. AURA captures the essence of the modern man – refined, powerful and unforgettable.
              </p>
            </div>
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.9, delay: 0.2 }}
                className=""
        >
          <a
            href="#contact"
            className="inline-block px-8 py-4 bg-black text-white font-bold text-xl rounded-2xl  "
          >
            Contact Now
          </a>
        </motion.div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}