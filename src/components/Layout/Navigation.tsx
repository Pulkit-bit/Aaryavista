import { useState, useEffect } from 'react';
import styles from './Layout.module.css';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Determine active section based on scroll position
      const sections = ['services', 'why-us', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const sectionId of sections) {
        const section = document.getElementById(sectionId);
        if (section) {
          const { offsetTop, offsetHeight } = section;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={`${styles.navigation} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={styles.navContainer}>
        <button 
          className={styles.logo}
          onClick={scrollToTop}
          aria-label="Aaryavista - Go to top"
        >
          <img 
            src="/aaryavista-logo.png" 
            alt="Aaryavista Logo" 
            className={styles.logoImage}
          />
          <span className={styles.logoText}>Aaryavista</span>
        </button>

        {/* Desktop Navigation */}
        <ul className={styles.navLinks}>
          <li>
            <button
              className={`${styles.navLink} ${activeSection === 'services' ? styles.active : ''}`}
              onClick={() => scrollToSection('services')}
            >
              Services
            </button>
          </li>
          <li>
            <button
              className={`${styles.navLink} ${activeSection === 'why-us' ? styles.active : ''}`}
              onClick={() => scrollToSection('why-us')}
            >
              Why Us
            </button>
          </li>
          <li>
            <button
              className={`${styles.navLink} ${activeSection === 'contact' ? styles.active : ''}`}
              onClick={() => scrollToSection('contact')}
            >
              Contact
            </button>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className={styles.mobileMenuButton}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle mobile menu"
          aria-expanded={isMobileMenuOpen}
        >
          <span className={styles.hamburger}></span>
          <span className={styles.hamburger}></span>
          <span className={styles.hamburger}></span>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className={styles.mobileMenu}>
          <button
            className={styles.mobileNavLink}
            onClick={() => scrollToSection('services')}
          >
            Services
          </button>
          <button
            className={styles.mobileNavLink}
            onClick={() => scrollToSection('why-us')}
          >
            Why Us
          </button>
          <button
            className={styles.mobileNavLink}
            onClick={() => scrollToSection('contact')}
          >
            Contact
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
