import React from 'react';
import bgImage from './../../src/assets/home/herobg1.png'; // Replace with your actual background image path
import logo from './../../src/assets/home/plogo.png'; // Replace with your logo image path
import { ArrowRight } from "lucide-react";
const HeroSection = () => {
  return (
    <section
      className="relative w-full h-screen bg-cover bg-center font-lufga text-white"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="absolute inset-0 bg-black/50 z-0"></div>

      {/* Header */}
      <div className="relative z-10 flex justify-between items-center px-4 sm:px-6 py-4 max-w-[1280px] mx-auto">
        <img src={logo} alt="Logo" className="w-10 h-10" />
        <button className="bg-white text-black px-4 py-2  text-lg font-black hover:bg-gray-200 transition cursor-pointer">
          Let's talk ↗
        </button>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-[1280px] mx-auto px-4 sm:px-6 mt-29 sm:mt-33">
        <h1 className="text-2xl sm:text-3xl md:text-5xl font-light leading-snug sm:leading-snug md:leading-[180%]">
          Smart <span className="font-black italic  underline underline-offset-12">Workspaces.</span>
          <br />
          Seamless <span className="font-black italic underline underline-offset-12">Tools.</span>
          <br />
          Built for <span className="font-black italic underline underline-offset-12">Designers, Developers & Doers.</span>
        </h1>

        <p className="text-sm sm:text-base md:text-lg mt-3 sm:mt-8 text-[#B0B0B0]">
          Whether you're a freelancer, a startup, or a remote team, we've built the perfect workspace
          <br className="hidden sm:block" />
          around you. Modern desks, fast internet, and ready-to-use laptops.
        </p>

        <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
          <button className="bg-white text-black px-6 py-2.5 font-semibold  hover:bg-gray-200 transition cursor-pointer">
            Book a Space →

          </button>

          {/* Scroll Down Desktop */}
          <div className="hidden md:flex items-center gap-2 border border-white px-4 py-2  hover:bg-white/20 transition cursor-pointer">
            <span>Scroll Down</span>
            <span className="text-xl">↓</span>
          </div>
        </div>
      </div>

      {/* Scroll Down Mobile */}
      <div className="absolute bottom-4 right-4 md:hidden z-10">
        <div className="flex items-center gap-2 border border-white px-4 py-2  hover:bg-white/20 transition cursor-pointer">
          <span>Scroll Down</span>
          <span className="text-xl">↓</span>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
