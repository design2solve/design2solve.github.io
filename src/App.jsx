import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { Youtube, Linkedin, Code, Server, Database, Cloud, Mail, MessageSquareText } from 'lucide-react';

const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

const App = () => {
  const [formData, setFormData] = useState({
    email: '',
    note: '',
  });
  const [status, setStatus] = useState('');

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setStatus('');
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const trimmedEmail = formData.email.trim();
    const trimmedNote = formData.note.trim();

    if (!trimmedEmail || !trimmedNote) {
      setStatus('Please enter both your email and a note.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(trimmedEmail)) {
      setStatus('Please enter a valid email address.');
      return;
    }

    if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) {
      setStatus('Email service is not configured yet. Add VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID, and VITE_EMAILJS_PUBLIC_KEY in your environment variables.');
      return;
    }

    const noteText = trimmedNote.slice(0, 1000);

    try {
      setStatus('Sending...');

      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_email: trimmedEmail,
          subject: `New note from ${trimmedEmail}`,
          message: noteText,
          to_email: 'design2solve@gmail.com',
        },
        EMAILJS_PUBLIC_KEY
      );

      setStatus('Thank you! Your note has been sent.');
      setFormData({ email: '', note: '' });
    } catch (error) {
      console.error('EmailJS error:', error);
      setStatus('Something went wrong while sending the note. Please try again later.');
    }
  };

  return (
    <div className="min-h-screen bg-slate-900 text-slate-200 font-sans selection:bg-cyan-500/30">
      
      {/* Navigation */}
      <nav className="border-b border-slate-800 bg-slate-900/80 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <img 
              src="/logo_ds.png" 
              alt="DesignToSolve Logo" 
              className="w-10 h-10 rounded-full object-cover border border-slate-700"
            />
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
      <header className="max-w-4xl mx-auto px-6 py-24 md:py-32 flex flex-col items-center justify-center text-center">
        <div className="space-y-6 flex flex-col items-center">
          <div className="inline-block px-3 py-1 rounded-full bg-cyan-900/30 border border-cyan-500/30 text-cyan-400 text-xs font-semibold tracking-wider uppercase">
            System Design & Architecture
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight leading-tight">
            Real Problems.<br />
            Think. Design. Better Architecture. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              Solve. Practical Solutions.
            </span>
          </h1>
          <p className="text-lg md:text-xl text-slate-400 max-w-2xl leading-relaxed">
            Going beyond theoretical explanations. Explore real engineering problems, architectural trade-offs, and practical lessons learned from building enterprise software systems.
          </p>
          <div className="pt-4">
            <a href="https://www.youtube.com/@DesignToSolve" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 bg-white text-slate-900 px-6 py-3 rounded-lg font-bold hover:bg-slate-200 transition-colors">
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

      {/* Note Section */}
      <section id="connect" className="border-t border-slate-800 py-24">
        <div className="max-w-3xl mx-auto px-6">
          <div className="rounded-3xl border border-slate-700 bg-slate-900/80 p-8 shadow-2xl shadow-slate-950/30">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400">
                <MessageSquareText size={24} />
              </div>
              <div>
                <p className="text-sm uppercase tracking-[0.2em] text-cyan-400">Get in touch</p>
                <h2 className="text-3xl font-bold text-white">Leave a note</h2>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="email" className="flex items-center gap-2 text-sm font-medium text-slate-300 mb-2">
                  <Mail size={16} className="text-cyan-400" />
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white placeholder-slate-500 focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/20"
                />
              </div>

              <div>
                <label htmlFor="note" className="flex items-center gap-2 text-sm font-medium text-slate-300 mb-2">
                  <MessageSquareText size={16} className="text-cyan-400" />
                  Note
                </label>
                <textarea
                  id="note"
                  name="note"
                  value={formData.note}
                  onChange={handleChange}
                  placeholder="Write your note here..."
                  maxLength={1000}
                  rows={6}
                  className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white placeholder-slate-500 focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/20 resize-none"
                />
                <div className="mt-2 flex justify-between items-center text-xs text-slate-400">
                  <span>Maximum 1000 characters</span>
                  <span>{formData.note.length}/1000</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <button
                  type="submit"
                  className="inline-flex items-center justify-center rounded-xl bg-cyan-500 px-5 py-3 font-semibold text-slate-950 transition hover:bg-cyan-400"
                >
                  Send note
                </button>
                {status && (
                  <p className="text-sm text-cyan-300">{status}</p>
                )}
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Footer / Connect */}
      <footer className="border-t border-slate-800 py-12">
        <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <img 
              src="/logo_ds.png" 
              alt="DesignToSolve Logo" 
              className="w-10 h-10 rounded-full object-cover border border-slate-700"
            />
            <span className="text-xl font-bold text-white tracking-tight">Design<span className="text-cyan-400">To</span>Solve</span>
          </div>
          <p className="text-slate-500 text-sm text-center md:text-left">
            Understand the Problem. Design the Solution. Build it Right.
          </p>
          <div className="flex gap-4">
            <a href="https://www.youtube.com/@DesignToSolve" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white transition-colors">
              <Youtube size={24} />
            </a>
            <a href="https://www.linkedin.com/in/vaibhavjavadekar" className="text-slate-400 hover:text-white transition-colors">
              <Linkedin size={24} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
