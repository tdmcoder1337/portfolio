import { useState, useEffect } from 'react';
import { useLanguage } from '../../i18n/LanguageContext';
import './ScrollToTop.css';

export default function ScrollToTop() {
  const { t } = useLanguage();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggle = () => setVisible(window.scrollY > 100);
    window.addEventListener('scroll', toggle);
    return () => window.removeEventListener('scroll', toggle);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      className={`scroll-top-btn ${visible ? 'active' : ''}`}
      onClick={scrollToTop}
      aria-label={t('scrollTop.aria')}
    >
      <i className="bi bi-arrow-up-short"></i>
    </button>
  );
}
