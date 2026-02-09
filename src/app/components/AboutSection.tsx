export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8 border-l-4 border-[#0078D4] pl-6">
          <img
            src="https://images.unsplash.com/photo-1629507208649-70919ca33793?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzcyUyMHBvcnRyYWl0JTIwbWFufGVufDF8fHx8MTc3MDY0MzQ0Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Fabien Madelaine"
            className="w-36 h-36 md:w-40 md:h-40 rounded-full object-cover shadow-lg"
          />
          <div className="flex-1">
            <h2 className="text-3xl font-bold mb-4 text-[#0078D4]">À propos</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Passionné par le numérique et les données, je cumule 20 ans d'expérience en développement web 
              et transformation digitale. Actuellement en transition vers l'analyse data, je combine expertise 
              technique et vision métier pour proposer des solutions data-driven. Autodidacte, je finalise 
              un diplôme de niveau 6 en analyse data pour structurer cette passion.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
