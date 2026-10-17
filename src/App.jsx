import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Skills from './components/Skills'
import Projects from './components/Projects'
import GitHubStats from './components/GitHubStats' // Naya import
import Certifications from './components/Certifications'
import Education from './components/Education'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ContactModal from './components/ContactModal'

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <div className="bg-bg text-ink min-h-screen selection:bg-accent selection:text-white transition-colors duration-300">
      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <Navbar openContact={() => setIsModalOpen(true)} />
      
      <main className="max-w-6xl mx-auto px-6 md:px-10">
        <Hero openContact={() => setIsModalOpen(true)} />
        <About />
        <Services />
        <Skills />
        <Projects />
        <GitHubStats /> {/* Yahan add kiya */}
        <Certifications />
        <Education />
        <Contact openContact={() => setIsModalOpen(true)} />
      </main>
      <Footer />
    </div>
  )
}

export default App