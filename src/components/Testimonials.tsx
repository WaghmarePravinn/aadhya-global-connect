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
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-10 w-64 h-64 bg-[#dc291e]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-80 h-80 bg-[#dc291e]/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-block px-6 py-3 bg-[#dc291e]/10 rounded-full text-[#dc291e] font-bold text-sm mb-6 animate-bounce-in">
            CLIENT SUCCESS STORIES
          </div>
          <h2 className="text-5xl lg:text-6xl font-black text-black mb-6 leading-tight">
            Trusted by <span className="text-[#dc291e]">15,000+ Businesses</span>
          </h2>
          <p className="text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto font-medium leading-relaxed">
            Don't just take our word for it. See why businesses nationwide choose us.
            <br />
            <span className="text-[#dc291e] font-bold">Real results from real customers.</span>
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group cursor-pointer bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 border-2 border-[#dc291e]/10 hover:border-[#dc291e]/30">
              <div className="text-4xl lg:text-5xl font-black text-[#dc291e] mb-3 group-hover:scale-110 transition-transform duration-300">
                {stat.number}
              </div>
              <div className="text-gray-600 font-semibold text-base group-hover:text-black transition-colors">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border-2 border-gray-200 hover:border-[#dc291e]/30 bg-white backdrop-blur-sm group relative overflow-hidden">
              {/* Gradient Overlay on Hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#dc291e]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <CardContent className="p-8 relative z-10">
                {/* Rating */}
                <div className="flex items-center mb-5">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-[#dc291e] fill-current" />
                  ))}
                </div>

                {/* Review with Highlighting */}
                <p className="text-gray-700 mb-6 leading-relaxed text-base font-medium">
                  "{highlightText(testimonial.review, testimonial.highlight)}"
                </p>

                {/* Customer Info */}
                <div className="flex items-center space-x-4">
                  <div className="bg-gradient-to-br from-[#dc291e] to-[#ff3b2d] w-14 h-14 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <User className="h-7 w-7 text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-black text-base group-hover:text-[#dc291e] transition-colors">{testimonial.name}</h4>
                    <div className="flex items-center space-x-1 text-sm text-gray-600">
                      <Building className="h-4 w-4" />
                      <span>{testimonial.company}</span>
                    </div>
                    <p className="text-sm text-[#dc291e] font-semibold">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-[#dc291e] to-[#ff3b2d] rounded-3xl p-12 lg:p-16 text-white relative overflow-hidden shadow-2xl">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-0 w-60 h-60 bg-white rounded-full -translate-x-1/2 -translate-y-1/2"></div>
              <div className="absolute bottom-0 right-0 w-80 h-80 bg-white rounded-full translate-x-1/3 translate-y-1/3"></div>
            </div>
            <div className="relative z-10">
              <h3 className="text-4xl lg:text-5xl font-black mb-6">Ready to Transform Your Logistics?</h3>
              <p className="text-white/90 text-xl lg:text-2xl mb-10 max-w-3xl mx-auto font-medium">
                Join 15,000+ businesses who trust us with their shipping needs.
                <br />
                <span className="font-bold">Get started in minutes!</span>
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <button
                  className="bg-white text-[#dc291e] px-10 py-5 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-xl hover:shadow-2xl"
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Get Free Quote Now
                </button>
                <button
                  className="border-3 border-white text-white px-10 py-5 rounded-xl font-bold text-lg hover:bg-white hover:text-[#dc291e] transition-all duration-300 transform hover:scale-105 active:scale-95"
                  onClick={() => window.open('https://wa.me/919284441622', '_blank')}
                >
                  WhatsApp Us
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