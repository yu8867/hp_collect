import React from "react";
import { ArrowUpRight } from "lucide-react";
import { View } from "../types";
import { PortfolioItems } from "./Items";

interface WorksPageProps {
  onNavigate: (view: View) => void;
}

const worksData = PortfolioItems;

const WorksPage: React.FC<WorksPageProps> = ({ onNavigate }) => {
  return (
    <div className="min-h-screen bg-slate-950 pt-32 pb-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b border-white/10 pb-8">
          <div>
            <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-4">
              ALL WORKS
            </h1>
            <p className="text-slate-400 max-w-xl">
              私たちが手掛けたプロジェクトの一覧です。
              <br />
              クライアントの課題を、デザインとテクノロジーで解決します。
            </p>
          </div>
          <button
            onClick={() => onNavigate("contact")}
            className="mt-6 md:mt-0 px-6 py-3 bg-white/5 border border-white/20 hover:bg-white/10 text-white rounded-full transition-colors text-sm font-bold tracking-wide"
          >
            プロジェクトの相談をする
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {worksData.map((item) => (
            <a
              href={item.urls}
              className="text-white"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div key={item.id} className="group flex flex-col">
                <div className="relative overflow-hidden rounded-2xl mb-6 aspect-[4/3] border border-white/5">
                  <div className="absolute inset-0 bg-slate-800 animate-pulse"></div>
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    className="relative z-10 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors z-20"></div>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-neon-cyan text-xs font-bold tracking-wider uppercase">
                      {item.category}
                    </span>
                    <ArrowUpRight className="w-5 h-5 text-slate-500 group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-2xl font-bold text-white group-hover:text-neon-cyan transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    {item.description}
                  </p>
                  <div className="flex flex-wrap gap-2 pt-2">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] px-2 py-1 rounded-sm bg-white/5 text-slate-300 border border-white/5"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WorksPage;
