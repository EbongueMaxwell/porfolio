import { profile } from '../data.js';
import DataJourney from './DataJourney.jsx';

export default function About() {
  return <section className="section about-section" id="about">
    <div className="container">
      <div className="section-heading" data-reveal><div><p className="kicker">A LITTLE ABOUT ME</p><h2>Technology is useful<br /><em>when it moves people forward.</em></h2></div><span className="section-number">01 — ABOUT</span></div>
      <div className="about-layout">
        <div className="about-main"><p className="about-lead">{profile.summary}</p><p>My work sits at the intersection of data, IT, and the systems people rely on every day. I’m especially interested in open data initiatives, data visualization, and sharing practical data skills through mentoring.</p><a className="text-link" href="#experience">See my experience <span>↗</span></a></div>
      </div>
      <DataJourney />
      <div className="about-facts"><div><strong>2025</strong><span>BTech graduate</span></div><div><strong>Google</strong><span>Data Analytics certified</span></div><div><strong>Yaoundé</strong><span>Cameroon</span></div><div><strong>EN / FR</strong><span>English fluent · French</span></div></div>
    </div>
  </section>;
}
