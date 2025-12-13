import { useEffect, useState } from 'react';
import styles from './Hero.module.css';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger fade-in animation on mount
    setIsVisible(true);
  }, []);

  const scrollToServices = () => {
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className={`${styles.hero} ${isVisible ? styles.visible : ''}`}>
      <div className={styles.heroContent}>
        <h1 className={styles.tagline}>
          Elevating Brands, Amplifying Voices
        </h1>
        <p className={styles.introduction}>
          Aaryavista is a dynamic PR agency dedicated to shaping narratives, building reputations, 
          and driving engagement for individuals, businesses, and organizations. With a keen understanding 
          of the Indian market and global trends, we craft tailored strategies that amplify your voice 
          and propel your brand forward.
        </p>
        <button 
          className={styles.cta}
          onClick={scrollToServices}
          aria-label="Explore our services"
        >
          Explore Our Services
        </button>
      </div>
    </section>
  );
};

export default Hero;
