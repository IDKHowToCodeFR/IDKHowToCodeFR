import React, { useEffect } from 'react';

export const ArrowUpRight = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M7 17L17 7" /><path d="M7 7h10v10" />
  </svg>
);

export const PremiumCard = ({ children, className = "" }) => (
  <div className={`p-1.5 rounded-[2rem] bg-white/5 ring-1 ring-white/10 w-full overflow-hidden transition-transform duration-500 hover:scale-[1.01] ${className}`}>
    <div className="bg-[#0A0A0A] rounded-[calc(2rem-0.375rem)] shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)] w-full p-8 md:p-12 flex flex-col justify-between break-words overflow-hidden">
      {children}
    </div>
  </div>
);

export const MagneticButton = ({ children, href, isInternal }) => {
  const inner = (
    <>
      <span className="text-sm font-medium tracking-wide text-white/90 whitespace-nowrap">{children}</span>
      <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:translate-x-1 group-hover:-translate-y-[1px] group-hover:scale-105 shrink-0">
        <ArrowUpRight />
      </div>
    </>
  );

  return (
    <a href={href} target={isInternal ? "_self" : "_blank"} rel="noreferrer" className="group inline-flex items-center gap-4 bg-white/5 hover:bg-white/10 ring-1 ring-white/10 rounded-full pl-6 pr-2 py-2 transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] active:scale-[0.98]">
      {inner}
    </a>
  );
};

export const useReveal = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-up');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: "0px 0px -50px 0px" });

    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
};
