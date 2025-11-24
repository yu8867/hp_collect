import React, { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "本当に5日で納品できるのですか？",
    answer:
      "はい、可能です。ヒアリングシートをいただいてから、AIを活用してベースを高速構築するためです。ただし、お客様からの素材提供の遅れや、大規模な修正が発生した場合は、日数が追加されることがあります。",
  },
  {
    question: "デザインの修正は可能ですか？",
    answer:
      "もちろんです。テスト環境でのご確認時に、修正箇所をご指示いただけます。AIが生成したベースに対し、プロのデザイナーが細部を調整し、ご納得いただけるクオリティに仕上げます。",
  },
  {
    question: "サーバーやドメインの契約もお願いできますか？",
    answer:
      "はい、代行可能です。ご自身で契約されるのが不安な場合は、弊社で最適なサーバー・ドメインを選定・設定いたします（実費は別途ご請求となります）。",
  },
  {
    question: "制作後の運用・更新も頼めますか？",
    answer:
      "スポットでの更新対応も、月額制の保守プランもご用意しております。Webサイトは公開してからがスタートですので、ぜひ継続的にサポートさせてください。",
  },
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-slate-950 border-t border-white/5">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white/5 mb-4">
            <HelpCircle className="w-6 h-6 text-slate-300" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white tracking-tight">
            よくある質問
          </h2>
          <p className="text-slate-400">不安な点はここで解消してください。</p>
        </div>

        <div className="space-y-4">
          {faqData.map((item, index) => (
            <div
              key={index}
              className={`border rounded-xl transition-all duration-300 ${
                openIndex === index
                  ? "bg-white/5 border-neon-cyan/30"
                  : "bg-transparent border-white/10 hover:border-white/20"
              }`}
            >
              <button
                className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                onClick={() => toggleFAQ(index)}
              >
                <span
                  className={`font-bold text-lg ${
                    openIndex === index ? "text-white" : "text-slate-300"
                  }`}
                >
                  {item.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-slate-400 transition-transform duration-300 ${
                    openIndex === index ? "rotate-180 text-neon-cyan" : ""
                  }`}
                />
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index
                    ? "max-h-48 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="p-6 pt-0 text-slate-400 leading-relaxed border-t border-white/5 mt-2">
                  {item.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
