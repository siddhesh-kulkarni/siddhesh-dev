import {
  Github,
  Linkedin,
  Mail,
  Code2,
  Server,
  Database,
  Cloud,
  type LucideIcon,
} from 'lucide-react';
import type {
  NavLink,
  SocialLink,
  Experience,
  Project,
  SkillCategory,
  Stat,
  TimelineEvent,
  ContactMethod,
} from '@/types';

export const PERSONAL_INFO = {
  name: 'Siddhesh Kulkarni',
  role: 'Full Stack Developer',
  tagline: 'Crafting premium, performant web experiences',
  email: 'siddhesh.kulkarni@gmail.com',
  location: 'Pune, India',
  bio: 'Full Stack Developer specializing in scalable web applications with React, Next.js, and modern TypeScript. Passionate about building performant, accessible, and visually polished products end-to-end.',
  resumeUrl: '/resume.pdf',
  available: true,
} as const;

export const NAV_LINKS: NavLink[] = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Work', href: '#work' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
];

export const SOCIAL_LINKS: SocialLink[] = [
  { label: 'GitHub', href: 'https://github.com/siddhesh-kulkarni', icon: Github },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/siddhesh-kulkarni-39a015266/', icon: Linkedin },
  { label: 'Email', href: 'mailto:siddheshsanjaykulkarni@gmail.com', icon: Mail },
];

export const STATS: Stat[] = [
  { id: 'experience', label: 'Years Experience', value: '3', suffix: '+' },
  { id: 'projects', label: 'Projects Built', value: '20', suffix: '+' },
  { id: 'technologies', label: 'Technologies', value: '15', suffix: '+' },
  { id: 'commit', label: 'Git Commits', value: '1000', suffix: '+' },
];

export const EXPERIENCES: Experience[] = [
  {
    id: 'exp-1',
    role: 'Full Stack Developer',
    company: 'Freelance / Contract',
    location: 'Remote',
    period: '2024 — Present',
    description:
      'Building end-to-end web applications for clients, focusing on performance, accessibility, and modern design patterns.',
    achievements: [
      'Delivered 10+ production web applications with React, Next.js, and TypeScript',
      'Improved Lighthouse performance scores from 60 to 95+ through optimization',
      'Implemented CI/CD pipelines reducing deployment time by 70%',
      'Built reusable component libraries used across multiple projects',
    ],
    technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Node.js', 'PostgreSQL'],
  },
  {
    id: 'exp-2',
    role: 'Software Developer',
    company: 'Tech Startup',
    location: 'Pune, India',
    period: '2023 — 2024',
    description:
      'Developed and maintained core product features for a SaaS platform serving thousands of users.',
    achievements: [
      'Built real-time dashboard with WebSocket integration handling 5K+ concurrent users',
      'Reduced API response times by 40% through query optimization and caching',
      'Implemented authentication flow with OAuth and role-based access control',
      'Collaborated with design team to ship pixel-perfect UI implementations',
    ],
    technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Redis', 'Docker'],
  },
  {
    id: 'exp-3',
    role: 'Frontend Developer Intern',
    company: 'Digital Agency',
    location: 'Pune, India',
    period: '2022 — 2023',
    description:
      'Started professional journey building responsive landing pages and marketing sites.',
    achievements: [
      'Developed 15+ responsive landing pages with modern CSS and animations',
      'Integrated headless CMS for content management across client websites',
      'Collaborated with backend team to design and consume REST APIs',
      'Improved page load speeds by 50% through image optimization and lazy loading',
    ],
    technologies: ['JavaScript', 'React', 'CSS3', 'Figma', 'Git', 'REST APIs'],
  },
];

