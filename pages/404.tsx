import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Home } from 'lucide-react';
import { fadeUp } from '@/utils/animations';

const NotFoundPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>404 — Page Not Found | Siddhesh Kulkarni</title>
        <meta name="description" content="The page you are looking for does not exist." />
        <meta name="robots" content="noindex" />
      </Head>

      <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
        {/* Background orbs */}
        <div className="orb w-[400px] h-[400px] bg-cyan-500/10 top-1/4 left-1/4" />
        <div className="orb w-[300px] h-[300px] bg-blue-500/10 bottom-1/4 right-1/4" />

        <div className="container-custom relative z-content text-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="space-y-8"
          >
            <div className="relative inline-block">
              <motion.h1
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="text-display font-bold gradient-text-cyan"
              >
                404
              </motion.h1>
              <div className="absolute -inset-4 bg-glow-cyan opacity-30 blur-3xl -z-10" />
            </div>

            <div className="space-y-4">
              <h2 className="text-display-xs font-semibold text-text-primary">
                Lost in the void
              </h2>
              <p className="text-text-secondary text-lg max-w-md mx-auto">
                The page you&apos;re looking for has drifted into the digital void.
                Let&apos;s get you back home.
              </p>
            </div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block"
            >
              <Link
                href="/"
                className="group inline-flex items-center gap-2 px-6 py-3 rounded-full glass glass-hover transition-all duration-300 text-text-primary font-medium"
              >
                <Home className="w-4 h-4 text-cyan-400 group-hover:scale-110 transition-transform" />
                <span>Back to Home</span>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default NotFoundPage;
