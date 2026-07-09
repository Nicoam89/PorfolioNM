const trainingGroups = [
  {
    category: 'Business Analysis & Procesos',
    items: [
      'Gestión por procesos y mejora continua',
      'Metodologías ágiles, backlog e historias de usuario',
      'Documentación funcional y criterios de aceptación',
    ],
  },
  {
    category: 'Datos & BI',
    items: [
      'Power BI',
      'SQL',
      'Excel avanzado / Power Query',
      'Análisis de KPIs e indicadores de gestión',
    ],
  },
  {
    category: 'Automatización & Tecnología',
    items: [
      'Carrera Full Stack Web – Coderhouse',
      'Backend / Desarrollo Web – Coderhouse',
      'Automatización de workflows con Make y n8n',
      'Desarrollo de prototipos con React, Node.js y MongoDB',
    ],
  },
]

function Training() {
  return (
    <section id="training" className="training-section section">
      <div className="container">
        <h2 className="section__title">Formación y Certificaciones</h2>
        <div className="section__divider" />
        <p className="training-section__intro">
          Formación continua orientada al análisis funcional, automatización de procesos, datos y soluciones digitales.
        </p>

        <div className="training-grid">
          {trainingGroups.map((group) => (
            <article key={group.category} className="training-card">
              <h3 className="training-card__title">{group.category}</h3>
              <ul className="training-card__list">
                {group.items.map((item) => (
                  <li key={item} className="training-card__item">
                    <span className="training-card__check" aria-hidden="true">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Training