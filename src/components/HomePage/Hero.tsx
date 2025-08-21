'use client'
import React, { useEffect } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";

const Hero: React.FC = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="max-w-[1280px] mx-auto pt-4 px-3 pb-8 sm:pb-16">
      <div className="grid items-center gap-12 md:grid-cols-2">
        
        {/* Right: Image (comes first on mobile) */}
        <div className="order-1 md:order-2" data-aos="fade-left">
          <div className="overflow-hidden rounded-2xl border border-zinc-200 shadow-sm">
            <Image
              src="/hero.png"
              alt="Sunrise over mountains with a winding river"
              width={1280}
              height={960}
              className="w-full h-auto object-cover"
              priority
            />
          </div>
        </div>

        {/* Left Section: Text (comes second on mobile) */}
        <div
          className="order-2 md:order-1 text-center md:text-left max-w-3xl mx-auto md:mx-0"
          data-aos="fade-right"
        >
          <h1 className="text-6xl sm:text-4xl font-extrabold leading-snug tracking-tight text-zinc-900 md:text-5xl lg:text-6xl">
            Inspire East Conclave  
          </h1>

          <p className="mt-6 sm:mt-8 text-base sm:text-lg md:text-xl text-zinc-600">
            Join us for a groundbreaking event fostering dialogue, innovation,
            and community in East India.
          </p>

          <div className="mt-8 sm:mt-12 flex flex-wrap justify-center md:justify-start items-center gap-4 sm:gap-6">
            {/* Learn More - Filled */}
            <a
              href="#learn-more"
              className="inline-flex items-center justify-center rounded-lg bg-red-500 px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-semibold text-white shadow-sm transition hover:bg-red-600"
            >
              Learn More
            </a>

            {/* Contact Us - Outlined */}
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-lg border-2 border-red-500 px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-semibold text-red-700 shadow-sm transition hover:bg-red-100"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
