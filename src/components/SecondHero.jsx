import React from "react";
import BG1 from "../../src/assets/home/bg1.png";
import { ArrowRight } from "lucide-react";

const LaptopBookingSection = () => {
  return (
    <section
      className="relative w-full min-h-[600px] md:min-h-[900px] bg-cover bg-center font-lufga flex justify-center items-center "
      loading="lazy"
      style={{
        backgroundImage: `url(${BG1})`,
      }}
    >
      <div className="absolute inset-0 bg-black/50 z-0" />
      
      <div className="relative z-10 w-full max-w-[1280px] px-4 md:px-12 text-white">
        <div className="py-12 sm:py-16 md:py-24 lg:py-32">
          <h2 className="text-base sm:text-lg md:text-xl font-semibold text-[#B0B0B0]">
            Laptop Rental
          </h2>

          <h1 className="mt-4 text-2xl sm:text-4xl md:text-5xl font-semibold leading-snug md:leading-[150%]">
            High-Performance <span className="font-black italic underline underline-offset-8">Laptops.</span>
            <br />
            Smart <span className="font-black italic underline underline-offset-8">Rental Plans.</span>
            <br />
            Just for <span className="font-black italic underline underline-offset-8">Tech-Driven Teams.</span>
          </h1>

          <p className="mt-6 text-sm sm:text-base md:text-lg text-[#B0B0B0]">
            Whether you’re a freelancer, startup, or visiting professional, our laptop rental service offers
            <br className="hidden sm:inline" />
            you the tech you need—without the hassle of owning or maintaining devices.
          </p>

          <div className="mt-8 sm:mt-10">
            <button className="bg-white cursor-pointer mt-20 text-black px-6 py-3 font-semibold  hover:bg-gray-200 transition">
              Book your laptop →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LaptopBookingSection;
