"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import LightbulbOutlinedIcon from "@mui/icons-material/LightbulbOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";

const OurMission: React.FC = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true }); // Animation speed
  }, []);

  return (
    <section className="container mx-auto py-12 md:py-16">
      {/* Heading */}
      <h2
        className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 text-center"
        data-aos="fade-up"
      >
        Our Mission: Igniting East India&apos;s Potential
      </h2>

      {/* Main Container */}
      <div className="relative mt-6 md:mt-10 flex flex-col md:flex-row items-center justify-center md:gap-12 gap-8">
        {/* Card 1 */}
        <div
          className="bg-red-100 rounded-2xl p-6 sm:p-8 md:p-10 w-full md:w-80 text-center shadow-lg 
          transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
          data-aos="fade-up"
        >
          <div className="flex justify-center mb-4 sm:mb-6">
            <ChatBubbleOutlineOutlinedIcon className="text-red-600" fontSize="large" />
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-gray-900">
            Foster Dialogue
          </h3>
          <p className="mt-3 sm:mt-4 text-sm sm:text-base text-gray-700 leading-relaxed">
            Create a dynamic platform for robust discussions on critical
            socio-political and economic issues impacting East India.
          </p>
        </div>

        {/* Divider with Icon 1 */}
        <div
          className="hidden md:flex flex-col justify-center items-center relative"
          data-aos="zoom-in"
        >
          <div className="w-px bg-red-200 h-24"></div>
          <div className="absolute top-1/2 transform -translate-y-1/2 bg-white rounded-full p-3 shadow-md">
            <LightbulbOutlinedIcon className="text-red-600" fontSize="large" />
          </div>
        </div>

        {/* Card 2 */}
        <div
          className="bg-red-100 rounded-2xl p-6 sm:p-8 md:p-10 w-full md:w-80 text-center shadow-lg 
          transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
          data-aos="fade-up"
          data-aos-delay="150"
        >
          <div className="flex justify-center mb-4 sm:mb-6">
            <LightbulbOutlinedIcon className="text-red-600" fontSize="large" />
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-gray-900">
            Drive Innovation
          </h3>
          <p className="mt-3 sm:mt-4 text-sm sm:text-base text-gray-700 leading-relaxed">
            Showcase emerging fields and cutting-edge ideas, inspiring new
            solutions and entrepreneurial spirit across the region.
          </p>
        </div>

        {/* Divider with Icon 2 */}
        <div
          className="hidden md:flex flex-col justify-center items-center relative"
          data-aos="zoom-in"
        >
          <div className="w-px bg-red-200 h-24"></div>
          <div className="absolute top-1/2 transform -translate-y-1/2 bg-white rounded-full p-3 shadow-md">
            <GridViewOutlinedIcon className="text-red-600" fontSize="large" />
          </div>
        </div>

        {/* Card 3 */}
        <div
          className="bg-red-100 rounded-2xl p-6 sm:p-8 md:p-10 w-full md:w-80 text-center shadow-lg 
          transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <div className="flex justify-center mb-4 sm:mb-6">
            <GridViewOutlinedIcon className="text-red-600" fontSize="large" />
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-gray-900">
            Build Community
          </h3>
          <p className="mt-3 sm:mt-4 text-sm sm:text-base text-gray-700 leading-relaxed">
            Connect thought leaders, policymakers, and the public to forge
            powerful collaborations for regional development.
          </p>
        </div>
      </div>

      {/* Bottom Text */}
      <p
        className="mt-10 sm:mt-12 text-center text-base sm:text-lg text-gray-700 max-w-3xl mx-auto"
        data-aos="fade-up"
        data-aos-delay="400"
      >
        Our mission is to empower East India through intellectual exchange and
        collective action.
      </p>
    </section>
  );
};

export default OurMission;