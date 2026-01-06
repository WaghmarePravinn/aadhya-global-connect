/*  RateCalculator.tsx  */
import { useState } from "react";
import {
  Calculator,
  Package,
  MapPin,
  Truck,
  Globe,
  ArrowRight,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

/* --------------------------------------------------------------- */
/*  1️⃣  Service‑type definitions – different per region           */
/* --------------------------------------------------------------- */
type ServiceOption = {
  value: string;
  label: string;
  multiplier: number; // applied on the base‑rate + weight + volume
};

/* Domestic services */
const domesticServices: ServiceOption[] = [
  { value: "standard", label: "Standard (3‑5 days)", multiplier: 1 },
  { value: "priority", label: "Priority (2‑3 days)", multiplier: 1.4 },
  { value: "express", label: "Express (1‑2 days)", multiplier: 2 },
];

/* International services */
const internationalServices: ServiceOption[] = [
  { value: "air", label: "Air Freight", multiplier: 2.5 },
  { value: "sea", label: "Sea Freight", multiplier: 1.6 },
  { value: "express", label: "Express (Air + Fast)", multiplier: 3 },
];

/* --------------------------------------------------------------- */
/*  2️⃣  Main component                                            */
/* --------------------------------------------------------------- */
const RateCalculator = () => {
  /* ---------- UI state ---------- */
  const [region, setRegion] = useState<"domestic" | "international">(
    "domestic"
  );
  const [service, setService] = useState("");
  const [showDimensions, setShowDimensions] = useState(false);
  const [form, setForm] = useState({
    fromCity: "",
    toCity: "",
    weight: "",
    length: "",
    width: "",
    height: "",
  });

  const [rate, setRate] = useState<number | null>(null);
  const [calculating, setCalculating] = useState(false);

  /* ---------- helpers ---------- */
  const services = region === "domestic" ? domesticServices : internationalServices;

  const handleChange = (field: keyof typeof form, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    setRate(null); // clear old result when anything changes
  };

  const calculate = () => {
    setCalculating(true);
    setTimeout(() => {
      /* ---- Base rates ---- */
      const baseRate = region === "domestic" ? 50 : 80; // international start higher
      const weightKg = parseFloat(form.weight) || 0;
      const weightCost = weightKg * 12; // ₹12 per kg (example)

      /* ---- Volume cost (optional) ---- */
      let volumeCost = 0;
      if (showDimensions) {
        const l = parseFloat(form.length) || 0;
        const w = parseFloat(form.width) || 0;
        const h = parseFloat(form.height) || 0;
        const volume = l * w * h; // cm³
        volumeCost = volume * 0.008; // ₹0.008 per cm³  (example)
      }

      /* ---- Service multiplier ---- */
      const svc = services.find((s) => s.value === service);
      const multiplier = svc ? svc.multiplier : 1;

      const raw = (baseRate + weightCost + volumeCost) * multiplier;
      setRate(raw);
      setCalculating(false);
    }, 1200); // simulate async calc
  };

  /* --------------------------------------------------------------- */
  /*  3️⃣  Render UI                                                  */
  /* --------------------------------------------------------------- */
  return (
    <section
      id="rate-calculator"
      className="py-20 bg-gradient-to-br from-primary/5 to-background relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ===== Title ===== */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-black mb-4">
            Shipping Rate Calculator
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Choose the shipment type, fill in the details and get an instant quote.
          </p>
        </div>

        {/* ===== Main Grid – Form & Result ===== */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* ---------- LEFT – FORM ---------- */}
          <Card className="shadow-xl border-0">
            <CardHeader
              className="text-white rounded-t-lg"
              style={{ backgroundColor: "#dc291e" }}
            >
              <CardTitle className="flex items-center space-x-2">
                <Calculator className="h-5 w-5" />
                <span>Rate Calculator</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="p-8 space-y-6">
              {/* ---- Region selector (Domestic / International) ---- */}
              <div className="space-y-2">
                <Label className="font-medium text-black">Shipment Region</Label>
                <div className="flex gap-6">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="region"
                      value="domestic"
                      checked={region === "domestic"}
                      onChange={() => {
                        setRegion("domestic");
                        setService("");
                      }}
                      className="form-radio h-4 w-4 text-[#dc291e]"
                    />
                    <span className="text-black">Domestic</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="region"
                      value="international"
                      checked={region === "international"}
                      onChange={() => {
                        setRegion("international");
                        setService("");
                      }}
                      className="form-radio h-4 w-4 text-[#dc291e]"
                    />
                    <span className="text-black">International</span>
                  </label>
                </div>
              </div>

              {/* ---- Service type (changes with region) ---- */}
              <div className="space-y-2">
                <Label htmlFor="service" className="font-medium text-black">
                  Service Type
                </Label>
                <Select onValueChange={setService} value={service}>
                  <SelectTrigger id="service">
                    <SelectValue placeholder="Select service type" />
                  </SelectTrigger>
                  <SelectContent>
                    {services.map((opt) => (
                      <SelectItem key={opt.value} value={opt.value}>
                        {opt.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* ---- From / To city ---- */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label
                    htmlFor="fromCity"
                    className="flex items-center gap-2 text-black"
                  >
                    <MapPin className="h-4 w-4" style={{ color: "#dc291e" }} />
                    From City
                  </Label>
                  <Input
                    id="fromCity"
                    placeholder="Pickup city"
                    value={form.fromCity}
                    onChange={(e) => handleChange("fromCity", e.target.value)}
                  />
                </div>

                <div className="space-y-2">
                  <Label
                    htmlFor="toCity"
                    className="flex items-center gap-2 text-black"
                  >
                    <MapPin className="h-4 w-4" style={{ color: "#dc291e" }} />
                    To City
                  </Label>
                  <Input
                    id="toCity"
                    placeholder="Destination city"
                    value={form.toCity}
                    onChange={(e) => handleChange("toCity", e.target.value)}
                  />
                </div>
              </div>

              {/* ---- Weight ---- */}
              <div className="space-y-2">
                <Label
                  htmlFor="weight"
                  className="flex items-center gap-2 text-black"
                >
                  <Package className="h-4 w-4" style={{ color: "#dc291e" }} />
                  Weight (kg)
                </Label>
                <Input
                  id="weight"
                  type="number"
                  placeholder="e.g. 12"
                  value={form.weight}
                  onChange={(e) => handleChange("weight", e.target.value)}
                />
              </div>

              {/* ---- Optional dimensions (toggle) ---- */}
              <button
                type="button"
                onClick={() => setShowDimensions(!showDimensions)}
                className="text-sm text-gray-600 hover:text-[#dc291e] focus:outline-none"
              >
                {showDimensions ? "Hide" : "Show"} Advanced Options (Dimensions)
              </button>

              {showDimensions && (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="length" className="text-black">
                      Length (cm)
                    </Label>
                    <Input
                      id="length"
                      type="number"
                      placeholder="e.g. 40"
                      value={form.length}
                      onChange={(e) => handleChange("length", e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="width" className="text-black">
                      Width (cm)
                    </Label>
                    <Input
                      id="width"
                      type="number"
                      placeholder="e.g. 30"
                      value={form.width}
                      onChange={(e) => handleChange("width", e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="height" className="text-black">
                      Height (cm)
                    </Label>
                    <Input
                      id="height"
                      type="number"
                      placeholder="e.g. 20"
                      value={form.height}
                      onChange={(e) => handleChange("height", e.target.value)}
                    />
                  </div>
                </div>
              )}

              {/* ---- Calculate button ---- */}
              <Button
                onClick={calculate}
                disabled={
                  !form.fromCity ||
                  !form.toCity ||
                  !form.weight ||
                  !service ||
                  calculating
                }
                className="w-full text-white transform hover:scale-105 transition-all duration-300 active:scale-95 rounded-lg"
                style={{ backgroundColor: "#dc291e" }}
              >
                {calculating ? (
                  <div className="flex items-center gap-2">
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                    <span>Calculating…</span>
                  </div>
                ) : (
                  "Calculate Rate"
                )}
              </Button>
            </CardContent>
          </Card>

          {/* ---------- RIGHT – RESULT CARD ---------- */}
          <div className="space-y-8">
            {rate !== null && (
              <Card className="shadow-xl border-0 bg-gradient-to-br from-red-50 to-red-100">
                <CardHeader
                  className="text-white rounded-t-lg"
                  style={{ background: "linear-gradient(to right, #dc291e, #dc291e)" }}
                >
                  <CardTitle>Estimated Shipping Cost</CardTitle>
                </CardHeader>
                <CardContent className="p-8">
                  <div className="text-center">
                    <div
                      className="text-4xl font-bold mb-4"
                      style={{ color: "#dc291e" }}
                    >
                      ₹{rate.toFixed(2)}
                    </div>
                    <p className="text-gray-600 mb-6">
                      Approximate cost for the entered shipment details.
                    </p>

                    {/* ---- Details ---- */}
                    <div className="space-y-3 text-left">
                      <div className="flex justify-between">
                        <span className="text-gray-600">From:</span>
                        <span className="font-medium">{form.fromCity}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">To:</span>
                        <span className="font-medium">{form.toCity}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Weight:</span>
                        <span className="font-medium">{form.weight} kg</span>
                      </div>

                      {showDimensions && (
                        <div className="flex justify-between">
                          <span className="text-gray-600">Dimensions:</span>
                          <span className="font-medium">
                            {form.length} × {form.width} × {form.height} cm
                          </span>
                        </div>
                      )}

                      <div className="flex justify-between">
                        <span className="text-gray-600">Service:</span>
                        <span className="font-medium">
                          {services.find((s) => s.value === service)?.label}
                        </span>
                      </div>
                    </div>

                    {/* ---- CTA button ---- */}
                    <Button
                      className="w-full mt-6 text-white transform hover:scale-105 transition-all duration-300 active:scale-95 rounded-lg"
                      style={{ backgroundColor: "#dc291e" }}
                      onClick={() =>
                        window.open("https://wa.me/919000000000", "_blank")
                      }
                    >
                      Book via WhatsApp
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* ---- Optional “Why choose us” card (kept unchanged) ---- */}
            <Card className="shadow-lg">
              <CardContent className="p-6">
                <h3 className="font-bold text-black mb-4">Why Choose Our Service?</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3 group cursor-pointer">
                    <div className="w-2 h-2 rounded-full" style={{ backgroundColor: "#dc291e" }} />
                    <span className="text-gray-600 group-hover:text-black transition-colors">
                      <span style={{ color: "#dc291e" }} className="font-semibold">
                        Transparent pricing
                      </span>{" "}
                      – no hidden fees
                    </span>
                  </div>
                  <div className="flex items-center space-x-3 group cursor-pointer">
                    <div className="w-2 h-2 rounded-full" style={{ backgroundColor: "#dc291e" }} />
                    <span className="text-gray-600 group-hover:text-black transition-colors">
                      <span style={{ color: "#dc291e" }} className="font-semibold">
                        Real‑time tracking
                      </span>{" "}
                      for all shipments
                    </span>
                  </div>
                  <div className="flex items-center space-x-3 group cursor-pointer">
                    <div className="w-2 h-2 rounded-full" style={{ backgroundColor: "#dc291e" }} />
                    <span className="text-gray-600 group-hover:text-black transition-colors">
                      <span style={{ color: "#dc291e" }} className="font-semibold">
                        Insurance coverage
                      </span>{" "}
                      available
                    </span>
                  </div>
                  <div className="flex items-center space-x-3 group cursor-pointer">
                    <div className="w-2 h-2 rounded-full" style={{ backgroundColor: "#dc291e" }} />
                    <span className="text-gray-600 group-hover:text-black transition-colors">
                      <span style={{ color: "#dc291e" }} className="font-semibold">
                        24/7 support
                      </span>
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