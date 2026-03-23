import { useState } from 'react';
import { Github, Linkedin, Mail, Check } from 'lucide-react';
import { useLanguage } from './language-provider';
import styles from './contact-section.module.css';

export function ContactSection() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    // Honeypot field - should remain empty
    website: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [emailCopied, setEmailCopied] = useState(false);

  // Email address stored securely (not in plain HTML)
  const getEmailAddress = () => {
    // Simple obfuscation - decoded at runtime
    const parts = ['Lucas.z0623', 'outlook.com'];
    return `${parts[0]}@${parts[1]}`;
  };

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(getEmailAddress());
      setEmailCopied(true);
      setTimeout(() => setEmailCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy email:', err);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Security checks
    // 1. Honeypot check - if filled, likely a bot
    if (formData.website) {
      console.log('Honeypot triggered - potential bot detected');
      return;
    }

    // 2. Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      return;
    }

    setIsSubmitting(true);

    try {
      // TODO: Implement server-side submission
      // Structure for secure backend integration:
      //
      // const response = await fetch('/api/contact', {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      //   body: JSON.stringify({
      //     name: formData.name,
      //     email: formData.email,
      //     message: formData.message,
      //     // Include Turnstile token here
      //     turnstileToken: turnstileToken,
      //   }),
      // });
      //
      // Backend should:
      // - Verify Turnstile token with Cloudflare API
      // - Rate limit by IP (e.g., max 3 submissions per hour)
      // - Sanitize all inputs
      // - Send email via secure mail service (SendGrid, AWS SES, etc.)
      // - Log submission attempts for monitoring

      // Temporary placeholder - remove in production
      console.log('Form submitted:', {
        name: formData.name,
        email: formData.email,
        message: formData.message,
      });

      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));

      // Reset form on success
      setFormData({
        name: '',
        email: '',
        message: '',
        website: '',
      });

      alert('Message sent successfully! (This is a demo - backend not yet implemented)');
    } catch (error) {
      console.error('Form submission error:', error);
      alert('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const socialLinks = [
    {
      icon: Github,
      label: t('contact.social.github'),
      href: 'https://github.com/Lucas0623z',
      external: true,
    },
    {
      icon: Linkedin,
      label: t('contact.social.linkedin'),
      href: 'https://www.linkedin.com/in/yuexuan-zhang-075883381/',
      external: true,
    },
  ];

  return (
    <section id="contact" className={styles.contact}>
      <div className={styles.container}>
        {/* Window controls */}
        <div className={styles.windowControls}>
          <div className={`${styles.dot} ${styles.dotRed}`} />
          <div className={`${styles.dot} ${styles.dotYellow}`} />
          <div className={`${styles.dot} ${styles.dotGreen}`} />
        </div>

        <div className={styles.header}>
          <div className={styles.htmlTag}>
            {'<section id="contact">'}
          </div>
          <h2 className={styles.title}>{t('contact.title')}</h2>
          <div className={styles.divider} />
        </div>

        <div className={styles.contentGrid}>
          {/* Contact Info */}
          <div className={styles.contactInfo}>
            <div>
              <p className={styles.description}>
                {t('contact.description')}
              </p>

              <p className={styles.formNote}>
                {t('contact.formNote')}
              </p>
            </div>

            {/* Social Links */}
            <div className={styles.socialSection}>
              <h3 className={styles.socialTitle}>
                {t('contact.social')}
              </h3>
              <div className={styles.socialLinks}>
                {socialLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.socialLink}
                    aria-label={link.label}
                  >
                    <link.icon size={16} />
                    <span>{link.label}</span>
                  </a>
                ))}

                {/* Copy Email Button - no visible email address */}
                <button
                  onClick={handleCopyEmail}
                  className={styles.socialLink}
                  aria-label={t('contact.social.copyEmail')}
                  type="button"
                >
                  {emailCopied ? <Check size={16} /> : <Mail size={16} />}
                  <span>{emailCopied ? t('contact.social.emailCopied') : t('contact.social.copyEmail')}</span>
                </button>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className={styles.formContainer}>
            <form onSubmit={handleSubmit} className={styles.form}>
              {/* Honeypot field - hidden from users, but visible to bots */}
              <input
                type="text"
                name="website"
                value={formData.website}
                onChange={handleChange}
                className={styles.honeypot}
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
              />

              <div className={styles.formGroup}>
                <label htmlFor="name" className={styles.label}>
                  {t('contact.form.name')}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className={styles.input}
                  placeholder={t('contact.form.namePlaceholder')}
                  disabled={isSubmitting}
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="email" className={styles.label}>
                  {t('contact.form.email')}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className={styles.input}
                  placeholder={t('contact.form.emailPlaceholder')}
                  disabled={isSubmitting}
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="message" className={styles.label}>
                  {t('contact.form.message')}
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className={styles.textarea}
                  placeholder={t('contact.form.messagePlaceholder')}
                  disabled={isSubmitting}
                />
              </div>

              {/* TODO: Add Cloudflare Turnstile here
                  Integration structure:

                  <div className={styles.turnstile}>
                    <Turnstile
                      siteKey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY}
                      onVerify={(token) => setTurnstileToken(token)}
                    />
                  </div>

                  Install: npm install @marsidev/react-turnstile
                  Docs: https://developers.cloudflare.com/turnstile/
              */}

              <button
                type="submit"
                className={styles.submitButton}
                disabled={isSubmitting}
              >
                <Mail size={16} />
                <span>{isSubmitting ? t('contact.form.sending') : t('contact.form.submit')}</span>
              </button>
            </form>
          </div>
        </div>

        <div className={styles.closingTag}>
          {'</section>'}
        </div>
      </div>
    </section>
  );
}
