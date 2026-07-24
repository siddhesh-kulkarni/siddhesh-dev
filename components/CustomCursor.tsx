import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { usePrefersReducedMotion } from '@/hooks/useMediaQuery';

export default function CustomCursor(): JSX.Element | null {
  const prefersReducedMotion = usePrefersReducedMotion();
  const [isVisible, setIsVisible] = useState(false);
  const [isPointer, setIsPointer] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 300, mass: 0.5 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    if (prefersReducedMotion || typeof window === 'undefined') return;
    if (window.matchMedia('(pointer: coarse)').matches) return;

    const handleMouseMove = (e: MouseEvent): void => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!isVisible) setIsVisible(true);

      const target = e.target as HTMLElement;
      const isInteractive =
        target.closest('a, button, [role="button"], input, textarea, select, [data-cursor="pointer"]') !== null;
      setIsPointer(isInteractive);
    };

    const handleMouseDown = (): void => setIsClicking(true);
    const handleMouseUp = (): void => setIsClicking(false);
    const handleMouseLeave = (): void => setIsVisible(false);
    const handleMouseEnter = (): void => setIsVisible(true);

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    document.documentElement.addEventListener('mouseleave', handleMouseLeave);
    document.documentElement.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      document.documentElement.removeEventListener('mouseleave', handleMouseLeave);
      document.documentElement.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [cursorX, cursorY, isVisible, prefersReducedMotion]);

  if (prefersReducedMotion) return null;

  // Don't render custom cursor on touch devices
  const isTouchDevice =
    typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches;
  if (isTouchDevice) return null;

  return (
    <>
      {/* Main dot */}
      <motion.div
        className="fixed top-0 left-0 z-cursor pointer-events-none"
        style={{
          x: cursorX,
          y: cursorY,
        }}
        animate={{ opacity: isVisible ? 1 : 0 }}
      >
        <motion.div
          className="rounded-full bg-cyan-400"
          animate={{
            width: isClicking ? 6 : 8,
            height: isClicking ? 6 : 8,
          }}
          style={{ marginLeft: -4, marginTop: -4 }}
        />
      </motion.div>

      {/* Outer ring */}
      <motion.div
        className="fixed top-0 left-0 z-cursor pointer-events-none"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
        }}
        animate={{ opacity: isVisible ? 1 : 0 }}
      >
        <motion.div
          className="rounded-full border border-cyan-400/40"
          animate={{
            width: isPointer ? 48 : 36,
            height: isPointer ? 48 : 36,
            scale: isClicking ? 0.8 : 1,
            borderColor: isPointer ? 'rgba(34,211,238,0.6)' : 'rgba(34,211,238,0.4)',
          }}
          transition={{ type: 'spring', stiffness: 200, damping: 20 }}
          style={{ marginLeft: -18, marginTop: -18 }}
        />
      </motion.div>
    </>
  );
}
