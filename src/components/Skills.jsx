import { resumeData } from '../data/resume'

const CATEGORY_COLORS = {
  Languages: 'from-purple-600/20 to-purple-800/10 border-purple-700/30 text-purple-300',
  'Web Development': 'from-cyan-600/20 to-cyan-800/10 border-cyan-700/30 text-cyan-300',
  Databases: 'from-green-600/20 to-green-800/10 border-green-700/30 text-green-300',
  Tools: 'from-orange-600/20 to-orange-800/10 border-orange-700/30 text-orange-300',
  'AI Tools': 'from-pink-600/20 to-pink-800/10 border-pink-700/30 text-pink-300',
  Cloud: 'from-blue-600/20 to-blue-800/10 border-blue-700/30 text-blue-300',
}

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 bg-[#0d0d15]">
      <div className="max-w-4xl mx-auto">

        <div className="mb-16">
          <span className="font-mono text-xs text-purple-400 tracking-widest">03. SKILLS</span>
          <h2 className="mt-2 text-3xl font-extrabold text-white">Technical Arsenal</h2>
          <div className="mt-3 w-12 h-0.5 accent-line" />
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {Object.entries(resumeData.skills).map(([category, items]) => {
            const colorClass = CATEGORY_COLORS[category] || 'from-slate-600/20 to-slate-800/10 border-slate-700/30 text-slate-300'
            return (
              <div
                key={category}
                className={`rounded-xl p-5 border bg-gradient-to-br ${colorClass} hover:scale-[1.01] transition-transform duration-200`}
              >
                <h3 className="font-mono text-xs tracking-widest uppercase mb-4 opacity-70">{category}</h3>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill) => (
                    <span
                      key={skill}
                      className="font-mono text-xs px-2.5 py-1 bg-black/30 border border-white/10 text-slate-200 rounded"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            )
          })}
        </div>

        {/* Education */}
        <div className="mt-16">
          <div className="mb-8">
            <span className="font-mono text-xs text-purple-400 tracking-widest">EDUCATION</span>
            <h2 className="mt-2 text-2xl font-extrabold text-white">Academic Background</h2>
          </div>

          <div className="space-y-4">
            {resumeData.education.map((edu, i) => (
              <div key={i} className="glass rounded-xl p-5 flex flex-wrap justify-between items-start gap-4 hover:border-purple-700/40 transition-all duration-200">
                <div>
                  <div className="font-bold text-white">{edu.institution}</div>
                  <div className="text-sm text-slate-400 mt-0.5">{edu.degree}</div>
                  <div className="font-mono text-xs text-purple-400 mt-1">{edu.score}</div>
                </div>
                <div className="text-right">
                  <div className="font-mono text-xs text-slate-500">{edu.period}</div>
                  <div className="font-mono text-xs text-slate-600 mt-0.5">{edu.location}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className="mt-12">
          <div className="mb-6">
            <span className="font-mono text-xs text-purple-400 tracking-widest">CERTIFICATIONS</span>
          </div>
          <div className="space-y-3">
            {resumeData.certifications.map((cert, i) => (
              <div key={i} className="flex items-start gap-3 text-sm text-slate-400">
                <span className="text-purple-400 shrink-0 mt-0.5">✦</span>
                {cert}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
