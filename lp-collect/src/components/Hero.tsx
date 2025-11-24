import React from "react";
import { ArrowRight } from "lucide-react";
import { View } from "../types";

interface HeroProps {
  onNavigate: (view: View) => void;
}

const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Grid Effect */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 z-0"></div>
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] z-0"></div>

      {/* Glowing Orbs */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-neon-cyan/20 rounded-full blur-[100px] animate-pulse-slow"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-neon-purple/10 rounded-full blur-[120px] animate-pulse-slow delay-1000"></div>

      <div className="container mx-auto px-4 relative z-10 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm text-xs md:text-sm font-display tracking-wider mb-8 animate-float">
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
          POWERED BY GOOGLE GEMINI & IMAGEN
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-[1.1] mb-8 text-white">
          未来を、
          <br className="md:hidden" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan via-white to-neon-purple text-glow">
            実装する。
          </span>
        </h1>

        <p className="text-slate-300 text-lg md:text-xl max-w-2xl mx-auto mb-12 font-light leading-relaxed">
          Google/OpenAIの最新技術を駆使し、構想からローンチまで
          <span className="text-white font-bold">最短5日</span>。
          <br className="hidden md:block" />
          従来の制作プロセスの「無駄」を極限まで削ぎ落とし、
          <br className="hidden md:block" />
          圧倒的なコストパフォーマンスで、あなたのビジネスを加速させます。
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={() => onNavigate("works")}
            className="w-full sm:w-auto group relative px-8 py-4 bg-white text-black font-bold text-lg rounded-sm overflow-hidden transition-all hover:scale-105 active:scale-95"
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
              制作例を見る{" "}
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-neon-cyan to-neon-purple opacity-0 group-hover:opacity-20 transition-opacity"></div>
          </button>
        </div>
      </div>

      {/* Tech Decoration */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-neon-cyan/50 to-transparent"></div>
    </section>
  );
};

export default Hero;
