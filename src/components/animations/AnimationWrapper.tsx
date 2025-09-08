import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface AnimationWrapperProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  type?: 'fadeIn' | 'slideUp' | 'slideLeft' | 'slideRight' | 'scale' | 'stagger';
}

const animations = {
  fadeIn: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 0.6, ease: 'easeOut' }
  },
  slideUp: {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: 'easeOut' }
  },
  slideLeft: {
    initial: { opacity: 0, x: 60 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.6, ease: 'easeOut' }
  },
  slideRight: {
    initial: { opacity: 0, x: -60 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.6, ease: 'easeOut' }
  },
  scale: {
    initial: { opacity: 0, scale: 0.8 },
    animate: { opacity: 1, scale: 1 },
    transition: { duration: 0.6, ease: 'easeOut' }
  }
};

const AnimationWrapper = ({ 
  children, 
  className = '', 
  delay = 0, 
  duration, 
  type = 'fadeIn' 
}: AnimationWrapperProps) => {
  const animation = animations[type];
  
  const customTransition = {
    ...animation.transition,
    delay,
    ...(duration && { duration })
  };

  return (
    <motion.div
      className={className}
      initial={animation.initial}
      whileInView={animation.animate}
      viewport={{ once: true, margin: '-100px' }}
      transition={customTransition}
    >
      {children}
    </motion.div>
  );
};

export default AnimationWrapper;