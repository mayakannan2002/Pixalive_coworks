import React, { useEffect, useRef } from "react";
import member1 from "../assets/home/member1.png";
import member2 from "../assets/home/member2.png";
import member3 from "../assets/home/member3.png";
import member4 from "../assets/home/member4.png";
import member5 from "../assets/home/member5.png";
import member6 from "../assets/home/member6.png";

const membershipPlans = [
  {
    title: "Private Cabins",
    description: "For startups and small teams looking for privacy, security, and focus.",
    image: member1,
  },
  {
    title: "Dedicated Desks",
    description: "Perfect for professionals and solo founders who want a consistent spot in a shared environment.",
    image: member2,
  },
  {
    title: "Hot Desks",
    description: "Flexibility at its best. Ideal for freelancers, remote workers, or part-time users.",
    image: member3,
  },
  {
    title: "Meeting Rooms",
    description: "Modern spaces for brainstorming, meetings, and presentations.",
    image: member4,
  },
  {
    title: "Event Spaces",
    description: "Host your events in beautifully designed, well-equipped venues.",
    image: member5,
  },
  {
    title: "Virtual Office",
    description: "A professional address and support for your remote business presence.",
    image: member6,
  },
];

const MembershipSlider = () => {
  const scrollRef = useRef(null);

  useEffect(() => {
    const container = scrollRef.current;

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
      if (container.scrollLeft + scrollAmount >= container.scrollWidth - container.offsetWidth) {
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
    <div className="max-w-[1260px] mx-auto px-4 sm:px-6 md:px-10 py-12 bg-white">
      <h2 className="text-[18px] sm:text-2xl font-medium mb-6">
        Discover Our Membership <br className="hidden sm:block" /> Plans
      </h2>

      {/* Horizontal scroll container with padding and spacing */}
      <div className="overflow-hidden">
        <div
          ref={scrollRef}
          className="flex overflow-x-scroll scroll-smooth scrollbar-hide px-4 gap-4 sm:gap-6"
          style={{ scrollSnapType: "x mandatory" }}
        >
          {[...membershipPlans, ...membershipPlans].map((plan, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-[85vw] sm:w-[60vw] md:w-[40vw] lg:w-[calc(100%/3.2)] scroll-snap-align-start"
              style={{ scrollSnapAlign: "start" }}
            >
              <div className="bg-white shadow-md overflow-hidden">
                <img
                  src={plan.image}
                  alt={plan.title}
                  className="w-full h-56 md:h-64 object-cover"
                  loading="lazy"
                />
                <div className="p-4">
                  <h3 className="text-lg font-bold">{plan.title}</h3>
                  <p className="text-sm text-gray-600 mt-2">{plan.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MembershipSlider;
