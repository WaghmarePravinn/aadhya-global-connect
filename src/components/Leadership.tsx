import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import manojYadav from "@/assets/team/manoj-yadav.jpg";
import reshmajiPatil from "@/assets/team/reshmaji-patil-new.jpg";

const Leadership = () => {
  const leaders = [
    {
      name: "Manoj Yadav",
      title: "CEO & Founder",
      image: manojYadav,
      expertise: "Strategic Leadership & Innovation",
      experience: "15+ Years",
      description: "Visionary entrepreneur and logistics industry pioneer with a proven track record of building scalable supply chain solutions across India and international markets.",
      qualities: [
        "Strategic Vision & Planning",
        "Industry Innovation",
        "Team Leadership",
        "Business Development",
        "Customer Relations",
        "Operational Excellence"
      ],
      specialties: [
        "Supply Chain Optimization",
        "Market Expansion Strategy",
        "Partnership Development",
        "Technology Integration",
        "Risk Management",
        "Regulatory Compliance"
      ],
      skillsets: [
        "Logistics Management",
        "Business Strategy",
        "Financial Planning",
        "Negotiation",
        "Digital Transformation",
        "Quality Assurance"
      ],
      achievements: [
        "Built AGS from startup to 50K+ customer base",
        "Established partnerships with Delhivery, FedEx, Aramex",
        "Achieved 99.2% on-time delivery rate",
        "Expanded operations to 99.8% Pan-India coverage"
      ]
    },
    {
      name: "Mahesh Ghadge",
      title: "Transport Manager",
      image: manojYadav,
      expertise: "Fleet Operations & Logistics",
      experience: "12+ Years",
      description: "Expert transportation professional specializing in fleet management, route optimization, and ensuring seamless cargo movement across regional and national networks.",
      qualities: [
        "Operational Efficiency",
        "Problem Solving",
        "Team Coordination",
        "Safety Management",
        "Cost Optimization",
        "Process Improvement"
      ],
      specialties: [
        "Fleet Management",
        "Route Optimization",
        "Driver Training & Management",
        "Vehicle Maintenance",
        "Fuel Efficiency",
        "Cargo Security"
      ],
      skillsets: [
        "Transportation Planning",
        "GPS & Tracking Systems",
        "Regulatory Compliance",
        "Vendor Management",
        "Emergency Response",
        "Performance Analytics"
      ],
      achievements: [
        "Managed 15K+ vehicle fleet operations",
        "Reduced transportation costs by 25%",
        "Implemented advanced tracking systems",
        "Maintained 99.5% fleet availability"
      ]
    },
    {
      name: "Reshmaji Patil",
      title: "Technical Head",
      image: reshmajiPatil,
      expertise: "Technology & Digital Solutions",
      experience: "10+ Years",
      description: "Technology leader driving digital transformation and system optimization for enhanced operational efficiency and customer experience in logistics operations.",
      qualities: [
        "Technical Innovation",
        "System Architecture",
        "Data Analytics",
        "Process Automation",
        "Quality Assurance",
        "Continuous Learning"
      ],
      specialties: [
        "Software Development",
        "Database Management",
        "API Integration",
        "Cloud Computing",
        "Cybersecurity",
        "Mobile Applications"
      ],
      skillsets: [
        "Full-Stack Development",
        "DevOps & CI/CD",
        "Data Science",
        "Machine Learning",
        "System Integration",
        "Technical Documentation"
      ],
      achievements: [
        "Developed real-time tracking platform",
        "Integrated multiple carrier APIs",
        "Implemented automated billing system",
        "Reduced system downtime by 95%"
      ]
    },
    {
      name: "Prabha Yadav",
      title: "Operations Manager",
      image: manojYadav,
      expertise: "Operations Excellence & Process Management",
      experience: "8+ Years",
      description: "Operations specialist focused on ensuring seamless day-to-day operations, process optimization, and maintaining high service quality standards.",
      qualities: [
        "Process Excellence",
        "Quality Control",
        "Team Management",
        "Customer Focus",
        "Analytical Thinking",
        "Adaptability"
      ],
      specialties: [
        "Operations Management",
        "Quality Assurance",
        "Process Optimization",
        "Inventory Management",
        "Customer Service",
        "Performance Monitoring"
      ],
      skillsets: [
        "Lean Six Sigma",
        "Project Management",
        "Data Analysis",
        "CRM Systems",
        "Workflow Automation",
        "Training & Development"
      ],
      achievements: [
        "Streamlined operations workflow",
        "Improved customer satisfaction to 99.8%",
        "Reduced processing time by 40%",
        "Implemented quality control systems"
      ]
    },
    {
      name: "Anand Yadav",
      title: "Business Development Manager",
      image: manojYadav,
      expertise: "Business Growth & Strategic Partnerships",
      experience: "9+ Years",
      description: "Business development expert driving strategic partnerships, market expansion initiatives, and revenue growth through innovative client acquisition strategies.",
      qualities: [
        "Strategic Thinking",
        "Relationship Building",
        "Market Analysis",
        "Sales Excellence",
        "Communication Skills",
        "Results-Oriented"
      ],
      specialties: [
        "Business Development",
        "Partnership Management",
        "Market Research",
        "Sales Strategy",
        "Client Acquisition",
        "Revenue Growth"
      ],
      skillsets: [
        "B2B Sales",
        "Contract Negotiation",
        "Market Analysis",
        "CRM Management",
        "Presentation Skills",
        "Strategic Planning"
      ],
      achievements: [
        "Secured major enterprise clients",
        "Increased revenue by 150% in 2 years",
        "Established 200+ business partnerships",
        "Expanded market presence in 5 new states"
      ]
    }
  ];

  return (
    <section id="team" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
            Meet Our{" "}
            <span style={{color: '#dc291e'}}>
              Leadership Team
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Experienced professionals with proven expertise driving innovation and excellence in global logistics solutions.
          </p>
          <div className="mt-8 w-24 h-1 mx-auto rounded-full" style={{backgroundColor: '#dc291e'}}></div>
        </div>

        {/* Leadership Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {leaders.map((leader, index) => (
            <Card 
              key={leader.name} 
              className="group relative overflow-hidden hover:shadow-elegant transition-all duration-500 transform hover:-translate-y-2 border border-border bg-white backdrop-blur-sm animate-fade-in"
              style={{animationDelay: `${index * 100}ms`}}
            >
              <CardContent className="p-8 relative z-10">
                {/* Header with Photo and Basic Info */}
                <div className="flex items-start space-x-6 mb-6">
                  <div className="relative">
                    <div className="w-24 h-24 rounded-full overflow-hidden ring-4 ring-background shadow-lg group-hover:ring-primary/20 transition-all duration-500">
                      <img
                        src={leader.image}
                        alt={`${leader.name} - ${leader.title}`}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                    </div>
                    <Badge className="absolute -bottom-2 -right-2 bg-primary text-primary-foreground px-2 py-1 text-xs font-medium">
                      {leader.experience}
                    </Badge>
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-black mb-1 group-hover:transition-colors duration-300">
                      {leader.name}
                    </h3>
                    <p className="font-semibold text-sm tracking-wide uppercase mb-2" style={{color: '#dc291e'}}>
                      {leader.title}
                    </p>
                    <Badge variant="outline" className="text-xs">
                      {leader.expertise}
                    </Badge>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed text-sm mb-6">
                  {leader.description}
                </p>

                {/* Professional Attributes */}
                <div className="space-y-4">
                  {/* Core Qualities */}
                  <div>
                    <h4 className="font-semibold text-black mb-2 text-sm">Core Qualities</h4>
                    <div className="flex flex-wrap gap-1">
                      {leader.qualities.map((quality, idx) => (
                        <Badge 
                          key={idx}
                          variant="secondary" 
                          className="text-xs px-2 py-1 bg-blue-50 text-blue-700 hover:bg-blue-100"
                        >
                          {quality}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Specialties */}
                  <div>
                    <h4 className="font-semibold text-black mb-2 text-sm">Specialties</h4>
                    <div className="flex flex-wrap gap-1">
                      {leader.specialties.map((specialty, idx) => (
                        <Badge 
                          key={idx}
                          variant="secondary" 
                          className="text-xs px-2 py-1 bg-green-50 text-green-700 hover:bg-green-100"
                        >
                          {specialty}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Technical Skillsets */}
                  <div>
                    <h4 className="font-semibold text-black mb-2 text-sm">Technical Skills</h4>
                    <div className="flex flex-wrap gap-1">
                      {leader.skillsets.map((skill, idx) => (
                        <Badge 
                          key={idx}
                          variant="secondary" 
                          className="text-xs px-2 py-1 bg-purple-50 text-purple-700 hover:bg-purple-100"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Key Achievements */}
                  <div>
                    <h4 className="font-semibold text-black mb-2 text-sm">Key Achievements</h4>
                    <ul className="space-y-1">
                      {leader.achievements.map((achievement, idx) => (
                        <li key={idx} className="flex items-start space-x-2 text-xs text-gray-600">
                          <div className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0" style={{backgroundColor: '#dc291e'}}></div>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Hover Effect Border */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#dc291e]/20 rounded-lg transition-colors duration-500"></div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Team Stats */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-8 animate-fade-in">
          <div className="text-center p-6 bg-white rounded-xl shadow-lg border border-[#dc291e]/10">
            <div className="text-3xl font-bold mb-2" style={{color: '#dc291e'}}>50+</div>
            <div className="text-gray-600">Years Combined Experience</div>
          </div>
          <div className="text-center p-6 bg-white rounded-xl shadow-lg border border-[#dc291e]/10">
            <div className="text-3xl font-bold mb-2" style={{color: '#dc291e'}}>100+</div>
            <div className="text-gray-600">Professional Certifications</div>
          </div>
          <div className="text-center p-6 bg-white rounded-xl shadow-lg border border-[#dc291e]/10">
            <div className="text-3xl font-bold mb-2" style={{color: '#dc291e'}}>50K+</div>
            <div className="text-gray-600">Clients Served</div>
          </div>
          <div className="text-center p-6 bg-white rounded-xl shadow-lg border border-[#dc291e]/10">
            <div className="text-3xl font-bold mb-2" style={{color: '#dc291e'}}>24/7</div>
            <div className="text-gray-600">Leadership Support</div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 animate-fade-in">
          <div className="bg-gradient-to-r from-[#dc291e]/5 to-[#dc291e]/10 rounded-2xl p-8 border border-[#dc291e]/20">
            <h3 className="text-2xl font-bold text-black mb-4">
              Ready to Work with Industry Leaders?
            </h3>
            <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
              Our experienced leadership team is committed to delivering exceptional logistics solutions 
              tailored to your business needs.
            </p>
            <a 
              href="#contact" 
              className="inline-flex items-center px-8 py-3 text-white font-semibold rounded-lg hover:shadow-elegant transition-all duration-300 transform hover:-translate-y-1"
              style={{backgroundColor: '#dc291e'}}
            >
              Connect with Our Team
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Leadership;