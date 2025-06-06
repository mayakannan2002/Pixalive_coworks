import React, { useEffect, useRef } from 'react';
import userImg from './../assets/home/logo.png';
import userImg1 from './../assets/home/Ellipse 2052.png';
import userImg2 from './../assets/home/Ellipse 2053.png';
import siva from './../assets/home/Ellipse 2054.png';

const testimonialData = [
  {
    id: 1,
    image: userImg1,
    username: "Freelancer",
    description:
      '"Pixalive Tech Coworks has completely transformed the way I work. The energy, the network, and the amenities are just perfect for freelancers like me. I found clients, collaborators, and a space that feels like home."',
    name: 'Dinesh',
    role: 'Freelance Developer',
  },
  {
    id: 2,
    image: userImg,
    username: "Startup Team",
    description:
      '"We moved our 5-member team into Pixalive Tech Coworks and never looked back. From reliable internet to meeting rooms and great coffee, everything’s seamless. Plus, we’ve made valuable connections with other tech teams."',
    name: 'Athresh',
    role: 'Co-founder, Hirewalks',
  },
  {
    id: 3,
    image: userImg2,
    username: "Laptop Rental User",
    description:
      '"I needed a high-performance laptop for a short-term project, and Pixalive’s rental service was a lifesaver. Hassle-free, affordable, and business-ready."',
    name: 'Kesavan',
    role: 'UI/UX Designer',
  },
  {
    id: 4,
    image: siva,
    username: "Freelance Business",
    description:
      '"Pixalive Tech Coworks gave me the perfect environment to grow my freelance business. The community is vibrant, the support is solid, and having access to tech resources like laptop rentals made scaling my work so much easier."',
    name: 'Sivakumar',
    role: 'Freelance Web Developer',
  },
];

export default function TestimonialSlider() {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;

    const getScrollAmount = () => {
      const firstCard = container?.children?.[0];
      if (!firstCard) return 0;
      const style = window.getComputedStyle(firstCard);
      const marginRight = parseFloat(style.marginRight);
      return firstCard.offsetWidth + marginRight;
    };

    let scrollAmount = getScrollAmount();

    const handleResize = () => {
      scrollAmount = getScrollAmount();
    };

    window.addEventListener("resize", handleResize);

    const interval = setInterval(() => {
      if (
        container.scrollLeft + scrollAmount >=
        container.scrollWidth - container.offsetWidth
      ) {
        container.scrollTo({ left: 0, behavior: "auto" });
      } else {
        container.scrollBy({ left: scrollAmount, behavior: "smooth" });
      }
    }, 3000);

    return () => {
      clearInterval(interval);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      {/* Top Text Section */}
    <section className="py-12 px-12 flex justify-center">
      <div className="max-w-[1280px] w-full flex flex-col md:flex-row gap-12">
        {/* Left Label */}
        <div className="md:w-1/2">
          <p className="text-m text-black">Loved by the People <br /> Who Work Here</p>
        </div>

        {/* Right Text */}
        <div className="md:w-2/2 max-w-[500px]">
          <p className="text-xl md:text-[28px] md:text-2xl font-semibold text-black leading-relaxed">
           Our members say it best. Dive into their experiences and discover why Pixalive isn’t just a co-working space — it’s a thriving community.
           </p>
           </div>
      </div>
    </section>

      {/* Testimonial Slider Section */}

          <div
            ref={containerRef}
            className="flex gap-6 overflow-x-scroll scroll-smooth scrollbar-hide "
            style={{ scrollSnapType: "x mandatory" }}
          >
            {testimonialData.map((item) => (
              <div
                key={item.id}
                className="flex-shrink-0 w-[90vw] sm:w-[70vw] md:w-[50vw] lg:w-[32%] bg-white border border-gray-200 shadow-md  px-6 py-6"
                style={{ scrollSnapAlign: "start" }}
              >
                <div className="flex flex-col h-full">
                  <img
                    src={item.image}
                    alt="user"
                    className="w-12 h-12 mb-4 object-cover"
                  />
                  <h3 className="text-black font-semibold text-md mb-2">
                    {item.username}
                  </h3>
                  <p className="text-gray-700 text-sm leading-relaxed mb-6">
                    {item.description}
                  </p>
                  <div className="mt-auto">
                    <p className="text-black font-semibold">{item.name}</p>
                    <p className="text-gray-500 text-sm">{item.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

    </>
  );
}
