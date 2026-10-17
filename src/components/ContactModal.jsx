import { FiX, FiMail, FiCopy } from 'react-icons/fi'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { useState } from 'react'

export default function ContactModal({ isOpen, onClose }) {
  const [copied, setCopied] = useState(false)

  if (!isOpen) return null

  const copyEmail = () => {
    navigator.clipboard.writeText('kisycoless@gmail.com')
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fadeIn">
      <div className="bg-card border border-line rounded-3xl p-6 md:p-8 max-w-md w-full shadow-soft-lg relative">
        
        <button onClick={onClose} className="absolute top-4 right-4 p-2 text-muted hover:text-ink bg-bg rounded-full transition-colors">
          <FiX className="text-xl" />
        </button>

        <h3 className="text-2xl font-bold mb-2">Let's Connect</h3>
        <p className="text-muted mb-6 text-sm">Choose how you want to reach out. I usually reply within 24 hours.</p>

        <div className="space-y-3">
          {/* Email Copy */}
          <div className="flex items-center justify-between p-4 bg-bg border border-line rounded-xl">
            <div className="flex items-center gap-3">
              <FiMail className="text-accent text-xl" />
              <span className="font-medium text-sm">kisycoless@gmail.com</span>
            </div>
            <button onClick={copyEmail} className="text-sm text-muted hover:text-ink flex items-center gap-1">
              <FiCopy /> {copied ? 'Copied!' : 'Copy'}
            </button>
          </div>

          {/* GitHub */}
          <a href="https://github.com/oggyjack07" target="_blank" rel="noreferrer" className="flex items-center gap-3 p-4 bg-bg border border-line rounded-xl hover:border-ink transition-colors">
            <FaGithub className="text-xl" />
            <span className="font-medium text-sm">github.com/oggyjack07</span>
          </a>

          {/* LinkedIn */}
          <a href="https://www.linkedin.com/in/ayuushss" target="_blank" rel="noreferrer" className="flex items-center gap-3 p-4 bg-bg border border-line rounded-xl hover:border-ink transition-colors">
            <FaLinkedin className="text-xl text-blue-600" />
            <span className="font-medium text-sm">linkedin.com/in/ayuushss</span>
          </a>
        </div>
      </div>
    </div>
  )
}