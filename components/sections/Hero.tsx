import Button from '../ui/Button';

const Hero: React.FC = () => {
  return (
    <section className="min-h-screen flex items-center justify-center section-padding pt-32 relative overflow-hidden">
      <div className="absolute top-1/4 -left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-1/4 -right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float delay-300"></div>
      <div className="container-narrow relative z-10">
        <div className="max-w-3xl">
          <p
            className="font-mono text-gradient text-lg animate-fade-up"
            style={{ animationDelay: '100ms', animationFillMode: 'forwards' }}
          >
            Hi, my name is
          </p>
          <h1
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 animate-fade-up"
            style={{ animationDelay: '200ms', animationFillMode: 'forwards' }}
          >
            <span>Leander.</span>
          </h1>
          <h2
            className="text-3xl md:text-5xl lg:text-6xl text-muted-foreground mb-4 animate-fade-up"
            style={{ animationDelay: '300ms', animationFillMode: 'forwards' }}
          >
            I build things for the web.
          </h2>
          <p
            className="text-lg md:text-xl lg:text-2xl text-muted-foreground leading-9 animate-fade-up mb-8 lg:mb-12"
            style={{ animationDelay: '400ms', animationFillMode: 'forwards' }}
          >
            I am a dedicated Front-end developer living in Zürich with 5+ years
            crafting scalable web and mobile apps. Specializing in{' '}
            <span className="text-gradient font-semibold">React</span>,{' '}
            <span className="text-gradient font-semibold">TypeScript</span>, and{' '}
            <span className="text-gradient font-semibold">Node.js</span>. I've
            delivered solutions for clients like Brussels Airport, Eneco, and
            the Belgian Government. Passionate about seamless UI/UX, API
            integrations, and agile teamwork, I'm a native Dutch speaker fluent
            in English. Let's build something innovative together.
          </p>
        </div>
        <div
          className="flex flex-wrap gap-4 mb-12 animate-fade-up opacity-0"
          style={{ animationDelay: '500ms', animationFillMode: 'forwards' }}
        >
          <Button
            variant="hero"
            size="lg"
            className="animate-fade-up"
            asChild
            aria-label="View my work"
          >
            <a href="#projects">View my work</a>
          </Button>
          <Button variant="glass" size="lg" asChild aria-label="Get in touch">
            <a href="#contact">Get in touch</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
