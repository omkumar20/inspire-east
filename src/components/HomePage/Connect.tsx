// components/Connect.tsx
import React from "react";

const Card: React.FC<{ icon: React.ReactNode; title: string; children: React.ReactNode }> = ({
  icon,
  title,
  children,
}) => (
  <div className="relative rounded-xl border border-zinc-300 bg-white shadow-sm">
    {/* Top bar with icon */}
    <div className="absolute -top-6 left-1/2 flex -translate-x-1/2 items-center justify-center">
      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-indigo-600 text-white shadow-md">
        {icon}
      </div>
    </div>
    <div className="px-6 pt-8 pb-6">
      <h3 className="text-lg font-semibold text-zinc-900">{title}</h3>
      <div className="mt-2 text-indigo-700">{children}</div>
    </div>
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

const Connect: React.FC = () => {
  return (
    <section className="container">
      {/* Title */}
      <h2 className="text-4xl font-extrabold tracking-tight text-zinc-900 sm:text-5xl">
        Connect With Us
      </h2>

      {/* Content grid */}
      <div className="mt-12 grid gap-10 md:grid-cols-2">
        {/* Left: Contact cards */}
        <div className="space-y-12">
          <Card icon={<GlobeIcon className="h-6 w-6" />} title="Website">
            <span className="text-zinc-500">unknown link</span>
          </Card>

          <Card icon={<MailIcon className="h-6 w-6" />} title="Email">
            <a
              href="mailto:contact@inspireeast.in"
              className="font-medium text-indigo-700 hover:underline"
            >
              contact@inspireeast.in
            </a>
          </Card>
        </div>

        {/* Right: Image placeholder */}
        <div className="overflow-hidden rounded-2xl border border-zinc-200 shadow-sm">
          <div className="aspect-square w-full bg-zinc-200" />
          {/* Replace placeholder with actual image later
            <Image
              src="/connect.jpg"
              alt="Event branding graphic"
              fill
              className="object-cover"
            />
          */}
        </div>
      </div>

      {/* Closing line */}
      <p className="mt-12 text-lg text-zinc-800">
        We welcome your inquiries and look forward to your participation.
      </p>
    </section>
  );
};

export default Connect;
