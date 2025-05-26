import React from 'react';
import bgimage from '../assets/home/secherobg.png';
import { motion } from 'framer-motion';

const SecondHero = () => {
  return (
    <div className="relative w-full max-w-[1260px] h-[656px] mx-auto px-4 sm:px-6 lg:px-8 md:mt-[140px] overflow-hidden">

      {/* Mobile Image */}
      <img
        src={bgimage}
        alt="Hero Background"
        className="absolute inset-0 w-full h-full object-cover md:hidden"
        style={{ transform: 'translateZ(0)', willChange: 'transform' }}
      />

      {/* Desktop Background */}
      <div
        className="hidden md:block absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${bgimage})` }}
      ></div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 z-0"></div>

      {/* Hero Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeInOut' }}
        viewport={{ once: false, amount: 0.6 }}
        className="relative z-10 flex flex-col justify-center items-center text-center   h-full"
      >
        <h1
          className="text-[#FFFFFF] text-3xl sm:text-4xl md:text-5xl lg:text-6xl  leading-tight"
          style={{ fontFamily: 'LufgaThin' }}
        >
          Work Smarter, <br className="hidden sm:block" /> Not Harder
        </h1>
        <button
          className="bg-[#000000] text-[#FFFFFF] text-xl md:mb-45 mb-20 px-6 py-3 md:px-5 md:py-2 mt-10  hover:bg-amber-500 transition"
          style={{ fontFamily: 'LufgaThin' }}
        >
          Book a Space
        </button>
      </motion.div>
    </div>
  );
};

export default SecondHero;
