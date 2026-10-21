import { motion } from 'framer-motion';
import { Code2, Rocket, Heart } from 'lucide-react';
import SectionWrapper, { SectionHeading } from '@/components/SectionWrapper';
import { PERSONAL_INFO, STATS } from '@/constants';
import { fadeUp, staggerContainer, viewportOnce } from '@/utils/animations';

const VALUES = [
  {
    icon: Code2,
    title: 'Clean Code',
    description: 'Writing maintainable, well-tested, and scalable code that stands the test of time.',
  },
  {
    icon: Rocket,
    title: 'Performance',
    description: 'Obsessing over load times, bundle sizes, and Core Web Vitals to ship fast experiences.',
  },
  {
    icon: Heart,
    title: 'User First',
    description: 'Every decision starts with the user. Beautiful, accessible, and intuitive interfaces.',
  },
] as const;

export default function About(): JSX.Element {
  return (
    <SectionWrapper id="about">
      <SectionHeading
        label="About"
        title="The developer behind the code"
        description="I build production SaaS platforms, payment systems, and AI-powered tools with end-to-end ownership."
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        {/* Bio */}
        <motion.div variants={fadeUp} className="space-y-6">
          <p className="text-lg text-text-secondary leading-relaxed">
            I&apos;m a {PERSONAL_INFO.role.toLowerCase()} based in {PERSONAL_INFO.location}, with hands-on
            experience building and maintaining a multi-tenant SaaS platform from React and Next.js frontends
            to Node.js, PostgreSQL, payments, and AWS deployments.
          </p>
          <p className="text-lg text-text-secondary leading-relaxed">
            At BharatGo, I work across ONDC commerce integration, PhonePe payments, Mobile POS with Bluetooth
            printers, and release management coordinating deployments and resolving production issues with
            direct customer support.
          </p>
          <p className="text-lg text-text-secondary leading-relaxed">
            Outside work, I build products like GrowGrape.AI for farmers and QR Pay Manager for local shops,
            and I hold an M.Sc. in Computer Science from Sangameshwar College, Solapur (CGPA 9.36).
          </p>

          {/* Values */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6"
          >
            {VALUES.map((value) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={value.title}
                  variants={fadeUp}
                  className="p-5 rounded-2xl glass glass-hover transition-all hover:-translate-y-1"
                >
                  <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-cyan-500/10 mb-3">
                    <Icon className="w-5 h-5 text-cyan-400" />
                  </div>
                  <h4 className="font-display font-semibold text-text-primary text-sm mb-1">
                    {value.title}
                  </h4>
                  <p className="text-text-secondary text-xs leading-relaxed">
                    {value.description}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>

        {/* Stats grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid grid-cols-2 gap-4"
        >
          {STATS.map((stat) => (
            <motion.div
              key={stat.id}
              variants={fadeUp}
              whileHover={{ y: -4 }}
              className="relative p-8 rounded-3xl glass gradient-border overflow-hidden group"
            >
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-cyan-500/5 rounded-full blur-2xl group-hover:bg-cyan-500/10 transition-colors" />
              <div className="relative">
                <div className="flex items-baseline gap-1 mb-2">
                  <span className="text-4xl font-display font-bold gradient-text-cyan">
                    {stat.value}
                  </span>
                  <span className="text-2xl font-display font-bold text-cyan-400">
                    {stat.suffix}
                  </span>
                </div>
                <p className="text-sm text-text-secondary">{stat.label}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
