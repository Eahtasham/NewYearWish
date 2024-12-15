import React from 'react';
import { motion } from 'framer-motion';
import { PartyPopper, Gift, Heart } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const AnimatedFeature = ({ icon: Icon, title, delay }: any) => {
  const { ref, controls } = useScrollAnimation(0.2, delay);

  return (
    <motion.div
      ref={ref}
      initial={{ y: 50, opacity: 0 }}
      animate={controls}
      className="flex flex-col items-center p-6 bg-white/10 backdrop-blur-lg rounded-xl"
    >
      <Icon className="w-12 h-12 text-yellow-400 mb-4" />
      <h3 className="text-xl font-semibold text-white">{title}</h3>
    </motion.div>
  );
};

export const ScrollAnimations = () => {
  return (
    <div className="py-20 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <AnimatedFeature icon={PartyPopper} title="Personalized Wishes" delay={0.2} />
        <AnimatedFeature icon={Gift} title="Beautiful Animations" delay={0.4} />
        <AnimatedFeature icon={Heart} title="Share with Love" delay={0.6} />
      </div>
    </div>
  );
};