import React from 'react';

const WorkplaceIntro = () => {
  return (
    <section className="flex flex-col md:flex-row  px-3 items-center md:items-start justify-between gap-6  max-w-[1280px] mx-auto mt-[80px] md:mt-[140px] mb-[100px] h-auto bg-white">

      {/* Left small heading */}
      <div className="w-full md:w-1/3 flex justify-center md:justify-start">
        <p className="text-[16px] sm:text-[18px] text-black text-center md:text-left leading-tight">
          Workplace Options<br />for Every Need
        </p>
      </div>

      {/* Right main heading */}
      <div className="w-full md:w-2/3 flex justify-center md:justify-end">
        <h1 className="text-[24px] sm:text-[30px] md:text-[36px] leading-[140%] font-semibold text-black text-center md:text-left max-w-[600px]">
          Finding the ideal space is a thing of the past. Welcome to a new era of productivity and collaboration.
        </h1>
      </div>

    </section>
  );
};

export default WorkplaceIntro;
