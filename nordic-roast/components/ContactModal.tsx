import React, { useEffect, useState } from 'react';
import { Button } from './Button';
import { FadeIn } from './FadeIn';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    if (isOpen) {
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
        <div className={`max-w-xl w-full mx-auto transition-all duration-1000 delay-300 ease-out transform ${showContent ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
          
          <div className="text-center mb-16">
            <span className="text-emerald-800 text-xs tracking-[0.2em] uppercase block mb-6">Contact Us</span>
            <h2 className="text-3xl md:text-4xl font-light tracking-widest text-stone-800 leading-relaxed">
              お手紙を<br />
              書くように。
            </h2>
          </div>

          <p className="text-center text-stone-500 mb-12 text-sm leading-loose font-light">
            コーヒーのこと、定期便のこと、<br/>
            日々の暮らしの中での小さな気づきなど。<br/>
            お気軽にお声がけください。
          </p>

          <form className="space-y-10" onSubmit={(e) => e.preventDefault()}>
            <div className="space-y-1">
              <label htmlFor="name" className="text-xs tracking-widest text-stone-400 block">NAME</label>
              <input 
                type="text" 
                id="name"
                className="w-full bg-transparent border-b border-stone-200 py-3 text-stone-800 focus:outline-none focus:border-stone-400 transition-colors font-light"
                placeholder="お名前"
              />
            </div>

            <div className="space-y-1">
              <label htmlFor="email" className="text-xs tracking-widest text-stone-400 block">EMAIL</label>
              <input 
                type="email" 
                id="email"
                className="w-full bg-transparent border-b border-stone-200 py-3 text-stone-800 focus:outline-none focus:border-stone-400 transition-colors font-light"
                placeholder="メールアドレス"
              />
            </div>

            <div className="space-y-1">
              <label htmlFor="message" className="text-xs tracking-widest text-stone-400 block">MESSAGE</label>
              <textarea 
                id="message"
                rows={5}
                className="w-full bg-transparent border-b border-stone-200 py-3 text-stone-800 focus:outline-none focus:border-stone-400 transition-colors resize-none font-light leading-relaxed"
                placeholder="メッセージをご記入ください"
              />
            </div>

            <div className="text-center pt-8">
              <Button type="submit" className="w-full md:w-auto min-w-[200px]">
                送信する
              </Button>
            </div>
          </form>

          <div className="mt-20 text-center">
            <Button onClick={onClose} variant="secondary">
              キャンセル
            </Button>
          </div>

        </div>
      </div>
    </div>
  );
};