import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Sparkles, Send } from 'lucide-react';
import { CountdownOverlay } from '../components/CountdownOverlay';
import { encodeWishParams } from '../utils/urlParams';
import { AdSpaces } from '../components/AdSpaces';
import { handleNavigation } from '../utils/navigation';

export const CreateWish = () => {
  const navigate = useNavigate();
  const [showCountdown, setShowCountdown] = useState(false);
  const [formData, setFormData] = useState({
    from: '',
    message: 'Wishing you a spectacular New Year filled with endless possibilities, joy, and success! May 2024 bring you everything your heart desires. 🎉✨'
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowCountdown(true);
  };

  const handleCountdownComplete = () => {
    const params = encodeWishParams(formData.from, formData.message);
    handleNavigation(navigate, `/wish?${params}`);
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-6 relative overflow-hidden">
      <AdSpaces />
      
      {showCountdown && (
        <CountdownOverlay 
          onComplete={handleCountdownComplete}
          message="Creating your personalized wish..."
        />
      )}

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-2xl bg-black/40 backdrop-blur-lg p-8 rounded-2xl shadow-xl relative z-10"
      >
        <div className="flex items-center justify-center mb-8">
          <Sparkles className="text-yellow-400 w-8 h-8 mr-2" />
          <h2 className="text-3xl font-bold text-white">Create Your Wish</h2>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-white mb-2">Your Name</label>
            <input
              type="text"
              value={formData.from}
              onChange={(e) => setFormData({ ...formData, from: e.target.value })}
              className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              required
            />
          </div>

          <div>
            <label className="block text-white mb-2">Your Message</label>
            <textarea
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-yellow-400 h-40"
              required
            />
          </div>

          <motion.button
            type="submit"
            className="w-full bg-gradient-to-r from-yellow-400 to-orange-500 text-white py-4 rounded-lg font-semibold flex items-center justify-center space-x-2 hover:from-yellow-500 hover:to-orange-600 transition-all"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Send className="w-5 h-5" />
            <span>Create & Share Wish</span>
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
};