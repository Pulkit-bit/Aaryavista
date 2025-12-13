import styles from './Footer.module.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.column}>
            <h3>Aaryavista</h3>
            <p style={{ color: 'var(--color-text-light)', lineHeight: '1.6' }}>
              Elevating Brands, Amplifying Voices. <br />
              Your partner in strategic public relations and reputation management.
            </p>
          </div>

          <div className={styles.column}>
            <h3>Quick Links</h3>
            <ul>
              <li><a href="#services">Services</a></li>
              <li><a href="#why-us">Why Us</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>


        </div>

        <div className={styles.copyright}>
          <p>&copy; {currentYear} Aaryavista. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
