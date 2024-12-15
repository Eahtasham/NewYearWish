import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

export const Hero = () => {
  return (
    <motion.section 
      className="min-h-screen relative flex items-center justify-center overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1467810563316-b5476525c0f9?auto=format&fit=crop&q=80&w=1000')] bg-cover bg-center">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/70 via-purple-900/70 to-pink-900/70 backdrop-blur-sm" />
      </div>
      
      <div className="relative z-10 text-center p-6">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="flex items-center justify-center mb-6"
        >
          <Sparkles className="text-yellow-400 w-12 h-12 animate-pulse" />
        </motion.div>
        
        <motion.h1
          className="text-6xl md:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-500 mb-6"
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          2024
        </motion.h1>
        
        <motion.p
          className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          Celebrate the New Year with a personalized message to your loved ones
        </motion.p>
      </div>
      
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ delay: 2, duration: 1.5, repeat: Infinity }}
      >
        <p className="text-white/70 text-sm">Scroll to create your wish</p>
      </motion.div>
    </motion.section>
  );
};