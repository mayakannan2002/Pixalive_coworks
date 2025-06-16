import React from 'react';
import bgImage from './../../src/assets/home/herobg1.png'; // Your background image path
import logo from './../../src/assets/home/plogo.png'; // Your logo path
import { Link } from 'react-router-dom';

const HeroSection = () => {
  const handleScroll = () => {
    const section = document.getElementById("locations"); // updated here
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      className="relative w-full h-screen bg-cover bg-center font-lufga text-white"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="absolute inset-0 bg-black/50 z-0"></div>

      {/* Header */}
      <div className="relative z-10 flex justify-between items-center  py-4 max-w-[1280px] px-3 mx-auto">
        <img src={logo} alt="Logo" className="w-10 h-10" loading='lazy' />
        <Link to="/contact">
          <button className="bg-white text-black px-4 py-2 text-lg font-black hover:bg-gray-200 transition cursor-pointer">
            Let's talk ↗
          </button>
        </Link>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-[1280px] mx-auto px-3 mt-20 sm:mt-13">
        <h1 className="text-2xl sm:text-3xl md:text-5xl font-light leading-[180%] sm:leading-snug md:leading-[180%]">
          Smart <span className="font-black italic underline underline-offset-12">Workspaces.</span>
          <br />
          Seamless <span className="font-black italic underline underline-offset-12">Tools.</span>
          <br />
          Built for <span className="font-black italic underline underline-offset-12">Designers, Developers & Doers.</span>
        </h1>

        <p className="text-md sm:text-base md:text-lg mt-6 sm:mt-8 text-[#B0B0B0]">
          Whether you're a freelancer, a startup, or a remote team, we've built the perfect workspace
          <br className="hidden sm:block" />
          around you. Modern desks, fast internet, and ready-to-use laptops.
        </p>

        <div className="mt-7 sm:mt-8 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
          <Link to="/contact">
            <button className="bg-white text-black px-6 py-2.5 w-46 sm:w-auto text-lg font-semibold hover:bg-gray-200 transition cursor-pointer">
              Book a Space →
            </button>
          </Link>

          {/* Scroll Down Desktop */}
          <button
            onClick={handleScroll}
            className="hidden md:flex items-center gap-2 border border-white px-4 py-2 hover:bg-white/20 transition cursor-pointer"
          >
            <span>Scroll Down</span>
            <span className="text-xl">↓</span>
          </button>
        </div>
      </div>

      {/* Scroll Down Mobile */}
      <div className="absolute bottom-4 right-4 md:hidden z-10">
        <button
          onClick={handleScroll}
          className="flex items-center gap-2 border border-white px-4 py-2 hover:bg-white/20 transition cursor-pointer"
        >
          <span>Scroll Down</span>
          <span className="text-xl">↓</span>
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
