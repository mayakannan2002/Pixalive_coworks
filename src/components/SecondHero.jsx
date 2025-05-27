import React from "react";
import BG1 from "../../src/assets/home/bg1.png";
import { ArrowRight } from "lucide-react";

const LaptopBookingSection = () => {
  return (
    <section
      className="relative w-full h-[600px] md:h-[900px] mt-15 md:mt-35 bg-cover bg-center font-lufga  flex justify-center items-center"
      style={{
        backgroundImage: `url(${BG1})`, // Replace with your actual image path
      }}
    >
      <div className="absolute inset-0 bg-black/50 z-0"></div>
      <div className="relative z-10 max-w-[1280px] mx-auto md:p-0 p-3 md:ml-43 ml:15  text-[#ffffff] ">
        <h1 className="text-lg  sm:text-lg md:text-lg font-semibold leading-snug text-[#B0B0B0] sm:leading-snug md:leading-tight">
        Laptop Rental
        </h1>
        <h1 className="text-2xl sm:text-3xl md:text-5xl md:mt-20 mt-8 leading-[180%] sm:leading-snug md:leading-[150%]">
        High-Performance <span className="font-black italic underline underline-offset-12">Laptops.</span>
          <br />
          Smart <span className="font-black italic underline underline-offset-12">Rental Plans.</span>
          <br />
          Just for <span className="font-black italic underline underline-offset-12">Tech-Driven Teams.</span>
        </h1>

        <p className="text-md sm:text-md md:text-lg mt-6 sm:mt-8 text-[#B0B0B0]">
        Whether you’re a freelancer, startup, or visiting professional, our laptop rental service offers 
          <br className="hidden sm:block" />
          you the tech you need—without the hassle of owning or maintaining devices.
        </p>

        <div className="mt-10 sm:mt-8 flex flex-col  sm:flex-row sm:justify-between sm:items-center gap-4 ">
          <button className="bg-white text-[#000000] px-6 py-2.5 w-50 sm:w-auto font-semibold  hover:bg-gray-200 transition cursor-pointer">
          Book your laptop →


          </button>
        </div>
      </div>
    </section>
  );
};

export default LaptopBookingSection;
