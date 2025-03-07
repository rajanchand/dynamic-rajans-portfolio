
import React from "react";
import { GraduationCap, Calendar, Award, MapPin } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import { cn } from "@/lib/utils";

interface EducationItem {
  degree: string;
  institution: string;
  location: string;
  period: string;
  description: string;
  achievements?: string[];
}

const educationItems: EducationItem[] = [
  {
    degree: "Master of Computer Science",
    institution: "Stanford University",
    location: "Stanford, CA",
    period: "2018 - 2020",
    description: "Specialized in Artificial Intelligence and Machine Learning with focus on neural networks and computer vision applications.",
    achievements: [
      "Published research paper on efficient neural network architectures",
      "Teaching Assistant for Advanced Algorithms course",
      "GPA: 3.9/4.0"
    ]
  },
  {
    degree: "Bachelor of Computer Science",
    institution: "Massachusetts Institute of Technology",
    location: "Cambridge, MA",
    period: "2014 - 2018",
    description: "Major in Computer Science with minor in Mathematics. Focused on software engineering principles and distributed systems.",
    achievements: [
      "Dean's List for Academic Excellence (7 semesters)",
      "Won the Annual Coding Hackathon",
      "GPA: 3.8/4.0"
    ]
  },
  {
    degree: "Diploma in Full-Stack Development",
    institution: "Tech Academy",
    location: "San Francisco, CA",
    period: "2013 - 2014",
    description: "Intensive one-year program covering modern web development technologies including JavaScript frameworks, responsive design, and backend architecture.",
    achievements: [
      "Capstone project featured in Academy showcase",
      "Perfect attendance award"
    ]
  },
  {
    degree: "High School Diploma",
    institution: "Westlake High School",
    location: "Austin, TX",
    period: "2009 - 2013",
    description: "Advanced placement courses in Computer Science, Mathematics, and Physics.",
    achievements: [
      "Valedictorian",
      "President of Computer Science Club",
      "State Mathematics Competition Finalist"
    ]
  }
];

interface EducationProps {
  className?: string;
}

const EducationCard: React.FC<{ education: EducationItem; index: number }> = ({ education, index }) => {
  return (
    <AnimatedSection 
      animation="slide-up" 
      delay={0.1 * index}
      className="glass-card transition-all duration-300 hover:shadow-lg overflow-hidden"
    >
      <div className="flex flex-col lg:flex-row">
        <div className="p-6 lg:p-8 flex-1">
          <div className="flex flex-wrap items-center gap-3 mb-3">
            <div className="px-3 py-1 bg-techaccent/10 rounded-full text-xs font-medium text-techaccent flex items-center gap-1.5">
              <GraduationCap size={14} />
              {education.degree}
            </div>
            
            <div className="px-3 py-1 bg-gray-100 rounded-full text-xs font-medium text-gray-700 flex items-center gap-1.5">
              <Calendar size={14} />
              {education.period}
            </div>
          </div>
          
          <div className="mb-4">
            <h3 className="text-xl font-medium mb-1">{education.institution}</h3>
            <div className="flex items-center text-sm text-muted-foreground">
              <MapPin size={14} className="mr-1" />
              {education.location}
            </div>
          </div>
          
          <p className="text-muted-foreground mb-4">{education.description}</p>
          
          {education.achievements && education.achievements.length > 0 && (
            <div>
              <h4 className="text-sm font-medium mb-2 flex items-center gap-1.5">
                <Award size={16} className="text-techaccent" />
                Achievements
              </h4>
              <ul className="text-sm space-y-1 text-muted-foreground">
                {education.achievements.map((achievement, i) => (
                  <li key={i} className="flex items-start">
                    <span className="text-techaccent mr-2 mt-1">•</span>
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
        
        <div 
          className={cn(
            "hidden lg:block w-1 bg-gradient-to-b from-techaccent/50 to-techaccent/5",
            index === 0 ? "from-techaccent to-techaccent/50" : ""
          )}
        ></div>
      </div>
    </AnimatedSection>
  );
};

const Education: React.FC<EducationProps> = ({ className }) => {
  return (
    <section id="education" className={cn("py-20 md:py-32", className)}>
      <div className="container mx-auto px-6 md:px-12">
        <div className="section-heading">
          <AnimatedSection animation="fade-in">
            <div className="section-subtitle">MY JOURNEY</div>
            <h2 className="section-title">Education & Qualifications</h2>
            <div className="section-line"></div>
          </AnimatedSection>
        </div>
        
        <div className="space-y-6 md:space-y-8">
          {educationItems.map((education, index) => (
            <EducationCard 
              key={education.institution} 
              education={education} 
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
