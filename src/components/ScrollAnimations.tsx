import React from 'react';
import { motion } from 'framer-motion';
import { PartyPopper, Gift, Heart, Sparkles, Star } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const AnimatedFeature = ({ icon: Icon, title, description, delay }: any) => {
  const { ref, controls } = useScrollAnimation(0.2, delay);

  return (
    <motion.div
      ref={ref}
      initial={{ y: 50, opacity: 0 }}
      animate={controls}
      className="flex flex-col items-center p-6 bg-white/10 backdrop-blur-lg rounded-xl"
    >
      <Icon className="w-12 h-12 text-yellow-400 mb-4" />
      <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
      <p className="text-white/80 text-center">{description}</p>
    </motion.div>
  );
};

export const ScrollAnimations = () => {
  const features = [
    {
      icon: PartyPopper,
      title: "Celebrate Together",
      description: "Share the joy of new beginnings with your loved ones",
      delay: 0.2
    },
    {
      icon: Star,
      title: "Make Memories",
      description: "Create lasting memories with personalized wishes",
      delay: 0.4
    },
    {
      icon: Heart,
      title: "Spread Love",
      description: "Touch hearts with your heartfelt messages",
      delay: 0.6
    }
  ];

  return (
    <div className="py-20 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <AnimatedFeature key={index} {...feature} />
        ))}
      </div>
    </div>
  );
};