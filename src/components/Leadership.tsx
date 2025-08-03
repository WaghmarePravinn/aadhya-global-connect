import { User, Users, Award, Trophy } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Leadership = () => {
  const leaders = [
    {
      name: "Manoj Yadav",
      position: "Founder & CEO",
      experience: "15+ Years",
      specialty: "Logistics Strategy & Operations",
      description: "Visionary leader with extensive experience in global logistics and supply chain management. Expert in strategic planning and operational excellence.",
      icon: User,
      achievements: ["ISO 9001 Implementation", "Pan-India Network Expansion", "International Partnerships"]
    },
    {
      name: "Priya Sharma",
      position: "Chief Operations Officer",
      experience: "12+ Years",
      specialty: "Operations & Technology",
      description: "Operational excellence expert focused on technology integration and process optimization for enhanced customer satisfaction.",
      icon: Users,
      achievements: ["Digital Transformation", "Fleet Optimization", "Customer Satisfaction 98%+"]
    },
    {
      name: "Rajesh Kumar",
      position: "Head of International Trade",
      experience: "10+ Years",
      specialty: "Global Trade & Customs",
      description: "International trade specialist with deep expertise in customs regulations, global partnerships, and cross-border logistics.",
      icon: Award,
      achievements: ["200+ Countries Coverage", "Customs Expertise", "Trade Compliance"]
    },
    {
      name: "Reshmaji Patil",
      position: "Head of Regional Operations",
      experience: "8+ Years",
      specialty: "Regional Logistics & Distribution",
      description: "Regional operations expert specializing in last-mile delivery optimization and regional distribution network management.",
      icon: Trophy,
      achievements: ["Regional Hub Expansion", "Last-Mile Innovation", "Cost Optimization 25%"]
    },
    {
      name: "Pravin Waghmare",
      position: "Technology Director",
      experience: "9+ Years",
      specialty: "Logistics Technology & Innovation",
      description: "Technology innovator focused on developing cutting-edge solutions for modern logistics challenges and digital transformation.",
      icon: User,
      achievements: ["AI Integration", "Mobile App Development", "IoT Implementation"]
    },
    {
      name: "Aadhya Yadav",
      position: "Customer Experience Manager",
      experience: "6+ Years",
      specialty: "Customer Relations & Service Excellence",
      description: "Customer experience specialist dedicated to ensuring exceptional service delivery and building long-term customer relationships.",
      icon: Users,
      achievements: ["Customer Retention 95%", "Service Quality Awards", "24/7 Support Implementation"]
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-red-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Leadership Team</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Meet the experienced professionals driving AGS Logistics towards excellence 
            and innovation in the logistics industry.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {leaders.map((leader, index) => (
            <Card key={index} className="border-0 shadow-xl transform hover:scale-105 transition-all duration-300 hover:shadow-2xl overflow-hidden">
              <CardHeader className="bg-gradient-to-r from-red-500 to-red-600 text-white">
                <div className="flex items-center space-x-4">
                  <div className="bg-white/20 p-3 rounded-full">
                    <leader.icon className="h-8 w-8" />
                  </div>
                  <div>
                    <CardTitle className="text-xl">{leader.name}</CardTitle>
                    <p className="text-red-100">{leader.position}</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-6 space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium text-gray-600">Experience:</span>
                  <span className="text-sm font-bold text-red-600">{leader.experience}</span>
                </div>
                <div>
                  <span className="text-sm font-medium text-gray-600">Specialty:</span>
                  <p className="text-sm text-gray-700 mt-1">{leader.specialty}</p>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">{leader.description}</p>
                
                <div className="space-y-2">
                  <h5 className="font-semibold text-gray-900 text-sm">Key Achievements:</h5>
                  <div className="space-y-1">
                    {leader.achievements.map((achievement, achIndex) => (
                      <div key={achIndex} className="flex items-center space-x-2">
                        <Trophy className="h-3 w-3 text-red-500" />
                        <span className="text-xs text-gray-600">{achievement}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Company Vision */}
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <div className="text-center">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">Our Vision & Mission</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-6 bg-red-50 rounded-xl">
                <h4 className="text-xl font-bold text-red-600 mb-3">Vision</h4>
                <p className="text-gray-600">
                  To be the most trusted and innovative logistics partner globally, 
                  connecting businesses and communities through seamless supply chain solutions.
                </p>
              </div>
              <div className="p-6 bg-red-50 rounded-xl">
                <h4 className="text-xl font-bold text-red-600 mb-3">Mission</h4>
                <p className="text-gray-600">
                  Delivering excellence through technology-driven logistics solutions, 
                  ensuring customer satisfaction, and contributing to global trade growth.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Leadership;