/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: 'var(--bg-color)',
        card: 'var(--card-color)',
        ink: 'var(--ink-color)',
        muted: 'var(--muted-color)',
        line: 'var(--line-color)',
        accent: '#4f46e5',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        tightest: '-0.04em',
      },
      boxShadow: {
        'soft': '0 1px 3px rgba(0,0,0,0.04), 0 4px 12px rgba(0,0,0,0.04)',
        'soft-lg': '0 4px 12px rgba(0,0,0,0.06), 0 12px 32px rgba(0,0,0,0.06)',
      },
    },
  },
  plugins: [],
}