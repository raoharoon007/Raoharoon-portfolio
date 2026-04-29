import * as React from 'react';
import { motion } from 'motion/react';
import * as Icons from 'lucide-react';
import { Terminal } from 'lucide-react';
import { Skill } from '../../types';
import { useTheme } from '../../context/ThemeContext';

interface SkillBadgeProps {
  skill: Skill;
  delay?: number;
}

export const SkillBadge: React.FC<SkillBadgeProps> = ({ skill, delay = 0 }) => {
  const { theme } = useTheme();
  // Use Simple Icons for tech logos, or fallback to Lucide for generic icons
  const IconsList = Icons as unknown as Record<string, React.FC<any>>;
  const isLucideIcon = IconsList[skill.icon];
  const Icon = isLucideIcon || Terminal;

  // Simple Icons color based on theme
  const iconColor = theme === 'dark' ? 'white' : '1a1a2e';

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -5 }}
      className="bg-surface p-6 rounded-xl flex flex-col gap-4 transition-all cursor-default items-center text-center group border border-outline-variant/10 hover:border-primary/40 hover:bg-surface-bright shadow-sm"
    >
      <div className="w-12 h-12 flex items-center justify-center relative">
        {!isLucideIcon ? (
          <img 
            key={`${skill.icon}-${theme}`}
            src={`https://cdn.simpleicons.org/${skill.icon}/${iconColor}`} 
            alt={skill.name}
            className="w-10 h-10 object-contain group-hover:scale-110 transition-all duration-300 opacity-90 group-hover:opacity-100"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.style.display = 'none';
              const fallback = target.nextElementSibling as HTMLElement;
              if (fallback) fallback.style.display = 'block';
            }}
          />
        ) : null}
        <div className={!isLucideIcon ? 'hidden' : 'block'}>
          <Icon className="w-8 h-8 text-primary group-hover:scale-110 transition-transform duration-300" />
        </div>
      </div>
      <span className="font-headline font-bold text-sm tracking-tight text-on-background group-hover:text-primary transition-colors">
        {skill.name}
      </span>
    </motion.div>
  );
};
