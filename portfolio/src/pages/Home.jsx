import React from 'react';
import { Link } from 'react-router-dom';
import { PremiumCard, useReveal } from '../components/UI';
import { GithubLogo, LinkedinLogo, EnvelopeSimple } from "@phosphor-icons/react";
import aadhaarLogo from '../assets/aadhaar-logo.png';

export default function Home() {
  useReveal();

  return (
    <main className="relative z-10 w-full overflow-hidden">
      
      {/* Stacked Hero Section */}
      <section className="relative min-h-[90dvh] flex flex-col justify-center w-full max-w-[1400px] mx-auto px-6 md:px-12 pt-32 pb-20">
        
        <div className="reveal w-full max-w-5xl">
          <h1 className="text-[16vw] md:text-[10vw] leading-[0.8] font-medium tracking-tighter text-white mb-12">
            Rachit Mangawa
          </h1>
        </div>

        <div className="reveal reveal-delay-1 w-full max-w-6xl">
          <p className="text-xl md:text-3xl lg:text-4xl font-light text-white/60 leading-[1.4] tracking-tight">
            Software Developer building <span className="text-white">AI systems</span> and <span className="text-white">high-concurrency backends</span>. Writing TypeScript and Python to turn research into production.
          </p>
        </div>
        
        <div className="mt-16 reveal reveal-delay-2 flex flex-col md:flex-row gap-8 items-start md:items-center">
          <Link to="/projects" className="group inline-flex items-center justify-center gap-4 bg-white text-black hover:bg-white/90 rounded-full px-8 py-4 transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] active:scale-[0.98]">
            <span className="text-sm font-bold tracking-widest uppercase">Explore Work</span>
            <div className="w-8 h-8 rounded-full bg-black/10 flex items-center justify-center ml-2 group-hover:translate-x-1 transition-transform duration-700">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17L17 7"/><path d="M7 7h10v10"/></svg>
            </div>
          </Link>
          
          <div className="flex flex-col gap-2 md:ml-6 md:pl-12 md:border-l border-white/10 max-w-sm">
            <span className="text-white/30 text-xs uppercase tracking-[0.2em] font-bold">Core Stack</span>
            <span className="text-white/90 font-medium text-sm leading-relaxed">
              Python · TypeScript · FastAPI · React · Local LLMs
            </span>
          </div>
        </div>

      </section>

      {/* Experience Section */}
      <section className="mt-32 mb-32 w-full max-w-7xl mx-auto px-6 md:px-12">
        <h2 className="text-4xl md:text-5xl font-medium tracking-tight mb-16 reveal text-white">Experience</h2>

        <div className="ml-[24px] md:ml-[28px] border-l border-white/10 flex flex-col gap-24">
          
          {/* UIDAI */}
          <div className="relative reveal reveal-delay-1 pl-8 md:pl-10">
            {/* Logo perfectly centered on the border line */}
            <div className="absolute left-0 top-0 -translate-x-1/2 w-12 h-12 md:w-14 md:h-14 rounded-2xl overflow-hidden bg-white border-4 border-[#050505] flex items-center justify-center">
              <img src={aadhaarLogo} alt="UIDAI" className="object-contain w-full h-full p-2" />
            </div>
            
            <div className="mb-6">
              <h3 className="text-xl md:text-2xl font-medium text-white mb-3">Unique Identification Authority of India (UIDAI / Aadhaar)</h3>
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <h4 className="text-xl text-white/70 font-medium">Software Developer Intern</h4>
                <span className="text-xs tracking-[0.2em] uppercase text-white/40 font-bold flex-shrink-0 bg-white/5 px-4 py-2 rounded-full border border-white/10">Jun 2026 — Sep 2026</span>
              </div>
            </div>
            
            <div className="text-lg md:text-xl text-white/60 leading-[1.6] font-light max-w-4xl flex flex-col gap-4">
              <p>
                Engineered a 100% air-gapped, high-concurrency ETL pipeline replacing legacy workflows for over 1,000 users.
              </p>
              <p>
                Integrated local vision and language models (Ollama/gemma3) for strict boundary detection and JSON extraction, eliminating hallucinations across 9 regional languages.
              </p>
            </div>

            <div className="flex flex-wrap gap-3 mt-8">
              <span className="text-xs text-white/70 px-4 py-2 rounded-full bg-white/5 border border-white/10 tracking-[0.1em] font-medium">Python</span>
              <span className="text-xs text-white/70 px-4 py-2 rounded-full bg-white/5 border border-white/10 tracking-[0.1em] font-medium">FastAPI</span>
              <span className="text-xs text-white/70 px-4 py-2 rounded-full bg-white/5 border border-white/10 tracking-[0.1em] font-medium">Ollama</span>
              <span className="text-xs text-white/70 px-4 py-2 rounded-full bg-white/5 border border-white/10 tracking-[0.1em] font-medium">Plotly Dash</span>
              <span className="text-xs text-white/70 px-4 py-2 rounded-full bg-white/5 border border-white/10 tracking-[0.1em] font-medium">Pandas / NumPy</span>
              <span className="text-xs text-white/70 px-4 py-2 rounded-full bg-white/5 border border-white/10 tracking-[0.1em] font-medium">WebSockets</span>
              <span className="text-xs text-white/70 px-4 py-2 rounded-full bg-white/5 border border-white/10 tracking-[0.1em] font-medium">SQLite WAL</span>
            </div>
          </div>

        </div>
      </section>

      {/* Contact / Footer Details */}
      <footer className="w-full border-t border-white/5 py-20 bg-[#020202]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-white/40 text-sm">
            © {new Date().getFullYear()} Rachit Mangawa. All rights reserved.
          </div>
          
          <div className="flex flex-wrap items-center justify-center gap-8">
            <a href="https://github.com/IDKHowToCodeFR" target="_blank" rel="noreferrer" className="flex items-center gap-3 text-white/50 hover:text-white transition-colors group">
              <GithubLogo size={24} weight="regular" />
              <span className="text-sm font-medium tracking-wide">GitHub</span>
            </a>
            <a href="https://www.linkedin.com/in/rachitmangawa/" target="_blank" rel="noreferrer" className="flex items-center gap-3 text-white/50 hover:text-white transition-colors group">
              <LinkedinLogo size={24} weight="regular" />
              <span className="text-sm font-medium tracking-wide">LinkedIn</span>
            </a>
            <a href="mailto:rachitmangawa@example.com" className="flex items-center gap-3 text-white/50 hover:text-white transition-colors group">
              <EnvelopeSimple size={24} weight="regular" />
              <span className="text-sm font-medium tracking-wide">Email</span>
            </a>
          </div>
        </div>
      </footer>

    </main>
  );
}
