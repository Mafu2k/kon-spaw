import { useEffect } from 'react';
import Lenis from 'lenis';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Technology from './components/Technology';
import Projects from './components/Projects';
import Clients from './components/Clients';
import ContactSection from './components/ContactSection';

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.4,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, []);

  return (
    <div style={{ background: 'var(--ks-black)', color: 'var(--ks-text)' }}>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Technology />
        <Projects />
        <Clients />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
