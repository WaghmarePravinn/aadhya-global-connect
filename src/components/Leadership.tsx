import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import manojYadav from "@/assets/team/manoj-yadav.jpg";
import reshmajiPatil from "@/assets/team/reshmaji-patil-new.jpg";

const Leadership = () => {
  const leaders = [
    {
      name: "Manoj Yadav",
      title: "CEO",
      image: manojYadav,
      expertise: "Strategic Leadership",
      description: "Visionary leader driving innovation and sustainable growth in global logistics solutions.",
    },
    {
      name: "Mahesh Ghadge",
      title: "Transport Manager",
      image: manojYadav, // Using placeholder until actual image is provided
      expertise: "Transportation Operations",
      description: "Expert in fleet management and transportation optimization across regional networks.",
    },
    {
      name: "Reshmaji Patil",
      title: "Technical Lead",
      image: reshmajiPatil,
      expertise: "Technology Solutions",
      description: "Leading technical innovation and system optimization for enhanced operational efficiency.",
    },
    {
      name: "Prabha Yadav",
      title: "Head of Business Development",
      image: manojYadav, // Using placeholder until actual image is provided
      expertise: "Business Growth",
      description: "Driving strategic partnerships and market expansion initiatives across global markets.",
    },
    {
      name: "Anand Yadav",
      title: "Head of Customer Solutions",
      image: manojYadav, // Using placeholder until actual image is provided
      expertise: "Customer Excellence",
      description: "Ensuring exceptional customer experiences and innovative solution delivery.",
    }
  ];

  return (
    <section id="team" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Our{" "}
            <span className="text-primary">
              Leadership Team
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Experienced professionals driving innovation and excellence in global logistics solutions.
          </p>
          <div className="mt-8 w-24 h-1 bg-primary mx-auto rounded-full"></div>
        </div>

        {/* Leadership Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {leaders.map((leader, index) => (
            <Card 
              key={leader.name} 
              className="group relative overflow-hidden hover:shadow-elegant transition-all duration-500 transform hover:-translate-y-2 border border-border bg-white backdrop-blur-sm animate-fade-in"
              style={{animationDelay: `${index * 100}ms`}}
            >
              <CardContent className="p-8 relative z-10">
                {/* Professional Photo */}
                <div className="relative mb-6">
                  <div className="w-32 h-32 mx-auto rounded-full overflow-hidden ring-4 ring-background shadow-lg group-hover:ring-primary/20 transition-all duration-500">
                    <img
                      src={leader.image}
                      alt={`${leader.name} - ${leader.title}`}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                  {/* Floating Badge */}
                  <Badge className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground px-3 py-1 text-xs font-medium">
                    {leader.expertise}
                  </Badge>
                </div>

                {/* Content */}
                <div className="text-center space-y-4">
                  <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                    {leader.name}
                  </h3>
                  <p className="text-primary font-semibold text-sm tracking-wide uppercase">
                    {leader.title}
                  </p>
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    {leader.description}
                  </p>
                </div>

                {/* Hover Effect Border */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary/20 rounded-lg transition-colors duration-500"></div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 animate-fade-in">
          <p className="text-lg text-muted-foreground mb-6">
            Ready to work with industry leaders?
          </p>
          <a 
            href="#contact" 
            className="inline-flex items-center px-8 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 hover:shadow-elegant transition-all duration-300 transform hover:-translate-y-1"
          >
            Get in Touch
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Leadership;