
import { Award, Users, Globe, Shield } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: Award,
      title: "99.5% India Coverage",
      description: "Comprehensive logistics network across India"
    },
    {
      icon: Users,
      title: "33,000+ Satisfied Clients",
      description: "Trusted by businesses nationwide"
    },
    {
      icon: Globe,
      title: "International Reach",
      description: "Partnership with FedEx and Aramex for global shipping"
    },
    {
      icon: Shield,
      title: "24/7 Operations",
      description: "Round-the-clock support and tracking"
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About AGS Logistics</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            At Aadhya Logistics, we move more than just goods—we move trust.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6 transform hover:scale-105 transition-transform duration-300">
            <h3 className="text-3xl font-bold text-gray-900">
              Founded and Led by Manoj Yadav
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              Our company thrives on professionalism, promptness, and customer satisfaction. 
              With over a decade of combined logistics experience and partnerships with major 
              players like Delhivery, FedEx, and Aramex, we aim to redefine how India moves 
              packages and freight.
            </p>
            <div className="bg-blue-50 p-6 rounded-lg transform hover:scale-105 transition-transform duration-300">
              <h4 className="text-xl font-semibold text-blue-900 mb-3">Our Mission</h4>
              <p className="text-blue-800">
                To provide reliable, efficient, and transparent logistics solutions that 
                enable businesses to focus on their core operations while we handle their 
                supply chain needs with excellence.
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-blue-100 to-indigo-200 rounded-lg p-8 h-80 flex items-center justify-center transform hover:scale-105 transition-transform duration-300 hover:shadow-xl">
              <div className="text-center">
                <div className="text-6xl font-bold text-blue-600 mb-2 animate-pulse">10+</div>
                <div className="text-xl text-gray-700">Years of Experience</div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="text-center p-6 rounded-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105 hover:bg-gray-50"
            >
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 transform hover:scale-110 transition-transform duration-200">
                <feature.icon className="h-8 w-8 text-blue-600" />
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h4>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
