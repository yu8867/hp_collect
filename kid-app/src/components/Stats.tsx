import React from "react";
import { Users, Award, Calendar, ThumbsUp } from "lucide-react";
import {
  useScrollAnimation,
  useCountUp,
} from "../hooks/useScrollAnimation";

const STATS = [
  {
    icon: Users,
    value: 500,
    suffix: "名+",
    label: "累計受講生",
    color: "text-brand-blue",
    bgColor: "bg-blue-100",
  },
  {
    icon: ThumbsUp,
    value: 98,
    suffix: "%",
    label: "保護者満足度",
    color: "text-brand-pink",
    bgColor: "bg-pink-100",
  },
  {
    icon: Calendar,
    value: 5,
    suffix: "年",
    label: "開講実績",
    color: "text-brand-purple",
    bgColor: "bg-purple-100",
  },
  {
    icon: Award,
    value: 15,
    suffix: "回",
    label: "コンテスト入賞",
    color: "text-brand-yellow",
    bgColor: "bg-yellow-100",
  },
];

const StatItem: React.FC<{
  stat: (typeof STATS)[0];
  isVisible: boolean;
  delay: number;
}> = ({ stat, isVisible, delay }) => {
  const count = useCountUp(stat.value, 2000, isVisible);
  const Icon = stat.icon;

  return (
    <div
      className={`text-center transition-all duration-700`}
      style={{
        transitionDelay: `${delay}ms`,
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(20px)",
      }}
    >
      <div
        className={`w-16 h-16 ${stat.bgColor} rounded-2xl flex items-center justify-center mx-auto mb-4 transform hover:scale-110 hover:rotate-6 transition-transform`}
      >
        <Icon className={`w-8 h-8 ${stat.color}`} />
      </div>
      <div className="text-4xl md:text-5xl font-black text-gray-900 mb-2">
        {count}
        <span className="text-2xl">{stat.suffix}</span>
      </div>
      <p className="text-gray-600 font-medium">{stat.label}</p>
    </div>
  );
};

export const Stats: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation<HTMLElement>();

  return (
    <section ref={ref} className="py-20 px-4 bg-white">
      <div className="max-w-5xl mx-auto">
        <div
          className={`text-center mb-12 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
            数字で見る<span className="text-brand-blue">RoboKids</span>
          </h2>
          <p className="text-gray-600">
            多くのお子さまに選ばれています
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {STATS.map((stat, idx) => (
            <StatItem
              key={idx}
              stat={stat}
              isVisible={isVisible}
              delay={idx * 150}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
