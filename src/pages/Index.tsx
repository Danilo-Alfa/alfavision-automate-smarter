import Header from "@/components/landing/Header";
import HeroSection from "@/components/landing/HeroSection";
import ProblemSolution from "@/components/landing/ProblemSolution";
import Benefits from "@/components/landing/Benefits";
import HowItWorks from "@/components/landing/HowItWorks";
import Testimonials from "@/components/landing/Testimonials";
import Differentials from "@/components/landing/Differentials";
import FinalCTA from "@/components/landing/FinalCTA";
import Footer from "@/components/landing/Footer";
import StatsSection from "@/components/landing/StatsSection";
import BentoFeatures from "@/components/landing/BentoFeatures";
import ParticleField from "@/components/effects/ParticleField";
import CursorFollower from "@/components/effects/CursorFollower";

const Index = () => {
  return (
    <main className="min-h-screen bg-background overflow-x-hidden relative">
      {/* Interactive particle background */}
      <ParticleField />

      {/* Custom cursor effect */}
      <CursorFollower />

      {/* Main content */}
      <Header />
      <HeroSection />
      <StatsSection />
      <ProblemSolution />
      <BentoFeatures />
      <Benefits />
      <HowItWorks />
      <Testimonials />
      <Differentials />
      <FinalCTA />
      <Footer />
    </main>
  );
};

export default Index;
