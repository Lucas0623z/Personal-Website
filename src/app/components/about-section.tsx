import { Layout, Database, Braces, Terminal } from 'lucide-react';
import { useLanguage } from './language-provider';
import styles from './about-section.module.css';

export function AboutSection() {
  const { t } = useLanguage();

  const skills = [
    {
      icon: Layout,
      title: t('about.skill.frontend.title'),
      description: t('about.skill.frontend.desc'),
    },
    {
      icon: Database,
      title: t('about.skill.backend.title'),
      description: t('about.skill.backend.desc'),
    },
    {
      icon: Braces,
      title: t('about.skill.tools.title'),
      description: t('about.skill.tools.desc'),
    },
    {
      icon: Terminal,
      title: t('about.skill.practices.title'),
      description: t('about.skill.practices.desc'),
    },
  ];

  return (
    <section id="about" className={styles.about}>
      <div className={styles.container}>
        {/* Window controls */}
        <div className={styles.windowControls}>
          <div className={`${styles.dot} ${styles.dotRed}`} />
          <div className={`${styles.dot} ${styles.dotYellow}`} />
          <div className={`${styles.dot} ${styles.dotGreen}`} />
        </div>

        <div className={styles.header}>
          <div className={styles.htmlTag}>
            {'<section id="about">'}
          </div>
          <h2 className={styles.title}>{t('about.title')}</h2>
          <div className={styles.divider} />
        </div>

        <div className={styles.content}>
          <div className={styles.intro}>
            <p>
              {t('about.intro')}
            </p>
            <p>
              {t('about.journey')}
            </p>
          </div>

          {/* Skills Grid */}
          <div className={styles.skillsSection}>
            <h3 className={styles.skillsTitle}>{t('about.skills')}</h3>
            <div className={styles.skillsGrid}>
              {skills.map((skill) => (
                <div
                  key={skill.title}
                  className={styles.skillCard}
                >
                  <skill.icon className={styles.skillIcon} />
                  <h3 className={styles.skillTitle}>{skill.title}</h3>
                  <p className={styles.skillDescription}>
                    {skill.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className={styles.closingTag}>
          {'</section>'}
        </div>
      </div>
    </section>
  );
}