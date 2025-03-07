
import React, { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Search from "@/components/Search";
import { cn } from "@/lib/utils";

const Index: React.FC = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 500);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="min-h-screen bg-background antialiased">
      <Navbar />
      
      <main>
        <Hero />
        <Skills />
        <Education />
        <About />
        <Contact />
      </main>
      
      <footer className="py-8 bg-techdarker text-white">
        <div className="container mx-auto px-6 md:px-12 text-center">
          <p className="mb-2">
            &copy; {new Date().getFullYear()} Rajan Prakash Chand. All rights reserved.
          </p>
          <p className="text-sm text-gray-400">
            Designed and built with precision and care
          </p>
        </div>
      </footer>
      
      <div className="fixed bottom-6 right-6 flex flex-col gap-3 z-40">
        <Search />
        
        <button
          onClick={scrollToTop}
          className={cn(
            "p-2 rounded-full bg-white shadow-md hover:shadow-lg transition-all flex items-center justify-center text-techdarker",
            showBackToTop ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"
          )}
          aria-label="Back to top"
        >
          <ArrowUp size={18} />
        </button>
      </div>
    </div>
  );
};

export default Index;
