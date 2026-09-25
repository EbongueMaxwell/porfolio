import { useState } from 'react';
import { profile } from '../data.js';

export default function Contact() {
  const [notice, setNotice] = useState('Your message will open in your email app. This site does not store or send form submissions.');

  function openEmail(event) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const subject = encodeURIComponent(`Portfolio contact from ${data.get('name')}`);
    const body = encodeURIComponent(`Name: ${data.get('name')}\nEmail: ${data.get('email')}\n\n${data.get('message')}`);
    setNotice('Opening your email app with your message. If it does not open, email me directly using the address on this page.');
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
  }

  return <section className="contact-section" id="contact"><div className="container contact-inner">
    <div className="contact-intro-block" data-reveal><p className="kicker">LET’S MAKE SOMETHING USEFUL</p><h2>Have a challenge<br />worth <em>solving?</em></h2><p className="contact-intro">I’m interested in opportunities across data analytics, banking, IT, cloud computing, and software development.</p>
      <div className="contact-links"><a href={`mailto:${profile.email}`}>Email <span>↗</span></a><a href={`tel:${profile.phone.replaceAll(' ', '')}`}>Phone <span>↗</span></a><a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn <span>↗</span></a></div>
      <p className="contact-location">{profile.location}</p>
    </div>
    <div className="contact-panel" data-reveal><span className="contact-label">SEND A MESSAGE</span><form className="contact-form" onSubmit={openEmail}>
      <label>Name<input name="name" type="text" autoComplete="name" placeholder="Your name" required /></label>
      <label>Email<input name="email" type="email" autoComplete="email" placeholder="you@example.com" required /></label>
      <label>Message<textarea name="message" rows="4" placeholder="How can I help?" required /></label>
      <button className="button button-light" type="submit">Send Message <span>↗</span></button>
      <p className="form-note" aria-live="polite">{notice}</p>
    </form></div>
  </div></section>;
}
