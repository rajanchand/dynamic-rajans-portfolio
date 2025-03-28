
import React from "react";
import { ArrowUp } from "lucide-react";
import { cn } from "@/lib/utils";
import SocialLinks from "./SocialLinks";

interface FooterProps {
  className?: string;
}

const Footer: React.FC<FooterProps> = ({ className }) => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const footerLinks = {
    "About Me": [
      { name: "Biography", url: "#about" },
      { name: "Skills", url: "#skills" },
      { name: "Education", url: "#education" },
      { name: "Experience", url: "#experience" },
    ],
    "Useful Links": [
      { name: "Projects", url: "#projects" },
      { name: "Resume", url: "/resume.pdf" },
      { name: "Contact", url: "#contact" },
      { name: "Blog", url: "https://blog.example.com" },
    ],
    "Membership": [
      { name: "RAN", url: "https://www.ran.org.np/" },
      { name: "CSIT", url: "https://csitan.org.np/" },
      { name: "Kaggle", url: "https://www.kaggle.com/" },
      { name: "GitHub", url: "https://github.com/rajanprakashchand" },
    ]
  };

  return (
    <footer className={cn("py-16 bg-techdarker dark:bg-gray-900 text-white", className)}>
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <h2 className="text-2xl font-medium mb-4">Rajan<span className="text-techaccent">.</span></h2>
            <p className="mb-6 text-gray-300 dark:text-gray-400">
              A Network engineer driven by curiosity and desire to push the boundaries of what is possible with technology.
            </p>
            <SocialLinks iconSize={22} className="mb-5" />
            <div className="text-sm text-gray-400 dark:text-gray-500">
              Glasgow, UK
            </div>
          </div>
          
          {Object.entries(footerLinks).map(([category, links], index) => (
            <div key={category}>
              <h3 className="text-lg font-medium mb-4">{category}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.name}>
                    <a 
                      href={link.url} 
                      className="text-gray-300 dark:text-gray-400 hover:text-techaccent dark:hover:text-techaccent transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <p className="mb-1">
              &copy; {new Date().getFullYear()} Rajan Prakash Chand. All rights reserved.
            </p>
            <p className="text-sm text-gray-400 dark:text-gray-500">
              Designed and built with precision and care
            </p>
          </div>
          
          <button
            onClick={scrollToTop}
            className="p-3 rounded-full bg-techaccent/10 hover:bg-techaccent/20 text-techaccent transition-all flex items-center justify-center"
            aria-label="Back to top"
          >
            <ArrowUp size={20} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
