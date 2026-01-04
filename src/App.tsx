import { useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Motivos } from './components/Motivos';
import { ComoFunciona } from './components/ComoFunciona';
import { Abordagem } from './components/Abordagem';
import { Agendar } from './components/Agendar';
import { Services } from './components/Services';
import { InstagramConnect } from './components/Instagram';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
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
        <Abordagem />
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
