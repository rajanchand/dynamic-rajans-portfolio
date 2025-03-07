
import React, { useState, useEffect, useRef } from "react";
import { Search as SearchIcon, X, Sparkles, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

interface SearchProps {
  className?: string;
}

const demoSearchResults = [
  {
    title: "Frontend Development Skills",
    content: "React, Vue.js, Angular, JavaScript, TypeScript, HTML5, CSS3, and Responsive Design.",
    type: "skills",
  },
  {
    title: "Master's Degree - Stanford University",
    content: "Master of Computer Science with specialization in AI and Machine Learning.",
    type: "education",
  },
  {
    title: "Senior Software Engineer Experience",
    content: "Leading development team for enterprise SaaS products at Tech Innovations Inc.",
    type: "about",
  },
  {
    title: "Contact Information",
    content: "Email: rajan.prakash@example.com, Phone: +91 98765 43210",
    type: "contact",
  },
];

const Search: React.FC<SearchProps> = ({ className }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const [results, setResults] = useState<typeof demoSearchResults>([]);
  const searchRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  
  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);
  
  useEffect(() => {
    const handler = setTimeout(() => {
      if (query.trim().length > 0) {
        setIsSearching(true);
        
        // Simulate AI search processing
        setTimeout(() => {
          // Filter demo results based on query
          const filtered = demoSearchResults.filter(
            result => 
              result.title.toLowerCase().includes(query.toLowerCase()) || 
              result.content.toLowerCase().includes(query.toLowerCase())
          );
          
          setResults(filtered);
          setIsSearching(false);
        }, 800);
      } else {
        setResults([]);
      }
    }, 300);
    
    return () => {
      clearTimeout(handler);
    };
  }, [query]);
  
  const toggleSearch = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      setQuery("");
      setResults([]);
    }
  };
  
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") {
      setIsOpen(false);
    }
  };
  
  const typeColors = {
    skills: "bg-blue-500",
    education: "bg-green-500",
    about: "bg-purple-500",
    contact: "bg-orange-500",
  };
  
  return (
    <div className={cn("relative z-50", className)} ref={searchRef}>
      <button
        onClick={toggleSearch}
        className="p-2 rounded-full bg-white shadow-md hover:shadow-lg transition-all flex items-center justify-center text-techdarker"
        aria-label="Search"
      >
        <SearchIcon size={18} />
      </button>
      
      <div
        className={cn(
          "fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity",
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
        aria-hidden="true"
      />
      
      <div
        className={cn(
          "fixed inset-x-0 top-0 mx-auto p-4 max-w-2xl w-full transition-all duration-300 ease-in-out",
          isOpen ? "translate-y-16 opacity-100" : "-translate-y-10 opacity-0 pointer-events-none"
        )}
      >
        <div className="bg-white rounded-xl shadow-xl overflow-hidden">
          <div className="flex items-center px-4 py-3 border-b">
            <div className="flex items-center gap-1.5 text-techaccent">
              <Sparkles size={16} />
              <span className="text-sm font-medium">AI Search</span>
            </div>
            
            <div className="relative flex-1 mx-3">
              <input
                ref={inputRef}
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Search for skills, education, contact info..."
                className="w-full py-2 px-3 bg-transparent outline-none text-techdarker placeholder:text-gray-400"
              />
            </div>
            
            <button
              onClick={toggleSearch}
              className="p-2 rounded-full hover:bg-gray-100 transition-colors"
              aria-label="Close search"
            >
              <X size={18} className="text-gray-500" />
            </button>
          </div>
          
          <div className="max-h-80 overflow-y-auto">
            {isSearching ? (
              <div className="flex items-center justify-center py-12">
                <Loader2 size={24} className="animate-spin text-techaccent" />
                <span className="ml-3 text-muted-foreground">Searching...</span>
              </div>
            ) : results.length > 0 ? (
              <div className="p-2">
                {results.map((result, index) => (
                  <a
                    key={index}
                    href={`#${result.type}`}
                    onClick={() => setIsOpen(false)}
                    className="block p-3 hover:bg-gray-50 rounded-lg transition-colors"
                  >
                    <div className="flex items-start space-x-3">
                      <div 
                        className={cn(
                          "w-2 h-2 rounded-full mt-2",
                          typeColors[result.type as keyof typeof typeColors]
                        )}
                      />
                      <div>
                        <h4 className="text-sm font-medium">{result.title}</h4>
                        <p className="text-xs text-muted-foreground mt-1">{result.content}</p>
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            ) : query.trim() !== "" ? (
              <div className="text-center py-12 text-muted-foreground">
                No results found for "{query}"
              </div>
            ) : (
              <div className="p-4 text-center text-muted-foreground">
                <SearchIcon size={24} className="mx-auto mb-2 opacity-40" />
                <p>Type to search for information about Rajan</p>
                <p className="text-xs mt-1">Try "skills", "education", or "contact"</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
