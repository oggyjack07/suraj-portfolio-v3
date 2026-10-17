import { FiArrowUpRight } from 'react-icons/fi'

const projects = [

  {
    title: 'Campus Help',
    description: 'A student-help web app connecting students for tasks, with login, admin panel, and task posting system.',
    tech: ['React', 'Next.js', 'PostgreSQL'],
    live: 'https://campushelp-eta.vercel.app/',
    github: 'https://github.com/oggyjack07',
  },
  {
    title: 'Image Classifier',
    description: 'AI-powered image classification using OpenAI CLIP model. Identifies 70+ object categories from uploaded images.',
    tech: ['Python', 'CLIP', 'Streamlit', 'PyTorch'],
    live: 'https://image-classifierr.streamlit.app/',
    github: 'https://github.com/oggyjack07',
  },
  {
    title: 'Travel Guide Website',
    description: 'A responsive city travel guide showcasing famous places of Indore, Ujjain, Bhopal with photos, videos, and maps.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    live: 'https://oggyjack07.github.io/Travel-Guide-Website-Project/',
    github: 'https://github.com/oggyjack07/City-Guide-website-Project',
  },
  
]

export default function Projects() {
  return (
    <section id="projects" className="py-24 border-t border-line">
      <p className="text-sm text-muted mb-6 uppercase tracking-widest">Selected Work</p>
      <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-16 max-w-2xl">
        Projects I've built
      </h2>

      <div className="space-y-6">
        {projects.map((project) => (
          <div key={project.title} className="group p-8 md:p-10 bg-card border border-line rounded-3xl hover:border-ink/20 hover:shadow-soft-lg transition-all duration-300">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
              <div className="flex-1">
                <h3 className="text-xl md:text-2xl font-bold mb-3 tracking-tight group-hover:text-accent transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted mb-5 leading-relaxed max-w-xl">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span key={t} className="text-xs px-3 py-1.5 bg-bg border border-line rounded-full text-muted">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex gap-3">
                <a href={project.live} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm font-semibold px-5 py-3 bg-ink text-bg rounded-full hover:opacity-80 hover:-translate-y-0.5 transition-all">
                  Live <FiArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </a>
                <a href={project.github} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm font-semibold px-5 py-3 bg-card border border-line rounded-full hover:border-ink transition-colors text-ink">
                  GitHub
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}