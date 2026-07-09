function About() {
  return (
    <section id="about" className="about-section section">
      <div className="container">
        <h2 className="section__title">Sobre mí</h2>
        <div className="section__divider" />

        <div className="about-section__grid">
          <div>
            <p className="about-section__text">
              Soy Business & Functional Analyst con experiencia en relevamiento de necesidades, análisis de procesos, documentación funcional, reporting de gestión, automatización y soluciones digitales.
            </p>
              <p className="about-section__text">
              Mi perfil combina visión de negocio, experiencia en control de gestión y conocimientos técnicos en BI, SQL, SAP Business One, automatización y desarrollo web. Esto me permite conversar con stakeholders, entender dolores operativos, traducirlos en requerimientos claros y acompañar la implementación junto a equipos técnicos.
            </p>
            <p className="about-section__text">
              Me especializo en transformar procesos manuales o poco estructurados en soluciones más eficientes, trazables y orientadas a datos mediante historias de usuario, criterios de aceptación, documentación AS-IS / TO-BE, definición de KPIs, automatización de workflows y tableros de control.
            </p>
              <p className="about-section__text">
              Actualmente enfoco mi carrera en roles de Analista Funcional / Business Analyst, con foco en mejora de procesos, transformación digital, integraciones y puente entre negocio e IT.
            </p>
              <p className="about-section__text">
              Busco aportar claridad, orden y seguimiento: desde el relevamiento inicial hasta la validación de la solución, cuidando que cada entrega responda a una necesidad real del negocio.
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
              { label: 'Enfoque', value: 'Análisis funcional y mejora de procesos' },
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