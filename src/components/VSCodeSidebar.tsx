import { 
  FolderOpen, 
  FileText, 
  Code, 
  Terminal, 
  Github,
  User,
  Briefcase,
  Wrench,
  Mail,
  ChevronDown,
  ChevronRight,
  X
} from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface VSCodeSidebarProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
  isMobile: boolean;
}

export function VSCodeSidebar({ activeTab, onTabChange, isMobile }: VSCodeSidebarProps) {
  const [isExplorerOpen, setIsExplorerOpen] = useState(true);

  const files = [
    { id: "about", name: "about-me.tsx", icon: User, color: "text-blue-500" },
    { id: "projects", name: "projects.js", icon: Code, color: "text-yellow-500" },
    { id: "experience", name: "experience.json", icon: Briefcase, color: "text-green-500" },
    { id: "skills", name: "skills.yaml", icon: Wrench, color: "text-purple-500" },
    { id: "contact", name: "contact.tsx", icon: Mail, color: "text-blue-500" },
  ];

  const sidebarIcons = [
    { icon: FolderOpen, label: "Explorer", active: true },
    { icon: Github, label: "Source Control" },
    { icon: Terminal, label: "Terminal" },
  ];

  return (
    <div className={`flex h-full ${isMobile ? 'w-64' : ''}`}>
      {/* Icon Bar - Hidden on mobile */}
      {!isMobile && (
        <div className="w-12 bg-vscode-sidebar border-r vscode-border flex flex-col items-center py-2 space-y-1">
          {sidebarIcons.map((item, index) => (
            <button
              key={index}
              className={`w-8 h-8 flex items-center justify-center rounded transition-colors ${
                item.active 
                  ? "bg-vscode-accent text-vscode-text" 
                  : "text-vscode-text-muted hover:text-vscode-text"
              }`}
              title={item.label}
            >
              <item.icon className="h-4 w-4" />
            </button>
          ))}
        </div>
      )}

      {/* Explorer Panel */}
      <div className={`bg-vscode-sidebar border-r vscode-border ${isMobile ? 'w-full' : 'w-64'}`}>
        {/* Mobile header */}
        {isMobile && (
          <div className="flex items-center justify-between p-3 border-b vscode-border">
            <span className="text-sm font-semibold text-vscode-text">Explorer</span>
            <button
              onClick={() => onTabChange(activeTab)}
              className="p-1 hover:bg-vscode-border rounded"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        )}
        
        <div className="p-2">
          {!isMobile && (
            <div 
              className="flex items-center justify-between text-xs font-semibold text-vscode-text-muted uppercase tracking-wide mb-2 cursor-pointer hover:text-vscode-text"
              onClick={() => setIsExplorerOpen(!isExplorerOpen)}
            >
              <span>Explorer</span>
              {isExplorerOpen ? 
                <ChevronDown className="h-3 w-3" /> : 
                <ChevronRight className="h-3 w-3" />
              }
            </div>
          )}

          {(isExplorerOpen || isMobile) && (
            <div className="space-y-1">
              {!isMobile && (
                <div className="flex items-center text-xs text-vscode-text-muted mb-2">
                  <FolderOpen className="h-3 w-3 mr-1" />
                  jawad-portfolio/
                </div>
              )}
              
              <div className={`space-y-1 ${!isMobile ? 'ml-3' : ''}`}>
                {files.map((file) => (
                  <motion.button
                    key={file.id}
                    onClick={() => onTabChange(file.id)}
                    onFocus={() => {
                      // Add subtle focus indicator
                    }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`
                      flex items-center w-full text-left text-sm px-2 py-1 rounded transition-all duration-200
                      ${activeTab === file.id 
                        ? "bg-vscode-accent text-vscode-text shadow-sm" 
                        : "text-vscode-text-muted hover:text-vscode-text hover:bg-vscode-border focus:bg-vscode-border focus:text-vscode-text"
                      }
                    `}
                  >
                    <file.icon className={`h-3 w-3 mr-2 ${file.color}`} />
                    {file.name}
                  </motion.button>
                ))}
                
                <button
                  onClick={() => onTabChange("terminal")}
                  className={`
                    flex items-center w-full text-left text-sm px-2 py-1 rounded transition-colors
                    ${activeTab === "terminal" 
                      ? "bg-vscode-accent text-vscode-text" 
                      : "text-vscode-text-muted hover:text-vscode-text hover:bg-vscode-border"
                    }
                  `}
                >
                  <Terminal className="h-3 w-3 mr-2 text-gray-500" />
                  terminal.sh
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
