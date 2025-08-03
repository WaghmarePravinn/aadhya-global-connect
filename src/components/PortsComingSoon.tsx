import { Ship, Anchor, Globe, MapPin, Calendar, Bell } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const PortsComingSoon = () => {
  const upcomingPorts = [
    {
      name: "Mumbai Port",
      type: "Domestic",
      status: "Q2 2024",
      description: "Major gateway for western India trade operations",
      features: ["Container Handling", "Bulk Cargo", "RoRo Services"],
      icon: Ship
    },
    {
      name: "Chennai Port",
      type: "Domestic", 
      status: "Q3 2024",
      description: "South India's premier logistics hub",
      features: ["Automotive Export", "General Cargo", "Liquid Bulk"],
      icon: Anchor
    },
    {
      name: "Nhava Sheva JNPT",
      type: "International",
      status: "Q4 2024", 
      description: "India's largest container port connectivity",
      features: ["Global Shipping", "Container Terminal", "SEZ Services"],
      icon: Globe
    },
    {
      name: "Kolkata Port",
      type: "Domestic",
      status: "Q1 2025",
      description: "Eastern India trade corridor access",
      features: ["River Transport", "Multi-modal Connectivity", "Export Hub"],
      icon: MapPin
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-red-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <Bell className="h-8 w-8 text-blue-600 animate-pulse" />
            <h2 className="text-4xl font-bold text-gray-900">Ports Coming Soon</h2>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Expanding our domestic and international port connectivity to provide 
            comprehensive maritime logistics solutions across major trade routes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {upcomingPorts.map((port, index) => (
            <Card key={index} className="border-0 shadow-xl transform hover:scale-105 transition-all duration-300 hover:shadow-2xl overflow-hidden">
              <CardHeader className={`${port.type === 'International' ? 'bg-gradient-to-r from-blue-500 to-red-400' : 'bg-gradient-to-r from-blue-400 to-red-300'} text-white`}>
                <div className="text-center">
                  <port.icon className="h-12 w-12 mx-auto mb-3 animate-bounce" />
                  <CardTitle className="text-lg">{port.name}</CardTitle>
                  <div className="flex items-center justify-center space-x-2 mt-2">
                    <span className={`px-2 py-1 rounded-full text-xs ${port.type === 'International' ? 'bg-yellow-400 text-yellow-900' : 'bg-green-400 text-green-900'}`}>
                      {port.type}
                    </span>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-6 space-y-4">
                <div className="text-center">
                  <div className="flex items-center justify-center space-x-2 mb-3">
                    <Calendar className="h-4 w-4 text-blue-500" />
                    <span className="text-sm font-bold text-blue-600">{port.status}</span>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">{port.description}</p>
                </div>
                
                <div className="space-y-2">
                  <h5 className="font-semibold text-gray-900 text-sm">Key Services:</h5>
                  <div className="space-y-1">
                    {port.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        <span className="text-xs text-gray-600">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Notification Signup */}
        <div className="bg-white rounded-2xl shadow-xl p-8 text-center">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">Stay Updated</h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Be the first to know when our new port services become available. 
            Join our notification list for exclusive updates and early access.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto">
            <Button 
              className="bg-blue-600 hover:bg-blue-700 transform hover:scale-105 transition-all duration-300"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Bell className="mr-2 h-4 w-4" />
              Get Notified
            </Button>
            <Button 
              variant="outline" 
              className="border-blue-600 text-blue-600 hover:bg-blue-50"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Contact for Details
            </Button>
          </div>
        </div>

        {/* Port Statistics Preview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-16">
          <div className="text-center p-6 bg-white rounded-xl shadow-lg">
            <div className="text-3xl font-bold text-blue-600">4+</div>
            <div className="text-gray-600">Major Ports</div>
            <div className="text-sm text-gray-500">Coming Soon</div>
          </div>
          <div className="text-center p-6 bg-white rounded-xl shadow-lg">
            <div className="text-3xl font-bold text-blue-600">500+</div>
            <div className="text-gray-600">TEU Capacity</div>
            <div className="text-sm text-gray-500">Daily Handling</div>
          </div>
          <div className="text-center p-6 bg-white rounded-xl shadow-lg">
            <div className="text-3xl font-bold text-blue-600">50+</div>
            <div className="text-gray-600">Countries</div>
            <div className="text-sm text-gray-500">Global Reach</div>
          </div>
          <div className="text-center p-6 bg-white rounded-xl shadow-lg">
            <div className="text-3xl font-bold text-blue-600">24/7</div>
            <div className="text-gray-600">Operations</div>
            <div className="text-sm text-gray-500">Port Services</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortsComingSoon;