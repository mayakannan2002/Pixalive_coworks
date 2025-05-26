import React from 'react';
import bgimage from '../assets/home/secherobg.png';
import { motion } from 'framer-motion';

const SecondHero = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden">

      {/* Mobile-only parallax image */}
      <img
        src={bgimage}
        alt="Hero Background"
        className="absolute inset-0 w-full h-full object-cover md:hidden"
        style={{ transform: 'translateZ(0)', willChange: 'transform' }}
      />

      {/* Desktop background with Tailwind */}
      <div
        className="hidden md:block absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${bgimage})` }}
      ></div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 z-0"></div>

      {/* Hero content with animation that triggers every time in view */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeInOut' }}
        viewport={{ once: false, amount: 0.6 }} // 👈 triggers every time it's 60% in view
        className="relative z-10 flex flex-col justify-center items-center text-center px-4 h-full"
      >
        <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-semibold mb-6">
          Work Smarter, <br className="hidden sm:block" /> Not Harder
        </h1>
        <button className="bg-white cursor-pointer text-black font-medium px-6 py-3 rounded hover:bg-gray-200 transition">
          Book a Space
        </button>
      </motion.div>
    </div>
  );
};

export default SecondHero;
