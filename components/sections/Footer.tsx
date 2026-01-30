import { DynamicIcon } from 'lucide-react/dynamic';

const Footer: React.FC = () => {
  return (
    <footer className="py-8 px-6 border-t border-border">
      <div className="container-narrow text-center flex items-center flex-col md:flex-row justify-between gap-4">
        <p className="text-muted-foreground text-sm font-mono">
          Designed & Built with 💻 by{' '}
          <span className="text-primary">Leander Vanderbiesen</span>
        </p>
        <div className="text-muted-foreground flex">
          <a href="https://github.com/phylak" target="_blank" rel="noreferrer">
            <DynamicIcon
              name="github"
              size={24}
              className="mr-2  hover:text-primary hover:cursor-pointer"
              aria-label='Visit my Github page'
            />
          </a>
          <a
            href="https://www.linkedin.com/in/leander-vanderbiesen-4814bb195/"
            target="_blank"
            rel="noreferrer"
            aria-label='Visit my LinkedIn profile'
          >
            <DynamicIcon
              name="linkedin"
              size={24}
              className="hover:text-primary hover:cursor-pointer"
            />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
