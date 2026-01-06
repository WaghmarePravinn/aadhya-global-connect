import { Star, User, Building } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Rajesh Mehta",
      company: "TechCorp Solutions",
      role: "Supply Chain Manager",
      rating: 5,
      review: "AGS Logistics has transformed our delivery operations. Their reliability and customer service are unmatched. We've seen a 40% improvement in delivery times.",
      location: "Mumbai",
      highlight: "40% improvement"
    },
    {
      name: "Priya Gupta",
      company: "E-Fashion Hub",
      role: "Operations Director",
      rating: 5,
      review: "Outstanding service! Their real-time tracking and professional team make them our preferred logistics partner. Highly recommended for e-commerce businesses.",
      location: "Delhi",
      highlight: "real-time tracking"
    },
    {
      name: "Amit Sharma",
      company: "Global Traders Inc.",
      role: "Logistics Head",
      rating: 5,
      review: "Excellent international shipping services. AGS Logistics handled our complex customs requirements seamlessly. Their expertise in global trade is impressive.",
      location: "Bangalore",
      highlight: "international shipping"
    },
    {
      name: "Sneha Patel",
      company: "Retail Express",
      role: "CEO",
      rating: 5,
      review: "AGS Logistics consistently delivers on time and with care. Their technology platform makes shipment management incredibly easy. A reliable partner for growth.",
      location: "Pune",
      highlight: "on time delivery"
    },
    {
      name: "Vikram Singh",
      company: "Manufacturing Plus",
      role: "Procurement Manager",
      rating: 5,
      review: "Their freight services are top-notch. AGS Logistics handles our heavy machinery shipments with expertise and professionalism. Cost-effective solutions.",
      location: "Chennai",
      highlight: "cost-effective"
    },
    {
      name: "Neha Agarwal",
      company: "Startup Ventures",
      role: "Founder",
      rating: 5,
      review: "As a startup, we needed a logistics partner who could scale with us. AGS Logistics provided flexible solutions and excellent support throughout our growth journey.",
      location: "Hyderabad",
      highlight: "scale with us"
    }
  ];

  const stats = [
    { number: "10,000+", label: "Happy Customers" },
    { number: "99.5%", label: "Delivery Success Rate" },
    { number: "4.9/5", label: "Average Rating" },
    { number: "24/7", label: "Customer Support" }
  ];

  const highlightText = (text: string, highlight: string) => {
    const parts = text.split(new RegExp(`(${highlight})`, 'gi'));
    return parts.map((part, index) => 
      part.toLowerCase() === highlight.toLowerCase() ? 
        <span key={index} className="bg-red-100 text-red-600 px-1 rounded font-semibold">{part}</span> : 
        part
    );
  };

  return (
    <section className="py-20 bg-gradient-to-br from-background to-primary/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-6">What Our Customers Say</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our valued customers have to say about our services.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group cursor-pointer">
              <div className="text-3xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform duration-300">
                {stat.number}
              </div>
              <div className="text-muted-foreground group-hover:text-foreground transition-colors">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Testimonials Grid - Simplified Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 border bg-card/50 backdrop-blur-sm group">
              <CardContent className="p-6">
                {/* Rating */}
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                {/* Review with Highlighting */}
                <p className="text-muted-foreground mb-6 leading-relaxed text-sm">
                  "{highlightText(testimonial.review, testimonial.highlight)}"
                </p>
                
                {/* Customer Info */}
                <div className="flex items-center space-x-3">
                  <div className="bg-gradient-to-br from-primary to-primary/80 w-10 h-10 rounded-full flex items-center justify-center">
                    <User className="h-5 w-5 text-primary-foreground" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-foreground text-sm">{testimonial.name}</h4>
                    <div className="flex items-center space-x-1 text-xs text-muted-foreground">
                      <Building className="h-3 w-3" />
                      <span>{testimonial.company}</span>
                    </div>
                    <p className="text-xs text-primary font-medium">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-primary to-primary/80 rounded-2xl p-8 text-primary-foreground relative overflow-hidden">
            <div className="absolute inset-0 bg-primary/10 backdrop-blur-sm"></div>
            <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-4">Join Thousands of Satisfied Customers</h3>
              <p className="text-primary-foreground/80 mb-6">
                Experience the difference with AGS Logistics. Start your journey with us today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                  className="bg-background text-primary px-8 py-3 rounded-lg font-semibold hover:bg-background/90 transition-all duration-300 transform hover:scale-105 active:scale-95"
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Get Started
                </button>
                <button 
                  className="border-2 border-primary-foreground text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:bg-primary-foreground hover:text-primary transition-all duration-300 transform hover:scale-105 active:scale-95"
                  onClick={() => window.open('https://wa.me/919000000000', '_blank')}
                >
                  Contact Sales
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;