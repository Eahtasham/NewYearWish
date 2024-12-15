import { useEffect } from 'react';
import { useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export const useScrollAnimation = (threshold = 0.2, delay = 0) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold });

  useEffect(() => {
    if (inView) {
      controls.start({
        y: 0,
        opacity: 1,
        scale: [1, 1.2, 1],
        transition: { delay, duration: 0.5 }
      });
    }
  }, [controls, inView, delay]);

  return { ref, controls };
};