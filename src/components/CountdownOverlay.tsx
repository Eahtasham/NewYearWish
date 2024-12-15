import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles } from 'lucide-react';

interface CountdownOverlayProps {
  onComplete: () => void;
  displayDuration?: number;
  actualDuration?: number;
  message?: string;
}

export const CountdownOverlay: React.FC<CountdownOverlayProps> = ({
  onComplete,
  displayDuration = 5,
  actualDuration = 7.5,
  message = "Preparing your magical wish..."
}) => {
  const [count, setCount] = useState(displayDuration);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const displayInterval = displayDuration * 1000 / displayDuration;
    const actualInterval = actualDuration * 1000 / displayDuration;
    
    const countdownInterval = setInterval(() => {
      setCount((prev) => Math.max(0, prev - 1));
    }, displayInterval);

    const completionTimer = setTimeout(() => {
      setHidden(true);
      setTimeout(onComplete, 500);
    }, actualDuration * 1000);

    return () => {
      clearInterval(countdownInterval);
      clearTimeout(completionTimer);
    };
  }, [displayDuration, actualDuration, onComplete]);

  return (
    <AnimatePresence>
      {!hidden && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 pointer-events-none flex items-center justify-center"
        >
          <motion.div
            className="bg-black/40 backdrop-blur-lg p-8 rounded-2xl transform-gpu"
            initial={{ scale: 0.5, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.5, y: 20 }}
          >
            <motion.div
              animate={{ 
                rotate: 360,
                scale: [1, 1.2, 1]
              }}
              transition={{ 
                rotate: { duration: 2, repeat: Infinity, ease: "linear" },
                scale: { duration: 1, repeat: Infinity }
              }}
              className="flex justify-center"
            >
              <Sparkles className="w-16 h-16 text-yellow-400" />
            </motion.div>
            <div className="text-7xl font-bold text-white mb-4 text-center">
              {count}
            </div>
            <p className="text-xl text-white/80 text-center">{message}</p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};