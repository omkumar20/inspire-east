// components/Header.tsx
"use client";

import React, { useEffect, useRef, useState } from "react";

const navItems = [
  { label: "Home", href: "#hero" },
  { label: "Mission", href: "#ourmission" },
  { label: "Vision", href: "#ourvision" },
  { label: "Date & Time", href: "#datetime" },
  { label: "Discussion", href: "#discussion" },
  { label: "Speakers", href: "#speakers" },
  { label: "Why", href: "#why" },
  { label: "Partnership", href: "#partnership" },
  { label: "Connect", href: "#connect" },
  { label: "Join Us", href: "#joinus" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const headerRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 2);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onHashChange = () => setOpen(false);
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  // Smooth scroll with sticky-header offset (80px)
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (!href.startsWith("#")) return;
    const el = document.querySelector(href) as HTMLElement | null;
    if (!el) return;
    e.preventDefault();

    const headerH = Math.round(headerRef.current?.getBoundingClientRect().height ?? 80);
    const y = el.getBoundingClientRect().top + window.scrollY - headerH - 2;
    window.scrollTo({ top: y, behavior: "smooth" });
    history.replaceState(null, "", href);
    setOpen(false);
  };

  const linkClass =
    "relative text-sm font-medium text-zinc-700 transition-colors hover:text-red-600 " +
    "after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-full after:bg-red-600 " +
    "after:origin-left after:scale-x-0 after:transition-transform after:duration-200 hover:after:scale-x-100";

  return (
    <header
      ref={headerRef}
      className={[
        "sticky top-0 z-50 w-full border-b bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/60",
        "transition-shadow duration-300",
        scrolled ? "shadow-sm border-zinc-200" : "border-transparent",
      ].join(" ")}
      role="banner"
    >
      {/* BAR — hard height 80px, no vertical padding */}
      <div className="max-w-[1280px] mx-auto px-4 h-20 min-h-0 py-0">
        <div className="flex h-full items-center justify-between">
          {/* Logo (normal size) */}
          <a
            href="#hero"
            className="flex items-center gap-2"
            onClick={(e) => handleNavClick(e, "#hero")}
          >
            <img src="/logo1.png" alt="Inspire East Logo" className="w-[60px] h-[60px] object-contain" />
            <span className="text-xl font-extrabold tracking-tight text-zinc-900">
              INSPIRE&nbsp;EAST
            </span>
          </a>
          {/* Desktop nav (normal size) */}
          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={linkClass}
                onClick={(e) => handleNavClick(e, item.href)}
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Mobile hamburger */}
          <button
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="md:hidden inline-flex items-center justify-center rounded-lg border border-zinc-200 px-3 py-2 text-zinc-700 hover:text-red-600 hover:border-red-200 transition-colors"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true">
              {open ? (
                <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              ) : (
                <path d="M3 6h18M3 12h18M3 18h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu (collapsed height = 0; doesn’t affect the 80px bar) */}
      <div
        className={[
          "md:hidden overflow-hidden border-t border-zinc-100",
          "transition-[max-height] duration-300 ease-in-out",
          open ? "max-h-[480px]" : "max-h-0",
        ].join(" ")}
      >
        <nav className="max-w-[1280px] mx-auto px-4">
          <ul className="flex flex-col">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={
                    "block px-2 py-2 text-zinc-800 hover:text-red-600 transition-colors " +
                    "relative after:absolute after:left-2 after:right-2 after:bottom-1 after:h-[2px] after:bg-red-600 " +
                    "after:origin-left after:scale-x-0 after:transition-transform after:duration-200 hover:after:scale-x-100"
                  }
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
