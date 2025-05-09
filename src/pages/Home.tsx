import BecomeTutorCTA from "../components/BecomeTutorCTA";
import FAQSection from "../components/FAQSection";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import InspirationSection from "../components/InspirationSection";
import LearningSupport from "../components/LearningSupport";
import Navbar from "../components/Navbar";
import PerformanceBoost from "../components/PerformanceBoost";
import Testimonials from "../components/Testimonials";
import TrustedTutors from "../components/TrustedTutors";
import WhyMilestone from "../components/WhyMilestone";

function Home() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <LearningSupport />
      <Testimonials />
      <PerformanceBoost />
      <WhyMilestone />
      <TrustedTutors />
      <InspirationSection />
      <FAQSection />
      <BecomeTutorCTA />
      <Footer />
    </div>
  );
}

export default Home;
