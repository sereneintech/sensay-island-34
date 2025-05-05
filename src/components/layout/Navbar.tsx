
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Charter", path: "/charter" },
  { name: "News", path: "/news" },
  { name: "Contact", path: "/contact" }
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  return (
    <header 
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        scrolled ? "bg-white/80 shadow backdrop-blur-md" : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <NavLink to="/" className="flex items-center">
            <span className="font-dm-serif font-normal text-2xl text-sensay-navy">
              Sensay <span className="text-sensay-teal">Island</span>
            </span>
          </NavLink>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map(link => (
              <NavLink 
                key={link.path} 
                to={link.path} 
                className={({ isActive }) => cn(
                  "text-sm font-medium transition-colors hover:text-sensay-teal",
                  isActive ? "text-sensay-teal" : "text-sensay-navy"
                )}
              >
                {link.name}
              </NavLink>
            ))}
            <Button variant="default" className="bg-sensay-teal hover:bg-sensay-teal/90" asChild>
              <NavLink to="/residency">Apply Now</NavLink>
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2" 
            onClick={toggleMenu}
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? (
              <X className="h-6 w-6 text-sensay-navy" />
            ) : (
              <Menu className="h-6 w-6 text-sensay-navy" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <nav className="md:hidden mt-4 pb-4 space-y-4 animate-fade-in">
            {navLinks.map(link => (
              <NavLink 
                key={link.path} 
                to={link.path} 
                className={({ isActive }) => cn(
                  "block py-2 text-base font-medium",
                  isActive ? "text-sensay-teal" : "text-sensay-navy"
                )}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </NavLink>
            ))}
            <div className="pt-2">
              <Button variant="default" className="w-full bg-sensay-teal hover:bg-sensay-teal/90" asChild>
                <NavLink to="/residency" onClick={() => setIsOpen(false)}>Apply Now</NavLink>
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}

export default Navbar;
