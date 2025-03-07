
import React, { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
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
    <div className="min-h-screen bg-background dark:bg-gray-900 antialiased">
      <Navbar />
      
      <main>
        <Hero />
        <Experience />
        <Skills />
        <Education />
        <Projects />
        <About />
        <Contact />
      </main>
      
      <Footer />
      
      <div className="fixed bottom-6 right-6 flex flex-col gap-3 z-40">
        <Search />
        
        <button
          onClick={scrollToTop}
          className={cn(
            "p-2 rounded-full bg-white dark:bg-gray-800 shadow-md hover:shadow-lg transition-all flex items-center justify-center text-techdarker dark:text-white",
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
