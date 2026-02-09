import { ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'MeteoViz',
    description: 'Outil de visualisation météo avec tableaux de bord interactifs et analyse de données climatiques en temps réel.',
    image: 'https://images.unsplash.com/photo-1756756412220-41802298c3b9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWF0aGVyJTIwZGF0YSUyMHZpc3VhbGl6YXRpb24lMjBkYXNoYm9hcmR8ZW58MXx8fHwxNzcwNjc0NzkxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    link: '#'
  },
  {
    title: 'Data For Good',
    description: 'Projet d\'analyse de données pour une cause sociale, visant à améliorer l\'impact des initiatives caritatives.',
    image: 'https://images.unsplash.com/photo-1648134859177-525771773915?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2NpYWwlMjBnb29kJTIwZGF0YSUyMGFuYWx5c2lzfGVufDF8fHx8MTc3MDY3NDc5Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    link: '#'
  },
  {
    title: 'Taxplorer',
    description: 'Mission freelance pour l\'Observatoire Fiscal Européen - Analyse et visualisation de données fiscales.',
    image: 'https://images.unsplash.com/photo-1762427354397-854a52e0ded7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0YXglMjBmaW5hbmNpYWwlMjBkYXRhJTIwYW5hbHl0aWNzfGVufDF8fHx8MTc3MDY3NDc5Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    link: '#'
  }
];

export function ProjectsSection() {
  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-12 text-[#0078D4]">Projets</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-[#0078D4]">{project.title}</h3>
                <p className="text-gray-700 mb-4">{project.description}</p>
                <a
                  href={project.link}
                  className="inline-flex items-center gap-2 text-[#0078D4] hover:underline"
                >
                  Voir le projet <ExternalLink size={16} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
