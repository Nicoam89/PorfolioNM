function About() {
  return (
    <section id="about" className="bg-slate-800 py-24">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-white mb-2">Sobre mí</h2>
        <div className="w-12 h-1 bg-blue-400 mb-12 rounded" />

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-slate-300 text-lg leading-relaxed mb-4">
              Soy un desarrollador fullstack con experiencia en el stack MERN
              (MongoDB, Express, React, Node.js). Me enfoco en construir
              productos completos, desde la base de datos hasta la interfaz.
            </p>
            <p className="text-slate-300 text-lg leading-relaxed">
              Cuando no estoy programando, estoy aprendiendo algo nuevo o
              contribuyendo a proyectos que me parecen interesantes.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {[
              { label: 'Ubicación', value: 'Argentina' },
              { label: 'Disponibilidad', value: 'Freelance / Relación de dependencia' },
              { label: 'Idiomas', value: 'Español, Inglés' },
              { label: 'Enfoque', value: 'Fullstack MERN' },
            ].map((item) => (
              <div key={item.label} className="bg-slate-700/50 rounded-lg p-4">
                <p className="text-blue-400 text-xs font-mono uppercase tracking-wider mb-1">
                  {item.label}
                </p>
                <p className="text-white text-sm font-medium">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About