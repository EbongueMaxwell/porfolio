import { projects } from '../data.js';

export default function Projects() {
  return <section className="section projects-section" id="projects"><div className="container">
    <div className="section-heading" data-reveal><div><p className="kicker">SELECTED WORK</p><h2>Work that makes<br /><em>an impact.</em></h2></div><span className="section-number">05 — PROJECTS</span></div>
    <div className="projects-grid">{projects.map(project => <article className="project-card" data-reveal key={project.number}>
      <div className={project.image ? "project-art" : "project-art project-art-abstract"}>{project.image ? <img src={project.image} alt="" loading="lazy" /> : <div className="abstract-graphic" aria-hidden="true"><span></span><span></span><span></span><span></span><i></i><b></b></div>}<span className="project-no">{project.number}</span><span className="art-caption">{project.type}</span></div>
      <div className="project-content"><p className="kicker">{project.type}</p><h3>{project.title}</h3><p className="project-description">{project.description}</p><p className="project-contribution"><strong>Contribution</strong>{project.contribution}</p><div className="project-tags">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div>
      </div>
    </article>)}</div>
  </div></section>;
}
