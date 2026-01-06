"use client";
import React, { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Star, Filter, X, SlidersHorizontal } from "lucide-react";
import Image from "next/image";

export const AllProductsSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  // const [hoveredIndex, setHoveredIndex] = useState(null);

  const [showFilterModal, setShowFilterModal] = useState(false);

  // Filter states
  const [selectedGenders, setSelectedGenders] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 10000]);
  const [selectedNotes, setSelectedNotes] = useState<string[]>([]);
  const [selectedSizes, setSelectedSizes] = useState<string[]>([]);
  const [selectedSpecials, setSelectedSpecials] = useState<string[]>([]);

  // Sorting
  const [sortBy, setSortBy] = useState<string>("price-low");

const products = [
  {
    name: "Velvet Oud",
    category: "Floral Oriental",
    gender: "Female",
    rating: 4.8,
    price: 185,
    size: "100ml",
    notes: ["Floral", "Spicy"],
    image: "https://thumbs.dreamstime.com/b/elegant-black-perfume-bottle-display-luxurious-design-elegant-black-perfume-bottle-display-luxurious-design-studio-setting-close-370609572.jpg",
    description: "An enchanting fusion of Turkish rose petals and deep oud, creating a luxurious floral-oriental signature."
  },
  {
    name: "Midnight Amber",
    category: "Woody Spicy",
    gender: "Both",
    rating: 4.9,
    price: 210,
    size: "100ml",
    notes: ["Woody", "Spicy"],
    image: "https://thumbs.dreamstime.com/b/elegant-black-gold-perfume-bottle-dark-surface-luxurious-rectangular-accents-sits-polished-reflecting-light-400606970.jpg",
    description: "Warm amber blended with vanilla and sandalwood for an addictive evening scent."
  },
  {
    name: "Citrus Noir",
    category: "Fresh Citrus",
    gender: "Male",
    rating: 4.6,
    price: 165,
    size: "50ml",
    notes: ["Fresh", "Citrus"],
    image: "https://thumbs.dreamstime.com/b/glass-perfume-bottle-golden-liquid-inside-background-dark-smoky-creating-mysterious-atmosphere-387814660.jpg",
    description: "Explosive bergamot and lemon balanced with dark musk and leather."
  },
  {
    name: "Gold Saffron",
    category: "Spicy Oriental",
    gender: "Both",
    rating: 5.0,
    price: 240,
    size: "100ml",
    notes: ["Spicy"],
    image: "https://thumbs.dreamstime.com/b/luxury-textured-perfume-bottle-golden-cap-smoky-spotlight-scene-stylish-rectangular-accents-dramatic-light-generative-408126859.jpg",
    description: "Persian saffron with incense and oud for a regal oriental aura."
  },
  {
    name: "Ocean Breeze",
    category: "Aquatic Fresh",
    gender: "Male",
    rating: 4.7,
    price: 155,
    size: "100ml",
    notes: ["Fresh"],
    image: "https://thumbs.dreamstime.com/b/expensive-luxury-black-gold-background-cosmetics-cosmetic-bottles-marble-elegant-premium-cream-template-ai-generated-351877705.jpg",
    description: "Marine accords and sea salt capturing the freshness of the ocean."
  },
  {
    name: "Royal Musk",
    category: "Musky Floral",
    gender: "Female",
    rating: 4.8,
    price: 195,
    size: "100ml",
    notes: ["Musky", "Floral"],
    image: "https://thumbs.dreamstime.com/b/soft-light-beautifully-reflected-perfume-bottle-golden-black-color-381640112.jpg",
    description: "White musk wrapped in jasmine and soft rose petals."
  },
  {
    name: "Enchanted Rose",
    category: "Floral",
    gender: "Female",
    rating: 4.9,
    price: 220,
    size: "50ml",
    notes: ["Floral"],
    image: "https://thumbs.dreamstime.com/b/close-up-elegant-perfume-bottle-surrounded-mist-dark-background-ai-generated-close-up-elegant-perfume-321357162.jpg",
    description: "Fresh damask rose blended with fruity undertones."
  },
  {
    name: "Black Leather",
    category: "Leather Woody",
    gender: "Male",
    rating: 4.5,
    price: 190,
    size: "100ml",
    notes: ["Woody"],
    image: "https://www.shutterstock.com/image-photo/image-showcases-luxurious-perfume-bottle-600nw-2569475799.jpg",
    description: "Bold leather with smoky woods and vetiver."
  },
  {
    name: "Vanilla Dream",
    category: "Gourmand",
    gender: "Both",
    rating: 4.8,
    price: 175,
    size: "100ml",
    notes: ["Spicy"],
    image: "https://thumbs.dreamstime.com/b/dark-background-glass-perfume-bottle-gold-cap-placed-featuring-flowing-abstract-golden-ribbon-dark-383172002.jpg",
    description: "Creamy vanilla warmed with caramel and spices."
  },
  {
    name: "Fresh Linen",
    category: "Clean Fresh",
    gender: "Both",
    rating: 4.7,
    price: 140,
    size: "100ml",
    notes: ["Fresh"],
    image: "https://img.freepik.com/premium-photo/perfume-bottle-black-gold-elegance-generative-ai_431161-17493.jpg",
    description: "Clean cotton and aldehydes for everyday freshness."
  },

  {
    name: "Spice Route",
    category: "Spicy Oriental",
    gender: "Male",
    rating: 4.6,
    price: 200,
    size: "100ml",
    notes: ["Spicy", "Woody"],
    image: "https://www.shutterstock.com/image-photo/luxury-bottle-perfume-closeup-on-black-260nw-1257772759.jpg",
    description: "Cardamom and pepper over a warm amber base."
  },
  {
    name: "Jasmine Night",
    category: "Floral",
    gender: "Female",
    rating: 5.0,
    price: 250,
    size: "50ml",
    notes: ["Floral", "Musky"],
    image: "https://thumbs.dreamstime.com/b/black-gold-bottle-emits-sparkly-mist-glitter-luxe-perfume-advertises-scent-elegant-fragrance-ad-suggests-magic-417059174.jpg",
    description: "Intense night-blooming jasmine with creamy sandalwood."
  },
  {
    name: "Cedar Forest",
    category: "Woody",
    gender: "Male",
    rating: 4.7,
    price: 180,
    size: "100ml",
    notes: ["Woody"],
    image: "https://static.vecteezy.com/system/resources/thumbnails/071/917/995/small/luxury-perfume-bottle-with-black-cap-and-gold-collar-elegant-fragrance-studio-shot-photo.jpg",
    description: "Dry cedarwood with earthy moss and pine."
  },
  {
    name: "Peach Blossom",
    category: "Fruity Floral",
    gender: "Female",
    rating: 4.8,
    price: 160,
    size: "100ml",
    notes: ["Floral", "Fresh"],
    image: "https://t3.ftcdn.net/jpg/15/46/84/28/360_F_1546842802_Y9cU8W2bT1SkfjD3kly4lNAl828IUaPt.jpg",
    description: "Juicy peach blended with soft florals."
  },
  {
    name: "Tobacco Vanille",
    category: "Gourmand Woody",
    gender: "Both",
    rating: 4.9,
    price: 230,
    size: "100ml",
    notes: ["Spicy", "Woody"],
    image: "https://www.shutterstock.com/image-photo/need-background-perfume-bottle-poster-600nw-2530096035.jpg",
    description: "Sweet tobacco leaves and creamy vanilla."
  },
  {
    name: "Mediterranean Fig",
    category: "Fruity Fresh",
    gender: "Both",
    rating: 4.6,
    price: 150,
    size: "50ml",
    notes: ["Fresh"],
    image: "https://thumbs.dreamstime.com/b/clear-glass-perfume-bottle-sits-textured-stone-surface-background-dark-highlighting-s-elegant-design-golden-liquid-419127119.jpg",
    description: "Green fig with coconut water and marine notes."
  },
  {
    name: "Oud Imperial",
    category: "Oud Woody",
    gender: "Both",
    rating: 5.0,
    price: 320,
    size: "100ml",
    notes: ["Woody", "Spicy"],
    image: "https://thumbs.dreamstime.com/b/elegant-perfume-bottle-luxurious-golden-background-display-stunning-elegantly-positioned-against-rich-backdrop-highlighting-367386550.jpg",
    description: "Pure oud blended with rose and amber."
  },
  {
    name: "Lavender Fields",
    category: "Aromatic",
    gender: "Male",
    rating: 4.5,
    price: 145,
    size: "100ml",
    notes: ["Fresh"],
    image: "https://thumbs.dreamstime.com/b/luxury-perfume-bottles-mock-up-dark-background-blue-glass-gold-ornaments-premium-fragrance-packaging-design-cosmetic-384980132.jpg",
    description: "Fresh lavender with herbal nuances."
  },
  {
    name: "Cherry Smoke",
    category: "Fruity Gourmand",
    gender: "Female",
    rating: 4.8,
    price: 195,
    size: "50ml",
    notes: ["Spicy"],
    image: "https://t3.ftcdn.net/jpg/13/76/48/16/360_F_1376481664_dlZnlhLEDJ1MEdLODdc03L6wLaB7A9BQ.jpg",
    description: "Dark cherry with smoky vanilla tones."
  },
  {
    name: "Santal Supreme",
    category: "Woody Creamy",
    gender: "Both",
    rating: 4.9,
    price: 215,
    size: "100ml",
    notes: ["Woody"],
    image: "https://png.pngtree.com/thumb_back/fw800/background/20251205/pngtree-elegant-glass-perfume-bottle-with-a-black-cap-and-golden-liquid-image_20740101.webp",
    description: "Creamy sandalwood with cardamom."
  },
  {
    name: "Bergamot Bliss",
    category: "Citrus Aromatic",
    gender: "Both",
    rating: 4.7,
    price: 155,
    size: "100ml",
    notes: ["Citrus", "Fresh"],
    image: "https://png.pngtree.com/background/20230522/original/pngtree-perfume-bottle-in-an-elegant-black-color-stock-photo-picture-image_2687531.jpg",
    description: "Bright bergamot with green tea freshness."
  },
  {
    name: "Rose Oud",
    category: "Floral Oriental",
    gender: "Both",
    rating: 4.9,
    price: 280,
    size: "100ml",
    notes: ["Floral", "Woody"],
    image: "https://t3.ftcdn.net/jpg/16/12/54/48/360_F_1612544818_3avhCBcQ7nzuB0i5McrVskUkG6twOFv0.jpg",
    description: "Classic rose fused with smoky oud."
  },
  {
    name: "Vetiver Earth",
    category: "Woody Earthy",
    gender: "Male",
    rating: 4.6,
    price: 170,
    size: "100ml",
    notes: ["Woody"],
    image: "https://png.pngtree.com/background/20230526/original/pngtree-perfume-bottle-sitting-on-a-black-dark-background-picture-image_2751956.jpg",
    description: "Earthy vetiver with grapefruit zest."
  },
  {
    name: "Honey Tobacco",
    category: "Gourmand",
    gender: "Both",
    rating: 4.8,
    price: 205,
    size: "50ml",
    notes: ["Spicy"],
    image: "https://static.vecteezy.com/system/resources/previews/060/002/590/large_2x/luxurious-black-perfume-bottle-with-gold-ornamentation-on-glitter-background-free-photo.jpg",
    description: "Sweet honey over warm tobacco leaves."
  },
  {
    name: "Neroli Portofino",
    category: "Citrus Fresh",
    gender: "Both",
    rating: 4.7,
    price: 190,
    size: "100ml",
    notes: ["Citrus", "Fresh"],
    image: "https://thumbs.dreamstime.com/b/glass-bottle-perfume-clear-body-gold-colored-top-rests-surface-made-black-marble-glass-bottle-378327056.jpg",
    description: "Mediterranean neroli with citrus brightness."
  },
  {
    name: "Patchouli Intense",
    category: "Woody Earthy",
    gender: "Both",
    rating: 4.8,
    price: 225,
    size: "100ml",
    notes: ["Woody"],
    image: "https://t4.ftcdn.net/jpg/18/36/44/59/360_F_1836445949_IE5HmyOOVaBVIzy8uhkoJwk0ODdOU6wz.jpg",
    description: "Deep patchouli softened with vanilla."
  },
  {
    name: "Cardamom Coffee",
    category: "Spicy Gourmand",
    gender: "Both",
    rating: 4.6,
    price: 185,
    size: "50ml",
    notes: ["Spicy"],
    image: "https://static.vecteezy.com/system/resources/thumbnails/036/557/803/small/ai-generated-luxury-perfume-cosmetic-premium-glass-bottle-banner-poster-for-beauty-promotion-of-elegant-product-for-ads-on-draped-silk-fabric-clothing-elegants-background-with-pearls-generative-ai-photo.jpg",
    description: "Fresh coffee beans with spicy cardamom."
  },
  {
    name: "Iris Powder",
    category: "Powdery Floral",
    gender: "Female",
    rating: 4.9,
    price: 260,
    size: "100ml",
    notes: ["Floral"],
    image: "https://www.shutterstock.com/image-illustration/bottle-perfume-displayed-on-rock-260nw-2561998197.jpg",
    description: "Soft iris with powdery elegance."
  },
  {
    name: "Pine Forest",
    category: "Woody Fresh",
    gender: "Male",
    rating: 4.5,
    price: 160,
    size: "100ml",
    notes: ["Woody", "Fresh"],
    image: "https://media.istockphoto.com/id/1212664778/vector/perfume-bottle-on-black-silk-fabric-background.jpg",
    description: "Crisp pine needles with fresh citrus."
  },
  {
    name: "Coconut Paradise",
    category: "Tropical Gourmand",
    gender: "Female",
    rating: 4.7,
    price: 175,
    size: "100ml",
    notes: ["Fresh"],
    image: "https://thumbs.dreamstime.com/b/white-dispenser-bottle-gold-pump-displayed-wooden-platform-dark-black-background-smoke-luxury-cosmetic-product-384840089.jpg",
    description: "Creamy coconut with tropical sweetness."
  }
];



  // ✅ STEP 1: Attach images to first 30 products ONLY
  // const productsWithImages = useMemo(() => {
  //   return rawProducts.map((product, index) => {
  //     if (index < 30) {
  //       return { ...product, image: productImages[index] };
  //     }
  //     return product;
  //   });
  // }, []);

  // ✅ STEP 2: Filtering & Sorting (same logic, source updated)
