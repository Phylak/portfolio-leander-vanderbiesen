import SectionHeading from '@/components/ui/SectionHeading';
import InfoCard, { InfoCardProps } from '../ui/InfoCard';

// TODO adjust copy
const InfoCards: InfoCardProps[] = [
  {
    title: 'Full-Stack Development',
    description:
      'Building end-to-end web applications with modern technologies',
    iconName: 'globe',
  },
  {
    title: 'API Development',
    description: 'Designing robust RESTful APIs and integrations with Node.js',
    iconName: 'code-2',
  },
  {
    title: 'AI Integration',
    description:
      'Implementing intelligent features using cutting-edge AI models',
    iconName: 'cpu',
  },
];

export default function About() {
  return (
    <section className="section-padding" id="about">
      <div className="container-narrow">
        <SectionHeading count="01" title="About me" />
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            {/*TODO adjust text*/}
            <p className="text-muted-foreground leading-relaxed">
              Hello! I'm a passionate developer who loves building things that
              live on the internet. My interest in web development started back
              when I discovered how code could bring ideas to life.
            </p>
            <br />
            <p className="text-muted-foreground leading-relaxed">
              Fast-forward to today, and I've had the privilege of working on
              various projects ranging from small business websites to complex
              web applications. My main focus these days is building accessible,
              inclusive products and digital experiences.
            </p>
            <br />
            <p className="text-muted-foreground leading-relaxed">
              I'm particularly excited about the intersection of traditional web
              development and artificial intelligence. I believe AI can enhance
              user experiences in meaningful ways, and I'm constantly exploring
              new ways to integrate these technologies.
            </p>
          </div>
          <div>
            {InfoCards.map(({ title, description, iconName }) => (
              <InfoCard
                key={title}
                title={title}
                description={description}
                iconName={iconName}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
