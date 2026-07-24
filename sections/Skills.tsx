import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionWrapper, { SectionHeading } from '@/components/SectionWrapper';
import { SKILL_CATEGORIES } from '@/constants';
import { fadeUp, easeOutExpo } from '@/utils/animations';
import type { SkillCategory } from '@/types';

export default function Skills(): JSX.Element {
  const [activeCategory, setActiveCategory] = useState<string>(SKILL_CATEGORIES[0].id);
  const currentCategory =
    SKILL_CATEGORIES.find((cat) => cat.id === activeCategory) ?? SKILL_CATEGORIES[0];

  return (
    <SectionWrapper id="skills">
      <SectionHeading
        label="Skills"
        title="Technologies I work with"
        description="A comprehensive toolkit honed across multiple production projects — from frontend frameworks to cloud infrastructure."
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Category tabs */}
        <div className="lg:col-span-4">
          <div className="space-y-2">
            {SKILL_CATEGORIES.map((category: SkillCategory) => {
              const Icon = category.icon;
              const isActive = category.id === activeCategory;
              return (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`relative w-full flex items-center gap-4 p-4 rounded-2xl text-left transition-all duration-300 ${
                    isActive
                      ? 'glass gradient-border'
                      : 'hover:bg-bg-card/50'
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="skill-active"
                      className="absolute left-0 top-1/2 -translate-y-1/2 h-8 w-1 rounded-r-full bg-cyan-400"
                    />
                  )}
                  <div
                    className={`flex items-center justify-center h-10 w-10 rounded-xl transition-colors ${
                      isActive ? 'bg-cyan-500/15' : 'bg-bg-card'
                    }`}
                  >
                    <Icon
                      className={`w-5 h-5 transition-colors ${
                        isActive ? 'text-cyan-400' : 'text-text-secondary'
                      }`}
                    />
                  </div>
                  <div>
                    <h3
                      className={`font-display font-semibold text-sm transition-colors ${
                        isActive ? 'text-text-primary' : 'text-text-secondary'
                      }`}
                    >
                      {category.title}
                    </h3>
                    <p className="text-2xs text-text-muted mt-0.5">
                      {category.skills.length} technologies
                    </p>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Skill bars */}
        <div className="lg:col-span-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentCategory.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4, ease: easeOutExpo }}
              className="p-8 rounded-3xl glass gradient-border"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {currentCategory.skills.map((skill, i) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.06, ease: easeOutExpo }}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-text-primary">
                        {skill.name}
                      </span>
                      <span className="text-xs font-mono text-text-muted">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-1.5 rounded-full bg-bg-primary overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{ duration: 0.8, ease: easeOutExpo, delay: i * 0.06 }}
                        className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-blue-500"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </SectionWrapper>
  );
}
