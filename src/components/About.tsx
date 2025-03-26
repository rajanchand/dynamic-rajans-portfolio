
import React from "react";
import { User, Download, CheckCircle, Briefcase, Code, Calendar, Mail, Phone } from "lucide-react";
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
    { label: "Nationality", value: "Nepali" },
    { label: "Languages", value: "English, Hindi,Nepali" },
    { label: "Address", value: "Glasgow, Scotland" },
  ];

  const contactInfo = [
    { label: "Email", value: "rajan.prakash@example.com", icon: Mail, href: "mailto:rajanchand48@gmail.com" },
    { label: "Phone", value: "+91 98765 43210", icon: Phone, href: "tel:+44 07570731478" },
  ];

  return (
    <section id="about" className={cn("py-20 md:py-32 bg-techgray dark:bg-gray-800", className)}>
      <div className="container mx-auto px-6 md:px-12">
        <div className="section-heading">
          <AnimatedSection animation="fade-in">
            <div className="section-subtitle dark:text-gray-400">GET TO KNOW ME</div>
            <h2 className="section-title dark:text-white">About Me</h2>
            <div className="section-line"></div>
          </AnimatedSection>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <AnimatedSection animation="slide-up" className="space-y-6">
            <div className="glass-card p-6 md:p-8 dark:bg-gray-800/50 dark:border-gray-700">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-techaccent/10 dark:bg-techaccent/20 rounded-xl text-techaccent">
                  <User className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-medium text-techdarker dark:text-white">Personal Info</h3>
              </div>
              
              <p className="text-muted-foreground dark:text-gray-300 mb-6">
                A passionate software engineer with over 5 years of experience in creating elegant solutions to complex problems.
                I specialize in full-stack development, with a focus on building scalable web applications that deliver exceptional
                user experiences.
              </p>
              
              <p className="text-muted-foreground dark:text-gray-300 mb-6">
                I am a strong advocate for clean code principles and enjoy working in collaborative environments where innovation is valued.
                My technical expertise spans from frontend frameworks like React and Vue.js to backend technologies like Node.js and Python.
              </p>
              
              <p className="text-muted-foreground dark:text-gray-300 mb-6">
                When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, or mentoring
                aspiring developers. I believe in continuous learning and staying updated with the latest industry trends.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8 mb-6">
                {personalInfo.map((info) => (
                  <div key={info.label}>
                    <div className="text-sm text-muted-foreground dark:text-gray-400">{info.label}:</div>
                    <div className="font-medium text-techdarker dark:text-white">{info.value}</div>
                  </div>
                ))}
              </div>
              
              <div className="space-y-4 mb-6">
                {contactInfo.map((info) => (
                  <a
                    key={info.label}
                    href={info.href}
                    className="flex items-center gap-3 text-muted-foreground dark:text-gray-300 hover:text-techaccent dark:hover:text-techaccent transition-colors"
                  >
                    <div className="p-2 bg-techaccent/10 dark:bg-techaccent/20 rounded-lg text-techaccent">
                      <info.icon size={18} />
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground dark:text-gray-400">{info.label}</div>
                      <div className="font-medium text-techdarker dark:text-white">{info.value}</div>
                    </div>
                  </a>
                ))}
              </div>
              
              <a
                href="/resume.pdf"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-techaccent text-white rounded-full font-medium hover:bg-techaccent/90 transition-all shadow-md hover:shadow-lg button-animated"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Download size={16} />
                Download CV
              </a>
            </div>
            
            <div className="glass-card p-6 md:p-8 dark:bg-gray-800/50 dark:border-gray-700">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-techaccent/10 dark:bg-techaccent/20 rounded-xl text-techaccent">
                  <Code className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-medium text-techdarker dark:text-white">My Skills</h3>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {[
                  "JavaScript", "TypeScript", "React", "Node.js", "Python", 
                  "Java", "SQL", "MongoDB", "AWS", "Docker", "Git", "CI/CD"
                ].map((skill) => (
                  <div 
                    key={skill}
                    className="px-3 py-2 bg-white dark:bg-gray-700 rounded-md border border-gray-100 dark:border-gray-600 text-sm font-medium flex items-center gap-1.5 text-techdarker dark:text-white"
                  >
                    <CheckCircle size={14} className="text-techaccent" />
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
          
         <AnimatedSection animation="slide-up" delay={0.2}>
            <div className="glass-card p-6 md:p-8 h-full dark:bg-gray-800/50 dark:border-gray-700">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-techaccent/10 dark:bg-techaccent/20 rounded-xl text-techaccent">
                  <Calendar className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-medium text-techdarker dark:text-white">My Journey</h3>
              </div>
              
              <div className="space-y-8 relative">
                <div className="absolute left-3 top-0 bottom-0 w-0.5 bg-gray-200 dark:bg-gray-600"></div>
                
                {[
                  {
                    year: "2023",
                    title: "Senior Software Engineer",
                    desc: "Led a team of developers in creating enterprise-level applications using modern technologies."
                  },
                  {
                    year: "2020",
                    title: "Software Developer",
                    desc: "Joined a leading tech firm and contributed to multiple high-impact projects across various industries."
                  },
                  {
                    year: "2018",
                    title: "Graduated with Master's Degree",
                    desc: "Completed my Master's in Computer Science with honors and published a research paper."
                  },
                  {
                    year: "2016",
                    title: "First Software Internship",
                    desc: "Secured an internship at a startup and gained hands-on experience in real-world software development."
                  },
                  {
                    year: "2014",
                    title: "Started Bachelor's Degree",
                    desc: "Began my formal education in Computer Science, focusing on algorithmic thinking and programming fundamentals."
                  },
                ].map((item, index) => (
                  <div key={index} className="relative pl-10">
                    <div className="absolute left-0 w-6 h-6 rounded-full bg-techaccent dark:bg-techaccent/80 shadow-md transform -translate-x-1/2"></div>
                    <div className="text-xs font-bold text-techaccent mb-1">{item.year}</div>
                    <h4 className="text-lg font-medium mb-1 text-techdarker dark:text-white">{item.title}</h4>
                    <p className="text-muted-foreground dark:text-gray-300">{item.desc}</p>
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
              className="glass-card p-6 text-center dark:bg-gray-800/50 dark:border-gray-700"
            >
              <div className="text-3xl md:text-4xl font-semibold text-techaccent mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground dark:text-gray-400">{stat.label}</div>
            </AnimatedSection> 
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
