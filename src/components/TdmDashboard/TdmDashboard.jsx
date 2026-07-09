import { projects } from '../../data/projects';
import './TdmDashboard.css';

export default function TdmDashboard() {
  const project = projects.find((p) => p.id === 4);

  return (
    <section className="tdm-dashboard-page">
      <div className="tdm-page-title">
        <h2>{project.title}</h2>
        <p>Bajarilgan loyihalarim bilan tanishing.</p>
      </div>

      <div className="tdm-card">
        <div className="tdm-card-left">
          <img
            src="/assets/img/portfolio/tdm-dashboard-info.jpg"
            alt="TDM Coder Dashboard"
          />
        </div>
        <div className="tdm-card-right">
          <span className="tdm-number">0{project.id}</span>
          <h3 className="tdm-title">{project.title}</h3>
          <p className="tdm-desc">{project.desc}</p>

          <div className="tdm-meta">
            <div className="tdm-meta-item">
              <i className="bi bi-tags"></i>
              <div>
                <span className="tdm-meta-label">Texnologiyalar</span>
                <span className="tdm-meta-value">{project.tech}</span>
              </div>
            </div>
            <div className="tdm-meta-item">
              <i className="bi bi-folder2"></i>
              <div>
                <span className="tdm-meta-label">Turkum</span>
                <span className="tdm-meta-value">Veb ilova</span>
              </div>
            </div>
          </div>

          <div className="tdm-purpose">
            <h4>Loyiha haqida</h4>
            <p>{project.purpose}</p>
          </div>

          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="tdm-visit"
          >
            Loyihaga o'tish <i className="bi bi-box-arrow-up-right"></i>
          </a>
        </div>
      </div>
    </section>
  );
}
