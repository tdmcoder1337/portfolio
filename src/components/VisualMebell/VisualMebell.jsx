import { projects } from '../../data/projects';
import './VisualMebell.css';

export default function VisualMebell() {
  const project = projects.find((p) => p.id === 2);

  return (
    <section className="visual-mebell-page">
      <div className="vm-page-title">
        <h2>{project.title}</h2>
        <p>Bajarilgan loyihalarim bilan tanishing.</p>
      </div>

      <div className="vm-card">
        <div className="vm-card-left">
          <img
            src="/assets/img/portfolio/visual-mebell-info.jpg"
            alt="Visual Mebell"
          />
        </div>
        <div className="vm-card-right">
          <span className="vm-number">0{project.id}</span>
          <h3 className="vm-title">{project.title}</h3>
          <p className="vm-desc">{project.desc}</p>

          <div className="vm-meta">
            <div className="vm-meta-item">
              <i className="bi bi-tags"></i>
              <div>
                <span className="vm-meta-label">Texnologiyalar</span>
                <span className="vm-meta-value">{project.tech}</span>
              </div>
            </div>
            <div className="vm-meta-item">
              <i className="bi bi-folder2"></i>
              <div>
                <span className="vm-meta-label">Turkum</span>
                <span className="vm-meta-value">Veb ilova</span>
              </div>
            </div>
          </div>

          <div className="vm-purpose">
            <h4>Loyiha haqida</h4>
            <p>{project.purpose}</p>
          </div>

          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="vm-visit"
          >
            Loyihaga o'tish <i className="bi bi-box-arrow-up-right"></i>
          </a>
        </div>
      </div>
    </section>
  );
}
