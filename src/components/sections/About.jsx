function About() {
  return (
    <section id="about" className="about-section section">
      <div className="container">
        <h2 className="section__title">Sobre mí</h2>
        <div className="section__divider" />

        <div className="about-section__grid">
          <div>
            <p className="about-section__text">
              Soy un desarrollador fullstack con experiencia en el stack MERN (MongoDB, Express, React, Node.js). Me enfoco en construir productos completos, desde la base de datos hasta la interfaz.
            </p>
            <p className="about-section__text">
              Siempre estoy aprendiendo algo nuevo o contribuyendo a proyectos que me parecen interesantes.
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
              { label: 'Enfoque', value: 'Fullstack MERN' },
            ].map((item) => (
              <div key={item.label} className="about-card">
                <p className="about-card__label">{item.label}</p>
                <p className="about-card__value">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About