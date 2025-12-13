import type { ServiceCardProps } from '../../types';
import styles from './Services.module.css';

const ServiceCard = ({ service, index }: ServiceCardProps) => {
  return (
    <article 
      className={styles.serviceCard}
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className={styles.cardContent}>
        <h3 className={styles.serviceTitle}>{service.title}</h3>
        <p className={styles.serviceDescription}>{service.description}</p>
      </div>
    </article>
  );
};

export default ServiceCard;
