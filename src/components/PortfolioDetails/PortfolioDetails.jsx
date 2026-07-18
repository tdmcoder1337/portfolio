import { useSearchParams, Link } from 'react-router-dom';
import { projects } from '../../data/projects';
import { useLanguage } from '../../i18n/LanguageContext';
import './PortfolioDetails.css';

export default function PortfolioDetails() {
  const [searchParams] = useSearchParams();
  const { t, lang } = useLanguage();
  const id = parseInt(searchParams.get('id'), 10);
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="page-content">
        <div className="page-title dark-background">
          <div className="container">
            <h1>{t('portfolioDetails.notFoundTitle')}</h1>
          </div>
        </div>
        <section className="section">
          <div className="container text-center">
            <p>{t('portfolioDetails.notFoundText')}</p>
            <Link to="/" className="btn-back">{t('portfolioDetails.backHome')}</Link>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="page-content">
      <div className="page-title dark-background">
        <div className="container">
          <h1>{project.title[lang]}</h1>
          <nav className="breadcrumbs">
            <ol>
              <li><button type="button" onClick={() => window.history.back()} className="breadcrumb-back"><i className="bi bi-arrow-left"></i> {lang === 'uz' ? 'Orqaga' : 'Back'}</button></li>
              <li><button type="button" onClick={() => window.history.back()} className="breadcrumb-back">{project.title[lang]}</button></li>
            </ol>
          </nav>
        </div>
      </div>

      <section className="portfolio-details section">
        <div className="container">
          <div className="portfolio-detail-card">
            {project.image && (
              <div className="portfolio-detail-image">
                <img src={project.image} alt={project.title[lang]} />
              </div>
            )}
            <div className="portfolio-detail-info">
            <div className="portfolio-detail-header">
              <span className="portfolio-detail-number">0{project.id}</span>
            </div>
            <h2 className="portfolio-detail-title">{project.title[lang]}</h2>
            <p className="portfolio-detail-purpose">{project.purpose[lang]}</p>

            <div className="portfolio-detail-meta">
              <div className="meta-item">
                <strong>{t('portfolioDetails.techLabel')}</strong>
                <span>{project.tech}</span>
              </div>
              <div className="meta-item">
                <strong>{t('portfolioDetails.categoryLabel')}</strong>
                <span>{project.category.toLowerCase() === 'webapp' ? (lang === 'uz' ? 'Web App' : 'Web App') : (lang === 'uz' ? 'Veb sayt' : 'Website')}</span>
              </div>
            </div>

            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-visit"
            >
              {t('portfolioDetails.visitButton')}
              <i className="bi bi-box-arrow-up-right"></i>
            </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
