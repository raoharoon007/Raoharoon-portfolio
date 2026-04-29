import { Section } from '../components/ui/Section';
import { EXPERIENCES } from '../constants';
import { motion } from 'motion/react';

export const Experience = () => {
  return (
    <Section id="experience" subtitle="Career" title="Professional Journey" variant="low">
      <div className="space-y-12 max-w-4xl mx-auto">
        {EXPERIENCES.map((exp, index) => (
          <motion.div 
            key={exp.id} 
            initial={{ opacity: 0, x: index % 2 === 0 ? 20 : -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            className="relative pl-12 md:pl-0"
          >
            {/* Timeline Line */}
            <div className="absolute left-0 top-0 bottom-0 w-px bg-outline-variant/30 md:left-1/2 md:-translate-x-1/2" />
            
            <div className={`flex flex-col md:flex-row gap-12 items-start ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
              {/* Content */}
              <div className="md:w-1/2 space-y-4">
                <div className="flex flex-col gap-1">
                  <span className="text-secondary font-bold text-sm tracking-widest uppercase mb-1">
                    {exp.period}
                  </span>
                  <h3 className="text-2xl font-headline font-bold text-on-background leading-tight">
                    {exp.role}
                  </h3>
                  <p className="text-primary font-medium text-lg">{exp.company}</p>
                </div>
                <p className="text-on-surface-variant leading-relaxed">
                  {exp.description}
                </p>
                <div className="flex flex-wrap gap-2 pt-2">
                  {exp.skills.map(skill => (
                    <span key={skill} className="px-3 py-1 bg-surface-bright/50 text-[10px] font-bold tracking-widest uppercase rounded-full border border-outline-variant/10">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Dot with Pulse */}
              <div className="absolute left-[-5px] top-2 md:left-1/2 md:-translate-x-1/2 md:top-8 z-10 flex items-center justify-center">
                <div className="w-2.5 h-2.5 rounded-full bg-secondary" />
                <motion.div 
                  initial={{ scale: 0.8, opacity: 0.5 }}
                  animate={{ scale: 2.5, opacity: 0 }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
                  className="absolute w-2.5 h-2.5 rounded-full bg-secondary"
                />
              </div>
              
              {/* Spacer for the other side */}
              <div className="hidden md:block md:w-1/2" />
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};
