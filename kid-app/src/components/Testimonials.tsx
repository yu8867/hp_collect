import React, { useState } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

const TESTIMONIALS = [
  {
    name: "田中さん",
    role: "小学3年生のお母さん",
    rating: 5,
    text: "最初は「プログラミングなんて難しそう」と思っていましたが、息子が毎週楽しみにしているのを見て安心しました。自分で作ったゲームを嬉しそうに見せてくれる姿に感動です！",
    avatar: "T",
  },
  {
    name: "佐藤さん",
    role: "小学5年生のお父さん",
    rating: 5,
    text: "論理的に考える力が身についてきたと感じます。学校の算数の成績も上がりました。先生方も優しく、子供の「やりたい」を大切にしてくれます。",
    avatar: "S",
  },
  {
    name: "山田さん",
    role: "小学2年生のお母さん",
    rating: 5,
    text: "ゲームばかりだった娘が、今では「作る側」になりたいと言っています。将来の夢がエンジニアになったと聞いて驚きました！",
    avatar: "Y",
  },
  {
    name: "鈴木さん",
    role: "小学4年生のお父さん",
    rating: 4,
    text: "ロボットコースに通っていますが、毎回新しい発見があるようで目を輝かせて帰ってきます。親子で一緒に復習するのも楽しいです。",
    avatar: "S",
  },
];

export const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { ref, isVisible } = useScrollAnimation<HTMLElement>();

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length
    );
  };

  return (
    <section
      ref={ref}
      className="py-20 px-4 bg-gradient-to-br from-pink-50 to-purple-50"
    >
      <div className="max-w-5xl mx-auto">
        <div
          className={`text-center mb-12 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
            保護者の声
          </h2>
          <p className="text-gray-600">
            実際に通われているお子さまの保護者様からの声をご紹介します
          </p>
        </div>

        <div
          className={`relative transition-all duration-700 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {/* Main Card */}
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl relative overflow-hidden">
            <Quote className="absolute top-6 right-6 w-16 h-16 text-brand-pink/10" />

            <div className="flex flex-col md:flex-row gap-8 items-start">
              {/* Avatar */}
              <div className="flex-shrink-0">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-brand-pink to-brand-purple flex items-center justify-center text-white text-2xl font-bold shadow-lg">
                  {TESTIMONIALS[currentIndex].avatar}
                </div>
              </div>

              {/* Content */}
              <div className="flex-1">
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${
                        i < TESTIMONIALS[currentIndex].rating
                          ? "text-brand-yellow fill-brand-yellow"
                          : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>

                {/* Text */}
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                  {TESTIMONIALS[currentIndex].text}
                </p>

                {/* Name */}
                <div>
                  <p className="font-bold text-gray-900">
                    {TESTIMONIALS[currentIndex].name}
                  </p>
                  <p className="text-sm text-gray-500">
                    {TESTIMONIALS[currentIndex].role}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-center gap-4 mt-8">
            <button
              onClick={prevTestimonial}
              className="w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-brand-pink hover:text-white transition-colors"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Dots */}
            <div className="flex items-center gap-2">
              {TESTIMONIALS.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    idx === currentIndex
                      ? "bg-brand-pink w-8"
                      : "bg-gray-300 hover:bg-gray-400"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextTestimonial}
              className="w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-brand-pink hover:text-white transition-colors"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
