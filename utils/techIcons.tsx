import type { IconType } from 'react-icons';
import {
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiPhp,
  SiMysql,
  SiJavascript,
  SiHtml5,
  SiCss,
  SiCodeigniter,
  SiCpanel,
  SiRedis,
  SiMongodb,
  SiTailwindcss,
  SiExpress,
  SiGit,
  SiGithub,
  SiPostman,
  SiDocker,
  SiPhonepe,
  SiThreedotjs,
} from 'react-icons/si';
import { FaAws, FaDatabase, FaServer, FaCloud, FaLock, FaKey, FaMobileAlt } from 'react-icons/fa';

const TECH_ICON_MAP: Record<string, IconType> = {
  // Frontend
  React: SiReact,
  'React.js': SiReact,
  'React Native': SiReact,
  'Next.js': SiNextdotjs,
  JavaScript: SiJavascript,
  HTML: SiHtml5,
  CSS: SiCss,
  'HTML / CSS': SiHtml5,
  'Tailwind CSS': SiTailwindcss,
  'Three.js': SiThreedotjs,
  PWA: FaMobileAlt,

  // Backend
  'Node.js': SiNodedotjs,
  'Express.js': SiExpress,
  Express: SiExpress,
  PHP: SiPhp,
  CodeIgniter: SiCodeigniter,
  'REST APIs': FaServer,
  Webhooks: FaServer,
  'AI Prompts': FaCloud,

  // Databases
  PostgreSQL: SiPostgresql,
  'Neon PostgreSQL': SiPostgresql,
  MySQL: SiMysql,
  MongoDB: SiMongodb,
  Redis: SiRedis,
  DBeaver: FaDatabase,

  // Payments / commerce
  PhonePe: SiPhonepe,
  ONDC: FaCloud,
  UPI: FaMobileAlt,

  // AWS
  AWS: FaAws,
  'AWS EC2': FaAws,
  'AWS S3': FaAws,
  'AWS RDS': FaAws,
  'AWS Amplify': FaAws,
  Amplify: FaAws,
  'Secrets Manager': FaLock,
  'Secret Manager': FaLock,
  IAM: FaKey,
  EC2: FaAws,
  S3: FaAws,
  RDS: FaAws,

  // DevOps / tools
  'CI/CD': FaServer,
  cPanel: SiCpanel,
  Git: SiGit,
  'Git / GitHub': SiGithub,
  GitHub: SiGithub,
  Postman: SiPostman,
  Ngrok: FaCloud,
  Docker: SiDocker,
  'Local Storage': FaDatabase,
  'satellite.js': FaCloud,
  'Satellite Data': FaCloud,
};

export function getTechIcon(tech: string): IconType {
  return TECH_ICON_MAP[tech] ?? FaCloud;
}
