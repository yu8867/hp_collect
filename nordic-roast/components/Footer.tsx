import React, { useState } from 'react';

interface FooterProps {
  onAboutClick: () => void;
  onContactClick: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onAboutClick, onContactClick }) => {
  const [isFaqOpen, setIsFaqOpen] = useState(false);

  const faqs = [
    { 
      q: "送料はかかりますか？", 
      a: "定期便は日本全国、送料無料でお届けしています。単発でのご注文の場合は、一律550円をいただいております。" 
    },
    { 
      q: "定期便のスキップは可能ですか？", 
      a: "はい、マイページからいつでも変更可能です。旅行や出張など、ご都合に合わせて柔軟に調整いただけます。" 
    },
    { 
      q: "賞味期限はどのくらいですか？", 
      a: "焙煎後3ヶ月を賞味期限としていますが、もっとも香りを楽しんでいただくため、到着後1ヶ月以内にお飲みいただくことをおすすめしています。" 
    }
  ];

  return (
    <footer className="py-20 px-6 bg-stone-100 text-stone-500 transition-all duration-500">
      <div className="max-w-5xl mx-auto flex flex-col items-center space-y-12">
        <h2 className="text-lg tracking-[0.3em] font-light text-stone-700">NORDIC ROAST</h2>
        
        <nav className="flex flex-wrap justify-center gap-8 md:gap-16 text-xs tracking-widest">
          <button onClick={onAboutClick} className="hover:text-stone-800 transition-colors uppercase">ABOUT</button>
          <button 
            onClick={() => setIsFaqOpen(!isFaqOpen)} 
            className={`hover:text-stone-800 transition-colors uppercase ${isFaqOpen ? 'text-stone-800 underline underline-offset-4 decoration-stone-300' : ''}`}
          >
            FAQ
          </button>
          <button onClick={onContactClick} className="hover:text-stone-800 transition-colors uppercase">CONTACT</button>
        </nav>

        {/* FAQ Content Area */}
        <div 
          className={`w-full max-w-2xl overflow-hidden transition-all duration-700 ease-in-out ${
            isFaqOpen ? 'max-h-[800px] opacity-100 mb-8' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="bg-white/60 p-8 md:p-12 rounded-sm border border-stone-200/50 backdrop-blur-sm">
            <h3 className="text-center text-xs tracking-[0.2em] mb-10 text-stone-400">FREQUENTLY ASKED QUESTIONS</h3>
            <div className="grid gap-8">
              {faqs.map((item, i) => (
                <div key={i} className="space-y-3">
                  <h4 className="text-sm font-medium text-stone-700 tracking-wide flex items-center gap-3">
                    <span className="text-[10px] text-emerald-800/60">0{i + 1}</span>
                    {item.q}
                  </h4>
                  <p className="text-xs leading-loose text-stone-500 font-light pl-6 border-l border-stone-200 ml-1">
                    {item.a}
                  </p>
                </div>
              ))}
            </div>
            <div className="mt-12 text-center">
                <button 
                  onClick={() => setIsFaqOpen(false)} 
                  className="text-[10px] text-stone-400 hover:text-stone-600 tracking-widest border-b border-transparent hover:border-stone-300 pb-1 transition-all"
                >
                    CLOSE FAQ
                </button>
            </div>
          </div>
        </div>

        <div className="text-[10px] tracking-wide opacity-60">
          © 2024 NORDIC ROAST. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};