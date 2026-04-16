import { Github, Linkedin, Twitter, Mail } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-surface-container-low border-t border-white/5 py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
        <div className="space-y-4 text-center md:text-left">
          <a href="#" className="font-headline text-2xl font-bold tracking-tighter text-on-background">
            RMH<span className="text-primary">.</span>
          </a>
          <p className="text-on-surface-variant max-w-xs">
            Building high-performance digital experiences with structural integrity.
          </p>
        </div>

        <div className="flex flex-col items-center md:items-end gap-6">
          <div className="flex gap-6">
            <a href="https://github.com/raoharoon007" target="_blank" rel="noopener noreferrer" className="text-on-surface-variant hover:text-primary transition-colors">
              <Github className="w-6 h-6" />
            </a>
            <a href="https://www.linkedin.com/in/rao-haroon" target="_blank" rel="noopener noreferrer" className="text-on-surface-variant hover:text-primary transition-colors">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="mailto:raoharoon007@gmail.com" className="text-on-surface-variant hover:text-primary transition-colors">
              <Mail className="w-6 h-6" />
            </a>
          </div>
          <p className="text-sm text-on-surface-variant/60">
            © {new Date().getFullYear()} Rao Muhammad Haroon. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
