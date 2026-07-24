import { motion } from 'framer-motion';
import type { ReactNode } from 'react';
import { fadeUp, staggerContainer, viewportOnce } from '@/utils/animations';

interface SectionWrapperProps {
  id: string;
  children: ReactNode;
  className?: string;
}

export default function SectionWrapper({
  id,
  children,
  className = '',
}: SectionWrapperProps): JSX.Element {
  return (
    <section
      id={id}
      className={`section-padding relative ${className}`}
    >
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="container-custom"
      >
        {children}
      </motion.div>
    </section>
  );
}

interface SectionHeadingProps {
  label: string;
  title: string;
  description?: string;
}

export function SectionHeading({
  label,
  title,
  description,
}: SectionHeadingProps): JSX.Element {
  return (
    <div className="mb-16 max-w-2xl">
      <motion.div variants={fadeUp} className="flex items-center gap-3 mb-4">
        <span className="h-px w-8 bg-cyan-400/50" />
        <span className="text-xs font-mono uppercase tracking-[0.2em] text-cyan-400">
          {label}
        </span>
      </motion.div>
      <motion.h2
        variants={fadeUp}
        className="text-display-sm font-semibold text-text-primary mb-4"
      >
        {title}
      </motion.h2>
      {description && (
        <motion.p variants={fadeUp} className="text-lg text-text-secondary leading-relaxed">
          {description}
        </motion.p>
      )}
    </div>
  );
}
