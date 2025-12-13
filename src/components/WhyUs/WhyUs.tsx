import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import styles from './WhyUs.module.css';

const WhyUs = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2, triggerOnce: true });

  const differentiators = [
    {
      id: 1,
      title: 'Personalized Approach',
      description: 'Experienced professionals delivering tailored strategies for your unique needs.',
      icon: '👥'
    },
    {
      id: 2,
      title: 'Proven Track Record',
      description: 'Demonstrated success in driving measurable results for our clients.',
      icon: '🏆'
    },
    {
      id: 3,
      title: 'Market Understanding',
      description: 'Deep expertise in both Indian and global markets for comprehensive reach.',
      icon: '🌍'
    },
    {
      id: 4,
      title: 'Innovative Strategies',
      description: 'Creative, forward-thinking approaches tailored to achieve your goals.',
      icon: '💡'
    }
  ];

  return (
    <section 
      id="why-us"
      ref={ref as React.RefObject<HTMLElement>}
      className={`${styles.whyUsSection} ${isVisible ? styles.visible : ''}`}
    >
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Why Aaryavista?</h2>
        <div className={styles.differentiatorGrid}>
          {differentiators.map((item, index) => (
            <div 
              key={item.id} 
              className={styles.differentiatorCard}
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className={styles.icon}>{item.icon}</div>
              <h3 className={styles.cardTitle}>{item.title}</h3>
              <p className={styles.cardDescription}>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
