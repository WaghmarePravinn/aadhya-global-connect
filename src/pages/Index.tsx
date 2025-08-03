
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

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <RateCalculator />
      <About />
      <Services />
      <Partners />
      <Leadership />
      <LiveUpdates />
      <Testimonials />
      <PortsComingSoon />
      <Gallery />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
