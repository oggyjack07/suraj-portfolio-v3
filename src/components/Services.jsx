import { FiCode, FiVideo, FiTrendingUp, FiEdit3 } from 'react-icons/fi'

const services = [
  { icon: <FiCode />, title: 'Web Development', desc: 'Building fast, responsive, and modern websites using React, Next.js, and Tailwind CSS.' },
  { icon: <FiVideo />, title: 'Video Editing', desc: 'Creating engaging video content, reels, and cinematic edits that capture attention.' },
  { icon: <FiTrendingUp />, title: 'Social Media Handling', desc: 'Managing digital presence, content strategy, and growing audience engagement.' },
  { icon: <FiEdit3 />, title: 'UI/UX Design', desc: 'Designing clean, user-centric interfaces that not only look good but convert better.' }
]

export default function Services() {
  return (
    <section id="services" className="py-24 border-t border-line">
      <p className="text-sm text-muted mb-6 uppercase tracking-widest">What I Do</p>
      <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-12">
        More than just code.
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {services.map((service, i) => (
          <div key={i} className="p-6 md:p-8 bg-card border border-line rounded-2xl hover:-translate-y-1 hover:shadow-soft transition-all duration-300">
            <div className="w-12 h-12 bg-ink/5 dark:bg-white/5 rounded-xl flex items-center justify-center text-2xl text-accent mb-6">
              {service.icon}
            </div>
            <h3 className="text-xl font-bold mb-3">{service.title}</h3>
            <p className="text-sm text-muted leading-relaxed">{service.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}