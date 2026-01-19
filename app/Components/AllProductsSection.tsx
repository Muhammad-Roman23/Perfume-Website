"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Star, Filter, X, SlidersHorizontal } from "lucide-react";
import Image from "next/image";
import { api } from "../apiBase/axios";

export const AllProductsSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [showFilterModal, setShowFilterModal] = useState(false);
  const [data, setdata] = useState([])
const getApiData = async() => {
 try{

  const response = await api.get("product/get")

  console.log(response)
  setdata(response.data.data)

}
catch(error:any){
  console.log("error");
  
}
}

useEffect(()=>{
  getApiData()
},[])



  // const products = [
  //   { name: "Velvet Oud", category: "Floral Oriental", gender: "Female", rating: 4.8, price: 185, image: "https://thumbs.dreamstime.com/b/elegant-black-perfume-bottle-display-luxurious-design-elegant-black-perfume-bottle-display-luxurious-design-studio-setting-close-370609572.jpg", description: "An enchanting fusion of Turkish rose petals and deep oud, creating a luxurious floral-oriental signature." },
  //   { name: "Midnight Amber", category: "Woody Spicy", gender: "Both", rating: 4.9, price: 210, image: "https://thumbs.dreamstime.com/b/elegant-black-gold-perfume-bottle-dark-surface-luxurious-rectangular-accents-sits-polished-reflecting-light-400606970.jpg", description: "Warm amber blended with vanilla and sandalwood for an addictive evening scent." },
  //   { name: "Citrus Noir", category: "Fresh Citrus", gender: "Male", rating: 4.6, price: 165, image: "https://thumbs.dreamstime.com/b/glass-perfume-bottle-golden-liquid-inside-background-dark-smoky-creating-mysterious-atmosphere-387814660.jpg", description: "Explosive bergamot and lemon balanced with dark musk and leather." }
  // ];

  return (
    <section className="py-24 px-6 relative bg-black text-white overflow-hidden">
      <div className="relative z-10 py-16 md:px-8 max-w-7xl mx-auto">
        <motion.h1 initial={{ opacity: 0, y: -40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} className="text-5xl md:text-7xl font-extrabold text-center mb-20">Luxury Fragrance Collection</motion.h1>

        {/* TOP BAR (UI ONLY) */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-20 gap-6">
          <p className="text-white font-semibold text-lg"> products.length Products</p>
          <div className="flex items-center gap-4">
            <div className="relative text-black">
              <select className="appearance-none bg-white/10 backdrop-blur border border-gray-600 text-white px-6 py-3 pr-10 rounded-lg focus:outline-none cursor-pointer">
                <option>Price: Low → High</option>
                <option>Price: High → Low</option>
                <option>Best Rating</option>
              </select>
              <SlidersHorizontal className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
            </div>
            <button onClick={() => setShowFilterModal(true)} className="flex items-center gap-2 bg-white/10 backdrop-blur border border-gray-600 hover:border-amber-500 px-6 py-3 rounded-lg transition">
              <Filter size={20} /> <span>Filters</span>
            </button>
          </div>
        </div>

        {/* PRODUCTS GRID WITH SAME HOVER UI */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-12">
          {data.map((product:any, index:any) => (
            <motion.div key={index} initial={{ opacity: 0, y: 60 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: index * 0.15 }} onHoverStart={() => setHoveredIndex(index)} onHoverEnd={() => setHoveredIndex(null)} className="group relative overflow-hidden rounded-2xl shadow-2xl cursor-pointer border border-gray-400 h-[500px]">
              <div className="relative h-full w-full">
                <Image src={product.cover_images} alt={product.product_name} fill className={`absolute inset-0 w-full h-full object-cover transition-all duration-1000 ${hoveredIndex === index ? "blur-md scale-110" : "scale-100"}`} />
                <div className={`absolute inset-0 bg-black/60 transition-opacity duration-700 ${hoveredIndex === index ? "opacity-100" : "opacity-0"}`} />

                <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: hoveredIndex === index ? 1 : 0, scale: hoveredIndex === index ? 1 : 0.95, translateY: "-40px" }} transition={{ duration: 0.6 }} className="absolute inset-0 flex items-center justify-center px-4 md:p-8 pointer-events-none">
                  <div className="w-full max-w-md space-y-6 backdrop-blur-lg bg-black/60 rounded-2xl p-8 border border-gray-600 text-center">
                    <p className="text-sm uppercase tracking-widest text-gray-300">{product.category} • {product.gender === "Both" ? "Unisex" : product.gender}</p>
                    <h3 className="text-4xl font-extrabold">{product.product_name}</h3>
                    <div className="flex justify-center gap-2">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={22} className={i < Math.floor(product.rating) ? "fill-white text-white" : "text-gray-600"} />
                      ))}
                      <span className="text-gray-300">({product.rating})</span>
                    </div>
                    <p className="text-gray-200 line-clamp-2">{product.description}</p>
                    <span className="text-4xl font-bold">${product.price}</span>
                  </div>
                </motion.div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <button className="w-full bg-white text-black py-4 font-bold rounded-xl hover:bg-amber-400 transition">View Details</button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* FILTER MODAL (UI ONLY – NO LOGIC) */}
      {showFilterModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md px-4">
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="bg-black border border-gray-800 rounded-2xl max-w-2xl w-full p-8 relative">
            <button onClick={() => setShowFilterModal(false)} className="absolute top-4 right-4 text-gray-500 hover:text-white transition"><X size={28} /></button>
            <h2 className="text-3xl font-bold mb-6 text-white">Filters</h2>
            <p className="text-gray-400">Filter UI only – logic will be added later.</p>
          </motion.div>
        </div>
      )}
    </section>
  );
};
