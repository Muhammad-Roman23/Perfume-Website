"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: "Home", href: "/" },
    { name: "Products", href: "/products" },
    { name: "Services", href: "#" },
    { name: "Portfolio", href: "#" },
    { name: "Contact", href: "#" },
  ];

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 bg-black border-b border-gray-800"
    >
      <div className="max-w-7xl mx-auto px-6 py-5">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="text-xl font-black text-white transition-colors duration-300"
          >
            YourBrand
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center justify-center flex-1">
            <ul className="flex space-x-12">
              {menuItems.map((item, index) => (
                <motion.li
                  key={item.name}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 + 0.3 }}
                >
                  <Link
                    href={item.href}
                    className="relative text-white font-medium text-base tracking-wider pb-2 after:absolute after:left-0 after:bottom-0 after:w-full after:h-0.5 after:bg-white after:origin-left after:scale-x-0 after:transition-transform after:duration-300 hover:after:scale-x-100"
                  >
                    {item.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Get Started Button + Hamburger */}
          <div className="flex items-center gap-6">
            {/* Get Started Button - Pure Tailwind Hover Swap Effect */}
            <div className="hidden md:block">
              <Link
                href="#"
                className="group relative inline-flex items-center justify-center px-9 py-3 bg-white text-black font-bold text-sm rounded-2xl overflow-hidden transition-all duration-700"
              >
                {/* Background Shift */}

                {/* Text - Hover pe right shift */}
                <span className="relative z-10 flex items-center   -translate-x-2 transition-transform duration-700 group-hover:translate-x-4">
                  Get Started
                </span>

                {/* Arrow - Hover pe left shift (text ki jagah aata hai) */}
                <span className="absolute z-10 flex items-center transition-transform duration-700 translate-x-12 group-hover:-translate-x-10">
                  <ArrowRight size={18} />
                </span>
              </Link>
            </div>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden text-white hover:text-gray-300 transition"
            >
              {isOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4 }}
            className="lg:hidden overflow-hidden"
          >
            <div className="mt-8 pb-6 border-t border-gray-800 pt-6">
              <ul className="flex flex-col space-y-5">
                {menuItems.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className="text-white text-text-base font-medium block py-2"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link
                    href="#"
                    onClick={() => setIsOpen(false)}
                    className="inline-flex items-center gap-2 px-6 py-2.5 bg-white text-black font-bold text-sm rounded-2xl"
                  >
                    Get Started
                    <ArrowRight size={18} />
                  </Link>
                </li>
              </ul>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}
