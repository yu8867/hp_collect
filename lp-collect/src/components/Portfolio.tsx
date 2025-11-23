import React from "react";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { View } from "types";
import { PortfolioItems } from "./Items";

interface PortfolioProps {
  onNavigate: (view: View) => void;
}

const Portfolio: React.FC<PortfolioProps> = ({ onNavigate }) => {
  const portfolioItems = PortfolioItems;
  console.log("PortfolioItems:", portfolioItems);

  return (
    <section id="works" className="py-24 bg-black text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div className="mb-6 md:mb-0">
            <h2 className="text-4xl md:text-6xl font-display font-bold mb-4 tracking-tighter">
              VIEW AI PORTFOLIO
            </h2>
          </div>
          <div className="flex flex-col items-end">
            <button
              onClick={() => onNavigate("works")}
              className="group flex items-center gap-2 text-white font-bold hover:text-neon-cyan transition-colors mb-2"
            >
              View All Works{" "}
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[300px]">
          {portfolioItems.map((item) => (
            <div
              key={item.id}
              className={`
                group relative overflow-hidden rounded-2xl bg-slate-900 border border-white/5 cursor-pointer
                ${item.size === "large" ? "md:col-span-2 md:row-span-2" : ""}
                ${item.size === "tall" ? "md:col-span-1 md:row-span-2" : ""}
                ${item.size === "wide" ? "md:col-span-2 md:row-span-1" : ""}
                ${item.size === "normal" ? "md:col-span-1 md:row-span-1" : ""}
              `}
            >
              <a href={item.urls} target="_blank" rel="noopener noreferrer">
                {/* Placeholder Image */}
                <div className="absolute inset-0 bg-slate-800">
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-50"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-90"></div>
                </div>

                {/* Content Overlay */}
                <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-end">
                  <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <div className="flex flex-wrap gap-2 mb-3">
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-[10px] font-bold px-2 py-1 bg-white/10 backdrop-blur-md rounded border border-white/10 text-white/90"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <h3
                      className={`font-display font-bold leading-tight mb-2 ${
                        item.size === "large"
                          ? "text-3xl md:text-4xl"
                          : "text-xl md:text-2xl"
                      }`}
                    >
                      {item.title}
                    </h3>
                    <p className="text-slate-300 text-sm md:text-base mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-75 max-w-md line-clamp-2">
                      {item.description}
                    </p>
                    <div className="flex items-center gap-2 text-neon-cyan text-xs md:text-sm font-bold tracking-widest group-hover:text-white transition-colors">
                      VIEW PROJECT <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
