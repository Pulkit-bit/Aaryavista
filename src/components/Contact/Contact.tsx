import { useState } from 'react';
import { contactInfo, teamMembers } from '../../data/contact';
// import styles from './Contact.module.css'; // Removed

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

      // Ensure form-name is explicitly present for Netlify
      // Even if the hidden input exists, explicit append guarantees it
      if (!formData.has('form-name')) {
        formData.append('form-name', 'contact');
      }

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
    <section id="contact" className="py-20 px-6 bg-gradient-to-br from-[#667eea] to-[#764ba2] text-white">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Let's Connect</h2>
        <p className="text-lg md:text-xl text-white/90 mb-16 max-w-2xl mx-auto leading-relaxed">
          Want to elevate your brand? 📢 Reach out to us and let's discuss how we can help.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">

          {/* 1️⃣ Our Team Members FIRST */}
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all hover:-translate-y-1 hover:shadow-xl flex flex-col items-center text-center">
            <div className="text-4xl mb-4">👥</div>
            <div className="w-full">
              <h3 className="text-sm font-semibold text-white/80 uppercase tracking-wider mb-2">Our Team Members</h3>
              <div className="space-y-1">
                <p className="text-lg font-medium whitespace-nowrap">
                  {teamMembers[0]?.replace(/\s+/g, '\u00A0') ?? 'Team Member 1'}
                </p>
                <p className="text-lg font-medium whitespace-nowrap">
                  {teamMembers[1]?.replace(/\s+/g, '\u00A0') ?? 'Team Member 2'}
                </p>
              </div>
            </div>
          </div>

          {/* 2️⃣ Email */}
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all hover:-translate-y-1 hover:shadow-xl flex flex-col items-center text-center">
            <div className="text-4xl mb-4">📧</div>
            <div className="w-full">
              <h3 className="text-sm font-semibold text-white/80 uppercase tracking-wider mb-2">Email</h3>
              <p className="text-lg font-medium break-all">{contactInfo.email}</p>
            </div>
          </div>

          {/* 3️⃣ Phone */}
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all hover:-translate-y-1 hover:shadow-xl flex flex-col items-center text-center">
            <div className="text-4xl mb-4">📱</div>
            <div className="w-full">
              <h3 className="text-sm font-semibold text-white/80 uppercase tracking-wider mb-2">Phone</h3>
              <p className="text-lg font-medium">{contactInfo.phone}</p>
            </div>
          </div>

        </div>

        <form
          className="bg-white/10 backdrop-blur-md rounded-2xl p-8 md:p-12 border border-white/20 max-w-3xl mx-auto"
          name="contact"
          method="POST"
          data-netlify="true"
          onSubmit={handleSubmit}
        >
          <h3 className="text-2xl font-semibold mb-8 text-center text-white">Send us a message</h3>

          {/* Hidden field for Netlify */}
          <input type="hidden" name="form-name" value="contact" />

          <div className="space-y-6 text-left">
            <div>
              <label htmlFor="name" className="block text-sm font-semibold text-white/90 uppercase tracking-wider mb-2">Name *</label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full px-4 py-3 rounded-lg border-2 border-white/30 bg-white/10 text-white placeholder-white/60 focus:outline-none focus:border-white/80 focus:bg-white/20 transition-all font-medium"
                placeholder="Your full name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-white/90 uppercase tracking-wider mb-2">Email *</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full px-4 py-3 rounded-lg border-2 border-white/30 bg-white/10 text-white placeholder-white/60 focus:outline-none focus:border-white/80 focus:bg-white/20 transition-all font-medium"
                placeholder="your.email@example.com"
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-semibold text-white/90 uppercase tracking-wider mb-2">Phone *</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                className="w-full px-4 py-3 rounded-lg border-2 border-white/30 bg-white/10 text-white placeholder-white/60 focus:outline-none focus:border-white/80 focus:bg-white/20 transition-all font-medium"
                placeholder="+91 XXXXX XXXXX"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-semibold text-white/90 uppercase tracking-wider mb-2">Message</label>
              <textarea
                id="message"
                name="message"
                className="w-full px-4 py-3 rounded-lg border-2 border-white/30 bg-white/10 text-white placeholder-white/60 focus:outline-none focus:border-white/80 focus:bg-white/20 transition-all font-medium min-h-[120px] resize-y"
                placeholder="Tell us about your project or how we can help..."
                rows={4}
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full mt-8 py-4 px-8 text-lg font-semibold rounded-lg bg-white text-[#667eea] hover:bg-slate-50 transition-all hover:-translate-y-0.5 hover:shadow-lg disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none ${submitStatus === 'success' ? 'bg-green-500 text-white hover:bg-green-600' : ''}`}
          >
            {isSubmitting ? 'Sending...' :
              submitStatus === 'success' ? '✓ Message Sent!' :
                'Send Message'}
          </button>

          {submitStatus === 'success' && (
            <p className="mt-6 p-4 rounded-lg bg-green-500/20 border border-green-500/50 text-green-400 font-medium text-center">
              ✅ We have received your information and will connect with you shortly!
            </p>
          )}

          {submitStatus === 'error' && (
            <p className="mt-6 p-4 rounded-lg bg-red-500/20 border border-red-500/50 text-red-400 font-medium text-center">
              ❌ There was an error sending your message. Please try again or contact us directly.
            </p>
          )}
        </form>
      </div>
    </section>
  );
};

export default Contact;
