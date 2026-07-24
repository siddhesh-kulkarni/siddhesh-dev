import { type Variants } from 'framer-motion';

export const easeOutExpo = [0.16, 1, 0.3, 1] as const;
export const easeInExpo = [0.7, 0, 0.84, 0] as const;
export const easeInOutExpo = [0.87, 0, 0.13, 1] as const;
export const spring = { type: 'spring', stiffness: 200, damping: 20 } as const;

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: easeOutExpo },
  },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.6, ease: easeOutExpo } },
};

export const fadeInLeft: Variants = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: easeOutExpo },
  },
};

export const fadeInRight: Variants = {
  hidden: { opacity: 0, x: 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: easeOutExpo },
  },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: easeOutExpo },
  },
};

export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

export const staggerContainerFast: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.04,
    },
  },
};

export const textReveal: Variants = {
  hidden: { y: '100%' },
  visible: {
    y: '0%',
    transition: { duration: 0.8, ease: easeOutExpo },
  },
};

export const viewportOnce = { once: true, margin: '-80px' } as const;
