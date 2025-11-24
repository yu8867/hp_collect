import React from "react";
import { Button } from "./Button";
import { FadeIn } from "./FadeIn";

export const Hero: React.FC = () => {
  const scrollToContent = () => {
    document
      .getElementById("philosophy")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        {/* Image: Foggy Nordic lake at sunrise, water reflecting the soft light, muted blues and greys, minimal composition */}
        <img
          src="hero.png"
          alt="Nordic lake morning"
          className="w-full h-full object-cover opacity-90"
        />
        <div className="absolute inset-0 bg-stone-900/30 backdrop-blur-[1px]" />
      </div>

      <div className="relative z-10 max-w-4xl px-6 text-center space-y-10 mt-12">
        <FadeIn delay={200}>
          <p className="text-stone-200 text-xs tracking-[0.4em] uppercase mb-6 opacity-90 drop-shadow-sm">
            Nordic Roast
          </p>
          <h1 className="text-4xl md:text-6xl font-light leading-relaxed tracking-wide text-white drop-shadow-sm">
            北欧の朝を、
            <br />
            一杯の静寂とともに。
          </h1>
        </FadeIn>

        <FadeIn delay={400}>
          <p className="text-stone-100 leading-loose text-sm md:text-base font-light tracking-wide max-w-lg mx-auto drop-shadow-md opacity-90">
            窓から差し込む柔らかな光。
            <br />
            フィンランドの森のような、
            <br />
            深く、透き通った余韻をお届けします。
          </p>
        </FadeIn>

        <FadeIn delay={600}>
          <button
            onClick={scrollToContent}
            className="inline-block px-10 py-4 text-sm tracking-widest border border-stone-200 text-stone-50 hover:bg-white hover:text-stone-800 transition-all duration-700 ease-out rounded-sm bg-white/5 backdrop-blur-sm"
          >
            ゆっくり、はじめる
          </button>
        </FadeIn>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-pulse-slow text-stone-300 z-10">
        <span className="text-[10px] tracking-widest block mb-3 opacity-80">
          SCROLL
        </span>
        <svg
          className="w-5 h-5 mx-auto opacity-80"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={0.5}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  );
};
