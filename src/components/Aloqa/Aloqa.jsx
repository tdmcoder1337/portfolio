import { useState, useEffect, useRef } from 'react';
import { useLanguage } from '../../i18n/LanguageContext';
import './Aloqa.css';

export default function Contact() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState({ type: '', text: '' });
  const [loading, setLoading] = useState(false);
  const [countdown, setCountdown] = useState(null);
  const timerRef = useRef(null);

  useEffect(() => {
    if (countdown === null) return;
    if (countdown <= 0) {
      setStatus({ type: '', text: '' });
      setCountdown(null);
      return;
    }
    timerRef.current = setTimeout(() => setCountdown(c => c - 1), 1000);
    return () => clearTimeout(timerRef.current);
  }, [countdown]);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: '', text: '' });

    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL || ''}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        setStatus({ type: 'success', text: t('contact.successMsg') });
        setFormData({ name: '', email: '', subject: '', message: '' });
        setCountdown(5);
      } else {
        setStatus({ type: 'error', text: data.error || t('contact.errorGeneric') });
      }
    } catch {
      setStatus({ type: 'error', text: t('contact.errorSend') });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="contact section">
      <div className="container">
        <div className="contact-grid">
          <div className="contact-intro">
            <span className="contact-badge">{t('contact.badge')}</span>
            <h2 className="contact-heading">
              {t('contact.headingLine1')} {t('contact.headingLine2')} <span className="contact-wave"></span>
            </h2>
            <p className="contact-lead">{t('contact.intro')}</p>

            <div className="contact-stats">
              <div className="contact-stat-card">
                <i className="bi bi-rocket-takeoff"></i>
                <strong>{t('contact.stat1Number')}</strong>
                <span>{t('contact.stat1Label')}</span>
              </div>
              <div className="contact-stat-card">
                <i className="bi bi-clock-history"></i>
                <strong>{t('contact.stat2Number')}</strong>
                <span>{t('contact.stat2Label')}</span>
              </div>
              <div className="contact-stat-card">
                <i className="bi bi-shield-check"></i>
                <strong>{t('contact.stat3Number')}</strong>
                <span>{t('contact.stat3Label')}</span>
              </div>
            </div>
          </div>

          <div className="contact-info-card">
            <h3>{t('contact.infoHeading')}</h3>
            <ul className="contact-info-list">
              <li>
                <span className="contact-info-icon"><i className="bi bi-geo-alt-fill"></i></span>
                <div>
                  <h4>{t('contact.addressLabel')}</h4>
                  <p>{t('contact.addressValue')}</p>
                </div>
              </li>
              <li>
                <span className="contact-info-icon"><i className="bi bi-telephone-fill"></i></span>
                <div>
                  <h4>{t('contact.callLabel')}</h4>
                  <p>+998 99 315 43 22</p>
                </div>
              </li>
              <li>
                <span className="contact-info-icon"><i className="bi bi-envelope-fill"></i></span>
                <div>
                  <h4>{t('contact.emailLabel')}</h4>
                  <p>muhammadsodiq4322@gmail.com</p>
                </div>
              </li>
              <li>
                <span className="contact-info-icon"><i className="bi bi-clock-fill"></i></span>
                <div>
                  <h4>{t('contact.hoursLabel')}</h4>
                  <p>{t('contact.hoursValueDays')}<br />{t('contact.hoursValueTime')}</p>
                </div>
              </li>
              <li>
                <span className="contact-info-icon"><i className="bi bi-briefcase-fill"></i></span>
                <div>
                  <h4>{t('contact.freelanceLabel')}</h4>
                  <p>{t('contact.freelanceValue')}</p>
                </div>
              </li>
            </ul>

            <div className="contact-socials">
              <a href="https://t.me/tdmcoder" target="_blank" rel="noopener noreferrer" className="contact-social-btn">
                <i className="bi bi-telegram"></i> {t('contact.socialTelegram')}
              </a>
              <a href="https://github.com/tdmcoder1337" target="_blank" rel="noopener noreferrer" className="contact-social-btn">
                <i className="bi bi-github"></i> {t('contact.socialGithub')}
              </a>
              <a href="#" className="contact-social-btn">
                <i className="bi bi-linkedin"></i> {t('contact.socialLinkedin')}
              </a>
            </div>
          </div>

          <div className="contact-right">
            <form onSubmit={handleSubmit} className="contact-form-card">
              <div className="contact-form-header">
                <h3>{t('contact.formHeading')}</h3>
                <i className="bi bi-send contact-form-icon"></i>
              </div>

              <div className="contact-form-row">
                <div className="contact-form-group">
                  <label htmlFor="name">{t('contact.formName')}</label>
                  <input type="text" name="name" id="name" value={formData.name} onChange={handleChange} required placeholder={t('contact.formNamePlaceholder')} />
                </div>
                <div className="contact-form-group">
                  <label htmlFor="email">{t('contact.formEmail')}</label>
                  <input type="email" name="email" id="email" value={formData.email} onChange={handleChange} required placeholder={t('contact.formEmailPlaceholder')} />
                </div>
              </div>

              <div className="contact-form-group">
                <label htmlFor="subject">{t('contact.formSubject')}</label>
                <input type="text" name="subject" id="subject" value={formData.subject} onChange={handleChange} required placeholder={t('contact.formSubjectPlaceholder')} />
              </div>

              <div className="contact-form-group">
                <label htmlFor="message">{t('contact.formMessage')}</label>
                <textarea name="message" id="message" rows="6" value={formData.message} onChange={handleChange} required placeholder={t('contact.formMessagePlaceholder')}></textarea>
              </div>

              {loading && <div className="form-loading">{t('contact.sending')}</div>}
              {status.type === 'error' && <div className="form-error">{status.text}</div>}
              {status.type === 'success' && <div className="form-success">{status.text} ({countdown})</div>}

              <button type="submit" className="contact-submit-btn" disabled={loading}>
                <i className="bi bi-send"></i> {t('contact.submit')}
              </button>

              <p className="contact-form-note"><i className="bi bi-shield-lock"></i> {t('contact.formNote')}</p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
