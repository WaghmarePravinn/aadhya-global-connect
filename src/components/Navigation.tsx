import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import TrackingModal from "./TrackingModal";
import agsLogo from "@/assets/ags-logo-final.png";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isTrackingModalOpen, setIsTrackingModalOpen] = useState(false);

  const navItems = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About Us" },
    { href: "#services", label: "Services" },
    { href: "#rate-calculator", label: "Rates" },
    { href: "#gallery", label: "Gallery" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 bg-background/98 backdrop-blur-lg border-b border-border/50 z-50 shadow-lg"
           style={{background: 'linear-gradient(180deg, hsl(var(--background)) 0%, hsl(var(--background)/0.95) 100%)'}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Enhanced Professional Logo */}
            <Link to="/" className="flex items-center space-x-4 hover-lift group">
              <div className="relative">
                {/* Logo Container with Professional Styling */}
                <div className="w-14 h-14 bg-gradient-to-br from-primary to-primary-glow rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 transform group-hover:scale-105">
                  <img 
                    src={agsLogo} 
                    alt="Aadhya Global Services & Logistics - India's Most Trusted Shipping Partner"
                    className="w-10 h-10 object-contain"
                  />
                </div>
                {/* Professional Glow Effect */}
                <div className="absolute inset-0 bg-primary/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold text-foreground tracking-tight group-hover:text-primary transition-colors">
                  Aadhya Global Services
                </span>
                <span className="text-sm text-primary font-medium tracking-wide">
                  & Logistics (AGS) • Trusted • Fast
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-muted-foreground hover:text-primary transition-colors duration-200 font-medium hover-lift"
                >
                  {item.label}
                </a>
              ))}
              <Button 
                variant="outline" 
                onClick={() => setIsTrackingModalOpen(true)}
                className="bg-background text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                Track Package
              </Button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="transform hover:scale-105 transition-transform duration-200"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden animate-fade-in">
              <div className="px-2 pt-2 pb-3 space-y-1 bg-background border-t border-border">
                {navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className="block px-3 py-2 text-muted-foreground hover:text-primary transition-colors duration-200 hover-lift"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                ))}
                <div className="px-3 py-2">
                  <Button 
                    variant="outline" 
                    onClick={() => {
                      setIsTrackingModalOpen(true);
                      setIsMenuOpen(false);
                    }}
                    className="w-full bg-background text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
                  >
                    Track Package
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>
      
      <TrackingModal 
        isOpen={isTrackingModalOpen} 
        onClose={() => setIsTrackingModalOpen(false)} 
      />
    </>
  );
};

export default Navigation;