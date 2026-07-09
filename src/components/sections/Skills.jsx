const skillGroups = [
  {
    category: 'Análisis funcional',
    skills: ['Relevamiento', 'Historias de usuario', 'Criterios de aceptación', 'Documentación funcional'],
  },
  {
    category: 'Procesos',
    skills: ['AS-IS / TO-BE', 'BPMN', 'Mejora continua', 'KPIs'],
  },
  {
    category: 'Datos y BI',
    skills: ['Power BI', 'SQL', 'Excel', 'Power Query', 'Dashboards'],
  },
  {
    category: 'Automatización',
    skills: ['n8n', 'Make', 'Workflows', 'KNIME', 'IA aplicada'],
  },
  {
    category: 'Gestión y colaboración',
    skills: ['Stakeholders', 'Priorización', 'UAT', 'Gestión de proyectos'],
  },
  {
    category: 'Tecnología',
    skills: ['React', 'Node.js', 'REST APIs', 'SAP Business One', 'Git'],
  },
]

function Skills() {
  return (
    <section id="skills" className="skills-section section">
      <div className="container">
        <h2 className="section__title">Skills</h2>
        <div className="section__divider" />

        <div className="skills-grid">
          {skillGroups.map((group) => (
            <div key={group.category} className="skills-card">
              <h3 className="skills-card__title">{group.category}</h3>
              <ul className="skills-card__list">
                {group.skills.map((skill) => (
                  <li key={skill} className="skills-card__item">
                    <span className="skills-card__dot" />
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills