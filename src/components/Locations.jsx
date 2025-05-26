import React, { useState } from 'react';
import location1 from '../assets/home/location1.png';
import location2 from '../assets/home/location2.png';

const Locations = () => {
  const [activeTab, setActiveTab] = useState(0);

  const locations = [
    {
      img: location1,
      alt: "Meeting Room",
    },
    {
      img: location2,
      alt: "Workspace Area",
    },
  ];

  const address = `3rd Floor, Reliance Smart Bazaar Building, Bus Stop, Hosur Rd, opp. E City, Phase II,
Bengaluru, Karnataka 560100`;

  return (
    <section className=" max-w-[1260px] mx-auto px-5 bg-white py-10 md:py-16 mb-20 mt-10">
      <div className="max-w-[1250px] mx-auto px-4 md:px-0">
        {/* Top Text Row */}
        <div className="flex flex-col md:flex-row justify-between text-[16px] md:text-base text-black mb-6 md:mb-8">
          <div className="leading-tight">
            Choose Your <br />
            <span className="font-medium">Pixalive co-workspace Location</span>
          </div>
          <div className="text-right leading-tight max-w-md mt-4 md:mt-0">
            {address}
          </div>
        </div>

        {/* Section Title */}
        <h2 className="text-2xl md:text-3xl font-semibold mb-8 md:mb-12 ml-0 md:ml-[25.3rem]">
          Locations
        </h2>

        {/* MOBILE VIEW - Tabs + Single Image */}
        <div className="md:hidden">
          {/* Tabs */}
          <div className="flex justify-center space-x-6 mb-6 border-b border-gray-300">
            {locations.map((loc, idx) => (
              <button
                key={idx}
                onClick={() => setActiveTab(idx)}
                className={`pb-2 font-medium text-sm ${
                  activeTab === idx
                    ? 'border-b-2 border-gray-300 text-black'
                    : 'text-gray-600 hover:text-black'
                }`}
              >
                {loc.alt}
              </button>
            ))}
          </div>
          {/* Active Image */}
          <div className="w-full aspect-[4/3]">
            <img
              src={locations[activeTab].img}
              alt={locations[activeTab].alt}
              className="w-full h-full object-cover rounded-sm shadow"
              loading="lazy"
            />
          </div>
        </div>

        {/* DESKTOP VIEW - Original Grid */}
        <div className="hidden md:grid grid-cols-2 gap-6 ml-[25.3rem]">
          {locations.map((loc, idx) => (
            <div key={idx} className="aspect-[4/3] w-full">
              <img
                src={loc.img}
                alt={loc.alt}
                className="w-full h-full object-cover rounded-sm shadow"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Locations;
