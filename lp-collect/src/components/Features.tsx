import React from 'react';
import { Rocket, Brain, Wallet } from 'lucide-react';
import { FeatureItem } from '../types';

const features: FeatureItem[] = [
  {
    title: "常識を覆すスピード",
    description: "従来の開発なら数週間かかる工程を、Geminiを用いたコード生成とImagenによる素材生成で「数日」に短縮。テストマーケティングを急ぐあなたのためのスピード感です。",
    icon: Rocket,
    accentColor: "text-neon-cyan"
  },
  {
    title: "AI × プロのクオリティ",
    description: "AIが骨組みを作り、経験豊富なWebディレクターが魂を吹き込む。細部のUI調整や、人の心を動かすコピーライティングはプロの手で完璧に仕上げます。",
    icon: Brain,
    accentColor: "text-purple-400"
  },
  {
    title: "破壊的なコストパフォーマンス",
    description: "人件費のかかる単純作業をAIに任せることで、開発コストを劇的に削減。浮いた予算を広告費やプロダクト改善に回せる、賢い選択肢を提供します。",
    icon: Wallet,
    accentColor: "text-emerald-400"
  }
];

const Features: React.FC = () => {
  return (
    <section id="features" className="py-24 bg-slate-950 relative">
      <div className="container mx-auto px-4">
        <div className="mb-16 md:mb-24 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">
            なぜ、<span className="italic text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">NextGen</span> なのか
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto">
            Web制作の「遅い・高い・面倒」を過去のものに。<br/>
            私たちはテクノロジーで制作フローを再定義しました。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="glass-panel p-8 rounded-2xl hover:border-white/20 transition-colors group"
            >
              <div className={`w-14 h-14 rounded-lg bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className={`w-8 h-8 ${feature.accentColor}`} />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-slate-100">{feature.title}</h3>
              <p className="text-slate-400 leading-relaxed text-sm md:text-base">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;