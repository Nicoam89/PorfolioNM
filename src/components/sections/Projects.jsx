import { useState } from 'react'
import projects from '../../data/projects.json'

const projectImages = import.meta.glob('../../assets/*', {
  eager: true,
  import: 'default',
})

function Projects() {
  const [activeSlides, setActiveSlides] = useState({})

  const updateSlide = (projectId, direction, total) => {
    setActiveSlides((prev) => {
      const currentIndex = prev[projectId] ?? 0
      const nextIndex = (currentIndex + direction + total) % total
      return { ...prev, [projectId]: nextIndex }
    })
  }

  return (
    <section id="projects" className="projects-section section">
      <div className="container">
        <h2 className="section__title">Proyectos</h2>
        <div className="section__divider" />

        <div className="projects-grid">
          {projects.map((project) => {
            const imageList = (project.images || [])
              .map((name) => projectImages[`../../assets/${name}`])
              .filter(Boolean)
            const currentIndex = activeSlides[project.id] ?? 0
            const currentImage = imageList[currentIndex]

            return (
              <article key={project.id} className="project-card">
                {currentImage && (
                  <div className="project-card__carousel">
                    <img
                      src={currentImage}
                      alt={`Vista ${currentIndex + 1} de ${project.title}`}
                      className="project-card__image"
                      loading="lazy"
                    />

                    {imageList.length > 1 && (
                      <>
                        <button
                          type="button"
                          className="project-card__nav project-card__nav--prev"
                          onClick={() => updateSlide(project.id, -1, imageList.length)}
                          aria-label={`Imagen anterior de ${project.title}`}
                        >
                          ‹
                        </button>
                        <button
                          type="button"
                          className="project-card__nav project-card__nav--next"
                          onClick={() => updateSlide(project.id, 1, imageList.length)}
                          aria-label={`Imagen siguiente de ${project.title}`}
                        >
                          ›
                        </button>

                        <div className="project-card__dots">
                          {imageList.map((_, index) => (
                            <button
                              key={`${project.id}-${index}`}
                              type="button"
                              className={`project-card__dot ${
                                index === currentIndex ? 'project-card__dot--active' : ''
                              }`}
                              onClick={() =>
                                setActiveSlides((prev) => ({ ...prev, [project.id]: index }))
                              }
                              aria-label={`Ir a imagen ${index + 1} de ${project.title}`}
                            />
                          ))}
                        </div>
                      </>
                    )}
                  </div>
                )}

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
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Projects