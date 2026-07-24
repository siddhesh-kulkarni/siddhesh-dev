import type { NextPage } from 'next';
import Head from 'next/head';
import dynamic from 'next/dynamic';
import { PERSONAL_INFO } from '@/constants';

const Hero = dynamic(() => import('@/sections/Hero'));
const About = dynamic(() => import('@/sections/About'));
const Experience = dynamic(() => import('@/sections/Experience'));
const Projects = dynamic(() => import('@/sections/Projects'));
const Skills = dynamic(() => import('@/sections/Skills'));
const Timeline = dynamic(() => import('@/sections/Timeline'));
const Contact = dynamic(() => import('@/sections/Contact'));

const HomePage: NextPage = () => {
  return (
    <>
      <Head>
        <title>{`${PERSONAL_INFO.name} — ${PERSONAL_INFO.role}`}</title>
        <meta name="description" content={PERSONAL_INFO.bio} />
        <meta name="keywords" content="Siddhesh Kulkarni, Full Stack Developer, React, Next.js, TypeScript, Web Developer, Portfolio" />
        <meta name="author" content={PERSONAL_INFO.name} />
        <meta name="robots" content="index, follow" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content={`${PERSONAL_INFO.name} — ${PERSONAL_INFO.role}`} />
        <meta property="og:description" content={PERSONAL_INFO.bio} />
        <meta property="og:site_name" content={`${PERSONAL_INFO.name} Portfolio`} />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${PERSONAL_INFO.name} — ${PERSONAL_INFO.role}`} />
        <meta name="twitter:description" content={PERSONAL_INFO.bio} />

        {/* Structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: PERSONAL_INFO.name,
              jobTitle: PERSONAL_INFO.role,
              email: PERSONAL_INFO.email,
              address: {
                '@type': 'PostalAddress',
                addressLocality: PERSONAL_INFO.location,
              },
              description: PERSONAL_INFO.bio,
            }),
          }}
        />

        <link rel="canonical" href="/" />
      </Head>

      <Hero />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Timeline />
      <Contact />
    </>
  );
};

export default HomePage;
