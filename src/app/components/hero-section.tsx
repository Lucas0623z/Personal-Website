import { Terminal, Code2, Github, Linkedin, Mail } from 'lucide-react';
import { useLanguage } from './language-provider';
import styles from './hero-section.module.css';

export function HeroSection() {
  const { t } = useLanguage();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.card}>
          {/* macOS-style window controls */}
          <div className={styles.windowControls}>
            <div className={`${styles.dot} ${styles.dotRed}`} />
            <div className={`${styles.dot} ${styles.dotYellow}`} />
            <div className={`${styles.dot} ${styles.dotGreen}`} />
          </div>

          {/* Terminal-style header */}
          <div className={styles.terminalHeader}>
            <Terminal size={16} color="var(--color-text-tertiary)" />
            <span className={styles.terminalPath}>~/portfolio</span>
          </div>

          {/* Main content */}
          <div className={styles.content}>
            <div className={styles.greeting}>
              {t('hero.greeting')}
            </div>

            <div className={styles.headingGroup}>
              <h1 className={styles.heading}>
                {t('hero.name')}
              </h1>
              <div className={styles.subtitle}>
                <span className={styles.subtitleBracket}>{'<'}</span>
                {t('hero.title')}
                <span className={styles.subtitleBracket}>{' />'}</span>
              </div>
            </div>

            <p className={styles.description}>
              {t('hero.description')}
            </p>

            {/* CTA Buttons */}
            <div className={styles.ctaGroup}>
              <button
                onClick={() => scrollToSection('projects')}
                className={styles.primaryButton}
              >
                {t('hero.cta.projects')}
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className={styles.secondaryButton}
              >
                {t('hero.cta.contact')}
              </button>
            </div>

            {/* Social Links */}
            <div className={styles.socialLinks}>
              <a
                href="https://github.com/Lucas0623z"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/yuexuan-zhang-075883381/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:Lucas.z0623@outlook.com"
                className={styles.socialLink}
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Code comment decoration */}
        <div className={styles.codeComment}>
          <Code2 size={12} className={styles.codeIcon} />
          Clean code is not written by following a set of rules. Clean code is written by discipline.
        </div>
      </div>
    </section>
  );
}