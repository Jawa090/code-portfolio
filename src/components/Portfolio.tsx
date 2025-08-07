import { useState } from "react";
import { VSCodeHeader } from "./VSCodeHeader";
import { VSCodeSidebar } from "./VSCodeSidebar";
import { AboutTab } from "./tabs/AboutTab";
import { ProjectsTab } from "./tabs/ProjectsTab";
import { ExperienceTab } from "./tabs/ExperienceTab";
import { SkillsTab } from "./tabs/SkillsTab";
import { TerminalTab } from "./tabs/TerminalTab";
import { ContactTab } from "./tabs/ContactTab";
import { useIsMobile } from "@/hooks/use-mobile";
import { motion, AnimatePresence } from "framer-motion";

export function Portfolio() {
  const [activeTab, setActiveTab] = useState("about");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const isMobile = useIsMobile();

  const renderActiveTab = () => {
    switch (activeTab) {
      case "about":
        return <AboutTab />;
      case "projects":
        return <ProjectsTab />;
      case "experience":
        return <ExperienceTab />;
      case "skills":
        return <SkillsTab />;
      case "terminal":
        return <TerminalTab />;
      case "contact":
        return <ContactTab />;
      default:
        return <AboutTab />;
    }
  };

  return (
    <div className="h-screen flex flex-col vscode-bg">
      <VSCodeHeader 
        activeTab={activeTab} 
        onTabChange={setActiveTab}
        onMenuClick={() => setSidebarOpen(!sidebarOpen)}
        isMobile={isMobile}
      />
      
      <div className="flex flex-1 overflow-hidden">
        {/* Mobile overlay */}
        {isMobile && sidebarOpen && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
            onClick={() => setSidebarOpen(false)}
          />
        )}
        
        {/* Sidebar */}
        <div className={`
          ${isMobile 
            ? `fixed inset-y-0 left-0 z-50 transform transition-transform duration-300 ease-in-out ${
                sidebarOpen ? 'translate-x-0' : '-translate-x-full'
              }`
            : 'relative'
          }
          ${!isMobile ? 'block' : ''}
        `}>
          <VSCodeSidebar 
            activeTab={activeTab} 
            onTabChange={(tab) => {
              setActiveTab(tab);
              if (isMobile) setSidebarOpen(false);
            }}
            isMobile={isMobile}
          />
        </div>
        
        {/* Main content */}
        <main className={`
          flex-1 overflow-auto vscode-bg
          ${isMobile ? 'w-full' : ''}
        `}>
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="min-h-full"
            >
              {renderActiveTab()}
            </motion.div>
          </AnimatePresence>
        </main>
      </div>

      {/* Status Bar */}
      <div className="h-6 bg-vscode-accent flex items-center justify-between px-2 sm:px-4 text-xs text-vscode-bg">
        <div className="flex items-center space-x-2 sm:space-x-4 overflow-x-auto">
          <span className="whitespace-nowrap">◯ JavaScript</span>
          <span className="whitespace-nowrap">◯ React</span>
          <span className="whitespace-nowrap">◯ TypeScript</span>
        </div>
        <div className="flex items-center space-x-2 sm:space-x-4 overflow-x-auto">
          <span className="whitespace-nowrap">UTF-8</span>
          <span className="whitespace-nowrap">CRLF</span>
          <span className="whitespace-nowrap">Spaces: 2</span>
          <span className="whitespace-nowrap hidden sm:inline">🚀 Ready to build amazing things!</span>
        </div>
      </div>
    </div>
  );
}