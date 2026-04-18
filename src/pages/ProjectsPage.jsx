import Projects from '../components/Projects'

export default function ProjectsPage() {
  return (
    <div className="pt-20">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <h1 className="text-4xl font-extrabold text-white mb-4">My Projects</h1>
        <p className="text-slate-400 max-w-2xl mb-12">
          A collection of my work, ranging from web applications to API integrations.
        </p>
      </div>
      <Projects />
    </div>
  )
}
