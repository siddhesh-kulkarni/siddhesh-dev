import { motion } from 'framer-motion';
import { useScrollProgress } from '@/hooks/useScrollProgress';

export default function ScrollProgress(): JSX.Element {
  const progress = useScrollProgress();

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 z-nav h-0.5 bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500 origin-left"
      style={{ scaleX: progress / 100 }}
      initial={{ scaleX: 0 }}
      aria-hidden="true"
    />
  );
}
