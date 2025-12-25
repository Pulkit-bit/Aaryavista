import { BarChart3, Globe, PenTool, Search, Share2, Smartphone, ArrowRight } from 'lucide-react';
import styles from './Services.module.css';

const servicesData = [
  {
    icon: <Search size={24} />,
    title: 'SEO Mastery',
    description: 'Dominate search results with our data-driven SEO strategies tailored for healthcare providers.'
  },
  {
    icon: <Share2 size={24} />,
    title: 'Social Media Growth',
    description: 'Build a loyal community and engage patients with high-impact social media campaigns.'
  },
  {
    icon: <Globe size={24} />,
    title: 'Web Development',
    description: 'High-performance, accessible, and stunning websites designed to convert visitors into patients.'
  },
  {
    icon: <BarChart3 size={24} />,
    title: 'PPC Advertising',
    description: 'Laser-focused ad campaigns that maximize ROI and bring immediate traffic to your practice.'
  },
  {
    icon: <PenTool size={24} />,
    title: 'Content Marketing',
    description: 'Establish authority with expert medical content that educates and builds trust.'
  },
  {
    icon: <Smartphone size={24} />,
    title: 'App Development',
    description: 'Custom mobile solutions to enhance patient experience and streamline your operations.'
  }
];

const Services = () => {
  return (
    <section id="services" className={`section-padding ${styles.section}`}>
      <div className="container">
        <div className={styles.heading}>
          <h2>
            Our <span>Expertise</span>
          </h2>
          <p className="text-slate-400">
            Comprehensive digital solutions designed to elevate your healthcare practice to new heights.
          </p>
        </div>

        <div className="grid-cols-3">
          {servicesData.map((service, index) => (
            <div key={index} className={`glass-panel ${styles.card}`}>
              <div className={styles.iconWrapper}>
                {service.icon}
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <div className={styles.learnMore}>
                Learn More <ArrowRight size={16} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
