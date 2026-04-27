import projects from '../../data/projects.json'

function Projects() {
  return (
    <section id="projects" className="projects-section section">
      <div className="container">
        <h2 className="section__title">Proyectos</h2>
        <div className="section__divider" />

        <div className="projects-grid">
          {projects.map((project) => (
            <article key={project.id} className="project-card">
              <h3 className="project-card__title">{project.title}</h3>
              <p className="project-card__description">{project.description}</p>

              <div className="project-card__tech-list">
                {project.tech.map((t) => (
                  <span key={t} className="project-card__tech">
                    {t}
                  </span>
                ))}
              </div>

              <div className="project-card__links">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="project-card__link"
                  >
                    GitHub →
                  </a>
                )}
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="project-card__link project-card__link--accent"
                  >
                    Demo →
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects