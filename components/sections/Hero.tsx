const Hero: React.FC = () => {
  // TODO fix animation delay
  return (
    <section className="relative min-h-screen flex items-center justify-center section-padding overflow-hidden pt-32">
      <div className="container-narrow">
        <div className="max-w-3xl">
          <p className="font-mono text-gradient text-lg animate-fade-up delay-100">
            Hi, my name is
          </p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 animate-fade-up delay-200">
            <span>Leander.</span>
          </h1>
          <h2 className="text-3xl md:text-5xl lg:text-6xl text-muted-foreground mb-4 animate-fade-up delay-300">
            I build things for the web.
          </h2>
          <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground leading-9 animate-fade-up delay-400">
            I'm a full-stack developer specializing in building exceptional
            digital experiences. Currently focused on creating accessible,
            human-centered products with{' '}
            <span className="text-gradient font-semibold">Node.js</span> and{' '}
            <span className="text-gradient font-semibold">AI integrations</span>
            .
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
