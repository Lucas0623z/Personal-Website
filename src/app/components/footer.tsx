import { useLanguage } from './language-provider';
import styles from './footer.module.css';

export function Footer() {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.topContent}>
          <div className={styles.copyright}>
            <span>{t('footer.copyright')}</span>
          </div>

          <div className={styles.rights}>
            © {currentYear} {t('hero.name')}. All rights reserved.
          </div>
        </div>

        <div className={styles.bottomContent}>
          <span className={styles.comment}>{'// '}</span>
          Designed & Developed with clean code principles
        </div>
      </div>
    </footer>
  );
}
