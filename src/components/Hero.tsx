
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowDown, Download } from "lucide-react";
import { cn } from "@/lib/utils";
import SocialLinks from "./SocialLinks";

interface HeroProps {
  className?: string;
}

const Hero: React.FC<HeroProps> = ({ className }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    
    // Preload the profile image
    const img = new Image();
    img.src = "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952";
    img.onload = () => setImageLoaded(true);
  }, []);

  return (
    <section 
      id="home" 
      className={cn(
        "min-h-screen flex flex-col items-center justify-center relative overflow-hidden",
        "bg-gradient-radial bg-techgray dark:bg-gray-900 dark:bg-gradient-to-b dark:from-gray-900 dark:to-gray-800",
        className
      )}
    >
      <div className="absolute inset-0 bg-noise-pattern opacity-50 dark:opacity-20"></div>
      
      <div className="container px-6 md:px-12 py-20 md:py-32 flex flex-col md:flex-row items-center gap-12 md:gap-20 relative z-10">
        <div className="flex-1 text-center md:text-left order-2 md:order-1">
          <div 
            className={cn(
              "transition-opacity duration-700",
              isLoaded ? "opacity-100" : "opacity-0"
            )}
          >
            <div className="inline-block mb-3 px-3 py-1 bg-techaccent/10 dark:bg-techaccent/20 rounded-full text-xs font-medium text-techaccent tracking-wider">
              SOFTWARE ENGINEER
            </div>
            
            <h1 className="mb-4 text-techdarker dark:text-white">
              <span className="block mb-1">Hi I'm,</span>
              <span className="font-semibold bg-clip-text text-transparent bg-gradient-to-r from-techaccent to-blue-600">
                Rajan Prakash Chand
              </span>
            </h1>
            
            <p className="text-lg md:text-xl mb-8 max-w-2xl text-muted-foreground dark:text-gray-300">
              A software engineer driven by curiosity and desire to push the boundaries of what is possible with technology. 
              With over four years of experience working in the IT industry, I have gained a deep understanding of software 
              design and development principles, as well as expertise in various programming languages and frameworks.
            </p>
            
            <p className="text-lg md:text-xl mb-8 max-w-2xl text-muted-foreground dark:text-gray-300">
              I believe that diversity is essential to creating truly innovative solutions, and I am committed to bringing 
              my unique background and perspective to every project I work on.
            </p>
            
            <p className="text-lg md:text-xl mb-8 max-w-2xl text-muted-foreground dark:text-gray-300">
              Feel free to read, comment and share. 🙂 Enjoy reading 📖 !
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a 
                href="#contact" 
                className="px-6 py-3 bg-techaccent text-white rounded-full font-medium hover:bg-techaccent/90 transition-all shadow-md hover:shadow-lg button-animated"
              >
                Get in Touch
              </a>
              
              <a 
                href="/resume.pdf" 
                className="px-6 py-3 bg-white dark:bg-gray-800 text-techdarker dark:text-white rounded-full font-medium border border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 transition-all shadow-sm flex items-center justify-center gap-2"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Download size={18} />
                Resume
              </a>
            </div>
            
            <div className="mt-10">
              <p className="text-sm mb-3 text-muted-foreground dark:text-gray-400">Connect with me</p>
              <SocialLinks />
            </div>
          </div>
        </div>
        
        <div className="relative flex-1 order-1 md:order-2 flex justify-center md:justify-end">
          <div 
            className={cn(
              "w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden relative shadow-xl",
              !imageLoaded && "image-loading",
              "transition-all duration-700",
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            )}
          >
            <img 
              src="https://images.unsplash.com/photo-1581092795360-fd1ca04f0952"
              alt="Rajan Prakash Chand"
              className="w-full h-full object-cover"
              style={{ 
                opacity: imageLoaded ? 1 : 0,
                transition: "opacity 0.5s ease-in-out"
              }}
            />
            
            <div className="absolute inset-0 bg-gradient-to-tr from-techaccent/20 to-transparent mix-blend-overlay"></div>
          </div>
          
          <div className="absolute -z-10 w-full h-full rounded-full bg-gradient-to-r from-techaccent/20 to-blue-300/20 blur-3xl"></div>
        </div>
      </div>
      
      <a 
        href="#experience" 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-full p-3 shadow-md hover:shadow-lg transition-all hover:bg-white dark:hover:bg-gray-800 animate-bounce"
        aria-label="Scroll to Experience"
      >
        <ArrowDown size={20} className="text-techaccent" />
      </a>
    </section>
  );
};

export default Hero;
