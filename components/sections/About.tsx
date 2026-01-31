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
    title: 'Headless CMS Solutions',
    description:
      'Integrating modern CMS platforms like Storyblok and Sitecore for dynamic content management',
    iconName: 'database',
  },
  {
    title: 'Performance Optimization',
    description:
      'Creating fast, accessible, and responsive user interfaces with modern React patterns',
    iconName: 'zap',
  },
  {
    title: 'Mobile Development',
    description:
      'Shipping cross-platform apps with React Native, Capacitor.js and Expo for iOS and Android',
    iconName: 'smartphone',
  },
];

const styledListItem = `relative pl-6 text-muted-foreground before:absolute before:left-0 before:top-[0.6em] before:h-1.5 before:w-1.5 before:rounded-full before:transition-all before:duration-300 hover:before:scale-125 before:bg-primary before:shadow-[0_0_8px_hsl(var(--primary)/0.5)]`;

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
            <br />
            {/* TODO fix this ul */}
            <p className="text-muted-foreground leading-relaxed">
              I specialize in building fast, accessible, and responsive
              applications using React, TypeScript, and Node.js. My expertise
              extends to:
            </p>
            <br />
            <ul className="space-y-3">
              <li className={styledListItem}>
                <span>
                  <span className="text-primary">Modern CMS Integrations</span>:
                  Streamlining content management through Storyblok, Sitecore
                  within Next.js environments.
                </span>
              </li>
              <li className={styledListItem}>
                <span>
                  <span className="text-primary">
                    Complex Technical Solutions
                  </span>
                  : Integrating REST APIs and GraphQL, developing custom React
                  hooks, and managing complex application states using the React
                  Context API.
                </span>
              </li>
              <li className={styledListItem}>
                <span>
                  <span className="text-primary">
                    Cross-Platform Development
                  </span>
                  : Building and shipping mobile apps using React Native and
                  Capacitorjs.
                </span>
              </li>
            </ul>
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
