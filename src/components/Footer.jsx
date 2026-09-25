import { profile } from '../data.js';

export default function Footer() {
  return <footer className="site-footer"><div className="container footer-inner"><a className="brand footer-brand" href="#home"><span className="brand-mark">M</span><span>MAXWELL<span className="brand-dot">.</span></span></a><span>© {new Date().getFullYear()} {profile.name}</span><a className="back-top" href="#home">BACK TO TOP ↑</a></div></footer>;
}
