import React, { useState, useEffect } from 'react';
import { HashRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Resume from './pages/Resume';
import './index.css';

function App() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <HashRouter>
      <div className="relative selection:bg-white/20 min-h-screen text-white overflow-x-hidden font-sans">
        <div className="fixed inset-0 radial-glow pointer-events-none z-0"></div>
        <div className="noise-overlay z-50"></div>

        <nav 
          className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 bg-white/5 backdrop-blur-2xl ring-1 ring-white/10 px-8 py-4 rounded-full flex items-center gap-6 md:gap-8 transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8 pointer-events-none'
          }`}
        >
          <Link to="/" className="text-xs font-medium uppercase tracking-widest text-white/70 hover:text-white transition-colors">Home</Link>
          <Link to="/experience" className="text-xs font-medium uppercase tracking-widest text-white/70 hover:text-white transition-colors">Experience</Link>
          <Link to="/projects" className="text-xs font-medium uppercase tracking-widest text-white/70 hover:text-white transition-colors">Projects</Link>
          <Link to="/resume" className="text-xs font-medium uppercase tracking-widest text-white/70 hover:text-white transition-colors">Resume</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/experience" element={<Home />} /> {/* Scaffolding for now */}
          <Route path="/projects" element={<Projects />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;
