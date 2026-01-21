import SectionHeading from '../ui/SectionHeading';
import { DynamicIcon } from 'lucide-react/dynamic';
import clsx from 'clsx';
import Image from 'next/image';

const featuredProjects = [
  {
    title: 'Project One',
    description: 'A brief description of Project One.',
    imageUrl: '/images/project-1.jpeg',
    imageAlt: 'Project One Illustration',
    technologies: ['React', 'TypeScript', 'CSS'],
    projectUrl: '#',
  },
  {
    title: 'Project Two',
    description: 'A brief description of Project Two.',
    imageUrl: '/images/project-1.jpeg',
    technologies: ['Next.js', 'Tailwind CSS', 'Node.js'],
    imageAlt: 'Project Two Illustration',
    projectUrl: '#',
  },
  {
    title: 'Project Three',
    description: 'A brief description of Project Three.',
    imageUrl: '/images/project-1.jpeg',
    technologies: ['React', 'TypeScript', 'CSS'],
    imageAlt: 'Project Three Illustration',
    projectUrl: '#',
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
