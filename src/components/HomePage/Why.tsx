// components/Why.tsx
import React from "react";

const Why: React.FC = () => {
  return (
    <section className="container">
      {/* Title */}
      <h2 className="text-4xl font-extrabold tracking-tight text-zinc-900 sm:text-5xl">
        Why Ranchi? The Gateway to East India
      </h2>

      {/* Main content: text left + image right */}
      <div className="mt-8 grid items-start gap-10 md:grid-cols-2">
        {/* Left: copy */}
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

        {/* Right: placeholder for image */}
        <div className="overflow-hidden rounded-2xl border border-zinc-200 shadow-sm">
          <div className="aspect-[4/3] w-full bg-zinc-200" />
          {/* Replace the above div with your <Image /> later, e.g.:
            <Image
              src="/ranchi.jpg"
              alt="Aerial view of Ranchi city and lake"
              fill
              className="object-cover"
            />
          */}
        </div>
      </div>

      {/* Closing line */}
      <p className="mt-12 text-xl text-zinc-800">
        Experience the unique charm of Ranchi while engaging in groundbreaking discussions.
      </p>
    </section>
  );
};

export default Why;
