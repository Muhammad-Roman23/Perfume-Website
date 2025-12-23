'use client'
import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Star, Filter, X, SlidersHorizontal } from 'lucide-react';

export const AllProductsSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [showFilterModal, setShowFilterModal] = useState(false);

  // Filter states
  const [selectedGenders, setSelectedGenders] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 10000]);
  const [selectedNotes, setSelectedNotes] = useState<string[]>([]);
  const [selectedSizes, setSelectedSizes] = useState<string[]>([]);
  const [selectedSpecials, setSelectedSpecials] = useState<string[]>([]);

  // Sorting state (Newest removed)
  const [sortBy, setSortBy] = useState<string>('price-low');
    const productImages = [
  'https://thumbs.dreamstime.com/b/elegant-black-perfume-bottle-display-luxurious-design-elegant-black-perfume-bottle-display-luxurious-design-studio-setting-close-370609572.jpg',
  'https://thumbs.dreamstime.com/b/elegant-black-gold-perfume-bottle-dark-surface-luxurious-rectangular-accents-sits-polished-reflecting-light-400606970.jpg',
  'https://thumbs.dreamstime.com/b/glass-perfume-bottle-golden-liquid-inside-background-dark-smoky-creating-mysterious-atmosphere-387814660.jpg',
  'https://thumbs.dreamstime.com/b/luxury-textured-perfume-bottle-golden-cap-smoky-spotlight-scene-stylish-rectangular-accents-dramatic-light-generative-408126859.jpg',
  'https://thumbs.dreamstime.com/b/expensive-luxury-black-gold-background-cosmetics-cosmetic-bottles-marble-elegant-premium-cream-template-ai-generated-351877705.jpg',
  'https://thumbs.dreamstime.com/b/soft-light-beautifully-reflected-perfume-bottle-golden-black-color-381640112.jpg',
  'https://thumbs.dreamstime.com/b/close-up-elegant-perfume-bottle-surrounded-mist-dark-background-ai-generated-close-up-elegant-perfume-321357162.jpg',
  'https://www.shutterstock.com/image-photo/image-showcases-luxurious-perfume-bottle-600nw-2569475799.jpg',
  'https://thumbs.dreamstime.com/b/dark-background-glass-perfume-bottle-gold-cap-placed-featuring-flowing-abstract-golden-ribbon-dark-383172002.jpg',
  'https://img.freepik.com/premium-photo/perfume-bottle-black-gold-elegance-generative-ai_431161-17493.jpg',
  'https://www.shutterstock.com/image-photo/luxury-bottle-perfume-closeup-on-black-260nw-1257772759.jpg',
  'https://thumbs.dreamstime.com/b/black-gold-bottle-emits-sparkly-mist-glitter-luxe-perfume-advertises-scent-elegant-fragrance-ad-suggests-magic-417059174.jpg',
  'https://static.vecteezy.com/system/resources/thumbnails/071/917/995/small/luxury-perfume-bottle-with-black-cap-and-gold-collar-elegant-fragrance-studio-shot-photo.jpg',
  'https://t3.ftcdn.net/jpg/15/46/84/28/360_F_1546842802_Y9cU8W2bT1SkfjD3kly4lNAl828IUaPt.jpg',
  'https://www.shutterstock.com/image-photo/need-background-perfume-bottle-poster-600nw-2530096035.jpg',
  'https://thumbs.dreamstime.com/b/clear-glass-perfume-bottle-sits-textured-stone-surface-background-dark-highlighting-s-elegant-design-golden-liquid-419127119.jpg',
  'https://thumbs.dreamstime.com/b/elegant-perfume-bottle-luxurious-golden-background-display-stunning-elegantly-positioned-against-rich-backdrop-highlighting-367386550.jpg',
  'https://thumbs.dreamstime.com/b/luxury-perfume-bottles-mock-up-dark-background-blue-glass-gold-ornaments-premium-fragrance-packaging-design-cosmetic-384980132.jpg',
  'https://t3.ftcdn.net/jpg/13/76/48/16/360_F_1376481664_dlZnlhLEDJ1MEdLODdc03L6wLaB7A9BQ.jpg',
  'https://png.pngtree.com/thumb_back/fw800/background/20251205/pngtree-elegant-glass-perfume-bottle-with-a-black-cap-and-golden-liquid-image_20740101.webp',
  'https://png.pngtree.com/background/20230522/original/pngtree-perfume-bottle-in-an-elegant-black-color-stock-photo-picture-image_2687531.jpg',
  'https://t3.ftcdn.net/jpg/16/12/54/48/360_F_1612544818_3avhCBcQ7nzuB0i5McrVskUkG6twOFv0.jpg',
  'https://png.pngtree.com/background/20230526/original/pngtree-perfume-bottle-sitting-on-a-black-dark-background-picture-image_2751956.jpg',
  'https://static.vecteezy.com/system/resources/previews/060/002/590/large_2x/luxurious-black-perfume-bottle-with-gold-ornamentation-on-glitter-background-free-photo.jpg',
  'https://thumbs.dreamstime.com/b/glass-bottle-perfume-clear-body-gold-colored-top-rests-surface-made-black-marble-glass-bottle-378327056.jpg',
  'https://t4.ftcdn.net/jpg/18/36/44/59/360_F_1836445949_IE5HmyOOVaBVIzy8uhkoJwk0ODdOU6wz.jpg',
  'https://static.vecteezy.com/system/resources/thumbnails/036/557/803/small/ai-generated-luxury-perfume-cosmetic-premium-glass-bottle-banner-poster-for-beauty-promotion-of-elegant-product-for-ads-on-draped-silk-fabric-clothing-elegants-background-with-pearls-generative-ai-photo.jpg',
  'https://www.shutterstock.com/image-illustration/bottle-perfume-displayed-on-rock-260nw-2561998197.jpg',
  'https://media.istockphoto.com/id/1212664778/vector/perfume-bottle-on-black-silk-fabric-background.jpg?s=612x612&w=0&k=20&c=vrD9S23bjYWYOYkYhY8mJttyMtEy_wtO8G1t6nRrENE=',
  'https://thumbs.dreamstime.com/b/white-dispenser-bottle-gold-pump-displayed-wooden-platform-dark-black-background-smoke-luxury-cosmetic-product-384840089.jpg'
];

  const rawProducts = [
    { name: 'Velvet Oud', category: 'Floral Oriental', gender: 'Female', rating: 4.8, price: 185, size: '100ml', notes: ['Floral', 'Spicy'], description: 'An enchanting fusion of rare Turkish rose petals and precious oud wood from the depths of Southeast Asia. This luxurious scent opens with soft floral elegance before revealing deep, smoky resinous layers that linger mysteriously on the skin all day.' },
    { name: 'Midnight Amber', category: 'Woody Spicy', gender: 'Both', rating: 4.9, price: 210, size: '100ml', notes: ['Woody', 'Spicy'], description: 'Warm golden amber resin intertwined with creamy vanilla beans and rich sandalwood. Subtle hints of cinnamon and clove add a gentle spicy warmth, creating an addictive, cozy aura perfect for evening wear and intimate moments.' },
    { name: 'Citrus Noir', category: 'Fresh Citrus', gender: 'Male', rating: 4.6, price: 165, size: '50ml', notes: ['Fresh', 'Citrus'], description: 'Explosive Italian bergamot and Sicilian lemon burst into life, contrasted beautifully with dark leather accords and intense black musk. A modern masculine fragrance that balances vibrant freshness with sophisticated depth.' },
    { name: 'Gold Saffron', category: 'Spicy Oriental', gender: 'Both', rating: 5.0, price: 240, size: '100ml', notes: ['Spicy'], description: 'Exquisite saffron threads from Persia blended with smoky frankincense and warm oud. Rich caramel and tonka bean base notes create an opulent, regal trail that commands attention and admiration wherever you go.' },
    { name: 'Ocean Breeze', category: 'Aquatic Fresh', gender: 'Male', rating: 4.7, price: 155, size: '100ml', notes: ['Fresh'], description: 'Crisp marine accords combined with sea salt crystals and driftwood. Invigorating notes of mint and green apple provide an energizing lift, evoking the feeling of standing on a coastal cliff with the ocean wind in your face.' },
    { name: 'Royal Musk', category: 'Musky Floral', gender: 'Female', rating: 4.8, price: 195, size: '100ml', notes: ['Musky', 'Floral'], description: 'Pure white musk envelops delicate jasmine sambac and patchouli leaves. Soft rose and vanilla undertones create an intimate, skin-like scent that feels luxurious yet incredibly comforting throughout the day.' },  
    { name: 'Enchanted Rose', category: 'Floral', gender: 'Female', rating: 4.9, price: 220, size: '50ml', notes: ['Floral'], description: 'Hundreds of fresh damask rose petals layered with lychee and raspberry for a modern twist. Dewy green notes and soft musk create a romantic, feminine bouquet that blooms beautifully on warm skin.' },
    { name: 'Black Leather', category: 'Leather Woody', gender: 'Male', rating: 4.5, price: 190, size: '100ml', notes: ['Woody'], description: 'Rich Russian leather accord combined with birch tar and cedarwood. Smoky vetiver and patchouli add rugged intensity, perfect for the confident man who appreciates bold, masculine elegance.' },
    { name: 'Vanilla Dream', category: 'Gourmand', gender: 'Both', rating: 4.8, price: 175, size: '100ml', notes: ['Spicy'], description: 'Madagascar vanilla absolute warmed with caramel and benzoin resin. Subtle nutmeg and cinnamon create a delicious, addictive gourmand scent that feels like a warm embrace on cool evenings.' },
    { name: 'Fresh Linen', category: 'Clean Fresh', gender: 'Both', rating: 4.7, price: 140, size: '100ml', notes: ['Fresh'], description: 'Crisp cotton and white linen accords with subtle aquatic notes and soft musk. Clean aldehyde top notes give that freshly laundered feeling, ideal for everyday sophistication.' },
    { name: 'Spice Route', category: 'Spicy Oriental', gender: 'Male', rating: 4.6, price: 200, size: '100ml', notes: ['Spicy', 'Woody'], description: 'Cardamom and black pepper open with fiery intensity, melting into saffron and oud wood. Amber and labdanum create a warm, mysterious base that evokes ancient trade routes and hidden treasures.' },
    { name: 'Jasmine Night', category: 'Floral', gender: 'Female', rating: 5.0, price: 250, size: '50ml', notes: ['Floral', 'Musky'], description: 'Intense night-blooming jasmine absolute with tuberose and ylang-ylang. Creamy sandalwood and white musk base create an intoxicating, head-turning floral masterpiece for special evenings.' },
    { name: 'Cedar Forest', category: 'Woody', gender: 'Male', rating: 4.7, price: 180, size: '100ml', notes: ['Woody'], description: 'Atlas cedarwood and virginia cedar combined with pine and vetiver. Earthy patchouli and moss create the sensation of walking through an ancient forest after rain – grounding and powerful.' },
    { name: 'Peach Blossom', category: 'Fruity Floral', gender: 'Female', rating: 4.8, price: 160, size: '100ml', notes: ['Floral', 'Fresh'], description: 'Juicy peach and apricot nectar blended with delicate cherry blossom and peony. Soft vanilla musk base makes this fruity floral incredibly wearable and universally flattering.' },
    { name: 'Tobacco Vanille', category: 'Gourmand Woody', gender: 'Both', rating: 4.9, price: 230, size: '100ml', notes: ['Spicy', 'Woody'], description: 'Rich pipe tobacco leaves sweetened with vanilla pods and dried fruits. Cocoa and tonka bean add warmth and depth, creating a sophisticated, unisex masterpiece for cooler months.' },
    { name: 'Mediterranean Fig', category: 'Fruity Fresh', gender: 'Both', rating: 4.6, price: 150, size: '50ml', notes: ['Fresh'], description: 'Ripe green fig with coconut water and marine notes. Subtle violet leaf and cedarwood create a relaxed, vacation-like scent perfect for summer days and casual elegance.' },
    { name: 'Oud Imperial', category: 'Oud Woody', gender: 'Both', rating: 5.0, price: 320, size: '100ml', notes: ['Woody', 'Spicy'], description: 'Pure Laotian oud oil blended with rose and saffron. Precious ambergris and sandalwood create an ultra-luxurious, long-lasting signature scent for those who demand the very best.' },
    { name: 'Lavender Fields', category: 'Aromatic', gender: 'Male', rating: 4.5, price: 145, size: '100ml', notes: ['Fresh'], description: 'French lavender fields captured with rosemary and sage. Clean citrus top notes and tonka base create a classic, refreshing aromatic fougère with exceptional versatility.' },
    { name: 'Cherry Smoke', category: 'Fruity Gourmand', gender: 'Female', rating: 4.8, price: 195, size: '50ml', notes: ['Spicy'], description: 'Black cherry and almond liqueur with smoky leather and rose. Vanilla and tonka create a seductive, slightly dark gourmand that\'s both playful and sophisticated.' },
    { name: 'Santal Supreme', category: 'Woody Creamy', gender: 'Both', rating: 4.9, price: 215, size: '100ml', notes: ['Woody'], description: 'Creamy Mysore sandalwood with milk accord and cardamom. Soft iris and coconut create an incredibly smooth, addictive woody scent that feels like cashmere on skin.' },
    { name: 'Bergamot Bliss', category: 'Citrus Aromatic', gender: 'Both', rating: 4.7, price: 155, size: '100ml', notes: ['Citrus', 'Fresh'], description: 'Calabrian bergamot with green tea and ginger. Crisp apple and white musk create a clean, uplifting citrus scent perfect for daily wear and office environments.' },
    { name: 'Rose Oud', category: 'Floral Oriental', gender: 'Both', rating: 4.9, price: 280, size: '100ml', notes: ['Floral', 'Woody'], description: 'Bulgarian rose absolute married with smoky agarwood oud. Patchouli and amber create a timeless, romantic oriental masterpiece that evolves beautifully throughout the day.' },
    { name: 'Vetiver Earth', category: 'Woody Earthy', gender: 'Male', rating: 4.6, price: 170, size: '100ml', notes: ['Woody'], description: 'Haitian vetiver root with grapefruit and black pepper. Earthy moss and cedar create a clean, masculine scent with incredible natural sophistication and longevity.' },
    { name: 'Honey Tobacco', category: 'Gourmand', gender: 'Both', rating: 4.8, price: 205, size: '50ml', notes: ['Spicy'], description: 'Warm honey drizzled over cured tobacco leaves with clove and vanilla. Tonka and benzoin create a rich, comforting gourmand that\'s both sweet and slightly smoky.' },
    { name: 'Neroli Portofino', category: 'Citrus Fresh', gender: 'Both', rating: 4.7, price: 190, size: '100ml', notes: ['Citrus', 'Fresh'], description: 'Tunisian neroli with orange blossom and Sicilian lemon. Amber and musk base create a luxurious Mediterranean citrus that feels like summer luxury in a bottle.' },
    { name: 'Patchouli Intense', category: 'Woody Earthy', gender: 'Both', rating: 4.8, price: 225, size: '100ml', notes: ['Woody'], description: 'Indonesian patchouli leaves with cocoa and vanilla absolute. Sandalwood and amber create a deep, mysterious woody scent that\'s both bohemian and incredibly refined.' },
    { name: 'Cardamom Coffee', category: 'Spicy Gourmand', gender: 'Both', rating: 4.6, price: 185, size: '50ml', notes: ['Spicy'], description: 'Freshly roasted coffee beans with green cardamom pods and milk foam. Vanilla and praline create an addictive morning-inspired gourmand that\'s warm and inviting.' },
    { name: 'Iris Powder', category: 'Powdery Floral', gender: 'Female', rating: 4.9, price: 260, size: '100ml', notes: ['Floral'], description: 'Precious orris root butter with violet and heliotrope. Soft vanilla and musk create a luxurious powdery veil that feels like vintage elegance reborn for modern times.' },
    { name: 'Pine Forest', category: 'Woody Fresh', gender: 'Male', rating: 4.5, price: 160, size: '100ml', notes: ['Woody', 'Fresh'], description: 'Siberian pine needles with juniper berries and fir balsam. Clean citrus and vetiver create a crisp, invigorating forest scent perfect for active days and outdoor adventures.' },
    { name: 'Coconut Paradise', category: 'Tropical Gourmand', gender: 'Female', rating: 4.7, price: 175, size: '100ml', notes: ['Fresh'], description: 'Creamy coconut milk with pineapple and frangipani flowers. Vanilla and salted caramel create a delicious tropical escape that transports you instantly to white sand beaches.' },
  ];

  const filteredProducts = useMemo(() => {
    let filtered = rawProducts.filter(product => {
      // Gender filter
      if (selectedGenders.length > 0) {
        const prodGender = product.gender === 'Both' ? 'Unisex' : product.gender === 'Female' ? 'Women' : 'Men';
        if (!selectedGenders.includes(prodGender)) return false;
      }
      // Price
      if (product.price < priceRange[0] || product.price > priceRange[1]) return false;
      // Notes
      if (selectedNotes.length > 0 && !selectedNotes.some(note => product.notes.includes(note))) return false;
      // Size
      if (selectedSizes.length > 0 && !selectedSizes.includes(product.size)) return false;

      return true;
    });

    // Sorting
    filtered = [...filtered].sort((a, b) => {
      switch (sortBy) {
        case 'price-low': return a.price - b.price;
        case 'price-high': return b.price - a.price;
        case 'rating': return b.rating - a.rating;
        default: return 0;
      }
    });

    return filtered;
  }, [selectedGenders, priceRange, selectedNotes, selectedSizes, sortBy]);

  const resetFilters = () => {
    setSelectedGenders([]);
    setPriceRange([0, 10000]);
    setSelectedNotes([]);
    setSelectedSizes([]);
    setSelectedSpecials([]);
  };

  return (
    <section className="py-24 px-6 relative bg-black text-white overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="w-full h-full bg-cover bg-center bg-fixed bg-black" style={{ backgroundImage: "url('https://images.fineartamerica.com/images/artworkimages/mediumlarge/3/seamless-minimal-black-abstract-glossy-soft-waves-background-texture-elegant-wavy-carved-marble-luxury-wallpaper-pattern-tileable-subtle-dark-grey-presentation-or-display-backdrop-3d-rendering-n-akkash.jpg')" }} />
        <div className="absolute inset-0 bg-black/70" />
      </div>

      <div className="relative z-10 py-16 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center mb-20 gap-6">
            <motion.h1 initial={{ opacity: 0, y: -40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} className="text-5xl md:text-7xl font-extrabold text-white text-center md:text-left tracking-tight drop-shadow-2xl">
              Luxury Fragrance Collection
            </motion.h1>

            <div className="flex items-center gap-4">
              {/* Sort Dropdown - Newest removed */}
              <div className="relative text-black ">
                <select value={sortBy} onChange={(e) => setSortBy(e.target.value)} className="appearance-none bg-white/10 backdrop-blur border border-gray-600 text-white px-6 py-3 pr-10 rounded-lg focus:outline-none cursor-pointer">
                  <option value="price-low" className='text-black' >Price: Low → High</option>
                  <option value="price-high" className='text-black'  >Price: High → Low</option>
                  <option value="rating" className='text-black' >Best Rating</option>
                </select>
                <SlidersHorizontal className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
              </div>

              <button onClick={() => setShowFilterModal(true)} className="flex items-center gap-2 bg-white/10 backdrop-blur border border-gray-600 hover:border-amber-500 px-6 py-3 rounded-lg transition">
                <Filter size={20} />
                <span>Filters</span>
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-12">
            {filteredProducts.map((product, index) => (
                    <motion.div
                             key={index}
                             initial={{ opacity: 0, y: 60 }}
                             whileInView={{ opacity: 1, y: 0 }}
                             viewport={{ once: true }}
                             transition={{ duration: 0.8, delay: index * 0.15 }}
                             onHoverStart={() => setHoveredIndex(index)}
                             onHoverEnd={() => setHoveredIndex(null)}
                             className="group relative overflow-hidden rounded-2xl shadow-2xl cursor-pointer border border-gray-400 h-[500px]" // increased height slightly for better centering
                           >
                             <div className="relative h-full w-full">
                               <img
                                 src={productImages[index % productImages.length]}
                                 alt={filteredProducts[index].name}
                                 className={`absolute inset-0 w-full h-full object-cover object-center transition-all duration-1000 ease-out ${
                                   hoveredIndex === index ? 'blur-md scale-110' : 'blur-0 scale-100'
                                 }`}
                               />
             
                               {/* Dark overlay on hover */}
                               <div 
                                 className={`absolute inset-0 bg-black/60 transition-opacity duration-700 ${
                                   hoveredIndex === index ? 'opacity-100' : 'opacity-0'
                                 }`}
                               />
             
                               {/* Centered Details Panel on Hover */}
                               <motion.div
                                 initial={{ opacity: 0, scale: 0.95 }}
                                 animate={{ 
                                   opacity: hoveredIndex === index ? 1 : 0,
                                   scale: hoveredIndex === index ? 1 : 0.95,
                                   translateY:" -40px "
                                 }}
                                 transition={{ duration: 0.6, ease: "easeOut" }}
                                 className="absolute inset-0 flex items-center justify-center px-4 md:p-8 pointer-events-none"
                               >
                                 <div className="w-full max-w-md space-y-6 backdrop-blur-lg bg-black/60 rounded-2xl p-8 border border-gray-600">
                                   <div className="space-y-4 text-center">
                                     <p className="text-sm font-semibold uppercase tracking-widest text-gray-300">
                                       {filteredProducts[index].category} • {filteredProducts[index].gender === 'Both' ? 'Unisex' : filteredProducts[index].gender}
                                     </p>
                                     <h3 className="text-4xl font-extrabold drop-shadow-2xl">
                                       {filteredProducts[index].name}
                                     </h3>
             
                                     <div className="flex items-center justify-center gap-2">
                                       {[...Array(5)].map((_, i) => (
                                         <Star
                                           key={i}
                                           size={22}
                                           className={i < Math.floor(filteredProducts[index].rating) 
                                             ? "fill-white text-white" 
                                             : "text-gray-600"}
                                         />
                                       ))}
                                       <span className="text-gray-300 ml-2">({filteredProducts[index].rating})</span>
                                     </div>
             
                                     <p className="text-gray-200 text-base leading-relaxed line-clamp-2">
                                       {filteredProducts[index].description}
                                     </p>
             
                                     <div className="pt-4">
                                       <span className="text-4xl font-bold text-white">
                                         {filteredProducts[index].price}
                                       </span>
                                     </div>
                                   </div>
                                 </div>
                               </motion.div>
             
                               {/* Full Width View Details Button at Bottom */}
                               <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-0">
                                 <button className="w-full bg-white text-black py-4 font-bold text-lg uppercase tracking-wider rounded-xl shadow-2xl transition-all duration-300 hover:bg-amber-400 hover:scale-105 pointer-events-auto">
                                   View Details
                                 </button>
                               </div>
                             </div>
                           </motion.div>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-32 text-2xl text-gray-400">No products match your selected filters.</div>
          )}
        </div>
      </div>

      {/* Filter Modal */}
     {showFilterModal && (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md px-4">
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }} 
      animate={{ opacity: 1, scale: 1 }} 
      className="bg-black border border-gray-800 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-8 relative"
      // Hide scrollbar but keep functionality
      style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
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
          {['Men', 'Women', 'Unisex'].map(g => (
            <button
              key={g}
              onClick={() => setSelectedGenders(prev => prev.includes(g) ? prev.filter(x => x !== g) : [...prev, g])}
              className={`px-8 py-3 rounded-lg border transition-all ${selectedGenders.includes(g) 
                ? 'bg-white text-black border-white' 
                : 'border-gray-700 hover:border-gray-400 text-white bg-black/50'}`}
            >
              {g}
            </button>
          ))}
        </div>
      </div>

      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-4 text-white">Price Range</h3>
        <div className="px-4">
          <input
            type="range"
            min="0"
            max="10000"
            value={priceRange[1]}
            onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])}
            className="w-full h-2 bg-gray-800 rounded-lg appearance-none cursor-pointer accent-white"
          />
          <div className="flex justify-between text-sm mt-3 text-gray-400">
            <span>$0</span>
            <span>${priceRange[1] === 10000 ? '3000+' : priceRange[1]}</span>
          </div>
        </div>
      </div>

      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-4 text-white">Fragrance Notes</h3>
        <div className="grid grid-cols-2 gap-4">
          {['Woody', 'Floral', 'Fresh', 'Spicy', 'Musky', 'Citrus'].map(note => (
            <label key={note} className="flex items-center gap-3 cursor-pointer text-white">
              <input 
                type="checkbox" 
                checked={selectedNotes.includes(note)} 
                onChange={() => setSelectedNotes(prev => prev.includes(note) ? prev.filter(x => x !== note) : [...prev, note])} 
                className="w-5 h-5 accent-white rounded border-gray-600" 
              />
              <span>{note}</span>
            </label>
          ))}
        </div>
      </div>

      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-4 text-white">Size</h3>
        <div className="flex gap-8">
          {['30ml', '50ml', '100ml'].map(size => (
            <label key={size} className="flex items-center gap-3 cursor-pointer text-white">
              <input 
                type="checkbox" 
                checked={selectedSizes.includes(size)} 
                onChange={() => setSelectedSizes(prev => prev.includes(size) ? prev.filter(x => x !== size) : [...prev, size])} 
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