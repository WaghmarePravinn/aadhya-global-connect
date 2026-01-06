import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Phone,
  MessageCircle,
  Calculator,
  Package,
} from "lucide-react";
import { useState } from "react";
import TrackingModal from "./TrackingModal";

const EnhancedCTA = () => {
  const [isTrackingOpen, setIsTrackingOpen] = useState(false);

  return (
    <>
      <section className="py-20 bg-gradient-to-br from-primary to-primary-glow relative overflow-hidden">
        {/* ‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑ */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `
                linear-gradient(45deg, transparent 25%, rgba(255,255,255,0.1) 25%, 
                rgba(255,255,255,0.1) 50%, transparent 50%, transparent 75%, 
                rgba(255,255,255,0.1) 75%),
                linear-gradient(-45deg, transparent 25%, rgba(255,255,255,0.1) 25%, 
                rgba(255,255,255,0.1) 50%, transparent 50%, transparent 75%, 
                rgba(255,255,255,0.1) 75%)
              `,
              backgroundSize: "40px 40px",
            }}
          ></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Title / description omitted for brevity */}

          {/* ------------------------------------------------------ */}
          {/*   Action Buttons – only the Track Shipment button is changed */}
          {/* ------------------------------------------------------ */}
          <div
            className="grid grid-cols-auto lg:grid-cols-auto gap-6 mb-12 animate-scale-in"
            style={{ animationDelay: "0.3s" }}
          >
            {/* Get Quote Now – unchanged */}
            <Button
              size="lg"
              className="bg-white hover:bg-gray-100 text-[#dc291e] px-8 py-6 text-lg font-semibold transform hover:scale-105 transition-all duration-300 hover:shadow-2xl group rounded-lg w-fit"
              onClick={() => {
                const rateCalculator = document.getElementById("rate-calculator");
                if (rateCalculator) {
                  rateCalculator.scrollIntoView({ behavior: "smooth" });
                }
              }}
            >
              <Calculator className="mr-3 h-6 w-6 group-hover:animate-bounce" />
              Get Quote Now
              <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>

            {/* ---------- Updated Track Shipment button ---------- */}
            <Button
              size="lg"
              className="
                bg-white text-[#dc291e] hover:bg-gray-100 hover:text-[#dc291e]
                px-8 py-6 text-lg font-semibold
                transform hover:scale-105
                transition-all duration-300 hover:shadow-2xl
                group rounded-lg w-fit
              "
              onClick={() => {
                const trackingSection = document.getElementById("track-shipment");
                if (trackingSection) {
                  trackingSection.scrollIntoView({ behavior: "smooth" });
                }
              }}
            >
              <Package className="mr-3 h-6 w-6 group-hover:animate-bounce" />
              Track Shipment
            </Button>

            {/* Call Now – unchanged */}
            <Button
              size="lg"
              className="border-2 border-white text-white hover:bg-white hover:text-[#dc291e] px-8 py-6 text-lg font-semibold transform hover:scale-105 transition-all duration-300 hover:shadow-2xl group bg-white/10 backdrop-blur-sm rounded-lg w-fit"
              onClick={() => window.open("tel:+919000000000")}
            >
              <Phone className="mr-3 h-6 w-6 group-hover:animate-pulse" />
              Call Now
            </Button>

            {/* WhatsApp – unchanged */}
            <Button
              size="lg"
              className="border-2 border-white text-white hover:bg-white hover:text-[#dc291e] px-8 py-6 text-lg font-semibold transform hover:scale-105 transition-all duration-300 hover:shadow-2xl group bg-white/10 backdrop-blur-sm rounded-lg w-fit"
              onClick={() => window.open("https://wa.me/919000000000")}
            >
              <MessageCircle className="mr-3 h-6 w-6 group-hover:animate-bounce" />
              WhatsApp
            </Button>
          </div>

          {/* Trust indicators – unchanged */}
          {/* … */}
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