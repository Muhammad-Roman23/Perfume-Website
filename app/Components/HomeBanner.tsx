"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

export default function HeroSlider() {
  const colorfulPerfumeImages = [
    "https://img.freepik.com/premium-photo/mockup-design-perfume-bottle-with-plant-branch-empty-blank-copy-space-wallpaper-bottle-essential-oil-with-herbs-elegant-minimalistic-podium-scene-product-presentation_146482-9328.jpg?uid=R88737050&ga=GA1.1.87635697.1761204883&semt=ais_hybrid&w=740&q=80",
    "https://img.freepik.com/premium-photo/close-up-woman-make-up-desk-with-mirror-living-room_7180-2870.jpg?uid=R88737050&ga=GA1.1.87635697.1761204883&semt=ais_hybrid&w=740&q=80",
    "https://img.freepik.com/premium-photo/stylish-bottle-with-perfume-against-background-corrals-soft-crimson-red-tones_937888-3612.jpg?uid=R88737050&ga=GA1.1.87635697.1761204883&semt=ais_hybrid&w=740&q=80",
    "https://img.freepik.com/premium-photo/fresh-flowers-perfume-bottle-photography-mockup-ai-generated_1246276-5299.jpg?uid=R88737050&ga=GA1.1.87635697.1761204883&semt=ais_hybrid&w=740&q=80",
    "https://img.freepik.com/premium-photo/magic-potion-glass-bottle-with-plants-flowers-blue-background_176873-11871.jpg?uid=R88737050&ga=GA1.1.87635697.1761204883&semt=ais_hybrid&w=740&q=80",
    "https://img.freepik.com/premium-photo/black-teascented-room-spray-misted-freshen-air_974629-277762.jpg?uid=R88737050&ga=GA1.1.87635697.1761204883&semt=ais_hybrid&w=740&q=80",
  ];

  return (
    <section className="relative w-full overflow-hidden h-screen">
      <Swiper
        modules={[Autoplay, EffectFade, Pagination]}
        effect="fade"
        autoplay={{ delay: 4500, disableOnInteraction: false }}
        loop={true}
        pagination={{
          clickable: true,
        }}
        className="h-full w-full"
      >
        {colorfulPerfumeImages.map((img, index) => (
          <SwiperSlide key={index}>
            <div className="relative h-full w-full">
              <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${img})` }}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Tailwind Arbitrary Values se Prominent Dots */}
<div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
  <div className="[&_.swiper-pagination-bullet]:w-3 [&_.swiper-pagination-bullet]:h-3 [&_.swiper-pagination-bullet]:bg-black/60 [&_.swiper-pagination-bullet]:opacity-100 [&_.swiper-pagination-bullet]:rounded-full [&_.swiper-pagination-bullet-active]:w-5 [&_.swiper-pagination-bullet-active]:h-5 [&_.swiper-pagination-bullet-active]:bg-white [&_.swiper-pagination-bullet-active]:shadow-[0_0_25px_rgba(255,255,255,0.9)] [&_.swiper-pagination-bullet-active]:scale-150 [&_.swiper-pagination-bullet]:transition-all [&_.swiper-pagination-bullet]:duration-500 swiper-pagination" />
</div>
       
    </section>
  );
}