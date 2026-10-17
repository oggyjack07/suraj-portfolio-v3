export default function About() {
  return (
    <section id="about" className="py-24 border-t border-line">
      <p className="text-sm text-muted mb-6 uppercase tracking-widest">About</p>
      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight leading-tight mb-6">
            Turning ideas into clean, functional digital products.
          </h2>
          <div className="inline-flex items-center gap-3 px-4 py-3 bg-card border border-line rounded-xl shadow-sm">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-accent"></span>
            </span>
            <span className="text-sm font-medium text-ink">
              Currently building: <span className="text-muted">Campus Help (Full Stack)</span>
            </span>
          </div>
        </div>
        <div className="space-y-4 text-muted leading-relaxed">
          <p>
            I'm a Computer Science student and creative developer based in India. I work at the intersection of development, design, and content creation — building things that are not just functional, but truly beautiful.
          </p>
          <p>
            Currently pursuing B.Tech in Computer Science at MIT College, Ujjain. I specialize in web development, UI/UX design, and digital media.
          </p>
        </div>
      </div>
    </section>
  )
}