import SectionHeading from '@/components/ui/SectionHeading';
import InfoCard, { InfoCardProps } from '../InfoCard';

const InfoCards: InfoCardProps[] = [
  {
    title: 'Full-Stack Development',
    description:
      'Building end-to-end web applications and cross-platform mobile apps',
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

const About: React.FC = () => {
  return (
    <section className="section-padding" id="about">
      <div className="container-narrow">
        <SectionHeading count="01" title="About me" />
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-muted-foreground leading-relaxed">
              My professional journey is a blend of technical expertise and
              unique life experiences. After serving as a Petty Officer in the
              Belgian Navy, where I developed my discipline and problem-solving
              skills in high-pressure environments, I transitioned into the
              world of software development.
            </p>
            <br />
            <p className="text-muted-foreground leading-relaxed">
              Today, I leverage a full-stack mindset to deliver high-quality
              solutions, having worked with major organizations such as Brussels
              Airport, the Belgian government, and Eneco. I am passionate about
              writing clean, robust code, building fast and responsive user
              interfaces, bridging backend and frontend development, and staying
              at the forefront of modern tools and architectures.
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
};

export default About;
