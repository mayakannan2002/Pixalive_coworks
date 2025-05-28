import FaqTabs from "../components/FaqTabs"
import Footer from "../components/Footer"
import HeroSection from "../components/HeroSection"
import MembershipSlider from "../components/MembershipSlider"
import PlansAndPricing from "../components/PlansAndPricing"
import PricingCards from "../components/PricingCards"
import LaptopBookingSection from "../components/SecondHero"
import WorkplaceIntro from "../components/WorkplaceIntro"
import TestimonialsSection from "../components/Testimonials"

export const Home = () => {
  return (
    <div >
        <HeroSection />
        <WorkplaceIntro />
        <MembershipSlider />
        <FaqTabs />
        <LaptopBookingSection />
        <PlansAndPricing  />
        <PricingCards />
        
        <TestimonialsSection />
        <Footer />
    </div>
  )
}
