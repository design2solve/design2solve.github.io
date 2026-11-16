import React from 'react';
import { Youtube, Linkedin, Code, Server, Database, Cloud } from 'lucide-react';

const App = () => {
  return (
    <div className="min-h-screen bg-slate-900 text-slate-200 font-sans selection:bg-cyan-500/30">
      
      {/* Navigation */}
      <nav className="border-b border-slate-800 bg-slate-900/80 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center text-white font-bold text-xl tracking-tighter">
              DS
            </div>
            <span className="text-xl font-bold text-white tracking-tight">Design<span className="text-cyan-400">To</span>Solve</span>
          </div>
          <div className="flex gap-6 text-sm font-medium">
            <a href="#about" className="hover:text-cyan-400 transition-colors">About</a>
            <a href="#topics" className="hover:text-cyan-400 transition-colors">Topics</a>
            <a href="#connect" className="hover:text-cyan-400 transition-colors">Connect</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="max-w-5xl mx-auto px-6 py-24 md:py-32 flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1 space-y-6">
          <div className="inline-block px-3 py-1 rounded-full bg-cyan-900/30 border border-cyan-500/30 text-cyan-400 text-xs font-semibold tracking-wider uppercase">
            System Design & Architecture
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight leading-tight">
            Real Problems.<br />
            Think. Design.<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              Solve.
            </span>
          </h1>
          <p className="text-lg md:text-xl text-slate-400 max-w-2xl leading-relaxed">
            Going beyond theoretical explanations. Explore real engineering problems, architectural trade-offs, and practical lessons learned from building enterprise software systems.
          </p>
          <div className="flex gap-4 pt-4">
            <a href="https://www.youtube.com/@DesignToSolve" target="_blank" rel="noreferrer" className="flex items-center gap-2 bg-white text-slate-900 px-6 py-3 rounded-lg font-bold hover:bg-slate-200 transition-colors">
              <Youtube size={20} />
              Subscribe on YouTube
            </a>
          </div>
        </div>
      </header>

      {/* Topics Section */}
      <section id="topics" className="border-t border-slate-800 bg-slate-850 py-24">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-white mb-12 text-center tracking-tight">Core Architectural Focus</h2>
          <div className="grid md:grid-cols-3 gap-6">
            
            <div className="p-6 rounded-2xl bg-slate-900 border border-slate-700 hover:border-cyan-500/50 transition-colors group">
              <Server className="text-cyan-400 mb-4 group-hover:scale-110 transition-transform" size={32} />
              <h3 className="text-xl font-bold text-white mb-2">Distributed Systems</h3>
              <p className="text-slate-400 text-sm leading-relaxed">Event-driven design, microservices, and high-performance serverless pipelines.</p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900 border border-slate-700 hover:border-cyan-500/50 transition-colors group">
              <Cloud className="text-cyan-400 mb-4 group-hover:scale-110 transition-transform" size={32} />
              <h3 className="text-xl font-bold text-white mb-2">Cloud-Native</h3>
              <p className="text-slate-400 text-sm leading-relaxed">AWS architecture, API Gateway, serverless partner integrations, and DynamoDB scaling.</p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900 border border-slate-700 hover:border-cyan-500/50 transition-colors group">
              <Database className="text-cyan-400 mb-4 group-hover:scale-110 transition-transform" size={32} />
              <h3 className="text-xl font-bold text-white mb-2">Data & Persistence</h3>
              <p className="text-slate-400 text-sm leading-relaxed">Differential storage architecture, ETL circuit breakers, and data migration pipelines.</p>
            </div>

          </div>
        </div>
      </section>

      {/* Footer / Connect */}
      <footer id="connect" className="border-t border-slate-800 py-12">
        <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <span className="text-xl font-bold text-white tracking-tight">Design<span className="text-cyan-400">To</span>Solve</span>
          </div>
          <p className="text-slate-500 text-sm text-center md:text-left">
            Understand the problem. Design the solution. Build it right.
          </p>
          <div className="flex gap-4">
            <a href="https://www.youtube.com/@DesignToSolve" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white transition-colors">
              <Youtube size={24} />
            </a>
            <a href="#" className="text-slate-400 hover:text-white transition-colors">
              <Linkedin size={24} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
