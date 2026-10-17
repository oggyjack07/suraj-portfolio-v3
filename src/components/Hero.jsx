export default function Hero() {
  return (
    <section className="pt-32 pb-24 md:pt-48 md:pb-32">
      <div className="animate-fadeIn">
        
        {/* Status Badge */}
        <div className="inline-flex items-center gap-2 mb-8 px-4 py-2 bg-card border border-line rounded-full shadow-soft">
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          <span className="text-sm text-muted">Available for freelance work</span>
        </div>

        {/* Main Heading */}
        <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold tracking-tightest leading-[0.95] mb-8">
          building websites
          <br />
          <span className="text-muted">and digital</span>
          <br />
          experiences
        </h1>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-12">
          {['Frontend Dev', 'UI/UX Designer', 'Video Editor', 'React', 'Next.js'].map((tag) => (
            <span key={tag} className="text-xs md:text-sm px-4 py-2 bg-card border border-line rounded-full text-muted">
              {tag}
            </span>
          ))}
        </div>

        {/* Bio & Buttons */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
          <div className="max-w-md">
            <p className="text-base md:text-lg text-muted leading-relaxed">
              I'm <span className="text-ink font-semibold">Suraj Verma</span> — a Frontend Developer & Digital Creator. I build high-performance websites, edit engaging videos, and manage social media to help brands grow online.
            </p>
          </div>
          
          <div className="flex flex-wrap gap-3">
            {/* View Work Button */}
            <a 
              href="#projects" 
              className="px-6 py-3 md:px-7 md:py-4 bg-ink text-bg rounded-full text-sm font-semibold hover:opacity-80 transition-opacity shadow-soft"
            >
              View Work
            </a>

            {/* Resume Button */}
            <a 
              href="/resume.pdf" 
              target="_blank" 
              rel="noreferrer"
              className="px-6 py-3 md:px-7 md:py-4 bg-card border border-line rounded-full text-sm font-semibold hover:border-ink transition-colors text-ink"
            >
              Resume
            </a>
          </div>
        </div>

      </div>
    </section>
  )
}