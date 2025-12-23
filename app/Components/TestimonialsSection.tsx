"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Alexander Voss",
      rating: 5,
      review:
        "The finest cologne I've ever owned. Premium quality that truly stands out – bold and sophisticated.",
      photo: "https://img.freepik.com/premium-photo/waist-up-portrait-view-man-businesslike-suit-presenting-product-mens-perfume-isolated-grey-copy-space-advert_533057-1636.jpg?uid=R88737050&ga=GA1.1.87635697.1761204883&semt=ais_hybrid&w=740&q=80",
    },
    {
      name: "Marcus Hale",
      rating: 5,
      review:
        "Incredible craftsmanship. The fragrance evolves beautifully – confident and refined all day.",
      photo: "https://img.freepik.com/premium-photo/masculine-perfume-bearded-man-suit-copy-space-masculine-perfume-bearded-man-suit-perfume_926199-4383095.jpg?uid=R88737050&ga=GA1.1.87635697.1761204883&semt=ais_hybrid&w=740&q=80",
    },
    {
      name: "Julian Knight",
      rating: 5,
      review:
        "Outstanding masculine scent. Exudes confidence and luxury – my new signature cologne.",
      photo: "https://img.freepik.com/premium-photo/man-perfume-fragrance-perfume-cologne-bottle-bearded-man-holding-up-bottle-perfume-man-holds-cosmetics-serum-vial-applying-hands-male-fragrance-perfumery_293990-5642.jpg?uid=R88737050&ga=GA1.1.87635697.1761204883&semt=ais_hybrid&w=740&q=80",
    },
    {
      name: "Ethan Reed",
      rating: 5,
      review:
        "Long-lasting and powerful. Perfect for the modern man – highly recommended.",
      photo: "https://img.freepik.com/premium-photo/man-suit-holding-perfume-bottle_1127112-2163.jpg?uid=R88737050&ga=GA1.1.87635697.1761204883&semt=ais_hybrid&w=740&q=80",
    },
    {
      name: "Liam Brooks",
      rating: 5,
      review:
        "Elegant and timeless. The depth of notes is masterful – pure class.",
      photo: "https://img.freepik.com/premium-photo/handsome-man-formal-suit-with-bottle-perfume-dark-background_392895-164587.jpg?uid=R88737050&ga=GA1.1.87635697.1761204883&semt=ais_hybrid&w=740&q=80",
    },
    {
      name: "Noah Pierce",
      rating: 5,
      review:
        "Best men's fragrance in my collection. Bold, fresh, and unforgettable.",
      photo: "https://img.freepik.com/premium-photo/masculine-bearded-young-man-holding-generic-bottle-perfume-male-fragrance-perfumery-cosmet_1356031-6373.jpg?uid=R88737050&ga=GA1.1.87635697.1761204883&semt=ais_hybrid&w=740&q=80",
    },
  ];

  return (
    <section className="py-24 px-6 relative bg-black text-white overflow-hidden">
      {/* Subtle dark luxury texture background */}
      <div
        className="absolute inset-0 opacity-20 bg-cover bg-center"
      style={{
            backgroundImage:
              "url('https://images.fineartamerica.com/images/artworkimages/mediumlarge/3/seamless-minimal-black-abstract-glossy-soft-waves-background-texture-elegant-wavy-carved-marble-luxury-wallpaper-pattern-tileable-subtle-dark-grey-presentation-or-display-backdrop-3d-rendering-n-akkash.jpg')",
          }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-6">
            Customer Testimonials
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto font-light">
            Hear from gentlemen who trust our premium men's fragrances
          </p>
        </motion.div>

        {/* Testimonials Carousel */}
        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          spaceBetween={50}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          loop={true}
          pagination={{ clickable: true }}
        //   navigation={true}
          className="testimonials-swiper"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <motion.div
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="" // Ensures equal height in slider
              >
                <div className="h-[500px] bg-white/5 backdrop-blur-md border border-gray-800 rounded-3xl p-10 text-center   hover:border-gray-600 transition-all duration-700 flex flex-col justify-between">
                  {/* Customer Photo */}
                  <div className="mx-auto w-32 h-32 rounded-full overflow-hidden mb-8 border-4 border-white">
                    <img
                      src={testimonial.photo}
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Rating */}
                  <div className="flex justify-center gap-1 mb-6">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={24}
                        className={i < testimonial.rating ? "fill-white text-white" : "text-gray-700"}
                      />
                    ))}
                  </div>

                  {/* Review Text */}
                  <p className="text-gray-300 text-lg leading-relaxed  italic flex-grow">
                    "{testimonial.review}"
                  </p>

                  {/* Name */}
                  <h4 className="text-xl font-bold">{testimonial.name}</h4>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <style jsx global>{`
        .testimonials-swiper .swiper-pagination-bullet {
          background: #4b5563;
          opacity: 1;
          margin-top:100px;
        }
        .testimonials-swiper .swiper-pagination-bullet-active {
          background: #ffffff;
        }
        .testimonials-swiper .swiper-button-next,
        .testimonials-swiper .swiper-button-prev {
          color: #ffffff;
        }
          .swiper-pagination{
          position:relative;
          margin-top:50px
          }
      `}</style>
    </section>
  );
}