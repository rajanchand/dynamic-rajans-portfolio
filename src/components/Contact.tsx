
import React, { useState } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import { cn } from "@/lib/utils";

interface ContactProps {
  className?: string;
}

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

const Contact: React.FC<ContactProps> = ({ className }) => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  
  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      content: "rajan.prakash@example.com",
      link: "mailto:rajan.prakash@example.com",
    },
    {
      icon: Phone,
      title: "Phone",
      content: "+91 98765 43210",
      link: "tel:+919876543210",
    },
    {
      icon: MapPin,
      title: "Location",
      content: "New Delhi, India",
      link: "https://maps.google.com/?q=New+Delhi,India",
    },
  ];
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    
    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({
        ...prev,
        [name]: undefined,
      }));
    }
  };
  
  const validateForm = () => {
    const newErrors: FormErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }
    
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }
    
    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required";
    }
    
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message is too short";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulating API call
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      console.log("Form submitted:", formData);
      setSubmitStatus("success");
      
      // Reset form
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
      
      // Reset form status after 5 seconds
      setTimeout(() => {
        setSubmitStatus("idle");
      }, 5000);
    } catch (error) {
      console.error("Form submission error:", error);
      setSubmitStatus("error");
      
      // Reset error status after 5 seconds
      setTimeout(() => {
        setSubmitStatus("idle");
      }, 5000);
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <section id="contact" className={cn("py-20 md:py-32", className)}>
      <div className="container mx-auto px-6 md:px-12">
        <div className="section-heading">
          <AnimatedSection animation="fade-in">
            <div className="section-subtitle">GET IN TOUCH</div>
            <h2 className="section-title">Contact Me</h2>
            <div className="section-line"></div>
          </AnimatedSection>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <AnimatedSection animation="slide-up" className="lg:col-span-1">
            <div className="glass-card p-6 md:p-8 h-full">
              <h3 className="text-xl font-medium mb-6">Let's talk about everything!</h3>
              <p className="text-muted-foreground mb-8">
                Feel free to reach out if you have any questions, project inquiries, or just want to say hello. I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
              </p>
              
              <div className="space-y-6">
                {contactInfo.map((info) => (
                  <a
                    key={info.title}
                    href={info.link}
                    target={info.icon !== Phone ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    className="flex items-start gap-4 hover:text-techaccent transition-colors"
                  >
                    <div className="p-3 bg-techaccent/10 rounded-xl text-techaccent mt-1">
                      <info.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-medium mb-1">{info.title}</h4>
                      <p className="text-muted-foreground">{info.content}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </AnimatedSection>
          
          <AnimatedSection animation="slide-up" delay={0.2} className="lg:col-span-2">
            <div className="glass-card p-6 md:p-8">
              <h3 className="text-xl font-medium mb-6">Send me a message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-1">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={cn(
                        "w-full px-4 py-3 rounded-lg border bg-white/50 outline-none focus:ring-2 transition-all",
                        errors.name 
                          ? "border-red-300 focus:ring-red-100"
                          : "border-gray-200 focus:border-techaccent focus:ring-techaccent/20"
                      )}
                      placeholder="Your name"
                    />
                    {errors.name && (
                      <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                        <AlertCircle size={12} />
                        {errors.name}
                      </p>
                    )}
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={cn(
                        "w-full px-4 py-3 rounded-lg border bg-white/50 outline-none focus:ring-2 transition-all",
                        errors.email 
                          ? "border-red-300 focus:ring-red-100"
                          : "border-gray-200 focus:border-techaccent focus:ring-techaccent/20"
                      )}
                      placeholder="Your email"
                    />
                    {errors.email && (
                      <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                        <AlertCircle size={12} />
                        {errors.email}
                      </p>
                    )}
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-1">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className={cn(
                      "w-full px-4 py-3 rounded-lg border bg-white/50 outline-none focus:ring-2 transition-all",
                      errors.subject 
                        ? "border-red-300 focus:ring-red-100"
                        : "border-gray-200 focus:border-techaccent focus:ring-techaccent/20"
                    )}
                    placeholder="Subject of your message"
                  />
                  {errors.subject && (
                    <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                      <AlertCircle size={12} />
                      {errors.subject}
                    </p>
                  )}
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className={cn(
                      "w-full px-4 py-3 rounded-lg border bg-white/50 outline-none focus:ring-2 transition-all resize-none",
                      errors.message 
                        ? "border-red-300 focus:ring-red-100"
                        : "border-gray-200 focus:border-techaccent focus:ring-techaccent/20"
                    )}
                    placeholder="Your message"
                  />
                  {errors.message && (
                    <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                      <AlertCircle size={12} />
                      {errors.message}
                    </p>
                  )}
                </div>
                
                <div className="flex items-center justify-between pt-2">
                  {submitStatus === "success" && (
                    <p className="text-green-600 flex items-center gap-1 text-sm">
                      <CheckCircle size={16} />
                      Message sent successfully!
                    </p>
                  )}
                  
                  {submitStatus === "error" && (
                    <p className="text-red-500 flex items-center gap-1 text-sm">
                      <AlertCircle size={16} />
                      Failed to send message. Please try again.
                    </p>
                  )}
                  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={cn(
                      "ml-auto inline-flex items-center gap-2 px-5 py-2.5 bg-techaccent text-white rounded-full font-medium transition-all shadow-md",
                      isSubmitting
                        ? "opacity-80 cursor-not-allowed"
                        : "hover:bg-techaccent/90 hover:shadow-lg button-animated"
                    )}
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={16} />
                        Send Message
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default Contact;
