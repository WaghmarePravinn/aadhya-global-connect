
import { Truck, Globe, Package, Home, BarChart3 } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Services = () => {
  const services = [
    {
      icon: Truck,
      title: "Part Truck Load (PTL) – B2B Cargo",
      description: "Efficient B2B cargo solutions with competitive pricing",
      features: [
        "Lowest ODA (Out of Delivery Area) charges",
        "Doorstep pick-up & delivery",
        "Affordable pricing with real-time tracking"
      ]
    },
    {
      icon: Globe,
      title: "International Shipping",
      description: "Global shipping solutions powered by FedEx and Aramex",
      features: [
        "Ship to 200+ countries (FedEx powered)",
        "Personal & business shipments",
        "Complete documentation assistance",
        "Door-to-door & port-to-port service options"
      ]
    },
    {
      icon: Package,
      title: "Courier Services",
      description: "Fast and reliable domestic delivery solutions",
      features: [
        "Fast & reliable domestic deliveries",
        "Priority and standard options available",
        "Real-time tracking and updates"
      ]
    },
    {
      icon: Home,
      title: "House Shifting & Relocation",
      description: "Complete relocation services for homes and offices",
      features: [
        "Remote & long-distance moving",
        "Packing, unpacking, and crating",
        "International & domestic relocation"
      ]
    },
    {
      icon: BarChart3,
      title: "Consulting & Customized Logistics",
      description: "Tailored logistics strategies for your business",
      features: [
        "Tailor-made logistics plans for businesses",
        "Expert guidance on freight strategy",
        "Seamless integration with supply chain networks"
      ]
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive logistics solutions tailored to meet your specific business needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300 border-0 shadow-md">
              <CardHeader className="text-center pb-4">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <service.icon className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle className="text-xl text-gray-900">{service.title}</CardTitle>
                <CardDescription className="text-gray-600">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-blue-600 text-white py-12 px-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-4">Ready to Optimize Your Logistics?</h3>
            <p className="text-blue-100 mb-6">
              Let us help you streamline your supply chain with our expert solutions
            </p>
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200">
              Request a Quote
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
