import { useEffect } from 'react';
import { Abordagem } from './components/Abordagem';
import { About } from './components/About';
import { Agendar } from './components/Agendar';
import { ComoFunciona } from './components/ComoFunciona';
import { Contact } from './components/Contact';
import { CtaSchedule } from './components/CtaSchedule';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { InstagramConnect } from './components/Instagram';
import { Motivos } from './components/Motivos';
import { Reviews } from './components/Reviews';
import { Services } from './components/Services';
import { useScrollReveal } from './hooks/useScrollReveal';

function App() {
  useScrollReveal();

  useEffect(() => {
    // Lucide React icons are rendered as React components, no initialization needed
  }, []);

  return (
    <>
      {/* Noise texture overlay */}
      <div className="bg-noise" />

      {/* Header */}
      <Header />

      {/* Main Content */}
      <main>
        <Hero />
        <About />
        <Motivos />
        <ComoFunciona />
        <CtaSchedule />
        <Abordagem />
        <Reviews />
        <Agendar />
        <Services />
        <InstagramConnect />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
}

export default App;
