import BecomeTutorCTA from "../components/BecomeTutorCTA";
import FAQSection from "../components/FAQSection";
import HeroSection from "../components/HeroSection";
import InspirationSection from "../components/InspirationSection";
import LearningSupport from "../components/LearningSupport";
import PerformanceBoost from "../components/PerformanceBoost";
import Testimonials from "../components/Testimonials";
import TrustedTutors from "../components/TrustedTutors";
import WhyMilestone from "../components/WhyMilestone";

function Home() {
  return (
    <div>
      <HeroSection />
      <LearningSupport />
      <Testimonials />
      <PerformanceBoost />
      <WhyMilestone />
      <TrustedTutors />
      <InspirationSection />
      <FAQSection />
      <BecomeTutorCTA />
    </div>
  );
}

export default Home;
