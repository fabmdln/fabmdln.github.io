import { FileText, BarChart3, Video, FolderOpen, Calendar, Brain } from 'lucide-react';

const deliverables = [
  {
    icon: FileText,
    title: 'Analyse des besoins métiers',
    type: 'PDF',
    link: '#'
  },
  {
    icon: BarChart3,
    title: 'Tableaux de bord',
    type: 'Lien Tableau/Power BI',
    link: '#'
  },
  {
    icon: Video,
    title: 'Vidéo de formation',
    type: 'Lien Loom/YouTube',
    link: '#'
  },
  {
    icon: FolderOpen,
    title: 'Documentation',
    type: 'PDF/Guide',
    link: '#'
  },
  {
    icon: Calendar,
    title: 'Diagramme de Gantt',
    type: 'Image PNG',
    link: '#'
  },
  {
    icon: Brain,
    title: 'Carte mentale',
    type: 'Image PNG',
    link: '#'
  }
];

export function DeliverablesSection() {
  return (
    <section id="deliverables" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-12 text-[#0078D4]">Livrables pour Aéroworld</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {deliverables.map((deliverable, index) => {
            const Icon = deliverable.icon;
            return (
              <a
                key={index}
                href={deliverable.link}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border-l-4 border-[#0078D4]"
              >
                <div className="flex items-start gap-4">
                  <div className="bg-[#0078D4]/10 p-3 rounded-lg">
                    <Icon className="w-6 h-6 text-[#0078D4]" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg mb-1">{deliverable.title}</h3>
                    <p className="text-sm text-gray-600">{deliverable.type}</p>
                  </div>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
