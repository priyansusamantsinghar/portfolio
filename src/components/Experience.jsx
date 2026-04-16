import { resumeData } from '../data/resume'

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">

        <div className="mb-16">
          <span className="font-mono text-xs text-purple-400 tracking-widest">02. EXPERIENCE</span>
          <h2 className="mt-2 text-3xl font-extrabold text-white">Where I've worked</h2>
          <div className="mt-3 w-12 h-0.5 accent-line" />
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-purple-600 via-purple-800 to-transparent hidden md:block" />

          <div className="space-y-12">
            {resumeData.experience.map((exp, i) => (
              <div key={i} className="md:pl-12 relative">
                {/* Dot */}
                <div className="absolute left-3 top-2 w-3 h-3 rounded-full bg-purple-600 border-2 border-purple-400 hidden md:block animate-glow" style={{ left: '0.875rem' }} />

                <div className="glass rounded-xl p-6 hover:border-purple-600/40 transition-all duration-300 group">
                  <div className="flex flex-wrap justify-between items-start gap-2 mb-4">
                    <div>
                      <h3 className="text-lg font-bold text-white group-hover:text-purple-300 transition-colors">
                        {exp.role}
                      </h3>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="font-mono text-xs text-cyan-400">{exp.company}</span>
                      </div>
                    </div>
                    <span className="font-mono text-xs text-slate-500 bg-slate-800/50 px-3 py-1 rounded">
                      {exp.period}
                    </span>
                  </div>

                  <ul className="space-y-2">
                    {exp.bullets.map((b, j) => (
                      <li key={j} className="flex items-start gap-3 text-sm text-slate-400 leading-relaxed">
                        <span className="text-purple-500 mt-1 shrink-0">▹</span>
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
