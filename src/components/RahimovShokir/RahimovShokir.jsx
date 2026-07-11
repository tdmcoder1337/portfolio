import { projects } from '../../data/projects';
import { useLanguage } from '../../i18n/LanguageContext';
import './RahimovShokir.css';

export default function RahimovShokir() {
  const { t, lang } = useLanguage();
  const project = projects.find((p) => p.id === 3);

  return (
    <section className="rahimov-shokir-page">
      <div className="rs-page-title">
        <h2>{project.title[lang]}</h2>
        <p>{t('projectPage.subtitle')}</p>
      </div>

      <div className="rs-card">
        <div className="rs-card-left">
          <img
            src="/assets/img/portfolio/rahimov-shokir-info.jpg"
            alt="Rahimov Shokir"
          />
        </div>
        <div className="rs-card-right">
          <span className="rs-number">0{project.id}</span>
          <h3 className="rs-title">{project.title[lang]}</h3>
          <p className="rs-desc">{project.desc[lang]}</p>

          <div className="rs-meta">
            <div className="rs-meta-item">
              <i className="bi bi-tags"></i>
              <div>
                <span className="rs-meta-label">{t('projectPage.techLabel')}</span>
                <span className="rs-meta-value">{project.tech}</span>
              </div>
            </div>
            <div className="rs-meta-item">
              <i className="bi bi-folder2"></i>
              <div>
                <span className="rs-meta-label">{t('projectPage.categoryLabel')}</span>
                <span className="rs-meta-value">{t('projectPage.categoryValue')}</span>
              </div>
            </div>
          </div>

          <div className="rs-purpose">
            <h4>{t('projectPage.aboutHeading')}</h4>
            <p>{project.purpose[lang]}</p>
          </div>

          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="rs-visit"
          >
            {t('projectPage.visitButton')} <i className="bi bi-box-arrow-up-right"></i>
          </a>
        </div>
      </div>
    </section>
  );
}
