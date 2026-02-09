import { Github, Linkedin, Mail } from 'lucide-react';

const contactLinks = [
  {
    icon: Github,
    label: 'GitHub',
    value: '@fabmdln',
    link: 'https://github.com/fabmdln'
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'Fabien Madelaine',
    link: 'https://linkedin.com/in/fabien-madelaine'
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'fabien.madelaine@example.com',
    link: 'mailto:fabien.madelaine@example.com'
  }
];

export function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-12 text-[#0078D4]">Contact</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {contactLinks.map((contact, index) => {
            const Icon = contact.icon;
            return (
              <a
                key={index}
                href={contact.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <div className="bg-[#0078D4] p-3 rounded-full">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-sm text-gray-600">{contact.label}</div>
                  <div className="font-semibold text-gray-900">{contact.value}</div>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
