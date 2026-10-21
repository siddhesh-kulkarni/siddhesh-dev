import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import SectionWrapper, { SectionHeading } from '@/components/SectionWrapper';
import { PROJECTS } from '@/constants';
import { fadeUp, staggerContainer, viewportOnce } from '@/utils/animations';
import { getTechIcon } from '@/utils/techIcons';
import type { Project } from '@/types';

export default function Projects(): JSX.Element {
  const featuredProjects = PROJECTS.filter((p) => p.featured);
  const otherProjects = PROJECTS.filter((p) => !p.featured);

  return (
    <SectionWrapper id="work">
      <SectionHeading
        label="Work"
        title="Selected projects"
        description="Selected work spanning AI for agriculture, UPI payments for local shops, and real-time satellite tracking."
      />

      {/* Featured Projects */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12"
      >
        {featuredProjects.map((project: Project) => (
          <motion.article
            key={project.id}
            variants={fadeUp}
            whileHover={{ y: -6 }}
            className="group relative p-8 rounded-3xl glass gradient-border overflow-hidden transition-all duration-500 hover:shadow-card-hover"
          >
            {/* Gradient glow */}
            <div className={`absolute -top-20 -right-20 w-60 h-60 bg-gradient-to-br ${project.gradient} rounded-full blur-3xl opacity-40 group-hover:opacity-70 transition-opacity duration-500`} />

            {/* Content */}
            <div className="relative">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <span className="text-xs font-mono uppercase tracking-[0.15em] text-cyan-400">
                    {project.category}
                  </span>
                  <h3 className="text-2xl font-display font-semibold text-text-primary mt-2">
                    {project.title}
                  </h3>
                </div>
                <span className="text-xs font-mono text-text-muted">{project.year}</span>
              </div>

              <p className="text-text-secondary leading-relaxed mb-6">
                {project.description}
              </p>

              {/* Metrics */}
              <div className="grid grid-cols-3 gap-4 mb-6">
                {project.metrics.map((metric) => (
                  <div key={metric.label} className="text-center p-3 rounded-xl bg-bg-primary/40">
                    <div className="text-lg font-display font-bold gradient-text-cyan">
                      {metric.value}
                    </div>
                    <div className="text-2xs text-text-muted mt-1">{metric.label}</div>
                  </div>
                ))}
              </div>

              {/* Tech */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech) => {
                  const Icon = getTechIcon(tech);
                  return (
                    <span
                      key={tech}
                      className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-2xs font-mono glass text-text-secondary"
                    >
                      <Icon className="w-3 h-3 text-cyan-400 shrink-0" aria-hidden />
                      {tech}
                    </span>
                  );
                })}
              </div>

              <div className="flex items-center gap-2 text-sm font-medium text-cyan-400 group-hover:gap-3 transition-all">
                <span>Featured project</span>
                <ArrowUpRight className="w-4 h-4 group-hover:rotate-45 transition-transform" />
              </div>
            </div>
          </motion.article>
        ))}
      </motion.div>

      {/* Other Projects */}
      {otherProjects.length > 0 && (
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid grid-cols-1 md:grid-cols-3 gap-4"
        >
          {otherProjects.map((project: Project) => (
            <motion.article
              key={project.id}
              variants={fadeUp}
              whileHover={{ y: -4 }}
              className="group p-6 rounded-2xl glass glass-hover transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-4">
                <span className="text-2xs font-mono uppercase tracking-[0.15em] text-cyan-400">
                  {project.category}
                </span>
                <ArrowUpRight className="w-4 h-4 text-text-muted group-hover:text-cyan-400 group-hover:rotate-45 transition-all" />
              </div>
              <h3 className="text-lg font-display font-semibold text-text-primary mb-2">
                {project.title}
              </h3>
              <p className="text-text-secondary text-sm leading-relaxed mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {project.technologies.slice(0, 3).map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-0.5 rounded-md text-2xs font-mono glass text-text-muted"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </motion.div>
      )}
    </SectionWrapper>
  );
}
