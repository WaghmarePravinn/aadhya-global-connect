import { useState, useEffect } from "react";
import { Truck, Clock, MapPin, Package, CheckCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const LiveUpdates = () => {
  const [recentDeliveries, setRecentDeliveries] = useState([
    {
      id: "AGS001234",
      from: "Mumbai",
      to: "Delhi",
      status: "Delivered",
      time: "2 minutes ago",
      customer: "TechCorp Solutions"
    },
    {
      id: "AGS001235",
      from: "Bangalore",
      to: "Chennai",
      status: "In Transit",
      time: "5 minutes ago",
      customer: "E-Fashion Hub"
    },
    {
      id: "AGS001236",
      from: "Delhi",
      to: "Mumbai",
      status: "Out for Delivery",
      time: "8 minutes ago",
      customer: "Global Traders Inc."
    }
  ]);

  const [stats, setStats] = useState({
    deliveredToday: 1247,
    inTransit: 856,
    scheduled: 432
  });

  useEffect(() => {
    const interval = setInterval(() => {
      // Simulate real-time updates
      setStats(prev => ({
        deliveredToday: prev.deliveredToday + Math.floor(Math.random() * 3),
        inTransit: prev.inTransit + Math.floor(Math.random() * 2) - 1,
        scheduled: prev.scheduled + Math.floor(Math.random() * 2)
      }));

      // Occasionally add new delivery updates
      if (Math.random() > 0.7) {
        const newDelivery = {
          id: `AGS${String(Math.floor(Math.random() * 999999)).padStart(6, '0')}`,
          from: ["Mumbai", "Delhi", "Bangalore", "Chennai", "Pune"][Math.floor(Math.random() * 5)],
          to: ["Mumbai", "Delhi", "Bangalore", "Chennai", "Pune"][Math.floor(Math.random() * 5)],
          status: ["Delivered", "In Transit", "Out for Delivery"][Math.floor(Math.random() * 3)],
          time: "Just now",
          customer: ["TechCorp", "E-Fashion", "Global Traders", "Retail Express"][Math.floor(Math.random() * 4)]
        };
        
        setRecentDeliveries(prev => [newDelivery, ...prev.slice(0, 4)]);
      }
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "Delivered":
        return <CheckCircle className="h-4 w-4 text-green-500" />;
      case "In Transit":
        return <Truck className="h-4 w-4 text-blue-500" />;
      case "Out for Delivery":
        return <Package className="h-4 w-4 text-orange-500" />;
      default:
        return <Clock className="h-4 w-4 text-gray-500" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Delivered":
        return "bg-green-100 text-green-800 border-green-200";
      case "In Transit":
        return "bg-blue-100 text-blue-800 border-blue-200";
      case "Out for Delivery":
        return "bg-orange-100 text-orange-800 border-orange-200";
      default:
        return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-blue-900 to-slate-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">Real-time Delivery Updates</h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Track our live operations and see deliveries happening across India in real-time.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Live Stats */}
          <div className="lg:col-span-1">
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Clock className="h-5 w-5" />
                  <span>Live Statistics</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="text-center p-4 bg-green-500/20 rounded-lg">
                  <div className="text-3xl font-bold text-green-300">{stats.deliveredToday.toLocaleString()}</div>
                  <div className="text-green-100">Delivered Today</div>
                </div>
                <div className="text-center p-4 bg-blue-500/20 rounded-lg">
                  <div className="text-3xl font-bold text-blue-300">{stats.inTransit.toLocaleString()}</div>
                  <div className="text-blue-100">In Transit</div>
                </div>
                <div className="text-center p-4 bg-orange-500/20 rounded-lg">
                  <div className="text-3xl font-bold text-orange-300">{stats.scheduled.toLocaleString()}</div>
                  <div className="text-orange-100">Scheduled</div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Recent Updates */}
          <div className="lg:col-span-2">
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Truck className="h-5 w-5" />
                  <span>Recently Updated</span>
                  <Badge className="bg-green-500 text-white animate-pulse">LIVE</Badge>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentDeliveries.map((delivery, index) => (
                    <div 
                      key={delivery.id} 
                      className={`p-4 rounded-lg border transition-all duration-500 ${
                        index === 0 ? 'bg-white/20 border-white/30 animate-fade-in' : 'bg-white/5 border-white/10'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center space-x-3">
                          {getStatusIcon(delivery.status)}
                          <span className="font-semibold">{delivery.id}</span>
                          <Badge className={getStatusColor(delivery.status)}>
                            {delivery.status}
                          </Badge>
                        </div>
                        <span className="text-sm text-blue-200">{delivery.time}</span>
                      </div>
                      
                      <div className="flex items-center justify-between text-sm">
                        <div className="flex items-center space-x-2">
                          <MapPin className="h-4 w-4 text-blue-300" />
                          <span>{delivery.from} → {delivery.to}</span>
                        </div>
                        <span className="text-blue-200">{delivery.customer}</span>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="mt-6 text-center">
                  <button className="bg-white/20 hover:bg-white/30 text-white px-6 py-2 rounded-lg transition-colors">
                    View All Updates
                  </button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Network Status */}
        <div className="mt-16">
          <Card className="bg-gradient-to-r from-green-500/20 to-blue-500/20 backdrop-blur-sm border-white/20">
            <CardContent className="p-8">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-white mb-4">Network Status: All Systems Operational</h3>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                  <div className="text-center">
                    <div className="flex items-center justify-center space-x-2 mb-2">
                      <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                      <span className="text-green-300 font-semibold">Mumbai Hub</span>
                    </div>
                    <span className="text-sm text-white/70">99.9% Uptime</span>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center justify-center space-x-2 mb-2">
                      <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                      <span className="text-green-300 font-semibold">Delhi Hub</span>
                    </div>
                    <span className="text-sm text-white/70">100% Uptime</span>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center justify-center space-x-2 mb-2">
                      <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                      <span className="text-green-300 font-semibold">Bangalore Hub</span>
                    </div>
                    <span className="text-sm text-white/70">99.8% Uptime</span>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center justify-center space-x-2 mb-2">
                      <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                      <span className="text-green-300 font-semibold">Chennai Hub</span>
                    </div>
                    <span className="text-sm text-white/70">99.9% Uptime</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default LiveUpdates;