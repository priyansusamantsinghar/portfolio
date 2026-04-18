import Contact from '../components/Contact'

export default function ContactPage() {
  return (
    <div className="pt-20">
      <div className="max-w-6xl mx-auto px-6 py-12 text-center">
        <h1 className="text-4xl font-extrabold text-white mb-4">Get In Touch</h1>
        <p className="text-slate-400 max-w-2xl mx-auto">
          Have a question or want to work together? Feel free to reach out.
        </p>
      </div>
      <Contact />
    </div>
  )
}
