import SectionHeading from '../ui/SectionHeading';

// TODO: adjust skills
const SkillsArray = [
  {
    title: 'Frontend',
    skills: [
      'React',
      'Next.js',
      'Vue.js',
      'HTML',
      'CSS',
      'JavaScript',
      'TypeScript',
    ],
  },
  {
    title: 'Backend',
    skills: ['Node.js', 'Express', 'Django', 'Flask', 'GraphQL', 'REST APIs'],
  },
  {
    title: 'Devops & Tools',
    skills: ['Git', 'Github Actions'],
  },
  {
    title: 'APIs & Databases',
    skills: ['GraphQL', 'SQL', 'Firebase', 'Supabase', 'Third-party APIs'],
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
