
import React, { useState } from 'react';
import { NavItem, View } from '../types';
import { CornerBracket } from './ui/MechanicalDecorations';
import { AmbientParticles } from './ui/AmbientParticles';
import { Menu, X, Database, Disc, Activity } from 'lucide-react';

const NAV_ITEMS: NavItem[] = [
  { id: 'home', label: 'INTEL_DATA' },
  { id: 'units', label: 'UNIT_DATA' },
  { id: 'map', label: 'GEO_MAP' },
  { id: 'system', label: 'SYSTEM' },
];

interface LayoutProps {
  children: React.ReactNode;
  currentView: View;
  onNavigate: (view: View) => void;
}

export const Layout: React.FC<LayoutProps> = ({ children, currentView, onNavigate }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavClick = (view: View) => {
    onNavigate(view);
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen w-full bg-yorha-bg text-yorha-text font-serif relative selection:bg-yorha-beige selection:text-yorha-bg overflow-x-hidden">
      
      {/* Ambient Background Effects */}
      <AmbientParticles />

      {/* Main Header */}
      <header className="fixed top-0 left-0 w-full z-40 bg-yorha-bg/90 backdrop-blur-sm border-b border-yorha-darkBeige/30 h-16 flex items-center px-6 justify-between">
        <div 
          className="flex items-center gap-4 cursor-pointer group"
          onClick={() => handleNavClick('home')}
        >
          <div className="w-8 h-8 border border-yorha-beige flex items-center justify-center transition-all group-hover:bg-yorha-beige group-hover:text-yorha-bg">
             <div className="w-4 h-4 bg-yorha-beige rotate-45 group-hover:bg-yorha-bg" />
          </div>
          <div className="flex flex-col">
            <h1 className="text-xl font-bold tracking-[0.2em] text-yorha-beige">YORHA</h1>
            <span className="text-[0.6rem] font-mono text-yorha-darkBeige tracking-widest">FOR THE GLORY OF MANKIND</span>
          </div>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8">
          {NAV_ITEMS.map(item => (
            <button 
              key={item.id} 
              onClick={() => handleNavClick(item.id)}
              className={`group relative text-sm font-mono tracking-widest transition-all duration-300 ${currentView === item.id ? 'text-yorha-bg bg-yorha-beige px-2' : 'text-yorha-text hover:text-yorha-beige'}`}
            >
              <span className={`absolute -left-3 transition-opacity duration-300 ${currentView === item.id ? 'opacity-100 text-yorha-beige' : 'opacity-0 group-hover:opacity-100'}`}>[</span>
              {item.label}
              <span className={`absolute -right-3 transition-opacity duration-300 ${currentView === item.id ? 'opacity-100 text-yorha-beige' : 'opacity-0 group-hover:opacity-100'}`}>]</span>
            </button>
          ))}
        </nav>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-yorha-beige p-2 border border-transparent hover:border-yorha-beige transition-all"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </header>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-30 bg-yorha-bg/95 pt-20 px-8 md:hidden">
          <div className="flex flex-col gap-6">
            {NAV_ITEMS.map((item, idx) => (
              <button 
                key={item.id} 
                onClick={() => handleNavClick(item.id)}
                className="text-xl font-serif border-b border-yorha-darkBeige/30 pb-4 flex justify-between items-center text-left"
                style={{ animation: `fadeIn 0.5s ease-out ${idx * 0.1}s forwards`, opacity: 0 }}
              >
                <span className={currentView === item.id ? 'text-yorha-beige font-bold' : ''}>{item.label}</span>
                <span className="text-xs font-mono text-yorha-darkBeige">0{idx + 1}</span>
              </button>
            ))}
          </div>
          <div className="mt-12 p-4 border border-dashed border-yorha-darkBeige/40">
            <div className="text-xs font-mono text-yorha-darkBeige mb-2">STATUS</div>
            <div className="flex items-center gap-2 text-sm">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              ONLINE - BUNKER SERVER
            </div>
          </div>
        </div>
      )}

      {/* Main Content Container */}
      <main className="pt-24 pb-12 px-4 md:px-12 max-w-7xl mx-auto min-h-[calc(100vh-100px)] relative z-10">
        {/* Vertical Grid Line Decoration */}
        <div className="absolute top-0 left-8 md:left-24 w-px h-full bg-yorha-darkBeige/10 -z-10" />
        <div className="absolute top-0 right-8 md:right-24 w-px h-full bg-yorha-darkBeige/10 -z-10" />
        
        {children}
      </main>

      {/* Footer */}
      <footer className="border-t border-yorha-darkBeige/30 py-8 relative bg-yorha-panel/50 z-10">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-8 opacity-60">
                <Database size={16} />
                <Disc size={16} />
                <Activity size={16} />
            </div>
            <div className="text-center md:text-right">
                <p className="text-xs font-mono text-yorha-darkBeige uppercase tracking-widest">
                    © 11945 YoRHa Production. All Rights Reserved.
                </p>
            </div>
        </div>
        <CornerBracket position="bl" className="border-yorha-darkBeige/40" />
        <CornerBracket position="br" className="border-yorha-darkBeige/40" />
      </footer>
    </div>
  );
};
