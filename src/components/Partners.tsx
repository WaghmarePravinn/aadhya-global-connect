import { Truck, Globe, Award, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

// Import partner logos
import aramexLogo from "@/assets/partners/aramex-logo.png";
import fedexLogo from "@/assets/partners/fedex-logo.png";
import delhiveryLogo from "@/assets/partners/delhivery-logo.png";

const Partners = () => {
  const partners = [
    {
      name: "Aramex",
      logo: aramexLogo,
      description: "Global express, mail delivery, and logistics services",
      specialties: ["Express Delivery", "E-commerce Solutions", "Supply Chain"],
      countries: "200+ Countries"
    },
    {
      name: "FedEx", 
      logo: fedexLogo,
      description: "Worldwide courier delivery services",
      specialties: ["Overnight Delivery", "International Shipping", "Freight Services"],
      countries: "220+ Countries"
    },
    {
      name: "Delhivery",
      logo: delhiveryLogo,
      description: "India's largest logistics and supply chain services company",
      specialties: ["Last Mile Delivery", "Warehousing", "Cross-border"],
      countries: "Pan-India Network"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-6">Our Partners</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We collaborate with leading logistics companies worldwide to provide comprehensive 
            shipping solutions and ensure global connectivity.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {partners.map((partner, index) => (
            <Card key={index} className="group hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border-0 shadow-lg overflow-hidden">
              <CardContent className="p-8 text-center">
                <div className="w-32 h-32 mx-auto mb-6 flex items-center justify-center bg-white rounded-xl shadow-md transform group-hover:scale-110 transition-transform duration-300">
                  <img 
                    src={partner.logo} 
                    alt={`${partner.name} logo`}
                    className="w-24 h-24 object-contain"
                  />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">{partner.name}</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">{partner.description}</p>
                
                <div className="space-y-3 mb-6">
                  <h4 className="font-semibold text-foreground">Key Services:</h4>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {partner.specialties.map((specialty, idx) => (
                      <span 
                        key={idx}
                        className="px-3 py-1 bg-destructive/10 text-destructive rounded-full text-sm font-medium"
                      >
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex items-center justify-center space-x-2 text-primary">
                  <Globe className="h-4 w-4" />
                  <span className="font-medium">{partner.countries}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Partnership Benefits */}
        <div className="bg-card rounded-2xl shadow-xl p-8 border">
          <h3 className="text-3xl font-bold text-foreground text-center mb-12">Partnership Benefits</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="h-8 w-8 text-primary" />
              </div>
              <h4 className="font-bold text-foreground mb-2">Global Reach</h4>
              <p className="text-muted-foreground text-sm">Access to worldwide shipping networks and international markets</p>
            </div>
            
            <div className="text-center">
              <div className="bg-green-500/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Truck className="h-8 w-8 text-green-600" />
              </div>
              <h4 className="font-bold text-foreground mb-2">Reliable Service</h4>
              <p className="text-muted-foreground text-sm">Trusted logistics solutions with proven track records</p>
            </div>
            
            <div className="text-center">
              <div className="bg-yellow-500/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-yellow-600" />
              </div>
              <h4 className="font-bold text-foreground mb-2">Quality Assurance</h4>
              <p className="text-muted-foreground text-sm">Industry-leading standards and quality guarantees</p>
            </div>
            
            <div className="text-center">
              <div className="bg-purple-500/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-purple-600" />
              </div>
              <h4 className="font-bold text-foreground mb-2">Expert Support</h4>
              <p className="text-muted-foreground text-sm">24/7 customer support and logistics expertise</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;