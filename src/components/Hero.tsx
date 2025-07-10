
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="pt-16 relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.4)), url('https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')`
        }}
      />
      
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
                className="bg-blue-600 hover:bg-blue-700 transform hover:scale-105 transition-all duration-200 hover:shadow-lg"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-white hover:bg-white hover:text-gray-900 transform hover:scale-105 transition-all duration-200"
              >
                Track Shipment
              </Button>
            </div>
          </div>

          {/* Right Content - Animated Stats */}
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg shadow-lg text-center transform hover:scale-105 transition-all duration-300 hover:bg-white/20">
              <div className="text-3xl font-bold text-blue-400 animate-bounce">48L+</div>
              <div className="text-gray-200">Tonnes Shipped</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg shadow-lg text-center transform hover:scale-105 transition-all duration-300 hover:bg-white/20">
              <div className="text-3xl font-bold text-blue-400 animate-bounce">11K+</div>
              <div className="text-gray-200">Fleet Strength</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg shadow-lg text-center transform hover:scale-105 transition-all duration-300 hover:bg-white/20">
              <div className="text-3xl font-bold text-blue-400 animate-bounce">33K+</div>
              <div className="text-gray-200">Happy Clients</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg shadow-lg text-center transform hover:scale-105 transition-all duration-300 hover:bg-white/20">
              <div className="text-3xl font-bold text-blue-400 animate-bounce">24/7</div>
              <div className="text-gray-200">Operations</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Floating Animation Elements */}
      <div className="absolute top-20 left-10 w-4 h-4 bg-blue-400 rounded-full animate-ping opacity-75"></div>
      <div className="absolute bottom-20 right-10 w-6 h-6 bg-green-400 rounded-full animate-pulse opacity-75"></div>
      <div className="absolute top-1/2 right-20 w-3 h-3 bg-yellow-400 rounded-full animate-bounce opacity-75"></div>
    </section>
  );
};

export default Hero;
