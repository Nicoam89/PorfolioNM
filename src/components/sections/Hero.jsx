function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center"
    >
      <div className="max-w-6xl mx-auto px-6 py-32">
        <p className="text-blue-400 font-mono text-sm mb-4 tracking-widest uppercase">
          Hola, mi nombre es
        </p>
        <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight mb-4">
          Nicolas Ariel <Martin></Martin>
        </h1>
        <h2 className="text-3xl md:text-5xl font-bold text-slate-400 mb-6">
          Fullstack Developer
        </h2>
        <p className="text-slate-400 text-lg max-w-xl mb-10 leading-relaxed">
          Construyo aplicaciones web modernas con el stack MERN. Apasionado por
          el código limpio y las buenas experiencias de usuario.
        </p>
        <div className="flex gap-4 flex-wrap">
          <a 
            href="#projects"
            className="bg-blue-600 hover:bg-blue-500 text-white font-semibold px-6 py-3 rounded-lg transition-colors duration-200"
          >
            Ver proyectos
          </a>
          <a 
            href="#contact"
            className="border border-slate-500 hover:border-white text-slate-300 hover:text-white font-semibold px-6 py-3 rounded-lg transition-colors duration-200"
          >
            Contacto
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero