import { ThemeProvider } from './components/theme-provider';
import { LanguageProvider } from './components/language-provider';
import { Navigation } from './components/navigation';
import { HeroSection } from './components/hero-section';
import { AboutSection } from './components/about-section';
import { ProjectsSection } from './components/projects-section';
import { ContactSection } from './components/contact-section';
import { Footer } from './components/footer';
import styles from './App.module.css';

export default function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <div className={styles.app}>
          <Navigation />
          <main>
            <HeroSection />
            <AboutSection />
            <ProjectsSection />
            <ContactSection />
          </main>
          <Footer />
        </div>
      </LanguageProvider>
    </ThemeProvider>
  );
}
