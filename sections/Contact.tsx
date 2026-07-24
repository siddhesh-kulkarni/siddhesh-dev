import { useState, type FormEvent } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, Github, Linkedin, CheckCircle } from 'lucide-react';
import SectionWrapper, { SectionHeading } from '@/components/SectionWrapper';
import { PERSONAL_INFO, CONTACT_METHODS } from '@/constants';
import { fadeUp, staggerContainer, viewportOnce, easeOutExpo } from '@/utils/animations';
import type { ContactMethod } from '@/types';

type FormStatus = 'idle' | 'sending' | 'sent';

interface FormData {
  name: string;
  email: string;
  message: string;
}

export default function Contact(): JSX.Element {
  const [formStatus, setFormStatus] = useState<FormStatus>('idle');
  const [formData, setFormData] = useState<FormData>({ name: '', email: '', message: '' });

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    setFormStatus('sending');

    setTimeout(() => {
      setFormStatus('sent');
      setFormData({ name: '', email: '', message: '' });

      setTimeout(() => setFormStatus('idle'), 3000);
    }, 1200);
  };

  return (
    <SectionWrapper id="contact">
      <SectionHeading
        label="Contact"
        title="Let's build something great"
        description="Have a project in mind or just want to say hi? My inbox is always open."
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Left: Contact methods */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="space-y-6"
        >
          <motion.div variants={fadeUp}>
            <h3 className="text-2xl font-display font-semibold text-text-primary mb-3">
              Get in touch
            </h3>
            <p className="text-text-secondary leading-relaxed mb-8">
              I&apos;m currently {PERSONAL_INFO.available ? 'available' : 'unavailable'} for freelance
              opportunities and full-time roles. Let&apos;s discuss how I can help bring your product to life.
            </p>
          </motion.div>

          <div className="space-y-3">
            {CONTACT_METHODS.map((method: ContactMethod) => {
              const Icon = method.icon;
              return (
                <motion.a
                  key={method.id}
                  variants={fadeUp}
                  href={method.href}
                  target={method.href.startsWith('http') ? '_blank' : undefined}
                  rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  whileHover={{ x: 4 }}
                  className="group flex items-center gap-4 p-4 rounded-2xl glass glass-hover transition-all"
                >
                  <div className="flex items-center justify-center h-11 w-11 rounded-xl bg-cyan-500/10 group-hover:bg-cyan-500/20 transition-colors">
                    <Icon className="w-5 h-5 text-cyan-400" />
                  </div>
                  <div>
                    <p className="text-xs text-text-muted font-mono uppercase tracking-wider">
                      {method.label}
                    </p>
                    <p className="text-sm text-text-primary font-medium">{method.value}</p>
                  </div>
                </motion.a>
              );
            })}
          </div>

          {/* Availability badge */}
          <motion.div variants={fadeUp} className="inline-flex items-center gap-3 px-5 py-3 rounded-full glass">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400" />
            </span>
            <span className="text-sm text-emerald-400 font-medium">Available for new projects</span>
          </motion.div>
        </motion.div>

        {/* Right: Form */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="relative"
        >
          <form
            onSubmit={handleSubmit}
            className="p-8 rounded-3xl glass gradient-border space-y-5"
          >
            <div>
              <label htmlFor="name" className="block text-xs font-mono uppercase tracking-wider text-text-muted mb-2">
                Name
              </label>
              <input
                id="name"
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="Your name"
                className="w-full px-4 py-3 rounded-xl bg-bg-primary/50 border border-border focus:border-cyan-500/40 focus:ring-1 focus:ring-cyan-500/20 text-text-primary placeholder:text-text-muted text-sm transition-all outline-none"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-xs font-mono uppercase tracking-wider text-text-muted mb-2">
                Email
              </label>
              <input
                id="email"
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="you@example.com"
                className="w-full px-4 py-3 rounded-xl bg-bg-primary/50 border border-border focus:border-cyan-500/40 focus:ring-1 focus:ring-cyan-500/20 text-text-primary placeholder:text-text-muted text-sm transition-all outline-none"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-xs font-mono uppercase tracking-wider text-text-muted mb-2">
                Message
              </label>
              <textarea
                id="message"
                rows={5}
                required
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Tell me about your project..."
                className="w-full px-4 py-3 rounded-xl bg-bg-primary/50 border border-border focus:border-cyan-500/40 focus:ring-1 focus:ring-cyan-500/20 text-text-primary placeholder:text-text-muted text-sm transition-all outline-none resize-none"
              />
            </div>

            <motion.button
              type="submit"
              disabled={formStatus !== 'idle'}
              whileHover={{ scale: formStatus === 'idle' ? 1.02 : 1 }}
              whileTap={{ scale: formStatus === 'idle' ? 0.98 : 1 }}
              className={`w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-medium text-sm transition-all ${
                formStatus === 'sent'
                  ? 'bg-emerald-500 text-bg-primary'
                  : 'bg-cyan-500 text-bg-primary hover:shadow-glow'
              }`}
            >
              {formStatus === 'idle' && (
                <>
                  <Send className="w-4 h-4" />
                  <span>Send Message</span>
                </>
              )}
              {formStatus === 'sending' && (
                <>
                  <motion.span
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                    className="block h-4 w-4 border-2 border-bg-primary border-t-transparent rounded-full"
                  />
                  <span>Sending...</span>
                </>
              )}
              {formStatus === 'sent' && (
                <>
                  <CheckCircle className="w-4 h-4" />
                  <span>Message Sent!</span>
                </>
              )}
            </motion.button>
          </form>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
