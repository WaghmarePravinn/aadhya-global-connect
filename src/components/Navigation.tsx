import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, User, LogOut, Truck } from "lucide-react";
import TrackingModal from "./TrackingModal";
import { useAuth } from "@/hooks/useAuth";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isTrackingModalOpen, setIsTrackingModalOpen] = useState(false);
  const { user, profile, signOut } = useAuth();
  const navigate = useNavigate();

  const navItems = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About Us" },
    { href: "#services", label: "Services" },
    { href: "#gallery", label: "Gallery" },
    { href: "#contact", label: "Contact" },
  ];

  const handleGetQuote = () => {
    const modal = document.getElementById('quote-modal');
    if (modal) {
      modal.style.display = 'flex';
    }
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-gray-200 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2 transform hover:scale-105 transition-transform duration-200">
              <Truck className="h-8 w-8 text-primary" />
              <span className="text-xl font-bold text-gray-900">FreightForward</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-gray-700 hover:text-primary transition-colors duration-200 font-medium transform hover:scale-105"
                >
                  {item.label}
                </a>
              ))}
              <Button 
                variant="outline" 
                onClick={() => setIsTrackingModalOpen(true)}
                className="bg-white text-primary hover:bg-primary hover:text-white transition-colors"
              >
                Track Package
              </Button>
              
              {user ? (
                <div className="flex items-center gap-2">
                  <Button 
                    onClick={() => navigate('/dashboard')}
                    className="flex items-center gap-2"
                  >
                    <User className="w-4 h-4" />
                    Dashboard
                  </Button>
                  <Button 
                    variant="outline"
                    onClick={signOut}
                    className="flex items-center gap-2 bg-white text-primary hover:bg-primary hover:text-white"
                  >
                    <LogOut className="w-4 h-4" />
                    Sign Out
                  </Button>
                </div>
              ) : (
                <Button 
                  onClick={() => navigate('/auth')}
                  className="flex items-center gap-2"
                >
                  <User className="w-4 h-4" />
                  Login / Sign Up
                </Button>
              )}
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
              <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t">
                {navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className="block px-3 py-2 text-gray-700 hover:text-primary transition-colors duration-200 transform hover:scale-105"
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
                    className="w-full bg-white text-primary hover:bg-primary hover:text-white transition-colors"
                  >
                    Track Package
                  </Button>
                  
                  {user ? (
                    <>
                      <Button 
                        onClick={() => {
                          navigate('/dashboard')
                          setIsMenuOpen(false)
                        }}
                        className="w-full flex items-center gap-2 mt-2"
                      >
                        <User className="w-4 h-4" />
                        Dashboard
                      </Button>
                      <Button 
                        variant="outline"
                        onClick={() => {
                          signOut()
                          setIsMenuOpen(false)
                        }}
                        className="w-full flex items-center gap-2 bg-white text-primary hover:bg-primary hover:text-white mt-2"
                      >
                        <LogOut className="w-4 h-4" />
                        Sign Out
                      </Button>
                    </>
                  ) : (
                    <Button 
                      onClick={() => {
                        navigate('/auth')
                        setIsMenuOpen(false)
                      }}
                      className="w-full flex items-center gap-2 mt-2"
                    >
                      <User className="w-4 h-4" />
                      Login / Sign Up
                    </Button>
                  )}
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