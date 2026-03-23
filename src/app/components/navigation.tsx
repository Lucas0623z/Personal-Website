import { useState } from 'react';
import { Moon, Sun, Menu, X } from 'lucide-react';
import { useTheme } from './theme-provider';
import { useLanguage } from './language-provider';
import styles from './navigation.module.css';

export function Navigation() {
  const { theme, toggleTheme } = useTheme();
  const { language, toggleLanguage, t } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <nav className={styles.nav}>
      <div className={styles.navContainer}>
        <div className={styles.navContent}>
          <div className={styles.logo}>
            <span className={styles.keyword}>const</span>
            {' '}
            <span className={styles.name}>{t('nav.developer')}</span>
            {' '}
            <span className={styles.operator}>=</span>
            {' '}
            <span className={styles.string}>"{t('hero.name')}"</span>
          </div>

          {/* Desktop Navigation */}
          <div className={styles.desktopNav}>
            <button
              onClick={() => scrollToSection('hero')}
              className={styles.navLink}
            >
              {t('nav.home')}
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className={styles.navLink}
            >
              {t('nav.about')}
            </button>
            <button
              onClick={() => scrollToSection('projects')}
              className={styles.navLink}
            >
              {t('nav.projects')}
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className={styles.navLink}
            >
              {t('nav.contact')}
            </button>
            <button
              onClick={toggleLanguage}
              className={styles.languageButton}
              aria-label="Toggle language"
            >
              {language === 'en' ? '中文' : 'EN'}
            </button>
            <button
              onClick={toggleTheme}
              className={styles.iconButton}
              aria-label="Toggle theme"
            >
              {theme === 'light' ? (
                <Moon size={16} />
              ) : (
                <Sun size={16} />
              )}
            </button>
          </div>

          {/* Mobile Controls */}
          <div className={styles.mobileControls}>
            <button
              onClick={toggleLanguage}
              className={styles.languageButton}
              aria-label="Toggle language"
            >
              {language === 'en' ? '中文' : 'EN'}
            </button>
            <button
              onClick={toggleTheme}
              className={styles.iconButton}
              aria-label="Toggle theme"
            >
              {theme === 'light' ? (
                <Moon size={16} />
              ) : (
                <Sun size={16} />
              )}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={styles.iconButton}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X size={20} />
              ) : (
                <Menu size={20} />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className={styles.mobileMenu}>
            <div className={styles.mobileMenuLinks}>
              <button
                onClick={() => scrollToSection('hero')}
                className={styles.mobileNavLink}
              >
                {t('nav.home')}
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className={styles.mobileNavLink}
              >
                {t('nav.about')}
              </button>
              <button
                onClick={() => scrollToSection('projects')}
                className={styles.mobileNavLink}
              >
                {t('nav.projects')}
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className={styles.mobileNavLink}
              >
                {t('nav.contact')}
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
