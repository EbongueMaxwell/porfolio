import { projects } from '../data.js';

export default function Projects() {
  return <section className="section projects-section" id="projects"><div className="container">
    <div className="section-heading" data-reveal><div><p className="kicker">SELECTED WORK</p><h2>Work that makes<br /><em>an impact.</em></h2></div><span className="section-number">05 — PROJECTS</span></div>
    <div className="projects-grid">{projects.map(project => {
      const isPadesce = project.title === 'PADESCE';
      const isFireDetection = project.title === 'Fire Detection System';
      const handleProjectClick = () => {
        if (project.link) {
          window.open(project.link, '_blank', 'noopener,noreferrer');
        }
      };
      const handleKeyDown = (event) => {
        if (project.link && (event.key === 'Enter' || event.key === ' ')) {
          event.preventDefault();
          handleProjectClick();
        }
      };

      return <article
        className={`project-card ${isPadesce ? 'project-card-padesce' : ''} ${isFireDetection ? 'project-card-fire' : ''}`}
        data-reveal
        key={project.number}
        onClick={project.link ? handleProjectClick : undefined}
        onKeyDown={project.link ? handleKeyDown : undefined}
        tabIndex={project.link ? 0 : undefined}
        role={project.link ? 'link' : undefined}
        aria-label={project.link ? `Open ${project.title} project` : undefined}
      >
        <div className={project.image ? 'project-art' : 'project-art project-art-abstract'}>
          {isPadesce ? (
            <div className="padesce-preview" aria-label="PADESCE dashboard preview">
              <div className="padesce-topbar">
                <span className="traffic-dot traffic-dot-green" />
                <span className="traffic-dot traffic-dot-amber" />
                <span className="traffic-dot traffic-dot-red" />
                <span className="padesce-brand">PADESCE</span>
              </div>
              <div className="padesce-kpis">
                <div className="mini-stat">
                  <span>Beneficiaries</span>
                  <strong>1.8K</strong>
                  <small>+18%</small>
                </div>
                <div className="mini-stat">
                  <span>Completion</span>
                  <strong>76%</strong>
                  <small>+9%</small>
                </div>
                <div className="mini-stat">
                  <span>Reports</span>
                  <strong>42</strong>
                  <small>+6</small>
                </div>
              </div>
              <div className="padesce-chart">
                <div className="chart-columns" aria-hidden="true">
                  <span style={{ height: '28%' }} />
                  <span style={{ height: '45%' }} />
                  <span style={{ height: '34%' }} />
                  <span style={{ height: '63%' }} />
                  <span style={{ height: '77%' }} />
                  <span style={{ height: '58%' }} />
                  <span style={{ height: '84%' }} />
                </div>
              </div>
              <div className="padesce-table">
                <div className="table-head"><span>Region</span><span>Progress</span><span>KPI</span></div>
                <div className="table-row"><span>North</span><span>82%</span><span>1.1k</span></div>
                <div className="table-row"><span>Center</span><span>74%</span><span>940</span></div>
                <div className="table-row"><span>South</span><span>68%</span><span>820</span></div>
              </div>
            </div>
          ) : project.video ? (
            <div className="project-media-stack" aria-label="Fire detection project media preview">
              <span className="project-art-badge">EARLY FIRE DETECTION SYSTEM</span>
              <img src={project.image} alt="Fire detection system screenshot" loading="lazy" />
              <video src={project.video} autoPlay muted loop playsInline aria-label="Fire detection demo reel" />
            </div>
          ) : project.image ? <img src={project.image} alt="" loading="lazy" /> : <div className="abstract-graphic" aria-hidden="true"><span></span><span></span><span></span><span></span><i></i><b></b></div>}
          <span className="project-no">{project.number}</span>
          <span className="art-caption">{project.type}</span>
        </div>
        <div className="project-content"><p className="kicker">{project.type}</p><h3>{project.title}</h3><p className="project-description">{project.description}</p><p className="project-contribution"><strong>Contribution</strong>{project.contribution}</p><div className="project-tags">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div></div>
      </article>;
    })}</div>
  </div></section>;
}
