import * as React from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'motion/react';
import { Menu, X, Github, Linkedin, Moon, Sun } from 'lucide-react';
import { Button } from '../ui/Button';
import { cn } from '../../lib/utils';
import { useTheme } from '../../context/ThemeContext';

export const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const { scrollY } = useScroll();
  const { theme, toggleTheme } = useTheme();
  
  const backgroundColor = useTransform(
    scrollY,
    [0, 100],
    ['var(--color-surface-container-low)', 'var(--color-surface-container-highest)']
  );
  
  const backdropBlur = useTransform(
    scrollY,
    [0, 100],
    ['blur(0px)', 'blur(16px)']
  );

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    
    // Small delay to allow menu to close before scrolling
    setTimeout(() => {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 300);
  };

  return (
    <motion.nav
      style={{ backgroundColor, backdropBlur }}
      className="fixed top-0 left-0 right-0 z-50 border-b border-outline-variant/10 transition-colors"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 h-20 flex items-center justify-between">
        <a href="#" className="font-headline text-2xl font-bold tracking-tighter text-on-background">
          RMH<span className="text-primary">.</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className="text-sm font-headline font-medium text-on-surface-variant hover:text-primary transition-colors"
            >
              {link.name}
            </a>
          ))}
          <div className="h-4 w-px bg-outline-variant/30" />
          <div className="flex items-center gap-4">
            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="text-on-surface-variant hover:text-primary transition-colors p-2 rounded-full hover:bg-outline-variant/10"
            >
              <AnimatePresence mode="wait">
                {theme === 'dark' ? (
                  <motion.div
                    key="sun"
                    initial={{ scale: 0.5, rotate: -90, opacity: 0 }}
                    animate={{ scale: 1, rotate: 0, opacity: 1 }}
                    exit={{ scale: 0.5, rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Sun className="w-5 h-5" aria-hidden="true" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="moon"
                    initial={{ scale: 0.5, rotate: 90, opacity: 0 }}
                    animate={{ scale: 1, rotate: 0, opacity: 1 }}
                    exit={{ scale: 0.5, rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Moon className="w-5 h-5" aria-hidden="true" />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
            <a href="https://github.com/raoharoon007" target="_blank" rel="noopener noreferrer" aria-label="GitHub profile" className="text-on-surface-variant hover:text-primary transition-colors">
              <Github className="w-5 h-5" aria-hidden="true" />
            </a>
            <a href="https://www.linkedin.com/in/rao-haroon" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profile" className="text-on-surface-variant hover:text-primary transition-colors">
              <Linkedin className="w-5 h-5" aria-hidden="true" />
            </a>
          </div>
          <a href="/cv.pdf" download>
            <Button size="sm" className="ml-4">
              Resume
            </Button>
          </a>
        </div>

        {/* Mobile Toggle & Theme */}
        <div className="flex items-center gap-2 md:hidden">
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="text-on-surface-variant p-2 rounded-full hover:bg-outline-variant/10 transition-colors"
          >
            <AnimatePresence mode="wait">
              {theme === 'dark' ? (
                <motion.div
                  key="sun"
                  initial={{ scale: 0.5, rotate: -90, opacity: 0 }}
                  animate={{ scale: 1, rotate: 0, opacity: 1 }}
                  exit={{ scale: 0.5, rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Sun className="w-5 h-5" aria-hidden="true" />
                </motion.div>
              ) : (
                <motion.div
                  key="moon"
                  initial={{ scale: 0.5, rotate: 90, opacity: 0 }}
                  animate={{ scale: 1, rotate: 0, opacity: 1 }}
                  exit={{ scale: 0.5, rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Moon className="w-5 h-5" aria-hidden="true" />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
          <button
            className="text-on-background p-2 rounded-lg hover:bg-outline-variant/10 transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
          >
            {isOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="md:hidden absolute top-20 left-0 right-0 bg-surface-container-low/95 backdrop-blur-xl border-b border-outline-variant/10 overflow-hidden"
          >
            <div className="p-6 flex flex-col gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="text-lg font-headline font-medium text-on-background hover:text-primary transition-colors py-2"
                >
                  {link.name}
                </a>
              ))}
              <div className="flex gap-6 py-4 border-t border-outline-variant/10">
                <a href="https://github.com/raoharoon007" target="_blank" rel="noopener noreferrer" aria-label="GitHub profile" className="p-2 -m-2 hover:text-primary transition-colors">
                  <Github className="w-6 h-6 text-on-surface-variant" aria-hidden="true" />
                </a>
                <a href="https://www.linkedin.com/in/rao-haroon" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profile" className="p-2 -m-2 hover:text-primary transition-colors">
                  <Linkedin className="w-6 h-6 text-on-surface-variant" aria-hidden="true" />
                </a>
              </div>
              <a href="/cv.pdf" download className="w-full">
                <Button className="w-full py-4 text-lg">Resume</Button>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};
