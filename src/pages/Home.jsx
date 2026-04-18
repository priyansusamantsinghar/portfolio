import Hero from '../components/Hero'
import Projects from '../components/Projects'
import { Link } from 'react-router-dom'

export default function Home({ onChatOpen }) {
  return (
    <>
      <Hero onChatOpen={onChatOpen} />
      
      <section className="py-20 px-6 bg-[#0a0a0f]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold text-white mb-6">Building Modern Digital Experiences</h2>
          <p className="text-slate-400 mb-8 max-w-2xl mx-auto">
            I specialize in building high-performance web applications using the MERN stack and Next.js. 
            Focused on clean code and exceptional user experience.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/about" className="px-6 py-3 border border-purple-600/50 text-purple-400 hover:bg-purple-600 hover:text-white transition-all rounded-lg font-mono text-sm">
              More About Me
            </Link>
            <Link to="/projects" className="px-6 py-3 bg-white/5 hover:bg-white/10 text-white transition-all rounded-lg font-mono text-sm">
              View Work
            </Link>
          </div>
        </div>
      </section>

      <Projects />
      
      <section className="py-20 px-6 bg-[#0d0d15] border-t border-white/5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold text-white mb-6">Ready to collaborate?</h2>
          <p className="text-slate-400 mb-8">
            I'm currently looking for new opportunities and interesting projects.
          </p>
          <Link to="/contact" className="inline-block px-10 py-4 bg-gradient-to-r from-purple-600 to-cyan-600 text-white font-bold rounded-xl shadow-lg shadow-purple-600/20 hover:scale-105 transition-all">
            Get In Touch
          </Link>
        </div>
      </section>
    </>
  )
}
