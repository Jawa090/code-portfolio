import { useState, useEffect } from "react";

export function TerminalTab() {
  const [currentLine, setCurrentLine] = useState(0);
  const [showCursor, setShowCursor] = useState(true);

  const terminalLines = [
    "$ npx jawad-portfolio",
    "",
    "🚀 Initializing developer profile...",
    "",
    "📋 PROFILE SUMMARY",
    "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━",
    "👨‍💻 Name: Jawad Abbas",
    "🎓 Education: BS Artificial Intelligence (IUB)",
    "💼 Role: Full Stack Developer & Gen AI Expert",
    "🌍 Location: Pakistan",
    "",
    "📧 CONTACT INFO",
    "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━",
    "📮 Email: jawadabbas680@gmail.com",
    "🐙 GitHub: https://github.com/Jawa090",
    "💼 LinkedIn: https://www.linkedin.com/in/-alijawad",
    "",
    "🛠️ TECH STACK",
    "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━",
    "Frontend: React.js, Next.js, TypeScript, TailwindCSS",
    "Backend: Node.js, FastAPI, Django, Python",
    "AI/ML: LangChain, OpenAI, LangGraph, Hugging Face",
    "Database: PostgreSQL, MySQL, Redis",
    "DevOps: Docker, GitHub Actions, CI/CD",
    "Cloud: Vercel, Netlify, Firebase, AWS",
    "",
    "🎯 CURRENT FOCUS",
    "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━",
    "🤖 Building AI-powered applications",
    "🏥 Healthcare AI solutions",
    "🔗 Workflow automation with N8N",
    "📱 Full-stack web applications",
    "",
    "✨ RECENT PROJECTS",
    "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━",
    "🏥 Medico+ - AI Medical Assistant",
    "🎬 AI Reels Generator - Content Creation",
    "💬 ChatGenie - Multimodal Chatbot",
    "📊 CRM System - Business Management",
    "",
    "📈 STATUS",
    "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━",
    "✅ Available for new opportunities",
    "✅ Open to collaborations",
    "✅ Ready to build amazing products",
    "",
    "$ Download my resume? (y/n)",
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentLine(prev => {
        if (prev < terminalLines.length - 1) {
          return prev + 1;
        }
        return prev;
      });
    }, 150);

    return () => clearInterval(timer);
  }, [terminalLines.length]);

  useEffect(() => {
    const cursorTimer = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);

    return () => clearInterval(cursorTimer);
  }, []);

  return (
    <div className="p-6 terminal-bg font-mono text-sm leading-relaxed min-h-screen">
      <div className="max-w-4xl">
        {terminalLines.slice(0, currentLine + 1).map((line, index) => (
          <div key={index} className="mb-1">
            {line.startsWith("$") ? (
              <div className="flex items-center">
                <span className="text-vscode-success mr-2">➜</span>
                <span className="text-terminal-cursor mr-2">~</span>
                <span className="text-terminal-text">{line}</span>
                {index === currentLine && showCursor && (
                  <span className="bg-terminal-cursor text-terminal-bg ml-1 w-2 h-5 inline-block animate-pulse">
                    _
                  </span>
                )}
              </div>
            ) : line.includes("━") ? (
              <div className="text-vscode-text-muted">{line}</div>
            ) : line.startsWith("📋") || line.startsWith("📧") || line.startsWith("🛠️") || line.startsWith("🎯") || line.startsWith("✨") || line.startsWith("📈") ? (
              <div className="text-vscode-accent font-semibold">{line}</div>
            ) : line.startsWith("🚀") || line.startsWith("✅") ? (
              <div className="text-vscode-success">{line}</div>
            ) : line.includes(":") && (line.startsWith("👨‍💻") || line.startsWith("🎓") || line.startsWith("💼") || line.startsWith("🌍") || line.startsWith("📮") || line.startsWith("🐙") || line.startsWith("💼")) ? (
              <div className="text-terminal-text">
                <span className="text-vscode-warning">{line.split(":")[0]}:</span>
                <span className="ml-1">{line.split(":").slice(1).join(":")}</span>
              </div>
            ) : line.startsWith("Frontend") || line.startsWith("Backend") || line.startsWith("AI/ML") || line.startsWith("Database") || line.startsWith("DevOps") || line.startsWith("Cloud") ? (
              <div className="text-terminal-text">
                <span className="text-syntax-function">{line.split(":")[0]}:</span>
                <span className="ml-1 text-syntax-string">{line.split(":").slice(1).join(":")}</span>
              </div>
            ) : (
              <div className="text-terminal-text">{line}</div>
            )}
          </div>
        ))}
        
        {currentLine === terminalLines.length - 1 && (
          <div className="mt-4 flex items-center space-x-4">
            <a
              href="/Jawad Resume.pdf"
              download
              className="px-4 py-2 bg-vscode-success text-vscode-bg rounded hover:bg-opacity-80 transition-colors"
            >
              Download CV
            </a>
            <button className="px-4 py-2 border border-vscode-border text-vscode-text rounded hover:bg-vscode-border transition-colors">
              View Projects
            </button>
          </div>
        )}
      </div>
    </div>
  );
}