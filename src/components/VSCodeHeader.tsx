import { Github, Download, ExternalLink, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "./ThemeToggle";
import { motion } from "framer-motion";

interface VSCodeHeaderProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
  onMenuClick: () => void;
  isMobile: boolean;
}

export function VSCodeHeader({ activeTab, onTabChange, onMenuClick, isMobile }: VSCodeHeaderProps) {
  const tabs = [
    { id: "about", label: "AboutMe.tsx", icon: "tsx" },
    { id: "projects", label: "Projects.js", icon: "js" },
    { id: "experience", label: "Experience.json", icon: "json" },
    { id: "skills", label: "Skills.yaml", icon: "yaml" },
    { id: "terminal", label: "Terminal.sh", icon: "sh" },
    { id: "contact", label: "Contact.tsx", icon: "tsx" },
  ];

  return (
    <div className="vscode-bg border-b vscode-border">
      {/* Top Bar */}
      <div className="flex items-center justify-between h-8 px-2 sm:px-4 text-sm bg-vscode-sidebar">
        <div className="flex items-center space-x-2 sm:space-x-4">
          {isMobile && (
            <Button
              variant="ghost"
              size="icon"
              className="h-6 w-6 hover:bg-vscode-border mr-2"
              onClick={onMenuClick}
            >
              <Menu className="h-3 w-3" />
            </Button>
          )}
          <span className="font-semibold text-vscode-text text-xs sm:text-sm">Jawad Abbas</span>
          <span className="text-vscode-text-muted text-xs sm:text-sm hidden sm:inline">Portfolio</span>
        </div>
        
        <div className="flex items-center space-x-1 sm:space-x-2">
          <ThemeToggle />
          <Button
            variant="ghost"
            size="icon"
            className="h-6 w-6 hover:bg-vscode-border"
            onClick={() => window.open("https://github.com/Jawa090", "_blank")}
          >
            <Github className="h-3 w-3" />
          </Button>
          <a
            href="/Jawad Resume.pdf"
            download
            className="inline-flex items-center h-6 px-1 sm:px-2 text-xs rounded hover:bg-vscode-border transition-colors bg-transparent border-0"
            style={{ textDecoration: "none" }}
          >
            <Download className="h-3 w-3 mr-1" />
            <span className="hidden sm:inline">Resume</span>
          </a>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex items-center h-9 bg-vscode-bg overflow-x-auto">
        {tabs.map((tab) => (
          <motion.button
            key={tab.id}
            onClick={() => onTabChange(tab.id)}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={`
              flex items-center px-2 sm:px-3 h-full text-xs sm:text-sm border-r vscode-border transition-colors whitespace-nowrap
              ${activeTab === tab.id 
                ? "vscode-tab-active" 
                : "vscode-tab hover:bg-vscode-tab-active"
              }
            `}
          >
            <div className={`w-2 h-2 rounded-sm mr-1 sm:mr-2 ${
              tab.icon === "tsx" ? "bg-blue-500" :
              tab.icon === "js" ? "bg-yellow-500" :
              tab.icon === "json" ? "bg-green-500" :
              tab.icon === "yaml" ? "bg-purple-500" :
              "bg-gray-500"
            }`} />
            <span className="hidden xs:inline">{tab.label}</span>
            <span className="xs:hidden">{tab.id}</span>
            {activeTab === tab.id && (
              <button className="ml-1 sm:ml-2 hover:bg-vscode-border rounded text-xs px-1">
                ×
              </button>
            )}
          </motion.button>
        ))}
      </div>
    </div>
  );
}
