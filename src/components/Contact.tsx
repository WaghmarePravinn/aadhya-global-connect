import { MapPin, Phone, Mail, Globe, Clock, MessageCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const contactInfo = [
    {
      icon: MapPin,
      title: "Address",
      details: [
        "Shop No B-8 (A), Aurum Elementto,",
        "Delhivery Ltd Courier Office,",
        "Porwal Road, Lohegaon, Pune - 47"
      ]
    },
    {
      icon: Phone,
      title: "Phone",
      details: [
        "+91-9987345010",
        "+91-9284441622"
      ]
    },
    {
      icon: Mail,
      title: "Email",
      details: [
        "manojyadav@agslogistics.co.in"
      ]
    },
    {
      icon: Globe,
      title: "Website",
      details: [
        "www.agslogistics.co.in"
      ]
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      details: [
        "+91-9987345010"
      ]
    }
  ];

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
            message: formData.message
          }
        ]);

      if (error) {
        throw error;
      }

      toast.success("Message sent successfully! We'll get back to you within 24 hours.", {
        duration: 5000,
      });
      
      // Reset form
      setFormData({
        name: '',
        company: '',
        email: '',
        phone: '',
        service: '',
        message: ''
      });
    } catch (error) {
      console.error('Error sending message:', error);
      toast.error("Failed to send message. Please try again.", {
        duration: 5000,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">Contact Us</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to optimize your logistics? Get in touch with our experts today.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information & Map */}
          <div className="space-y-6">
            <Card className="hover-lift">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2 text-primary">
                  <Clock className="h-5 w-5" />
                  <span>Business Hours</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-muted-foreground">
                  <div className="flex justify-between">
                    <span>Monday - Saturday:</span>
                    <span>9:30 AM - 7:30 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday:</span>
                    <span>Closed</span>
                  </div>
                  <div className="mt-4 p-3 bg-primary/10 rounded-lg">
                    <div className="text-primary font-medium">24/7 Emergency Support Available</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {contactInfo.map((info, index) => (
              <Card key={index} className="hover-lift">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2 text-primary">
                    <info.icon className="h-5 w-5" />
                    <span>{info.title}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-1">
                    {info.details.map((detail, detailIndex) => (
                      <div key={detailIndex} className="text-muted-foreground">
                        {info.title === "WhatsApp" ? (
                          <a 
                            href={`https://wa.me/${detail.replace(/[^0-9]/g, '')}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-primary hover:text-primary/80 transition-colors flex items-center gap-2"
                          >
                            <MessageCircle className="h-4 w-4" />
                            {detail}
                          </a>
                        ) : info.title === "Phone" ? (
                          <a 
                            href={`tel:${detail}`}
                            className="text-primary hover:text-primary/80 transition-colors"
                          >
                            {detail}
                          </a>
                        ) : info.title === "Email" ? (
                          <a 
                            href={`mailto:${detail}`}
                            className="text-primary hover:text-primary/80 transition-colors"
                          >
                            {detail}
                          </a>
                        ) : (
                          detail
                        )}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}

            {/* Google Maps */}
            <Card className="hover-lift h-80">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2 text-primary">
                  <MapPin className="h-5 w-5" />
                  <span>Find Us</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.8234567890123!2d73.9210504!3d18.5116233!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2ea74e14b8ad9%3A0x5d2c4a7b8c9d0e1f!2sShop%20No%20B-8%20(A)%2C%20Aurum%20Elementto%2C%20Porwal%20Rd%2C%20Lohegaon%2C%20Pune%2C%20Maharashtra%20411047!5e0!3m2!1sen!2sin!4v1647891234567!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0, borderRadius: '0 0 8px 8px' }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Aadhya Global Services & Logistics Location"
                />
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div>
            <Card className="hover-lift">
              <CardHeader>
                <CardTitle className="text-2xl text-foreground">Send us a Message</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Full Name *
                      </label>
                      <Input 
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Enter your full name" 
                        required
                        className="form-input"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Company Name
                      </label>
                      <Input 
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        placeholder="Enter your company name"
                        className="form-input"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Email Address *
                      </label>
                      <Input 
                        type="email" 
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="Enter your email" 
                        required
                        className="form-input"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Phone Number *
                      </label>
                      <Input 
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="Enter your phone number" 
                        required
                        className="form-input"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Service Type
                    </label>
                    <select 
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary form-input"
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
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Message *
                    </label>
                    <Textarea 
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell us about your logistics requirements..."
                      rows={5}
                      required
                      className="form-input"
                    />
                  </div>

                  <Button 
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-3 hover-lift"
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-primary/10 p-4 rounded-lg">
                      <div className="text-primary text-sm">
                        <strong>Need Immediate Assistance?</strong> Call us at +91-9284441622 
                        for urgent logistics requirements.
                      </div>
                    </div>
                    <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                      <a 
                        href="https://wa.me/919284441622?text=Hello,%20I%20need%20help%20with%20logistics%20services"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-green-700 hover:text-green-800 transition-colors text-sm"
                      >
                        <MessageCircle className="h-4 w-4" />
                        <strong>WhatsApp Us</strong> for quick support
                      </a>
                    </div>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;