import {
  Github,
  Linkedin,
  Mail,
  Phone,
  Code2,
  Server,
  Database,
  Cloud,
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
  tagline: 'Building production SaaS, payments, and AI-powered platforms',
  email: 'siddheshsanjaykulkarni@gmail.com',
  phone: '+91 7741973805',
  location: 'Pune, India',
  bio: 'Full Stack Developer with hands-on experience building and maintaining a production-grade SaaS platform. Skilled in React, Next.js, Node.js, PostgreSQL, payments, POS systems, ONDC integration, and AWS deployments with ownership in release management and production support.',
  resumeUrl: '/Siddhesh_Kulkarni_Resume.pdf',
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
  { id: 'experience', label: 'Years Experience', value: '1.3', suffix: '+' },
  { id: 'projects', label: 'Projects Shipped', value: '5', suffix: '+' },
  { id: 'technologies', label: 'Technologies', value: '20', suffix: '+' },
  { id: 'education', label: 'M.Sc. CGPA', value: '9.36', suffix: '' },
];

export const EXPERIENCES: Experience[] = [
  {
    id: 'exp-1',
    role: 'Full Stack Developer',
    company: 'BharatGo',
    location: 'Pune',
    period: 'Jun 2025 — Present',
    description:
      'Building and maintaining a multi-tenant SaaS platform for vendors, with ownership across product features, ONDC commerce, payments, Mobile POS, release management, and AWS deployments.',
    achievements: [
      'Built and maintained a multi-tenant SaaS platform using React, Next.js, Node.js, and PostgreSQL, supporting multiple vendors on a single system',
      'Integrated ONDC (Open Network for Digital Commerce) into BharatGo’s seller platform, enabling sellers to list and transact through the open commerce network',
      'Acted as Release Manager handling task allocation, progress tracking, release validation, deployment coordination, and resolving production issues through customer support and live debugging',
      'Developed Mobile POS features, including Bluetooth printer integration for generating and printing customer invoices',
      'Integrated PhonePe and implemented webhooks for real-time payment status updates',
      'Deployed applications on AWS EC2 and handled basic cloud infrastructure and environment setup with CI/CD',
    ],
    technologies: [
      'React',
      'Next.js',
      'Node.js',
      'PostgreSQL',
      'ONDC',
      'PhonePe',
      'AWS EC2',
      'AWS S3',
      'AWS RDS',
      'AWS Amplify',
      'Secrets Manager',
      'IAM',
      'CI/CD',
    ],
  },
  {
    id: 'exp-2',
    role: 'Web Developer',
    company: 'CodeWorld Infotech Pvt Ltd',
    location: 'Solapur',
    period: 'Jun 2024 — Dec 2024',
    description:
      'Developed dynamic, database-driven web applications and managed live client deployments for production projects.',
    achievements: [
      'Developed dynamic, database-driven web applications using PHP and CodeIgniter',
      'Managed hosting, file deployment, and database configuration using cPanel for live client projects',
    ],
    technologies: ['PHP', 'CodeIgniter', 'MySQL', 'cPanel', 'JavaScript', 'HTML', 'CSS'],
  },
];

