import type { ReactNode } from 'react';
import dynamic from 'next/dynamic';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const ParticleField = dynamic(() => import('@/components/ParticleField'), { ssr: false });

interface MainLayoutProps {
  children: ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps): ReactNode {
  return (
    <div className="relative min-h-screen bg-bg-primary text-text-primary overflow-x-hidden">
      {/* Fixed Three.js particle background — shared across all sections */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-60">
        <ParticleField />
      </div>

      {/* Gradient overlays on top of the particles */}
      <div className="fixed inset-0 z-0 pointer-events-none bg-gradient-to-b from-bg-primary/50 via-transparent to-bg-primary" />
      <div className="fixed inset-0 z-0 pointer-events-none bg-hero-gradient" />

      {/* Ambient orbs */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="orb w-[600px] h-[600px] bg-cyan-500/5  top-[-200px] left-[-100px]" />
        <div className="orb w-[500px] h-[500px] bg-blue-500/5  top-[40%]    right-[-150px]" />
        <div className="orb w-[400px] h-[400px] bg-violet-500/5 bottom-[-100px] left-[30%]" />
      </div>

      <Navbar />
      <main className="relative z-content">{children}</main>
      <Footer />
    </div>
  );
}
