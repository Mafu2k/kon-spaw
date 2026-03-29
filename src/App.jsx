import { useEffect } from 'react';
import Lenis from 'lenis';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Technology from './components/Technology';
import Projects from './components/Projects';
import Gallery from './components/Gallery';
import ContactSection from './components/ContactSection';

function App() {
  useEffect(() => {
    const isTouchDevice = window.matchMedia('(hover: none)').matches;

    const lenis = new Lenis({
      duration: isTouchDevice ? 0.8 : 1.4,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: !isTouchDevice,
      smoothTouch: false,
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
        <Gallery />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
