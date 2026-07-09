function Hero() {
  return (
    <section id="hero" className="hero-section">
      <div className="container hero-section__content">
        <p className="hero-section__intro">Hola, mi nombre es</p>
        <h1 className="hero-section__title">Nicolas Ariel Martin</h1>
        <h2 className="hero-section__subtitle">Business & Funcional Analyst</h2>
        <h3 className="hero-section__subtitle2">Procesos | Automatización | BI | Integración negocio–IT </h3>
        <p className="hero-section__description">
          Conecto necesidades de negocio con soluciones tecnológicas claras, documentadas y escalables.
        </p>
        <div className="hero-section__actions">
          <a href="#projects" className="button button--primary">
            Ver proyectos
          </a>
          <a href="#contact" className="button button--outline">
            Contacto
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero