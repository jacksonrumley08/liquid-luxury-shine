import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WhyFiltration from "@/components/WhyFiltration";
import Benefits from "@/components/Benefits";
import WhyChooseUs from "@/components/WhyChooseUs";
import HowItWorks from "@/components/HowItWorks";
import CTABanner from "@/components/CTABanner";
import Footer from "@/components/Footer";
import WaterParticles from "@/components/WaterParticles";

const Index = () => {
  return (
    <div className="relative min-h-screen">
      <WaterParticles />
      <Navbar />
      <Hero />
      <WhyFiltration />
      <Benefits />
      <WhyChooseUs />
      <HowItWorks />
      <CTABanner />
      <Footer />
    </div>
  );
};

export default Index;
