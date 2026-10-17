import { FiArrowDownRight, FiMail } from 'react-icons/fi'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import ContactForm from './ContactForm'

export default function Contact({ openContact }) {
  return (
    <section id="contact" className="py-24 border-t border-line">
      <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-start">
        
        {/* Left Side: Heading & Info */}
        <div>
          <h2 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tightest leading-[0.95] mb-6">
            Let's
            <br />
            work
            <br />
            together
          </h2>

          <p className="text-lg text-muted leading-relaxed max-w-sm mb-8">
            I'm open for new opportunities. Whether you need a website, video edits, or social media management — let's talk about the next big thing!
          </p>

          <div className="flex flex-wrap gap-3 mb-12">
            <a href="mailto:kisycoless@gmail.com" className="flex items-center gap-2 px-6 py-3 bg-ink text-bg rounded-full text-sm font-semibold hover:opacity-80 transition-opacity shadow-soft">
              <FiMail /> Email Me
            </a>
            <a href="https://github.com/oggyjack07" target="_blank" rel="noreferrer" className="flex items-center gap-2 px-6 py-3 bg-card border border-line rounded-full text-sm font-semibold hover:border-ink transition-colors text-ink">
              <FaGithub /> GitHub
            </a>
            <a href="https://www.linkedin.com/in/ayuushss" target="_blank" rel="noreferrer" className="flex items-center gap-2 px-6 py-3 bg-card border border-line rounded-full text-sm font-semibold hover:border-ink transition-colors text-ink">
              <FaLinkedin /> LinkedIn
            </a>
          </div>

          <div>
            <a href="mailto:kisycoless@gmail.com" className="group inline-flex flex-col items-start gap-2">
              <FiArrowDownRight className="text-2xl text-ink transition-transform duration-300 group-hover:translate-x-2 group-hover:translate-y-2" />
              <span className="text-lg md:text-xl font-medium text-muted group-hover:text-ink transition-colors">
                kisycoless@gmail.com
              </span>
            </a>
          </div>
        </div>

        {/* Right Side: Form */}
        <div className="w-full">
          <ContactForm />
        </div>

      </div>
    </section>
  )
}