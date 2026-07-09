import { useEffect, useRef } from 'react';
import './Hero.css';

const words = ['Web', 'FrontEnd', 'va', 'BackEnd', 'Dasturchiman'];

export default function Hero() {
  const textRef = useRef(null);

  useEffect(() => {
    let currentIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let timeout;

    const type = () => {
      const currentWord = words[currentIndex];
      if (isDeleting) {
        textRef.current.textContent = currentWord.substring(0, charIndex - 1);
        charIndex--;
      } else {
        textRef.current.textContent = currentWord.substring(0, charIndex + 1);
        charIndex++;
      }
      if (!isDeleting && charIndex === currentWord.length) {
        timeout = setTimeout(() => { isDeleting = true; type(); }, 1000);
        return;
      }
      if (isDeleting && charIndex === 0) {
        isDeleting = false;
        currentIndex = (currentIndex + 1) % words.length;
        timeout = setTimeout(type, 500);
        return;
      }
      timeout = setTimeout(type, isDeleting ? 50 : 100);
    };
    type();
    return () => clearTimeout(timeout);
  }, []);

  return (
    <section id="hero" className="hero">
      <div className="hero-bg">
        
      </div>
      <div className="hero-overlay"></div>

      <div className="hero-container">
        <div className="hero-left">
          <span className="hero-greeting">SALOM, MEN</span>
          <h1 className="hero-title">
            Sodiqov<br />
            <span className="hero-name-line">
              Muhammadsodiq
              <svg className="hero-underline" viewBox="0 0 200 20" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 12 Q 90 4, 160 8 Q 182 10, 194 1" />
              </svg>
            </span>
          </h1>

          <p className="hero-subtitle">
            <span className="hero-quote"></span>
            Men <span className="hero-typed-wrap">
              <span ref={textRef} className="hero-typed-text">Dasturchi</span>
              <span className="typed-cursor">|</span>
            </span>
            <span className="hero-quote"></span>
          </p>

          <p className="hero-quote-section">
            <span className="hero-big-quote hero-quote-open">&ldquo;</span>
            <span className='motiv'>Gapirishga kelganda <br /> hamma senior.  Amalda-chi ?</span>
            <span className="hero-big-quote hero-quote-close">&rdquo;</span>
          </p>

          <div className="hero-buttons">
             <a href="#portfolio" className="btn-primary">Loyihalarim</a>
            <a href="#contact" className="btn-secondary">Aloqaga chiqish</a>
           
          </div>
        </div>

        <div className="hero-right">
          <div className="hero-person">
            <img src="/assets/img/my-profile.jpg" alt="Sodiqov Muhammadsodiq" />
          </div>
        </div>
      </div>

      <div className="hero-stats">
        <div className="stat-card">
          <i className="bi bi-code-slash"></i>
          <div className="stat-number">20+</div>
          <div className="stat-label">Loyihalar</div>
        </div>
        <div className="stat-card">
          <i className="bi bi-emoji-smile"></i>
          <div className="stat-number">15+</div>
          <div className="stat-label">Mijozlar</div>
        </div>
        <div className="stat-card">
          <i className="bi bi-award"></i>
          <div className="stat-number">3+</div>
          <div className="stat-label">Yillik tajriba</div>
        </div>
        <div className="stat-card">
          <i className="bi bi-clock-history"></i>
          <div className="stat-number">3800+</div>
          <div className="stat-label">Ish soati</div>
        </div>
      </div>
    </section>
  );
}
