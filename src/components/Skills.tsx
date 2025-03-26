
import React from "react";
import { Headphones, Network, Server, Users, ShieldCheck, MessageCircle, Mail } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import { cn } from "@/lib/utils";

interface Skill {
  name: string;
  icon: React.FC<{ className?: string }>;
  description: string;
  proficiency: number;
}

const skills: Skill[] = [
  {
    name: "Customer Support",
    icon: ({ className }) => <Headphones className={className} />,
    description: "Providing exceptional customer assistance and resolving inquiries efficiently",
    proficiency: 92,
  },
  {
    name: "Technical Analysis",
    icon: ({ className }) => <ShieldCheck className={className} />,
    description: "Analyzing technical requirements and providing optimal solutions",
    proficiency: 88,
  },
  {
    name: "Technical Support",
    icon: ({ className }) => <Server className={className} />,
    description: "Troubleshooting and resolving complex technical issues",
    proficiency: 90,
  },
  {
    name: "Customer Handling",
    icon: ({ className }) => <Users className={className} />,
    description: "Managing client relationships and ensuring high satisfaction levels",
    proficiency: 94,
  },
  {
    name: "DevOps",
    icon: ({ className }) => <Network className={className} />,
    description: "Implementing CI/CD pipelines and managing infrastructure",
    proficiency: 82,
  },
  {
    name: "Networking",
    icon: ({ className }) => <Server className={className} />,
    description: "Designing and maintaining network infrastructure and security",
    proficiency: 85,
  },
  {
    name: "ISP Management",
    icon: ({ className }) => <MessageCircle className={className} />,
    description: "Providing internet service solutions and managing connectivity",
    proficiency: 88,
  },
];

interface SkillProps {
  className?: string;
}

const SkillCard: React.FC<{ skill: Skill; index: number }> = ({ skill, index }) => {
  return (
    <AnimatedSection 
      animation="slide-up" 
      delay={0.1 * index}
      className="glass-card p-6 flex flex-col h-full transition-all duration-300 hover:shadow-lg dark:bg-gray-800/50 dark:border-gray-700"
    >
      <div className="flex justify-between items-start mb-4">
        <div className="p-3 bg-techaccent/10 dark:bg-techaccent/20 rounded-xl text-techaccent">
          <skill.icon className="w-6 h-6" />
        </div>
        <div className="text-xs font-semibold text-techaccent">
          {skill.proficiency}%
        </div>
      </div>
      <h3 className="text-lg font-medium mb-2 text-techdarker dark:text-white">{skill.name}</h3>
      <p className="text-sm text-muted-foreground dark:text-gray-300 mb-4">{skill.description}</p>
      
      <div className="mt-auto">
        <div className="h-1.5 w-full bg-gray-100 dark:bg-gray-700 rounded-full overflow-hidden">
          <div 
            className="h-full bg-techaccent rounded-full"
            style={{ width: `${skill.proficiency}%` }}
          />
        </div>
      </div>
    </AnimatedSection>
  );
};

const Skills: React.FC<SkillProps> = ({ className }) => {
  return (
    <section id="skills" className={cn("py-20 md:py-32 bg-techgray dark:bg-gray-800", className)}>
      <div className="container mx-auto px-6 md:px-12">
        <div className="section-heading">
          <AnimatedSection animation="fade-in">
            <div className="section-subtitle dark:text-gray-400">WHAT I DO</div>
            <h2 className="section-title dark:text-white">My Expertise</h2>
            <div className="section-line"></div>
          </AnimatedSection>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {skills.map((skill, index) => (
            <SkillCard key={skill.name} skill={skill} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
