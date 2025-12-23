"use client";

import { motion } from "framer-motion";
import { Mail } from "lucide-react";

export default function NewsletterSection() {
  return (
    <section className="py-28 px-6 relative bg-white overflow-hidden">
      {/* Very subtle light luxury background texture */}
      <div
        className="absolute inset-0 opacity-10 bg-cover bg-center"
    style={{
          backgroundImage:
            "url('https://thumbs.dreamstime.com/b/white-marble-texture-background-natural-gray-veins-smooth-stone-surface-pattern-luxury-interior-design-material-elegant-342895729.jpg')",
        }}
      />

      <div className="max-w-4xl mx-auto relative z-10 text-center">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6">
            Stay Updated with New Releases
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto font-light">
            Get exclusive updates on new perfumes, limited editions, and special offers delivered straight to your inbox.
          </p>
        </motion.div>

        {/* Email Subscription Form */}
        <motion.form
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          onSubmit={(e) => e.preventDefault()}
          className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto items-center justify-center"
        >
          <div className="relative w-full sm:w-auto flex-1">
            <Mail className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400" size={24} />
            <input
              type="email"
              placeholder="Enter your email address"
              required
              className="w-full pl-14 pr-6 py-4 text-lg bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:border-black focus:bg-white transition-all duration-300 shadow-inner"
            />
          </div>

          <button
            type="submit"
            className="w-full sm:w-auto px-8 py-4 cursor-pointer bg-black text-white font-bold text-lg rounded-2xl "
          >
            Subscribe Now
          </button>
        </motion.form>

        {/* Trust Note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-8 text-sm text-gray-500"
        >
          We respect your privacy. Unsubscribe at any time.
        </motion.p>
      </div>
    </section>
  );
}