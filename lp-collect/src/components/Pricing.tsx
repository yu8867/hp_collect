import React from "react";
import { Check, ArrowRight } from "lucide-react";
import { View } from "../types";

interface PricingProps {
  onNavigate: (view: View) => void;
}

const Pricing: React.FC<PricingProps> = ({ onNavigate }) => {
  return (
    <section
      id="pricing"
      className="py-24 bg-slate-950 border-t border-white/5"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white tracking-tight">
            料金プラン
          </h2>
          <p className="text-slate-400">
            複雑なオプションはありません。全てを含んだワンプライスで提供します。
            <br />
            <span className="text-neon-cyan text-sm">
              ※現在、制作実績掲載OKの方限定のプランです
            </span>
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative bg-white/5 border border-neon-cyan/30 rounded-3xl overflow-hidden backdrop-blur-sm">
            <div className="absolute top-0 right-0 p-4">
              <div className="bg-neon-cyan text-black text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide shadow-[0_0_15px_rgba(0,243,255,0.5)]">
                Recommended
              </div>
            </div>

            <div className="p-8 md:p-12 flex flex-col md:flex-row gap-8 md:gap-12 items-center">
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-2xl font-bold text-white mb-2">
                  Standard Production
                </h3>
                <p className="text-slate-400 mb-6">
                  企画、デザイン、AI素材生成、コーディング、公開まで。
                  <br />
                  テストマーケティングに必要なすべてをセットに。
                </p>
                <div className="text-5xl font-bold text-white mb-2 tracking-tight">
                  ¥50,000
                  <span className="text-lg text-slate-500 font-normal">~</span>
                </div>
                <p className="text-xs text-slate-500">※要件により変動します</p>
              </div>

              <div className="w-full md:w-px h-px md:h-48 bg-white/10"></div>

              <div className="flex-1 w-full">
                <ul className="space-y-4 mb-8">
                  {[
                    "LPデザイン & コーディング",
                    "スマホ完全対応 (レスポンシブ)",
                    "AIによるオリジナル画像生成",
                    "プロによるコピーライティング調整",
                    "お問い合わせフォーム実装",
                  ].map((item, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-3 text-slate-300 font-medium"
                    >
                      <div className="w-5 h-5 rounded-full bg-neon-cyan/20 flex items-center justify-center shrink-0">
                        <Check className="w-3 h-3 text-neon-cyan" />
                      </div>
                      {item}
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() => onNavigate("contact")}
                  className="block w-full py-4 bg-gradient-to-r from-neon-cyan to-blue-500 text-black font-bold text-center rounded-sm hover:brightness-110 transition-all shadow-[0_0_20px_rgba(0,243,255,0.2)] hover:shadow-[0_0_30px_rgba(0,243,255,0.4)]"
                >
                  <span className="flex items-center justify-center">
                    まずは相談する <ArrowRight className="w-4 h-4 ml-1" />
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
