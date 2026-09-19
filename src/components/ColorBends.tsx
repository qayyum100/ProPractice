import React, { useEffect, useRef } from 'react';

export interface ColorBendsProps {
  color?: string;
  speed?: number;
  frequency?: number;
  noise?: number;
  bandWidth?: number;
  rotation?: number;
  fadeTop?: number;
  iterations?: number;
  intensity?: number;
  className?: string;
}

export const ColorBends: React.FC<ColorBendsProps> = ({
  color = '#A855F7',
  speed = 0.2,
  frequency = 1.0,
  noise = 0.15,
  bandWidth = 0.13,
  rotation = 90,
  fadeTop = 0.75,
  iterations = 1,
  intensity = 1.3,
  className = '',
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // A basic mock implementation to simulate a fluid gradient background 
  // since the real WebGL shader source from React Bits was unavailable.
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    let animationId: number;
    let time = 0;
    
    const render = () => {
      time += speed * 0.05;
      
      const width = canvas.width = window.innerWidth;
      const height = canvas.height = window.innerHeight;
      
      // Simulate gradient bends
      const gradient = ctx.createLinearGradient(
        0, 
        0, 
        Math.cos(rotation * (Math.PI / 180)) * width, 
        Math.sin(rotation * (Math.PI / 180)) * height
      );
      
      gradient.addColorStop(0, '#0a0a0c'); // Dark background
      
      // Add the highlight color moving based on time
      const offset = (Math.sin(time * frequency) + 1) / 2;
      gradient.addColorStop(offset, color);
      
      gradient.addColorStop(1, '#0a0a0c');
      
      ctx.fillStyle = gradient;
      ctx.globalAlpha = intensity / 2;
      ctx.fillRect(0, 0, width, height);
      
      // Add a simple grain/noise layer if requested
      if (noise > 0) {
        ctx.fillStyle = 'rgba(255, 255, 255, 0.02)';
        for (let i = 0; i < height; i += 4) {
          for (let j = 0; j < width; j += 4) {
            if (Math.random() < noise) {
              ctx.fillRect(j, i, 2, 2);
            }
          }
        }
      }
      
      animationId = requestAnimationFrame(render);
    };
    
    render();
    
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    window.addEventListener('resize', handleResize);
    
    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', handleResize);
    };
  }, [color, speed, frequency, noise, rotation, intensity]);

  return (
    <div 
      className={`fixed inset-0 z-[-1] pointer-events-none overflow-hidden ${className}`}
      style={{
        opacity: 1 - fadeTop * 0.2 // basic fade approximation
      }}
    >
      <canvas 
        ref={canvasRef} 
        className="w-full h-full opacity-60"
      />
      {/* Fallback gradient if canvas fails */}
      <div 
        className="absolute inset-0 z-[-2] mix-blend-screen opacity-50"
        style={{
          background: `radial-gradient(circle at 50% 50%, ${color}20 0%, transparent 70%)`
        }}
      />
    </div>
  );
};
