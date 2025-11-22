import React from 'react';

interface SectionTitleProps {
  children: React.ReactNode;
  color?: 'blue' | 'pink' | 'purple';
}

export const SectionTitle: React.FC<SectionTitleProps> = ({ children, color = 'blue' }) => {
  const colorClasses = {
    blue: 'text-brand-blue border-brand-blue',
    pink: 'text-brand-pink border-brand-pink',
    purple: 'text-brand-purple border-brand-purple',
  };

  return (
    <h2 className={`text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12 relative inline-block mx-auto px-4`}>
      <span className={`relative z-10 ${colorClasses[color]}`}>{children}</span>
      <span className={`absolute bottom-1 left-0 w-full h-3 bg-yellow-200 -z-0 opacity-60 transform -rotate-1 rounded-full`}></span>
    </h2>
  );
};