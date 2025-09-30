import { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import DevelopersCourses from './components/DevelopersCourses';
import Projects from './components/Projects';
import ResearchDevelopment from './components/ResearchDevelopment';
import History from './components/History';
import ContactSupport from './components/ContactSupport';
import Collaboration from './components/Collaboration';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

export default function App() {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'developers-courses', 'projects', 'research', 'history', 'collaboration', 'contact', 'faq'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <Navigation activeSection={activeSection} onSectionChange={setActiveSection} />
      
      <main>
        <section id="hero">
          <Hero />
        </section>
        
        <section id="about">
          <About />
        </section>
        
        <section id="developers-courses">
          <DevelopersCourses />
        </section>
        
        <section id="projects">
          <Projects />
        </section>
        
        <section id="research">
          <ResearchDevelopment />
        </section>
        
        <section id="history">
          <History />
        </section>
        
        <section id="collaboration">
          <Collaboration />
        </section>
        
        <section id="contact">
          <ContactSupport />
        </section>
        
        <section id="faq">
          <FAQ />
        </section>
      </main>
      
      <Footer />
    </div>
  );
}