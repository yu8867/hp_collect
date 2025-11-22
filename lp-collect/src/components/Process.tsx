import React from "react";
import { MessageSquare, Cpu, Rocket } from "lucide-react";

const steps = [
  {
    id: 1,
    title: "ヒアリング",
    description:
      "専用フォームにて、サービスの概要、ターゲット、参考サイトなどを入力していただきます。30分程度で完了します。",
    icon: MessageSquare,
    color: "text-blue-400",
  },
  {
    id: 2,
    title: "AI構築 & デザイン",
    description:
      "Geminiが構成案を作成し、Imagenが素材を生成。その後、プロのディレクターがデザインとコピーを洗練させます。",
    icon: Cpu,
    color: "text-purple-400",
  },
  {
    id: 3,
    title: "最終確認 & 公開",
    description:
      "テスト環境でご確認いただき、修正があれば対応。OKが出次第、本番環境へアップロードして納品完了です。",
    icon: Rocket,
    color: "text-neon-cyan",
  },
];

const Process: React.FC = () => {
  return (
    <section className="py-24 bg-black border-t border-white/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white tracking-tight">
            驚くほど、
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              シンプル
            </span>
            。
          </h2>
          <p className="text-slate-400">
            あなたの貴重な時間を奪いません。
            <br />
            3つのステップで、ビジネスが加速し始めます。
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-gradient-to-r from-blue-900 via-purple-900 to-neon-cyan/30 z-0"></div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
            {steps.map((step, index) => (
              <div
                key={index}
                className="relative z-10 flex flex-col items-center text-center group"
              >
                {/* Icon Circle */}
                <div className="w-24 h-24 rounded-full bg-slate-900 border border-white/10 flex items-center justify-center mb-6 group-hover:border-white/30 group-hover:scale-110 transition-all duration-300 shadow-[0_0_20px_rgba(0,0,0,0.5)]">
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-slate-800 rounded-full border border-white/10 flex items-center justify-center font-display font-bold text-white z-20">
                    {step.id}
                  </div>
                  <step.icon className={`w-10 h-10 ${step.color}`} />
                </div>

                <h3 className="text-xl font-bold text-white mb-4">
                  {step.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
