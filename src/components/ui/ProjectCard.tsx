import * as React from 'react';
import { motion } from 'motion/react';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';
import { Project } from '../../types';
import { cn } from '../../lib/utils';

interface ProjectCardProps {
  project: Project;
  featured?: boolean;
  delay?: number;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, featured, delay = 0 }) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
      className={cn(
        'group relative bg-surface-container-highest rounded-xl overflow-hidden transition-all duration-500',
        featured ? 'md:col-span-12 lg:flex' : 'md:col-span-6'
      )}
    >
      <div className={cn(
        'relative overflow-hidden aspect-video',
        featured ? 'lg:w-3/5' : 'w-full'
      )}>
        <img
          src={project.image}
          alt={project.title}
          width={800}
          height={450}
          loading="lazy"
          decoding="async"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100"
        />
        <div className="absolute inset-0 bg-linear-to-t from-surface-container-low/80 via-transparent to-transparent" />
      </div>

      <div className={cn(
        'p-8 flex flex-col justify-center',
        featured ? 'lg:w-2/5' : 'w-full'
      )}>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map(tag => (
            <span
              key={tag}
              className="px-3 py-1 bg-secondary-container/20 text-secondary text-[10px] font-bold tracking-widest uppercase rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>

        <h3 className="text-2xl md:text-3xl font-headline font-bold text-primary mb-3">
          {project.title}
        </h3>

        <p className="text-on-surface-variant mb-8 leading-relaxed">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-4 mt-auto">
          {project.links.live && (
            <a
              href={project.links.live}
              className="inline-flex items-center gap-2 text-secondary font-bold text-sm hover:underline group/link"
            >
              Live Demo <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
            </a>
          )}
          {project.links.github && (
            <a
              href={project.links.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View ${project.title} source on GitHub`}
              className="inline-flex items-center gap-2 text-on-surface-variant hover:text-primary transition-colors"
            >
              <Github className="w-5 h-5" aria-hidden="true" />
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
};
