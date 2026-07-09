const skillGroups = [
    {
    category: 'Automatizacion',
    skills: ['n8n', 'Make', 'Power Query', 'Workflows', 'KNIME'],
  },
    {
    category: 'Procesos',
    skills: ['BPMN', 'IA'],
  },
   {
    category: 'Gestion',
    skills: ['Gestión de proyectos','Dashboards', 'Power BI', 'Excel'],
  },
  {
    category: 'Frontend',
    skills: ['React', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS'],
  },
  {
    category: 'Backend',
    skills: ['Node.js', 'Express', 'REST APIs', 'Docker'],
  },
  {
    category: 'Base de datos',
    skills: ['MongoDB', 'Mongoose', 'SQL'],
  },
  {
    category: 'Herramientas',
    skills: ['Git', 'GitHub', 'VS Code', 'Postman', 'Vite'],
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