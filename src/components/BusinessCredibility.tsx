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
    <section className="py-20 bg-gradient-to-r from-muted/30 to-muted/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full font-medium mb-6 animate-bounce-in" style={{backgroundColor: 'rgba(220, 41, 30, 0.1)', color: '#dc291e'}}>
            <Shield className="w-4 h-4 mr-2" />
            Your Trust, Our Commitment
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-black mb-6 animate-slide-up">
            Why Choose <span style={{color: '#dc291e'}}>Aadhya Global Services?</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-fade-in">
            We're not just a logistics company - we're your strategic partner in growth, 
            backed by certifications, experience, and an unwavering commitment to excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {credentials.map((credential, index) => (
            <Card 
              key={index}
              className="group bg-background/80 backdrop-blur-sm border border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-xl transform hover:-translate-y-2 animate-scale-in"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <CardContent className="p-8 text-center">
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-background to-muted mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <credential.icon className={`w-8 h-8 ${credential.color} group-hover:animate-pulse`} />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {credential.title}
                </h3>
                <p className="text-gray-600 leading-relaxed group-hover:text-black transition-colors">
                  {credential.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Professional Trust Indicators */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="animate-fade-in" style={{animationDelay: '0.8s'}}>
            <div className="text-4xl font-bold mb-2" style={{color: '#dc291e'}}>50L+</div>
            <div className="text-gray-600">Tonnes Delivered</div>
          </div>
          <div className="animate-fade-in" style={{animationDelay: '1s'}}>
            <div className="text-4xl font-bold mb-2" style={{color: '#dc291e'}}>15K+</div>
            <div className="text-gray-600">Fleet Vehicles</div>
          </div>
          <div className="animate-fade-in" style={{animationDelay: '1.2s'}}>
            <div className="text-4xl font-bold mb-2" style={{color: '#dc291e'}}>99.8%</div>
            <div className="text-gray-600">Network Coverage</div>
          </div>
          <div className="animate-fade-in" style={{animationDelay: '1.4s'}}>
            <div className="text-4xl font-bold mb-2" style={{color: '#dc291e'}}>24/7</div>
            <div className="text-gray-600">Support Available</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessCredibility;