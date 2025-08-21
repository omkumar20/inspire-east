// components/Footer.tsx
"use client";

import React from "react";
import StarRoundedIcon from "@mui/icons-material/StarRounded";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import FavoriteIcon from "@mui/icons-material/Favorite";

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

export default function Footer() {
  const year = new Date().getFullYear();

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (!href.startsWith("#")) return;
    const el = document.querySelector(href) as HTMLElement | null;
    if (!el) return;
    e.preventDefault();

    // Offset for sticky header (80px)
    const headerEl = document.querySelector("header[role='banner']") as HTMLElement | null;
    const headerH = Math.round(headerEl?.getBoundingClientRect().height ?? 80);
    const y = el.getBoundingClientRect().top + window.scrollY - headerH - 2;

    window.scrollTo({ top: y, behavior: "smooth" });
    history.replaceState(null, "", href);
  };

  return (
    <footer className="border-t border-zinc-200 bg-zinc-50">
      {/* Top */}
      <div className="max-w-[1280px] mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand/Blurb */}
          <div className="md:col-span-2 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2">
              <StarRoundedIcon className="text-red-600" fontSize="medium" />
              <span className="text-lg font-bold tracking-tight text-zinc-900">Inspire East</span>
            </div>
            <p className="mt-4 max-w-prose text-zinc-700 mx-auto md:mx-0">
              Fostering dialogue, innovation, and community to unlock East India’s potential.
              Join us in building a future that’s inclusive, ambitious, and collaborative.
            </p>

            {/* Socials */}
            <div className="mt-6 flex items-center justify-center md:justify-start gap-4">
              <a href="#" aria-label="Twitter / X" className="text-zinc-600 hover:text-red-600 transition-colors">
                <TwitterIcon fontSize="medium" />
              </a>
              <a href="#" aria-label="LinkedIn" className="text-zinc-600 hover:text-red-600 transition-colors">
                <LinkedInIcon fontSize="medium" />
              </a>
              <a href="#" aria-label="YouTube" className="text-zinc-600 hover:text-red-600 transition-colors">
                <YouTubeIcon fontSize="medium" />
              </a>
              <a href="mailto:hello@example.com" className="text-zinc-600 hover:text-red-600 transition-colors">
                <EmailOutlinedIcon fontSize="medium" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="text-center md:text-left">
            <h4 className="text-zinc-900 font-semibold">Quick Links</h4>
            <ul className="mt-4 grid grid-cols-2 gap-y-2 justify-items-center md:justify-items-start">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className="text-zinc-700 hover:text-red-600 transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="text-center md:text-left">
            <h4 className="text-zinc-900 font-semibold">Contact</h4>
            <ul className="mt-4 space-y-3 text-zinc-700">
              <li className="flex items-center justify-center md:justify-start gap-2">
                <EmailOutlinedIcon fontSize="small" className="text-zinc-600" />
                hello@example.com
              </li>
              <li className="flex items-center justify-center md:justify-start gap-2">
                <LocationOnOutlinedIcon fontSize="small" className="text-zinc-600" />
                Ranchi, Jharkhand
              </li>
              <li>
                <a
                  href="#hero"
                  onClick={(e) => handleNavClick(e, "#hero")}
                  className="text-red-600 hover:underline"
                >
                  Back to top ↑
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-zinc-200 bg-white/70">
        <div className="max-w-[1280px] mx-auto px-4 h-auto py-4 sm:h-12 flex flex-col sm:flex-row items-center justify-center sm:justify-between gap-2 text-sm text-zinc-600 text-center sm:text-left">
          <span>© {year} Inspire East. All rights reserved.</span>
          <span className="flex items-center gap-1">
            Made with <FavoriteIcon fontSize="small" className="text-red-600" /> for East India.
          </span>
        </div>
      </div>
    </footer>
  );
}
