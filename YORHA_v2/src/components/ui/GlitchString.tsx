import React, { useEffect, useState } from 'react';

interface GlitchStringProps {
  text: string;
  as?: 'h1' | 'h2' | 'h3' | 'p' | 'span' | 'div';
  className?: string;
  scrambleSpeed?: number;
  probability?: number; // 0 to 1
}

const CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789-._';

export const GlitchString: React.FC<GlitchStringProps> = ({ 
  text, 
  as: Component = 'span', 
  className = '',
  scrambleSpeed = 50,
  probability = 0.05
}) => {
  const [displayText, setDisplayText] = useState(text);

  useEffect(() => {
    let interval: ReturnType<typeof setInterval>;

    const scramble = () => {
      const splitText = text.split('');
      const scrambled = splitText.map((char, index) => {
        if (char === ' ') return ' ';
        if (Math.random() < probability) {
          return CHARS[Math.floor(Math.random() * CHARS.length)];
        }
        return char;
      });
      setDisplayText(scrambled.join(''));
    };

    interval = setInterval(scramble, scrambleSpeed);

    // Restore text periodically to ensure readability
    const restoreInterval = setInterval(() => {
        setDisplayText(text);
    }, scrambleSpeed * 10);

    return () => {
      clearInterval(interval);
      clearInterval(restoreInterval);
    };
  }, [text, scrambleSpeed, probability]);

  return (
    <Component className={`${className}`}>
      {displayText}
    </Component>
  );
};