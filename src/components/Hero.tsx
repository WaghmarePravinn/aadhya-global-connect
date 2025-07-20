
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, Truck, Package, Globe, Clock } from "lucide-react";
import { useState } from "react";
import TrackingModal from "./TrackingModal";

const Hero = () => {
  const [isTrackingOpen, setIsTrackingOpen] = useState(false);

  return (
    <>
      <section id="home" className="pt-16 relative min-h-screen flex items-center overflow-hidden">
        {/* Professional Interactive Background */}
        <div className="absolute inset-0" style={{background: 'var(--gradient-hero)'}}>
          {/* Dynamic Grid Pattern */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute inset-0" style={{
              backgroundImage: `
                linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
              `,
              backgroundSize: '60px 60px',
              animation: 'grid-move 25s linear infinite'
            }}></div>
          </div>
          
          {/* Interactive Floating Elements */}
          <div className="absolute inset-0">
            <Truck className="absolute top-20 left-10 w-12 h-12 text-red-300/40 animate-bounce hover:text-red-300/60 transition-colors cursor-pointer" style={{animationDelay: '0s'}} />
            <Package className="absolute top-32 right-20 w-10 h-10 text-red-200/40 animate-pulse hover:text-red-200/60 transition-colors cursor-pointer" style={{animationDelay: '1s'}} />
            <Globe className="absolute bottom-40 left-16 w-14 h-14 text-red-300/40 hover:text-red-300/60 transition-all cursor-pointer" style={{animation: 'float 8s ease-in-out infinite'}} />
            <Clock className="absolute bottom-20 right-12 w-8 h-8 text-red-400/40 animate-ping hover:text-red-400/60 transition-colors cursor-pointer" style={{animationDelay: '2s'}} />
            
            {/* Additional Professional Elements */}
            <div className="absolute top-1/3 right-1/4 w-6 h-6 bg-gradient-to-r from-red-400/30 to-red-300/30 rounded-full animate-pulse"></div>
            <div className="absolute bottom-1/3 left-1/3 w-8 h-8 bg-gradient-to-r from-red-400/20 to-red-300/20 rounded-full animate-bounce" style={{animationDelay: '3s'}}></div>
            <div className="absolute top-1/2 left-1/5 w-4 h-4 bg-red-400/30 rounded-full animate-ping" style={{animationDelay: '1.5s'}}></div>
          </div>

          {/* Professional Overlay Pattern */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-black/10"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8 animate-fade-in">
              <div className="space-y-6">
                <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight">
                  Global
                  <span className="text-red-300 animate-pulse"> Logistics</span>
                  <br />
                  Excellence
                </h1>
                <p className="text-xl text-gray-100 leading-relaxed">
                  Aadhya Global Services & Logistics (AGS Logistics) - Your premier partner for 
                  comprehensive, reliable, and transparent logistics solutions spanning local, national, 
                  and international trade routes with 24/7 operational excellence.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center space-x-3 transform hover:scale-105 transition-all duration-300 cursor-pointer">
                  <CheckCircle className="h-6 w-6 text-red-300" />
                  <span className="text-gray-100 font-medium">Official Partners: Delhivery, FedEx, Aramex, DHL</span>
                </div>
                <div className="flex items-center space-x-3 transform hover:scale-105 transition-all duration-300 cursor-pointer">
                  <CheckCircle className="h-6 w-6 text-red-300" />
                  <span className="text-gray-100 font-medium">99.8% Pan-India Coverage Network</span>
                </div>
                <div className="flex items-center space-x-3 transform hover:scale-105 transition-all duration-300 cursor-pointer">
                  <CheckCircle className="h-6 w-6 text-red-300" />
                  <span className="text-gray-100 font-medium">ISO 9001:2015 Certified Operations</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                <Button 
                  size="lg" 
                  className="bg-red-600 hover:bg-red-700 transform hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-red-500/25 active:scale-95"
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Get Quote Now
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-2 border-red-300 text-red-300 hover:bg-red-300 hover:text-red-900 transform hover:scale-105 transition-all duration-300 hover:shadow-xl active:scale-95"
                  onClick={() => setIsTrackingOpen(true)}
                >
                  Track Shipment
                </Button>
              </div>
            </div>

            {/* Right Content - Professional Stats Grid */}
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl shadow-2xl text-center transform hover:scale-110 transition-all duration-500 hover:bg-white/20 hover:shadow-red-500/25 cursor-pointer group">
                <div className="text-4xl font-bold text-red-300 animate-bounce group-hover:animate-pulse">50L+</div>
                <div className="text-gray-100 font-medium">Tonnes Delivered</div>
                <div className="text-sm text-gray-300 mt-1">Monthly Capacity</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl shadow-2xl text-center transform hover:scale-110 transition-all duration-500 hover:bg-white/20 hover:shadow-red-400/25 cursor-pointer group">
                <div className="text-4xl font-bold text-red-400 animate-bounce group-hover:animate-pulse" style={{animationDelay: '0.5s'}}>15K+</div>
                <div className="text-gray-100 font-medium">Fleet Vehicles</div>
                <div className="text-sm text-gray-300 mt-1">Nationwide Network</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl shadow-2xl text-center transform hover:scale-110 transition-all duration-500 hover:bg-white/20 hover:shadow-red-300/25 cursor-pointer group">
                <div className="text-4xl font-bold text-red-200 animate-bounce group-hover:animate-pulse" style={{animationDelay: '1s'}}>50K+</div>
                <div className="text-gray-100 font-medium">Happy Clients</div>
                <div className="text-sm text-gray-300 mt-1">Trusted Partners</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl shadow-2xl text-center transform hover:scale-110 transition-all duration-500 hover:bg-white/20 hover:shadow-red-500/25 cursor-pointer group">
                <div className="text-4xl font-bold text-red-300 animate-bounce group-hover:animate-pulse" style={{animationDelay: '1.5s'}}>24/7</div>
                <div className="text-gray-100 font-medium">Operations</div>
                <div className="text-sm text-gray-300 mt-1">Customer Support</div>
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
