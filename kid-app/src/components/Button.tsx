import React from 'react';
import { ArrowRight } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  fullWidth?: boolean;
  shadow?: boolean;
  variant?: 'primary' | 'secondary';
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  fullWidth = false, 
  shadow = true, 
  variant = 'primary',
  className = '',
  ...props 
}) => {
  const baseStyle = "font-bold py-4 px-8 rounded-full transition-all duration-200 flex items-center justify-center gap-2 text-lg md:text-xl transform active:scale-95";
  const widthStyle = fullWidth ? "w-full" : "";
  const shadowStyle = shadow ? "shadow-[0_6px_0_rgb(0,0,0,0.2)] active:shadow-[0_2px_0_rgb(0,0,0,0.2)] active:translate-y-[4px]" : "";
  
  const variants = {
    primary: "bg-gradient-to-r from-brand-yellow to-orange-400 text-gray-900 border-2 border-white/30",
    secondary: "bg-white text-brand-blue border-2 border-brand-blue",
  };

  return (
    <button 
      className={`${baseStyle} ${widthStyle} ${shadowStyle} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
      <ArrowRight className="w-6 h-6" />
    </button>
  );
};