import { Link } from 'react-router-dom';
import { projects } from '../../data/projects';
import './Portfolio.css';

export default function Portfolio() {
  return (
    <section id="portfolio" className="portfolio section light-background">
      <div className="container section-title">
        <h2>Portfolio</h2>
        <p>Bajarilgan loyihalarim bilan tanishing. Har bir loyiha mijoz talablariga mos ravishda, sifat va estetikaga qat'iy rioya qilgan holda amalga oshirilgan.</p>
      </div>

      <div className="container">
        <div className="row portfolio-grid">
          {projects.map((item) => (
            <div key={item.id} className="col-lg-6 portfolio-item">
              <Link
                to={item.id === 2 ? '/visual-mebell' : item.id === 3 ? '/rahimov-shokir' : item.id === 4 ? '/tdm-dashboard' : `/portfolio-details?id=${item.id}`}
                className="portfolio-card-link"
              >
                <div className={`portfolio-card ${item.image ? 'portfolio-card--horizontal' : ''}`}>
                  {item.image && (
                    <div className="portfolio-card-img">
                      <img src={item.image} alt={item.title} />
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
                      <h3>{item.title}</h3>
                      <p>{item.desc}</p>
                    </div>
                    <div className="portfolio-card-footer">
                      Batafsil <i className="bi bi-arrow-right"></i>
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
