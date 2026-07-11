import { useLanguage } from '../../i18n/LanguageContext';
import './Footer.css';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="footer">
      <div className="container">
        <div className="copyright">
          <p>&copy; {t('footer.copyright')}</p>
        </div>
        <div className="credits">

        </div>
      </div>
    </footer>
  );
}
