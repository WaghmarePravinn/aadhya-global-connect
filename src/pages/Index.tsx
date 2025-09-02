
import Hero from "@/components/Hero";
import About from "@/components/About";
import Leadership from "@/components/Leadership";
import Services from "@/components/Services";
import PortsComingSoon from "@/components/PortsComingSoon";
import Gallery from "@/components/Gallery";
import Contact from "@/components/Contact";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import Partners from "@/components/Partners";
import RateCalculator from "@/components/RateCalculator";
import Testimonials from "@/components/Testimonials";
import LiveUpdates from "@/components/LiveUpdates";
import BusinessCredibility from "@/components/BusinessCredibility";
import EnhancedCTA from "@/components/EnhancedCTA";
import TrackingSection from "@/components/TrackingSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <BusinessCredibility />
      <TrackingSection />
      <RateCalculator />
      <About />
      <Services />
      <Partners />
      <Leadership />
      <LiveUpdates />
      <Testimonials />
      <EnhancedCTA />
      <PortsComingSoon />
      <Gallery />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
