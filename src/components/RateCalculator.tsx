import { useState } from "react";
import { Calculator, Package, MapPin, Truck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const RateCalculator = () => {
  const [formData, setFormData] = useState({
    fromCity: "",
    toCity: "",
    weight: "",
    dimensions: "",
    serviceType: ""
  });
  const [calculatedRate, setCalculatedRate] = useState<number | null>(null);
  const [isCalculating, setIsCalculating] = useState(false);

  const calculateRate = () => {
    setIsCalculating(true);
    // Simulate API call
    setTimeout(() => {
      const baseRate = 50;
      const weightMultiplier = parseFloat(formData.weight) * 10;
      const serviceMultiplier = formData.serviceType === "express" ? 2 : formData.serviceType === "priority" ? 1.5 : 1;
      const rate = (baseRate + weightMultiplier) * serviceMultiplier;
      setCalculatedRate(rate);
      setIsCalculating(false);
    }, 1500);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    setCalculatedRate(null);
  };

  return (
    <section id="rate-calculator" className="py-20 bg-gradient-to-br from-primary/5 to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-black mb-6">Calculate Shipping Rates</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get instant quotes for your shipments with our advanced rate calculator.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <Card className="shadow-xl border-0">
            <CardHeader className="text-white rounded-t-lg" style={{background: 'linear-gradient(to right, #dc291e, #dc291e)'}}>
              <CardTitle className="flex items-center space-x-3">
                <Calculator className="h-6 w-6" />
                <span>Rate Calculator</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="p-8 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="fromCity" className="flex items-center space-x-2 text-black">
                    <MapPin className="h-4 w-4" style={{color: '#dc291e'}} />
                    <span>From City</span>
                  </Label>
                  <Input
                    id="fromCity"
                    placeholder="Enter pickup city"
                    value={formData.fromCity}
                    onChange={(e) => handleInputChange("fromCity", e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="toCity" className="flex items-center space-x-2 text-black">
                    <MapPin className="h-4 w-4" style={{color: '#dc291e'}} />
                    <span>To City</span>
                  </Label>
                  <Input
                    id="toCity"
                    placeholder="Enter delivery city"
                    value={formData.toCity}
                    onChange={(e) => handleInputChange("toCity", e.target.value)}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="weight" className="flex items-center space-x-2 text-black">
                    <Package className="h-4 w-4" style={{color: '#dc291e'}} />
                    <span>Weight (kg)</span>
                  </Label>
                  <Input
                    id="weight"
                    type="number"
                    placeholder="Enter weight"
                    value={formData.weight}
                    onChange={(e) => handleInputChange("weight", e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="dimensions" className="text-black">Dimensions (L×W×H cm)</Label>
                  <Input
                    id="dimensions"
                    placeholder="e.g., 30×20×15"
                    value={formData.dimensions}
                    onChange={(e) => handleInputChange("dimensions", e.target.value)}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="serviceType" className="flex items-center space-x-2 text-black">
                  <Truck className="h-4 w-4" style={{color: '#dc291e'}} />
                  <span>Service Type</span>
                </Label>
                <Select onValueChange={(value) => handleInputChange("serviceType", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select service type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="standard">Standard Delivery (3-5 days)</SelectItem>
                    <SelectItem value="priority">Priority Delivery (2-3 days)</SelectItem>
                    <SelectItem value="express">Express Delivery (1-2 days)</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Button 
                onClick={calculateRate}
                disabled={!formData.fromCity || !formData.toCity || !formData.weight || !formData.serviceType || isCalculating}
                className="w-full text-white transform hover:scale-105 transition-all duration-300 active:scale-95 rounded-lg"
                style={{backgroundColor: '#dc291e'}}
              >
                {isCalculating ? (
                  <div className="flex items-center space-x-2">
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                    <span>Calculating...</span>
                  </div>
                ) : (
                  "Calculate Rate"
                )}
              </Button>
            </CardContent>
          </Card>

          <div className="space-y-8">
            {calculatedRate && (
              <Card className="shadow-xl border-0 bg-gradient-to-br from-red-50 to-red-100">
                <CardHeader className="text-white rounded-t-lg" style={{background: 'linear-gradient(to right, #dc291e, #dc291e)'}}>
                  <CardTitle>Calculated Rate</CardTitle>
                </CardHeader>
                <CardContent className="p-8">
                  <div className="text-center">
                    <div className="text-4xl font-bold mb-4" style={{color: '#dc291e'}}>
                      ₹{calculatedRate.toFixed(2)}
                    </div>
                    <p className="text-gray-600 mb-6">
                      Estimated cost for your shipment
                    </p>
                    <div className="space-y-3 text-left">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Route:</span>
                        <span className="font-medium">{formData.fromCity} → {formData.toCity}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Weight:</span>
                        <span className="font-medium">{formData.weight} kg</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Service:</span>
                        <span className="font-medium capitalize">{formData.serviceType}</span>
                      </div>
                    </div>
                    <Button 
                      className="w-full mt-6 text-white transform hover:scale-105 transition-all duration-300 active:scale-95 rounded-lg"
                      style={{backgroundColor: '#dc291e'}}
                      onClick={() => window.open('https://wa.me/919284441622', '_blank')}
                    >
                      Book Shipment
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )}

            <Card className="shadow-lg">
              <CardContent className="p-6">
                <h3 className="font-bold text-black mb-4">Why Choose Our Service?</h3>
                  <div className="space-y-3">
                  <div className="flex items-center space-x-3 group cursor-pointer">
                    <div className="w-2 h-2 rounded-full transition-colors" style={{backgroundColor: '#dc291e'}}></div>
                    <span className="text-gray-600 group-hover:text-black transition-colors">
                      <span style={{color: '#dc291e'}} className="font-semibold">Transparent pricing</span> with no hidden fees
                    </span>
                  </div>
                  <div className="flex items-center space-x-3 group cursor-pointer">
                    <div className="w-2 h-2 rounded-full transition-colors" style={{backgroundColor: '#dc291e'}}></div>
                    <span className="text-gray-600 group-hover:text-black transition-colors">
                      <span style={{color: '#dc291e'}} className="font-semibold">Real-time tracking</span> for all shipments
                    </span>
                  </div>
                  <div className="flex items-center space-x-3 group cursor-pointer">
                    <div className="w-2 h-2 rounded-full transition-colors" style={{backgroundColor: '#dc291e'}}></div>
                    <span className="text-gray-600 group-hover:text-black transition-colors">
                      <span style={{color: '#dc291e'}} className="font-semibold">Insurance coverage</span> available
                    </span>
                  </div>
                  <div className="flex items-center space-x-3 group cursor-pointer">
                    <div className="w-2 h-2 rounded-full transition-colors" style={{backgroundColor: '#dc291e'}}></div>
                    <span className="text-gray-600 group-hover:text-black transition-colors">
                      <span style={{color: '#dc291e'}} className="font-semibold">24/7 customer support</span>
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RateCalculator;