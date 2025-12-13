import Navigation from './components/Layout/Navigation';
import Hero from './components/Hero/Hero';
import Services from './components/Services/Services';
import WhyUs from './components/WhyUs/WhyUs';
import Contact from './components/Contact/Contact';
import Footer from './components/Layout/Footer';

function App() {
  return (
    <div className="app">
      {/* Skip to content link for accessibility */}
      <a href="#services" className="skip-to-content">
        Skip to main content
      </a>

      <Navigation />

      <main>
        <Hero />
        <Services />
        <WhyUs />
        <Contact />
      </main>


      <Footer />
    </div>
  );
}

export default App;
