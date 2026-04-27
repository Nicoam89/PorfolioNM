function Hero() {
  return (
    <section id="hero" className="hero-section">
      <div className="container hero-section__content">
        <p className="hero-section__intro">Hola, mi nombre es</p>
        <h1 className="hero-section__title">Nicolas Ariel Martin</h1>
        <h2 className="hero-section__subtitle">Business Process Automation Developer</h2>
        <p className="hero-section__description">
          Automatizo procesos a medida utilizando las herramientaas adecuadas para cada caso y siempre con un enfoque en la integridad de la solucion.
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