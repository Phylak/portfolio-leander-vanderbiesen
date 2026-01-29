import SectionHeading from '../ui/SectionHeading';

const SkillsArray = [
  {
    title: 'Frontend',
    skills: [
      'React',
      'TypeScript',
      'JavaScript (ES6+)',
      'Next.js',
      'React Native',
      'HTML5',
      'Tailwind CSS',
    ],
  },
  {
    title: 'Backend',
    skills: [
      'Node.js',
      'REST APIs',
      'GraphQL',
      'MySQL',
      'Basic PHP - Symfony/Laravel',
    ],
  },
  {
    title: 'Devops & Tools',
    skills: [
      'Git',
      'GitHub Actions',
      'Postman',
      'Google Cloud',
      'Google Lighthouse',
      'Google Firebase',
      'Algolia Search',
      'Capacitor.js',
      'GitLab CI',
      'Storybook',
      'Xcode & Android Studio',
      'iOS & Android Deployment',
      'Vercel',
      'AI Tools',
    ],
  },
  {
    title: 'CMS & Analytics',
    skills: [
      'Storyblok',
      'Google Analytics',
      'Google Tag Manager',
      'HubSpot',
      'Sitecore',
    ],
  },
  {
    title: 'Testing & Methodologies',
    skills: ['Jest Testing Library', 'Scrum & Agile'],
  },
];

const Skills: React.FC = () => {
  return (
    <section id="skills" className="section-padding">
      <div className="container-narrow">
        <SectionHeading count="03" title="Skills & Technologies" />
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SkillsArray.map(({ title, skills }) => (
            <div
              key={title}
              className="glass rounded-xl p-6 hover:border-primary/30 transition-all duration-300"
            >
              <h3 className="text-primary font-mono text-sm mb-4">{title}</h3>
              <ul className="space-y-3">
                {skills.map(skill => (
                  <li
                    key={skill}
                    className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary/50 group-hover:bg-primary transition-colors"></span>
                    <span className="font-mono text-sm">{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
