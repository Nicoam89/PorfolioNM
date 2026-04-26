const skillGroups = [
  {
    category: 'Frontend',
    skills: ['React', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS'],
  },
  {
    category: 'Backend',
    skills: ['Node.js', 'Express', 'REST APIs'],
  },
  {
    category: 'Base de datos',
    skills: ['MongoDB', 'Mongoose'],
  },
  {
    category: 'Herramientas',
    skills: ['Git', 'GitHub', 'VS Code', 'Postman', 'Vite'],
  },
]

function Skills() {
  return (
    <section id="skills" className="bg-slate-900 py-24">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-white mb-2">Skills</h2>
        <div className="w-12 h-1 bg-blue-400 mb-12 rounded" />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillGroups.map((group) => (
            <div key={group.category} className="bg-slate-800 rounded-xl p-6">
              <h3 className="text-blue-400 font-mono text-sm uppercase tracking-wider mb-4">
                {group.category}
              </h3>
              <ul className="flex flex-col gap-2">
                {group.skills.map((skill) => (
                  <li key={skill} className="flex items-center gap-2 text-slate-300 text-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400 shrink-0" />
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