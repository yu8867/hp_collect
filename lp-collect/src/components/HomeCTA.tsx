import React from "react";
import { View } from "../types";

interface HomeCTAProps {
  onNavigate: (view: View) => void;
}

const HomeCTA: React.FC<HomeCTAProps> = ({ onNavigate }) => {
  return (
    <section className="bg-slate-950 pt-24 pb-24 relative overflow-hidden border-t border-white/5">
      {/* Glow Effect */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-neon-purple/20 blur-[150px] pointer-events-none"></div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-bold mb-8 text-white tracking-tight">
            そのアイデア、
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan to-neon-purple">
              今すぐ形にしませんか？
            </span>
          </h2>
          <p className="text-slate-400 text-lg mb-10 leading-relaxed">
            アイデアを寝かせている間に、世界は進んでしまいます。
            <br />
            まずは最短3日のプロトタイプから始めましょう。
            <br />
          </p>

          <button
            onClick={() => onNavigate("contact")}
            className="inline-block px-12 py-5 bg-white text-black font-bold text-xl rounded-full hover:scale-105 transition-transform shadow-[0_0_40px_rgba(255,255,255,0.3)]"
          >
            無料で相談する
          </button>
        </div>
      </div>
    </section>
  );
};

export default HomeCTA;
