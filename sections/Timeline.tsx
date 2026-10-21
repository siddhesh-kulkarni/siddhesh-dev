import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Award } from 'lucide-react';
import SectionWrapper, { SectionHeading } from '@/components/SectionWrapper';
import { TIMELINE_EVENTS } from '@/constants';
import { fadeUp, staggerContainer, viewportOnce } from '@/utils/animations';
import type { TimelineEvent } from '@/types';

const ICON_MAP = {
  work: Briefcase,
  education: GraduationCap,
  achievement: Award,
} as const;

const COLOR_MAP = {
  work: 'text-cyan-400 bg-cyan-500/10',
  education: 'text-blue-400 bg-blue-500/10',
  achievement: 'text-violet-400 bg-violet-500/10',
} as const;

export default function Timeline(): JSX.Element {
  return (
    <SectionWrapper id="timeline">
      <SectionHeading
        label="Journey"
        title="The road so far"
        description="From electronics and computer science to SaaS, payments, and AI products in production."
      />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="relative max-w-3xl mx-auto"
      >
        {/* Center line */}
        <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-border to-transparent md:-translate-x-1/2" />

        <div className="space-y-12">
          {TIMELINE_EVENTS.map((event: TimelineEvent, i) => {
            const Icon = ICON_MAP[event.type];
            const colorClass = COLOR_MAP[event.type];
            const isLeft = i % 2 === 0;

            return (
              <motion.div
                key={event.id}
                variants={fadeUp}
                className={`relative flex items-center gap-6 ${
                  isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Icon */}
                <div className="relative z-10 flex-shrink-0 md:absolute md:left-1/2 md:-translate-x-1/2">
                  <div className={`flex items-center justify-center h-12 w-12 rounded-full glass gradient-border ${colorClass}`}>
                    <Icon className="w-5 h-5" />
                  </div>
                </div>

                {/* Content */}
                <div className={`flex-1 ${isLeft ? 'md:text-right md:pr-16' : 'md:pl-16'} pl-4 md:pl-0`}>
                  <div className="inline-block p-5 rounded-2xl glass glass-hover transition-all hover:-translate-y-1">
                    <span className="text-xs font-mono text-cyan-400">{event.year}</span>
                    <h3 className="font-display font-semibold text-text-primary mt-1 mb-1">
                      {event.title}
                    </h3>
                    <p className="text-text-secondary text-sm leading-relaxed">
                      {event.description}
                    </p>
                  </div>
                </div>

                {/* Spacer for alignment */}
                <div className="hidden md:block flex-1" />
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </SectionWrapper>
  );
}
