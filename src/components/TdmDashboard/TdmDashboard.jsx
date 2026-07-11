import { projects } from '../../data/projects';
import { useLanguage } from '../../i18n/LanguageContext';
import './TdmDashboard.css';

export default function TdmDashboard() {
  const { t, lang } = useLanguage();
  const project = projects.find((p) => p.id === 4);

  return (
    <section className="tdm-dashboard-page">
      <div className="tdm-page-title">
        <h2>{project.title[lang]}</h2>
        <p>{t('projectPage.subtitle')}</p>
      </div>

      <div className="tdm-card">
        <div className="tdm-card-left">
          <img
            src="/assets/img/portfolio/tdm-dashboard-info.jpg"
            alt="TDM Coder Dashboard"
          />
        </div>
        <div className="tdm-card-right">
          <span className="tdm-number">0{project.id}</span>
          <h3 className="tdm-title">{project.title[lang]}</h3>
          <p className="tdm-desc">{project.desc[lang]}</p>

          <div className="tdm-meta">
            <div className="tdm-meta-item">
              <i className="bi bi-tags"></i>
              <div>
                <span className="tdm-meta-label">{t('projectPage.techLabel')}</span>
                <span className="tdm-meta-value">{project.tech}</span>
              </div>
            </div>
            <div className="tdm-meta-item">
              <i className="bi bi-folder2"></i>
              <div>
                <span className="tdm-meta-label">{t('projectPage.categoryLabel')}</span>
                <span className="tdm-meta-value">{t('projectPage.categoryValue')}</span>
              </div>
            </div>
          </div>

          <div className="tdm-purpose">
            <h4>{t('projectPage.aboutHeading')}</h4>
            <p>{project.purpose[lang]}</p>
          </div>

          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="tdm-visit"
          >
            {t('projectPage.visitButton')} <i className="bi bi-box-arrow-up-right"></i>
          </a>
        </div>
      </div>
    </section>
  );
}
