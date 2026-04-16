import React from 'react';
import { Section } from '../components/ui/Section';
import { SkillBadge } from '../components/ui/SkillBadge';
import { SKILLS } from '../constants';

export const Skills: React.FC = () => {
  return (
    <Section id="skills" subtitle="Expertise" title="Technical Arsenal" variant="low">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
        {SKILLS.map((skill, index) => (
          <SkillBadge key={skill.name} skill={skill} delay={index * 0.05} />
        ))}
      </div>
    </Section>
  );
};
