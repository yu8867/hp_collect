import React from 'react';

export const Separator: React.FC<{ vertical?: boolean; className?: string }> = ({ vertical, className = '' }) => {
  if (vertical) {
    return (
      <div className={`w-px bg-yorha-darkBeige/40 h-full flex flex-col items-center gap-1 ${className}`}>
        <div className="w-1 h-1 bg-yorha-beige/60 mb-1" />
        <div className="w-[1px] flex-grow bg-yorha-darkBeige/40" />
      </div>
    );
  }
  return (
    <div className={`h-px w-full bg-yorha-darkBeige/40 flex items-center justify-center gap-4 ${className}`}>
      <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-yorha-darkBeige to-transparent" />
      <div className="w-1.5 h-1.5 rotate-45 border border-yorha-beige flex-shrink-0" />
      <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-yorha-darkBeige to-transparent" />
    </div>
  );
};

export const CornerBracket: React.FC<{ position: 'tl' | 'tr' | 'bl' | 'br'; className?: string }> = ({ position, className = '' }) => {
  const style = {
    tl: 'top-0 left-0 border-t border-l',
    tr: 'top-0 right-0 border-t border-r',
    bl: 'bottom-0 left-0 border-b border-l',
    br: 'bottom-0 right-0 border-b border-r',
  };

  return (
    <div className={`absolute w-4 h-4 border-yorha-beige/60 ${style[position]} ${className}`} />
  );
};

export const DecorSquare: React.FC<{ className?: string }> = ({ className }) => (
  <div className={`w-2 h-2 bg-yorha-darkBeige/50 ${className}`} />
);

export const LoadingBar: React.FC<{ progress?: number; className?: string }> = ({ progress = 100, className = '' }) => (
  <div className={`w-full h-1 bg-yorha-darkBeige/20 mt-2 overflow-hidden relative ${className}`}>
    <div 
      className="h-full bg-yorha-beige/80 absolute top-0 left-0" 
      style={{ width: `${progress}%`, transition: 'width 0.5s ease-out' }}
    />
    {/* Striped overlay */}
    <div className="absolute inset-0 w-full h-full" style={{ backgroundImage: 'linear-gradient(90deg, transparent 50%, #2a2a2a 50%)', backgroundSize: '4px 100%' }}></div>
  </div>
);

export const Hexagon: React.FC<{ className?: string, children?: React.ReactNode }> = ({ className = '', children }) => (
  <div className={`relative w-12 h-12 flex items-center justify-center ${className}`}>
    <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full fill-none stroke-yorha-beige stroke-[2]" style={{ opacity: 0.6 }}>
      <polygon points="50 1, 95 25, 95 75, 50 99, 5 75, 5 25" />
    </svg>
    <div className="relative z-10 text-xs font-mono">{children}</div>
  </div>
);

export const StatBar: React.FC<{ label: string; value: number }> = ({ label, value }) => (
  <div className="flex items-center gap-4 font-mono text-xs mb-2">
    <span className="w-16 text-yorha-darkBeige text-right">{label}</span>
    <div className="flex-grow h-2 bg-yorha-darkBeige/20 flex gap-[2px]">
       {Array.from({ length: 20 }).map((_, i) => (
         <div 
            key={i} 
            className={`flex-grow h-full ${i < (value / 5) ? 'bg-yorha-beige' : 'bg-transparent'}`} 
         />
       ))}
    </div>
    <span className="w-8 text-right">{value}%</span>
  </div>
);