import projects from '../../data/projects.json'

function Projects() {
  return (
    <section id="projects" className="bg-slate-800 py-24">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-white mb-2">Proyectos</h2>
        <div className="w-12 h-1 bg-blue-400 mb-12 rounded" />

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-slate-700/50 border border-slate-600 hover:border-blue-400/50 rounded-xl p-6 transition-colors duration-300"
            >
              <h3 className="text-white font-bold text-xl mb-2">{project.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-4">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="bg-blue-900/40 text-blue-300 text-xs font-mono px-2 py-1 rounded"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex gap-4">
                {project.github && (
                    <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="text-slate-400 hover:text-white text-sm transition-colors"
                  >
                    GitHub →
                  </a>
                )}
                {project.demo && (
                   <a 
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="text-blue-400 hover:text-blue-300 text-sm transition-colors"
                  >
                    Demo →
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects