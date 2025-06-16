import FaqTabs from "../components/FaqTabs";
import HeroSection from "../components/HeroSection";
import Locations from "../components/Locations";
import MembershipSlider from "../components/MembershipSlider";
import PlansAndPricing from "../components/PlansAndPricing";
import PricingCards from "../components/PricingCards";
import LaptopBookingSection from "../components/SecondHero";
import TestimonialSlider from "../components/Testimonials";
import WorkplaceIntro from "../components/WorkplaceIntro";

export const Home = () => {
  return (
    <div>
      <HeroSection />
      <WorkplaceIntro />
      <MembershipSlider />
      <FaqTabs />
      <LaptopBookingSection />
      <PlansAndPricing />
      <PricingCards />

      {/* This is the scroll target */}
      <section id="locations">
        <Locations />
      </section>

      <TestimonialSlider />
    </div>
  );
};
