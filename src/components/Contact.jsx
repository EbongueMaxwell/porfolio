import { useState } from 'react';
import { profile } from '../data.js';

function ContactIcon({ label, href, children, external = false, title = label }) {
  return <a
    className="contact-link"
    href={href}
    target={external ? '_blank' : undefined}
    rel={external ? 'noreferrer' : undefined}
    aria-label={label}
    title={title}
  >
    {children}
  </a>;
}

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

  const contactLinks = [
    { label: 'Email', href: `mailto:${profile.email}`, external: false, icon: <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 7.5C3 6.12 4.12 5 5.5 5h13C19.88 5 21 6.12 21 7.5v9c0 1.38-1.12 2.5-2.5 2.5h-13A2.5 2.5 0 0 1 3 16.5v-9Zm2.2-.5 6.8 5.1 6.8-5.1H5.2Zm13.3 1.9-6.13 4.58a1 1 0 0 1-1.14 0L5.5 9.4v7.1c0 .28.22.5.5.5h12c.28 0 .5-.22.5-.5v-7.1Z" /></svg> },
    { label: 'WhatsApp', href: profile.whatsapp, external: true, icon: <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12.04 2a9.96 9.96 0 0 0-8.53 15.18L2 22l4.9-1.3A9.96 9.96 0 1 0 12.04 2Zm0 1.82a8.13 8.13 0 0 1 4.96 1.45c1.36 1.03 2.25 2.44 2.61 4.02a8.18 8.18 0 0 1-1.2 6.41A8.1 8.1 0 0 1 12 19.88a7.9 7.9 0 0 1-3.52-.8l-.25-.15-2.92.78.8-2.83-.17-.3A8.06 8.06 0 0 1 4.2 12 8.14 8.14 0 0 1 12.04 3.82Zm-2.47 4.17c-.18 0-.41.01-.63.02-.19.01-.41.04-.62.32-.18.24-.67.65-.67 1.58s.7 1.82.8 1.95c.1.13 1.34 2.14 3.28 2.93 1.62.64 1.96.52 2.31.49.35-.02 1.13-.46 1.29-.9.16-.45.16-.84.12-1.03-.03-.15-.18-.24-.39-.42l-.92-.46c-.23-.12-.43-.2-.62.12-.18.31-.69.89-.85 1.08-.16.18-.29.22-.54.08-.25-.15-1.05-.39-2-1.24-.74-.66-1.23-1.48-1.38-1.73-.15-.25-.02-.39.13-.5l.34-.27c.11-.09.25-.24.38-.38.12-.14.17-.24.25-.41.08-.17.04-.32-.02-.45-.06-.13-.53-1.29-.73-1.77-.19-.46-.39-.38-.53-.38Z" /></svg> },
    { label: 'LinkedIn', href: profile.linkedin, external: true, icon: <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6.94 8.5A1.56 1.56 0 1 1 6.94 5.4a1.56 1.56 0 0 1 0 3.1ZM5.5 9.72h2.88v8.78H5.5V9.72Zm5.18 0h2.75v1.2h.04c.38-.72 1.32-1.48 2.72-1.48 2.91 0 3.45 1.91 3.45 4.39v4.67h-2.88v-4.38c0-1.04-.02-2.38-1.45-2.38-1.46 0-1.68 1.14-1.68 2.31v4.45H10.68V9.72Z" /></svg> },
    { label: 'Phone', href: `tel:${profile.phone.replaceAll(' ', '')}`, external: false, icon: <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6.7 3.5h3.2l1.3 4.2-1.8 1.65A14.12 14.12 0 0 0 13.9 15l1.8-1.92 4.1 1.3v3.15c0 .63-.5 1.13-1.13 1.13-8.67 0-15.7-7.03-15.7-15.7A1.13 1.13 0 0 1 6.7 3.5Z" /></svg> },
    { label: 'GitHub', href: profile.github, external: true, icon: <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2.2a9.8 9.8 0 0 0-3.1 19.1c.5.09.69-.22.69-.49v-1.73c-2.8.61-3.39-1.18-3.39-1.18-.46-1.17-1.12-1.48-1.12-1.48-.92-.63.07-.62.07-.62 1.02.07 1.56 1.05 1.56 1.05.9 1.55 2.37 1.1 2.94.84.09-.66.35-1.1.64-1.35-2.23-.25-4.58-1.12-4.58-4.98 0-1.1.39-2.01 1.03-2.71-.11-.26-.45-1.31.1-2.72 0 0 .85-.27 2.8 1.04a9.7 9.7 0 0 1 5.1 0c1.95-1.31 2.8-1.04 2.8-1.04.55 1.41.21 2.46.1 2.72.64.7 1.03 1.6 1.03 2.71 0 3.87-2.36 4.72-4.6 4.97.36.31.68.92.68 1.85v2.74c0 .27.18.59.7.49A9.8 9.8 0 0 0 12 2.2Z" /></svg> },
  ];

  return <section className="contact-section" id="contact"><div className="container contact-inner">
    <div className="contact-intro-block" data-reveal><p className="kicker">LET’S MAKE SOMETHING USEFUL</p><h2>Have a challenge<br />worth <em>solving?</em></h2><p className="contact-intro">I’m interested in opportunities across data analytics, banking, IT, cloud computing, and software development.</p>
      <div className="contact-links">{contactLinks.map(item => <ContactIcon key={item.label} label={item.label} href={item.href} external={item.external} title={item.label}>{item.icon}</ContactIcon>)}</div>
      <p className="contact-location">{profile.location}</p>
    </div>
    <div className="contact-panel" data-reveal><span className="contact-label">SEND A MESSAGE</span><form className="contact-form" onSubmit={openEmail}>
      <label>Name<input name="name" type="text" autoComplete="name" placeholder="Your name" required /></label>
      <label>Email<input name="email" type="email" autoComplete="email" placeholder="you@example.com" required /></label>
      <label>
        Message
        <textarea name="message" rows="4" placeholder="How can I help?" required />
      </label>
      <button className="button button-light" type="submit">Send Message <span>↗</span></button>
      <p className="form-note" aria-live="polite">{notice}</p>
    </form></div>
  </div></section>;
}
