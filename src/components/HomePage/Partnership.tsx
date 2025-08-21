// components/Partnership.tsx
import React from "react";

const LogoPlaceholder: React.FC = () => (
  <div className="h-20 w-36 rounded-lg bg-zinc-200 shadow-sm" />
  // Later: replace with <Image src="/partners/x.png" alt="Partner" fill className="object-contain" />
);

const Partnership: React.FC = () => {
  return (
    <section className="container">
      {/* Title */}
      <h2 className="text-4xl font-bold tracking-tight text-zinc-900 sm:text-5xl">
        Partnerships &amp; Collaborations
      </h2>

      {/* Intro */}
      <p className="mt-4 max-w-4xl text-lg leading-relaxed text-zinc-700">
        The Inspire East Conclave is made possible through the support of esteemed partners
        who share our vision for a progressive East India.
      </p>

      {/* Logos row (centered) */}
      <div className="mt-10 flex flex-wrap items-center justify-center gap-x-12 gap-y-8">
        <LogoPlaceholder />
        <LogoPlaceholder />
        <LogoPlaceholder />
        <LogoPlaceholder />
      </div>

      {/* Closing line */}
      <p className="mt-12 text-xl text-zinc-800">
        We invite organizations aligned with our mission to join us in shaping this landmark event.
      </p>
    </section>
  );
};

export default Partnership;
