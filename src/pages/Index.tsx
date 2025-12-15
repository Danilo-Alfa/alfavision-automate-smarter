import Header from "@/components/landing/Header";
import HeroSection from "@/components/landing/HeroSection";
import ProblemSolution from "@/components/landing/ProblemSolution";
import Benefits from "@/components/landing/Benefits";
import HowItWorks from "@/components/landing/HowItWorks";
import Testimonials from "@/components/landing/Testimonials";
import Differentials from "@/components/landing/Differentials";
import FinalCTA from "@/components/landing/FinalCTA";
import Footer from "@/components/landing/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      <Header />
      <HeroSection />
      <ProblemSolution />
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
