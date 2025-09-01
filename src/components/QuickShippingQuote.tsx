import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MapPin, MessageCircle, Package, Truck } from "lucide-react";

const QuickShippingQuote = () => {
  const [shipmentType, setShipmentType] = useState<"domestic" | "international">("domestic");
  const [pickupLocation, setPickupLocation] = useState("");
  const [deliveryLocation, setDeliveryLocation] = useState("");

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
    <section className="py-16 bg-gradient-to-br from-red-50/50 to-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-black mb-4">
            Get Instant <span style={{color: '#dc291e'}}>Shipping Quote</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Enter your pickup and delivery locations to get connected with our team for personalized shipping rates
          </p>
        </div>

        <Card className="shadow-2xl border-0 bg-white/95 backdrop-blur-sm">
          <CardHeader className="text-center bg-gradient-to-r from-[#dc291e] to-[#dc291e] text-white rounded-t-lg">
            <CardTitle className="flex items-center justify-center space-x-2 text-2xl">
              <Package className="h-6 w-6" />
              <span>Ship Personal Courier</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="p-8">
            {/* Shipment Type Tabs */}
            <Tabs value={shipmentType} onValueChange={(value) => setShipmentType(value as "domestic" | "international")} className="mb-8">
              <TabsList className="grid w-full grid-cols-2 mb-6">
                <TabsTrigger value="domestic" className="flex items-center space-x-2">
                  <Truck className="h-4 w-4" />
                  <span>Domestic</span>
                </TabsTrigger>
                <TabsTrigger value="international" className="flex items-center space-x-2">
                  <Package className="h-4 w-4" />
                  <span>International</span>
                </TabsTrigger>
              </TabsList>

              <TabsContent value="domestic" className="space-y-6">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="pickup-domestic" className="flex items-center space-x-2 text-black font-medium">
                      <MapPin className="h-4 w-4 text-[#dc291e]" />
                      <span>Enter pickup pin code</span>
                    </Label>
                    <Input
                      id="pickup-domestic"
                      placeholder="e.g., 411047 (Pune)"
                      value={pickupLocation}
                      onChange={(e) => setPickupLocation(e.target.value)}
                      className="text-lg py-3 border-2 border-gray-200 focus:border-[#dc291e] transition-all duration-300"
                    />
                  </div>

                  <div className="flex justify-center">
                    <div className="w-8 h-8 bg-[#dc291e]/10 rounded-full flex items-center justify-center">
                      <div className="w-2 h-6 bg-[#dc291e] rounded-full"></div>
                      <div className="w-2 h-2 bg-[#dc291e] rounded-full ml-1"></div>
                      <div className="w-2 h-2 bg-[#dc291e] rounded-full ml-1"></div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="delivery-domestic" className="flex items-center space-x-2 text-black font-medium">
                      <MapPin className="h-4 w-4 text-[#dc291e]" />
                      <span>Enter delivery pin code</span>
                    </Label>
                    <Input
                      id="delivery-domestic"
                      placeholder="e.g., 110001 (Delhi)"
                      value={deliveryLocation}
                      onChange={(e) => setDeliveryLocation(e.target.value)}
                      className="text-lg py-3 border-2 border-gray-200 focus:border-[#dc291e] transition-all duration-300"
                    />
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="international" className="space-y-6">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="pickup-international" className="flex items-center space-x-2 text-black font-medium">
                      <MapPin className="h-4 w-4 text-[#dc291e]" />
                      <span>Enter pickup location</span>
                    </Label>
                    <Input
                      id="pickup-international"
                      placeholder="e.g., Mumbai, India"
                      value={pickupLocation}
                      onChange={(e) => setPickupLocation(e.target.value)}
                      className="text-lg py-3 border-2 border-gray-200 focus:border-[#dc291e] transition-all duration-300"
                    />
                  </div>

                  <div className="flex justify-center">
                    <div className="w-8 h-8 bg-[#dc291e]/10 rounded-full flex items-center justify-center">
                      <div className="w-2 h-6 bg-[#dc291e] rounded-full"></div>
                      <div className="w-2 h-2 bg-[#dc291e] rounded-full ml-1"></div>
                      <div className="w-2 h-2 bg-[#dc291e] rounded-full ml-1"></div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="delivery-international" className="flex items-center space-x-2 text-black font-medium">
                      <MapPin className="h-4 w-4 text-[#dc291e]" />
                      <span>Enter delivery location</span>
                    </Label>
                    <Input
                      id="delivery-international"
                      placeholder="e.g., New York, USA"
                      value={deliveryLocation}
                      onChange={(e) => setDeliveryLocation(e.target.value)}
                      className="text-lg py-3 border-2 border-gray-200 focus:border-[#dc291e] transition-all duration-300"
                    />
                  </div>
                </div>
              </TabsContent>
            </Tabs>

            {/* Get Quote Button */}
            <Button
              onClick={handleGetQuote}
              disabled={!pickupLocation.trim() || !deliveryLocation.trim()}
              className="w-full bg-[#dc291e] hover:bg-[#b8241a] text-white py-4 text-lg font-bold transform hover:scale-105 transition-all duration-300 active:scale-95 rounded-lg shadow-lg hover:shadow-xl"
            >
              <MessageCircle className="mr-3 h-6 w-6" />
              Get OTP & Ship Now
            </Button>

            {/* Additional Info */}
            <div className="mt-6 text-center">
              <p className="text-sm text-gray-600 mb-4">
                Our team will respond with detailed pricing and delivery options via WhatsApp
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                <div className="p-3 bg-green-50 rounded-lg border border-green-200">
                  <div className="text-green-700 font-semibold text-sm">✓ Instant Response</div>
                  <div className="text-green-600 text-xs">Within 5 minutes</div>
                </div>
                <div className="p-3 bg-blue-50 rounded-lg border border-blue-200">
                  <div className="text-blue-700 font-semibold text-sm">✓ Best Rates</div>
                  <div className="text-blue-600 text-xs">Competitive pricing</div>
                </div>
                <div className="p-3 bg-purple-50 rounded-lg border border-purple-200">
                  <div className="text-purple-700 font-semibold text-sm">✓ Secure Delivery</div>
                  <div className="text-purple-600 text-xs">100% insured</div>
                </div>
              </div>
            </div>

            {/* Business Registration Link */}
            <div className="mt-6 text-center">
              <p className="text-sm text-gray-500">
                Need business shipping solutions?{" "}
                <button 
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-[#dc291e] hover:text-[#b8241a] font-medium underline transition-colors"
                >
                  Sign up to ship as a business here
                </button>
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default QuickShippingQuote;