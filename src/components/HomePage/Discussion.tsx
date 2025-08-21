// components/Discussion.tsx
import React from "react";

/* -------- inline SVG icons (stroke = indigo) -------- */
const GavelIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
    <path d="M3 21h12" strokeWidth={2} strokeLinecap="round" />
    <path d="M8 14l4-4M12 10l3 3M9 7l3 3" strokeWidth={2} strokeLinecap="round" />
    <rect x="12.5" y="5.5" width="4.5" height="3.5" rx="1" strokeWidth={2} />
  </svg>
);

const BookIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
    <path d="M4 5h9a3 3 0 0 1 3 3v11H7a3 3 0 0 1-3-3V5z" strokeWidth={2} />
    <path d="M16 8a3 3 0 0 1 3-3h1v14h-4" strokeWidth={2} />
    <path d="M8 8h5" strokeWidth={2} strokeLinecap="round" />
  </svg>
);

const DiyaIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
    <path d="M12 4c2 2 2 4-1 6 0 0 5-.5 5-4 0-1.2-.7-2.1-1.7-2.6" strokeWidth={2} strokeLinecap="round" />
    <path d="M4 14c0 3.3 3.6 6 8 6s8-2.7 8-6H4z" strokeWidth={2} />
  </svg>
);

const ChartUpIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
    <path d="M4 20V6M20 20H4" strokeWidth={2} strokeLinecap="round" />
    <path d="M6 16l4-4 3 3 5-6" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const NodesIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
    <circle cx="6" cy="12" r="2" strokeWidth={2} />
    <circle cx="12" cy="7" r="2" strokeWidth={2} />
    <circle cx="18" cy="12" r="2" strokeWidth={2} />
    <path d="M8 12h4M14 12h2M12 9v2" strokeWidth={2} strokeLinecap="round" />
  </svg>
);

const Item: React.FC<{
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}> = ({ icon, title, children }) => (
  <div className="flex gap-4">
    <div className="mt-1 inline-flex h-12 w-12 items-center justify-center rounded-lg border border-indigo-300">
      {/* icon color */}
      <div className="text-indigo-600">{icon}</div>
    </div>
    <div>
      <h3 className="text-xl font-extrabold text-zinc-900">{title}</h3>
      <p className="mt-2 max-w-[38ch] text-zinc-700 leading-relaxed">{children}</p>
    </div>
  </div>
);

const Discussion: React.FC = () => {
  return (
    <section className="container">
      {/* Title */}
      <h2 className="text-4xl font-extrabold tracking-tight text-zinc-900 sm:text-5xl">
        Diverse Panel Discussions
      </h2>

      {/* Grid: 3 columns × 2 rows */}
      <div className="mt-10 grid gap-x-12 gap-y-12 md:grid-cols-3">
        <Item icon={<GavelIcon className="h-7 w-7" />} title="Socio-Political Landscape">
          Exploring governance, policy, and community development in the region.
        </Item>

        <Item icon={<BookIcon className="h-7 w-7" />} title="Literature &amp; Arts">
          Celebrating the rich literary heritage and contemporary artistic expressions of East India.
        </Item>

        <Item icon={<DiyaIcon className="h-7 w-7" />} title="Cultural Tapestry">
          Delving into the diverse traditions, festivals, and folk arts that define East India&apos;s identity.
        </Item>

        <Item icon={<ChartUpIcon className="h-7 w-7" />} title="Economic Imperatives">
          Analyzing growth strategies, investment opportunities, and sustainable economic models.
        </Item>

        <Item icon={<NodesIcon className="h-7 w-7" />} title="Emerging Fields">
          Highlighting innovations in technology, healthcare, and sustainable practices shaping tomorrow.
        </Item>
      </div>

      {/* Closing line */}
      <p className="mt-12 text-lg text-zinc-800">
        Each session is designed to provoke thought and inspire action.
      </p>
    </section>
  );
};

export default Discussion;