export const PROJECTS: Project[] = [
  {
    id: 'proj-1',
    title: 'Nexus Analytics',
    category: 'SaaS Platform',
    description: 'Real-time analytics dashboard with predictive insights and custom reporting.',
    longDescription:
      'A comprehensive analytics platform that processes millions of data points in real-time, providing predictive insights through ML models and customizable reporting for enterprise clients.',
    technologies: ['Next.js', 'TypeScript', 'PostgreSQL', 'Redis', 'WebSocket', 'D3.js'],
    metrics: [
      { label: 'Data Points', value: '2M+' },
      { label: 'Response Time', value: '<50ms' },
      { label: 'Uptime', value: '99.9%' },
    ],
    gradient: 'from-cyan-500/20 to-blue-500/10',
    featured: true,
    year: '2024',
  },
  {
    id: 'proj-2',
    title: 'FlowState',
    category: 'Productivity App',
    description: 'AI-powered task management with natural language processing and smart scheduling.',
    longDescription:
      'An intelligent task manager that uses NLP to parse natural language input, automatically schedules tasks based on priority and deadlines, and adapts to user work patterns.',
    technologies: ['React', 'Node.js', 'OpenAI API', 'Prisma', 'Tailwind CSS', 'Vercel'],
    metrics: [
      { label: 'Active Users', value: '5K+' },
      { label: 'Tasks Managed', value: '100K+' },
      { label: 'Accuracy', value: '94%' },
    ],
    gradient: 'from-violet-500/20 to-cyan-500/10',
    featured: true,
    year: '2024',
  },
  {
    id: 'proj-3',
    title: 'Commerce Cloud',
    category: 'E-Commerce',
    description: 'Headless e-commerce platform with Stripe integration and real-time inventory.',
    longDescription:
      'A modern headless commerce solution with Stripe payments, real-time inventory management, advanced search, and a fully customizable storefront builder.',
    technologies: ['Next.js', 'Stripe', 'GraphQL', 'MongoDB', 'AWS S3', 'Tailwind CSS'],
    metrics: [
      { label: 'GMV Processed', value: '$500K+' },
      { label: 'Conversion Rate', value: '+32%' },
      { label: 'Page Speed', value: '98/100' },
    ],
    gradient: 'from-emerald-500/20 to-cyan-500/10',
    featured: true,
    year: '2023',
  },
  {
    id: 'proj-4',
    title: 'DevPulse',
    category: 'Developer Tools',
    description: 'GitHub activity visualizer with contribution heatmaps and team insights.',
    longDescription:
      'A developer analytics tool that visualizes GitHub activity, tracks team productivity, and provides insights into code contribution patterns through beautiful interactive visualizations.',
    technologies: ['React', 'TypeScript', 'GitHub API', 'Recharts', 'Framer Motion', 'Vercel'],
    metrics: [
      { label: 'Repos Analyzed', value: '10K+' },
      { label: 'Developers', value: '500+' },
      { label: 'Stars', value: '340+' },
    ],
    gradient: 'from-orange-500/20 to-red-500/10',
    featured: false,
    year: '2023',
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: 'frontend',
    title: 'Frontend',
    icon: Code2,
    skills: [
      { name: 'React', level: 95 },
      { name: 'Next.js', level: 92 },
      { name: 'TypeScript', level: 90 },
      { name: 'Tailwind CSS', level: 95 },
      { name: 'Framer Motion', level: 85 },
      { name: 'Three.js', level: 75 },
    ],
  },
  {
    id: 'backend',
    title: 'Backend',
    icon: Server,
    skills: [
      { name: 'Node.js', level: 90 },
      { name: 'Express', level: 88 },
      { name: 'REST APIs', level: 92 },
      { name: 'GraphQL', level: 80 },
      { name: 'Python', level: 75 },
      { name: 'WebSockets', level: 82 },
    ],
  },
  {
    id: 'database',
    title: 'Database',
    icon: Database,
    skills: [
      { name: 'PostgreSQL', level: 88 },
      { name: 'MongoDB', level: 85 },
      { name: 'Redis', level: 80 },
      { name: 'Prisma', level: 90 },
      { name: 'Supabase', level: 85 },
      { name: 'Firebase', level: 78 },
    ],
  },
  {
    id: 'devops',
    title: 'DevOps & Cloud',
    icon: Cloud,
    skills: [
      { name: 'Docker', level: 82 },
      { name: 'AWS', level: 78 },
      { name: 'Vercel', level: 92 },
      { name: 'CI/CD', level: 85 },
      { name: 'Git', level: 95 },
      { name: 'Linux', level: 80 },
    ],
  },
];

export const TIMELINE_EVENTS: TimelineEvent[] = [
  {
    id: 'tl-1',
    year: '2024',
    title: 'Full Stack Developer',
    description: 'Transitioned to freelance, delivering production apps for multiple clients.',
    type: 'work',
  },
  {
    id: 'tl-2',
    year: '2023',
    title: 'Software Developer',
    description: 'Joined a tech startup, building SaaS features for thousands of users.',
    type: 'work',
  },
  {
    id: 'tl-3',
    year: '2022',
    title: 'Frontend Developer Intern',
    description: 'Started professional career building responsive web experiences.',
    type: 'work',
  },
  {
    id: 'tl-4',
    year: '2021',
    title: 'B.Tech Computer Science',
    description: 'Graduated with honors, specializing in web technologies.',
    type: 'education',
  },
  {
    id: 'tl-5',
    year: '2020',
    title: 'First Open Source Contribution',
    description: 'Contributed to a popular React component library on GitHub.',
    type: 'achievement',
  },
];

export const CONTACT_METHODS: ContactMethod[] = [
  {
    id: 'email',
    label: 'Email',
    value: 'siddheshsanjaykulkarni@gmail.com',
    href: 'mailto:siddheshsanjaykulkarni@gmail.com',
    icon: Mail,
  },
  {
    id: 'github',
    label: 'GitHub',
    value: 'siddhesh-kulkarni',
    href: 'https://github.com/siddhesh-kulkarni',
    icon: Github,
  },
  {
    id: 'linkedin',
    label: 'LinkedIn',
    value: 'Siddhesh Kulkarni',
    href: 'https://www.linkedin.com/in/siddhesh-kulkarni-39a015266/',
    icon: Linkedin,
  },
];
