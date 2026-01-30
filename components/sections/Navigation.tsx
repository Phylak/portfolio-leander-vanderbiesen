'use client';

import Button from '@/components/ui/Button';
import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import MobileMenu from '@/components/MobileMenu';
import { downloadResume } from '@/lib/utils';

export const navLinks = [
  {
    text: 'About',
    href: '#about',
  },
  {
    text: 'Projects',
    href: '#projects',
  },
  { text: 'Skills', href: '#skills' },
  {
    text: 'Github',
    href: '#github',
  },
  {
    text: 'Ask AI',
    href: '#askAI',
  },
  {
    text: 'Contact',
    href: '#contact',
  },
];

const Navigation: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (!isMobileMenuOpen) return;

    const handleOutsideClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest('nav')) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);
    return () => document.removeEventListener('mousedown', handleOutsideClick);
  }, [isMobileMenuOpen]);

  return (
    <header>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'glass py-4' : 'py-6'}`}
      >
        <div className="container-narrow flex items-center justify-between px-4 xl:px-0">
          <div>
            <a href="#" className="text-xl font-mono font-bold text-gradient">
              &lt;dev /&gt;
            </a>
          </div>
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map(link => (
              <a
                key={link.href}
                href={link.href}
                className="text-muted-foreground hover:text-primary transition-colors duration-300 text-sm font-medium"
              >
                {link.text}
              </a>
            ))}
            <Button variant="outline" size="sm" onClick={downloadResume} aria-label='Download resume'>
              Resume
            </Button>
          </div>
          <Button
            variant="ghost"
            size="lg"
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </Button>
          {isMobileMenuOpen && (
            <MobileMenu onClose={() => setIsMobileMenuOpen(false)} />
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navigation;
