import { ExternalLink, Github, Folder } from 'lucide-react';
import { useLanguage } from './language-provider';
import styles from './projects-section.module.css';

export function ProjectsSection() {
  const { t } = useLanguage();

  const projects = [
    {
      title: t('project1.title'),
      description: t('project1.desc'),
      tech: ['JavaScript', 'MCP', 'Multi-Agent', 'Weather API', 'Feishu Bot'],
      github: 'https://github.com/Lucas0623z/DailyAgentTest',
      demo: null,
    },
    {
      title: t('project2.title'),
      description: t('project2.desc'),
      tech: ['Java', 'CFR', 'Game Theory', 'Monte Carlo', 'Maven'],
      github: 'https://github.com/Lucas0623z/Poker-GTO-Solver',
      demo: null,
    },
    {
      title: t('project3.title'),
      description: t('project3.desc'),
      tech: ['React', 'Tailwind CSS', 'i18n', 'Dark Mode'],
      github: null,
      demo: null,
    },
    {
      title: t('project4.title'),
      description: t('project4.desc'),
      tech: ['Python', 'OMR', 'Computer Vision', 'Image Processing'],
      github: null,
      demo: null,
    },
  ];

  return (
    <section id="projects" className={styles.projects}>
      <div className={styles.container}>
        {/* Window controls */}
        <div className={styles.windowControls}>
          <div className={`${styles.dot} ${styles.dotRed}`} />
          <div className={`${styles.dot} ${styles.dotYellow}`} />
          <div className={`${styles.dot} ${styles.dotGreen}`} />
        </div>

        <div className={styles.header}>
          <div className={styles.htmlTag}>
            {'<section id="projects">'}
          </div>
          <h2 className={styles.title}>{t('projects.title')}</h2>
          <div className={styles.divider} />
          <p className={styles.subtitle}>{t('projects.subtitle')}</p>
        </div>

        <div className={styles.projectsGrid}>
          {projects.map((project, index) => (
            <div key={index} className={styles.projectCard}>
              <div className={styles.cardHeader}>
                <Folder className={styles.folderIcon} />
                <div className={styles.cardActions}>
                  {project.github ? (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.codeButton}
                    >
                      <Github size={16} />
                      {t('projects.viewCode')}
                    </a>
                  ) : (
                    <span className={`${styles.codeButton} ${styles.disabled}`}>
                      <Github size={16} />
                      {t('projects.comingSoon')}
                    </span>
                  )}
                  {project.demo ? (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.demoButton}
                    >
                      <ExternalLink size={16} />
                      {t('projects.liveDemo')}
                    </a>
                  ) : (
                    <span className={`${styles.demoButton} ${styles.disabled}`}>
                      <ExternalLink size={16} />
                      {t('projects.comingSoon')}
                    </span>
                  )}
                </div>
              </div>

              <h3 className={styles.projectTitle}>
                {project.title}
              </h3>

              <p className={styles.projectDescription}>
                {project.description}
              </p>

              <div className={styles.techTags}>
                {project.tech.map((tag, tagIndex) => (
                  <span key={tagIndex} className={styles.techTag}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className={styles.viewAllContainer}>
          <a
            href="https://github.com/Lucas0623z?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.viewAllLink}
          >
            <span>View all projects on GitHub</span>
            <ExternalLink size={16} />
          </a>
        </div>

        <div className={styles.closingTag}>
          {'</section>'}
        </div>
      </div>
    </section>
  );
}