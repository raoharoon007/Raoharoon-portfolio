import * as React from 'react';
import { motion, AnimatePresence } from 'motion/react';

export const Preloader = () => {
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500); // 2.5 seconds splash

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ 
            y: '-100%',
            transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] }
          }}
          className="fixed inset-0 z-9999 flex items-center justify-center bg-background"
        >
          <div className="relative overflow-hidden">
            <motion.div
              initial={{ y: 100 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
              className="flex flex-col items-center text-center gap-4"
            >
              <h1 className="text-3xl md:text-5xl font-headline font-bold tracking-tighter text-on-background">
                Rao Muhammad Haroon<span className="text-primary">.</span>
              </h1>
              <div className="flex items-center gap-4">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: 40 }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                  className="h-px bg-primary/50"
                />
                <p className="text-sm md:text-lg uppercase tracking-[0.3em] font-bold text-on-surface-variant/70">
                  Front End Developer
                </p>
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: 40 }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                  className="h-px bg-primary/50"
                />
              </div>
            </motion.div>
            
            {/* Loading progress line */}
            <motion.div 
              className="absolute bottom-0 left-0 h-[2px] bg-primary"
              initial={{ width: 0 }}
              animate={{ width: '100%' }}
              transition={{ duration: 2.2, ease: "easeInOut" }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
