import {
  SiHtml5, SiCss, SiJavascript, SiReact, SiNextdotjs,
  SiTailwindcss, SiPython, SiPostgresql, SiGit, SiGithub,
  SiFlutter, SiDart, SiNodedotjs
} from 'react-icons/si'

const skillGroups = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', icon: SiHtml5 },
      { name: 'CSS', icon: SiCss },
      { name: 'JavaScript', icon: SiJavascript },
      { name: 'React', icon: SiReact },
      { name: 'Next.js', icon: SiNextdotjs },
      { name: 'Tailwind', icon: SiTailwindcss },
    ],
  },
  {
    title: 'Backend & Database',
    skills: [
      { name: 'Node.js', icon: SiNodedotjs },
      { name: 'PostgreSQL', icon: SiPostgresql },
      { name: 'Python', icon: SiPython },
    ],
  },
  {
    title: 'Mobile & Tools',
    skills: [
      { name: 'Flutter', icon: SiFlutter },
      { name: 'Dart', icon: SiDart },
      { name: 'Git', icon: SiGit },
      { name: 'GitHub', icon: SiGithub },
    ],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="py-24 border-t border-line">
      <p className="text-sm text-muted mb-6 uppercase tracking-widest">Skills</p>
      <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-16 max-w-2xl">
        Technologies I work with
      </h2>

      <div className="grid md:grid-cols-3 gap-6">
        {skillGroups.map((group) => (
          <div key={group.title} className="p-8 bg-card border border-line rounded-3xl shadow-soft hover:shadow-soft-lg transition-shadow">
            <h3 className="text-sm font-semibold uppercase tracking-widest text-muted mb-6">
              {group.title}
            </h3>
            <div className="space-y-3">
              {group.skills.map((skill) => {
                const Icon = skill.icon
                return (
                  <div key={skill.name} className="flex items-center gap-3 py-2">
                    <Icon className="text-xl text-ink" />
                    <span className="text-sm font-medium">{skill.name}</span>
                  </div>
                )
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}