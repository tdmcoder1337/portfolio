import { useLanguage } from '../../i18n/LanguageContext';
import './CodeCard.css';

export default function CodeCard() {
  const { t } = useLanguage();

  return (
    <section className="code-card-section">
      <div className="container">
        <div className="code-card">
          <div className="code-card-header">
            <div className="code-card-dots">
              <span className="dot dot-red"></span>
              <span className="dot dot-yellow"></span>
              <span className="dot dot-green"></span>
            </div>
            <div className="code-card-title">
              <span className="code-card-prompt">&gt;_</span> {t('codeCard.fileName')}
            </div>
            <div className="code-card-menu">
              <i className="bi bi-three-dots-vertical"></i>
            </div>
          </div>

          <div className="code-card-body">
            <pre>
              <code>
                <div className="code-line"><span className="line-number">1</span></div>
                <div className="code-line">
                  <span className="line-number">2</span>
                  <span className="tok-keyword">if</span><span className="tok-punct"> (</span><span className="tok-prop">{t('codeCard.condition')}</span><span className="tok-punct">) {'{'}</span>
                </div>
                <div className="code-line">
                  <span className="line-number">3</span>
                  &nbsp;&nbsp;<span className="tok-func">console</span><span className="tok-punct">.</span><span className="tok-func">log</span><span className="tok-punct">(</span><span className="tok-string">"🧡 {t('codeCard.message1')}"</span><span className="tok-punct">);</span>
                </div>
                <div className="code-line">
                  <span className="line-number">4</span>
                  <span className="tok-punct">{'}'}</span> <span className="tok-keyword">else</span> <span className="tok-punct">{'{'}</span>
                </div>
                <div className="code-line">
                  <span className="line-number">5</span>
                  &nbsp;&nbsp;<span className="tok-func">console</span><span className="tok-punct">.</span><span className="tok-func">log</span><span className="tok-punct">(</span><span className="tok-string">"✅ {t('codeCard.message2')}"</span><span className="tok-punct">);</span>
                </div>
                <div className="code-line">
                  <span className="line-number">6</span>
                  <span className="tok-punct">{'}'}</span>
                </div>
              </code>
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
}
