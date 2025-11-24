import React, { useEffect, useState } from 'react';
import { Button } from './Button';

interface AboutModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AboutModal: React.FC<AboutModalProps> = ({ isOpen, onClose }) => {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    if (isOpen) {
      // Small delay to allow mounting before transition starts
      setTimeout(() => setShowContent(true), 50);
      document.body.style.overflow = 'hidden';
    } else {
      setShowContent(false);
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className={`fixed inset-0 z-50 overflow-y-auto bg-stone-50 transition-opacity duration-700 ease-in-out ${showContent ? 'opacity-100' : 'opacity-0'}`}>
      <div className="min-h-screen relative flex flex-col items-center py-24 px-6">
        
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="fixed top-8 right-8 text-stone-400 hover:text-stone-800 tracking-widest text-xs transition-colors z-50 p-4"
          aria-label="Close modal"
        >
          CLOSE [×]
        </button>

        {/* Content Container */}
        <div className={`max-w-2xl w-full mx-auto transition-all duration-1000 delay-300 ease-out transform ${showContent ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
          
          <div className="text-center mb-16">
            <span className="text-emerald-800 text-xs tracking-[0.2em] uppercase block mb-6">Our Story</span>
            <h2 className="text-3xl md:text-4xl font-light tracking-widest text-stone-800 leading-relaxed">
              静寂を<br />
              デザインする。
            </h2>
          </div>

          <div className="space-y-12 text-stone-600 font-light leading-loose text-sm md:text-base">
            <p>
              NORDIC ROASTは、ある冬のフィンランドで生まれました。<br />
              外は氷点下20度の雪景色。<br />
              暖炉の前で手にした一杯のコーヒーが、<br />
              冷え切った身体と心を、ゆっくりと解いていく感覚。
            </p>

            <div className="aspect-video w-full overflow-hidden rounded-lg my-12 bg-stone-200">
               {/* Image: Winter cabin window view, snow outside, warm light inside, aesthetic, minimalist */}
               <img 
                 src="https://placehold.co/800x450/e7e5e4/a8a29e?text=Winter+Cabin+Moment" 
                 alt="View from a Finnish cabin" 
                 className="w-full h-full object-cover opacity-90"
               />
            </div>

            <p>
              私たちは単にコーヒー豆を焙煎しているのではありません。<br />
              お届けしたいのは、その「解けていく時間」そのものです。
            </p>

            <div className="border-t border-stone-200 w-12 mx-auto my-12"></div>

            <h3 className="text-xl tracking-widest text-stone-800 mb-8 text-center">
              焙煎の哲学
            </h3>
            
            <p>
              豆本来の果実味を残すため、極めて浅い焙煎（ノルディック・ロースト）を採用しています。<br />
              苦味で目を覚ますのではなく、<br />
              酸味と香りで心を洗うような体験を。
            </p>

            <p>
              それはまるで、森の中で深呼吸をするような。<br />
              忙しない日々に、句読点を。<br />
              それが私たちの願いです。
            </p>
          </div>

          <div className="mt-20 text-center">
            <Button onClick={onClose} variant="secondary">
              サイトに戻る
            </Button>
          </div>

        </div>
      </div>
    </div>
  );
};