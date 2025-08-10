import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, Truck, Package, Globe, Clock, Calculator, Zap, Shield, Star, TrendingUp } from "lucide-react";
import { useState, useEffect } from "react";
import TrackingModal from "./TrackingModal";
import heroBg from "@/assets/hero-bg.jpg";

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
      <section id="home" className="pt-20 relative min-h-screen flex items-center overflow-hidden">
        {/* Enhanced Professional Background */}
        <div className="absolute inset-0">
          {/* Dynamic Gradient Background */}
          <div 
            className="absolute inset-0 transition-all duration-1000"
            style={{
              background: `
                radial-gradient(circle at ${mousePosition.x / window.innerWidth * 100}% ${mousePosition.y / window.innerHeight * 100}%, 
                hsl(214 85% 95%) 0%, 
                hsl(214 85% 97%) 40%, 
                hsl(214 32% 91%) 100%)
              `
            }}
          >
            {/* Hero Background Image with Parallax Effect */}
            <div 
              className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-15 transition-transform duration-300"
              style={{ 
                backgroundImage: `url(${heroBg})`,
                transform: `translateY(${mousePosition.y * 0.02}px)`
              }}
            ></div>
            
            {/* Animated Grid Pattern */}
            <div className="absolute inset-0 opacity-[0.04]">
              <div className="absolute inset-0 animate-pulse" style={{
                backgroundImage: `
                  linear-gradient(hsl(214 85% 45% / 0.1) 1px, transparent 1px),
                  linear-gradient(90deg, hsl(214 85% 45% / 0.1) 1px, transparent 1px)
                `,
                backgroundSize: '40px 40px',
                animation: 'grid-move 20s linear infinite'
              }}></div>
            </div>
            
            {/* Interactive Floating Elements */}
            <div className="absolute inset-0">
              <Truck 
                className="absolute top-20 left-10 w-8 h-8 text-primary/30 animate-float cursor-pointer transition-all duration-300 hover:text-primary hover:scale-125" 
                style={{animationDelay: '0s'}}
                onMouseEnter={(e) => e.currentTarget.classList.add('animate-pulse-glow')}
                onMouseLeave={(e) => e.currentTarget.classList.remove('animate-pulse-glow')} 
              />
              <Package 
                className="absolute top-32 right-20 w-6 h-6 text-primary/25 animate-bounce cursor-pointer transition-all duration-300 hover:text-primary hover:scale-125" 
                style={{animationDelay: '1s'}}
                onMouseEnter={(e) => e.currentTarget.classList.add('animate-rotate-slow')}
                onMouseLeave={(e) => e.currentTarget.classList.remove('animate-rotate-slow')}
              />
              <Globe 
                className="absolute bottom-40 left-16 w-10 h-10 text-primary/30 animate-rotate-slow cursor-pointer transition-all duration-300 hover:text-primary hover:scale-125" 
              />
              <Clock 
                className="absolute bottom-20 right-12 w-6 h-6 text-primary/25 animate-ping cursor-pointer transition-all duration-300 hover:text-primary hover:scale-125" 
                style={{animationDelay: '2s'}} 
              />
              <Zap 
                className="absolute top-1/2 left-1/4 w-5 h-5 text-primary/20 animate-pulse cursor-pointer transition-all duration-300 hover:text-primary hover:scale-125"
                style={{animationDelay: '1.5s'}}
              />
              <TrendingUp 
                className="absolute top-3/4 right-1/3 w-7 h-7 text-primary/25 animate-bounce cursor-pointer transition-all duration-300 hover:text-primary hover:scale-125"
                style={{animationDelay: '0.5s'}}
              />
            </div>

            {/* Enhanced Professional Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/60 via-white/20 to-primary/10"></div>
          </div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Enhanced Left Content */}
            <div className="space-y-8">
              <div className="space-y-6 animate-fade-in">
                <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full text-primary font-medium animate-bounce-in">
                  <Star className="w-4 h-4 mr-2" />
                  India's Most Trusted Logistics Partner
                </div>
                <h1 className="text-5xl lg:text-7xl font-bold text-foreground leading-tight">
                  <span className="inline-block animate-slide-up" style={{animationDelay: '0.2s'}}>Fast,</span>{' '}
                  <span className="inline-block animate-slide-up" style={{animationDelay: '0.4s'}}>Reliable</span>
                  <br />
                  <span className="text-primary inline-block animate-slide-up" style={{animationDelay: '0.6s'}}>Shipping</span>
                  <br />
                  <span className="inline-block animate-slide-up" style={{animationDelay: '0.8s'}}>Across India</span>
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed animate-slide-up" style={{animationDelay: '1s'}}>
                  From parcels to freight, Aadhya Global Services delivers with care. Your trusted logistics partner 
                  for comprehensive shipping solutions with real-time tracking and competitive rates.
                </p>
              </div>

              {/* Interactive Features List */}
              <div className="space-y-4 animate-slide-up" style={{animationDelay: '1.2s'}}>
                {features.map((feature, index) => (
                  <div 
                    key={index}
                    className={`flex items-center space-x-3 p-3 rounded-lg transition-all duration-500 cursor-pointer transform hover:scale-105 ${
                      activeFeature === index 
                        ? 'bg-primary/10 border-l-4 border-primary shadow-lg animate-shimmer' 
                        : 'hover:bg-primary/5'
                    }`}
                    onMouseEnter={() => setActiveFeature(index)}
                  >
                    <feature.icon className={`h-6 w-6 transition-colors duration-300 ${
                      activeFeature === index ? 'text-primary animate-pulse-glow' : 'text-primary/70'
                    }`} />
                    <span className={`font-medium transition-colors duration-300 ${
                      activeFeature === index ? 'text-foreground' : 'text-muted-foreground'
                    }`}>
                      {feature.text}
                    </span>
                  </div>
                ))}
              </div>

              {/* Enhanced Action Buttons */}
              <div className="flex flex-wrap gap-4 animate-slide-up" style={{animationDelay: '1.4s'}}>
                <Button 
                  size="lg" 
                  className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 transform hover:scale-105 transition-all duration-300 hover:shadow-xl active:scale-95 animate-pulse-glow"
                  onClick={() => {
                    const rateCalculator = document.getElementById('rate-calculator');
                    if (rateCalculator) {
                      rateCalculator.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                >
                  <Calculator className="mr-2 h-5 w-5" />
                  Calculate Rates
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transform hover:scale-105 transition-all duration-300 hover:shadow-xl active:scale-95 group"
                  onClick={() => setIsTrackingOpen(true)}
                >
                  <Package className="mr-2 h-5 w-5 group-hover:animate-bounce" />
                  Track Shipment
                </Button>
              </div>
            </div>

            {/* Enhanced Right Content */}
            <div className="space-y-8 animate-slide-in-right">
              {/* Interactive Track Shipment Card */}
              <div className="bg-card/90 backdrop-blur-lg p-8 rounded-3xl shadow-2xl border border-border transform hover:scale-105 transition-all duration-500 hover:shadow-3xl card-hover relative overflow-hidden">
                {/* Shimmer Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shimmer"></div>
                
                <div className="relative z-10 text-center space-y-6">
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-primary/20 rounded-full animate-pulse-glow">
                    <Package className="w-10 h-10 text-primary animate-float" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-2">Track Your Shipment</h3>
                    <p className="text-muted-foreground">Enter your tracking ID to get real-time updates</p>
                  </div>
                  <Button 
                    size="lg" 
                    variant="outline"
                    className="w-full border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 group"
                    onClick={() => setIsTrackingOpen(true)}
                  >
                    <Zap className="mr-2 h-5 w-5 group-hover:animate-pulse" />
                    Track Now
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>

              {/* Enhanced Interactive Stats Grid */}
              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat, index) => (
                  <div 
                    key={index}
                    className="bg-card/80 backdrop-blur-sm p-6 rounded-2xl border border-border text-center transform transition-all duration-300 hover:scale-110 hover:bg-card hover:shadow-lg cursor-pointer group"
                    style={{animationDelay: `${1.6 + index * 0.2}s`}}
                    onMouseEnter={(e) => e.currentTarget.classList.add('animate-bounce-in')}
                  >
                    <stat.icon className="w-8 h-8 mx-auto mb-2 text-primary group-hover:animate-bounce transition-colors" />
                    <div className="text-3xl font-bold text-primary group-hover:text-primary/80 transition-colors">
                      {stat.value}
                    </div>
                    <div className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>

              {/* Live Activity Indicator */}
              <div className="bg-gradient-to-r from-green-500/10 to-blue-500/10 p-4 rounded-xl border border-primary/20 animate-fade-in" style={{animationDelay: '2s'}}>
                <div className="flex items-center justify-center space-x-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium text-foreground">1,247 deliveries completed today</span>
                  <TrendingUp className="w-4 h-4 text-green-500 animate-bounce" />
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