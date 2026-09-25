import { education } from '../data.js';

export default function Education() {
  return <section className="section education-section" id="education"><div className="container education-layout">
    <div className="section-heading education-heading"><div><p className="kicker">FOUNDATIONS</p><h2>Education &<br /><em>training.</em></h2></div><span className="section-number">06 — EDUCATION</span></div>
    <div className="education-list">{education.map((item, index) => <article className="education-item" key={item.credential}><span className="education-year">{item.year}</span><div><h3>{item.credential}</h3><p>{item.field}</p><span>{item.school} <i>·</i> {item.location}</span></div><span className="education-index">0{index + 1}</span></article>)}</div>
  </div></section>;
}
