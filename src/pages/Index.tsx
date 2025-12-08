import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import SkillsSection from '@/components/SkillsSection';
import CVSection from '@/components/CVSection';
import ProjectsSection from '@/components/ProjectsSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <CVSection />
        <ProjectsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
