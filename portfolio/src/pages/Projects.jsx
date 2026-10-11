import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { PremiumCard, MagneticButton } from '../components/UI';
import useReveal from '../hooks/useReveal';
import { PORTFOLIO_CONTENT } from '../content';

export default function Projects() {
  useReveal();
  const location = useLocation();
  const data = PORTFOLIO_CONTENT;

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
      }
    }
  }, [location]);

  const projects = data.projects;
  return (
    <main className="relative z-10 w-full overflow-hidden">
      {/* Hero section */}
      <section className="relative pt-36 md:pt-48 pb-20 md:pb-28 px-6 md:px-12 w-full max-w-7xl mx-auto">
        <h1 className="reveal font-serif text-[14vw] md:text-[10vw] lg:text-[9.5vw] leading-[0.96] font-normal tracking-tight text-white mb-10 md:mb-12 pb-2 text-balance">
          Architecture
          <span className="block mt-1.5 md:mt-2.5 italic">
            & Code<span className="text-white/40 not-italic">.</span>
          </span>
        </h1>

        <div className="reveal reveal-delay-1 text-lg md:text-xl lg:text-[1.35rem] font-light text-white/70 leading-[1.7] md:leading-[1.75] tracking-tight max-w-5xl lg:max-w-6xl text-pretty space-y-4 md:space-y-6">
          <p>
            Developing <span className="text-white font-medium underline decoration-white/20 underline-offset-4 decoration-1 hover:decoration-white/50 transition-colors">zero-dependency C++ code generators</span>, real-time streaming architectures, and <span className="text-white font-medium underline decoration-white/20 underline-offset-4 decoration-1 hover:decoration-white/50 transition-colors">vector semantic classifiers</span>.
          </p>
          <p>
            From compiling scikit-learn models for bare-metal execution on <span className="text-white font-medium underline decoration-white/20 underline-offset-4 decoration-1 hover:decoration-white/50 transition-colors">ESP32 microcontrollers</span> to fixing numerical gradient singularities deep inside <span className="text-white font-medium underline decoration-white/20 underline-offset-4 decoration-1 hover:decoration-white/50 transition-colors">TensorFlow Core</span> autodiff engines.
          </p>
        </div>
      </section>

      {/* Projects Container */}
      <section className="w-full max-w-7xl mx-auto px-6 md:px-12 pb-40">
        <div className="flex flex-col gap-32 md:gap-48">
          {projects.map((project, idx) => {
            const isEven = idx % 2 === 1; // 0-indexed, so idx 1 is the 2nd project (even)
            return (
            <div key={project.id} id={project.id} className="w-full reveal">
              <PremiumCard className="w-full">
                <div className={`flex flex-col ${isEven ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 lg:gap-24 items-center`}>
                  
                  {/* Left/Text Column */}
                  <div className="w-full lg:w-1/2 flex flex-col items-start">
                    <span className="text-emerald-400 font-mono text-xs uppercase tracking-[0.2em] mb-4 block">Project 0{idx + 1}</span>
                    <h2 className="font-serif text-4xl md:text-5xl font-medium tracking-tight text-white mb-6">{project.title}</h2>
                    
                    <div className="flex flex-wrap gap-2 mb-8">
                      {project.tech.map(tag => (
                        <span key={tag} className="px-3 py-1.5 text-xs tracking-widest uppercase bg-white/5 border border-white/10 rounded-full text-white/60 font-medium">
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <div className="space-y-4 text-base md:text-lg text-white/60 font-light leading-relaxed mb-10">
                      {project.deepDive.map((paragraph, pIdx) => (
                        <p key={pIdx}>{paragraph}</p>
                      ))}
                    </div>
                    
                    <div className="flex flex-wrap gap-4">
                      <MagneticButton href={project.repo}>View Source Code</MagneticButton>
                      {project.live && (
                        <MagneticButton href={project.live}>View Live</MagneticButton>
                      )}
                    </div>
                  </div>

                  {/* Right/Visual Column */}
                  <div className="w-full lg:w-1/2 flex items-center justify-center">
                    {project.visualContent}
                  </div>

                </div>
              </PremiumCard>
            </div>
          )})}
        </div>
      </section>
    </main>
  );
}
