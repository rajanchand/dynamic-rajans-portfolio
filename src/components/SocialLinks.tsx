
import React from "react";
import { Github, Instagram, Linkedin, Facebook } from "lucide-react";
import { cn } from "@/lib/utils";

interface SocialLinksProps {
  className?: string;
  iconSize?: number;
  vertical?: boolean;
}

const socialLinks = [
  {
    name: "GitHub",
    url: "https://github.com/rajanprakashchand",
    icon: Github,
    hoverClass: "hover:text-gray-800 dark:hover:text-white",
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/rajanprakashchand",
    icon: Linkedin,
    hoverClass: "hover:text-blue-700 dark:hover:text-blue-400",
  },
  {
    name: "Instagram",
    url: "https://instagram.com/rajanprakashchand",
    icon: Instagram,
    hoverClass: "hover:text-pink-600 dark:hover:text-pink-400",
  },
  {
    name: "Facebook",
    url: "https://facebook.com/rajanprakashchand",
    icon: Facebook,
    hoverClass: "hover:text-blue-600 dark:hover:text-blue-400",
  },
];

const SocialLinks: React.FC<SocialLinksProps> = ({
  className,
  iconSize = 20,
  vertical = false,
}) => {
  return (
    <div
      className={cn(
        "flex items-center gap-4",
        vertical ? "flex-col" : "flex-row",
        className
      )}
    >
      {socialLinks.map((link) => (
        <a
          key={link.name}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(
            "transition-all duration-300 text-muted-foreground dark:text-gray-400",
            link.hoverClass,
            "hover:scale-110"
          )}
          aria-label={link.name}
        >
          <link.icon size={iconSize} strokeWidth={1.5} />
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;
