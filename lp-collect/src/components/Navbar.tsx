import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { View } from "../types";

interface NavbarProps {
  currentView: View;
  onNavigate: (view: View) => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentView, onNavigate }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNav = (view: View) => {
    onNavigate(view);
    setMobileOpen(false);
    window.scrollTo(0, 0);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || currentView !== "home"
          ? "bg-black/80 backdrop-blur-lg py-4 border-b border-white/5"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div
          className="flex items-center gap-2 cursor-pointer"
          onClick={() => handleNav("home")}
        >
          <div className="w-5 h-5 bg-neon-cyan shadow-[0_0_10px_#00f3ff]"></div>
          <span className="font-display font-bold text-xl tracking-wider text-white">
            NEXGEN
          </span>
        </div>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          <button
            onClick={() => handleNav("home")}
            className={`text-sm font-medium transition-colors tracking-wider ${
              currentView === "home"
                ? "text-white"
                : "text-slate-300 hover:text-white"
            }`}
          >
            ホーム
          </button>
          <button
            onClick={() => handleNav("works")}
            className={`text-sm font-medium transition-colors tracking-wider ${
              currentView === "works"
                ? "text-white"
                : "text-slate-300 hover:text-white"
            }`}
          >
            制作例
          </button>
          <button
            onClick={() => handleNav("contact")}
            className="px-6 py-2 bg-white/10 hover:bg-white/20 rounded border border-white/20 text-sm font-bold text-white transition-colors tracking-wide"
          >
            お問い合わせ
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-slate-950 border-b border-white/10 p-4 flex flex-col gap-4 shadow-2xl animate-in slide-in-from-top-5">
          <button
            className="text-white p-3 hover:bg-white/5 rounded transition-colors text-left"
            onClick={() => handleNav("home")}
          >
            ホーム
          </button>
          <button
            className="text-white p-3 hover:bg-white/5 rounded transition-colors text-left"
            onClick={() => handleNav("works")}
          >
            制作実績
          </button>
          <button
            className="text-neon-cyan p-3 font-bold bg-white/5 rounded text-center"
            onClick={() => handleNav("contact")}
          >
            お問い合わせ
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
