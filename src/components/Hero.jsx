import { profile } from '../data.js';

export default function Hero() {
  return <section className="hero" id="home">
    <div className="hero-grid container">
      <div className="hero-copy">
        <div className="eyebrow">DATA & IT PROFESSIONAL <span className="eyebrow-rule"></span> CAMEROON</div>
        <h1>Turning data<br />into <em>direction.</em></h1>
        <p className="hero-title">{profile.title} <span>·</span> Cloud Computing</p>
        <p className="hero-intro">I make information useful. From reliable data pipelines and clear dashboards to thoughtful digital products, I help teams see what matters and move forward with confidence.</p>
        <div className="hero-actions">
          <a className="button button-primary" href="#projects">Explore my work <span>↗</span></a>
          <a className="button button-secondary" href="/Ebongue-CV.pdf" download>Download CV <span>↓</span></a>
        </div>
        <div className="hero-meta"><span><i className="pin-dot"></i>{profile.location}</span><span className="meta-divider"></span><a href={`mailto:${profile.email}`}>{profile.email}</a></div>
      </div>
      <div className="hero-visual" aria-label="Portrait and analytics illustration">
        <div className="visual-orbit orbit-one"></div><div className="visual-orbit orbit-two"></div>
        <div className="portrait-frame"><img src="/assets/image/IMG_1904.JPG" alt="Portrait of Maxwell Ebongue" /></div>
        <div className="visual-label label-top"><span className="label-icon">⌁</span><span>DATA<br /><b>WITH PURPOSE</b></span></div>
        <div className="visual-label label-bottom"><span className="spark-bars"><i></i><i></i><i></i><i></i><i></i></span><span>INSIGHT<br /><b>IN MOTION</b></span></div>
        <span className="hero-index">01 / 08</span>
      </div>
    </div>
    <div className="hero-bottom container"><span>DATA ANALYTICS</span><i></i><span>CLOUD</span><i></i><span>SOFTWARE</span><i></i><span>ARTIFICIAL INTELLIGENCE</span><a href="#about">SCROLL TO EXPLORE <b>↓</b></a></div>
  </section>;
}
