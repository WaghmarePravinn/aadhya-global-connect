import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, Truck, Package, Globe, Clock, Calculator, Zap, Shield, Star, TrendingUp, Phone, MessageCircle } from "lucide-react";
import { useState, useEffect } from "react";
import TrackingModal from "./TrackingModal";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MapPin } from "lucide-react";

const Hero = () => {
  const [isTrackingOpen, setIsTrackingOpen] = useState(false);
  const [activeFeature, setActiveFeature] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [shipmentType, setShipmentType] = useState<"domestic" | "international">("domestic");
  const [pickupLocation, setPickupLocation] = useState("");
  const [deliveryLocation, setDeliveryLocation] = useState("");

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

  const handleGetQuote = () => {
    if (!pickupLocation.trim() || !deliveryLocation.trim()) {
      alert("Please enter both pickup and delivery locations");
      return;
    }

    const shipmentTypeText = shipmentType === "domestic" ? "Domestic" : "International";
    const message = `Hello AGS Logistics! 

I need a shipping quote for:
📦 Shipment Type: ${shipmentTypeText}
📍 Pickup Location: ${pickupLocation}
📍 Delivery Location: ${deliveryLocation}

Could you please provide me with the shipping rates and delivery timeline for this route?

Thank you!`;

    const whatsappUrl = `https://wa.me/919284441622?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };
  return (
    <>
      <section id="home" className="pt-5 relative min-h-screen flex items-center overflow-hidden bg-white">
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Enhanced Left Content with Red Theme */}
            <div className="space-y-6">
              <div className="space-y-6 animate-fade-in">
                <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-[#dc291e] to-[#ff3b2d] rounded-full text-white font-semibold animate-bounce-in shadow-lg">
                  <Star className="w-5 h-5 mr-2 animate-pulse" />
                  India's #1 Trusted Logistics Partner
                </div>

                <h1 className="text-5xl lg:text-7xl font-black text-black leading-[1.1]">
                  <span className="inline-block animate-slide-up" style={{animationDelay: '0.2s'}}>Fast, Reliable</span>
                  <br />
                  <span className="inline-block animate-slide-up" style={{color: '#dc291e', animationDelay: '0.4s'}}>Logistics Solutions</span>
                  <br />
                  <span className="inline-block animate-slide-up text-2xl lg:text-3xl font-semibold text-gray-700" style={{animationDelay: '0.6s'}}>For Your Business Growth</span>
                </h1>

                <p className="text-xl lg:text-2xl text-gray-700 leading-relaxed animate-slide-up font-medium" style={{animationDelay: '1s'}}>
                  <span style={{color: '#dc291e'}} className="font-bold">99.2% on-time delivery</span> across
                  <span style={{color: '#dc291e'}} className="font-bold">50,000+ locations</span> in India.
                  <br />
                  <span className="text-lg text-gray-600">Partner with 15,000+ businesses nationwide.</span>
                </p>
                
                {/* Trust Indicators */}
                <div className="flex flex-wrap items-center gap-4 animate-slide-up" style={{animationDelay: '1.1s'}}>
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
              <div className="space-y-4 animate-slide-up" style={{animationDelay: '1.4s'}}>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    size="lg"
                    className="bg-[#dc291e] hover:bg-[#b8241a] text-white px-10 py-6 text-xl font-bold transform hover:scale-105 transition-all duration-300 hover:shadow-2xl active:scale-95 rounded-xl animate-pulse-glow"
                    onClick={() => {
                      const rateCalculator = document.getElementById('rate-calculator');
                      if (rateCalculator) {
                        rateCalculator.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                  >
                    <Calculator className="mr-3 h-7 w-7" />
                    Get Free Quote Now
                    <ArrowRight className="ml-3 h-7 w-7" />
                  </Button>

                  <Button
                    size="lg"
                    className="border-2 border-[#dc291e] bg-white text-[#dc291e] hover:bg-[#dc291e] hover:text-white px-8 py-6 text-xl font-bold transform hover:scale-105 transition-all duration-300 hover:shadow-xl active:scale-95 group rounded-xl"
                    onClick={() => {
                      const trackingSection = document.getElementById('track-shipment');
                      if (trackingSection) {
                        trackingSection.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                  >
                    <Package className="mr-3 h-7 w-7 group-hover:animate-bounce" />
                    Track Shipment
                  </Button>
                </div>

                {/* Urgency & Social Proof */}
                <div className="bg-gradient-to-r from-[#dc291e]/10 to-[#ff3b2d]/5 border-l-4 border-[#dc291e] p-4 rounded-r-lg shadow-lg">
                  <p className="text-black font-semibold text-lg">
                    🔥 <span style={{color: '#dc291e'}}>Special Offer:</span> 20% OFF your first shipment!
                    <br className="sm:hidden" />
                    <span style={{color: '#dc291e'}} className="font-bold">50,000+ businesses trust us</span>
                  </p>
                </div>
                
                {/* Contact Options */}
                <div className="flex flex-wrap gap-3">
                  <a 
                    href="tel:+919284441622"
                    className="inline-flex items-center px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 font-semibold text-sm"
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    Call Now: +91-9284441622
                  </a>
                  <a 
                    href="https://wa.me/919284441622"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-all duration-300 transform hover:scale-105 font-semibold text-sm"
                  >
                    <MessageCircle className="w-5 h-5 mr-2" />
                    WhatsApp Us
                  </a>
                </div>
              </div>
            </div>

            {/* Enhanced Right Content - Shipping Quote Form */}
            <div className="animate-slide-in-right">
              {/* Quick Shipping Quote Card */}
              <div className="bg-white backdrop-blur-lg p-6 rounded-3xl shadow-2xl border-4 border-[#dc291e]/30 transform hover:scale-102 transition-all duration-500 hover:shadow-3xl relative overflow-hidden max-w-lg mx-auto">
                {/* Red Accent Corner */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-[#dc291e] to-[#ff3b2d] rounded-bl-full opacity-10"></div>

                <div className="relative z-10">
                  <div className="text-center mb-6">
                    <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-[#dc291e]/20 to-[#ff3b2d]/10 rounded-full mb-4 animate-pulse">
                      <Package className="w-10 h-10 text-[#dc291e]" />
                    </div>
                    <h3 className="text-3xl font-bold text-black mb-2">Ship Your Courier</h3>
                    <p className="text-gray-600 text-base font-medium">Get instant rates via WhatsApp</p>
                  </div>

                  {/* Shipping Quote Form */}
                  <div className="space-y-4">
                    {/* Shipment Type Tabs */}
                    <Tabs value={shipmentType} onValueChange={(value) => setShipmentType(value as "domestic" | "international")}>
                      <TabsList className="grid w-full grid-cols-2 mb-4">
                        <TabsTrigger value="domestic" className="flex items-center space-x-2">
                          <Truck className="h-4 w-4" />
                          <span>Domestic</span>
                        </TabsTrigger>
                        <TabsTrigger value="international" className="flex items-center space-x-2">
                          <Globe className="h-4 w-4" />
                          <span>International</span>
                        </TabsTrigger>
                      </TabsList>

                      <TabsContent value="domestic" className="space-y-4">
                        <div className="space-y-2">
                          <Label htmlFor="pickup-domestic" className="flex items-center space-x-2 text-black font-medium text-sm">
                            <MapPin className="h-4 w-4 text-[#dc291e]" />
                            <span>Enter pickup pin code</span>
                          </Label>
                          <Input
                            id="pickup-domestic"
                            placeholder="e.g., 411047"
                            value={pickupLocation}
                            onChange={(e) => setPickupLocation(e.target.value)}
                            className="border-2 border-gray-200 focus:border-[#dc291e] transition-all duration-300 h-12"
                          />
                        </div>

                        <div className="flex justify-center py-1">
                          <div className="flex flex-col items-center space-y-1">
                            <div className="w-2 h-2 bg-[#dc291e] rounded-full"></div>
                            <div className="w-2 h-2 bg-[#dc291e] rounded-full"></div>
                            <div className="w-2 h-2 bg-[#dc291e] rounded-full"></div>
                          </div>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="delivery-domestic" className="flex items-center space-x-2 text-black font-medium text-sm">
                            <MapPin className="h-4 w-4 text-[#dc291e]" />
                            <span>Enter delivery pin code</span>
                          </Label>
                          <Input
                            id="delivery-domestic"
                            placeholder="e.g., 110001"
                            value={deliveryLocation}
                            onChange={(e) => setDeliveryLocation(e.target.value)}
                            className="border-2 border-gray-200 focus:border-[#dc291e] transition-all duration-300 h-12"
                          />
                        </div>
                      </TabsContent>

                      <TabsContent value="international" className="space-y-4">
                        <div className="space-y-2">
                          <Label htmlFor="pickup-international" className="flex items-center space-x-2 text-black font-medium text-sm">
                            <MapPin className="h-4 w-4 text-[#dc291e]" />
                            <span>Enter pickup location</span>
                          </Label>
                          <Input
                            id="pickup-international"
                            placeholder="e.g., Mumbai, India"
                            value={pickupLocation}
                            onChange={(e) => setPickupLocation(e.target.value)}
                            className="border-2 border-gray-200 focus:border-[#dc291e] transition-all duration-300 h-12"
                          />
                        </div>

                        <div className="flex justify-center py-1">
                          <div className="flex flex-col items-center space-y-1">
                            <div className="w-2 h-2 bg-[#dc291e] rounded-full"></div>
                            <div className="w-2 h-2 bg-[#dc291e] rounded-full"></div>
                            <div className="w-2 h-2 bg-[#dc291e] rounded-full"></div>
                          </div>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="delivery-international" className="flex items-center space-x-2 text-black font-medium text-sm">
                            <MapPin className="h-4 w-4 text-[#dc291e]" />
                            <span>Enter delivery location</span>
                          </Label>
                          <Input
                            id="delivery-international"
                            placeholder="e.g., New York, USA"
                            value={deliveryLocation}
                            onChange={(e) => setDeliveryLocation(e.target.value)}
                            className="border-2 border-gray-200 focus:border-[#dc291e] transition-all duration-300 h-12"
                          />
                        </div>
                      </TabsContent>
                    </Tabs>

                    {/* Get Quote Button */}
                    <Button
                      onClick={handleGetQuote}
                      disabled={!pickupLocation.trim() || !deliveryLocation.trim()}
                      className="w-full bg-gradient-to-r from-[#dc291e] to-[#ff3b2d] hover:from-[#b8241a] hover:to-[#dc291e] text-white py-6 text-lg font-bold transform hover:scale-105 transition-all duration-300 active:scale-95 rounded-xl shadow-xl hover:shadow-2xl animate-pulse-glow"
                    >
                      <MessageCircle className="mr-3 h-6 w-6" />
                      Get Instant Quote on WhatsApp
                    </Button>

                    {/* Additional Info */}
                    <div className="text-center">
                      <p className="text-sm text-gray-600 mb-4 font-medium">
                        Quick response within 5 minutes
                      </p>

                      <div className="grid grid-cols-3 gap-2">
                        <div className="p-2.5 bg-green-50 rounded-lg border-2 border-green-200 hover:scale-105 transition-all">
                          <div className="text-green-700 font-bold text-sm">✓ Instant</div>
                        </div>
                        <div className="p-2.5 bg-blue-50 rounded-lg border-2 border-blue-200 hover:scale-105 transition-all">
                          <div className="text-blue-700 font-bold text-sm">✓ Best Rates</div>
                        </div>
                        <div className="p-2.5 bg-orange-50 rounded-lg border-2 border-orange-200 hover:scale-105 transition-all">
                          <div className="text-orange-700 font-bold text-sm">✓ Secure</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Compact Stats Row */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center p-4 bg-white rounded-xl shadow-lg border-2 border-[#dc291e]/20 hover:shadow-2xl hover:border-[#dc291e]/40 transition-all duration-300 hover:scale-105 cursor-pointer group">
                    <stat.icon className="w-8 h-8 mx-auto mb-2 text-[#dc291e] group-hover:scale-110 transition-transform" />
                    <div className="text-2xl font-black text-[#dc291e]">{stat.value}</div>
                    <div className="text-sm font-semibold text-gray-700">{stat.label}</div>
                  </div>
                ))}
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