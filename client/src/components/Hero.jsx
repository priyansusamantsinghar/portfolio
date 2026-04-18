import { useEffect, useState } from 'react'
import { resumeData } from '../data/resume'

const TYPED_STRINGS = [
  'Junior Software Developer',
  'React.js Enthusiast',
  'MERN Stack Developer',
  'API Integration Specialist',
]

export default function Hero({ onChatOpen }) {
  const [typedText, setTypedText] = useState('')
  const [strIndex, setStrIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = TYPED_STRINGS[strIndex]
    const timeout = deleting ? 50 : 80

    const timer = setTimeout(() => {
      if (!deleting) {
        setTypedText(current.slice(0, charIndex + 1))
        if (charIndex + 1 === current.length) {
          setTimeout(() => setDeleting(true), 1800)
        } else {
          setCharIndex(c => c + 1)
        }
      } else {
        setTypedText(current.slice(0, charIndex - 1))
        if (charIndex - 1 === 0) {
          setDeleting(false)
          setStrIndex(s => (s + 1) % TYPED_STRINGS.length)
          setCharIndex(0)
        } else {
          setCharIndex(c => c - 1)
        }
      }
    }, timeout)

    return () => clearTimeout(timer)
  }, [charIndex, deleting, strIndex])

  return (
    <section
      id="about"
      className="relative min-h-screen flex items-center justify-center grid-bg overflow-hidden"
    >
      {/* Ambient glows */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-cyan-500/8 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-24 pb-16">
        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* Left */}
          <div>
            <div className="animate-fade-up">
              <span className="font-mono text-xs text-purple-400 tracking-widest uppercase border border-purple-800/50 px-3 py-1 bg-purple-950/30">
                Available for opportunities
              </span>
            </div>

            <h1 className="animate-fade-up delay-100 mt-6 text-5xl md:text-6xl font-extrabold leading-tight tracking-tight">
              <span className="text-white">Hey, I'm</span>
              <br />
              <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Priyanshu
              </span>
            </h1>

            <div className="animate-fade-up delay-200 mt-4 h-8 flex items-center gap-2">
              <span className="font-mono text-lg text-slate-300">{typedText}</span>
              <span className="animate-blink text-purple-400 font-mono text-lg">|</span>
            </div>

            <p className="animate-fade-up delay-300 mt-6 text-slate-400 leading-relaxed text-sm max-w-lg">
              Computer Science graduate building scalable web apps with the MERN stack.
              Currently shipping features at <span className="text-purple-400">Oasys Tech Solution</span>,
              passionate about clean APIs, responsive UIs, and developer tooling.
            </p>

            <div className="animate-fade-up delay-400 mt-8 flex flex-wrap gap-4">
              <a
                href={resumeData.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 bg-purple-600 hover:bg-purple-500 text-white font-mono text-sm transition-all duration-200 hover:shadow-lg hover:shadow-purple-600/30"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                </svg>
                GitHub
              </a>
              <a
                href={resumeData.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 border border-cyan-700 text-cyan-400 hover:bg-cyan-700/20 font-mono text-sm transition-all duration-200"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                LinkedIn
              </a>
              <button
                onClick={onChatOpen}
                className="flex items-center gap-2 px-5 py-2.5 border border-purple-600/50 text-purple-300 hover:border-purple-400 hover:text-purple-200 font-mono text-sm transition-all duration-200"
              >
                <span className="text-purple-400">✦</span>
                Ask AI about me
              </button>
            </div>
          </div>

          {/* Right — Stats Card */}
          <div className="animate-fade-up delay-300 animate-float">
            <div className="glass rounded-2xl p-8 relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-0.5 accent-line" />

              <div className="font-mono text-xs text-purple-400 mb-6 tracking-widest">// quick_stats.json</div>

              <div className="space-y-4">
                {[
                  { label: 'Education', value: 'B.Tech CSE · CGPA 7.12' },
                  { label: 'Current Role', value: 'Jr. SWE @ Oasys Tech' },
                  { label: 'Location', value: 'Bhubaneswar, Odisha 🇮🇳' },
                  { label: 'Stack', value: 'MERN + Next.js + AWS' },
                  { label: 'Projects', value: '2+ shipped projects' },
                  { label: 'Certs', value: 'HackerRank · AMCAT ×2' },
                ].map(({ label, value }) => (
                  <div key={label} className="flex justify-between items-start border-b border-white/5 pb-3 last:border-0 last:pb-0">
                    <span className="font-mono text-xs text-slate-500">{label}</span>
                    <span className="font-mono text-xs text-slate-200 text-right ml-4">{value}</span>
                  </div>
                ))}
              </div>

              <div className="mt-6 flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="font-mono text-xs text-green-400">Open to new roles</span>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="mt-16 flex justify-center animate-fade-up delay-500">
          <div className="flex flex-col items-center gap-2 text-slate-600">
            <span className="font-mono text-xs tracking-widest">scroll</span>
            <div className="w-px h-12 bg-gradient-to-b from-purple-600 to-transparent animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  )
}
