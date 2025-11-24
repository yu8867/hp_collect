import React from 'react';
import { Button } from './Button';
import { FadeIn } from './FadeIn';

interface SubscriptionProps {
  onStartClick: () => void;
}

export const Subscription: React.FC<SubscriptionProps> = ({ onStartClick }) => {
  return (
    <section className="py-32 px-6 bg-stone-50 border-t border-b border-stone-100">
      <div className="max-w-4xl mx-auto text-center">
        <FadeIn>
          <h2 className="text-2xl md:text-3xl font-light tracking-widest mb-4">
            月に一度の贈り物
          </h2>
          <p className="text-stone-500 mb-16 text-sm tracking-wide">
            ポストに届く、小さな静寂。
          </p>
        </FadeIn>

        <div className="bg-white p-12 md:p-16 rounded-lg shadow-sm max-w-lg mx-auto border border-stone-100">
          <FadeIn delay={200}>
            <h3 className="text-lg tracking-widest mb-2 text-stone-800">STANDARD PLAN</h3>
            <p className="text-xs text-stone-400 mb-8">200g (約15杯分)</p>
            
            <div className="flex justify-center items-baseline gap-2 mb-8">
              <span className="text-3xl font-light text-stone-700">¥1,980</span>
              <span className="text-xs text-stone-400">/ 月・送料無料</span>
            </div>

            <ul className="text-left space-y-4 text-sm text-stone-600 font-light mb-12 w-fit mx-auto">
              <li className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 bg-emerald-800/50 rounded-full"></span>
                その季節に一番美味しい豆を厳選
              </li>
              <li className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 bg-emerald-800/50 rounded-full"></span>
                ポスト投函で、受け取り不要
              </li>
              <li className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 bg-emerald-800/50 rounded-full"></span>
                スキップも解約も、いつでも自由に
              </li>
            </ul>

            <Button className="w-full" onClick={onStartClick}>
              定期便をはじめる
            </Button>
            
            <p className="mt-6 text-[10px] text-stone-400">
              ※初回はオリジナルのドリップパックをプレゼント
            </p>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};
