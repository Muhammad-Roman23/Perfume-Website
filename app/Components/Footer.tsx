"use client";

import { motion } from "framer-motion";
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  const footerLinks = {
    Company: ["About Us", "Our Story", "Careers", "Press"],
    Customer: ["Contact Us", "Shipping Info", "Returns & Exchanges", "FAQ"],
    Legal: ["Privacy Policy", "Terms of Service", "Cookie Policy", "Legal Notice"],
  };

  return (
    <footer className="relative bg-black text-white overflow-hidden">
      {/* Subtle dark luxury texture background */}
      <div
        className="absolute inset-0 opacity-15 bg-cover bg-center"
        // style={{
        //   backgroundImage:
        //     "url('https://images.fineartamerica.com/images/artworkimages/mediumlarge/3/seamless-minimal-black-abstract-glossy-soft-waves-background-texture-elegant-wavy-carved-marble-luxury-wallpaper-pattern-tileable-subtle-dark-grey-presentation-or-display-backdrop-3d-rendering-n-akkash.jpg')",
        // }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-4xl font-extrabold tracking-tight mb-6">AURA</h3>
            <p className="text-gray-400 leading-relaxed mb-8">
              Premium men's fragrances crafted with passion, precision, and the finest ingredients. Elevate your presence.
            </p>

            {/* Social Icons */}
            <div className="flex gap-6">
              <a
                href="#"
                className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center hover:bg-white/20 transition-all duration-500 hover:scale-110"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center hover:bg-white/20 transition-all duration-500 hover:scale-110"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center hover:bg-white/20 transition-all duration-500 hover:scale-110"
              >
                <Twitter size={20} />
              </a>
            </div>
          </motion.div>

          {/* Links Columns */}
          {Object.entries(footerLinks).map(([category, links], idx) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: (idx + 1) * 0.15 }}
            >
              <p className="text-lg font-bold uppercase tracking-wider mb-6 text-gray-300">
                {category}
              </p>
              <ul className="space-y-4">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-white transition-colors duration-300"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}

          {/* Contact Info Column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <h4 className="text-lg font-bold uppercase tracking-wider mb-6 text-gray-300">
              Contact Us
            </h4>
            <div className="space-y-5 text-gray-400">
              <div className="flex items-center gap-4">
                <Mail size={20} />
                <span>hello@aurafragrances.com</span>
              </div>
              <div className="flex items-center gap-4">
                <Phone size={20} />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-4">
                <MapPin size={20} />
                <span>New York, NY 10001<br />United States</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="py-5 border-t border-white/10 text-center text-gray-500 text-sm"
        >
          <p>&copy; {new Date().getFullYear()} AURA Fragrances. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
}