import Navbar from './components/Layout/Navbar';
import Footer from './components/Layout/Footer';
import Hero from './components/Hero/Hero';
import Services from './components/Services/Services';
import Contact from './components/Contact/Contact';
import WhyUs from './components/WhyUs/WhyUs';

function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Hero />
        {/* WhyUs serves as the "About" or "Intro" section */}
        <WhyUs />
        <Services />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
