import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { NAV_LINKS, PERSONAL_INFO, SOCIAL_LINKS } from '@/constants';
import { useActiveSection } from '@/hooks/useScrollProgress';
import { fadeUp } from '@/utils/animations';

export default function Navbar(): JSX.Element {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const sectionIds = NAV_LINKS.map((link) => link.href.replace('#', ''));
  const activeSection = useActiveSection(sectionIds);

  useEffect(() => {
    const handleScroll = (): void => setScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const handleNavClick = (href: string): void => {
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
        className={`fixed top-0 left-0 right-0 z-nav transition-all duration-500 ${
          scrolled
            ? 'glass py-3'
            : 'bg-transparent py-5'
        }`}
      >
        <nav className="container-custom flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            onClick={() => handleNavClick('#home')}
            className="group flex items-center gap-2 font-display font-semibold text-lg"
          >
            <span className="relative flex h-9 w-9 items-center justify-center rounded-lg glass gradient-border">
              <span className="text-cyan-400 font-bold text-sm">SK</span>
            </span>
            <span className="hidden sm:inline text-text-primary group-hover:text-cyan-400 transition-colors">
              {PERSONAL_INFO.name.split(' ')[0]}
            </span>
          </Link>

          {/* Desktop Nav */}
          <ul className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.href.replace('#', '');
              return (
                <li key={link.href}>
                  <button
                    onClick={() => handleNavClick(link.href)}
                    className="relative px-4 py-2 text-sm font-medium text-text-secondary hover:text-text-primary transition-colors duration-300"
                  >
                    {link.label}
                    {isActive && (
                      <motion.span
                        layoutId="nav-active"
                        className="absolute inset-0 rounded-lg bg-cyan-500/10 border border-cyan-500/20"
                        transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                      />
                    )}
                  </button>
                </li>
              );
            })}
          </ul>

          {/* CTA + Mobile toggle */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => handleNavClick('#contact')}
              className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium glass glass-hover transition-all duration-300 hover:glow-sm"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
              </span>
              Available
            </button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden flex items-center justify-center h-10 w-10 rounded-lg glass glass-hover transition-all"
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isOpen}
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[999] md:hidden bg-bg-primary/95 backdrop-blur-xl"
          >
            <div className="flex flex-col items-center justify-center min-h-screen gap-2 px-6">
              {NAV_LINKS.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.05, ease: [0.16, 1, 0.3, 1] }}
                  className="w-full"
                >
                  <button
                    onClick={() => handleNavClick(link.href)}
                    className="w-full text-center py-4 text-2xl font-display font-medium text-text-primary hover:text-cyan-400 transition-colors"
                  >
                    {link.label}
                  </button>
                </motion.div>
              ))}

              <motion.div
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                transition={{ delay: 0.5 }}
                className="flex items-center gap-6 mt-8"
              >
                {SOCIAL_LINKS.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center h-12 w-12 rounded-full glass glass-hover transition-all"
                      aria-label={social.label}
                    >
                      <Icon className="w-5 h-5 text-text-secondary" />
                    </a>
                  );
                })}
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
