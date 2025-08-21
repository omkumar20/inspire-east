// components/Speakers.tsx
import React from "react";

const Speakers: React.FC = () => {
  return (
    <section className="container">
      {/* Title */}
      <h2 className="text-4xl font-extrabold tracking-tight text-zinc-900 sm:text-5xl">
        Speakers: Minds of the Moment
      </h2>

      {/* Intro */}
      <p className="mt-4 max-w-3xl text-lg leading-relaxed text-zinc-700">
        The Inspire East Conclave brings together an unparalleled roster of thought leaders,
        academics, policymakers, artists, and professionals. These are individuals shaping the
        future of their respective fields and driving progress across India and beyond.
      </p>

      {/* Grid of speaker placeholders */}
      <div className="mt-8 grid gap-6 md:grid-cols-3">
        <div className="aspect-[4/3] rounded-xl bg-zinc-200" />
        <div className="aspect-[4/3] rounded-xl bg-zinc-200" />
        <div className="aspect-[4/3] rounded-xl bg-zinc-200" />
      </div>

      {/* Large banner-style placeholder */}
      <div className="mt-6 aspect-[16/7] rounded-xl bg-zinc-200" />

      {/* Closing line */}
      <p className="mt-10 text-lg text-zinc-800">
        Stay tuned for our full speaker lineup announcements!
      </p>
    </section>
  );
};

export default Speakers;
