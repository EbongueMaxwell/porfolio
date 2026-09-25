import { profile } from '../data.js';

export default function Footer() {
  return <footer className="site-footer"><div className="container footer-content">
    <div className="footer-identity"><a className="brand footer-brand" href="#home"><span className="brand-mark">M</span><span>EBONGUE NSAME ELIE MAXWELL</span></a><p>Data &amp; IT Professional</p></div>
    <nav className="footer-links" aria-label="Footer links"><a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn <span>↗</span></a><a href={`mailto:${profile.email}`}>Email <span>↗</span></a><a href="/Ebongue%20CV.pdf" download="Ebongue CV.pdf">Download CV <span>↓</span></a></nav>
    <div className="footer-bottom"><span>© 2026 Ebongue Nsame Elie Maxwell. All rights reserved.</span><a className="back-top" href="#home">BACK TO TOP ↑</a></div>
  </div></footer>;
}
