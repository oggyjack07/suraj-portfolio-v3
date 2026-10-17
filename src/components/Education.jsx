const education = [
  {
    degree: 'B.Tech in Computer Science',
    institute: 'MIT College, Ujjain',
    university: 'RGPV University',
    period: '2025 — 2028',
    status: 'Currently Pursuing',
  },
  {
    degree: 'Diploma in Computer Science',
    institute: 'Polytechnic College, Dewas',
    university: 'RGPV University',
    period: '2022 — 2025',
    status: 'Completed',
  },
]

export default function Education() {
  return (
    <section id="education" className="py-24 border-t border-line">
      <p className="text-sm text-muted mb-6 uppercase tracking-widest">Education</p>
      <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-16 max-w-2xl">
        My academic journey
      </h2>

      <div className="space-y-4">
        {education.map((edu) => (
          <div
            key={edu.degree}
            className="p-8 bg-card border border-line rounded-3xl shadow-soft flex flex-col md:flex-row md:items-center md:justify-between gap-4"
          >
            <div>
              <h3 className="text-lg md:text-xl font-bold tracking-tight mb-1">
                {edu.degree}
              </h3>
              <p className="text-muted text-sm">
                {edu.institute} • {edu.university}
              </p>
            </div>
            <div className="flex flex-col items-start md:items-end gap-2">
              <span className="text-sm font-semibold">{edu.period}</span>
              <span className="text-xs px-3 py-1.5 bg-bg border border-line rounded-full text-muted">
                {edu.status}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}