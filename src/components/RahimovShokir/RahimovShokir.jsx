import { projects } from '../../data/projects';
import './RahimovShokir.css';

export default function RahimovShokir() {
  const project = projects.find((p) => p.id === 3);

  return (
    <section className="rahimov-shokir-page">
      <div className="rs-page-title">
        <h2>{project.title}</h2>
        <p>Bajarilgan loyihalarim bilan tanishing.</p>
      </div>

      <div className="rs-card">
        <div className="rs-card-left">
          <img
            src="/assets/img/portfolio/rahimov-shokir-info.jpg"
            alt="Rahimov Shokir"
          />
        </div>
        <div className="rs-card-right">
          <span className="rs-number">0{project.id}</span>
          <h3 className="rs-title">{project.title}</h3>
          <p className="rs-desc">{project.desc}</p>

          <div className="rs-meta">
            <div className="rs-meta-item">
              <i className="bi bi-tags"></i>
              <div>
                <span className="rs-meta-label">Texnologiyalar</span>
                <span className="rs-meta-value">{project.tech}</span>
              </div>
            </div>
            <div className="rs-meta-item">
              <i className="bi bi-folder2"></i>
              <div>
                <span className="rs-meta-label">Turkum</span>
                <span className="rs-meta-value">Veb ilova</span>
              </div>
            </div>
          </div>

          <div className="rs-purpose">
            <h4>Loyiha haqida</h4>
            <p>{project.purpose}</p>
          </div>

          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="rs-visit"
          >
            Loyihaga o'tish <i className="bi bi-box-arrow-up-right"></i>
          </a>
        </div>
      </div>
    </section>
  );
}
