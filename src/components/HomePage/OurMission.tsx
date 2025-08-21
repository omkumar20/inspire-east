// components/OurMission.tsx
import React from "react";

/* --- Inline SVG icons (no external deps) --- */
const MessageIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
    <path d="M21 12a8 8 0 0 1-8 8H7l-4 3V12a8 8 0 0 1 8-8h2a8 8 0 0 1 8 8Z" strokeWidth={1.8} />
    <path d="M8 11h8M8 15h5" strokeWidth={1.8} strokeLinecap="round" />
  </svg>
);

const BulbIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
    <path d="M9 18h6M10 21h4" strokeWidth={1.8} strokeLinecap="round" />
    <path d="M12 3a7 7 0 0 0-4 12v1h8v-1a7 7 0 0 0-4-12Z" strokeWidth={1.8} />
  </svg>
);

const GridIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
    <rect x="4" y="4" width="6" height="6" rx="1.5" strokeWidth={1.8} />
    <rect x="14" y="4" width="6" height="6" rx="1.5" strokeWidth={1.8} />
    <rect x="4" y="14" width="6" height="6" rx="1.5" strokeWidth={1.8} />
    <rect x="14" y="14" width="6" height="6" rx="1.5" strokeWidth={1.8} />
  </svg>
);

const OurMission: React.FC = () => {
  return (
    <section className="container">
      {/* Title (fat + tight like screenshot) */}
      <h2 className="text-4xl font-extrabold tracking-tight text-zinc-900 sm:text-5xl lg:text-6xl">
        Our Mission: Igniting East India&apos;s Potential
      </h2>

      {/* Single rounded panel with dividers & badges */}
      <div className="relative mt-8 rounded-2xl border border-indigo-200 bg-indigo-100/60 p-4 shadow-sm sm:p-6 lg:p-8">
        <div className="grid items-stretch gap-6 md:grid-cols-3 md:divide-x md:divide-indigo-200">
          {/* Col 1 */}
          <div className="px-1 md:px-6">
            <h3 className="text-2xl font-extrabold text-zinc-900">Foster Dialogue</h3>
            <p className="mt-4 text-lg leading-relaxed text-zinc-800">
              Create a dynamic platform for robust discussions on critical
              socio-political and economic issues impacting East India.
            </p>
          </div>

          {/* Col 2 with divider badge */}
          <div className="relative px-1 md:px-6">
            {/* Badge on divider (md+) */}
            <span className="pointer-events-none absolute -left-5 top-1/2 hidden -translate-y-1/2 md:inline-flex">
              <span className="flex h-11 w-11 items-center justify-center rounded-lg border border-indigo-200 bg-white shadow">
                <BulbIcon className="h-6 w-6 text-indigo-700" />
              </span>
            </span>

            <h3 className="text-2xl font-extrabold text-zinc-900">Drive Innovation</h3>
            <p className="mt-4 text-lg leading-relaxed text-zinc-800">
              Showcase emerging fields and cutting-edge ideas, inspiring
              new solutions and entrepreneurial spirit across the region.
            </p>
          </div>

          {/* Col 3 with divider badge */}
          <div className="relative px-1 md:px-6">
            {/* Badge on divider (md+) */}
            <span className="pointer-events-none absolute -left-5 top-1/2 hidden -translate-y-1/2 md:inline-flex">
              <span className="flex h-11 w-11 items-center justify-center rounded-lg border border-indigo-200 bg-white shadow">
                <GridIcon className="h-6 w-6 text-indigo-700" />
              </span>
            </span>

            <h3 className="text-2xl font-extrabold text-zinc-900">Build Community</h3>
            <p className="mt-4 text-lg leading-relaxed text-zinc-800">
              Connect thought leaders, policymakers, and the public to forge
              powerful collaborations for regional development.
            </p>
          </div>
        </div>
      </div>

      {/* Closing line */}
      <p className="mt-8 text-xl text-zinc-800">
        Our mission is to empower East India through intellectual exchange and collective action.
      </p>
    </section>
  );
};

export default OurMission;
