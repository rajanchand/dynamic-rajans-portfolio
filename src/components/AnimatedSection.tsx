
import React, { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  threshold?: number;
  animation?: "fade-in" | "slide-up" | "slide-in-right";
}

const AnimatedSection: React.FC<AnimatedSectionProps> = ({
  children,
  className,
  delay = 0,
  threshold = 0.2,
  animation = "fade-in",
}) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold,
        rootMargin: "0px 0px -100px 0px",
      }
    );

    const section = sectionRef.current;
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, [threshold]);

  const animationClasses = {
    "fade-in": "opacity-0 animate-fade-in",
    "slide-up": "opacity-0 translate-y-8 animate-slide-up",
    "slide-in-right": "opacity-0 translate-x-8 animate-slide-in-right",
  };

  const animationStyle = {
    animationDelay: `${delay}s`,
    animationFillMode: "forwards" as const,
  };

  return (
    <div
      ref={sectionRef}
      className={cn(className, isVisible ? animationClasses[animation] : "opacity-0")}
      style={isVisible ? animationStyle : undefined}
    >
      {children}
    </div>
  );
};

export default AnimatedSection;