const filteredProducts = useMemo(() => {
  let filtered = products.filter((product) => {
    if (selectedGenders.length > 0) {
      const prodGender =
        product.gender === "Both"
          ? "Unisex"
          : product.gender === "Female"
          ? "Women"
          : "Men";
      if (!selectedGenders.includes(prodGender)) return false;
    }

    if (product.price < priceRange[0] || product.price > priceRange[1])
      return false;

    if (
      selectedNotes.length > 0 &&
      !selectedNotes.some((note) => product.notes.includes(note))
    )
      return false;

    if (selectedSizes.length > 0 && !selectedSizes.includes(product.size))
      return false;

    return true;
  });

  return [...filtered].sort((a, b) => {
    switch (sortBy) {
      case "price-low":
        return a.price - b.price;
      case "price-high":
        return b.price - a.price;
      case "rating":
        return b.rating - a.rating;
      default:
        return 0;
    }
  });
}, [
  products,
  selectedGenders,
  priceRange,
  selectedNotes,
  selectedSizes,
  sortBy,
]);


  const resetFilters = () => {
    setSelectedGenders([]);
    setPriceRange([0, 10000]);
    setSelectedNotes([]);
    setSelectedSizes([]);
    setSelectedSpecials([]);
  };

  return (
    <section className="py-24 px-6 relative bg-black text-white overflow-hidden">
      {/* background unchanged */}

      <div className="relative z-10 py-16 md:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-5xl md:text-7xl  font-extrabold text-white text-center tracking-tight drop-shadow-2xl"
          >
            Luxury Fragrance <br /> Collection
          </motion.h1>
          <div className="flex flex-col md:flex-row justify-between items-center mt-20 mb-20 gap-6">
            {/* Display dynamic number of products */}
            <p className="text-white font-semibold text-lg ps-8">
              {filteredProducts.length} Products
            </p>

            <div className="flex items-center gap-4">
              {/* Sort Dropdown */}
              <div className="relative text-black">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="appearance-none bg-white/10 backdrop-blur border border-gray-600 text-white px-6 py-3 pr-10 rounded-lg focus:outline-none cursor-pointer"
                >
                  <option value="price-low" className="text-black">
                    Price: Low → High
                  </option>
                  <option value="price-high" className="text-black">
                    Price: High → Low
                  </option>
                  <option value="rating" className="text-black">
                    Best Rating
                  </option>
                </select>
                <SlidersHorizontal className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
              </div>

              <button
                onClick={() => setShowFilterModal(true)}
                className="flex items-center gap-2 bg-white/10 backdrop-blur border border-gray-600 hover:border-amber-500 px-6 py-3 rounded-lg transition"
              >
                <Filter size={20} />
                <span>Filters</span>
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 gap-10 md:gap-12">
            {filteredProducts.map((product, index) => (
              <motion.div
                key={product.name} 
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.15 }}
                onHoverStart={() => setHoveredIndex(index)}
                onHoverEnd={() => setHoveredIndex(null)}
                className="group relative overflow-hidden rounded-2xl shadow-2xl cursor-pointer border border-gray-400 h-[500px]"
              >
                <div className="relative h-full w-full">
                
                    <Image
                      src={product.image || "/placeholder.jpg"}
                      alt={product.name}
                      fill
                      className={`absolute inset-0 w-full h-full object-cover transition-all duration-1000 ${
                        hoveredIndex === index ? "blur-md scale-110" : "scale-100"
                      }`}
                    />

                  <div
                    className={`absolute inset-0 bg-black/60 transition-opacity duration-700 ${
                      hoveredIndex === index ? "opacity-100" : "opacity-0"
                    }`}
                  />

                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{
                      opacity: hoveredIndex === index ? 1 : 0,
                      scale: hoveredIndex === index ? 1 : 0.95,
                      translateY: "-40px",
                    }}
                    transition={{ duration: 0.6 }}
                    className="absolute inset-0 flex items-center justify-center px-4 md:p-8 pointer-events-none"
                  >
                    <div className="w-full max-w-md space-y-6 backdrop-blur-lg bg-black/60 rounded-2xl p-8 border border-gray-600 text-center">
                      <p className="text-sm uppercase tracking-widest text-gray-300">
                        {product.category} •{" "}
                        {product.gender === "Both" ? "Unisex" : product.gender}
                      </p>

                      <h3 className="text-4xl font-extrabold">
                        {product.name}
                      </h3>

                      <div className="flex justify-center gap-2">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            size={22}
                            className={
                              i < Math.floor(product.rating)
                                ? "fill-white text-white"
                                : "text-gray-600"
                            }
                          />
                        ))}
                        <span className="text-gray-300">
                          ({product.rating})
                        </span>
                      </div>

                      <p className="text-gray-200 line-clamp-2">
                        {product.description}
                      </p>

                      <span className="text-4xl font-bold">
                        {product.price}
                      </span>
                    </div>
                  </motion.div>

                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <button className="w-full bg-white text-black py-4 font-bold rounded-xl hover:bg-amber-400 transition">
                      View Details
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-32 text-2xl text-gray-400">
              No products match your selected filters.
            </div>
          )}
        </div>
      </div>

      {showFilterModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-black border border-gray-800 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-8 relative"
            // Hide scrollbar but keep functionality
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {/* Inline style to hide scrollbar in WebKit browsers */}
            <style jsx>{`
              div::-webkit-scrollbar {
                display: none;
              }
            `}</style>

            <button
              onClick={() => setShowFilterModal(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-white transition"
            >
              <X size={28} />
            </button>

            <h2 className="text-3xl font-bold mb-8 text-white">Filters</h2>

            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4 text-white">Gender</h3>
              <div className="flex gap-4 flex-wrap">
                {["Men", "Women", "Unisex"].map((g) => (
                  <button
                    key={g}
                    onClick={() =>
                      setSelectedGenders((prev) =>
                        prev.includes(g)
                          ? prev.filter((x) => x !== g)
                          : [...prev, g]
                      )
                    }
                    className={`px-8 py-3 rounded-lg border transition-all ${
                      selectedGenders.includes(g)
                        ? "bg-white text-black border-white"
                        : "border-gray-700 hover:border-gray-400 text-white bg-black/50"
                    }`}
                  >
                    {g}
                  </button>
                ))}
              </div>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4 text-white">
                Price Range
              </h3>
              <div className="px-4">
                <input
                  type="range"
                  min="0"
                  max="10000"
                  value={priceRange[1]}
                  onChange={(e) =>
                    setPriceRange([priceRange[0], Number(e.target.value)])
                  }
                  className="w-full h-2 bg-gray-800 rounded-lg appearance-none cursor-pointer accent-white"
                />
                <div className="flex justify-between text-sm mt-3 text-gray-400">
                  <span>$0</span>
                  <span>
                    ${priceRange[1] === 10000 ? "3000+" : priceRange[1]}
                  </span>
                </div>
              </div>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4 text-white">
                Fragrance Notes
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {["Woody", "Floral", "Fresh", "Spicy", "Musky", "Citrus"].map(
                  (note) => (
                    <label
                      key={note}
                      className="flex items-center gap-3 cursor-pointer text-white"
                    >
                      <input
                        type="checkbox"
                        checked={selectedNotes.includes(note)}
                        onChange={() =>
                          setSelectedNotes((prev) =>
                            prev.includes(note)
                              ? prev.filter((x) => x !== note)
                              : [...prev, note]
                          )
                        }
                        className="w-5 h-5 accent-white rounded border-gray-600"
                      />
                      <span>{note}</span>
                    </label>
                  )
                )}
              </div>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4 text-white">Size</h3>
              <div className="flex gap-8">
                {["30ml", "50ml", "100ml"].map((size) => (
                  <label
                    key={size}
                    className="flex items-center gap-3 cursor-pointer text-white"
                  >
                    <input
                      type="checkbox"
                      checked={selectedSizes.includes(size)}
                      onChange={() =>
                        setSelectedSizes((prev) =>
                          prev.includes(size)
                            ? prev.filter((x) => x !== size)
                            : [...prev, size]
                        )
                      }
                      className="w-5 h-5 accent-white rounded border-gray-600"
                    />
                    <span>{size}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="flex justify-between mt-10">
              <button
                onClick={resetFilters}
                className="px-6 py-3 border border-gray-700 rounded-lg hover:border-white hover:bg-white/5 text-white transition"
              >
                Reset All
              </button>
              <button
                onClick={() => setShowFilterModal(false)}
                className="px-8 py-3 bg-white text-black rounded-lg font-bold hover:bg-gray-200 transition"
              >
                Apply Filters
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </section>
  );
};
