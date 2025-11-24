import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  children, 
  className = '',
  ...props 
}) => {
  const baseStyles = "inline-block px-8 py-3 text-sm tracking-widest border transition-all duration-500 ease-out rounded-sm";
  const variants = {
    primary: "border-stone-400 text-stone-700 hover:bg-stone-100 hover:border-stone-500 hover:shadow-sm",
    secondary: "border-transparent text-stone-500 hover:text-stone-800 underline underline-offset-4 decoration-stone-300"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};