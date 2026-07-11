import { projects } from '../../data/projects';
import { useLanguage } from '../../i18n/LanguageContext';
import './VisualMebell.css';

export default function VisualMebell() {
  const { t, lang } = useLanguage();
  const project = projects.find((p) => p.id === 2);

  return (
    <section className="visual-mebell-page">
      <div className="vm-page-title">
        <h2>{project.title[lang]}</h2>
        <p>{t('projectPage.subtitle')}</p>
      </div>

      <div className="vm-card">
        <div className="vm-card-left">
          <img
            src="/assets/img/portfolio/visual-mebell-info.jpg"
            alt="Visual Mebell"
          />
        </div>
        <div className="vm-card-right">
          <span className="vm-number">0{project.id}</span>
          <h3 className="vm-title">{project.title[lang]}</h3>
          <p className="vm-desc">{project.desc[lang]}</p>

          <div className="vm-meta">
            <div className="vm-meta-item">
              <i className="bi bi-tags"></i>
              <div>
                <span className="vm-meta-label">{t('projectPage.techLabel')}</span>
                <span className="vm-meta-value">{project.tech}</span>
              </div>
            </div>
            <div className="vm-meta-item">
              <i className="bi bi-folder2"></i>
              <div>
                <span className="vm-meta-label">{t('projectPage.categoryLabel')}</span>
                <span className="vm-meta-value">{t('projectPage.categoryValue')}</span>
              </div>
            </div>
          </div>

          <div className="vm-purpose">
            <h4>{t('projectPage.aboutHeading')}</h4>
            <p>{project.purpose[lang]}</p>
          </div>

          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="vm-visit"
          >
            {t('projectPage.visitButton')} <i className="bi bi-box-arrow-up-right"></i>
          </a>
        </div>
      </div>
    </section>
  );
}
