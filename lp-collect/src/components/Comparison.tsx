import React from "react";
import { Check, AlertCircle, Zap } from "lucide-react";

const Comparison: React.FC = () => {
  return (
    <section className="py-24 bg-slate-950 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-neon-cyan/5 blur-[120px] pointer-events-none rounded-full"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white tracking-tight">
            その差は、<span className="text-neon-cyan">圧倒的</span>です。
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            ただ安いだけではありません。AIという「武器」を持つことで、
            <br className="hidden md:block" />
            品質を落とさずに、スピードとコストの課題を解決しました。
          </p>
        </div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-0 items-center">
          {/* Traditional Agency */}
          <div className="bg-slate-900/50 border border-white/5 p-8 rounded-2xl md:rounded-r-none md:rounded-l-2xl grayscale opacity-70 hover:opacity-100 hover:grayscale-0 transition-all duration-500">
            <h3 className="text-xl font-bold text-slate-400 mb-8 text-center flex items-center justify-center gap-2">
              <span className="w-2 h-2 rounded-full bg-slate-500"></span>
              従来の制作会社
            </h3>
            <div className="space-y-6">
              <div className="flex items-start gap-4 pb-6 border-b border-white/5">
                <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center shrink-0">
                  <AlertCircle className="w-4 h-4 text-slate-500" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-300 mb-1">
                    納期：1ヶ月〜3ヶ月
                  </h4>
                  <p className="text-sm text-slate-500">
                    度重なる打ち合わせと修正で、ローンチまで長い時間がかかります。
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4 pb-6 border-b border-white/5">
                <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center shrink-0">
                  <AlertCircle className="w-4 h-4 text-slate-500" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-300 mb-1">
                    費用：50万円〜150万円
                  </h4>
                  <p className="text-sm text-slate-500">
                    ディレクター、デザイナー、エンジニア...多くの人件費が乗っています。
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center shrink-0">
                  <AlertCircle className="w-4 h-4 text-slate-500" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-300 mb-1">
                    手間：対面MTG・電話
                  </h4>
                  <p className="text-sm text-slate-500">
                    定例会議のために時間を空ける必要があり、本業を圧迫します。
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* NexGen Service */}
          <div className="bg-slate-900/80 border border-neon-cyan p-8 md:p-10 rounded-2xl shadow-[0_0_50px_rgba(0,243,255,0.1)] relative md:scale-105 z-20 backdrop-blur-sm">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-neon-cyan text-black font-bold px-4 py-1 rounded-full text-sm uppercase tracking-wider shadow-lg shadow-neon-cyan/50">
              当社
            </div>

            <h3 className="text-2xl font-bold text-white mb-8 text-center flex items-center justify-center gap-2">
              <span className="w-2 h-2 rounded-full bg-neon-cyan animate-pulse"></span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-neon-cyan">
                NexGen Web Works
              </span>
            </h3>

            <div className="space-y-6">
              <div className="flex items-start gap-4 pb-6 border-b border-white/10">
                <div className="w-8 h-8 rounded-full bg-neon-cyan/20 flex items-center justify-center shrink-0">
                  <Zap className="w-5 h-5 text-neon-cyan" />
                </div>
                <div>
                  <h4 className="font-bold text-white text-lg mb-1">
                    納期：最短5日
                  </h4>
                  <p className="text-sm text-slate-400">
                    AIがベースを爆速構築。プロが仕上げるため品質も担保されます。
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4 pb-6 border-b border-white/10">
                <div className="w-8 h-8 rounded-full bg-neon-cyan/20 flex items-center justify-center shrink-0">
                  <Check className="w-5 h-5 text-neon-cyan" />
                </div>
                <div>
                  <h4 className="font-bold text-white text-lg mb-1">
                    費用：要相談
                  </h4>
                  <p className="text-sm text-slate-400">
                    AIによる効率化でコストを圧縮。浮いた予算を広告費に使えます。
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-neon-cyan/20 flex items-center justify-center shrink-0">
                  <Check className="w-5 h-5 text-neon-cyan" />
                </div>
                <div>
                  <h4 className="font-bold text-white text-lg mb-1">
                    手間：完全リモート完結
                  </h4>
                  <p className="text-sm text-slate-400">
                    Google
                    Meetとチャットで全て完結。あなたの貴重な時間を無駄にしません。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Comparison;
