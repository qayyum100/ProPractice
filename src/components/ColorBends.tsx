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
  rotation = 90,
  fadeTop = 0.75,
  intensity = 1.3,
  className = '',
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId: number;
    let time = 0;
    let lastRender = 0;
    // Throttle to ~20fps on mobile, ~30fps on desktop for huge perf gain
    const isMobile = window.innerWidth < 768;
    const FPS_LIMIT = isMobile ? 20 : 30;
    const FRAME_INTERVAL = 1000 / FPS_LIMIT;

    const resize = () => {
      // Render at half resolution for performance, CSS scales it up
      const dpr = Math.min(window.devicePixelRatio || 1, 1);
      canvas.width = Math.round(window.innerWidth * dpr);
      canvas.height = Math.round(window.innerHeight * dpr);
    };
    resize();

    const render = (timestamp: number) => {
      animationId = requestAnimationFrame(render);

      // Throttle framerate
      if (timestamp - lastRender < FRAME_INTERVAL) return;
      lastRender = timestamp;

      time += speed * 0.05;

      const width = canvas.width;
      const height = canvas.height;
      const rad = rotation * (Math.PI / 180);

      // Clear with opaque background instead of accumulating
      ctx.clearRect(0, 0, width, height);

      const gradient = ctx.createLinearGradient(
        0, 0,
        Math.cos(rad) * width,
        Math.sin(rad) * height
      );

      gradient.addColorStop(0, '#0a0a0c');
      const offset = (Math.sin(time * frequency) + 1) / 2;
      gradient.addColorStop(Math.max(0.01, Math.min(0.99, offset)), color);
      gradient.addColorStop(1, '#0a0a0c');

      ctx.globalAlpha = Math.min(intensity / 2, 0.65);
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);

      // Fade-top gradient overlay — CSS-based, no JS loop needed
    };

    animationId = requestAnimationFrame(render);

    let resizeTimer: ReturnType<typeof setTimeout>;
    const handleResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(resize, 150);
    };
    window.addEventListener('resize', handleResize, { passive: true });

    return () => {
      cancelAnimationFrame(animationId);
      clearTimeout(resizeTimer);
      window.removeEventListener('resize', handleResize);
    };
  }, [color, speed, frequency, rotation, intensity]);

  return (
    <div
      className={`fixed inset-0 z-[-1] pointer-events-none overflow-hidden ${className}`}
    >
      <canvas
        ref={canvasRef}
        className="w-full h-full"
        style={{ opacity: 0.55 }}
      />
      {/* CSS fade-top mask — no JS cost */}
      <div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(to bottom, transparent ${Math.round(fadeTop * 100)}%, #0a0a0c 100%)`
        }}
      />
    </div>
  );
};