export const PROJECTS: Project[] = [
  {
    id: 'proj-1',
    title: 'GrowGrape.AI',
    category: 'AI / AgriTech',
    description:
      'AI-powered platform helping grape farmers with cultivation advice, disease identification, and pest analysis.',
    longDescription:
      'Built an AI-powered web application using Next.js and Node.js to help grape farmers resolve queries on cultivation, disease identification, and pest analysis. Integrated AI-driven prompt workflows for context-aware advisory responses, with satellite data for crop monitoring on the roadmap. Presented to the Ministry of Agriculture and Farmers Welfare, Government of India.',
    technologies: ['Next.js', 'Node.js', 'AI Prompts', 'Satellite Data'],
    metrics: [
      { label: 'Focus', value: 'Viticulture' },
      { label: 'Stack', value: 'Next.js' },
      { label: 'Status', value: 'Ongoing' },
    ],
    gradient: 'from-emerald-500/20 to-cyan-500/10',
    featured: true,
    year: '2025',
  },
  {
    id: 'proj-2',
    title: 'QR Pay Manager',
    category: 'FinTech PWA',
    description:
      'Next.js Progressive Web App for local shops to generate dynamic UPI QR codes for contactless payments.',
    longDescription:
      'Built a Next.js PWA with a Node.js backend enabling local shops to generate dynamic UPI QR codes. Supports multiple UPI IDs with labels, amount-based QR generation, and payment history by date. Fully offline-capable with 5-pin secure login and local-only data storage for privacy — a lightweight alternative to standard POS terminals.',
    technologies: ['Next.js', 'PWA', 'Node.js', 'UPI', 'Local Storage'],
    metrics: [
      { label: 'Mode', value: 'Offline' },
      { label: 'Auth', value: '5-pin' },
      { label: 'Privacy', value: 'Local' },
    ],
    gradient: 'from-cyan-500/20 to-blue-500/10',
    featured: true,
    year: '2025',
  },
  {
    id: 'proj-3',
    title: 'Easy Satellite App',
    category: 'Mobile / Space Tech',
    description:
      'React Native app with 3D Earth visualization for real-time tracking of 35 active satellites.',
    longDescription:
      'Cross-platform React Native app with role-based authentication (user/admin) using PHP, XAMPP, and MySQL. Integrates a 3D Earth model via Three.js WebView, converting TLE data from CelesTrak into lat/long/altitude with satellite.js. Tracks 35 satellites across LEO, MEO, and GEO. Presented as M.Sc. II research project at Sangameshwar College, Solapur — March 2025.',
    technologies: ['React Native', 'Three.js', 'satellite.js', 'PHP', 'MySQL'],
    metrics: [
      { label: 'Satellites', value: '35' },
      { label: 'Orbits', value: 'LEO–GEO' },
      { label: 'Platform', value: 'Mobile' },
    ],
    gradient: 'from-violet-500/20 to-cyan-500/10',
    featured: true,
    year: '2024–25',
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: 'frontend',
    title: 'Frontend',
    icon: Code2,
    skills: [
      { name: 'React.js', level: 92 },
      { name: 'Next.js', level: 90 },
      { name: 'JavaScript', level: 92 },
      { name: 'React Native', level: 82 },
      { name: 'HTML / CSS', level: 90 },
      { name: 'Tailwind CSS', level: 88 },
    ],
  },
  {
    id: 'backend',
    title: 'Backend',
    icon: Server,
    skills: [
      { name: 'Node.js', level: 90 },
      { name: 'Express.js', level: 88 },
      { name: 'PHP', level: 82 },
      { name: 'REST APIs', level: 90 },
      { name: 'CodeIgniter', level: 78 },
      { name: 'Webhooks', level: 85 },
    ],
  },
  {
    id: 'database',
    title: 'Database',
    icon: Database,
    skills: [
      { name: 'PostgreSQL', level: 88 },
      { name: 'MongoDB', level: 80 },
      { name: 'Neon PostgreSQL', level: 82 },
      { name: 'Redis', level: 78 },
      { name: 'MySQL', level: 85 },
      { name: 'DBeaver', level: 80 },
    ],
  },
  {
    id: 'devops',
    title: 'Cloud & DevOps',
    icon: Cloud,
    skills: [
      { name: 'AWS EC2', level: 78 },
      { name: 'AWS S3', level: 80 },
      { name: 'AWS RDS', level: 78 },
      { name: 'AWS Amplify', level: 75 },
      { name: 'Secrets Manager', level: 76 },
      { name: 'IAM', level: 78 },
      { name: 'CI/CD', level: 80 },
      { name: 'Git / GitHub', level: 92 },
    ],
  },
];

export const TIMELINE_EVENTS: TimelineEvent[] = [
  {
    id: 'tl-1',
    year: '2025',
    title: 'Full Stack Developer — BharatGo',
    description:
      'Joined BharatGo in Pune to build multi-tenant SaaS, ONDC commerce, payments, and Mobile POS features.',
    type: 'work',
  },
  {
    id: 'tl-2',
    year: '2025',
    title: 'GrowGrape.AI & Ministry Presentation',
    description:
      'Building AI viticulture advisory platform; presented to the Ministry of Agriculture and Farmers Welfare.',
    type: 'achievement',
  },
  {
    id: 'tl-3',
    year: '2025',
    title: 'M.Sc. Computer Science',
    description:
      'Completed Master of Computer Science at Sangameshwar College, Solapur (CGPA 9.36). Research project: Easy Satellite App.',
    type: 'education',
  },
  {
    id: 'tl-4',
    year: '2024',
    title: 'Web Developer — CodeWorld Infotech',
    description:
      'Built PHP/CodeIgniter client applications and managed live hosting deployments via cPanel.',
    type: 'work',
  },
  {
    id: 'tl-5',
    year: '2023',
    title: 'B.Sc. Electronics',
    description:
      'Graduated from Sangameshwar College, Solapur with CGPA 9.95.',
    type: 'education',
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
    id: 'phone',
    label: 'Phone',
    value: '+91 7741973805',
    href: 'tel:+917741973805',
    icon: Phone,
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
