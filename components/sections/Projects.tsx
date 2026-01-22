import SectionHeading from '../ui/SectionHeading';
import { DynamicIcon } from 'lucide-react/dynamic';
import clsx from 'clsx';
import Image from 'next/image';

//TODO update skills
const featuredProjects = [
  {
    title: 'Brussels Airport App',
    description:
      'Developed a React Native mobile app, integrating Storyblok GraphQL API for dynamic content management. Implemented custom React hooks and filters with React Query for efficient flight and content search.',
    imageUrl: '/images/project-1.jpeg',
    imageAlt: 'Project One Illustration',
    technologies: ['React Native', 'TypeScript', 'Next.js'],
    projectUrl:
      'https://play.google.com/store/apps/details?id=be.brusselsairport.appyflight',
  },
  {
    title: 'Eneco Smart Meter App',
    description:
      'Built a React app bundled with Capacitorjs to support energy transition, featuring real-time graphs for energy consumption and smart charging capabilities for electric vehicle users with home charging stations.',
    imageUrl: '/images/project-1.jpeg',
    technologies: ['Next.js', 'Tailwind CSS', 'Node.js'],
    imageAlt: 'Project Two Illustration',
    projectUrl:
      'https://play.google.com/store/apps/details?id=com.enecogroup.apps.be.eneco.insights',
  },
  {
    title: 'FAAM (Digital Museum of Flanders)',
    description:
      'Developed a React Native mobile application for the Digital Museum of Flanders, enabling users to explore cultural exhibits interactively. Built a custom component to integrate the Google Maps API. Optimized a script to convert SVG files to JSON.',
    imageUrl: '/images/project-1.jpeg',
    technologies: ['React', 'TypeScript', 'CSS'],
    imageAlt: 'Project Three Illustration',
    projectUrl:
      'https://play.google.com/store/apps/details?id=vlaanderen.faam.app',
  },
  {
    title: 'iO digital company website',
    description:
      'Contributed to the development of iO’s large-scale corporate website, a React-based application built in a Next.js environment with Storyblok headless CMS.',
    imageUrl: '/images/project-1.jpeg',
    technologies: ['React', 'TypeScript', 'CSS'],
    imageAlt: 'Project Three Illustration',
    projectUrl: 'https://www.iodigital.com/',
  },
  {
    title: 'Hermanos Tattoos (Hobby Project)',
    description:
      'Developed a responsive website using React and Tailwind CSS, showcasing a local tattoo studio’s portfolio. Shipped with Vercel.',
    imageUrl: '/images/project-1.jpeg',
    technologies: ['React', 'TypeScript', 'CSS'],
    imageAlt: 'Project Three Illustration',
    projectUrl: 'https://hermanostattoos.be/',
  },
];

const Projects: React.FC = () => {
  return (
    <section id="projects" className="section-padding">
      <div className="container-narrow">
        <SectionHeading count="02" title="Featured Projects" />
        {featuredProjects.map(
          (
            {
              title,
              description,
              imageUrl,
              imageAlt,
              technologies,
              projectUrl,
            },
            index
          ) => (
            <div
              key={title}
              className={clsx(
                `grid lg:grid-cols-12 gap-4 items-center`,
                index % 2 === 0 ? 'lg:text-right' : '',
                index !== 0 ? 'mt-24' : ''
              )}
            >
              <div
                className={clsx(
                  `lg:col-span-7 relative group `,
                  index % 2 === 0 ? 'lg:order-2' : ''
                )}
              >
                <div className="relative group">
                  <div className="relative overflow-hidden rounded-xl">
                    <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-all duration-300 z-10" />
                    <Image
                      src={imageUrl}
                      alt={imageAlt}
                      width={665}
                      height={375}
                      quality={90}
                      className="w-full aspect-video object-cover grayscale group-hover:grayscale-0 transition-all duration-300"
                    />
                  </div>
                </div>
              </div>
              <div className="lg:col-span-5 lg:pl-0">
                <p className="text-primary font-mono text-sm mb-2">
                  Featured Project
                </p>
                <h3 className="text-xl md:text-2xl font-bold mb-4">{title}</h3>
                <div className="glass rounded-xl p-6 mb-4 relative z-20">
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {description}
                  </p>
                </div>
                <div
                  className={clsx(
                    'flex flex-wrap gap-3 mb-4 font-mono text-xs text-muted-foreground ',
                    index % 2 === 0 ? 'lg:justify-end' : ''
                  )}
                >
                  {technologies.map((tech, i) => (
                    <span key={i}>{tech}</span>
                  ))}
                </div>
                <a
                  href={projectUrl}
                  target="_blank"
                  rel="noreferrer"
                  className={clsx(
                    'text-foreground hover:text-primary transition-colors flex',
                    index % 2 === 0 ? 'lg:justify-end' : ''
                  )}
                >
                  <DynamicIcon name="external-link" size={20} />
                </a>
              </div>
            </div>
          )
        )}
      </div>
    </section>
  );
};

export default Projects;
