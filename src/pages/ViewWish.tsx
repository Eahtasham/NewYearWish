import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CelebrationText } from '../components/CelebrationText';
import { ShareBox } from '../components/ShareBox';
import { ScrollAnimations } from '../components/ScrollAnimations';
import { WishQuotes } from '../components/WishQuotes';
import { decodeWishParams, getShareableUrl } from '../utils/urlParams';
import { AdSpaces } from '../components/AdSpaces';
import { handleNavigation } from '../utils/navigation';
import { Sparkles } from 'lucide-react';

export const ViewWish = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [copied, setCopied] = useState(false);
  const [wish, setWish] = useState(() => {
    const wishData = decodeWishParams(location.search);
    if (!wishData || !wishData.name) {
      handleNavigation(navigate, '/');
      return null;
    }
    return wishData;
  });

  const handleCopyLink = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleCreateClick = () => {
    handleNavigation(navigate, '/create');
  };

  if (!wish) return null;

  const shareableUrl = getShareableUrl(
    `${window.location.origin}/wish`,
    wish.name,
    wish.message
  );

  return (
    <div className="min-h-screen relative overflow-x-hidden">
      <AdSpaces />
      
      <div className="flex flex-col items-center justify-center py-20 px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="w-full max-w-4xl relative z-10"
        >
          <CelebrationText name={wish.name} />
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-12 p-8 bg-black/40 backdrop-blur-lg rounded-2xl text-center shadow-xl"
          >
            <p className="text-xl text-white leading-relaxed whitespace-pre-wrap">
              {wish.message}
            </p>
          </motion.div>

          <motion.button
            onClick={handleCreateClick}
            className="bg-gradient-to-r from-yellow-400 to-orange-500 m-7 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:from-yellow-500 hover:to-orange-600 transition-all flex items-center justify-center space-x-2 mx-auto"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Sparkles className="w-5 h-5" />
            <span>Create Your Own Wish</span>
          </motion.button>

          <ShareBox 
            url={shareableUrl}
            onCopy={handleCopyLink}
            copied={copied}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="w-full max-w-6xl mt-20"
        >
          <ScrollAnimations />
          <WishQuotes />
        </motion.div>
      </div>
    </div>
  );
};