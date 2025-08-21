"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";

const Why: React.FC = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section className="container py-16">
      {/* Centered Title */}
      <div className="max-w-4xl mx-auto text-center" data-aos="fade-up">
        <h2 className="text-4xl font-bold tracking-tight text-zinc-900 sm:text-5xl">
          Why Ranchi? The Gateway to East India
        </h2>
      </div>

      {/* Main content: text left + image right */}
      <div
        className="mt-12 grid items-start gap-10 md:grid-cols-2"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        {/* Left: Text */}
        <div>
          <p className="text-lg leading-8 text-zinc-700">
            Ranchi, the capital of Jharkhand, offers a strategic and culturally
            rich backdrop for the Conclave. Its vibrant energy and growing
            importance in the regional landscape make it the ideal host city.
          </p>

          <ul className="mt-6 list-disc space-y-3 pl-6 text-lg leading-8 text-zinc-800">
            <li>Central location for East Indian accessibility.</li>
            <li>Rich tribal heritage and natural beauty.</li>
            <li>Emerging hub for education and industry.</li>
          </ul>
        </div>

        {/* Right: Image */}
        <div className="rounded-2xl border border-zinc-200 shadow-sm overflow-hidden">
          <div className="relative aspect-[3/3]">
            <Image
              src="/ranchi.png"
              alt="Aerial view of Ranchi city and lake"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>

      {/* Closing line */}
      <p
        className="mt-12 text-center text-xl text-zinc-800 max-w-3xl mx-auto"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        Experience the unique charm of Ranchi while engaging in groundbreaking discussions.
      </p>
    </section>
  );
};

export default Why;
