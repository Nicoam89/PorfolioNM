function Contact() {
  return (
    <section id="contact" className="contact-section section">
      <div className="container">
        <h2 className="section__title">Contacto</h2>
        <div className="section__divider" />

        <div className="contact-section__content">
          <p className="contact-section__text">
            ¿Necesitás ordenar un proceso, relevar requerimientos o transformar una necesidad de negocio en una solución implementable? Escribime y
            conversemos cómo puedo ayudarte.
          </p>

          <div className="contact-list">
            <a href="mailto:nico.am89@gmail.com" className="contact-item">
              <span className="contact-item__icon">@</span>
              nico.am89@gmail.com
            </a>

            <a
              href="https://wa.me/5491140584764"
              target="_blank"
              rel="noreferrer"
              className="contact-item"
            >
              <span className="contact-item__icon">wa</span>
              WhatsApp
            </a>

            <a
              href="https://www.linkedin.com/in/nicolas-ariel-martin/"
              target="_blank"
              rel="noreferrer"
              className="contact-item"
            >
              <span className="contact-item__icon">in</span>
              LinkedIn
            </a>

            <a
              href="https://github.com/Nicoam89"
              target="_blank"
              rel="noreferrer"
              className="contact-item"
            >
              <span className="contact-item__icon">gh</span>
              GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact