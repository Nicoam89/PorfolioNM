function About() {
  return (
    <section id="about" className="about-section section">
      <div className="container">
        <h2 className="section__title">Sobre mí</h2>
        <div className="section__divider" />

        <div className="about-section__grid">
          <div>
            <p className="about-section__text">
              Soy Business & Funcional Analyst con experiencia en análisis de procesos, reporting de gestión, automatización y soluciones digitales.
            </p>
              <p className="about-section__text">
              Mi perfil combina visión de negocio, experiencia en control de gestión y conocimientos técnicos en BI, SQL, SAP Business One, automatización y desarrollo web. Esto me permite relevar necesidades con usuarios, traducirlas en requerimientos claros y acompañar la implementación de soluciones junto a equipos técnicos.
            </p>
            <p className="about-section__text">
              Me especializo en transformar procesos manuales o poco estructurados en soluciones más eficientes, trazables y orientadas a datos, mediante documentación funcional, definición de KPIs, automatización de workflows y tableros de control.
            </p>
              <p className="about-section__text">
              Actualmente estoy orientando mi carrera hacia roles de Analista Funcional / Business Analyst, con foco en mejora de procesos, transformación digital e integración entre negocio e IT.
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