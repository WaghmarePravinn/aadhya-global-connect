
import { Truck, Package, Globe, Home, Users, FileText, Shield, Clock } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Truck,
      title: "Part Truck Load (PTL)",
      description: "Cost-effective solutions for smaller shipments with shared transportation space, ensuring economical delivery across all destinations.",
      features: ["Flexible scheduling", "Cost optimization", "Secure handling", "Real-time tracking"],
      price: "Starting from ₹5/kg"
    },
    {
      icon: Package,
      title: "Full Truck Load (FTL)",
      description: "Dedicated vehicle solutions for large shipments requiring exclusive transportation with priority handling and direct delivery.",
      features: ["Dedicated vehicle", "Priority delivery", "Bulk capacity", "Direct routes"],
      price: "Starting from ₹15/km"
    },
    {
      icon: Globe,
      title: "International Shipping",
      description: "Comprehensive global logistics solutions with customs clearance, documentation, and worldwide delivery networks.",
      features: ["Customs clearance", "Documentation support", "Global network", "Insurance coverage"],
      price: "Quote on request"
    },
    {
      icon: Home,
      title: "House Shifting Services",
      description: "Complete residential relocation services with professional packing, safe transportation, and careful unpacking at destination.",
      features: ["Professional packing", "Safe handling", "Insurance included", "Setup assistance"],
      price: "Starting from ₹8,000"
    },
    {
      icon: Users,
      title: "Corporate Logistics",
      description: "Tailored business solutions including supply chain management, inventory optimization, and dedicated account management.",
      features: ["Supply chain management", "Inventory solutions", "Dedicated support", "Custom contracts"],
      price: "Enterprise pricing"
    },
    {
      icon: FileText,
      title: "Logistics Consulting",
      description: "Expert advisory services for supply chain optimization, cost reduction strategies, and operational efficiency improvements.",
      features: ["Supply chain audit", "Cost optimization", "Process improvement", "Strategic planning"],
      price: "₹5,000/consultation"
    }
  ];

  const additionalServices = [
    {
      icon: Shield,
      title: "Cargo Insurance",
      description: "Comprehensive coverage for all shipments against damage, loss, or theft during transit."
    },
    {
      icon: Clock,
      title: "Express Delivery",
      description: "Same-day and next-day delivery services for urgent shipments with priority handling."
    },
    {
      icon: Package,
      title: "Warehousing Solutions",
      description: "Secure storage facilities with inventory management and distribution services."
    }
  ];

  return (
    <section id="services" className="py-24 bg-gradient-to-b from-white via-gray-50 to-white relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-10 w-40 h-40 bg-[#dc291e]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-60 h-60 bg-[#dc291e]/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-block px-6 py-3 bg-[#dc291e]/10 rounded-full text-[#dc291e] font-bold text-sm mb-6 animate-bounce-in">
            WHAT WE OFFER
          </div>
          <h2 className="text-5xl lg:text-6xl font-black text-black mb-6 leading-tight">
            Complete <span className="text-[#dc291e]">Logistics Solutions</span>
          </h2>
          <p className="text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto font-medium leading-relaxed">
            From domestic shipping to international freight, we deliver excellence at every step.
            <br />
            <span className="text-[#dc291e] font-bold">Trusted by 15,000+ businesses</span> across India.
          </p>
        </div>

        {/* Main Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:transform hover:scale-105 group border-2 border-transparent hover:border-[#dc291e]/30 relative overflow-hidden">
              {/* Gradient Accent on Hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#dc291e]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative z-10">
                <div className="mb-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#dc291e]/20 to-[#ff3b2d]/10 rounded-2xl group-hover:scale-110 transition-transform duration-300 mb-4">
                    <service.icon className="h-8 w-8 text-[#dc291e]" />
                  </div>
                  <h3 className="text-2xl font-black text-black mb-2 group-hover:text-[#dc291e] transition-colors">{service.title}</h3>
                  <div className="text-[#dc291e] font-bold text-lg">{service.price}</div>
                </div>

                <p className="text-gray-600 mb-6 leading-relaxed text-base">{service.description}</p>

                <div className="space-y-3">
                  <h4 className="font-bold text-black mb-3 text-sm uppercase tracking-wide">Key Features:</h4>
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-3">
                      <div className="w-5 h-5 bg-[#dc291e] rounded-full flex items-center justify-center flex-shrink-0">
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                      </div>
                      <span className="text-gray-700 text-sm font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Services */}
        <div className="mt-16">
          <h3 className="text-4xl font-black text-black text-center mb-12">
            Value-Added <span className="text-[#dc291e]">Services</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {additionalServices.map((service, index) => (
              <div key={index} className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-[#dc291e]/10 hover:border-[#dc291e]/30 group hover:scale-105">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-[#dc291e]/10 rounded-xl flex items-center justify-center mr-4 group-hover:bg-[#dc291e] transition-colors">
                    <service.icon className="h-6 w-6 text-[#dc291e] group-hover:text-white transition-colors" />
                  </div>
                  <h4 className="text-xl font-black text-black group-hover:text-[#dc291e] transition-colors">{service.title}</h4>
                </div>
                <p className="text-gray-600 leading-relaxed font-medium">{service.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Service Excellence Stats */}
        <div className="mt-20 bg-gradient-to-r from-[#dc291e] to-[#ff3b2d] rounded-3xl p-12 text-white shadow-2xl relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-40 h-40 bg-white rounded-full -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 right-0 w-60 h-60 bg-white rounded-full translate-x-1/3 translate-y-1/3"></div>
          </div>

          <div className="relative z-10">
            <div className="text-center mb-12">
              <h3 className="text-4xl lg:text-5xl font-black mb-4">Why Businesses Choose Us</h3>
              <p className="text-white/90 text-lg lg:text-xl font-medium">Performance metrics that speak for themselves</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
              <div className="hover:transform hover:scale-110 transition-transform cursor-pointer bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <div className="text-5xl font-black mb-2">99.2%</div>
                <div className="text-white/90 font-semibold text-lg">On-Time Delivery</div>
              </div>
              <div className="hover:transform hover:scale-110 transition-transform cursor-pointer bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <div className="text-5xl font-black mb-2">99.8%</div>
                <div className="text-white/90 font-semibold text-lg">Customer Satisfaction</div>
              </div>
              <div className="hover:transform hover:scale-110 transition-transform cursor-pointer bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <div className="text-5xl font-black mb-2">0.02%</div>
                <div className="text-white/90 font-semibold text-lg">Damage Rate</div>
              </div>
              <div className="hover:transform hover:scale-110 transition-transform cursor-pointer bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <div className="text-5xl font-black mb-2">24/7</div>
                <div className="text-white/90 font-semibold text-lg">Customer Support</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
