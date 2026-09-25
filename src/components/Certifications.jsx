import { useEffect, useState } from 'react';
import { credlyBadges } from '../data.js';
import { courseraCertificates } from '../coursera.js';

const tracks = ['All certificates', 'Analytics', 'Artificial intelligence', 'Cloud & IoT', 'Productivity'];

export default function Certifications() {
  const [activeTrack, setActiveTrack] = useState('All certificates');
  const visibleCertificates = activeTrack === 'All certificates'
    ? courseraCertificates
    : courseraCertificates.filter(certificate => certificate.track === activeTrack);

  useEffect(() => {
    if (document.querySelector('script[data-credly-embed]')) return;
    const script = document.createElement('script');
    script.src = 'https://cdn.credly.com/assets/utilities/embed.js';
    script.async = true;
    script.dataset.credlyEmbed = 'true';
    document.body.appendChild(script);
  }, []);

  return <section className="section certifications-section" id="certifications"><div className="container">
    <div className="section-heading coursera-heading"><div><p className="kicker">LEARNING, APPLIED</p><h2>Coursera<br /><em>certificates.</em></h2></div><div className="coursera-count"><span className="coursera-c-mark">C</span><span><b>{courseraCertificates.length} certificates</b><small>Completed learning on Coursera</small></span></div></div>
    <div className="coursera-toolbar"><div className="coursera-filters" role="group" aria-label="Filter Coursera certificates">{tracks.map(track => <button key={track} className={activeTrack === track ? 'filter-button active' : 'filter-button'} onClick={() => setActiveTrack(track)} aria-pressed={activeTrack === track}>{track}</button>)}</div><span className="visible-count">Showing {visibleCertificates.length} of {courseraCertificates.length}</span></div>
    <div className="coursera-grid">{visibleCertificates.map(certificate => <article className="coursera-card" key={certificate.id}>
      <div className="coursera-card-top"><span className="coursera-wordmark"><i>C</i> Coursera</span><span className="coursera-kind">{certificate.kind}</span></div>
      <div className="coursera-card-body"><p className="coursera-issuer">{certificate.issuer}</p><h3>{certificate.title}</h3><div className="coursera-date"><span>COMPLETED</span><time>{certificate.date}</time></div></div>
      <div className="coursera-card-foot"><span className="credential-id">ID&nbsp; {certificate.id}</span><a href={certificate.url} target="_blank" rel="noreferrer" aria-label={`View ${certificate.title} certificate`}>View certificate <span>↗</span></a></div>
    </article>)}</div>
    <div className="other-credentials">
      <div className="credly-group">
        <div className="other-credentials-title"><div><p className="kicker">OTHER CREDENTIALS</p><h3>Professional badges</h3></div><span>{credlyBadges.length} Credly badges</span></div>
        <div className="credly-grid">{credlyBadges.map((badge, index) => <article className="credly-card" key={badge.id}>
          <div className="credly-card-heading"><span>Credly <i>●</i></span><small>BADGE 0{index + 1}</small></div>
          <div className="credly-embed" data-iframe-width="150" data-iframe-height="270" data-share-badge-id={badge.id} data-share-badge-host="https://www.credly.com"></div>
          <a className="credly-fallback" href={badge.url} target="_blank" rel="noreferrer">Open public badge <span>↗</span></a>
        </article>)}</div>
      </div>
    </div>
  </div></section>;
}
