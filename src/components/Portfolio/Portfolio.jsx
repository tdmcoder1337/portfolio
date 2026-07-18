import { Link } from 'react-router-dom';
import { projects } from '../../data/projects';
import { useLanguage } from '../../i18n/LanguageContext';
import './Portfolio.css';

export default function Portfolio() {
  const { t, lang } = useLanguage();

  return (
    <section id="portfolio" className="portfolio section light-background" data-aos="fade-up">
      <div className="container section-title">
        <h2>{t('portfolio.heading')}</h2>
        <p>{t('portfolio.intro')}</p>
      </div>

      <div className="container">
        <div className="row portfolio-grid">
          {projects.map((item, index) => (
            <div key={item.id} className="col-lg-6 portfolio-item" data-aos="fade-up" data-aos-delay={index * 100}>
              <Link
                to={item.id === 2 ? '/visual-mebell' : item.id === 3 ? '/rahimov-shokir' : item.id === 4 ? '/tdm-dashboard' : `/portfolio-details?id=${item.id}`}
                className="portfolio-card-link"
              >
                <div className={`portfolio-card ${item.image ? 'portfolio-card--horizontal' : ''}`}>
                  {item.image && (
                    <div className="portfolio-card-img">
                      <img src={item.image} alt={item.title[lang]} />
                    </div>
                  )}
                  <div className="portfolio-card-content">
                    <div className="portfolio-card-top">
                      <span className="portfolio-card-number">0{item.id}</span>
                      <div className="portfolio-card-icon">
                        <i className="bi bi-folder2-open"></i>
                      </div>
                    </div>
                    <div className="portfolio-card-body">
                      <h3>{item.title[lang]}</h3>
                      <p>{item.desc[lang]}</p>
                    </div>
                    <div className="portfolio-card-footer">
                      {t('portfolio.readMore')} <i className="bi bi-arrow-right"></i>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
