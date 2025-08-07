import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ProjectsTab() {
  const projects = [
    {
      name: "Medico+",
      tech: ["FastAPI", "React", "LangChain", "PostgreSQL"],
      description: "AI-powered medical assistant with appointment reminders, symptom analysis, and diagnosis support. Features real-time chat with medical AI and prescription management.",
      github: "https://github.com/Jawa090/medicoapp",
      demo: "https://medicoapp-nu.vercel.app/"
    },
    {
      name: "FreeTool AI",
      tech: ["LLMs", "Python", "Text-to-Video", "OpenAI"],
      description: "AI-powered tools for PDFs, images, videos, and summarization.",
      github: "https://github.com/Jawa090/freetoolai",
      demo: "https://freetoolai.com/"
    },
    {
      name: "Paradise Estimating",
      tech: ["React", "Node.js", "Database", "Ui Components"],
      description: "I’ve developed a modern web platform that provides fast, reliable, and accurate estimating services for various industries.",
      github: "https://github.com/Jawa090/paradisestimatingwebsite",
      demo: "http://paradiseestimating.com/"
    },
    {
      name: "Estimating Hub",
      tech: ["React", "Node.js", "Database", "Ui Components"],
      description: " A centralized platform offering comprehensive estimating solutions, tools, and resources to streamline project cost planning and management.",
      github: "https://github.com/Jawa090/estimatehub",
      demo: "http://estimatinghub.com/"
    },
    {
      name: "BitWords Inc. - AI/ML Solutions",
      tech: ["React", "Node.js", "Database", "Ui Components"],
      description: "Advanced workflow automation platform integrating multiple services with AI-powered decision making and custom triggers.",
      github: "https://github.com/Jawa090/bitwords",
      demo: "https://bitwords.com/"
    },
    {
      name: "BitWords Inc. - AI/ML Solutions",
      tech: ["React", "Node.js", "Database", "Ui Components"],
      description: "Innovative AI and Machine Learning solutions for digital transformation, empowering businesses to automate processes, enhance decision-making, and unlock new growth opportunities through cutting-edge technology.",
      github: "https://github.com/Jawa090/bitwords",
      demo: "https://bitwords.com/"
    },
    {
      name: "Skimming.ai",
      tech: ["React", "Node.js", "Database", "Ui Components", "AI/ML", "openAi"],
      description: "Advanced workflow automation platform integrating multiple services with AI-powered decision making and custom triggers.",
      github: "https://github.com/Jawa090/skimmingai",
      demo: "https://www.skimming.ai/"
    },
    {
      name: "Decexperts",
      tech: ["React", "Node.js", "Database", "Ui Components"],
      description: "Developed and marketed Decexperts.com – a professional platform offering specialized estimating services tailored for the construction and renovation industry",
      github: "https://github.com/Jawa090/DexExpert.com",
      demo: "https://decexperts.com/"
    },
    {
      name: "3re Motors",
      tech: ["React", "Node.js", "Database", "Ui Components"],
      description: "Created and launched 3ReMotors.com — a comprehensive car import marketplace offering secure escrow services to ensure safe and seamless vehicle purchases.",
      github: "https://github.com/Jawa090/3re-motors",
      demo: "https://3remotors.com/"
    },  
    {
      name: "Remote Seat",
      tech: ["React", "Node.js", "Database", "Ui Components"],
      description: "Developed and launched Remote‑Seat — a dynamic marketing platform showcasing a wide range of company services and solutions to drive client engagement and growth.",
      github: "https://github.com/Jawa090/remoteseat",
      demo: "http://remoteseat.com/"
    },
    {
      name: "Contractor List",
      tech: ["React", "Node.js", "Database", "UI Components", "Coming Soon"],
      description: "A comprehensive platform for managing and connecting with contractors. Features contractor profiles, project matching, and service management.",
      github: "#",
      demo: "#",
      comingSoon: true
    },

  ];

  return (
    <div className="p-6 font-mono text-sm max-w-6xl">
      <div className="text-syntax-comment mb-4">// Projects.js</div>
      
      <div className="space-y-4">
        <div>
          <span className="syntax-keyword">const</span> <span className="syntax-function">projects</span> = [
        </div>
        
        <div className="ml-4 space-y-6">
          {projects.map((project, index) => (
            <div key={index} className="space-y-2">
              <div>
                {`{`}
              </div>
              <div className="ml-4 space-y-2">
                <div>
                  <span className="text-vscode-text">name:</span> <span className="syntax-string">"{project.name}"</span>,
                </div>
                <div>
                  <span className="text-vscode-text">tech:</span> [
                  {project.tech.map((tech, techIndex) => (
                    <span key={techIndex}>
                      <span className="syntax-string">"{tech}"</span>
                      {techIndex < project.tech.length - 1 && ", "}
                    </span>
                  ))}
                  ],
                </div>
                <div>
                  <span className="text-vscode-text">description:</span> <span className="syntax-string">"{project.description}"</span>,
                </div>
                <div className="flex items-center space-x-4 mt-2">
                  <span className="text-vscode-text">actions:</span>
                  {project.comingSoon ? (
                    <div className="flex items-center space-x-2">
                      <span className="px-2 py-1 text-xs bg-yellow-500/20 text-yellow-400 border border-yellow-500/30 rounded">
                        🚧 Coming Soon
                      </span>
                    </div>
                  ) : (
                    <div className="flex space-x-2">
                      <Button
                        variant="outline"
                        size="sm"
                        className="h-6 px-2 text-xs border-vscode-border hover:bg-vscode-border"
                        onClick={() => window.open(project.github, "_blank")}
                      >
                        <Github className="h-3 w-3 mr-1" />
                        Code
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        className="h-6 px-2 text-xs border-vscode-border hover:bg-vscode-border"
                        onClick={() => window.open(project.demo, "_blank")}
                      >
                        <ExternalLink className="h-3 w-3 mr-1" />
                        Demo
                      </Button>
                    </div>
                  )}
                </div>
              </div>
              <div>
                {`}`}{index < projects.length - 1 && ","}
              </div>
            </div>
          ))}
        </div>
        
        <div>
          ];
        </div>

        <div className="mt-6">
          <div>
            <span className="syntax-keyword">export default</span> <span className="syntax-function">projects</span>;
          </div>
        </div>
      </div>
    </div>
  );
}