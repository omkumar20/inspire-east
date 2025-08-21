// components/DateTime.tsx
import React from "react";

const Card: React.FC<{ title: string; children: React.ReactNode }> = ({
  title,
  children,
}) => (
  <div className="relative rounded-2xl border border-indigo-200/60 bg-white p-6 shadow-sm">
    {/* left accent bar */}
    <span className="pointer-events-none absolute left-0 top-3 bottom-3 w-[10px] rounded-full bg-indigo-600" />
    <h3 className="text-xl font-semibold text-zinc-900">{title}</h3>
    <div className="mt-4 text-lg leading-8 text-zinc-800">{children}</div>
  </div>
);

const DateTime: React.FC = () => {
  return (
    <section className="container">
      {/* Title */}
      <h2 className="text-4xl font-extrabold tracking-tight text-zinc-900 sm:text-5xl lg:text-6xl">
        Inspire East Conclave: Ranchi 2024
      </h2>

      {/* Cards */}
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        <Card title="Dates">
          November 8–9, 2024
        </Card>

        <Card title="Venue">
          Ranchi, Jharkhand, India
        </Card>

        <Card title="Focus">
          Socio-political, Cultural, Economic, Literature, and Emerging Fields
        </Card>
      </div>

      {/* Closing line */}
      <p className="mt-10 text-xl text-zinc-800">
        Prepare for two days of unparalleled insights and networking at the heart of East India.
      </p>
    </section>
  );
};

export default DateTime;
