import React from 'react';
import bgImage from './../../src/assets/home/herobg1.png'; // Your background image path
import logo from './../../src/assets/home/plogo.png'; // Your logo path
import { Link } from 'react-router-dom';

const HeroSection = () => {
  const handleScroll = () => {
    const section = document.getElementById("locations");
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
      <div className="relative z-10 flex justify-between items-center py-4 max-w-[1280px] px-4 md:px-12 mx-auto">
        <img src={logo} alt="Logo" className="w-10 h-10" loading="lazy" />
        <Link to="/contact">
          <button className="group bg-white text-black font-black text-lg px-4 py-2 transition hover:bg-gray-200">
            Let's talk
            <span className="ml-2 inline-block transform transition-transform duration-300 group-hover:translate-x-1">↗</span>
          </button>
        </Link>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-[1280px] mx-auto px-4 md:px-12 mt-20 sm:mt-13">
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

        {/* Buttons Container */}
<div className="mt-7 sm:mt-8 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
  {/* Book a Space Button */}
  <Link to="/contact" className="sm:flex-1">
    <button className="group bg-white text-black px-6 py-2.5 text-lg font-semibold hover:bg-gray-200 transition duration-300 cursor-pointer w-full sm:w-auto whitespace-nowrap">
      Book a Space
      <span className="inline-block ml-2 transform transition-transform duration-300 group-hover:translate-x-1">
        →
      </span>
    </button>
  </Link>

  {/* Scroll Down Button */}
  <button
    onClick={handleScroll}
    className="group flex items-center justify-center gap-2 border border-white px-4 py-2 hover:bg-white/20 transition duration-300 cursor-pointer w-full sm:w-auto whitespace-nowrap"
  >
    <span>Scroll Down</span>
    <span className="inline-block transform transition-transform duration-300 group-hover:translate-y-1">
      ↓
    </span>
  </button>
</div>

      </div>
    </section>
  );
};

export default HeroSection;

