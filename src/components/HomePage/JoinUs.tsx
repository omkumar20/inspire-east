// components/JoinUs.tsx
import React from "react";

const JoinUs: React.FC = () => {
  return (
    <section className="container">
      {/* Kicker */}
      <p className="text-2xl font-bold text-zinc-900 sm:text-3xl">
        Join the Movement
      </p>

      {/* Massive headline */}
      <h2 className="mt-6 font-semibold leading-[0.95] tracking-tight text-zinc-900 text-5xl sm:text-6xl md:text-7xl lg:text-8xl">
        Be a part of East India&apos;s most
        <br />
        significant intellectual gathering.
      </h2>

      {/* Supporting copy */}
      <p className="mt-8 max-w-5xl text-lg leading-8 text-zinc-700">
        The Inspire East Conclave promises to be a pivotal event, fostering connections
        and sparking ideas that will resonate across the region for years to come.
        Don&apos;t miss this opportunity to engage with leading minds and contribute
        to a brighter future.
      </p>

      {/* CTAs */}
      <div className="mt-10 flex flex-wrap items-center gap-4">
        <a
              href="#learn-more"
              className="inline-flex items-center justify-center rounded-lg bg-red-500 px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-semibold text-white shadow-sm transition hover:bg-red-600"
            >
              Register Your Interest            </a>

            {/* Contact Us - Outlined */}
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-lg border-2 border-red-500 px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-semibold text-red-700 shadow-sm transition hover:bg-red-100"
            >
              Become a Partner  
            </a>
      </div>
    </section>
  );
};

export default JoinUs;
