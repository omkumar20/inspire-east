"use client";

import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

// AOS
import AOS from "aos";
import "aos/dist/aos.css";

const DUMMY_IMAGES = [
  "https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&w=1600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1516387938699-a93567ec168e?q=80&w=1600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=1600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=1600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&w=1600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1508213824876-2d3f7d7d5a97?q=80&w=1600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?q=80&w=1600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1544006659-f0b21884ce1d?q=80&w=1600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=1600&auto=format&fit=crop",
];

const Partnership: React.FC = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section className="container">
      {/* Title */}
      <h2
        className="text-center text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-zinc-900"
        data-aos="fade-up"
      >
        Partnerships &amp; Collaborations
      </h2>

      {/* Intro */}
      <p
        className="mt-4 mx-auto max-w-4xl sm:tracking-wide text-center text-base sm:text-lg leading-relaxed text-zinc-700 md:pb-8"
        data-aos="fade-up"
        data-aos-delay="120"
      >
        The Inspire East Conclave is made possible through the support of esteemed partners
        who share our vision for a progressive East India.
      </p>

      {/* Carousel 1 — Left ➜ Right */}
      <div className="mt-8" data-aos="fade-up" data-aos-delay="200">
        <Swiper
          modules={[Autoplay]}
          loop
          speed={3500}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          slidesPerView="auto"
          spaceBetween={16}
          allowTouchMove={false}
        >
          {DUMMY_IMAGES.concat(DUMMY_IMAGES).map((src, i) => (
            <SwiperSlide
              key={`lr-${i}`}
              style={{ width: "320px" }}
              className="!w-[240px] sm:!w-[280px] md:!w-[320px]"
            >
              <img
                src={src}
                alt={`Partner ${i + 1}`}
                className="h-48 sm:h-56 md:h-64 w-full object-cover rounded-xl bg-zinc-200"
                loading="lazy"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <p
        className="mt-10 text-center text-base sm:text-lg md:text-xl text-zinc-800"
        data-aos="fade-up"
        data-aos-delay="320"
      >
        We invite organizations aligned with our mission to join us in shaping this landmark event.
      </p>
    </section>
  );
};

export default Partnership;
