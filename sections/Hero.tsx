import { motion } from 'framer-motion';
import { ArrowDown, Sparkles } from 'lucide-react';
import { PERSONAL_INFO, SOCIAL_LINKS } from '@/constants';
import { fadeUp, staggerContainer, easeOutExpo } from '@/utils/animations';

export default function Hero(): JSX.Element {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Content */}
      <div className="container-custom relative z-content">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto text-center"
        >
          {/* Badge */}
          <motion.div
            variants={fadeUp}
            className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full glass gradient-border"
          >
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span className="text-xs font-mono uppercase tracking-[0.15em] text-text-secondary">
              {PERSONAL_INFO.role}
            </span>
          </motion.div>

          {/* Name */}
          <motion.h1
            variants={fadeUp}
            className="text-display font-bold leading-[0.95] mb-6"
          >
            <span className="block text-text-primary">Siddhesh</span>
            <span className="block gradient-text-cyan">Kulkarni</span>
          </motion.h1>

          {/* Tagline */}
          <motion.p
            variants={fadeUp}
            className="text-lg md:text-xl text-text-secondary max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            {PERSONAL_INFO.bio}
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={fadeUp}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <motion.a
              href="#work"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#work')?.scrollIntoView({ behavior: 'smooth' });
              }}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="group relative inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-cyan-500 text-bg-primary font-medium text-sm overflow-hidden transition-shadow hover:shadow-glow"
            >
              <span className="relative z-10">View My Work</span>
              <ArrowDown className="w-4 h-4 relative z-10 group-hover:translate-y-0.5 transition-transform" />
            </motion.a>

            <motion.a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full glass glass-hover font-medium text-sm text-text-primary transition-all"
            >
              Get in Touch
            </motion.a>
          </motion.div>

          {/* Social links */}
          <motion.div
            variants={fadeUp}
            className="flex items-center justify-center gap-4 mt-12"
          >
            {SOCIAL_LINKS.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center h-11 w-11 rounded-full glass glass-hover transition-all hover:scale-110"
                  aria-label={social.label}
                >
                  <Icon className="w-4.5 h-4.5 text-text-secondary hover:text-cyan-400 transition-colors" />
                </a>
              );
            })}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      {/* <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8, ease: easeOutExpo }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-content"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-2xs font-mono uppercase tracking-[0.2em] text-text-muted">
            Scroll
          </span>
          <div className="relative h-12 w-px bg-border overflow-hidden">
            <motion.div
              animate={{ y: ['-100%', '200%'] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-400 to-transparent"
            />
          </div>
        </div>
      </motion.div> */}
    </section>
  );
}
