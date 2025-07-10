
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, Truck, Package, Globe, Clock } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="pt-16 relative min-h-screen flex items-center overflow-hidden">
      {/* Professional Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
        {/* Animated Grid Pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
            animation: 'grid-move 20s linear infinite'
          }}></div>
        </div>
        
        {/* Floating Logistics Icons */}
        <div className="absolute inset-0">
          <Truck className="absolute top-20 left-10 w-8 h-8 text-blue-400/30 animate-bounce" style={{animationDelay: '0s'}} />
          <Package className="absolute top-40 right-20 w-6 h-6 text-green-400/30 animate-pulse" style={{animationDelay: '1s'}} />
          <Globe className="absolute bottom-40 left-20 w-7 h-7 text-yellow-400/30 animate-spin" style={{animationDuration: '10s'}} />
          <Clock className="absolute bottom-20 right-10 w-5 h-5 text-purple-400/30 animate-ping" style={{animationDelay: '2s'}} />
        </div>

        {/* Moving Particles */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-400/40 rounded-full animate-pulse"></div>
          <div className="absolute top-3/4 right-1/3 w-3 h-3 bg-green-400/40 rounded-full animate-bounce"></div>
          <div className="absolute bottom-1/3 left-1/2 w-1 h-1 bg-yellow-400/40 rounded-full animate-ping"></div>
        </div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold text-white leading-tight">
                Trusted
                <span className="text-blue-400 animate-pulse"> Logistics</span>
                <br />
                Solutions
              </h1>
              <p className="text-xl text-gray-200 leading-relaxed">
                Aadhya Global Services & Logistics (AGS Logistics) - Your trusted partner for 
                reliable, fast, and transparent logistics solutions across local, national, and international routes.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <div className="flex items-center space-x-2 transform hover:scale-105 transition-transform duration-200">
                <CheckCircle className="h-5 w-5 text-green-400" />
                <span className="text-gray-200">Official Partner: Delhivery, FedEx, Aramex</span>
              </div>
              <div className="flex items-center space-x-2 transform hover:scale-105 transition-transform duration-200">
                <CheckCircle className="h-5 w-5 text-green-400" />
                <span className="text-gray-200">99.5% India Coverage</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button 
                size="lg" 
                className="bg-blue-600 hover:bg-blue-700 transform hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/25 active:scale-95"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Get Started
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-white hover:bg-white hover:text-gray-900 transform hover:scale-105 transition-all duration-300 hover:shadow-xl active:scale-95"
              >
                Track Shipment
              </Button>
            </div>
          </div>

          {/* Right Content - Enhanced Animated Stats */}
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl shadow-2xl text-center transform hover:scale-110 transition-all duration-500 hover:bg-white/20 hover:shadow-blue-500/25 cursor-pointer">
              <div className="text-3xl font-bold text-blue-400 animate-bounce">48L+</div>
              <div className="text-gray-200">Tonnes Shipped</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl shadow-2xl text-center transform hover:scale-110 transition-all duration-500 hover:bg-white/20 hover:shadow-green-500/25 cursor-pointer">
              <div className="text-3xl font-bold text-green-400 animate-bounce" style={{animationDelay: '0.5s'}}>11K+</div>
              <div className="text-gray-200">Fleet Strength</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl shadow-2xl text-center transform hover:scale-110 transition-all duration-500 hover:bg-white/20 hover:shadow-yellow-500/25 cursor-pointer">
              <div className="text-3xl font-bold text-yellow-400 animate-bounce" style={{animationDelay: '1s'}}>33K+</div>
              <div className="text-gray-200">Happy Clients</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl shadow-2xl text-center transform hover:scale-110 transition-all duration-500 hover:bg-white/20 hover:shadow-purple-500/25 cursor-pointer">
              <div className="text-3xl font-bold text-purple-400 animate-bounce" style={{animationDelay: '1.5s'}}>24/7</div>
              <div className="text-gray-200">Operations</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
