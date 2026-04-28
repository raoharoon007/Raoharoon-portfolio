import { motion } from 'motion/react';
import { Section } from '../components/ui/Section';

export const About = () => {
  return (
    <Section id="about" subtitle="About Me" title="Engineering with Purpose">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <div className="space-y-6 text-lg text-on-surface-variant leading-relaxed">
          <p>
            I am a dedicated Front End Developer with a strong foundation in Computer Science,
            having graduated from the Institute of Space Technology, Islamabad. I specialize
            in building interactive, robust, and scalable single-page applications.
          </p>
          <p>
            My professional journey includes developing complex systems at Interactive Robust Solutions
            and ensuring compliance with international ISO standards at Common Criteria Pakistan Lab.
            I am passionate about converting intricate designs into high-performance user interfaces.
          </p>
          <div className="grid grid-cols-2 gap-8 pt-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <p className="text-primary font-headline font-bold text-3xl">1+</p>
              <p className="text-sm uppercase tracking-widest font-bold text-on-surface-variant">Years Experience</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <p className="text-secondary font-headline font-bold text-3xl">5+</p>
              <p className="text-sm uppercase tracking-widest font-bold text-on-surface-variant">Projects Delivered</p>
            </motion.div>
          </div>
        </div>

        <div className="relative aspect-4/5 md:aspect-square group">
          <div className="absolute inset-0 border-2 border-primary/20 rounded-2xl translate-x-4 translate-y-4 md:translate-x-6 md:translate-y-6 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-500" />
          <div className="absolute inset-0 bg-surface-container-highest rounded-2xl overflow-hidden glass-panel">
            <img
              src="/images/me.png"
              alt="Rao Muhammad Haroon - Front End Developer"
              width={600}
              height={600}
              loading="eager"
              fetchPriority="high"
              decoding="sync"
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100"
            />
          </div>
        </div>
      </div>
    </Section>
  );
};
