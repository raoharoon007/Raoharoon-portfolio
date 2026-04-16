import * as React from 'react';
import { motion } from 'motion/react';
import { cn } from '../../lib/utils';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  title?: string;
  subtitle?: string;
  variant?: 'default' | 'low';
}

export const Section = ({
  children,
  className,
  id,
  title,
  subtitle,
  variant = 'default',
}: SectionProps) => {
  return (
    <section
      id={id}
      className={cn(
        'py-24 px-6 md:px-12',
        variant === 'low' ? 'bg-surface-container-low' : 'bg-surface',
        className
      )}
    >
      <div className="max-w-7xl mx-auto">
        {(title || subtitle) && (
          <div className="mb-16 space-y-2">
            {subtitle && (
              <span className="text-secondary font-headline text-sm font-bold tracking-widest uppercase block">
                {subtitle}
              </span>
            )}
            {title && (
              <h2 className="text-4xl md:text-5xl font-headline font-bold text-on-background tracking-tight">
                {title}
              </h2>
            )}
          </div>
        )}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {children}
        </motion.div>
      </div>
    </section>
  );
};
