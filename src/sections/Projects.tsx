import React from 'react';
import { Section } from '../components/ui/Section';
import { ProjectCard } from '../components/ui/ProjectCard';
import { PROJECTS } from '../constants';

export const Projects: React.FC = () => {
  return (
    <Section id="projects" subtitle="Projects" title="Selected Works">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
        {PROJECTS.map((project, index) => (
          <ProjectCard 
            key={project.id} 
            project={project} 
            featured={project.featured}
            delay={index * 0.1} 
          />
        ))}
      </div>
    </Section>
  );
};
