import React from 'react';
import { GithubLogo, LinkedinLogo, ArrowUpRight } from "@phosphor-icons/react";
import { usePortfolioData } from '../data/ContentAdapter';

export default function Footer() {
  const data = usePortfolioData();
  return (
    <footer className="w-full border-t border-white/5 py-32 bg-[#020202]">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col gap-24">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-12 reveal">
          <div>
            <h2 className="font-serif text-5xl md:text-7xl font-medium tracking-tight text-white mb-4">Let's build.</h2>
            <p className="text-xl text-white/40 font-light max-w-xl lg:max-w-2xl">
              Open to new opportunities. Reach out about work or collaboration.
            </p>
          </div>

          <a href={`mailto:${data.personal.email}`} className="group flex items-center justify-between w-full md:w-auto md:min-w-90 border-b border-white/20 pb-4 text-white hover:border-white transition-colors">
            <span className="text-xl font-light">Get in touch</span>
            <ArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform opacity-50 group-hover:opacity-100" weight="bold" size={24} />
          </a>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 pt-8 border-t border-white/10">
          <div className="text-white/40 text-xs font-bold tracking-widest uppercase">
            © {new Date().getFullYear()} {data.personal.name}
          </div>

          <div className="flex flex-wrap items-center gap-8">
            <a href={data.personal.github} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-xs uppercase tracking-widest font-bold text-white/50 hover:text-white transition-colors">
              <GithubLogo size={16} weight="fill" /> GITHUB
            </a>
            <a href={data.personal.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-xs uppercase tracking-widest font-bold text-white/50 hover:text-white transition-colors">
              <LinkedinLogo size={16} weight="fill" /> LINKEDIN
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
