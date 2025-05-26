import React from 'react';

const pricingOptions = [
  {
    title: 'Private Cabin',
    price: '₹8,999',
    unit: '/month',
    features: [
      'Fully furnished & lockable cabin',
      'High-speed internet',
      'Complimentary meeting room hours',
    ],
  },
  {
    title: 'Dedicated Desk',
    price: '₹6,499',
    unit: '/month',
    features: [
      'Fixed personal desk in shared space',
      '24/7 access to co-working areas',
      'Mail handling & basic admin support',
    ],
  },
  {
    title: 'Hot Desk',
    price: '₹4,499',
    unit: '/month',
    features: [
      'Pick any available desk',
      'Perfect for remote workers & freelancers',
      'Unlimited tea/coffee & high-speed Wi-Fi',
    ],
  },
  {
    title: 'Meeting Room',
    price: '₹399',
    unit: '/Hour',
    features: [
      '4 to 12-seater options',
      'Projector, whiteboard & video conferencing',
      'Book via app or web',
    ],
  },
  {
    title: 'Virtual Office',
    price: '₹1,999',
    unit: '/month',
    features: [
      'Use our premium business address',
      'Mail & courier handling',
      'Add-on services: GST registration, call answering',
    ],
  },
  {
    title: 'Laptop Rental',
    price: '₹999',
    unit: '/month',
    features: [
      'Pre-installed essential software',
      'Maintenance and tech support included',
      'Minimum 5 devices per request',
    ],
  },
];

const PricingCards = () => {
  return (
    <div className="px-4 py-10 max-w-[1260px] mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {pricingOptions.map((option, idx) => (
          <div
            key={idx}
            className="border border-gray-300 shadow-sm p-6 flex flex-col justify-between hover:shadow-md transition-shadow bg-white  w-full h-full min-h-[370px]"
          >
            <div>
              <h3 className="text-[22px] md:text-[26px] font-semibold mb-2">{option.title}</h3>
              <p className="text-[40px] md:text-[50px] font-bold mb-1">
                {option.price}
                <span className="text-gray-600 text-[18px] md:text-[20px] font-medium">{option.unit}</span>
              </p>
              <ul className="text-[15px] md:text-[16px] text-gray-600 mt-4 space-y-3.5">
                {option.features.map((feature, i) => (
                  <li key={i}>• {feature}</li>
                ))}
              </ul>
            </div>
            <button className="mt-6 bg-black cursor-pointer text-white w-full py-2 rounded hover:bg-white hover:text-black hover:border">
              Book a Space
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricingCards;
