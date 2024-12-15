import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Star, PartyPopper } from 'lucide-react';

export const FloatingElements = () => {
  const elements = [
    { Icon: Sparkles, color: 'text-yellow-400' },
    { Icon: Star, color: 'text-pink-400' },
    { Icon: PartyPopper, color: 'text-purple-400' }
  ];

  return (
    <div className="fixed inset-0 pointer-events-none">
      {elements.map((Element, index) => (
        Array.from({ length: 5 }).map((_, i) => (
          <motion.div
            key={`${index}-${i}`}
            className={`absolute ${Element.color}`}
            initial={{ 
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight
            }}
            animate={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              rotate: [0, 360]
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            <Element.Icon size={20 + Math.random() * 20} />
          </motion.div>
        ))
      ))}
    </div>
  );
};