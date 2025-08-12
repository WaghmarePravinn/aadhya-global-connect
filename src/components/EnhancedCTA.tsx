import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, MessageCircle, Calculator, Package } from "lucide-react";
import { useState } from "react";
import TrackingModal from "./TrackingModal";

const EnhancedCTA = () => {
  const [isTrackingOpen, setIsTrackingOpen] = useState(false);

  return (
    <>
      <section className="py-20 bg-gradient-to-br from-primary to-primary-glow relative overflow-hidden">
        {/* Professional Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(45deg, transparent 25%, rgba(255,255,255,0.1) 25%, rgba(255,255,255,0.1) 50%, transparent 50%, transparent 75%, rgba(255,255,255,0.1) 75%),
              linear-gradient(-45deg, transparent 25%, rgba(255,255,255,0.1) 25%, rgba(255,255,255,0.1) 50%, transparent 50%, transparent 75%, rgba(255,255,255,0.1) 75%)
            `,
            backgroundSize: '40px 40px'
          }}></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-slide-up">
            <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6">
              Ready to Ship with 
              <span className="block text-white"> AGS Logistics?</span>
            </h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto mb-12 leading-relaxed">
              Join thousands of satisfied customers who trust us with their logistics needs. 
              Get instant quotes, real-time tracking, and dedicated support.
            </p>
          </div>

          {/* Enhanced Action Buttons */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12 animate-scale-in" style={{animationDelay: '0.3s'}}>
            <Button 
              size="lg" 
              className="bg-white hover:bg-gray-100 text-[#dc291e] px-8 py-6 text-lg font-semibold transform hover:scale-105 transition-all duration-300 hover:shadow-2xl group rounded-lg"
              onClick={() => {
                const rateCalculator = document.getElementById('rate-calculator');
                if (rateCalculator) {
                  rateCalculator.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              <Calculator className="mr-3 h-6 w-6 group-hover:animate-bounce" />
              Get Quote Now
              <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>

            <Button 
              size="lg" 
              className="border-2 border-white text-white hover:bg-white hover:text-[#dc291e] px-8 py-6 text-lg font-semibold transform hover:scale-105 transition-all duration-300 hover:shadow-2xl group bg-white/10 backdrop-blur-sm rounded-lg"
              onClick={() => setIsTrackingOpen(true)}
            >
              <Package className="mr-3 h-6 w-6 group-hover:animate-pulse" />
              Track Shipment
            </Button>

            <Button 
              size="lg" 
              className="border-2 border-white text-white hover:bg-white hover:text-[#dc291e] px-8 py-6 text-lg font-semibold transform hover:scale-105 transition-all duration-300 hover:shadow-2xl group bg-white/10 backdrop-blur-sm rounded-lg"
              onClick={() => window.open('tel:+919370257220')}
            >
              <Phone className="mr-3 h-6 w-6 group-hover:animate-pulse" />
              Call Now
            </Button>

            <Button 
              size="lg" 
              className="border-2 border-white text-white hover:bg-white hover:text-[#dc291e] px-8 py-6 text-lg font-semibold transform hover:scale-105 transition-all duration-300 hover:shadow-2xl group bg-white/10 backdrop-blur-sm rounded-lg"
              onClick={() => window.open('https://wa.me/919370257220')}
            >
              <MessageCircle className="mr-3 h-6 w-6 group-hover:animate-bounce" />
              WhatsApp
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-12 border-t border-white/20 animate-fade-in" style={{animationDelay: '0.6s'}}>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">50L+</div>
              <div className="text-white/80">Tonnes Delivered</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">99.2%</div>
              <div className="text-white/80">On-Time Delivery</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">15K+</div>
              <div className="text-white/80">Fleet Vehicles</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">24/7</div>
              <div className="text-white/80">Support</div>
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

export default EnhancedCTA;