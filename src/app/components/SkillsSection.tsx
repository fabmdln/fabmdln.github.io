const skills = [
  { name: 'Python', icon: '🐍', color: 'bg-yellow-100 text-yellow-800' },
  { name: 'SQL', icon: '💾', color: 'bg-blue-100 text-blue-800' },
  { name: 'Tableau', icon: '📊', color: 'bg-orange-100 text-orange-800' },
  { name: 'Power BI', icon: '📈', color: 'bg-yellow-100 text-yellow-800' },
  { name: 'Git', icon: '🔧', color: 'bg-gray-100 text-gray-800' },
  { name: 'AWS', icon: '☁️', color: 'bg-orange-100 text-orange-800' },
  { name: 'Excel', icon: '📑', color: 'bg-green-100 text-green-800' },
  { name: 'R', icon: '📊', color: 'bg-blue-100 text-blue-800' },
  { name: 'JavaScript', icon: '⚡', color: 'bg-yellow-100 text-yellow-800' }
];

export function SkillsSection() {
  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-12 text-[#0078D4]">Compétences & Outils</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className={`${skill.color} px-6 py-4 rounded-lg shadow-md text-center transform hover:scale-105 transition-transform`}
            >
              <div className="text-3xl mb-2">{skill.icon}</div>
              <div className="font-semibold">{skill.name}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
