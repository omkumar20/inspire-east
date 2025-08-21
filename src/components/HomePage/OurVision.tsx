'use client';

import React, { useEffect } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";

const OurVision: React.FC = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section className="container py-16">
      {/* Title */}
      <h2
        className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 text-center"
        data-aos="fade-up"
      >
        Our Vision: A Flourishing Future for East India
      </h2>

      {/* Content */}
      <div
        className="mt-8 grid items-start gap-10 md:grid-cols-2"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        {/* Left: Copy */}
        <div className="max-w-2xl">
          <p className="text-lg leading-8 text-zinc-700">
            We envision an East India transformed by enlightened discourse and
            collaborative action. A region where:
          </p>

          <ul className="mt-6 list-disc space-y-4 pl-6 text-lg leading-8 text-zinc-800">
            <li>
              Innovative solutions to complex challenges are cultivated and
              implemented.
            </li>
            <li>
              Cultural richness is celebrated and leveraged for regional
              identity.
            </li>
            <li>Economic growth is inclusive and sustainable for all.</li>
          </ul>
        </div>

        {/* Right: Image card */}
        <div
          className="rounded-2xl border border-zinc-200 shadow-sm overflow-hidden"
          data-aos="zoom-in"
          data-aos-delay="200"
        >
          <div className="relative aspect-[3/3]">
            <Image
              src="/vision.png"
              alt="Glowing map of India representing a flourishing, connected future"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>

      {/* Closing line */}
      <p
        className="mt-12 text-xl text-zinc-800 text-center"
        data-aos="fade-up"
        data-aos-delay="300"
      >
        The Inspire East Conclave serves as a catalyst for this vibrant future.
      </p>
    </section>
  );
};

export default OurVision;
