'use client';

import Button from '@/components/ui/Button';
import { useEffect, useState } from 'react';

const navLinks = [
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

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const downloadResume = async () => {
    try {
      const response = await fetch('/CV_Leander_Vanderbiesen.pdf');

      if (!response.ok) {
        throw new Error('Download failed');
      }

      const blob = await response.blob();

      const url = window.URL.createObjectURL(blob);

      const a = document.createElement('a');
      a.href = url;
      a.download = 'CV_leander_vanderbiesen.pdf';
      document.body.appendChild(a);
      a.click();

      window.URL.revokeObjectURL(url);
      document.body.removeChild(a);
    } catch (e) {
      console.error('Something went wrong downloading file:', e);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'glass py-4' : 'py-6'}`}
    >
      <div className="container-narrow flex items-center justify-between">
        <div>
          <a href="#" className="text-xl font-mono font-bold text-gradient">
            &lt;dev /&gt;
          </a>
        </div>
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map(link => {
            return (
              <a
                key={link.href}
                href={link.href}
                className="text-muted-foreground hover:text-primary transition-colors duration-300 text-sm font-medium"
              >
                {link.text}
              </a>
            );
          })}
          <Button variant="outline" size="sm" onClick={downloadResume}>
            Resume
          </Button>
        </div>
        <Button
          variant="ghost"
          size="lg"
          className="md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {!isMobileMenuOpen && <p>mobile</p>}
        </Button>
      </div>
    </nav>
  );
}
