import { experiences } from '../data.js';

export default function Experience() {
  return <section className="section experience-section" id="experience"><div className="container">
    <div className="section-heading" data-reveal><div><p className="kicker">WHERE I’VE CONTRIBUTED</p><h2>Professional<br /><em>experience.</em></h2></div><span className="section-number">02 — EXPERIENCE</span></div>
    <div className="experience-list">{experiences.map((job, index) => <article className="experience-card" data-reveal key={job.role}>
      <div className="experience-date"><span className="timeline-dot"></span><span>{job.dates}</span><small>0{index + 1}</small></div>
      <div className="experience-body"><div className="experience-top"><div><h3>{job.role}</h3><p className="company-line">{job.company}<span> / </span>{job.location}</p></div><span className="pill">{job.tag}</span></div>
        <ul>{job.points.map(point => <li key={point}>{point}</li>)}</ul>
      </div>
    </article>)}</div>
    <p className="experience-note">Role titles, dates, and responsibilities are presented as listed in my CV.</p>
  </div></section>;
}
