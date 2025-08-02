
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, Truck, Package, Globe, Clock, Calculator } from "lucide-react";
import { useState } from "react";
import TrackingModal from "./TrackingModal";

const Hero = () => {
  const [isTrackingOpen, setIsTrackingOpen] = useState(false);

  return (
    <>
      <section id="home" className="pt-16 relative min-h-screen flex items-center overflow-hidden">
        {/* Modern Professional Background */}
        <div className="absolute inset-0" style={{background: 'var(--gradient-hero)'}}>
          {/* Subtle Grid Pattern */}
          <div className="absolute inset-0 opacity-[0.02]">
            <div className="absolute inset-0" style={{
              backgroundImage: `
                linear-gradient(hsl(214 100% 40% / 0.1) 1px, transparent 1px),
                linear-gradient(90deg, hsl(214 100% 40% / 0.1) 1px, transparent 1px)
              `,
              backgroundSize: '40px 40px'
            }}></div>
          </div>
          
          {/* Floating Logistics Elements */}
          <div className="absolute inset-0">
            <Truck className="absolute top-20 left-10 w-8 h-8 text-primary/20 animate-bounce hover:text-primary/40 transition-colors cursor-pointer" style={{animationDelay: '0s'}} />
            <Package className="absolute top-32 right-20 w-6 h-6 text-primary/15 animate-pulse hover:text-primary/30 transition-colors cursor-pointer" style={{animationDelay: '1s'}} />
            <Globe className="absolute bottom-40 left-16 w-10 h-10 text-primary/20 hover:text-primary/40 transition-all cursor-pointer" style={{animation: 'float 6s ease-in-out infinite'}} />
            <Clock className="absolute bottom-20 right-12 w-6 h-6 text-primary/15 animate-ping hover:text-primary/30 transition-colors cursor-pointer" style={{animationDelay: '2s'}} />
          </div>

          {/* Professional Delivery Animation Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/50 via-transparent to-primary/5"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-8 animate-fade-in">
              <div className="space-y-6">
                <h1 className="text-5xl lg:text-7xl font-bold text-foreground leading-tight">
                  Fast, Reliable
                  <span className="text-primary"> Shipping</span>
                  <br />
                  Across India
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  From parcels to freight, we deliver with care. Your trusted logistics partner 
                  for comprehensive shipping solutions with real-time tracking and competitive rates.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center space-x-3 transform hover:scale-105 transition-all duration-300 cursor-pointer">
                  <CheckCircle className="h-6 w-6 text-primary" />
                  <span className="text-foreground font-medium">Official Partners: Delhivery, FedEx, Aramex, DHL</span>
                </div>
                <div className="flex items-center space-x-3 transform hover:scale-105 transition-all duration-300 cursor-pointer">
                  <CheckCircle className="h-6 w-6 text-primary" />
                  <span className="text-foreground font-medium">99.8% Pan-India Coverage Network</span>
                </div>
                <div className="flex items-center space-x-3 transform hover:scale-105 transition-all duration-300 cursor-pointer">
                  <CheckCircle className="h-6 w-6 text-primary" />
                  <span className="text-foreground font-medium">ISO 9001:2015 Certified Operations</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                <Button 
                  size="lg" 
                  className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 transform hover:scale-105 transition-all duration-300 hover:shadow-xl active:scale-95"
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Calculate Rates
                  <Calculator className="ml-2 h-5 w-5" />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transform hover:scale-105 transition-all duration-300 hover:shadow-xl active:scale-95"
                  onClick={() => setIsTrackingOpen(true)}
                >
                  Track Shipment
                </Button>
              </div>
            </div>

            {/* Right Content - Modern Tracking Section */}
            <div className="space-y-8">
              {/* Track Shipment Card */}
              <div className="bg-card backdrop-blur-sm p-8 rounded-3xl shadow-xl border border-border transform hover:scale-105 transition-all duration-500" style={{background: 'var(--gradient-card)'}}>
                <div className="text-center space-y-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full">
                    <Package className="w-8 h-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-2">Track Your Shipment</h3>
                    <p className="text-muted-foreground">Enter your tracking ID to get real-time updates</p>
                  </div>
                  <Button 
                    size="lg" 
                    variant="outline"
                    className="w-full border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                    onClick={() => setIsTrackingOpen(true)}
                  >
                    Track Now
                  </Button>
                </div>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-card/80 backdrop-blur-sm p-6 rounded-2xl border border-border text-center transform hover:scale-105 transition-all duration-300">
                  <div className="text-3xl font-bold text-primary">50L+</div>
                  <div className="text-sm text-muted-foreground">Tonnes Delivered</div>
                </div>
                <div className="bg-card/80 backdrop-blur-sm p-6 rounded-2xl border border-border text-center transform hover:scale-105 transition-all duration-300">
                  <div className="text-3xl font-bold text-primary">15K+</div>
                  <div className="text-sm text-muted-foreground">Fleet Vehicles</div>
                </div>
                <div className="bg-card/80 backdrop-blur-sm p-6 rounded-2xl border border-border text-center transform hover:scale-105 transition-all duration-300">
                  <div className="text-3xl font-bold text-primary">50K+</div>
                  <div className="text-sm text-muted-foreground">Happy Clients</div>
                </div>
                <div className="bg-card/80 backdrop-blur-sm p-6 rounded-2xl border border-border text-center transform hover:scale-105 transition-all duration-300">
                  <div className="text-3xl font-bold text-primary">24/7</div>
                  <div className="text-sm text-muted-foreground">Support</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <TrackingModal 
        isOpen={isTrackingOpen} 
        onClose={() => setIsTrackingOpen(false)} 
      />
    </>
  );
};

export default Hero;
