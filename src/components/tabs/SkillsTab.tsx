export function SkillsTab() {
  return (
    <div className="p-6 font-mono text-sm leading-relaxed max-w-4xl">
      <div className="text-syntax-comment mb-4"># Skills.yaml</div>
      
      <div className="space-y-4">
        <div className="space-y-2">
          <div className="text-syntax-keyword">frontend:</div>
          <div className="ml-4 space-y-1">
            <div>- <span className="syntax-string">React.js</span></div>
            <div>- <span className="syntax-string">Next.js</span></div>
            <div>- <span className="syntax-string">TypeScript</span></div>
            <div>- <span className="syntax-string">TailwindCSS</span></div>
            <div>- <span className="syntax-string">HTML5 & CSS3</span></div>
            <div>- <span className="syntax-string">JavaScript (ES6+)</span></div>
          </div>
        </div>

        <div className="space-y-2">
          <div className="text-syntax-keyword">backend:</div>
          <div className="ml-4 space-y-1">
            <div>- <span className="syntax-string">Node.js</span></div>
            <div>- <span className="syntax-string">FastAPI</span></div>
            <div>- <span className="syntax-string">Express.js</span></div>
            <div>- <span className="syntax-string">Python</span></div>
            <div>- <span className="syntax-string">RESTful APIs</span></div>
          </div>
        </div>

        <div className="space-y-2">
          <div className="text-syntax-keyword">ai_tools:</div>
          <div className="ml-4 space-y-1">
            <div>- <span className="syntax-string">LangChain</span></div>
            <div>- <span className="syntax-string">LangGraph</span></div>
            <div>- <span className="syntax-string">OpenAI API</span></div>
            <div>- <span className="syntax-string">Hugging Face</span></div>
            <div>- <span className="syntax-string">N8N Workflows</span></div>
            <div>- <span className="syntax-string">Pinecone Vector DB</span></div>
            <div>- <span className="syntax-string">RAG Systems</span></div>
          </div>
        </div>

        <div className="space-y-2">
          <div className="text-syntax-keyword">database:</div>
          <div className="ml-4 space-y-1">
            <div>- <span className="syntax-string">PostgreSQL</span></div>
            <div>- <span className="syntax-string">MongoDB</span></div>
            <div>- <span className="syntax-string">MySQL</span></div>
            <div>- <span className="syntax-string">Redis</span></div>
          </div>
        </div>

        <div className="space-y-2">
          <div className="text-syntax-keyword">cloud_and_hosting:</div>
          <div className="ml-4 space-y-1">
            <div>- <span className="syntax-string">Vercel</span></div>
            <div>- <span className="syntax-string">Netlify</span></div>
            <div>- <span className="syntax-string">Firebase</span></div>
            <div>- <span className="syntax-string">AWS (Basic)</span></div>
            <div>- <span className="syntax-string">Google Cloud</span></div>
          </div>
        </div>

        <div className="space-y-2">
          <div className="text-syntax-keyword">devops_and_tools:</div>
          <div className="ml-4 space-y-1">
            <div>- <span className="syntax-string">Docker</span></div>
            <div>- <span className="syntax-string">Git & GitHub</span></div>
            <div>- <span className="syntax-string">GitHub Actions</span></div>
            <div>- <span className="syntax-string">CI/CD Pipelines</span></div>
            <div>- <span className="syntax-string">VS Code</span></div>
            <div>- <span className="syntax-string">Postman</span></div>
          </div>
        </div>

        <div className="space-y-2">
          <div className="text-syntax-keyword">payment_integration:</div>
          <div className="ml-4 space-y-1">
            <div>- <span className="syntax-string">Stripe API</span></div>
            <div>- <span className="syntax-string">Payment Gateways</span></div>
            <div>- <span className="syntax-string">Subscription Management</span></div>
          </div>
        </div>

        <div className="space-y-2">
          <div className="text-syntax-keyword">soft_skills:</div>
          <div className="ml-4 space-y-1">
            <div>- <span className="syntax-string">Problem Solving</span></div>
            <div>- <span className="syntax-string">Team Collaboration</span></div>
            <div>- <span className="syntax-string">Project Management</span></div>
            <div>- <span className="syntax-string">Client Communication</span></div>
            <div>- <span className="syntax-string">Agile Methodologies</span></div>
          </div>
        </div>

        <div className="mt-6 text-syntax-comment">
          # Currently Learning
        </div>
        <div className="space-y-2">
          <div className="text-syntax-keyword">exploring:</div>
          <div className="ml-4 space-y-1">
            <div>- <span className="syntax-string">Advanced LLM Fine-tuning</span></div>
            <div>- <span className="syntax-string">Kubernetes</span></div>
            <div>- <span className="syntax-string">Microservices Architecture</span></div>
            <div>- <span className="syntax-string">WebAssembly</span></div>
          </div>
        </div>
      </div>
    </div>
  );
}