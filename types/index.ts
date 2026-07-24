import type { LucideIcon } from 'lucide-react';

export interface NavLink {
  label: string;
  href: string;
}

export interface SocialLink {
  label: string;
  href: string;
  icon: LucideIcon;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  description: string;
  achievements: string[];
  technologies: string[];
}

export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  longDescription: string;
  technologies: string[];
  metrics: { label: string; value: string }[];
  gradient: string;
  featured: boolean;
  year: string;
}

export interface SkillCategory {
  id: string;
  title: string;
  icon: LucideIcon;
  skills: Skill[];
}

export interface Skill {
  name: string;
  level: number;
}

export interface Stat {
  id: string;
  label: string;
  value: string;
  suffix: string;
}

export interface TimelineEvent {
  id: string;
  year: string;
  title: string;
  description: string;
  type: 'work' | 'education' | 'achievement';
}

export interface ContactMethod {
  id: string;
  label: string;
  value: string;
  href: string;
  icon: LucideIcon;
}
