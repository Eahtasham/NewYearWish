import React, { useEffect, useRef } from 'react';
import confetti from 'canvas-confetti';

export const Fireworks = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const createFirework = () => {
    if (!containerRef.current) return;
    
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.random();
    const y = Math.random() * 0.5;

    confetti({
      particleCount: 100,
      spread: 70,
      origin: { x, y },
      colors: ['#FFD700', '#FF0000', '#00FF00', '#0000FF', '#FF00FF'],
      disableForReducedMotion: true,
      useWorker: true
    });
  };

  useEffect(() => {
    // Initial fireworks
    const timeout = setTimeout(() => {
      createFirework();
    }, 500);

    // Continuous fireworks
    const interval = setInterval(() => {
      createFirework();
    }, 2500);

    return () => {
      clearTimeout(timeout);
      clearInterval(interval);
    };
  }, []);

  return (
    <div 
      ref={containerRef}
      className="fixed inset-0 pointer-events-none z-50"
      style={{ perspective: '1000px' }}
    />
  );
};