function Contact() {
  return (
    <section id="contact" className="contact-section section">
      <div className="container">
        <h2 className="section__title">Contacto</h2>
        <div className="section__divider" />

        <div className="contact-section__content">
          <p className="contact-section__text">
            ¿Tenés un proyecto en mente o querés trabajar juntos? Escribime y
            te respondo a la brevedad.
          </p>

          <div className="contact-list">
            <a href="mailto:tu@email.com" className="contact-item">
              <span className="contact-item__icon">@</span>
              tu@email.com
            </a>

            <a
              href="https://linkedin.com/in/tuperfil"
              target="_blank"
              rel="noreferrer"
              className="contact-item"
            >
              <span className="contact-item__icon">in</span>
              LinkedIn
            </a>

            <a
              href="https://github.com/tuusuario"
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