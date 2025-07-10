
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
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Comprehensive Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From local deliveries to international shipping, we provide end-to-end logistics solutions 
            tailored to meet your specific business requirements with professional excellence.
          </p>
        </div>

        {/* Main Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105 group">
              <div className="flex items-center mb-6">
                <div className="bg-blue-100 p-3 rounded-lg group-hover:bg-blue-200 transition-colors">
                  <service.icon className="h-8 w-8 text-blue-600" />
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-bold text-gray-900">{service.title}</h3>
                  <div className="text-blue-600 font-semibold text-sm">{service.price}</div>
                </div>
              </div>
              
              <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
              
              <div className="space-y-2">
                <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
                {service.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span className="text-gray-600 text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Services */}
        <div>
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">Additional Value-Added Services</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {additionalServices.map((service, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-center mb-4">
                  <service.icon className="h-8 w-8 text-green-600 mr-3" />
                  <h4 className="text-lg font-bold text-gray-900">{service.title}</h4>
                </div>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Service Excellence Stats */}
        <div className="mt-16 bg-blue-600 rounded-2xl p-8 text-white">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold mb-4">Service Excellence Metrics</h3>
            <p className="text-blue-100">Our commitment to quality is reflected in our performance statistics</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="hover:transform hover:scale-110 transition-transform cursor-pointer">
              <div className="text-3xl font-bold mb-2">99.2%</div>
              <div className="text-blue-100">On-Time Delivery Rate</div>
            </div>
            <div className="hover:transform hover:scale-110 transition-transform cursor-pointer">
              <div className="text-3xl font-bold mb-2">99.8%</div>
              <div className="text-blue-100">Customer Satisfaction</div>
            </div>
            <div className="hover:transform hover:scale-110 transition-transform cursor-pointer">
              <div className="text-3xl font-bold mb-2">0.02%</div>
              <div className="text-blue-100">Damage Rate</div>
            </div>
            <div className="hover:transform hover:scale-110 transition-transform cursor-pointer">
              <div className="text-3xl font-bold mb-2">24/7</div>
              <div className="text-blue-100">Customer Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
