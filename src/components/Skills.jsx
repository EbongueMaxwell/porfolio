import { skillGroups } from '../data.js';

export default function Skills() {
  return <section className="section skills-section" id="skills"><div className="container">
    <div className="section-heading"><div><p className="kicker">WHAT I BRING</p><h2>A practical mix<br /><em>of skills.</em></h2></div><p className="heading-aside">Built around turning information into decisions and dependable digital tools.</p><span className="section-number">03 — CAPABILITIES</span></div>
    <div className="skills-grid">{skillGroups.map(group => <article className="skill-card" key={group.label}><div className="skill-card-head"><span className="skill-icon">{group.icon}</span><span className="card-arrow">↗</span></div><h3>{group.label}</h3><div className="skill-tags">{group.items.map(item => <span key={item}>{item}</span>)}</div></article>)}</div>
  </div></section>;
}
