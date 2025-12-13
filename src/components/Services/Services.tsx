import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { services } from '../../data/services';
import ServiceCard from './ServiceCard';
import styles from './Services.module.css';

const Services = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1, triggerOnce: true });

  return (
    <section 
      id="services"
      ref={ref as React.RefObject<HTMLElement>}
      className={`${styles.servicesSection} ${isVisible ? styles.visible : ''}`}
    >
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Our Services</h2>
        <div className={styles.servicesGrid}>
          {services.map((service, index) => (
            <ServiceCard 
              key={service.id} 
              service={service} 
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
