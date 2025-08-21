'use client';

import React, { useEffect } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";

/* --- Icon Card Component --- */
const Card: React.FC<{
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}> = ({ icon, title, children }) => (
  <div
    className="relative rounded-md border border-red-300 bg-white shadow-sm pt-14 px-6 pb-6 overflow-visible"
    data-aos="fade-up"
  >
    {/* Top red bar */}
    <div className="absolute top-0 left-0 h-2 w-full bg-red-500 rounded-t-md" />

    {/* Floating Icon */}
    <div className="absolute -top-6 left-1/2 -translate-x-1/2 z-20">
      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md border-4 border-red-500">
        <div className="text-red-500">{icon}</div>
      </div>
    </div>

    {/* Content */}
    <h3 className="text-lg font-semibold text-zinc-800">{title}</h3>
    <div className="mt-2 text-red-600 font-semibold">{children}</div>
  </div>
);

/* --- Inline SVG icons --- */
const GlobeIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
    <circle cx="12" cy="12" r="10" strokeWidth={2} />
    <path d="M2 12h20M12 2c3.5 4 3.5 16 0 20M12 2c-3.5 4-3.5 16 0 20" strokeWidth={2} />
  </svg>
);

const MailIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
    <rect x="3" y="5" width="18" height="14" rx="2" ry="2" strokeWidth={2} />
    <path d="M3 7l9 6 9-6" strokeWidth={2} />
  </svg>
);

/* --- Main Component --- */
const Connect: React.FC = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section className="container px-4 py-20">
      {/* Centered Heading */}
      <div className="max-w-4xl mx-auto text-center" data-aos="fade-up">
        <h2 className="text-4xl font-bold tracking-tight text-zinc-900 sm:text-5xl">
          Connect With Us
        </h2>
      </div>

      {/* Grid */}
      <div
        className="mt-12 grid gap-10 md:grid-cols-2 items-start"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        {/* Left: Contact Info */}
        <div className="space-y-10">
          <Card icon={<GlobeIcon className="h-6 w-6" />} title="Website">
            <a
              href="https://inspireeast.in"
              className="hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              inspireeast.in
            </a>
          </Card>

          <Card icon={<MailIcon className="h-6 w-6" />} title="Email">
            <a
              href="mailto:contact@inspireeast.in"
              className="hover:underline"
            >
              contact@inspireeast.in
            </a>
          </Card>
        </div>

        {/* Right: Image */}
        <div
          className="overflow-hidden rounded-2xl border border-zinc-200 shadow-sm"
          data-aos="zoom-in"
          data-aos-delay="200"
        >
          <Image
            src="/connect.png"
            alt="Connect illustration"
            width={800}
            height={800}
            className="object-cover w-full h-auto"
          />
        </div>
      </div>

      {/* Footer Text */}
      <p
        className="mt-12 text-xl text-zinc-800 text-center max-w-3xl mx-auto"
        data-aos="fade-up"
        data-aos-delay="300"
      >
        We welcome your inquiries and look forward to your participation.
      </p>
    </section>
  );
};

export default Connect;
