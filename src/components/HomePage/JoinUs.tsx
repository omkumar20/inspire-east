// components/JoinUs.tsx
import React from "react";

const JoinUs: React.FC = () => {
  return (
    <section className="container">
      {/* Kicker */}
      <p className="text-2xl font-semibold text-zinc-900 sm:text-3xl">
        Join the Movement
      </p>

      {/* Massive headline */}
      <h2 className="mt-6 font-extrabold leading-[0.95] tracking-tight text-zinc-900 text-5xl sm:text-6xl md:text-7xl lg:text-8xl">
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
          href="#register"
          className="inline-flex items-center justify-center rounded-2xl bg-indigo-300 px-6 py-4 text-base font-semibold text-white shadow-sm transition hover:bg-indigo-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 focus-visible:ring-offset-2"
        >
          Register Your Interest
        </a>

        <a
          href="#partner"
          className="inline-flex items-center justify-center rounded-2xl border border-indigo-400 px-6 py-4 text-base font-semibold text-indigo-700 transition hover:bg-indigo-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 focus-visible:ring-offset-2"
        >
          Become a Partner
        </a>
      </div>
    </section>
  );
};

export default JoinUs;
