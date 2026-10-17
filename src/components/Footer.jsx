export default function Footer() {
  return (
    <footer className="border-t border-line mt-24">
      <div className="max-w-6xl mx-auto px-6 md:px-10 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted">
          © {new Date().getFullYear()} Suraj Verma. All rights reserved.
        </p>
        <p className="text-sm text-muted">
          Built with React & Tailwind
        </p>
      </div>
    </footer>
  )
}