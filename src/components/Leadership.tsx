import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

/* -------------------  Image Imports  ------------------- */
import manojYadav from "@/assets/team/manoj-yadav.jpg";
import maheshGhadge from "@/assets/team/mahesh-ghadge.jpg";
import reshmajiPatil from "@/assets/team/reshmaji-patil.jpg";
import prabhaYadav from "@/assets/team/prabha-yadav.jpg";
import anandYadav from "@/assets/team/anand-yadav.jpg";
import anugrahaPillai from "@/assets/team/anugraha-pillai.jpg";

const Leadership = () => {
  /* ------------------------------------------------------------------ */
  /*  Short‑and‑sweet achievements (max 1‑2 lines each)                */
  /* ------------------------------------------------------------------ */
  const leaders = [
    {
      name: "Pravin Waghmare",
      title: "CEO & Founder",
      image: manojYadav,
      expertise: "Strategic Leadership & Innovation",
      experience: "15+ Years",
      description:
        "Visionary entrepreneur and logistics industry pioneer with a proven track record of building scalable supply chain solutions across India and international markets.",
      achievements: [
        "Scaled business from regional to national leader.",
        "Raised $10 M Series‑A for tech & ops expansion.",
        "Implemented TMS → 20 % cost reduction.",
        "Grew client base +30 % via strategic partnerships.",
        "Won ‘Logistics Entrepreneur of the Year’ (2022).",
      ],
    },
    {
      name: "Mahesh ",
      title: "Transport Manager",
      image: maheshGhadge,
      expertise: "Fleet Operations & Logistics",
      experience: "12+ Years",
      description:
        "Expert transportation professional specializing in fleet management, route optimization, and ensuring seamless cargo movement across regional and national networks.",
      achievements: [
        "Reduced fleet downtime 15 % with proactive maintenance.",
        "Optimized routes → 10 % fuel savings.",
        "Driver‑safety program cut accidents 25 %.",
        "Saved $50 k/yr via fuel‑supplier contracts.",
        "Managed national‑event logistics – zero delays.",
      ],
    },
    {
      name: "Reshmaji",
      title: "Technical Support Engineer",
      image: reshmajiPatil,
      expertise: "Technology & Digital Solutions",
      experience: "10+ Years",
      description:
        "Technology leader driving digital transformation and system optimization for enhanced operational efficiency and customer experience in logistics operations.",
      achievements: [
        "Built cloud‑based logistics platform → 20 % cost cut.",
        "Upped system uptime 15 % with proactive monitoring.",
        "Released mobile app for real‑time tracking.",
        "Integrated multiple systems → 10 % error reduction.",
        "Earned ‘Technical Excellence Award’ (2022).",
      ],
    },
    {
      name: "Prabha",
      title: "Board Member",
      image: prabhaYadav,
      expertise: "Strategic Finance & Governance",
      experience: "10+ Years",
      description:
        "Experienced board member providing strategic guidance on financial planning, risk management, and corporate governance.",
      achievements: [
        "Secured $15 M line of credit for expansion.",
        "Created enterprise‑wide risk‑management framework.",
        "Completed two strategic acquisitions.",
        "Enhanced financial reporting accuracy.",
        "Advised on successful IPO roadmap.",
      ],
    },
    {
      name: "Anand",
      title: "Board Member",
      image: anandYadav,
      expertise: "Business Growth & Strategic Partnerships",
      experience: "9+ Years",
      description:
        "Experienced board member focused on driving business growth through strategic partnerships, market expansion, and innovative client acquisition.",
      achievements: [
        "Closed partnerships → $20 M new revenue.",
        "Market‑expansion drive ↑ market share 15 %.",
        "Client‑acquisition plan ↑ customers 20 %.",
        "Negotiated key contracts with major accounts.",
        "Co‑developed new product line with strong impact.",
      ],
    },
    {
      name: "Anugraha",
      title: "Front Manager",
      image: anugrahaPillai,
      expertise: "Customer Service & Operations",
      experience: "3+ Years",
      description:
        "Dedicated front manager responsible for creating a positive customer experience, managing day‑to‑day operations, and ensuring efficient communication.",
      achievements: [
        "Boosted CSAT scores 10 % via new service protocol.",
        "Optimized front‑office flow → 15 % wait‑time cut.",
        "Resolved > 95 % inquiries on first contact.",
        "Implemented feedback system for continuous improvement.",
        "Consistently recognized for outstanding service.",
      ],
    },
  ];

  return (
    <section id="team" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
            Meet Our <span style={{ color: "#dc291e" }}>Leadership Team</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Experienced professionals with proven expertise driving innovation and
            excellence in global logistics solutions.
          </p>
          <div
            className="mt-8 w-24 h-1 mx-auto rounded-full"
            style={{ backgroundColor: "#dc291e" }}
          />
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {leaders.map((leader, index) => (
            <Card
              key={leader.name}
              className="group relative overflow-hidden hover:shadow-elegant transition-all duration-500 transform hover:-translate-y-2 border border-border bg-white backdrop-blur-sm animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-8 relative z-10">
                {/* Photo & basic info */}
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
                    <p
                      className="font-semibold text-sm tracking-wide uppercase mb-2"
                      style={{ color: "#dc291e" }}
                    >
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

                {/* Achievements (short) */}
                {leader.achievements.length > 0 && (
                  <div className="mt-6">
                    <h4 className="font-semibold text-black mb-3 text-base">
                      Key Achievements
                    </h4>
                    <ul className="space-y-2">
                      {leader.achievements.map((a, idx) => (
                        <li
                          key={idx}
                          className="flex items-start space-x-3 text-sm text-gray-700"
                        >
                          <div
                            className="w-2 h-2 rounded-full mt-2 flex-shrink-0"
                            style={{ backgroundColor: "#dc291e" }}
                          />
                          <span className="leading-relaxed">{a}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Hover border */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#dc291e]/20 rounded-lg transition-colors duration-500" />
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Team Stats */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-8 animate-fade-in">
          <div className="text-center p-6 bg-white rounded-xl shadow-lg border border-[#dc291e]/10">
            <div className="text-3xl font-bold mb-2" style={{ color: "#dc291e" }}>
              50+
            </div>
            <div className="text-gray-600">Years Combined Experience</div>
          </div>
          <div className="text-center p-6 bg-white rounded-xl shadow-lg border border-[#dc291e]/10">
            <div className="text-3xl font-bold mb-2" style={{ color: "#dc291e" }}>
              100+
            </div>
            <div className="text-gray-600">Professional Certifications</div>
          </div>
          <div className="text-center p-6 bg-white rounded-xl shadow-lg border border-[#dc291e]/10">
            <div className="text-3xl font-bold mb-2" style={{ color: "#dc291e" }}>
              50K+
            </div>
            <div className="text-gray-600">Clients Served</div>
          </div>
          <div className="text-center p-6 bg-white rounded-xl shadow-lg border border-[#dc291e]/10">
            <div className="text-3xl font-bold mb-2" style={{ color: "#dc291e" }}>
              24/7
            </div>
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
              Our experienced leadership team is committed to delivering
              exceptional logistics solutions tailored to your business needs.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center px-8 py-3 text-white font-semibold rounded-lg hover:shadow-elegant transition-all duration-300 transform hover:-translate-y-1"
              style={{ backgroundColor: "#dc291e" }}
            >
              Connect with Our Team
              <svg
                className="ml-2 w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Leadership;

/* --------------------------------------------------------------- */
/*  This is AI generated code, please refer KPIT AI Policy before using this in your projects */
/* --------------------------------------------------------------- */