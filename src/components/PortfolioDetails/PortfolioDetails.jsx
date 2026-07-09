import { useSearchParams, Link } from 'react-router-dom';
import { projects } from '../../data/projects';
import './PortfolioDetails.css';

export default function PortfolioDetails() {
  const [searchParams] = useSearchParams();
  const id = parseInt(searchParams.get('id'), 10);
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="page-content">
        <div className="page-title dark-background">
          <div className="container">
            <h1>Loyiha topilmadi</h1>
          </div>
        </div>
        <section className="section">
          <div className="container text-center">
            <p>Bunday loyiha mavjud emas.</p>
            <Link to="/" className="btn-back">Bosh sahifaga qaytish</Link>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="page-content">
      <div className="page-title dark-background">
        <div className="container">
          <h1>{project.title}</h1>
          <nav className="breadcrumbs">
            <ol>
              <li><Link to="/">Bosh sahifa</Link></li>
              <li><button type="button" onClick={() => window.history.back()} className="breadcrumb-back">{project.title}</button></li>
            </ol>
          </nav>
        </div>
      </div>

      <section className="portfolio-details section">
        <div className="container">
          <div className="portfolio-detail-card">
            {project.image && (
              <div className="portfolio-detail-image">
                <img src={project.image} alt={project.title} />
              </div>
            )}
            <div className="portfolio-detail-info">
            <div className="portfolio-detail-header">
              <span className="portfolio-detail-number">0{project.id}</span>
            </div>
            <h2 className="portfolio-detail-title">{project.title}</h2>
            <p className="portfolio-detail-purpose">{project.purpose}</p>

            <div className="portfolio-detail-meta">
              <div className="meta-item">
                <strong>Texnologiyalar</strong>
                <span>{project.tech}</span>
              </div>
              <div className="meta-item">
                <strong>Turkum</strong>
                <span>Veb ilova</span>
              </div>
            </div>

            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-visit"
            >
              Loyihaga o&apos;tish
              <i className="bi bi-box-arrow-up-right"></i>
            </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
