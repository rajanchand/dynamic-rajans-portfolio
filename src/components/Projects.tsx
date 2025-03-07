
import React from "react";
import { ExternalLink, Github, Globe, Layers } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import { cn } from "@/lib/utils";

interface ProjectItem {
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
}

const projects: ProjectItem[] = [
  {
    title: "E-commerce Platform",
    description: "A fully functional e-commerce platform with payment processing, inventory management, and user profiles.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    tags: ["React", "Node.js", "MongoDB", "Stripe"],
    liveUrl: "https://ecommerce-demo.example.com",
    githubUrl: "https://github.com/rajanprakashchand/ecommerce-platform"
  },
  {
    title: "Task Management App",
    description: "A collaborative task management application with real-time updates, commenting, and file attachments.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    tags: ["Vue.js", "Firebase", "Tailwind CSS"],
    liveUrl: "https://taskmanager-demo.example.com",
    githubUrl: "https://github.com/rajanprakashchand/taskmanager"
  },
  {
    title: "AI Content Generator",
    description: "An application that uses AI to generate content for blogs, social media, and marketing materials.",
    image: "https://images.unsplash.com/photo-1677442135136-20525f492c9a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80",
    tags: ["Python", "Flask", "OpenAI API", "React"],
    liveUrl: "https://ai-content.example.com",
    githubUrl: "https://github.com/rajanprakashchand/ai-content-generator"
  },
];

interface ProjectsProps {
  className?: string;
}

const ProjectCard: React.FC<{ project: ProjectItem; index: number }> = ({ project, index }) => {
  return (
    <AnimatedSection 
      animation="slide-up" 
      delay={0.1 * index}
      className="group overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700"
    >
      <div className="relative overflow-hidden aspect-video">
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        
        <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 flex gap-3">
          {project.liveUrl && (
            <a 
              href={project.liveUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 bg-white rounded-full text-gray-800 hover:bg-gray-100 transition-colors"
              aria-label="View live site"
            >
              <Globe size={18} />
            </a>
          )}
          
          {project.githubUrl && (
            <a 
              href={project.githubUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 bg-white rounded-full text-gray-800 hover:bg-gray-100 transition-colors"
              aria-label="View source code"
            >
              <Github size={18} />
            </a>
          )}
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-medium mb-2 text-techdarker dark:text-white">{project.title}</h3>
        <p className="text-muted-foreground dark:text-gray-300 mb-4">{project.description}</p>
        
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span 
              key={tag} 
              className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-xs font-medium text-gray-700 dark:text-gray-300"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
};

const Projects: React.FC<ProjectsProps> = ({ className }) => {
  return (
    <section id="projects" className={cn("py-20 md:py-32 bg-techgray dark:bg-gray-900", className)}>
      <div className="container mx-auto px-6 md:px-12">
        <div className="section-heading">
          <AnimatedSection animation="fade-in">
            <div className="section-subtitle dark:text-gray-400">MY WORK</div>
            <h2 className="section-title dark:text-white">Featured Projects</h2>
            <div className="section-line"></div>
          </AnimatedSection>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <a 
            href="https://github.com/rajanprakashchand" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-white dark:bg-gray-800 text-techdarker dark:text-white rounded-full font-medium border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition-all shadow-sm"
          >
            <ExternalLink size={16} />
            View more projects on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
