import { profile } from '../data.js';

const highlights = [
  ['01', 'Data Analytics', 'Clean, reliable data shaped into useful KPIs, reports, and dashboards.'],
  ['02', 'Cloud Computing', 'A cloud computing background applied to practical digital solutions.'],
  ['03', 'Software & AI', 'Development experience across web applications, databases, and AI-oriented tools.'],
];

export default function About() {
  return <section className="section about-section" id="about">
    <div className="container">
      <div className="section-heading"><div><p className="kicker">A LITTLE ABOUT ME</p><h2>Technology is useful<br /><em>when it moves people forward.</em></h2></div><span className="section-number">01 — ABOUT</span></div>
      <div className="about-layout">
        <div className="about-main"><p className="about-lead">{profile.summary}</p><p>My work sits at the intersection of data, IT, and the systems people rely on every day. I’m especially interested in open data initiatives, data visualization, and sharing practical data skills through mentoring.</p><a className="text-link" href="#experience">See my experience <span>↗</span></a></div>
        <div className="about-cards">{highlights.map(([num, title, desc]) => <article className="about-card" key={num}><span className="card-num">{num}</span><div><h3>{title}</h3><p>{desc}</p></div><span className="card-arrow">↗</span></article>)}</div>
      </div>
      <div className="about-facts"><div><strong>2025</strong><span>BTech graduate</span></div><div><strong>Google</strong><span>Data Analytics certified</span></div><div><strong>Yaoundé</strong><span>Cameroon</span></div><div><strong>EN / FR</strong><span>English fluent · French</span></div></div>
    </div>
  </section>;
}
