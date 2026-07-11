import { useLanguage } from '../../i18n/LanguageContext';
import './MenHaqimda.css';

export default function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="about section">
      <div className="container section-title">
        <h2>{t('about.heading')}</h2>
        <p>{t('about.intro')}</p>
      </div>

      <div className="container">
        <div className="row about-row">
          <div className="col-lg-4">
            <img src="/assets/img/my-profile.jpg" alt={t('about.imgAlt')} className="about-img" />
          </div>
          <div className="col-lg-8 about-content">
            <h2>{t('about.subheading')}</h2>
            <p className="about-subtitle">{t('about.subtitle')}</p>
            <div className="row">
              <div className="col-lg-6">
                <ul>
                  <li><i className="bi bi-chevron-right"></i> <strong>{t('about.birthdayLabel')}</strong> <span>{t('about.birthdayValue')}</span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>{t('about.websiteLabel')}</strong> <span><a href="https://shokirovich.uz" target="_blank" rel="noopener noreferrer">shokirovich.uz</a></span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>{t('about.phoneLabel')}</strong> <span>+999 99 315 43 22</span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>{t('about.cityLabel')}</strong> <span>{t('about.cityValue')}</span></li>
                </ul>
              </div>
              <div className="col-lg-6">
                <ul>
                  <li><i className="bi bi-chevron-right"></i> <strong>{t('about.ageLabel')}</strong> <span>{t('about.ageValue')}</span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>{t('about.levelLabel')}</strong> <span>{t('about.levelValue')}</span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>{t('about.emailLabel')}</strong> <span>muhammadsodiq4322@gmail.com</span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>{t('about.freelanceLabel')}</strong> <span>TRINOVA</span></li>
                </ul>
              </div>
            </div>
            <p>{t('about.closing')}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
