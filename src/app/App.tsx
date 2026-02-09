import { Header } from './components/Header';
import { AboutSection } from './components/AboutSection';
import { DeliverablesSection } from './components/DeliverablesSection';
import { SkillsSection } from './components/SkillsSection';
import { ProjectsSection } from './components/ProjectsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-24">
        <AboutSection />
        <DeliverablesSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
