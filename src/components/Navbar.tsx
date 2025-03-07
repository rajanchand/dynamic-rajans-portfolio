
import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { title: "Home", href: "#home" },
  { title: "Skills", href: "#skills" },
  { title: "Education", href: "#education" },
  { title: "About", href: "#about" },
  { title: "Contact", href: "#contact" },
];

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  useEffect(() => {
    const handleScroll = () => {
      // Update scroll progress
      const totalScroll = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrollPosition = window.scrollY;
      const progress = (scrollPosition / totalScroll) * 100;
      setScrollProgress(progress);

      // Set navbar background opacity based on scroll
      setIsScrolled(window.scrollY > 10);

      // Update active section
      const sections = navLinks.map((link) => link.href.substring(1));
      
      for (const section of sections.reverse()) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 w-full z-50 transition-all duration-300">
      <div className="scroll-progress" style={{ width: `${scrollProgress}%` }} />
      
      <nav
        className={cn(
          "px-6 md:px-12 py-4 transition-all duration-300",
          isScrolled ? "bg-white/90 backdrop-blur-md shadow-subtle" : "bg-transparent"
        )}
      >
        <div className="container mx-auto flex justify-between items-center">
          <a 
            href="#home" 
            className="text-xl font-medium text-techdarker tracking-tight hover:text-techaccent transition-colors"
          >
            Rajan<span className="text-techaccent">.</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={cn(
                  "px-4 py-2 rounded-full text-sm font-medium transition-all duration-300",
                  activeSection === link.href.substring(1)
                    ? "text-techaccent"
                    : "text-techdarker hover:text-techaccent"
                )}
              >
                {link.title}
              </a>
            ))}
          </div>

          {/* Mobile Navigation Toggle */}
          <button
            className="p-2 md:hidden rounded-full hover:bg-secondary transition-colors"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        <div
          className={cn(
            "fixed inset-0 bg-white z-40 flex flex-col justify-center items-center transition-transform duration-300 ease-in-out md:hidden",
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          )}
        >
          <div className="flex flex-col space-y-6 items-center">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-xl font-medium hover:text-techaccent transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.title}
              </a>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
