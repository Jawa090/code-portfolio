import { motion } from "framer-motion";

export function AboutTab() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="p-3 sm:p-6 font-mono text-xs sm:text-sm leading-relaxed max-w-4xl"
    >
      <div className="text-syntax-comment mb-4">// AboutMe.tsx</div>
      
      <div className="space-y-4">
        <div>
          <span className="syntax-comment">/*</span>
        </div>
        
        <div className="ml-2 sm:ml-4 space-y-2 text-vscode-text">
          <div>
            Hi, I'm <span className="syntax-string">Jawad Abbas</span> 👋
          </div>
          <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
            <span className="syntax-keyword">Full Stack Developer</span> 
            <span className="hidden sm:inline">|</span>
            <span className="syntax-keyword">Gen AI Expert</span> 
            <span className="hidden sm:inline">|</span>
            <span className="syntax-keyword">BS AI Graduate from IUB</span>
          </div>
          <div className="mt-4">
            Passionate about building real-world AI products and scalable web applications.
          </div>
          <div className="flex flex-wrap gap-1">
            Skilled in 
            <span className="syntax-function">React</span>, 
            <span className="syntax-function">FastAPI</span>, 
            <span className="syntax-function">LangChain</span>, 
            <span className="syntax-function">Node.js</span>, 
            <span className="syntax-function">PostgresSQL</span>, 
            <span className="syntax-function">Docker</span>, and 
            <span className="syntax-function">n8n</span>.
          </div>
        </div>
        
        <div>
          <span className="syntax-comment">*/</span>
        </div>

        <div className="mt-6 sm:mt-8 space-y-4">
          <div>
            <span className="syntax-keyword">interface</span> <span className="syntax-function">Developer</span> {`{`}
          </div>
          <div className="ml-2 sm:ml-4 space-y-2">
            <div className="flex flex-col sm:flex-row sm:items-center gap-1">
              <span className="text-vscode-text">name:</span> <span className="syntax-string">"Jawad Abbas"</span>;
            </div>
            <div className="flex flex-col sm:flex-row sm:items-center gap-1">
              <span className="text-vscode-text">location:</span> <span className="syntax-string">"Pakistan 🌍"</span>;
            </div>
            <div className="flex flex-col sm:flex-row sm:items-center gap-1">
              <span className="text-vscode-text">education:</span> <span className="syntax-string">"BS Artificial Intelligence"</span>;
            </div>
            <div className="flex flex-col sm:flex-row sm:items-center gap-1">
              <span className="text-vscode-text">university:</span> <span className="syntax-string">"The Islamia University of Bahawalpur"</span>;
            </div>
            <div className="flex flex-col sm:flex-row sm:items-center gap-1">
              <span className="text-vscode-text">specialization:</span> [<span className="syntax-string">"Full Stack Development"</span>, <span className="syntax-string">"Generative AI"</span>];
            </div>
            <div className="flex flex-col sm:flex-row sm:items-center gap-1">
              <span className="text-vscode-text">currentFocus:</span> <span className="syntax-string">"Building AI-powered applications"</span>;
            </div>
            <div className="flex flex-col sm:flex-row sm:items-center gap-1">
              <span className="text-vscode-text">contact:</span> {`{`}
            </div>
            <div className="ml-2 sm:ml-4 space-y-1">
              <div className="flex flex-col sm:flex-row sm:items-center gap-1">
                <span className="text-vscode-text">email:</span> <span className="syntax-string">"jawadabbas680@gmail.com"</span>,
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center gap-1">
                <span className="text-vscode-text">github:</span> <span className="syntax-string">"https://github.com/Jawa090"</span>,
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center gap-1">
                <span className="text-vscode-text">linkedin:</span> <span className="syntax-string">"https://www.linkedin.com/in/-alijawad/"</span>
              </div>
            </div>
            <div>
              {`}`};
            </div>
          </div>
          <div>
            {`}`}
          </div>
        </div>

        <div className="mt-6 sm:mt-8">
          <div>
            <span className="syntax-keyword">export default</span> <span className="syntax-function">Developer</span>;
          </div>
        </div>
      </div>
    </motion.div>
  );
}
