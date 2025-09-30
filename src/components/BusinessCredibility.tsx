import { Shield, Award, Globe, Users, TrendingUp, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const BusinessCredibility = () => {
  const credentials = [
    {
      icon: Shield,
      title: "ISO 9001:2015 Certified",
      description: "Quality management systems certified by international standards",
      color: "text-green-600"
    },
    {
      icon: Award,
      title: "Industry Leader",
      description: "15+ years of excellence in logistics and supply chain management",
      color: "text-blue-600"
    },
    {
      icon: Globe,
      title: "Pan-India Network",
      description: "99.8% coverage across all major cities and remote locations",
      color: "text-purple-600"
    },
    {
      icon: Users,
      title: "50,000+ Happy Clients",
      description: "Trusted by SMEs to Fortune 500 companies nationwide",
      color: "text-orange-600"
    },
    {
      icon: TrendingUp,
      title: "99.2% On-Time Delivery",
      description: "Consistently exceeding industry standards for reliability",
      color: "text-emerald-600"
    },
    {
      icon: Clock,
      title: "24/7 Operations",
      description: "Round-the-clock support and monitoring for your shipments",
      color: "text-red-600"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-white via-gray-50 to-white relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 bg-[#dc291e]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-[#dc291e]/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-6 py-3 rounded-full font-bold text-sm mb-6 animate-bounce-in shadow-lg" style={{backgroundColor: 'rgba(220, 41, 30, 0.15)', color: '#dc291e'}}>
            <Shield className="w-5 h-5 mr-2 animate-pulse" />
            TRUSTED BY 50,000+ BUSINESSES
          </div>
          <h2 className="text-5xl lg:text-6xl font-black text-black mb-6 animate-slide-up leading-tight">
            Why <span style={{color: '#dc291e'}}>15,000+ Companies</span>
            <br />Choose Us
          </h2>
          <p className="text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto animate-fade-in font-medium leading-relaxed">
            Industry-leading certifications, proven track record, and unmatched service quality.
            <br />
            <span style={{color: '#dc291e'}} className="font-bold">Your success is our mission.</span>
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {credentials.map((credential, index) => (
            <Card
              key={index}
              className="group bg-white backdrop-blur-sm border-2 border-gray-200 hover:border-[#dc291e]/40 transition-all duration-500 hover:shadow-2xl transform hover:-translate-y-3 animate-scale-in overflow-hidden"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <CardContent className="p-8 text-center relative">
                {/* Hover Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#dc291e]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="relative z-10">
                  <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-[#dc291e]/10 to-[#ff3b2d]/5 mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                    <credential.icon className="w-10 h-10 text-[#dc291e] group-hover:animate-pulse" />
                  </div>
                  <h3 className="text-2xl font-black text-black mb-3 group-hover:text-[#dc291e] transition-colors">
                    {credential.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-base group-hover:text-black transition-colors font-medium">
                    {credential.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Professional Trust Indicators */}
        <div className="bg-gradient-to-r from-[#dc291e] to-[#ff3b2d] rounded-3xl p-12 shadow-2xl relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-40 h-40 bg-white rounded-full -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 right-0 w-60 h-60 bg-white rounded-full translate-x-1/3 translate-y-1/3"></div>
          </div>

          <div className="relative z-10 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="animate-fade-in group cursor-pointer" style={{animationDelay: '0.8s'}}>
              <div className="text-5xl lg:text-6xl font-black mb-2 text-white group-hover:scale-110 transition-transform">50L+</div>
              <div className="text-white/90 font-semibold text-lg">Tonnes Delivered</div>
            </div>
            <div className="animate-fade-in group cursor-pointer" style={{animationDelay: '1s'}}>
              <div className="text-5xl lg:text-6xl font-black mb-2 text-white group-hover:scale-110 transition-transform">15K+</div>
              <div className="text-white/90 font-semibold text-lg">Fleet Vehicles</div>
            </div>
            <div className="animate-fade-in group cursor-pointer" style={{animationDelay: '1.2s'}}>
              <div className="text-5xl lg:text-6xl font-black mb-2 text-white group-hover:scale-110 transition-transform">99.8%</div>
              <div className="text-white/90 font-semibold text-lg">Network Coverage</div>
            </div>
            <div className="animate-fade-in group cursor-pointer" style={{animationDelay: '1.4s'}}>
              <div className="text-5xl lg:text-6xl font-black mb-2 text-white group-hover:scale-110 transition-transform">24/7</div>
              <div className="text-white/90 font-semibold text-lg">Support Available</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessCredibility;