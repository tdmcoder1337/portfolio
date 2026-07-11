import { useLanguage } from '../../i18n/LanguageContext';
import './Rezyume.css';

export default function Resume() {
  const { t } = useLanguage();
  const summary = {
    title: t('resume.summaryName'),
    subtitle: t('resume.summarySubtitle'),
    details: t('resume.summaryDetails'),
  };
  const education = t('resume.education');
  const experience = t('resume.experience');

  return (
    <section id="resume" className="resume section">
      <div className="container section-title">
        <h2>{t('resume.heading')}</h2>
        <p>{t('resume.intro')}</p>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <h3 className="resume-title">{t('resume.summaryTitle')}</h3>
            <div className="resume-item">
              <h4>{summary.title}</h4>
              <p><em>{summary.subtitle}</em></p>
              <ul>
                {summary.details.map((d, i) => <li key={i}>{d}</li>)}
              </ul>
            </div>

            <h3 className="resume-title">{t('resume.educationTitle')}</h3>
            {education.map((item, i) => (
              <div key={i} className="resume-item">
                <h4>{item.title}</h4>
                <h5>{item.year}</h5>
                <p><em>{item.school}</em></p>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="col-lg-6">
            <h3 className="resume-title">{t('resume.experienceTitle')}</h3>
            {experience.map((item, i) => (
              <div key={i} className="resume-item">
                <h4>{item.title}</h4>
                <h5>{item.year}</h5>
                <p><em>{item.company}</em></p>
                <ul>
                  {item.points.map((point, j) => <li key={j}>{point}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
