"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Card: React.FC<{ title: string; children: React.ReactNode; delay: number }> = ({
  title,
  children,
  delay,
}) => (
  <div
    data-aos="fade-up"
    data-aos-delay={delay}
    className="transition-transform duration-700 ease-out"
  >
    <div
      className="relative h-full flex flex-col justify-between rounded-lg border border-red-300 bg-white p-6 shadow-md
                 transform-gpu will-change-transform
                 transition-all duration-500 ease-in-out
                 hover:scale-105 hover:shadow-xl"
    >
      {/* Left Accent Bar */}
      <span className="pointer-events-none absolute left-0 top-3 bottom-3 w-[6px] rounded-full bg-red-600" />
      <h3 className="text-xl font-bold text-gray-900">{title}</h3>
      <div className="mt-3 text-lg text-gray-700">{children}</div>
    </div>
  </div>
);

const DateTime: React.FC = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="container mx-auto px-6 py-16 text-center">
      {/* Title */}
      <h2
        className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-10"
        data-aos="fade-down"
      >
        Inspire East Conclave: Ranchi 2024
      </h2>

      {/* Cards */}
      <div className="grid gap-6 md:grid-cols-3 items-stretch max-w-5xl mx-auto">
        <Card title="Dates" delay={100}>
          November 8–9, 2024
        </Card>

        <Card title="Venue" delay={200}>
          Ranchi, Jharkhand, India
        </Card>

        <Card title="Focus" delay={300}>
          Socio-political, Cultural, Economic, Literature, and Emerging Fields
        </Card>
      </div>

      {/* Closing line */}
      <p
        className="mt-10 text-lg sm:text-xl text-gray-700"
        data-aos="fade-up"
        data-aos-delay="400"
      >
        Prepare for two days of unparalleled insights and networking at the heart of East India.
      </p>
    </section>
  );
};

export default DateTime;
