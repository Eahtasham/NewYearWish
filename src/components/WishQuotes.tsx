import React from 'react';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const quotes = [
  "May the coming year be filled with magic and dreams and good madness.",
  "Here's to the bright New Year and a fond farewell to the old.",
  "Tomorrow is the first blank page of a 365-page book. Write a good one.",
  "New year—a new chapter, new verse, or just the same old story?",
  "Life is change. Growth is optional. Choose wisely."
];

export const WishQuotes = () => {
  return (
    <div className="py-16 px-6">
      <div className="max-w-4xl mx-auto">
        {quotes.map((quote, index) => {
          const { ref, controls } = useScrollAnimation(0.2, index * 0.2);
          
          return (
            <motion.div
              key={index}
              ref={ref}
              initial={{ x: index % 2 === 0 ? -50 : 50, opacity: 0 }}
              animate={controls}
              className="mb-8 last:mb-0"
            >
              <div className="bg-white/10 backdrop-blur-lg p-6 rounded-xl">
                <p className="text-lg md:text-xl text-white/90 italic text-center">
                  "{quote}"
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};