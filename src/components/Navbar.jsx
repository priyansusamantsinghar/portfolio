import { useState, useEffect } from 'react'
import { resumeData } from '../data/resume'

export default function Navbar({ onChatOpen }) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  const links = ['About', 'Experience', 'Skills', 'Projects', 'Contact']

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'glass border-b border-purple-900/30' : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="font-mono text-sm text-purple-400 tracking-widest uppercase hover:text-cyan-400 transition-colors">
          &lt;PS /&gt;
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l}
              href={`#${l.toLowerCase()}`}
              className="font-mono text-xs text-slate-400 hover:text-purple-400 transition-colors tracking-wider uppercase"
            >
              {l}
            </a>
          ))}
          <button
            onClick={onChatOpen}
            className="font-mono text-xs px-4 py-2 border border-purple-600 text-purple-400 hover:bg-purple-600 hover:text-white transition-all duration-200 tracking-wider"
          >
            Ask AI →
          </button>
        </div>

        {/* Mobile */}
        <button
          className="md:hidden text-slate-400 hover:text-purple-400"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {menuOpen
              ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            }
          </svg>
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden glass border-t border-purple-900/30 px-6 py-4 flex flex-col gap-4">
          {links.map((l) => (
            <a
              key={l}
              href={`#${l.toLowerCase()}`}
              onClick={() => setMenuOpen(false)}
              className="font-mono text-xs text-slate-400 hover:text-purple-400 transition-colors tracking-wider uppercase"
            >
              {l}
            </a>
          ))}
          <button
            onClick={() => { onChatOpen(); setMenuOpen(false) }}
            className="font-mono text-xs px-4 py-2 border border-purple-600 text-purple-400 hover:bg-purple-600 hover:text-white transition-all duration-200 tracking-wider text-left"
          >
            Ask AI →
          </button>
        </div>
      )}
    </nav>
  )
}
