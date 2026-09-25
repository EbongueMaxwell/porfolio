import { useState } from 'react';
import ThemeToggle from './ThemeToggle.jsx';

const links = [
  ['About', '#about'], ['Experience', '#experience'], ['Education', '#education'],
  ['Skills', '#skills'], ['Projects', '#projects'], ['Credentials', '#certifications'], ['Resume', '#resume'],
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return <header className="site-header">
    <div className="nav-wrap">
      <a className="brand" href="#home" aria-label="Maxwell Ebongue home"><span className="brand-mark">M</span><span>MAXWELL<span className="brand-dot">.</span></span></a>
      <button className="menu-toggle" aria-label={open ? 'Close navigation' : 'Open navigation'} aria-expanded={open} onClick={() => setOpen(!open)}><span></span><span></span></button>
      <nav className={open ? 'nav-links is-open' : 'nav-links'} aria-label="Main navigation">
        {links.map(([label, href]) => <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>)}
        <ThemeToggle />
        <a className="nav-cta" href="#contact" onClick={() => setOpen(false)}>Let’s talk <span>↗</span></a>
      </nav>
    </div>
  </header>;
}
