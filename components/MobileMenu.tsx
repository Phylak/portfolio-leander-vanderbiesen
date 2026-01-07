import { navLinks } from '@/components/sections/Navigation';
import Button from '@/components/ui/Button';
import { downloadResume } from '@/lib/utils';

interface MobileMenuProps {
  onClose: () => void;
}

const MobileMenu = ({ onClose }: MobileMenuProps) => {
  return (
    <nav className="absolute top-16 z-50 md:hidden mx-6 mt-4 p-6 glass animate-fade-up rounded-xl w-4/5">
      <div className="flex flex-col gap-4">
        {navLinks.map(link => (
          <a
            key={link.href}
            href={link.href}
            className="text-muted-foreground hover:text-primary"
            onClick={onClose}
          >
            {link.text}
          </a>
        ))}
      </div>
      <Button
        variant="outline"
        size="sm"
        className="mt-4 w-full"
        onClick={downloadResume}
      >
        Resume
      </Button>
    </nav>
  );
};

export default MobileMenu;
