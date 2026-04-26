function Contact() {
  return (
    <section id="contact" className="bg-slate-900 py-24">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-white mb-2">Contacto</h2>
        <div className="w-12 h-1 bg-blue-400 mb-12 rounded" />

        <div className="max-w-xl">
          <p className="text-slate-400 text-lg mb-8 leading-relaxed">
            ¿Tenés un proyecto en mente o querés trabajar juntos? Escribime y
            te respondo a la brevedad.
          </p>

          <div className="flex flex-col gap-4"> 
              <a 
              href="mailto:tu@email.com"
              className="flex items-center gap-3 text-slate-300 hover:text-white transition-colors group">
          
              <span className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center text-blue-400 group-hover:bg-slate-700 transition-colors">
                @
              </span>
              tu@email.com
            </a>

            <a 
              href="https://linkedin.com/in/tuperfil"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 text-slate-300 hover:text-white transition-colors group"
            >
              <span className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center text-blue-400 group-hover:bg-slate-700 transition-colors">
                in
              </span>
              LinkedIn
            </a>

            <a 
              href="https://github.com/tuusuario"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 text-slate-300 hover:text-white transition-colors group"
            >
              <span className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center text-blue-400 group-hover:bg-slate-700 transition-colors">
                gh
              </span>
              GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact