import { Project, Experience, Skill } from './types';

export const PROJECTS: Project[] = [
  {
    id: 'ai-health',
    title: 'AI Health Web Assistant',
    description: 'A real-time chat and voice system using Web Audio API with JWT authentication and medical image upload features.',
    image: '/images/ai-health.webp',
    tags: ['React.js', 'Web Audio API', 'JWT', 'AI'],
    links: {
      live: 'https://ai-health-assistant-web.vercel.app',
      github: 'https://github.com/raoharoon007/ai-health-web',
    },
    featured: true
  },
  {
    id: 'br-funnels',
    title: 'BR Funnels - Landing Page',
    description: 'High-performance responsive landing page built with Next.js and Tailwind CSS, optimized for maximum UX and conversion.',
    image: '/images/br-funnels.webp',
    tags: ['Next.js', 'Tailwind CSS', 'Performance'],
    links: {
      live: 'https://br-funnels-web.vercel.app',
      github: 'https://github.com/raoharoon007/br-funnels-web',
    },
    featured: true
  },
  {
    id: 'ocr-doc',
    title: 'Document Classification using OCR',
    description: 'Automated document classification system using OCR to reduce manual effort through intelligent sorting and efficient UI.',
    image: '/images/ocr-doc.png',
    tags: ['OCR', 'Automation', 'UI Design'],
    links: {
      
    },
    featured: true
  }
];

export const EXPERIENCES: Experience[] = [
  {
    id: 'irs',
    role: 'Front End Developer',
    company: 'Interactive Robust Solutions',
    period: 'Nov 2025 — Current',
    description: 'Developing high-performance SPAs and integrating backend services with a focus on real-time features.',
    achievements: [
      'Developed high-performance single-page applications using React.js, Next.js, and Vite.',
      'Converted Figma designs into responsive UI using Tailwind CSS.',
      'Integrated FastAPI-based backend services using Axios, handling JWT authentication and efficient data flow.',
      'Implemented real-time voice streaming using Web Audio API.'
    ],
    skills: ['React.js', 'Next.js', 'FastAPI', 'Web Audio API']
  },
  {
    id: 'ccpl',
    role: 'Development Fellow Programming',
    company: 'Common Criteria Pakistan Lab',
    period: 'Jul 2024 — Jun 2025',
    description: 'Built management systems ensuring compliance with international ISO standards.',
    achievements: [
      'Developed an Evaluation Management System using React.js and PHP.',
      'Ensured compliance with ISO 27001, ISO/IEC 17025, and ISO 9001 standards.',
      'Designed workflows for evaluation processes and reporting.',
      'Managed secure data storage using MySQL.'
    ],
    skills: ['React.js', 'PHP', 'MySQL', 'Compliance']
  },
  {
    id: 'trt',
    role: 'Vue JS and React JS Intern',
    company: 'The Revolution Technologies',
    period: 'Apr 2024 — Jul 2024',
    description: 'Contributed to responsive applications and shipping system frontends in an agile environment.',
    achievements: [
      'Built responsive applications using Vue.js and React.js.',
      'Contributed to the shipping system frontend (AFG Global Shipping).',
      'Collaborated in an agile development team.'
    ],
    skills: ['Vue.js', 'React.js', 'Agile']
  }
];

export const SKILLS: Skill[] = [
  { name: 'React.js', icon: 'react', category: 'Frontend' },
  { name: 'Next.js', icon: 'nextdotjs', category: 'Frontend' },
  { name: 'Vue.js', icon: 'vuedotjs', category: 'Frontend' },
  { name: 'TypeScript', icon: 'typescript', category: 'Frontend' },
  { name: 'JavaScript', icon: 'javascript', category: 'Frontend' },
  { name: 'Tailwind CSS', icon: 'tailwindcss', category: 'Frontend' },
  { name: 'HTML5', icon: 'html5', category: 'Frontend' },
  { name: 'API Integration', icon: 'fastapi', category: 'Backend' },
  { name: 'MySQL', icon: 'mysql', category: 'Backend' },
  { name: 'GitHub', icon: 'github', category: 'Tools' },
  { name: 'Postman', icon: 'postman', category: 'Tools' },
  { name: 'Axios', icon: 'axios', category: 'Tools' },
  { name: 'TanStack Query', icon: 'reactquery', category: 'Tools' },
  { name: 'Vite', icon: 'vite', category: 'Tools' },
  { name: 'Bootstrap', icon: 'bootstrap', category: 'Frontend' },
  { name: 'Framer Motion', icon: 'framer', category: 'Frontend' }
];
