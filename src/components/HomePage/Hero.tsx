// components/Hero.tsx
import React from "react";
import Image from "next/image";

const Hero: React.FC = () => {
  return (
    <section className="container">
      <div className="grid items-center gap-10 md:grid-cols-2">
        {/* Left: Copy */}
        <div>
          <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-zinc-900 md:text-5xl lg:text-6xl">
            Inspire East Conclave:
            <br className="hidden sm:block" />
            Catalyzing Progress
          </h1>

          <p className="mt-6 max-w-xl text-lg text-zinc-600">
            Join us for a groundbreaking event fostering dialogue, innovation,
            and community in East India.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#learn-more"
              className="inline-flex items-center justify-center rounded-xl bg-red-600 px-6 py-3 text-base font-semibold text-white shadow-sm transition hover:bg-red-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2"
            >
              Learn More
            </a>

            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-xl border border-red-600 px-6 py-3 text-base font-semibold text-red-600 transition hover:bg-red-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2"
            >
              Contact Us
            </a>
          </div>
        </div>

        {/* Right: Image */}
        <div className="relative">
          <div className="overflow-hidden rounded-2xl border border-zinc-200 shadow-sm">
            <Image
              src="/hero.png" // put your image in /public as hero.jpg
              alt="Sunrise over mountains with a winding river"
              width={1280}
              height={960}
              className="h-full w-full object-cover"
              priority
            />
          </div>

          {/* Optional badge in bottom-right (like the screenshot). Remove if not needed. */}
        </div>
      </div>
    </section>
  );
};

export default Hero;
