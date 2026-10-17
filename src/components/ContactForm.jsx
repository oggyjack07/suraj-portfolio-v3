import { useState } from 'react'

export default function ContactForm() {
  const [status, setStatus] = useState('idle') // idle, submitting, success, error

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('submitting')

    const form = e.target
    const data = new FormData(form)

    try {
      const response = await fetch('https://formspree.io/f/xwponlgk', {
        method: 'POST',
        body: data,
        headers: {
          'Accept': 'application/json'
        }
      })

      if (response.ok) {
        setStatus('success')
        form.reset()
        setTimeout(() => setStatus('idle'), 5000) // 5 sec baad wapas normal
      } else {
        setStatus('error')
      }
    } catch (error) {
      setStatus('error')
    }
  }

  return (
    <div className="p-6 md:p-8 bg-card border border-line rounded-3xl shadow-soft">
      <h3 className="text-2xl font-bold mb-2">Send me a message</h3>
      <p className="text-sm text-muted mb-6">Fill out the form below and I'll get back to you within 24 hours.</p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-1">Name</label>
            <input 
              type="text" 
              id="name" 
              name="name" 
              required 
              className="w-full px-4 py-3 bg-bg border border-line rounded-xl focus:outline-none focus:border-accent text-ink transition-colors"
              placeholder="Your Name"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
            <input 
              type="email" 
              id="email" 
              name="email" 
              required 
              className="w-full px-4 py-3 bg-bg border border-line rounded-xl focus:outline-none focus:border-accent text-ink transition-colors"
              placeholder="you@email.com"
            />
          </div>
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium mb-1">Message</label>
          <textarea 
            id="message" 
            name="message" 
            required 
            rows="4"
            className="w-full px-4 py-3 bg-bg border border-line rounded-xl focus:outline-none focus:border-accent text-ink transition-colors resize-none"
            placeholder="Tell me about your project..."
          ></textarea>
        </div>

        <button 
          type="submit" 
          disabled={status === 'submitting'}
          className="w-full py-4 bg-ink text-bg font-semibold rounded-xl hover:opacity-80 transition-opacity disabled:opacity-50"
        >
          {status === 'submitting' ? 'Sending...' : 'Send Message'}
        </button>

        {/* Status Messages */}
        {status === 'success' && (
          <p className="text-green-500 text-sm text-center font-medium mt-2">Message sent successfully! I'll reply soon.</p>
        )}
        {status === 'error' && (
          <p className="text-red-500 text-sm text-center font-medium mt-2">Something went wrong. Please try again or email me directly.</p>
        )}
      </form>
    </div>
  )
}