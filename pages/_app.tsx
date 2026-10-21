import type { AppProps } from 'next/app';
import Head from 'next/head';
import { AnimatePresence } from 'framer-motion';
import { useEffect } from 'react';
import type { ReactNode } from 'react';
import MainLayout from '@/layouts/MainLayout';
import { useLenis } from '@/hooks/useLenis';
import CustomCursor from '@/components/CustomCursor';
import ScrollProgress from '@/components/ScrollProgress';
import '@/styles/globals.css';

interface PortfolioAppProps extends AppProps {
  pageProps: Record<string, unknown>;
}

function PortfolioApp({ Component, pageProps, router }: PortfolioAppProps): ReactNode {
  useLenis();

  useEffect(() => {
    const handleRouteChange = (): void => {
      window.scrollTo(0, 0);
    };
    router.events.on('routeChangeStart', handleRouteChange);
    return () => {
      router.events.off('routeChangeStart', handleRouteChange);
    };
  }, [router.events]);

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0" />
        <meta name="theme-color" content="#050508" />
        <meta name="description" content="Siddhesh Kulkarni Full Stack Developer crafting premium, performant web experiences with React, Next.js, and modern web technologies." />
        <meta name="keywords" content="Siddhesh Kulkarni, Full Stack Developer, React, Next.js, TypeScript, Web Developer, Portfolio" />
        <meta name="author" content="Siddhesh Kulkarni" />
        <meta name="robots" content="index, follow" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Siddhesh Kulkarni — Full Stack Developer" />
        <meta property="og:description" content="Crafting premium, performant web experiences with modern technology." />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Siddhesh Kulkarni — Full Stack Developer" />
        <meta name="twitter:description" content="Crafting premium, performant web experiences with modern technology." />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </Head>

      <CustomCursor />
      <ScrollProgress />

      <MainLayout>
        <AnimatePresence mode="wait" initial={false}>
          <Component {...pageProps} key={router.route} />
        </AnimatePresence>
      </MainLayout>

      <div className="noise-overlay" aria-hidden="true" />
    </>
  );
}

export default PortfolioApp;
