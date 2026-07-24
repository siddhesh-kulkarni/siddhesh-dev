import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowUp } from 'lucide-react';
import { PERSONAL_INFO, NAV_LINKS, SOCIAL_LINKS } from '@/constants';
import { fadeUp, staggerContainer, viewportOnce } from '@/utils/animations';

export default function Footer(): JSX.Element {
  const currentYear = new Date().getFullYear();

  const handleNavClick = (href: string): void => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <footer className="relative z-content">
      {/* <footer className="relative z-content border-t border-border bg-bg-secondary"> */}
        {/* Top glow line */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" />

        <div className="container-custom py-16">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12"
          >
            {/* Brand */}
            <motion.div variants={fadeUp} className="space-y-4">
              <h3 className="font-display text-xl font-semibold gradient-text-cyan">
                {PERSONAL_INFO.name}
              </h3>
              <p className="text-text-secondary text-sm max-w-xs leading-relaxed">
                {PERSONAL_INFO.tagline}. Always exploring new technologies and building things that matter.
              </p>
              <div className="flex items-center gap-3">
                {SOCIAL_LINKS.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center h-10 w-10 rounded-lg glass glass-hover transition-all hover:scale-110"
                      aria-label={social.label}
                    >
                      <Icon className="w-4 h-4 text-text-secondary hover:text-cyan-400 transition-colors" />
                    </a>
                  );
                })}
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div variants={fadeUp} className="space-y-4">
              <h4 className="font-display text-sm font-semibold text-text-primary uppercase tracking-wider">
                Navigate
              </h4>
              <ul className="space-y-2">
                {NAV_LINKS.map((link) => (
                  <li key={link.href}>
                    <button
                      onClick={() => handleNavClick(link.href)}
                      className="text-text-secondary text-sm hover:text-cyan-400 transition-colors duration-300"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Contact */}
            <motion.div variants={fadeUp} className="space-y-4">
              <h4 className="font-display text-sm font-semibold text-text-primary uppercase tracking-wider">
                Get in Touch
              </h4>
              <div className="space-y-2">
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="block text-text-secondary text-sm hover:text-cyan-400 transition-colors duration-300"
                >
                  {PERSONAL_INFO.email}
                </a>
                <p className="text-text-secondary text-sm">{PERSONAL_INFO.location}</p>
                <div className="inline-flex items-center gap-2 mt-2 px-3 py-1.5 rounded-full glass text-xs">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
                  </span>
                  <span className="text-emerald-400">Available for work</span>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Bottom bar */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4"
          >
            <p className="text-text-muted text-xs">
              &copy; {currentYear} {PERSONAL_INFO.name}. Built with Next.js, Three.js & Framer Motion.
            </p>
            <button
              onClick={() => handleNavClick('#home')}
              className="group flex items-center gap-2 text-text-secondary text-xs hover:text-cyan-400 transition-colors"
            >
              <span>Back to top</span>
              <span className="flex items-center justify-center h-8 w-8 rounded-full glass glass-hover group-hover:-translate-y-1 transition-transform">
                <ArrowUp className="w-3.5 h-3.5" />
              </span>
            </button>
          </motion.div>
        </div>
      </footer>
    </>
  );
}
