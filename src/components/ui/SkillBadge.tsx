import * as React from 'react';
import { motion } from 'motion/react';
import * as Icons from 'lucide-react';
import { Terminal } from 'lucide-react';
import { Skill } from '../../types';

interface SkillBadgeProps {
  skill: Skill;
  delay?: number;
}

export const SkillBadge: React.FC<SkillBadgeProps> = ({ skill, delay = 0 }) => {
  // Use Simple Icons for tech logos, or fallback to Lucide for generic icons
  const IconsList = Icons as unknown as Record<string, React.FC<any>>;
  const isLucideIcon = IconsList[skill.icon];
  const Icon = isLucideIcon || Terminal;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -5, backgroundColor: 'var(--color-surface-bright)' }}
      className="bg-surface-container-highest p-6 rounded-xl flex flex-col gap-4 transition-colors cursor-default items-center text-center group"
    >
      <div className="w-12 h-12 flex items-center justify-center relative">
        {!isLucideIcon ? (
          <img 
            src={`https://cdn.simpleicons.org/${skill.icon}/white`} 
            alt={skill.name}
            className="w-10 h-10 object-contain group-hover:scale-110 transition-all duration-300 brightness-0 invert opacity-70 group-hover:opacity-100 group-hover:brightness-100"
            onError={(e) => {
              (e.target as HTMLImageElement).style.display = 'none';
            }}
          />
        ) : null}
        <div className={!isLucideIcon ? 'hidden' : ''}>
          <Icon className="w-8 h-8 text-primary group-hover:scale-110 transition-transform duration-300" />
        </div>
      </div>
      <span className="font-headline font-medium text-on-background">{skill.name}</span>
    </motion.div>
  );
};
