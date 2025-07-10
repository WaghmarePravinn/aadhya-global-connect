
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "sonner";
import { Package, Truck, Clock, CheckCircle } from "lucide-react";

const QuoteForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    serviceType: '',
    fromLocation: '',
    toLocation: '',
    packageDetails: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      toast.success("Quote request submitted successfully! We'll contact you within 24 hours.", {
        duration: 5000,
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        serviceType: '',
        fromLocation: '',
        toLocation: '',
        packageDetails: '',
        message: ''
      });
    } catch (error) {
      toast.error("Failed to submit quote request. Please try again.", {
        duration: 5000,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const services = [
    { value: "ptl", label: "Part Truck Load (PTL)", icon: Truck },
    { value: "international", label: "International Shipping", icon: Package },
    { value: "courier", label: "Courier Services", icon: Clock },
    { value: "relocation", label: "House Shifting & Relocation", icon: CheckCircle },
    { value: "consulting", label: "Consulting & Customized Logistics", icon: CheckCircle }
  ];

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4" id="quote-modal">
      <Card className="w-full max-w-2xl max-h-[90vh] overflow-y-auto transform animate-scale-in">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl text-blue-600">Get Your Quote</CardTitle>
          <p className="text-gray-600">Fill out the form below and we'll get back to you within 24 hours</p>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name *
                </label>
                <Input
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Enter your full name"
                  required
                  className="transform hover:scale-105 transition-transform duration-200"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Company Name
                </label>
                <Input
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  placeholder="Enter your company name"
                  className="transform hover:scale-105 transition-transform duration-200"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address *
                </label>
                <Input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Enter your email"
                  required
                  className="transform hover:scale-105 transition-transform duration-200"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number *
                </label>
                <Input
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="Enter your phone number"
                  required
                  className="transform hover:scale-105 transition-transform duration-200"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Service Type *
              </label>
              <select
                name="serviceType"
                value={formData.serviceType}
                onChange={handleInputChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transform hover:scale-105 transition-transform duration-200"
              >
                <option value="">Select a service</option>
                {services.map((service) => (
                  <option key={service.value} value={service.value}>
                    {service.label}
                  </option>
                ))}
              </select>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  From Location *
                </label>
                <Input
                  name="fromLocation"
                  value={formData.fromLocation}
                  onChange={handleInputChange}
                  placeholder="Pickup location"
                  required
                  className="transform hover:scale-105 transition-transform duration-200"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  To Location *
                </label>
                <Input
                  name="toLocation"
                  value={formData.toLocation}
                  onChange={handleInputChange}
                  placeholder="Delivery location"
                  required
                  className="transform hover:scale-105 transition-transform duration-200"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Package Details
              </label>
              <Input
                name="packageDetails"
                value={formData.packageDetails}
                onChange={handleInputChange}
                placeholder="Weight, dimensions, quantity, etc."
                className="transform hover:scale-105 transition-transform duration-200"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Additional Message
              </label>
              <Textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Tell us about your specific requirements..."
                rows={4}
                className="transform hover:scale-105 transition-transform duration-200"
              />
            </div>

            <div className="flex gap-4">
              <Button
                type="submit"
                disabled={isSubmitting}
                className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-3 transform hover:scale-105 transition-all duration-200"
              >
                {isSubmitting ? "Submitting..." : "Get Quote"}
              </Button>
              <Button
                type="button"
                variant="outline"
                onClick={() => {
                  const modal = document.getElementById('quote-modal');
                  if (modal) modal.style.display = 'none';
                }}
                className="px-6 transform hover:scale-105 transition-all duration-200"
              >
                Cancel
              </Button>
            </div>

            <div className="bg-blue-50 p-4 rounded-lg">
              <div className="text-blue-800 text-sm">
                <strong>Need Immediate Assistance?</strong> Call us at +91-9987345010 
                for urgent logistics requirements or emergency support.
              </div>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default QuoteForm;
