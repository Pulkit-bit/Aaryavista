import { useState } from 'react';
import { contactInfo, teamMembers } from '../../data/contact';
import styles from './Contact.module.css';

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // For Netlify deployment, this will work automatically
      // For other platforms, we'll use a fetch request
      const formData = new FormData(form);

      // Form name is already included in the hidden input
      // formData.append('form-name', 'contact');

      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formData as any).toString()
      });

      if (response.ok) {
        setSubmitStatus('success');
        form.reset();
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Error sending form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className={styles.contactSection}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Let's Connect</h2>
        <p className={styles.subtitle}>
          Want to elevate your brand? 📢 Reach out to us and let's discuss how we can help.
        </p>

        <div className={styles.contactInfo}>

          {/* 1️⃣ Our Team Members FIRST */}
          <div className={styles.contactItem}>
            <div className={styles.contactIcon}>👥</div>
            <div className={styles.contactDetails}>
              <h3 className={styles.contactLabel}>Our Team Members</h3>
              <div className={styles.teamList}>
                <p className={styles.teamMemberName}>
                  {teamMembers[0]?.replace(/\s+/g, '\u00A0') ?? 'Team Member 1'}
                </p>

                <p className={styles.teamMemberName}>
                  {teamMembers[1]?.replace(/\s+/g, '\u00A0') ?? 'Team Member 2'}
                </p>

              </div>
            </div>
          </div>

          {/* 2️⃣ Email */}
          <div className={styles.contactItem}>
            <div className={styles.contactIcon}>📧</div>
            <div className={styles.contactDetails}>
              <h3 className={styles.contactLabel}>Email</h3>
              <p className={styles.contactValue}>{contactInfo.email}</p>
            </div>
          </div>

          {/* 3️⃣ Phone */}
          <div className={styles.contactItem}>
            <div className={styles.contactIcon}>📱</div>
            <div className={styles.contactDetails}>
              <h3 className={styles.contactLabel}>Phone</h3>
              <p className={styles.contactValue}>{contactInfo.phone}</p>
            </div>
          </div>

        </div>



        {/* Removed the separate Meet Our Team section so the two individual cards won't render here.
            Team UI is now combined into the contactInfo row above. */}

        <form
          className={styles.contactForm}
          name="contact"
          method="POST"
          data-netlify="true"
          onSubmit={handleSubmit}
        >
          <h3 className={styles.formTitle}>Send us a message</h3>

          {/* Hidden field for Netlify */}
          <input type="hidden" name="form-name" value="contact" />

          <div className={styles.formGroup}>
            <label htmlFor="name" className={styles.label}>Name *</label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className={styles.input}
              placeholder="Your full name"
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="email" className={styles.label}>Email *</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className={styles.input}
              placeholder="your.email@example.com"
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="phone" className={styles.label}>Phone *</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              required
              className={styles.input}
              placeholder="+91 XXXXX XXXXX"
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="message" className={styles.label}>Message</label>
            <textarea
              id="message"
              name="message"
              className={styles.textarea}
              placeholder="Tell us about your project or how we can help..."
              rows={4}
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className={`${styles.submitButton} ${submitStatus === 'success' ? styles.success : ''}`}
          >
            {isSubmitting ? 'Sending...' :
              submitStatus === 'success' ? '✓ Message Sent!' :
                'Send Message'}
          </button>

          {submitStatus === 'success' && (
            <p className={styles.successMessage}>
              ✅ We have received your information and will connect with you shortly!
            </p>
          )}

          {submitStatus === 'error' && (
            <p className={styles.errorMessage}>
              ❌ There was an error sending your message. Please try again or contact us directly.
            </p>
          )}
        </form>
      </div>
    </section>
  );
};

export default Contact;
