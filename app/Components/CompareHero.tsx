"use client";
import bgpatternUrl from "./../../public/bannerphoto.png";
export default function CompareHeroSection() {
  // Premium black + silver elegant mandala background
  //   const bgPatternUrl = "https://images.stockcake.com/public/8/2/3/82316c0e-62e3-4473-9b58-b8f93e1b05bc_large/ethereal-fragrance-essence-stockcake.jpg";
  // Best alternatives (silver/black luxury patterns – uncomment to swap):
  // "https://www.shutterstock.com/image-vector/luxury-mandala-vector-background-silver-260nw-1653130096.jpg"
  // "https://media.istockphoto.com/id/1570132128/vector/abstract-gradient-black-and-gray-stripe-lines-decorative-artwork-overalpping-with-luxury.jpg?s=612x612&w=0&k=20&c=3mgA_9c28y1-8es4nj-O3z4u0CWkr_jGAXfOXYwyWfg="
  // "https://www.shutterstock.com/image-vector/luxury-ornamental-mandala-design-background-260nw-1977004103.jpg"
  // "https://www.shutterstock.com/image-vector/elegant-gold-silver-metallic-mandala-260nw-2472090081.jpg"

  return (
    <section className="relative w-full overflow-hidden bg-black">
      {/* Premium silver elegant background pattern */}
      <div
        className="absolute inset-0 opacity-15 bg-cover bg-center"
        style={{ backgroundImage: "url('/bannerphoto.png')", opacity: 0.49 }}
      />

      {/* Subtle overlay for text contrast */}
      <div className="absolute inset-0 bg-black/40" />

      <div className="relative z-10 max-w-7xl mx-auto px-8 py-20 md:py-32 flex items-center justify-center min-h-screen">
        <div className="text-center text-white space-y-8 max-w-4xl">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-tight">
            Compare <span className="text-gray-300">Our Perfumes</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-300 leading-relaxed mx-auto">
            Easily compare your favorite fragrances side by side. Check notes,
            intensity, and longevity to find the perfect scent that matches your
            style.
          </p>

          <p className="text-md md:text-lg text-gray-400 mx-auto max-w-2xl">
            Make informed choices with detailed comparisons of premium
            handcrafted perfumes.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a
              href="#products"
              className="inline-block px-10 py-3 bg-white text-black font-bold text-lg rounded-2xl hover:bg-gray-300 transition"
            >
              Shop All Fragrances
            </a>
            <a
              href="#bestsellers"
              className="inline-block px-10 py-3 border-2 rounded-2xl border-gray-300 text-gray-300 hover:bg-gray-300 hover:text-black transition"
            >
              View Best Sellers
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
