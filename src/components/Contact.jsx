import { profile } from '../data.js';

export default function Contact() {
  return <section className="contact-section" id="contact"><div className="container contact-inner">
    <div><p className="kicker">LET’S MAKE SOMETHING USEFUL</p><h2>Have a challenge<br />worth <em>solving?</em></h2><p className="contact-intro">I’m interested in opportunities across data analytics, banking, IT, cloud computing, and software development.</p></div>
    <div className="contact-panel"><span className="contact-label">START A CONVERSATION</span><a className="contact-email" href={`mailto:${profile.email}`}>{profile.email}<span>↗</span></a><div className="contact-details"><a href={`tel:${profile.phone.replaceAll(' ', '')}`}>{profile.phone}</a><span>{profile.location}</span></div><a className="linkedin-link" href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn profile <span>↗</span></a><a className="button button-light" href="/Ebongue-CV.pdf" download>Download my CV <span>↓</span></a></div>
  </div></section>;
}
