function About() {
  return (
    <section id="about" className="about-section section">
      <div className="container">
        <h2 className="section__title">Sobre mí</h2>
        <div className="section__divider" />

        <div className="about-section__grid">
          <div>
            <p className="about-section__text">
              Soy desarrollador fullstack especializado en el stack MERN (MongoDB, Express, React y Node.js), enfocado en construir soluciones completas que conectan la lógica de negocio con experiencias de usuario claras y eficientes.
            </p>
              <p className="about-section__text">
              Actualmente trabajo como analista de negocios, lo que me permite entender no solo el código, sino también los procesos detrás de cada sistema. Esto me ayuda a desarrollar aplicaciones que realmente resuelven problemas y generan impacto.
            </p>
            <p className="about-section__text">
              Me interesa especialmente la automatización de procesos y la implementación de soluciones con inteligencia artificial, como chatbots y herramientas que optimizan la atención al cliente.
            </p>
              <p className="about-section__text">
              Disfruto llevar una idea desde cero hasta producción, cuidando tanto la arquitectura como la experiencia del usuario final.
            </p>
              <p className="about-section__text">
              Siempre estoy aprendiendo, experimentando con nuevas tecnologías y construyendo proyectos que me desafíen.
            </p>
          </div>

          <div className="about-section__highlights">
            {[
              { label: 'Ubicación', value: 'Argentina' },
              {
                label: 'Disponibilidad',
                value: 'Freelance / Relación de dependencia',
              },
              { label: 'Idiomas', value: 'Español, Inglés' },
              { label: 'Enfoque', value: 'Automatizacion de Procesos' },
            ].map((item) => (
                            <div key={item.label} className="about-card">
                <span className="about-card__dot" aria-hidden="true" />
                <p className="about-card__line">
                  <span className="about-card__label">{item.label}:</span>{' '}
                  <span className="about-card__value">{item.value}</span>
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About