import { FiAward } from 'react-icons/fi'

const certs = [
  { title: 'Web Development', issuer: 'Offline Platform', year: '2023', desc: 'Learned core concepts of web development including HTML, CSS, and JavaScript.' },
  { title: 'UI/UX Design Fundamentals', issuer: 'Offline Platform', year: '2024', desc: 'Learned the principles of user-centric design, wireframing, prototyping, and color theory to craft visually appealing and highly engaging digital interfaces.' },
  { title: 'Frontend Developer', issuer: 'Online Platform', year: '2024', desc: 'Transforming static designs into fully functional, dynamic, and lightning-fast web interfaces using modern JavaScript frameworks.' }
]

export default function Certifications() {
  return (
    <section id="certifications" className="py-24 border-t border-line">
      <div className="flex items-center gap-3 mb-12">
        <div className="p-2 bg-ink text-bg rounded-lg">
          <FiAward className="text-xl" />
        </div>
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Certifications</h2>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {certs.map((cert, index) => (
          <div key={index} className="group p-6 bg-card border border-line rounded-2xl hover:-translate-y-1 hover:shadow-soft-lg transition-all duration-300">
            <div className="flex justify-between items-start mb-4">
              <span className="text-xs font-bold text-accent uppercase tracking-widest">{cert.year}</span>
            </div>
            <h3 className="text-lg font-bold mb-1">{cert.title}</h3>
            <p className="text-sm text-muted mb-4">{cert.issuer}</p>
            <p className="text-sm text-muted leading-relaxed">{cert.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}