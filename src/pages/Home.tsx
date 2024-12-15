import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CelebrationText } from '../components/CelebrationText';
import { CountdownOverlay } from '../components/CountdownOverlay';
import { AdSpaces } from '../components/AdSpaces';
import { handleNavigation } from '../utils/navigation';

export const Home = () => {
  const navigate = useNavigate();
  const [showCountdown, setShowCountdown] = useState(false);

  const handleCreateClick = () => {
    setShowCountdown(true);
  };

  const handleCountdownComplete = () => {
    handleNavigation(navigate, '/create');
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6">
      <AdSpaces />
      
      {showCountdown && (
        <CountdownOverlay 
          onComplete={handleCountdownComplete}
          message="Preparing your magical wish..."
        />
      )}

      <div className="relative w-full max-w-4xl mx-auto text-center">
        <CelebrationText />
        
        <motion.p
          className="text-xl md:text-2xl text-white/90 mt-8 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          Create and share personalized New Year wishes with your loved ones
        </motion.p>

        <motion.button
          onClick={handleCreateClick}
          className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:from-yellow-500 hover:to-orange-600 transition-all"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Create Your Wish
        </motion.button>
      </div>
    </div>
  );
};