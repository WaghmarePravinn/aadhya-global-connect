import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Phone,
  MessageCircle,
  Calculator,
  Package,
  Zap,
  Shield,
  Award
} from "lucide-react";
import { useState } from "react";
import TrackingModal from "./TrackingModal";

const EnhancedCTA = () => {
  const [isTrackingOpen, setIsTrackingOpen] = useState(false);

  return (
    <>
      <section className="py-24 bg-gradient-to-r from-[#dc291e] to-[#ff3b2d] relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `
                linear-gradient(45deg, transparent 25%, rgba(255,255,255,0.2) 25%,
                rgba(255,255,255,0.2) 50%, transparent 50%, transparent 75%,
                rgba(255,255,255,0.2) 75%),
                linear-gradient(-45deg, transparent 25%, rgba(255,255,255,0.2) 25%,
                rgba(255,255,255,0.2) 50%, transparent 50%, transparent 75%,
                rgba(255,255,255,0.2) 75%)
              `,
              backgroundSize: "60px 60px",
            }}
          ></div>
        </div>

        {/* Floating Circles */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-40 h-40 bg-white rounded-full opacity-10 animate-float"></div>
          <div className="absolute bottom-10 right-10 w-60 h-60 bg-white rounded-full opacity-10 animate-float" style={{animationDelay: '1s'}}></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Headline */}
          <div className="mb-12 animate-fade-in">
            <h2 className="text-5xl lg:text-7xl font-black text-white mb-6 leading-tight">
              Ready to Ship Smarter?
            </h2>
            <p className="text-xl lg:text-3xl text-white/90 max-w-4xl mx-auto font-medium leading-relaxed">
              Get instant quotes, track shipments, and experience logistics excellence.
              <br />
              <span className="font-bold">Join 15,000+ businesses today!</span>
            </p>
          </div>

          {/* Action Buttons */}
          <div
            className="flex flex-wrap justify-center gap-6 mb-16 animate-scale-in"
            style={{ animationDelay: "0.3s" }}
          >
            {/* Primary CTA */}
            <Button
              size="lg"
              className="bg-white hover:bg-gray-100 text-[#dc291e] px-12 py-7 text-xl font-black transform hover:scale-105 transition-all duration-300 hover:shadow-2xl group rounded-xl shadow-xl"
              onClick={() => {
                const rateCalculator = document.getElementById("rate-calculator");
                if (rateCalculator) {
                  rateCalculator.scrollIntoView({ behavior: "smooth" });
                }
              }}
            >
              <Calculator className="mr-3 h-7 w-7 group-hover:animate-bounce" />
              Get Free Quote Now
              <ArrowRight className="ml-3 h-7 w-7 group-hover:translate-x-1 transition-transform" />
            </Button>

            {/* Track Shipment */}
            <Button
              size="lg"
              className="bg-white text-[#dc291e] hover:bg-gray-100 px-10 py-7 text-xl font-black transform hover:scale-105 transition-all duration-300 hover:shadow-2xl group rounded-xl shadow-xl"
              onClick={() => {
                const trackingSection = document.getElementById("track-shipment");
                if (trackingSection) {
                  trackingSection.scrollIntoView({ behavior: "smooth" });
                }
              }}
            >
              <Package className="mr-3 h-7 w-7 group-hover:animate-bounce" />
              Track Shipment
            </Button>
          </div>

          {/* Contact Options */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            <Button
              size="lg"
              className="border-2 border-white text-white hover:bg-white hover:text-[#dc291e] px-8 py-4 text-lg font-bold transform hover:scale-105 transition-all duration-300 hover:shadow-xl group bg-white/10 backdrop-blur-sm rounded-xl"
              onClick={() => window.open("tel:+919284441622")}
            >
              <Phone className="mr-3 h-6 w-6 group-hover:animate-pulse" />
              Call: +91-9284441622
            </Button>

            <Button
              size="lg"
              className="border-2 border-white text-white hover:bg-white hover:text-[#dc291e] px-8 py-4 text-lg font-bold transform hover:scale-105 transition-all duration-300 hover:shadow-xl group bg-white/10 backdrop-blur-sm rounded-xl"
              onClick={() => window.open("https://wa.me/919284441622")}
            >
              <MessageCircle className="mr-3 h-6 w-6 group-hover:animate-bounce" />
              WhatsApp Us
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 animate-fade-in" style={{animationDelay: '0.6s'}}>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 group hover:bg-white/20 transition-all duration-300">
              <Zap className="w-12 h-12 text-white mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-2xl font-bold text-white mb-2">Lightning Fast</h3>
              <p className="text-white/80 text-lg font-medium">24-48 hour delivery across major cities</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 group hover:bg-white/20 transition-all duration-300">
              <Shield className="w-12 h-12 text-white mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-2xl font-bold text-white mb-2">100% Secure</h3>
              <p className="text-white/80 text-lg font-medium">Full insurance on all shipments</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 group hover:bg-white/20 transition-all duration-300">
              <Award className="w-12 h-12 text-white mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-2xl font-bold text-white mb-2">Award Winning</h3>
              <p className="text-white/80 text-lg font-medium">ISO 9001:2015 certified excellence</p>
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
