import React, { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

const FAQ_ITEMS = [
  {
    question: "プログラミング経験がなくても大丈夫ですか？",
    answer:
      "もちろん大丈夫です！受講生の95%以上が未経験からスタートしています。ブロックを組み合わせるだけの簡単な操作から始めるので、パソコンに慣れていないお子さまでも安心して取り組めます。",
  },
  {
    question: "何歳から受講できますか？",
    answer:
      "小学1年生から受講可能です。低学年のお子さまにはブロック・プログラミングコース、中学年以上にはロボットやPythonコースをおすすめしています。体験レッスンでお子さまに合ったコースをご提案します。",
  },
  {
    question: "授業は週に何回ですか？",
    answer:
      "基本は週1回・60分の授業です。平日放課後と土日にクラスを設けていますので、ご都合の良い時間帯をお選びいただけます。振替制度もありますのでご安心ください。",
  },
  {
    question: "月謝はいくらですか？",
    answer:
      "コースにより異なりますが、月額9,800円〜14,800円（税込）です。入会金・教材費は別途必要となります。詳しくは体験レッスン時にご説明いたします。",
  },
  {
    question: "パソコンやタブレットは必要ですか？",
    answer:
      "教室に機材を完備していますので、手ぶらでお越しいただけます。ご自宅での復習用にパソコンがあると便利ですが、必須ではありません。",
  },
  {
    question: "体験レッスンの内容を教えてください",
    answer:
      "約60分の体験レッスンでは、実際の授業と同じ内容をお試しいただけます。ブロックプログラミングでキャラクターを動かしたり、ロボットを操作したりと、お子さまが「楽しい！」と感じられる内容をご用意しています。",
  },
];

const FAQItem: React.FC<{
  item: (typeof FAQ_ITEMS)[0];
  isOpen: boolean;
  onToggle: () => void;
  delay: number;
  isVisible: boolean;
}> = ({ item, isOpen, onToggle, delay, isVisible }) => {
  return (
    <div
      className={`bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden transition-all duration-500`}
      style={{
        transitionDelay: `${delay}ms`,
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(20px)",
      }}
    >
      <button
        onClick={onToggle}
        className="w-full p-6 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
      >
        <span className="font-bold text-gray-900 pr-4">{item.question}</span>
        <ChevronDown
          className={`w-5 h-5 text-brand-blue flex-shrink-0 transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-96" : "max-h-0"
        }`}
      >
        <p className="px-6 pb-6 text-gray-600 leading-relaxed">{item.answer}</p>
      </div>
    </div>
  );
};

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const { ref, isVisible } = useScrollAnimation<HTMLElement>();

  return (
    <section ref={ref} className="py-20 px-4 bg-gray-50">
      <div className="max-w-3xl mx-auto">
        <div
          className={`text-center mb-12 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="inline-flex items-center gap-2 bg-brand-blue/10 text-brand-blue px-4 py-2 rounded-full mb-4">
            <HelpCircle className="w-5 h-5" />
            <span className="font-bold">よくある質問</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-black text-gray-900">
            FAQ
          </h2>
        </div>

        <div className="space-y-4">
          {FAQ_ITEMS.map((item, idx) => (
            <FAQItem
              key={idx}
              item={item}
              isOpen={openIndex === idx}
              onToggle={() => setOpenIndex(openIndex === idx ? null : idx)}
              delay={idx * 100}
              isVisible={isVisible}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
