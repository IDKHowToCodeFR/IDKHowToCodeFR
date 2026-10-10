import React from 'react';
import { useReveal, PremiumCard } from '../components/UI';
import aadhaarLogo from '../assets/aadhaar-logo.png';
import { PORTFOLIO_CONTENT } from '../content';

const logos = {
  'aadhaar-logo.png': aadhaarLogo
};

export default function Experience() {
  useReveal();
  const data = PORTFOLIO_CONTENT;

  return (
    <main className="relative z-10 w-full overflow-hidden min-h-screen">
      {/* Intro section */}
      <section className="relative pt-40 pb-20 px-6 md:px-12 w-full max-w-7xl mx-auto">
        <div className="reveal">
          <h1 className="font-serif text-5xl md:text-8xl font-medium tracking-tighter text-white mb-8">
            Experience <br/><span className="text-white/50">& Impact</span>
          </h1>
          <p className="text-lg md:text-xl text-white/60 max-w-2xl font-light leading-relaxed">
            What I built, what it replaced, and what shipped.
          </p>
        </div>
      </section>

      <section className="w-full max-w-7xl mx-auto px-6 md:px-12 mb-32">
        <div className="flex flex-col gap-24 border-l border-white/10 ml-6 md:ml-7">
        
        {data.internships.map((internship, idx) => (
        <div key={idx} className="relative pl-8 md:pl-12 reveal reveal-delay-1 mb-24">
          <div className="absolute left-0 top-0 -translate-x-1/2 w-12 h-12 md:w-16 md:h-16 rounded-2xl overflow-hidden bg-white border-4 border-[#050505] flex items-center justify-center">
            <img src={logos[internship.logo]} alt={internship.company} className="object-contain w-full h-full p-2 md:p-3" />
          </div>
          
          <div className="mb-6 pt-1 md:pt-2">
            <h2 className="font-serif text-2xl md:text-3xl font-medium text-white mb-3">{internship.company}</h2>
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <h3 className="text-xl text-white/70 font-medium">{internship.role}</h3>
              <span className="text-xs tracking-[0.2em] uppercase text-white/50 font-bold shrink-0 bg-white/5 px-4 py-2 rounded-full border border-white/10">{internship.date}</span>
            </div>
          </div>

          <div className="flex flex-wrap gap-3 mb-10">
            {internship.tags.map(tag => (
              <span key={tag} className="text-xs text-white/70 px-4 py-2 rounded-full bg-white/5 border border-white/10 tracking-widest font-medium">{tag}</span>
            ))}
          </div>
          
          <div className="flex flex-col gap-12">
            {internship.projects.map((proj, pIdx) => (
            <div key={pIdx} className="bg-white/5 border border-white/10 rounded-3xl p-6 md:p-8 hover:bg-white/10 transition-colors">
              <h4 className="text-lg font-medium text-white mb-6 flex items-center gap-4">
                <span className={`w-2 h-2 rounded-full bg-${proj.color}`}></span>
                {proj.title}
              </h4>
              <ul className="flex flex-col gap-4 text-white/60 font-light leading-relaxed">
                {proj.points.map((point, idx2) => (
                <li key={idx2} className="flex gap-4">
                  <span className="text-white/30 mt-1">0{idx2 + 1}</span>
                  <p>{point}</p>
                </li>
                ))}
              </ul>
            </div>
            ))}
          </div>
        </div>
        ))}

        </div>
      </section>
    </main>
  );
}
