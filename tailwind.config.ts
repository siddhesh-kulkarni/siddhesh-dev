import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './sections/**/*.{js,ts,jsx,tsx,mdx}',
    './layouts/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Background scale
        bg: {
          primary:   '#050508',
          secondary: '#0c0c10',
          tertiary:  '#111116',
          card:      '#16161c',
          hover:     '#1c1c24',
        },
        // Text scale
        text: {
          primary:   '#f8fafc',
          secondary: '#94a3b8',
          muted:     '#475569',
          accent:    '#22d3ee',
        },
        // Border scale
        border: {
          DEFAULT: 'rgba(255,255,255,0.06)',
          hover:  'rgba(255,255,255,0.12)',
          accent: 'rgba(34,211,238,0.3)',
        },
      },
      fontFamily: {
        sans:    ['Inter', 'system-ui', 'sans-serif'],
        display: ['Space Grotesk', 'system-ui', 'sans-serif'],
        mono:    ['JetBrains Mono', 'monospace'],
      },
      fontSize: {
        '2xs': ['0.625rem', { lineHeight: '1rem' }],
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '30': '7.5rem',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':  'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'hero-gradient':   'radial-gradient(ellipse 80% 50% at 50% -20%, rgba(34,211,238,0.15), transparent)',
      },
      boxShadow: {
        'glow-sm':      '0 0 20px rgba(34,211,238,0.15)',
        'glow':         '0 0 40px rgba(34,211,238,0.2)',
        'glow-lg':      '0 0 80px rgba(34,211,238,0.25)',
        'card':         '0 1px 0 rgba(255,255,255,0.05), 0 4px 24px rgba(0,0,0,0.4)',
        'card-hover':   '0 1px 0 rgba(255,255,255,0.08), 0 8px 40px rgba(0,0,0,0.5)',
      },
      keyframes: {
        shimmer: {
          from: { backgroundPosition: '-200% 0' },
          to:   { backgroundPosition: '200% 0'  },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)'   },
          '50%':      { transform: 'translateY(-10px)' },
        },
        'pulse-slow': {
          '0%, 100%': { opacity: '1'   },
          '50%':      { opacity: '0.4' },
        },
      },
      animation: {
        shimmer:      'shimmer 2s linear infinite',
        float:        'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse-slow 4s ease-in-out infinite',
        'spin-slow':  'spin 20s linear infinite',
      },
      transitionTimingFunction: {
        'ease-out-expo':  'cubic-bezier(0.16, 1, 0.3, 1)',
        'ease-in-expo':   'cubic-bezier(0.7, 0, 0.84, 0)',
        'ease-in-out-expo':'cubic-bezier(0.87, 0, 0.13, 1)',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};

export default config;
