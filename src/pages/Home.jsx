import FaqTabs from "../components/FaqTabs"
import Footer from "../components/Footer"
import HeroSection from "../components/HeroSection"
import Locations from "../components/Locations"
import MembershipSlider from "../components/MembershipSlider"
import PlansAndPricing from "../components/PlansAndPricing"
import PricingCards from "../components/PricingCards"
import SecondHero from "../components/SecondHero"
import WorkplaceIntro from "../components/WorkplaceIntro"

export const Home = () => {
  return (
    <div >
        <HeroSection />
        <WorkplaceIntro />
        <MembershipSlider />
        <FaqTabs />
        <SecondHero />
        <PlansAndPricing  />
        <PricingCards />
        <Locations />
        <Footer />
    </div>
  )
}
