import React from 'react';
import { motion } from 'framer-motion';
import { Copy, Facebook, Twitter, MessageCircle } from 'lucide-react';

interface ShareBoxProps {
  url: string;
  onCopy: () => void;
  copied: boolean;
}

export const ShareBox: React.FC<ShareBoxProps> = ({ url, onCopy, copied }) => {
  const fullUrl = typeof window !== 'undefined' 
    ? `${window.location.origin}${window.location.pathname}${window.location.search}`
    : url;

  const shareLinks = {
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(fullUrl)}`,
    twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(fullUrl)}&text=${encodeURIComponent('Check out my New Year Wish!')}`,
    whatsapp: `https://wa.me/?text=${encodeURIComponent('Check out my New Year Wish! ' + fullUrl)}`
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="mt-8 w-full max-w-xl mx-auto"
    >
      <div className="bg-black/40 backdrop-blur-lg rounded-2xl p-6 shadow-xl">
        <div className="flex items-center space-x-2 mb-4 bg-white/10 rounded-lg p-3">
          <div className="flex-1 overflow-hidden">
            <p className="text-white/90 text-sm truncate">{fullUrl}</p>
          </div>
          <motion.button
            onClick={() => {
              navigator.clipboard.writeText(fullUrl);
              onCopy();
            }}
            className="bg-white/10 hover:bg-white/20 text-white px-3 py-1 rounded-full text-sm flex items-center space-x-1 transition-colors shrink-0"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Copy className="w-4 h-4" />
            <span className="md:inline hidden">{copied ? 'Copied!' : 'Copy'}</span>
          </motion.button>
        </div>

        <div className="grid grid-cols-3 gap-3">
          <motion.a
            href={shareLinks.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#1877F2] hover:bg-[#1877F2]/80 text-white px-4 py-2 rounded-lg flex items-center justify-center space-x-2 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Facebook className="w-5 h-5" />
            <span className="md:inline hidden">Share</span>
          </motion.a>

          <motion.a
            href={shareLinks.twitter}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#1DA1F2] hover:bg-[#1DA1F2]/80 text-white px-4 py-2 rounded-lg flex items-center justify-center space-x-2 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Twitter className="w-5 h-5" />
            <span className="md:inline hidden">Tweet</span>
          </motion.a>

          <motion.a
            href={shareLinks.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#25D366] hover:bg-[#25D366]/80 text-white px-4 py-2 rounded-lg flex items-center justify-center space-x-2 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <MessageCircle className="w-5 h-5" />
            <span className="md:inline hidden">Send</span>
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
};