
import React from "react";
import { User, Download, CheckCircle, Briefcase, Code } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import { cn } from "@/lib/utils";

interface AboutProps {
  className?: string;
}

const About: React.FC<AboutProps> = ({ className }) => {
  const statistics = [
    { value: "5+", label: "Years of Experience" },
    { value: "50+", label: "Projects Completed" },
    { value: "20+", label: "Happy Clients" },
    { value: "3", label: "Awards" },
  ];

  const personalInfo = [
    { label: "Name", value: "Rajan Prakash Chand" },
    { label: "Age", value: "28 Years" },
    { label: "Nationality", value: "Indian" },
    { label: "Languages", value: "English, Hindi" },
    { label: "Address", value: "New Delhi, India" },
    { label: "Freelance", value: "Available" },
  ];

  const experiences = [
    {
      position: "Senior Software Engineer",
      company: "Tech Innovations Inc.",
      period: "2020 - Present",
      description: "Leading development team for enterprise SaaS products, implementing CI/CD pipelines, and mentoring junior developers."
    },
    {
      position: "Software Developer",
      company: "Digital Solutions Ltd.",
      period: "2018 - 2020",
      description: "Developed full-stack web applications using modern JavaScript frameworks and RESTful APIs."
    },
    {
      position: "Web Developer Intern",
      company: "WebCraft Studios",
      period: "2017 - 2018",
      description: "Assisted in frontend development tasks and learned industry best practices for modern web development."
    },
  ];

  return (
    <section id="about" className={cn("py-20 md:py-32 bg-techgray", className)}>
      <div className="container mx-auto px-6 md:px-12">
        <div className="section-heading">
          <AnimatedSection animation="fade-in">
            <div className="section-subtitle">GET TO KNOW ME</div>
            <h2 className="section-title">About Me</h2>
            <div className="section-line"></div>
          </AnimatedSection>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <AnimatedSection animation="slide-up" className="space-y-6">
            <div className="glass-card p-6 md:p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-techaccent/10 rounded-xl text-techaccent">
                  <User className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-medium">Personal Info</h3>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8 mb-6">
                {personalInfo.map((info) => (
                  <div key={info.label}>
                    <div className="text-sm text-muted-foreground">{info.label}:</div>
                    <div className="font-medium">{info.value}</div>
                  </div>
                ))}
              </div>
              
              <a
                href="#"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-techaccent text-white rounded-full font-medium hover:bg-techaccent/90 transition-all shadow-md hover:shadow-lg button-animated"
              >
                <Download size={16} />
                Download CV
              </a>
            </div>
            
            <div className="glass-card p-6 md:p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-techaccent/10 rounded-xl text-techaccent">
                  <Code className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-medium">My Skills</h3>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {[
                  "JavaScript", "TypeScript", "React", "Node.js", "Python", 
                  "Java", "SQL", "MongoDB", "AWS", "Docker", "Git", "CI/CD"
                ].map((skill) => (
                  <div 
                    key={skill}
                    className="px-3 py-2 bg-white rounded-md border border-gray-100 text-sm font-medium flex items-center gap-1.5"
                  >
                    <CheckCircle size={14} className="text-techaccent" />
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
          
          <AnimatedSection animation="slide-up" delay={0.2}>
            <div className="glass-card p-6 md:p-8 h-full">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-techaccent/10 rounded-xl text-techaccent">
                  <Briefcase className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-medium">Experience</h3>
              </div>
              
              <div className="space-y-8">
                {experiences.map((exp, index) => (
                  <div key={index} className="relative pl-6 border-l-2 border-gray-200">
                    <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-techaccent"></div>
                    <div className="mb-1">
                      <h4 className="text-lg font-medium">{exp.position}</h4>
                      <div className="flex flex-wrap items-center gap-2 text-sm">
                        <span className="text-techaccent font-medium">{exp.company}</span>
                        <span className="text-muted-foreground">|</span>
                        <span className="text-muted-foreground">{exp.period}</span>
                      </div>
                    </div>
                    <p className="text-muted-foreground mt-2">{exp.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-12">
          {statistics.map((stat, index) => (
            <AnimatedSection 
              key={stat.label} 
              animation="slide-up" 
              delay={0.1 * index}
              className="glass-card p-6 text-center"
            >
              <div className="text-3xl md:text-4xl font-semibold text-techaccent mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
