import { User, Users, Award, Trophy } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

// Import team images
import manojYadavImg from "@/assets/team/manoj-yadav.jpg";
import priyaSharmaImg from "@/assets/team/priya-sharma.jpg";
import rajeshKumarImg from "@/assets/team/rajesh-kumar.jpg";
import reshmajiPatilImg from "@/assets/team/reshmaji-patil-new.jpg";
import pravinWaghmareImg from "@/assets/team/pravin-waghmare.jpg";
import aadhyaYadavImg from "@/assets/team/aadhya-yadav.jpg";

const Leadership = () => {
  const leaders = [
    {
      name: "Manoj Yadav",
      position: "Founder & CEO",
      experience: "15+ Years",
      specialty: "Logistics Strategy & Operations",
      description: "Visionary leader with extensive experience in global logistics and supply chain management. Expert in strategic planning and operational excellence.",
      icon: User,
      image: manojYadavImg,
      achievements: ["ISO 9001 Implementation", "Pan-India Network Expansion", "International Partnerships"]
    },
    {
      name: "Priya Sharma",
      position: "Chief Operations Officer",
      experience: "12+ Years",
      specialty: "Operations & Technology",
      description: "Operational excellence expert focused on technology integration and process optimization for enhanced customer satisfaction.",
      icon: Users,
      image: priyaSharmaImg,
      achievements: ["Digital Transformation", "Fleet Optimization", "Customer Satisfaction 98%+"]
    },
    {
      name: "Rajesh Kumar",
      position: "Head of International Trade",
      experience: "10+ Years",
      specialty: "Global Trade & Customs",
      description: "International trade specialist with deep expertise in customs regulations, global partnerships, and cross-border logistics.",
      icon: Award,
      image: rajeshKumarImg,
      achievements: ["200+ Countries Coverage", "Customs Expertise", "Trade Compliance"]
    },
    {
      name: "Reshmaji Patil",
      position: "Head of Regional Operations",
      experience: "8+ Years",
      specialty: "Regional Logistics & Distribution",
      description: "Regional operations expert specializing in last-mile delivery optimization and regional distribution network management.",
      icon: Trophy,
      image: reshmajiPatilImg,
      achievements: ["Regional Hub Expansion", "Last-Mile Innovation", "Cost Optimization 25%"]
    },
    {
      name: "Aadhya Yadav",
      position: "Customer Experience Manager",
      experience: "6+ Years",
      specialty: "Customer Relations & Service Excellence",
      description: "Customer experience specialist dedicated to ensuring exceptional service delivery and building long-term customer relationships.",
      icon: Users,
      image: aadhyaYadavImg,
      achievements: ["Customer Retention 95%", "Service Quality Awards", "24/7 Support Implementation"]
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-6">Leadership Team</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Meet the experienced professionals driving AGS Logistics towards excellence 
            and innovation in the logistics industry.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {leaders.map((leader, index) => (
            <Card key={index} className="border-0 shadow-xl transform hover:scale-105 transition-all duration-300 hover:shadow-2xl overflow-hidden">
              <CardHeader className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground relative">
                <div className="absolute inset-0 bg-gradient-to-br from-black/20 to-transparent"></div>
                <div className="relative z-10">
                  <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden border-4 border-white/20 shadow-lg">
                    <img 
                      src={leader.image} 
                      alt={leader.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="text-center">
                    <CardTitle className="text-xl text-white">{leader.name}</CardTitle>
                    <p className="text-white/90">{leader.position}</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-6 space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium text-muted-foreground">Experience:</span>
                  <span className="text-sm font-bold text-destructive">{leader.experience}</span>
                </div>
                <div>
                  <span className="text-sm font-medium text-muted-foreground">Specialty:</span>
                  <p className="text-sm text-foreground mt-1">{leader.specialty}</p>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">{leader.description}</p>
                
                <div className="space-y-2">
                  <h5 className="font-semibold text-foreground text-sm">Key Achievements:</h5>
                  <div className="space-y-1">
                    {leader.achievements.map((achievement, achIndex) => (
                      <div key={achIndex} className="flex items-center space-x-2">
                        <Trophy className="h-3 w-3 text-destructive" />
                        <span className="text-xs text-muted-foreground">{achievement}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Company Vision */}
        <div className="bg-card rounded-2xl shadow-xl p-8 border">
          <div className="text-center">
            <h3 className="text-3xl font-bold text-foreground mb-6">Our Vision & Mission</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-6 bg-destructive/5 rounded-xl border border-destructive/10">
                <h4 className="text-xl font-bold text-destructive mb-3">Vision</h4>
                <p className="text-muted-foreground">
                  To be the most trusted and innovative logistics partner globally, 
                  connecting businesses and communities through seamless supply chain solutions.
                </p>
              </div>
              <div className="p-6 bg-destructive/5 rounded-xl border border-destructive/10">
                <h4 className="text-xl font-bold text-destructive mb-3">Mission</h4>
                <p className="text-muted-foreground">
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