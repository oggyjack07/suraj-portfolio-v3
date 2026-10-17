import { FaGithub } from 'react-icons/fa'

export default function GitHubStats() {
  const username = "oggyjack07"

  return (
    <section id="github" className="py-24 border-t border-line">
      <div className="flex items-center gap-3 mb-12">
        <div className="p-2 bg-ink text-bg rounded-lg">
          <FaGithub className="text-xl" />
        </div>
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">GitHub Activity</h2>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        
        {/* GitHub Stats Card */}
        <div className="p-6 bg-card border border-line rounded-3xl shadow-soft flex flex-col items-center justify-center hover:shadow-soft-lg transition-shadow">
          <p className="text-sm text-muted mb-4 font-medium">Overall Stats</p>
          <img 
            src={`https://github-readme-stats.vercel.app/api?username=${username}&show_icons=true&theme=transparent&hide_border=true&title_color=4f46e5&text_color=6b6b6b&icon_color=4f46e5&text_bold=true`} 
            alt="GitHub Stats" 
            className="w-full max-w-sm"
            loading="lazy"
          />
        </div>

        {/* Top Languages Card */}
        <div className="p-6 bg-card border border-line rounded-3xl shadow-soft flex flex-col items-center justify-center hover:shadow-soft-lg transition-shadow">
          <p className="text-sm text-muted mb-4 font-medium">Most Used Languages</p>
          <img 
            src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${username}&layout=compact&theme=transparent&hide_border=true&title_color=4f46e5&text_color=6b6b6b`} 
            alt="Top Languages" 
            className="w-full max-w-sm"
            loading="lazy"
          />
        </div>

        {/* Contribution Graph (Full Width) */}
        <div className="md:col-span-2 p-6 md:p-8 bg-card border border-line rounded-3xl shadow-soft hover:shadow-soft-lg transition-shadow overflow-x-auto flex justify-center">
          <img 
            src={`https://ghchart.rshah.org/4f46e5/${username}`} 
            alt="GitHub Contribution Graph" 
            className="w-full min-w-[700px]"
            loading="lazy"
          />
        </div>

      </div>
    </section>
  )
}