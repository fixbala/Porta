import type { Project, Skill, Certification, Experience } from './types';
import { Database, FileCode, Server, BotMessageSquare, Link as LinkIcon, Github, Linkedin, Mail, GraduationCap, Monitor, Cloud } from 'lucide-react';
import { ReactIcon, ReduxIcon, WhatsappIcon } from '@/components/icons';

// This file is now deprecated in favor of locale files in src/lib/locales
// It is kept for structure reference but the content is not used directly.

export const about = {
  name: 'Santiago Martínez Ayala',
  title: 'Desarrollador de Software',
  introduction: "Hola, soy",
  description: `Desarrollador de Software con sólida experiencia en desarrollo backend y frontend, especializado en la creación de soluciones escalables, eficientes y seguras. Experto en el diseño e implementación de microservicios, APIs RESTful y sistemas distribuidos utilizando tecnologías como Java, Go, Spring Boot, Python, SQL y Angular. Apasionado por la tecnología, me mantengo actualizado en las últimas tendencias de desarrollo de software, incluyendo frameworks modernos de frontend y prácticas de programación de alto rendimiento. Mi enfoque está en garantizar la calidad, la robustez y la fiabilidad en cada solución desarrollada, siempre alineado con los objetivos estratégicos de la organización.`
};

export const experiences: Experience[] = [
    {
        company: 'ARAJET',
        role: 'Desarrollador Fullstack',
        period: 'Diciembre 2025 - Actualidad',
        description: 'Migración de la arquitectura de bots, diseño, desarrollo, pruebas y despliegue de automatizaciones RPA, integrando flujos en Power Automate y optimizando procesos empresariales. Migración y modelado de bases de datos, creación de estructuras optimizadas y gestión de entornos, pipelines y control de versiones en Azure DevOps. Implementación end-to-end de nuevos requerimientos estratégicos, desde el backend hasta el frontend, incluyendo análisis, diseño de arquitectura y entrega productiva.'
    },
    {
        company: 'SC SOLUTIONS',
        role: 'Desarrollador de Software',
        period: 'Octubre 2024 - Noviembre 2025',
        description: 'Instalacion y manejo de infraestrucutra TI. Brindar soporte y transferencia de conocimiento al personal en el uso de aplicaciones y herramientas tecnológicas.'
    },
    {
        company: 'LOGOSOFT SOLUTIONS S.A.',
        role: 'Desarrollador de Software',
        period: 'Abril 2024 - Octubre 2024',
        description: 'Desarrollé y mantuve software crítico para transacciones bancarias. Levanté requerimientos para la integración de nuevas funciones transaccionales. Gestioné y administré plataformas transaccionales con alta disponibilidad.'
    },
    {
        company: 'CULTIVARTECH',
        role: 'Desarrollador Backend',
        period: 'Enero 2023 - Abril 2024',
        description: 'Desarrollé y optimicé la estructura del backend, levanté y documenté requerimientos funcionales, asegurando el cumplimiento de los objetivos del proyecto. Implementé microservicios escalables y desarrollé la estructura del frontend con Angular.'
    }
];

export const skillsByCategory = [
  {
    title: 'Backend',
    icon: Server,
    technologies: ['Java', 'Spring Boot', 'Python', 'Go', 'Node.js', 'Microservicios', 'RESTful APIs'],
  },
  {
    title: 'Frontend',
    icon: Monitor,
    technologies: ['Angular', 'HTML5', 'CSS3', 'JavaScript', 'TypeScript'],
  },
  {
    title: 'Bases de Datos',
    icon: Database,
    technologies: ['MySQL', 'PostgreSQL', 'MongoDB', 'SQL Server'],
  },
  {
    title: 'Cloud & DevOps',
    icon: Cloud,
    technologies: ['AWS', 'Azure', 'Docker', 'Kubernetes', 'Jenkins'],
  },
];

export const skills: Skill[] = [
  { name: 'HTML', icon: FileCode },
  { name: 'CSS', icon: FileCode },
  { name: 'JavaScript', icon: FileCode },
  { name: 'React', icon: ReactIcon },
  { name: 'Redux', icon: ReduxIcon },
  { name: 'Node.js', icon: Server },
  { name: 'Express', icon: Server },
  { name: 'PostgreSQL', icon: Database },
  { name: 'Sequelize', icon: Database },
];

export const certifications: Certification[] = [
    {
      source: 'UDEMY',
      courses: [
        'Spring Framework y Spring Boot',
        'Base de Datos MySQL Server',
        'C# y SQL Server',
        'C# y Microsoft SQL Server',
        'Universidad Angular',
      ],
    },
];

export const projects: Project[] = []; // Deprecated, moved to locales

export const navigation = [
    { name: 'Sobre mi', href: '#about' },
    { name: 'Experiencia', href: '#experience' },
    { name: 'Habilidades', href: '#skills' },
    { name: 'Proyectos', href: '#projects' },
    { name: 'Certificaciones', href: '#certifications' },
    { name: 'Recomendador AI', href: '#recommendation' },
    { name: 'Contacto', href: '#contact' },
];

export const socialLinks = [
    { name: 'GitHub', href: 'https://github.com/fixbala', icon: Github },
    { name: 'LinkedIn', href: 'https://www.linkedin.com/in/santiago-martinez-ayala/', icon: Linkedin },
    { name: 'Email', href: 'mailto:ipfixbala@gmail.com', icon: Mail },
    { name: 'WhatsApp', href: 'https://wa.me/34663864059', icon: WhatsappIcon },
];
