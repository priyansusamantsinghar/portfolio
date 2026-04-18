import Experience from '../components/Experience'
import Skills from '../components/Skills'

export default function About() {
  return (
    <div className="pt-20">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <h1 className="text-4xl font-extrabold text-white mb-4">About Me</h1>
        <p className="text-slate-400 max-w-2xl mb-12">
          I'm a passionate Software Developer with a strong foundation in computer science and a love for building innovative web solutions.
        </p>
      </div>
      <Experience />
      <Skills />
    </div>
  )
}
