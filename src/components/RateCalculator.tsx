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
    <section className="py-20 bg-gradient-to-br from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-6">Calculate Shipping Rates</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Get instant quotes for your shipments with our advanced rate calculator.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <Card className="shadow-xl border-0">
            <CardHeader className="bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-t-lg">
              <CardTitle className="flex items-center space-x-3">
                <Calculator className="h-6 w-6" />
                <span>Rate Calculator</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="p-8 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="fromCity" className="flex items-center space-x-2">
                    <MapPin className="h-4 w-4 text-blue-500" />
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
                  <Label htmlFor="toCity" className="flex items-center space-x-2">
                    <MapPin className="h-4 w-4 text-blue-500" />
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
                  <Label htmlFor="weight" className="flex items-center space-x-2">
                    <Package className="h-4 w-4 text-blue-500" />
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
                  <Label htmlFor="dimensions">Dimensions (L×W×H cm)</Label>
                  <Input
                    id="dimensions"
                    placeholder="e.g., 30×20×15"
                    value={formData.dimensions}
                    onChange={(e) => handleInputChange("dimensions", e.target.value)}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="serviceType" className="flex items-center space-x-2">
                  <Truck className="h-4 w-4 text-blue-500" />
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
                className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700"
              >
                {isCalculating ? "Calculating..." : "Calculate Rate"}
              </Button>
            </CardContent>
          </Card>

          <div className="space-y-8">
            {calculatedRate && (
              <Card className="shadow-xl border-0 bg-gradient-to-br from-green-50 to-green-100">
                <CardHeader className="bg-gradient-to-r from-green-500 to-green-600 text-white rounded-t-lg">
                  <CardTitle>Calculated Rate</CardTitle>
                </CardHeader>
                <CardContent className="p-8">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-green-600 mb-4">
                      ₹{calculatedRate.toFixed(2)}
                    </div>
                    <p className="text-slate-600 mb-6">
                      Estimated cost for your shipment
                    </p>
                    <div className="space-y-3 text-left">
                      <div className="flex justify-between">
                        <span className="text-slate-600">Route:</span>
                        <span className="font-medium">{formData.fromCity} → {formData.toCity}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-600">Weight:</span>
                        <span className="font-medium">{formData.weight} kg</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-600">Service:</span>
                        <span className="font-medium capitalize">{formData.serviceType}</span>
                      </div>
                    </div>
                    <Button className="w-full mt-6 bg-gradient-to-r from-blue-500 to-blue-600">
                      Book Shipment
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )}

            <Card className="shadow-lg">
              <CardContent className="p-6">
                <h3 className="font-bold text-slate-900 mb-4">Why Choose Our Service?</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="text-slate-600">Transparent pricing with no hidden fees</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="text-slate-600">Real-time tracking for all shipments</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="text-slate-600">Insurance coverage available</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="text-slate-600">24/7 customer support</span>
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