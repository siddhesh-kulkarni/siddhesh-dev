import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Calendar, ChevronRight } from 'lucide-react';
import SectionWrapper, { SectionHeading } from '@/components/SectionWrapper';
import { EXPERIENCES } from '@/constants';
import { fadeUp, easeOutExpo } from '@/utils/animations';
import type { Experience } from '@/types';

export default function Experience(): JSX.Element {
  const [activeId, setActiveId] = useState<string>(EXPERIENCES[0].id);
  const activeExperience = EXPERIENCES.find((exp) => exp.id === activeId) ?? EXPERIENCES[0];

  return (
    <SectionWrapper id="experience">
      <SectionHeading
        label="Experience"
        title="Where I've made an impact"
        description="A timeline of professional roles where I've shipped products, optimized systems, and grown as an engineer."
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Timeline list */}
        <div className="lg:col-span-4">
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-0 top-0 bottom-0 w-px bg-border" />

            <div className="space-y-1">
              {EXPERIENCES.map((exp: Experience) => {
                const isActive = exp.id === activeId;
                return (
                  <button
                    key={exp.id}
                    onClick={() => setActiveId(exp.id)}
                    className="relative w-full text-left pl-8 py-4 group transition-all"
                  >
                    {/* Dot */}
                    <span
                      className={`absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 h-3 w-3 rounded-full border-2 transition-all ${
                        isActive
                          ? 'bg-cyan-400 border-cyan-400 scale-125 shadow-glow-sm'
                          : 'bg-bg-primary border-text-muted group-hover:border-cyan-400/50'
                      }`}
                    />
                    {/* Horizontal connector */}
                    <span
                      className={`absolute left-0 top-1/2 h-px transition-all duration-300 ${
                        isActive ? 'w-6 bg-cyan-400/50' : 'w-3 bg-border'
                      }`}
                    />
                    <div className={isActive ? 'opacity-100' : 'opacity-60 group-hover:opacity-90'}>
                      <h3 className="font-display font-semibold text-text-primary text-sm">
                        {exp.role}
                      </h3>
                      <p className="text-text-secondary text-xs mt-0.5">{exp.company}</p>
                      <p className="text-text-muted text-2xs font-mono mt-1">{exp.period}</p>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Detail panel */}
        <div className="lg:col-span-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeExperience.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4, ease: easeOutExpo }}
              className="p-8 rounded-3xl glass gradient-border min-h-[400px]"
            >
              {/* Header */}
              <div className="flex flex-wrap items-start justify-between gap-4 mb-6 pb-6 border-b border-border">
                <div>
                  <h3 className="text-2xl font-display font-semibold text-text-primary mb-1">
                    {activeExperience.role}
                  </h3>
                  <p className="text-cyan-400 text-sm font-medium">{activeExperience.company}</p>
                </div>
                <div className="flex flex-col gap-2 text-right">
                  <span className="inline-flex items-center gap-1.5 text-text-secondary text-xs">
                    <Calendar className="w-3.5 h-3.5" />
                    {activeExperience.period}
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-text-secondary text-xs">
                    <MapPin className="w-3.5 h-3.5" />
                    {activeExperience.location}
                  </span>
                </div>
              </div>

              {/* Description */}
              <p className="text-text-secondary leading-relaxed mb-6">
                {activeExperience.description}
              </p>

              {/* Achievements */}
              <div className="space-y-3 mb-6">
                <h4 className="text-xs font-mono uppercase tracking-[0.15em] text-text-muted">
                  Key Achievements
                </h4>
                <ul className="space-y-3">
                  {activeExperience.achievements.map((achievement, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.08, ease: easeOutExpo }}
                      className="flex items-start gap-3 text-text-secondary text-sm leading-relaxed"
                    >
                      <ChevronRight className="w-4 h-4 text-cyan-400 mt-0.5 flex-shrink-0" />
                      <span>{achievement}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>

              {/* Technologies */}
              <div>
                <h4 className="text-xs font-mono uppercase tracking-[0.15em] text-text-muted mb-3">
                  Tech Stack
                </h4>
                <div className="flex flex-wrap gap-2">
                  {activeExperience.technologies.map((tech) => (
                    <motion.span
                      key={tech}
                      variants={fadeUp}
                      className="px-3 py-1.5 rounded-full text-xs font-mono glass glass-hover text-text-secondary transition-all"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </SectionWrapper>
  );
}
