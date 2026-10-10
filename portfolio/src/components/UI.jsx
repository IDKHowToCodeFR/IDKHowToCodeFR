import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from "@phosphor-icons/react";

export const PremiumCard = ({ children, className = "" }) => (
  <div className={`p-1.5 rounded-4xl bg-white/5 ring-1 ring-white/10 w-full overflow-hidden ${className}`}>
    <div className="bg-[#0A0A0A] rounded-[1.625rem] shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)] w-full p-8 md:p-12 flex flex-col justify-between wrap-break-word overflow-hidden">
      {children}
    </div>
  </div>
);

export const MagneticButton = ({ children, href, isInternal }) => {
  const inner = (
    <>
      <span className="text-sm font-medium tracking-wide text-white/90 whitespace-nowrap">{children}</span>
      <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:translate-x-1 group-hover:-translate-y-px group-hover:scale-105 shrink-0">
        <ArrowUpRight />
      </div>
    </>
  );

  const classes = "group inline-flex items-center gap-4 bg-white/5 hover:bg-white/10 ring-1 ring-white/10 rounded-full pl-6 pr-2 py-3 md:py-2 transition-[transform,background-color] duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] active:duration-150 active:scale-[0.97]";

  if (isInternal) {
    return (
      <Link to={href} className={classes}>
        {inner}
      </Link>
    );
  }

  return (
    <a href={href} target="_blank" rel="noreferrer" className={classes}>
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
