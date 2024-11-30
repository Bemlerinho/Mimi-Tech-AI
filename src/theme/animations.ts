import { Variants } from 'framer-motion';

export const AnimationVariants = {
  // Basic animations
  fadeIn: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
    transition: { duration: 0.3 }
  } as Variants,

  // Enhanced slide animations
  slideUp: {
    initial: { y: 20, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    exit: { y: -20, opacity: 0 },
    transition: { duration: 0.4, ease: 'easeOut' }
  } as Variants,

  slideDown: {
    initial: { y: -20, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    exit: { y: 20, opacity: 0 },
    transition: { duration: 0.4, ease: 'easeOut' }
  } as Variants,

  slideIn: {
    initial: { x: -20, opacity: 0 },
    animate: { x: 0, opacity: 1 },
    exit: { x: 20, opacity: 0 },
    transition: { duration: 0.4, ease: 'easeInOut' }
  } as Variants,

  // Scale animations
  scale: {
    initial: { scale: 0.9, opacity: 0 },
    animate: { scale: 1, opacity: 1 },
    exit: { scale: 0.9, opacity: 0 },
    transition: { duration: 0.3 }
  } as Variants,

  // Stagger animations
  stagger: {
    container: {
      animate: { transition: { staggerChildren: 0.1 } }
    } as Variants,
    item: {
      initial: { y: 20, opacity: 0 },
      animate: { y: 0, opacity: 1 },
      exit: { y: 20, opacity: 0 },
      transition: { duration: 0.3 }
    } as Variants
  },

  // Advanced hover animations
  hover: {
    scale: {
      scale: 1.05,
      transition: { duration: 0.2 }
    } as Variants,
    lift: {
      y: -5,
      transition: { duration: 0.2 }
    } as Variants,
    glow: {
      boxShadow: '0 0 8px rgba(60, 170, 255, 0.6)',
      transition: { duration: 0.2 }
    } as Variants,
    tilt: {
      rotate: 2,
      scale: 1.02,
      transition: { duration: 0.2 }
    } as Variants,
    pulse: {
      scale: [1, 1.05, 1],
      transition: { duration: 0.4, times: [0, 0.5, 1], repeat: Infinity }
    } as Variants
  },

  // Page transitions
  page: {
    fadeSlide: {
      initial: { opacity: 0, x: -20 },
      animate: { opacity: 1, x: 0 },
      exit: { opacity: 0, x: 20 },
      transition: { duration: 0.4, ease: 'easeInOut' }
    } as Variants,
    scale: {
      initial: { opacity: 0, scale: 0.95 },
      animate: { opacity: 1, scale: 1 },
      exit: { opacity: 0, scale: 1.05 },
      transition: { duration: 0.4 }
    } as Variants,
    flip: {
      initial: { opacity: 0, rotateX: -15 },
      animate: { opacity: 1, rotateX: 0 },
      exit: { opacity: 0, rotateX: 15 },
      transition: { duration: 0.5, ease: 'easeInOut' }
    } as Variants
  },

  // List animations
  list: {
    container: {
      animate: { transition: { staggerChildren: 0.05 } }
    } as Variants,
    item: {
      initial: { x: -20, opacity: 0 },
      animate: { x: 0, opacity: 1 },
      exit: { x: -20, opacity: 0 },
      transition: { duration: 0.2 }
    } as Variants,
    grid: {
      container: {
        animate: { transition: { staggerChildren: 0.05, delayChildren: 0.2 } }
      } as Variants,
      item: {
        initial: { scale: 0.8, opacity: 0 },
        animate: { scale: 1, opacity: 1 },
        exit: { scale: 0.8, opacity: 0 },
        transition: { duration: 0.3 }
      } as Variants
    }
  },

  // Modal/Dialog animations
  modal: {
    overlay: {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      exit: { opacity: 0 },
      transition: { duration: 0.3 }
    } as Variants,
    content: {
      initial: { opacity: 0, scale: 0.95, y: 20 },
      animate: { opacity: 1, scale: 1, y: 0 },
      exit: { opacity: 0, scale: 0.95, y: 20 },
      transition: { duration: 0.3, ease: 'easeOut' }
    } as Variants,
    slideIn: {
      initial: { opacity: 0, x: '100%' },
      animate: { opacity: 1, x: 0 },
      exit: { opacity: 0, x: '100%' },
      transition: { duration: 0.3, ease: 'easeInOut' }
    } as Variants
  },

  // Loading animations
  loading: {
    dots: {
      animate: {
        scale: [1, 1.2, 1],
        transition: { duration: 0.6, repeat: Infinity }
      }
    } as Variants,
    pulse: {
      animate: {
        scale: [1, 1.1, 1],
        opacity: [0.5, 1, 0.5],
        transition: { duration: 1, repeat: Infinity }
      }
    } as Variants,
    spin: {
      animate: {
        rotate: 360,
        transition: { duration: 1, repeat: Infinity, ease: 'linear' }
      }
    } as Variants
  },

  // Text animations
  text: {
    fadeIn: {
      initial: { opacity: 0, y: 10 },
      animate: { opacity: 1, y: 0 },
      transition: { duration: 0.3 }
    } as Variants,
    highlight: {
      initial: { backgroundColor: 'transparent' },
      animate: { backgroundColor: 'rgba(60, 170, 255, 0.2)' },
      transition: { duration: 0.3 }
    } as Variants,
    wave: {
      animate: {
        y: [0, -5, 0],
        transition: { duration: 0.6, repeat: Infinity }
      }
    } as Variants
  }
};
