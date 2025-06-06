import React from 'react';

const PlansAndPricing = () => {
  return (
    <section className="py-12 px-12 flex justify-center">
      <div className="max-w-[1280px] w-full flex flex-col md:flex-row gap-12">
        {/* Left Label */}
        <div className="md:w-1/2">
          <p className="text-m text-black">Plans & Pricing</p>
        </div>

        {/* Right Text */}
        <div className="md:w-2/2 max-w-[500px]">
          <p className="text-xl md:text-[28px] md:text-2xl font-semibold text-black leading-relaxed">
            Pixalive Tech Coworks offers flexible plans designed to grow with your business.
            Whether you're a freelancer, a startup, or a growing team — we have a plan that fits.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PlansAndPricing;
