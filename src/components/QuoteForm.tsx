
import { useState } from "react";
import { X, Truck, Package, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";

const QuoteForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
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
      const { error } = await supabase
        .from('contact_messages')
        .insert([
          {
            name: formData.name,
            company: formData.company || null,
            email: formData.email,
            phone: formData.phone,
            service: formData.service || null,
            message: `QUOTE REQUEST: ${formData.message}`
          }
        ]);

      if (error) {
        throw error;
      }

      toast.success("Quote request sent successfully! We'll get back to you within 24 hours.", {
        duration: 5000,
      });
      
      // Reset form and close modal
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        service: '',
        message: ''
      });
      
      const modal = document.getElementById('quote-modal');
      if (modal) {
        modal.style.display = 'none';
      }
    } catch (error) {
      console.error('Error sending quote request:', error);
      toast.error("Failed to send quote request. Please try again.", {
        duration: 5000,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const closeModal = () => {
    const modal = document.getElementById('quote-modal');
    if (modal) {
      modal.style.display = 'none';
    }
  };

  return (
    <div 
      id="quote-modal"
      className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4"
      onClick={closeModal}
    >
      <div 
        className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl transform transition-all duration-300 animate-scale-in"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-t-2xl">
          <div className="flex items-center space-x-3">
            <div className="bg-white/20 p-2 rounded-lg">
              <Truck className="h-6 w-6" />
            </div>
            <div>
              <h2 className="text-2xl font-bold">Get Your Quote</h2>
              <p className="text-blue-100">Fast, reliable logistics solutions</p>
            </div>
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={closeModal}
            className="text-white hover:bg-white/20 transform hover:scale-110 transition-all duration-200"
          >
            <X className="h-6 w-6" />
          </Button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-6">
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
                className="transform hover:scale-105 transition-all duration-200 focus:scale-105"
              />
            </div>
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
                className="transform hover:scale-105 transition-all duration-200 focus:scale-105"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                className="transform hover:scale-105 transition-all duration-200 focus:scale-105"
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
                className="transform hover:scale-105 transition-all duration-200 focus:scale-105"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Service Required *
            </label>
            <select
              name="service"
              value={formData.service}
              onChange={handleInputChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transform hover:scale-105 transition-all duration-200 focus:scale-105"
            >
              <option value="">Select a service</option>
              <option value="ptl">Part Truck Load (PTL)</option>
              <option value="international">International Shipping</option>
              <option value="courier">Courier Services</option>
              <option value="relocation">House Shifting & Relocation</option>
              <option value="consulting">Consulting & Customized Logistics</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Requirements & Details *
            </label>
            <Textarea
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              placeholder="Please describe your logistics requirements, pickup/delivery locations, timeline, and any special handling needs..."
              rows={4}
              required
              className="transform hover:scale-105 transition-all duration-200 focus:scale-105"
            />
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              type="button"
              variant="outline"
              onClick={closeModal}
              className="flex-1 transform hover:scale-105 transition-all duration-200 active:scale-95"
            >
              Cancel
            </Button>
            <Button
              type="submit"
              disabled={isSubmitting}
              className="flex-1 bg-blue-600 hover:bg-blue-700 text-white transform hover:scale-105 transition-all duration-300 hover:shadow-2xl active:scale-95 disabled:scale-100"
            >
              {isSubmitting ? (
                <>
                  <Package className="mr-2 h-4 w-4 animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  <Send className="mr-2 h-4 w-4" />
                  Get Quote
                </>
              )}
            </Button>
          </div>

          <div className="bg-blue-50 p-4 rounded-lg">
            <div className="text-blue-800 text-sm">
              <strong>Quick Response Guarantee:</strong> We'll provide your customized quote within 2 hours during business hours. 
              For urgent requests, call us directly at +91-9987345010.
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default QuoteForm;
