import { certifications } from '../data.js';

export default function Certifications() {
  return <section className="section certifications-section" id="certifications"><div className="container">
    <div className="section-heading"><div><p className="kicker">LEARNING, APPLIED</p><h2>Credentials &<br /><em>certifications.</em></h2></div><span className="section-number">05 — CREDENTIALS</span></div>
    <div className="cert-grid">{certifications.map((cert, index) => <article className="cert-card" key={cert.title}>
      <span className="cert-index">{String(index + 1).padStart(2, '0')}</span>
      <div className="cert-mark">{cert.image ? <img src={cert.image} alt="" loading="lazy" /> : <span>✳</span>}</div>
      <div className="cert-copy"><h3>{cert.title}</h3><p>{cert.issuer}</p></div><span className="cert-arrow">↗</span>
    </article>)}</div>
  </div></section>;
}
