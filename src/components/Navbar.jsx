import { useState, useEffect } from 'react'
import { FiSun, FiMoon } from 'react-icons/fi'

export default function Navbar({ openContact }) {
  const [scrolled, setScrolled] = useState(false)
  
  // Check karo ki pehle se koi theme save hai kya localStorage mein
  const [isDark, setIsDark] = useState(() => {
    return localStorage.getItem('theme') === 'dark'
  })

  // Scroll effect
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Theme Toggle Logic (Yahan HTML tag mein 'dark' class add/remove hoti hai)
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }, [isDark])

  const links = [
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Skills', href: '#skills' },
    { name: 'Work', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    // Naya code (bg-bg/90 aur shadow-soft add kiya hai)
<nav className={`fixed top-0 left-0 w-full z-10 transition-all duration-300 ${
  scrolled ? 'bg-bg/1000 backdrop-blur-lg border-b border-line shadow-sm' : ''
}`}>
      <div className="max-w-6xl mx-auto px-6 md:px-10 py-4 flex items-center justify-between">
        
        <a href="#" className="font-bold text-lg tracking-tight">
          suraj<span className="text-accent">.</span>
        </a>
        
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm text-muted hover:text-ink transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-4">
          {/* Theme Toggle */}
          <button 
            onClick={() => setIsDark(!isDark)}
            className="p-2 rounded-full border border-line hover:bg-card transition-colors text-ink"
            aria-label="Toggle Theme"
          >
            {isDark ? <FiSun className="text-lg" /> : <FiMoon className="text-lg" />}
          </button>
          
          {/* Hire Me */}
          <button 
            onClick={openContact}
            className="hidden sm:block text-sm font-medium px-5 py-2.5 bg-ink text-bg rounded-full hover:opacity-80 transition-opacity"
          >
            Hire Me
          </button>
        </div>
      </div>
    </nav>
  )
}