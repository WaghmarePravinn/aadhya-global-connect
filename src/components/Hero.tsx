import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, Truck, Package, Globe, Clock, Calculator, Zap, Shield, Star, TrendingUp, Phone, MessageCircle } from "lucide-react";
import { useState, useEffect } from "react";
import TrackingModal from "./TrackingModal";

const Hero = () => {
  const [isTrackingOpen, setIsTrackingOpen] = useState(false);
  const [activeFeature, setActiveFeature] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const features = [
    { icon: Truck, text: "Official Partners: Delhivery, FedEx, Aramex, DHL" },
    { icon: Globe, text: "99.8% Pan-India Coverage Network" },
    { icon: Shield, text: "ISO 9001:2015 Certified Operations" },
    { icon: Zap, text: "Real-time Tracking & Updates" }
  ];

  const stats = [
    { value: "50L+", label: "Tonnes Delivered", icon: Package },
    { value: "15K+", label: "Fleet Vehicles", icon: Truck },
    { value: "50K+", label: "Happy Clients", icon: Star },
    { value: "24/7", label: "Support", icon: Clock }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % features.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [features.length]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <>
      <section id="home" className="pt-20 relative min-h-screen flex items-center overflow-hidden bg-white">
        {/* Creative Red-themed Background */}
        <div className="absolute inset-0">
          {/* Dynamic Red Gradient Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-white via-red-50/30 to-red-100/20">
            {/* Animated Red Geometric Shapes */}
            <div className="absolute top-20 right-10 w-32 h-32 bg-[#dc291e]/10 rounded-full animate-pulse"></div>
            <div className="absolute top-40 right-32 w-20 h-20 bg-[#dc291e]/15 rounded-full animate-bounce" style={{animationDelay: '1s'}}></div>
            <div className="absolute bottom-40 left-10 w-40 h-40 bg-[#dc291e]/8 rounded-full animate-float"></div>
            <div className="absolute bottom-20 left-40 w-24 h-24 bg-[#dc291e]/12 rounded-full animate-pulse" style={{animationDelay: '2s'}}></div>
            
            {/* Red Accent Lines */}
            <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#dc291e]/20 to-transparent"></div>
            <div className="absolute bottom-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#dc291e]/15 to-transparent"></div>
            
            {/* Interactive Red Floating Elements */}
            <div className="absolute inset-0">
              <Truck 
                className="absolute top-20 left-10 w-8 h-8 text-[#dc291e]/40 animate-float cursor-pointer transition-all duration-300 hover:text-[#dc291e] hover:scale-125" 
                style={{animationDelay: '0s'}}
              />
              <Package 
                className="absolute top-32 right-20 w-6 h-6 text-[#dc291e]/35 animate-bounce cursor-pointer transition-all duration-300 hover:text-[#dc291e] hover:scale-125" 
                style={{animationDelay: '1s'}}
              />
              <Globe 
                className="absolute bottom-40 left-16 w-10 h-10 text-[#dc291e]/40 animate-rotate-slow cursor-pointer transition-all duration-300 hover:text-[#dc291e] hover:scale-125" 
              />
              <Clock 
                className="absolute bottom-20 right-12 w-6 h-6 text-[#dc291e]/35 animate-ping cursor-pointer transition-all duration-300 hover:text-[#dc291e] hover:scale-125" 
                style={{animationDelay: '2s'}} 
              />
              <Zap 
                className="absolute top-1/2 left-1/4 w-5 h-5 text-[#dc291e]/30 animate-pulse cursor-pointer transition-all duration-300 hover:text-[#dc291e] hover:scale-125"
                style={{animationDelay: '1.5s'}}
              />
              <TrendingUp 
                className="absolute top-3/4 right-1/3 w-7 h-7 text-[#dc291e]/35 animate-bounce cursor-pointer transition-all duration-300 hover:text-[#dc291e] hover:scale-125"
                style={{animationDelay: '0.5s'}}
              />
            </div>
          </div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Enhanced Left Content with Red Theme */}
            <div className="space-y-8">
              <div className="space-y-6 animate-fade-in">
                <div className="inline-flex items-center px-6 py-3 bg-[#dc291e] rounded-full text-white font-semibold animate-bounce-in shadow-lg">
                  <Star className="w-5 h-5 mr-2" />
                  India's #1 Trusted Logistics Partner
                </div>
                
                <h1 className="text-6xl lg:text-8xl font-black text-black leading-tight">
                  <span className="inline-block animate-slide-up" style={{animationDelay: '0.2s'}}>Ship</span>{' '}
                  <span className="inline-block animate-slide-up" style={{color: '#dc291e', animationDelay: '0.4s'}}>Faster</span>
                  <br />
                  <span className="inline-block animate-slide-up" style={{animationDelay: '0.6s'}}>Deliver</span>{' '}
                  <span className="inline-block animate-slide-up" style={{color: '#dc291e', animationDelay: '0.8s'}}>Smarter</span>
                </h1>
                
                <p className="text-2xl text-gray-700 leading-relaxed animate-slide-up font-medium" style={{animationDelay: '1s'}}>
                  Transform your business with India's most reliable logistics network. 
                  <span style={{color: '#dc291e'}} className="font-bold"> 99.2% on-time delivery</span> across 
                  <span style={{color: '#dc291e'}} className="font-bold"> 50,000+ locations</span>.
                </p>
                
                {/* Trust Indicators */}
                <div className="flex flex-wrap items-center gap-6 animate-slide-up" style={{animationDelay: '1.1s'}}>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-6 h-6" style={{color: '#dc291e'}} />
                    <span className="text-black font-semibold">ISO 9001:2015 Certified</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Shield className="w-6 h-6" style={{color: '#dc291e'}} />
                    <span className="text-black font-semibold">100% Insured</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="w-6 h-6" style={{color: '#dc291e'}} />
                    <span className="text-black font-semibold">24/7 Support</span>
                  </div>
                </div>
              </div>

              {/* High-Converting CTA Section */}
              <div className="space-y-6 animate-slide-up" style={{animationDelay: '1.4s'}}>
                <div className="flex flex-wrap gap-4">
                  <Button 
                    size="lg" 
                    className="bg-[#dc291e] hover:bg-[#b8241a] text-white px-12 py-8 text-xl font-bold transform hover:scale-105 transition-all duration-300 hover:shadow-2xl active:scale-95 rounded-xl mx-2"
                    onClick={() => {
                      const rateCalculator = document.getElementById('rate-calculator');
                      if (rateCalculator) {
                        rateCalculator.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                  >
                    <Calculator className="mr-3 h-6 w-6" />
                    Get Instant Quote
                    <ArrowRight className="ml-3 h-6 w-6" />
                  </Button>
                  
                  <Button 
                    size="lg" 
                    className="border-3 border-[#dc291e] text-[#dc291e] hover:bg-[#dc291e] hover:text-white px-10 py-8 text-xl font-bold transform hover:scale-105 transition-all duration-300 hover:shadow-xl active:scale-95 group rounded-xl mx-2"
                    onClick={() => setIsTrackingOpen(true)}
                  >
                    <Package className="mr-3 h-6 w-6 group-hover:animate-bounce" />
                    Track Shipment
                  </Button>
                </div>
                
                {/* Urgency & Social Proof */}
                <div className="bg-[#dc291e]/5 border-l-4 border-[#dc291e] p-4 rounded-r-lg">
                  <p className="text-black font-semibold">
                    🔥 <span style={{color: '#dc291e'}}>Limited Time:</span> Get 20% off your first shipment! 
                    <span style={{color: '#dc291e'}} className="font-bold">Join 50,000+ satisfied customers</span>
                  </p>
                </div>
                
                {/* Contact Options */}
                <div className="flex flex-wrap gap-4">
                  <a 
                    href="tel:+919284441622"
                    className="inline-flex items-center px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 font-semibold"
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    Call Now: +91-9284441622
                  </a>
                  <a 
                    href="https://wa.me/919284441622"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-all duration-300 transform hover:scale-105 font-semibold"
                  >
                    <MessageCircle className="w-5 h-5 mr-2" />
                    WhatsApp Us
                  </a>
                </div>
              </div>
            </div>

            {/* Enhanced Right Content with Red Accents */}
            <div className="space-y-8 animate-slide-in-right">
              {/* Hero Stats Card with Red Theme */}
              <div className="bg-white/95 backdrop-blur-lg p-8 rounded-3xl shadow-2xl border-2 border-[#dc291e]/20 transform hover:scale-105 transition-all duration-500 hover:shadow-3xl relative overflow-hidden">
                {/* Red Accent Corner */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-[#dc291e] rounded-bl-full opacity-10"></div>
                
                <div className="relative z-10">
                  <div className="text-center mb-8">
                    <div className="inline-flex items-center justify-center w-20 h-20 bg-[#dc291e]/10 rounded-full mb-4">
                      <TrendingUp className="w-10 h-10 text-[#dc291e]" />
                    </div>
                    <h3 className="text-3xl font-bold text-black mb-2">Live Performance</h3>
                    <p className="text-gray-600">Real-time logistics metrics</p>
                  </div>

                  {/* Enhanced Stats Grid */}
                  <div className="grid grid-cols-2 gap-6">
                    {stats.map((stat, index) => (
                      <div 
                        key={index}
                        className="text-center p-6 bg-gradient-to-br from-[#dc291e]/5 to-[#dc291e]/10 rounded-2xl border border-[#dc291e]/20 transform transition-all duration-300 hover:scale-110 hover:shadow-lg cursor-pointer group"
                        style={{animationDelay: `${1.6 + index * 0.2}s`}}
                      >
                        <stat.icon className="w-10 h-10 mx-auto mb-3 text-[#dc291e] group-hover:animate-bounce transition-colors" />
                        <div className="text-4xl font-black text-[#dc291e] mb-2">
                          {stat.value}
                        </div>
                        <div className="text-sm font-semibold text-black">
                          {stat.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Live Activity Indicator with Red Theme */}
              <div className="bg-gradient-to-r from-[#dc291e]/10 to-[#dc291e]/5 p-6 rounded-2xl border-2 border-[#dc291e]/20 animate-fade-in" style={{animationDelay: '2s'}}>
                <div className="flex items-center justify-center space-x-3">
                  <div className="w-4 h-4 bg-[#dc291e] rounded-full animate-pulse"></div>
                  <span className="text-lg font-bold text-black">1,247 deliveries completed today</span>
                  <TrendingUp className="w-6 h-6 text-[#dc291e] animate-bounce" />
                </div>
              </div>

              {/* Trust Badges */}
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center p-4 bg-white rounded-xl shadow-lg border border-[#dc291e]/10">
                  <Shield className="w-8 h-8 mx-auto mb-2 text-[#dc291e]" />
                  <div className="text-sm font-bold text-black">Secure</div>
                </div>
                <div className="text-center p-4 bg-white rounded-xl shadow-lg border border-[#dc291e]/10">
                  <Zap className="w-8 h-8 mx-auto mb-2 text-[#dc291e]" />
                  <div className="text-sm font-bold text-black">Fast</div>
                </div>
                <div className="text-center p-4 bg-white rounded-xl shadow-lg border border-[#dc291e]/10">
                  <Star className="w-8 h-8 mx-auto mb-2 text-[#dc291e]" />
                  <div className="text-sm font-bold text-black">Trusted</div>
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