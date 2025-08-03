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
      location: "Mumbai"
    },
    {
      name: "Priya Gupta",
      company: "E-Fashion Hub",
      role: "Operations Director",
      rating: 5,
      review: "Outstanding service! Their real-time tracking and professional team make them our preferred logistics partner. Highly recommended for e-commerce businesses.",
      location: "Delhi"
    },
    {
      name: "Amit Sharma",
      company: "Global Traders Inc.",
      role: "Logistics Head",
      rating: 5,
      review: "Excellent international shipping services. AGS Logistics handled our complex customs requirements seamlessly. Their expertise in global trade is impressive.",
      location: "Bangalore"
    },
    {
      name: "Sneha Patel",
      company: "Retail Express",
      role: "CEO",
      rating: 5,
      review: "AGS Logistics consistently delivers on time and with care. Their technology platform makes shipment management incredibly easy. A reliable partner for growth.",
      location: "Pune"
    },
    {
      name: "Vikram Singh",
      company: "Manufacturing Plus",
      role: "Procurement Manager",
      rating: 5,
      review: "Their freight services are top-notch. AGS Logistics handles our heavy machinery shipments with expertise and professionalism. Cost-effective solutions.",
      location: "Chennai"
    },
    {
      name: "Neha Agarwal",
      company: "Startup Ventures",
      role: "Founder",
      rating: 5,
      review: "As a startup, we needed a logistics partner who could scale with us. AGS Logistics provided flexible solutions and excellent support throughout our growth journey.",
      location: "Hyderabad"
    }
  ];

  const stats = [
    { number: "10,000+", label: "Happy Customers" },
    { number: "99.5%", label: "Delivery Success Rate" },
    { number: "4.9/5", label: "Average Rating" },
    { number: "24/7", label: "Customer Support" }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-6">What Our Customers Say</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our valued customers have to say about our services.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">{stat.number}</div>
              <div className="text-slate-600">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-0">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <p className="text-slate-600 mb-6 leading-relaxed">
                  "{testimonial.review}"
                </p>
                
                <div className="border-t pt-4">
                  <div className="flex items-center space-x-4">
                    <div className="bg-gradient-to-br from-blue-500 to-blue-600 w-12 h-12 rounded-full flex items-center justify-center">
                      <User className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-slate-900">{testimonial.name}</h4>
                      <div className="flex items-center space-x-1 text-sm text-slate-600">
                        <Building className="h-3 w-3" />
                        <span>{testimonial.company}</span>
                      </div>
                      <p className="text-sm text-blue-600">{testimonial.role}</p>
                      <p className="text-xs text-slate-500">{testimonial.location}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Join Thousands of Satisfied Customers</h3>
            <p className="text-blue-100 mb-6">
              Experience the difference with AGS Logistics. Start your journey with us today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                Get Started
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;