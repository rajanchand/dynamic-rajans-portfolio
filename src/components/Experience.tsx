
import React from "react";
import { Briefcase, Calendar, MapPin } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import { cn } from "@/lib/utils";

interface ExperienceItem {
  position: string;
  company: string;
  location: string;
  period: string;
  description: string;
  highlights?: string[];
}

const experienceItems: ExperienceItem[] = [
  {
    position: "Customer Support Supervsior",
    company: "Dish Media Network Ltd",
    location: "Kathmandu, Nepal",
    period: "2022 - 2024",
    description: "Effective networking fosters trust, collaboration, and personal development, benefiting both individuals and organizations.",
    highlights: [
      "Designing, implementing, and providing standard support and escalation process, document, and protocol for technical issue handling & and resolution.",
      "Develop and maintain diagnostic and troubleshooting mechanisms for escalation issues according to a structured protocol.",
      "Active participation in technical project implementation within the ISP, involving the team in monitoring progress, and conducting essential pilot projects as per the ISP's needs."
    ]
  },
  {
    position: "Technical Supervisor",
    company: "Worldlink Communication Ltd",
    location: "Kathmandu, Nepal",
    period: "2019 - 2022",
    description: "Developed full-stack web applications using modern JavaScript frameworks and RESTful APIs.",
    highlights: [
      "Created responsive web interfaces for multiple high-traffic websites",
      "Integrated payment gateways that processed over $2M in transactions",
      "Implemented authentication systems with enhanced security protocols"
    ]
  },
  {
    position: "Junior Developer",
    company: "Dish Media Network",
    location: "Bangalore, India",
    period: "2017 - 2018",
    description: "Assisted in frontend development and learned industry best practices for modern web development.",
    highlights: [
      "Developed UI components for the company's media management platform",
      "Participated in code reviews and quality assurance processes",
      "Contributed to the development of mobile-friendly interfaces"
    ]
  }
];

interface ExperienceProps {
  className?: string;
}

const ExperienceCard: React.FC<{ experience: ExperienceItem; index: number }> = ({ experience, index }) => {
  return (
    <AnimatedSection 
      animation="slide-up" 
      delay={0.1 * index}
      className="glass-card transition-all duration-300 hover:shadow-lg dark:bg-gray-800/50 dark:border-gray-700"
    >
      <div className="flex flex-col lg:flex-row">
        <div className="p-6 lg:p-8 flex-1">
          <div className="flex flex-wrap items-center gap-3 mb-3">
            <div className="px-3 py-1 bg-techaccent/10 dark:bg-techaccent/20 rounded-full text-xs font-medium text-techaccent flex items-center gap-1.5">
              <Briefcase size={14} />
              {experience.position}
            </div>
            
            <div className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-xs font-medium text-gray-700 dark:text-gray-300 flex items-center gap-1.5">
              <Calendar size={14} />
              {experience.period}
            </div>
          </div>
          
          <div className="mb-4">
            <h3 className="text-xl font-medium mb-1 text-techdarker dark:text-white">{experience.company}</h3>
            <div className="flex items-center text-sm text-muted-foreground dark:text-gray-400">
              <MapPin size={14} className="mr-1" />
              {experience.location}
            </div>
          </div>
          
          <p className="text-muted-foreground dark:text-gray-300 mb-4">{experience.description}</p>
          
          {experience.highlights && experience.highlights.length > 0 && (
            <div>
              <h4 className="text-sm font-medium mb-2 text-techdarker dark:text-gray-200">Key Achievements</h4>
              <ul className="text-sm space-y-1 text-muted-foreground dark:text-gray-300">
                {experience.highlights.map((highlight, i) => (
                  <li key={i} className="flex items-start">
                    <span className="text-techaccent mr-2 mt-1">•</span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
        
        <div 
          className={cn(
            "hidden lg:block w-1 bg-gradient-to-b from-techaccent/50 to-techaccent/5 dark:from-techaccent/70 dark:to-techaccent/10",
            index === 0 ? "from-techaccent to-techaccent/50 dark:from-techaccent dark:to-techaccent/50" : ""
          )}
        ></div>
      </div>
    </AnimatedSection>
  );
};

const Experience: React.FC<ExperienceProps> = ({ className }) => {
  return (
    <section id="experience" className={cn("py-20 md:py-32 dark:bg-gray-900", className)}>
      <div className="container mx-auto px-6 md:px-12">
        <div className="section-heading">
          <AnimatedSection animation="fade-in">
            <div className="section-subtitle dark:text-gray-400">MY JOURNEY</div>
            <h2 className="section-title dark:text-white">Professional Experience</h2>
            <div className="section-line"></div>
          </AnimatedSection>
        </div>
        
        <div className="space-y-6 md:space-y-8">
          {experienceItems.map((experience, index) => (
            <ExperienceCard 
              key={experience.company} 
              experience={experience} 
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
