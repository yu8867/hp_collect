import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Portfolio from "./components/Portfolio";
import Pricing from "./components/Pricing";
import Footer from "./components/Footer";
import HomeCTA from "./components/HomeCTA";
import ContactPage from "./components/ContactPage";
import WorksPage from "./components/WorksPage";
import { View } from "../types";
import Comparison from "./components/Comparison";
import Process from "./components/Process";
import FAQ from "./components/FAQ";

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<View>("home");

  const handleNavigate = (view: View) => {
    setCurrentView(view);
    window.scrollTo(0, 0);
  };

  return (
    <main className="bg-slate-950 min-h-screen text-slate-50 selection:bg-neon-cyan selection:text-black">
      <Navbar currentView={currentView} onNavigate={handleNavigate} />

      {currentView === "home" && (
        <>
          <Hero onNavigate={handleNavigate} />
          <Features />
          <Comparison />
          <Portfolio onNavigate={handleNavigate} />
          <Process />
          <Pricing onNavigate={handleNavigate} />
          <HomeCTA onNavigate={handleNavigate} />
          <FAQ />
        </>
      )}

      {currentView === "works" && <WorksPage onNavigate={handleNavigate} />}

      {currentView === "contact" && <ContactPage />}

      <Footer />

      {/* Sticky CTA for Mobile */}
      <div className="md:hidden fixed bottom-6 right-6 z-40">
        <button
          onClick={() => handleNavigate("contact")}
          className="flex items-center justify-center w-14 h-14 rounded-full bg-neon-cyan text-black shadow-lg shadow-neon-cyan/30 hover:scale-110 transition-transform"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            />
          </svg>
        </button>
      </div>
    </main>
  );
};

export default App;
