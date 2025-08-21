"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import GavelOutlinedIcon from "@mui/icons-material/GavelOutlined";
import MenuBookOutlinedIcon from "@mui/icons-material/MenuBookOutlined";
import EmojiObjectsOutlinedIcon from "@mui/icons-material/EmojiObjectsOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import HubOutlinedIcon from "@mui/icons-material/HubOutlined";

const Discussion: React.FC = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true,
      offset: 100,
    });
  }, []);

  return (
    <section className="container mx-auto py-12 md:py-16">
      {/* Title */}
      <h2
        className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 text-center"
        data-aos="fade-up"
      >
        Diverse Panel Discussions
      </h2>

      {/* Grid */}
      <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-3 text-center">
        {/* Item 1 */}
        <div
          className="flex flex-col items-center"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <div className="text-red-500 mb-4">
            <GavelOutlinedIcon sx={{ fontSize: 50 }} />
          </div>
          <h3 className="text-xl font-semibold text-gray-900">
            Socio-Political Landscape
          </h3>
          <p className="mt-2 text-gray-700 max-w-[250px]">
            Exploring governance, policy, and community development in the
            region.
          </p>
        </div>

        {/* Item 2 */}
        <div
          className="flex flex-col items-center"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <div className="text-red-500 mb-4">
            <MenuBookOutlinedIcon sx={{ fontSize: 50 }} />
          </div>
          <h3 className="text-xl font-semibold text-gray-900">
            Literature & Arts
          </h3>
          <p className="mt-2 text-gray-700 max-w-[250px]">
            Celebrating the rich literary heritage and contemporary artistic
            expressions of East India.
          </p>
        </div>

        {/* Item 3 */}
        <div
          className="flex flex-col items-center"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <div className="text-red-500 mb-4">
            <EmojiObjectsOutlinedIcon sx={{ fontSize: 50 }} />
          </div>
          <h3 className="text-xl font-semibold text-gray-900">
            Cultural Tapestry
          </h3>
          <p className="mt-2 text-gray-700 max-w-[250px]">
            Delving into the diverse traditions, festivals, and folk arts that
            define East India&apos;s identity.
          </p>
        </div>

        {/* Item 4 */}
        <div
          className="flex flex-col items-center"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <div className="text-red-500 mb-4">
            <BarChartOutlinedIcon sx={{ fontSize: 50 }} />
          </div>
          <h3 className="text-xl font-semibold text-gray-900">
            Economic Imperatives
          </h3>
          <p className="mt-2 text-gray-700 max-w-[250px]">
            Analyzing growth strategies, investment opportunities, and
            sustainable economic models.
          </p>
        </div>

        {/* Item 5 */}
        <div
          className="flex flex-col items-center"
          data-aos="fade-up"
          data-aos-delay="500"
        >
          <div className="text-red-500 mb-4">
            <HubOutlinedIcon sx={{ fontSize: 50 }} />
          </div>
          <h3 className="text-xl font-semibold text-gray-900">
            Emerging Fields
          </h3>
          <p className="mt-2 text-gray-700 max-w-[250px]">
            Highlighting innovations in technology, healthcare, and sustainable
            practices shaping tomorrow.
          </p>
        </div>
      </div>

      {/* Closing line */}
      <p
        className="mt-12 text-lg text-gray-700 text-center max-w-3xl mx-auto"
        data-aos="fade-up"
        data-aos-delay="600"
      >
        Each session is designed to provoke thought and inspire action.
      </p>
    </section>
  );
};

export default Discussion;
