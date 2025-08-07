import { useState } from "react";
import { Send, Mail, Github, Linkedin, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export function ContactTab() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="p-6 font-mono text-sm max-w-4xl">
      <div className="text-syntax-comment mb-4">// Contact.tsx</div>
      
      <div className="space-y-6">
        <div>
          <span className="syntax-keyword">interface</span> <span className="syntax-function">ContactForm</span> {`{`}
        </div>
        
        <div className="ml-4 space-y-4">
          <div className="text-syntax-comment">
            // Let's connect and build something amazing together!
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-4 bg-vscode-sidebar p-6 rounded-lg border vscode-border">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-vscode-text mb-2">
                  <span className="text-syntax-keyword">name</span>: <span className="syntax-string">string</span>
                </label>
                <Input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  className="bg-vscode-bg border-vscode-border text-vscode-text"
                  required
                />
              </div>
              
              <div>
                <label className="block text-vscode-text mb-2">
                  <span className="text-syntax-keyword">email</span>: <span className="syntax-string">string</span>
                </label>
                <Input
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your.email@example.com"
                  className="bg-vscode-bg border-vscode-border text-vscode-text"
                  required
                />
              </div>
            </div>
            
            <div>
              <label className="block text-vscode-text mb-2">
                <span className="text-syntax-keyword">subject</span>: <span className="syntax-string">string</span>
              </label>
              <Input
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Project Discussion | Job Opportunity | Collaboration"
                className="bg-vscode-bg border-vscode-border text-vscode-text"
                required
              />
            </div>
            
            <div>
              <label className="block text-vscode-text mb-2">
                <span className="text-syntax-keyword">message</span>: <span className="syntax-string">string</span>
              </label>
              <Textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell me about your project, idea, or opportunity..."
                rows={5}
                className="bg-vscode-bg border-vscode-border text-vscode-text resize-none"
                required
              />
            </div>
            
            <Button
              type="submit"
              className="bg-vscode-accent hover:bg-vscode-accent/80 text-vscode-bg font-semibold"
            >
              <Send className="h-4 w-4 mr-2" />
              <span className="syntax-function">sendMessage()</span>
            </Button>
          </form>
        </div>
        
        <div>
          {`}`}
        </div>

        <div className="mt-8 space-y-4">
          <div>
            <span className="syntax-keyword">const</span> <span className="syntax-function">contactInfo</span> = {`{`}
          </div>
          
          <div className="ml-4 space-y-4">
            <div className="flex items-center space-x-4">
              <Mail className="h-5 w-5 text-vscode-accent" />
              <div>
                <span className="text-vscode-text">email:</span>{" "}
                <a 
                  href="mailto:jawad.abbas.dev@gmail.com" 
                  className="syntax-string hover:text-vscode-accent transition-colors"
                >
                  "jawadabbas680@gmail.com"
                </a>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <Github className="h-5 w-5 text-vscode-accent" />
              <div>
                <span className="text-vscode-text">github:</span>{" "}
                <a 
                  href="https://github.com/JawadAbbas" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="syntax-string hover:text-vscode-accent transition-colors"
                >
                  "https://github.com/Jawa090"
                </a>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <Linkedin className="h-5 w-5 text-vscode-accent" />
              <div>
                <span className="text-vscode-text">linkedin:</span>{" "}
                <a 
                  href="https://linkedin.com/in/jawad-abbas" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="syntax-string hover:text-vscode-accent transition-colors"
                >
                  "https://www.linkedin.com/in/-alijawad"
                </a>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <MapPin className="h-5 w-5 text-vscode-accent" />
              <div>
                <span className="text-vscode-text">location:</span>{" "}
                <span className="syntax-string">"Pakistan 🌍"</span>
              </div>
            </div>
            
            <div>
              <span className="text-vscode-text">availability:</span>{" "}
              <span className="syntax-string">"Open for opportunities"</span>
            </div>
            
            <div>
              <span className="text-vscode-text">responseTime:</span>{" "}
              <span className="syntax-string">"Within 24 hours"</span>
            </div>
          </div>
          
          <div>
            {`}`};
          </div>
        </div>

        <div className="mt-6">
          <div>
            <span className="syntax-keyword">export default</span> <span className="syntax-function">ContactForm</span>;
          </div>
        </div>
      </div>
    </div>
  );
}