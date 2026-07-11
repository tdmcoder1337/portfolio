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
      <div className="container section-title">
        <h2>{t('contact.heading')}</h2>
        <p>{t('contact.intro')}</p>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-lg-5">
            <div className="info-wrap">
              <div className="info-item">
                <i className="bi bi-geo-alt"></i>
                <div>
                  <h3>{t('contact.addressLabel')}</h3>
                  <p>{t('contact.addressValue')}</p>
                </div>
              </div>

              <div className="info-item">
                <i className="bi bi-telephone"></i>
                <div>
                  <h3>{t('contact.callLabel')}</h3>
                  <p>+998 99 315 43 22</p>
                </div>
              </div>

              <div className="info-item">
                <i className="bi bi-envelope"></i>
                <div>
                  <h3>{t('contact.emailLabel')}</h3>
                  <p>muhammadsodiq4322@gmail.com</p>
                </div>
              </div>

              <iframe
                title={t('contact.mapTitle')}
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2997.933465088797!2d69.68152169999999!3d41.2885525!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38afab003136579b%3A0x7b0dac3de069196e!2sUy!5e0!3m2!1sru!2s!4v1783589017771!5m2!1sru!2s"
                className="contact-map"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          <div className="col-lg-7">
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="row">
                <div className="col-md-6">
                  <label htmlFor="name">{t('contact.formName')}</label>
                  <input type="text" name="name" id="name" value={formData.name} onChange={handleChange} required placeholder={t('contact.formNamePlaceholder')} />
                </div>
                <div className="col-md-6">
                  <label htmlFor="email">{t('contact.formEmail')}</label>
                  <input type="email" name="email" id="email" value={formData.email} onChange={handleChange} required placeholder={t('contact.formEmailPlaceholder')} />
                </div>
                <div className="col-md-12">
                  <label htmlFor="subject">{t('contact.formSubject')}</label>
                  <input type="text" name="subject" id="subject" value={formData.subject} onChange={handleChange} required placeholder={t('contact.formSubjectPlaceholder')} />
                </div>
                <div className="col-md-12">
                  <label htmlFor="message">{t('contact.formMessage')}</label>
                  <textarea name="message" id="message" rows="10" value={formData.message} onChange={handleChange} required placeholder={t('contact.formMessagePlaceholder')}></textarea>
                </div>
                <div className="col-md-12 text-center">
                  {loading && <div className="form-loading">{t('contact.sending')}</div>}
                  {status.type === 'error' && <div className="form-error">{status.text}</div>}
                  {status.type === 'success' && <div className="form-success">{status.text} ({countdown})</div>}
                  <button type="submit" disabled={loading}>{t('contact.submit')}</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
