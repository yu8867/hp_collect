import React, { useEffect, useRef } from 'react';

export const AmbientParticles: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Particle[] = [];

    // Canvas resize handling
    const resize = () => {
      // Use window inner dimensions for full screen coverage
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles();
    };

    class Particle {
      x: number;
      y: number;
      size: number;
      speedY: number;
      opacity: number;
      fadeSpeed: number;
      fadeDirection: number; // 1 for in, -1 for out

      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        // NieR style: square particles, varying small sizes
        this.size = Math.random() < 0.1 ? Math.random() * 3 + 2 : Math.random() * 2 + 1; 
        // Upward drift mostly
        this.speedY = Math.random() * 0.3 + 0.1;
        this.opacity = Math.random() * 0.5;
        this.fadeSpeed = Math.random() * 0.005 + 0.002;
        this.fadeDirection = Math.random() > 0.5 ? 1 : -1;
      }

      update() {
        this.y -= this.speedY;
        
        // Loop around vertically
        if (this.y < -this.size) {
          this.y = canvas.height + this.size;
          this.x = Math.random() * canvas.width;
        }

        // Pulse opacity
        this.opacity += this.fadeSpeed * this.fadeDirection;
        if (this.opacity >= 0.4 || this.opacity <= 0.05) {
          this.fadeDirection *= -1;
        }
      }

      draw() {
        if (!ctx) return;
        ctx.fillStyle = `rgba(218, 212, 187, ${this.opacity})`; // #dad4bb
        ctx.fillRect(this.x, this.y, this.size, this.size);
      }
    }

    const initParticles = () => {
      if (!canvas) return;
      particles = [];
      // Calculate density based on screen size
      const particleCount = Math.floor((window.innerWidth * window.innerHeight) / 12000);
      
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
      }
    };

    const animate = () => {
      if (!ctx || !canvas) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach(p => {
        p.update();
        p.draw();
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    window.addEventListener('resize', resize);
    resize(); // Initial setup
    animate();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="fixed inset-0 pointer-events-none z-0 opacity-60"
      style={{ mixBlendMode: 'screen' }}
    />
  );
};