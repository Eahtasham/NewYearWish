import React from 'react';
import { motion } from 'framer-motion';

interface CelebrationTextProps {
  name?: string;
}

export const CelebrationText: React.FC<CelebrationTextProps> = ({ name }) => {
  const defaultText = [
    { text: "Happy", color: "text-yellow-400" },
    { text: "New", color: "text-pink-400" },
    { text: "Year", color: "text-purple-400" },
    { text: "2025!", color: "text-blue-400" }
  ];

  return (
    <motion.div
      className="text-center"
      initial={{ scale: 0.5, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="flex flex-wrap justify-center gap-4 text-5xl md:text-7xl font-bold mb-8">
        {defaultText.map((item, index) => (
          <motion.span
            key={index}
            className={item.color}
            initial={{ y: -50 }}
            animate={{ y: 0 }}
            transition={{ delay: index * 0.1, type: "spring" }}
          >
            {item.text}
          </motion.span>
        ))}
      </div>
      
      {name && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-4 flex flex-wrap justify-center gap-4 text-3xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-teal-700 to-teal-300 bg-clip-text text-transparent"
        >
          - Wishes from {name}
        </motion.div>
      )}
    </motion.div>
  );
};