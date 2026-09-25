import { useEffect, useState } from 'react';
import { credlyBadges } from '../data.js';
import { courseraCertificates } from '../coursera.js';

const tracks = ['All certificates', 'Analytics', 'Artificial intelligence', 'Cloud & IoT', 'Productivity'];
const featuredCredentials = [
  {
    id: '0DH3YSTEC3AV', track: 'Analytics', badge: 'DA',
    label: 'FEATURED · DATA ANALYTICS',
    description: 'My most relevant credential for Data Analyst roles, backed by Google Career Certificates and the complete nine-course program.',
  },
  {
    id: 'VR0JK91XGZSV', track: 'Artificial intelligence', badge: 'AI',
    label: 'FEATURED · ARTIFICIAL INTELLIGENCE',
    description: 'A professional certificate covering practical AI use across analysis, research, communication, content, and application development.',
  },
];

export default function Certifications() {
  const [activeTrack, setActiveTrack] = useState('All certificates');
  const visibleCertificates = activeTrack === 'All certificates'
    ? courseraCertificates
    : courseraCertificates.filter(certificate => certificate.track === activeTrack);
  const visibleFeaturedCredentials = featuredCredentials
    .filter(featured => activeTrack === 'All certificates' || featured.track === activeTrack)
    .map(featured => ({ ...featured, certificate: courseraCertificates.find(certificate => certificate.id === featured.id) }));
  const featuredIds = new Set(featuredCredentials.map(featured => featured.id));
  const gridCertificates = visibleCertificates.filter(certificate => !featuredIds.has(certificate.id));

  useEffect(() => {
    if (document.querySelector('script[data-credly-embed]')) return;
    const script = document.createElement('script');
    script.src = 'https://cdn.credly.com/assets/utilities/embed.js';
    script.async = true;
    script.dataset.credlyEmbed = 'true';
    document.body.appendChild(script);
  }, []);

  return <section className="section certifications-section" id="certifications"><div className="container">
    <div className="section-heading coursera-heading" data-reveal><div><p className="kicker">LEARNING, APPLIED</p><h2>Coursera<br /><em>certificates.</em></h2></div><div className="coursera-count"><span className="coursera-c-mark">C</span><span><b>{courseraCertificates.length} certificates</b><small>Completed learning on Coursera</small></span></div></div>
    {visibleFeaturedCredentials.length > 0 && <div className="featured-certificates">{visibleFeaturedCredentials.map(featured => <article className="featured-certificate" data-reveal key={featured.id}>
      <div className="featured-cert-mark" aria-hidden="true"><span>{featured.badge}</span><i>✓</i></div>
      <div className="featured-cert-copy"><p className="kicker">{featured.label}</p><h3>{featured.certificate.title}</h3><p>{featured.description}</p><div className="featured-cert-meta"><span>{featured.certificate.issuer}</span><span>·</span><time>{featured.certificate.date}</time><span className="featured-cert-id">Certificate ID {featured.certificate.id}</span></div></div>
      <a className="button button-primary featured-cert-link" href={featured.certificate.url} target="_blank" rel="noreferrer">View Certificate <span>↗</span></a>
    </article>)}</div>}
    <div className="coursera-toolbar"><div className="coursera-filters" role="group" aria-label="Filter Coursera certificates">{tracks.map(track => <button key={track} className={activeTrack === track ? 'filter-button active' : 'filter-button'} onClick={() => setActiveTrack(track)} aria-pressed={activeTrack === track}>{track}</button>)}</div><span className="visible-count">Showing {visibleCertificates.length} of {courseraCertificates.length}</span></div>
    <div className="coursera-grid">{gridCertificates.map(certificate => <article className="coursera-card" data-reveal key={certificate.id}>
      <div className="coursera-card-top"><span className="coursera-wordmark"><i>C</i> Coursera</span><span className="coursera-kind">{certificate.kind}</span></div>
      <div className="coursera-card-body"><p className="coursera-issuer">{certificate.issuer}</p><h3>{certificate.title}</h3><div className="coursera-date"><span>COMPLETED</span><time>{certificate.date}</time></div></div>
      <div className="coursera-card-foot"><span className="credential-id">ID&nbsp; {certificate.id}</span><a href={certificate.url} target="_blank" rel="noreferrer" aria-label={`View ${certificate.title} certificate`}>View certificate <span>↗</span></a></div>
    </article>)}</div>
    <div className="other-credentials">
      <div className="credly-group">
        <div className="other-credentials-title"><div><p className="kicker">OTHER CREDENTIALS</p><h3>Professional badges</h3></div><span>{credlyBadges.length} Credly badges</span></div>
        <div className="credly-grid">{credlyBadges.map((badge, index) => <article className="credly-card" data-reveal key={badge.id}>
          <div className="credly-card-heading"><span>Credly <i>●</i></span><small>BADGE 0{index + 1}</small></div>
          <div className="credly-embed" data-iframe-width="150" data-iframe-height="270" data-share-badge-id={badge.id} data-share-badge-host="https://www.credly.com"></div>
          <a className="credly-fallback" href={badge.url} target="_blank" rel="noreferrer">Open public badge <span>↗</span></a>
        </article>)}</div>
      </div>
    </div>
  </div></section>;
}
