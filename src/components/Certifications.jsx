import { useEffect, useMemo, useRef, useState } from 'react';
import { credlyBadges, certifications, linkedinLearningCertificates, profile } from '../data.js';
import { courseraCertificates } from '../coursera.js';

const extraCredentials = certifications.filter(certificate => certificate.title === 'AI Career Essentials (AICE)' || certificate.issuer === 'Kaggle badge');
const courseraTracks = ['All certificates', 'Analytics', 'Artificial intelligence', 'Cloud & IoT', 'Productivity'];
const badgeTracks = ['Data & analytics', 'AI & machine learning', 'Creative & productivity'];
const featuredCoursera = [
  { id: '0DH3YSTEC3AV', track: 'Analytics' },
  { id: 'VR0JK91XGZSV', track: 'Artificial intelligence' },
];
const shortDescription = credential => credential.description || (credential.kind === 'Course Certificate' ? `Course certificate issued by ${credential.issuer}. Focus: ${credential.title}.` : credential.kind === 'Guided Project' ? `Guided project certificate issued by ${credential.issuer}. Focus: ${credential.title}.` : `${credential.kind || 'Professional credential'} issued by ${credential.issuer}, focused on ${credential.track || credential.title}.`);

export default function Certifications() {
  const credentials = useMemo(() => linkedinLearningCertificates.map(certificate => ({ ...certificate, source: certificate.issuer.includes('PMI') ? 'PMI®' : 'LinkedIn Learning', type: certificate.kind, category: certificate.track, visual: certificate.issuer.includes('Microsoft') ? 'MS' : certificate.issuer.includes('PMI') ? 'PMI' : 'in' })), []);
  const [activeCourseraTrack, setActiveCourseraTrack] = useState('All certificates');
  const visibleCourseraCertificates = activeCourseraTrack === 'All certificates' ? courseraCertificates : courseraCertificates.filter(certificate => certificate.track === activeCourseraTrack);
  const visibleFeaturedCoursera = featuredCoursera.filter(featured => activeCourseraTrack === 'All certificates' || featured.track === activeCourseraTrack).map(featured => ({ ...featured, certificate: courseraCertificates.find(certificate => certificate.id === featured.id) }));
  const featuredCourseraIds = new Set(featuredCoursera.map(featured => featured.id));
  const gridCourseraCertificates = visibleCourseraCertificates.filter(certificate => !featuredCourseraIds.has(certificate.id));
  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [preview, setPreview] = useState(null);
  const [isPaused, setIsPaused] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(() => window.matchMedia('(prefers-reduced-motion: reduce)').matches);
  const activeIndexRef = useRef(activeIndex);
  activeIndexRef.current = activeIndex;
  const carouselRef = useRef(null);
  const slideRefs = useRef([]);
  const resumeTimer = useRef(null);
  const dragState = useRef(null);
  const active = credentials[activeIndex];

  const centerSlide = index => {
    const viewport = carouselRef.current;
    const slide = slideRefs.current[index];
    if (viewport && slide) viewport.scrollTo({ left: slide.offsetLeft - (viewport.clientWidth - slide.clientWidth) / 2, behavior: 'smooth' });
  };

  const pauseForInteraction = () => {
    setIsPaused(true);
    window.clearTimeout(resumeTimer.current);
    resumeTimer.current = window.setTimeout(() => setIsPaused(false), 6500);
  };

  const goTo = index => {
    const nextIndex = (index + credentials.length) % credentials.length;
    setActiveIndex(nextIndex);
    setSelectedIndex(nextIndex);
    centerSlide(nextIndex);
    pauseForInteraction();
  };

  useEffect(() => {
    const viewport = carouselRef.current;
    if (!viewport) return undefined;
    const updateSlideWidth = () => {
      const count = window.innerWidth <= 640 ? 1 : window.innerWidth <= 900 ? 2 : 3;
      const gap = window.innerWidth <= 640 ? 12 : 16;
      const width = (viewport.clientWidth - gap * (count - 1)) / count;
      viewport.style.setProperty('--credential-slide-width', `${width}px`);
      centerSlide(activeIndexRef.current);
    };
    const observer = new ResizeObserver(updateSlideWidth);
    observer.observe(viewport);
    updateSlideWidth();
    return () => observer.disconnect();
  }, []);

  const startDrag = event => {
    if (event.pointerType !== 'mouse' || event.button !== 0) return;
    dragState.current = { x: event.clientX, scrollLeft: carouselRef.current.scrollLeft, moved: false };
  };
  const moveDrag = event => {
    if (!dragState.current) return;
    const delta = event.clientX - dragState.current.x;
    if (Math.abs(delta) > 5) dragState.current.moved = true;
    if (dragState.current.moved) {
      carouselRef.current.scrollLeft = dragState.current.scrollLeft - delta;
      carouselRef.current.classList.add('is-dragging');
    }
  };
  const endDrag = () => {
    if (!dragState.current) return;
    const wasMoved = dragState.current.moved;
    carouselRef.current?.classList.remove('is-dragging');
    if (wasMoved) window.setTimeout(() => { dragState.current = null; }, 0);
    else dragState.current = null;
  };
  useEffect(() => {
    centerSlide(activeIndex);
  }, []);

  useEffect(() => {
    const motionPreference = window.matchMedia('(prefers-reduced-motion: reduce)');
    const updateMotionPreference = () => setPrefersReducedMotion(motionPreference.matches);
    motionPreference.addEventListener('change', updateMotionPreference);
    return () => motionPreference.removeEventListener('change', updateMotionPreference);
  }, []);

  useEffect(() => {
    if (isPaused || prefersReducedMotion) return undefined;
    const timer = window.setInterval(() => {
      const next = (activeIndex + 1) % credentials.length;
      setActiveIndex(next);
      setSelectedIndex(next);
      centerSlide(next);
    }, 7200);
    return () => window.clearInterval(timer);
  }, [isPaused, prefersReducedMotion, credentials.length, activeIndex]);

  useEffect(() => () => window.clearTimeout(resumeTimer.current), []);

  useEffect(() => {
    if (document.querySelector('script[data-credly-embed]')) return;
    const script = document.createElement('script');
    script.src = 'https://cdn.credly.com/assets/utilities/embed.js';
    script.async = true;
    script.dataset.credlyEmbed = 'true';
    document.body.appendChild(script);
  }, []);

  useEffect(() => {
    if (!preview) return undefined;
    const handleEscape = event => { if (event.key === 'Escape') setPreview(null); };
    window.addEventListener('keydown', handleEscape);
    document.body.classList.add('credential-preview-open');
    return () => {
      window.removeEventListener('keydown', handleEscape);
      document.body.classList.remove('credential-preview-open');
    };
  }, [preview]);

  const selectSlide = index => {
    setSelectedIndex(index);
    setActiveIndex(index);
    centerSlide(index);
    pauseForInteraction();
  };

  const handleKeyDown = event => {
    if (event.key === 'ArrowRight') { event.preventDefault(); goTo(activeIndex + 1); }
    if (event.key === 'ArrowLeft') { event.preventDefault(); goTo(activeIndex - 1); }
  };

  return <>
  <section className="section certifications-section linkedin-certifications" id="certifications" aria-labelledby="certifications-heading">
    <div className="container">
      <div className="section-heading linkedin-certifications-heading" data-reveal>
        <div><p className="kicker">LEARNING, APPLIED</p><h2 id="certifications-heading">LinkedIn<br /><em>certifications.</em></h2></div>
        <div className="certifications-heading-aside"><p>A selection of professional certifications and learning achievements supporting my work in data, technology, cloud computing and AI.</p><a href={profile.linkedin} target="_blank" rel="noreferrer">View my LinkedIn <span>↗</span></a></div>
      </div>

      <div className="credential-showcase" onMouseEnter={() => setIsPaused(true)} onMouseLeave={() => { window.clearTimeout(resumeTimer.current); resumeTimer.current = window.setTimeout(() => setIsPaused(false), 2200); }} onFocusCapture={() => setIsPaused(true)} onBlurCapture={event => { if (!event.currentTarget.contains(event.relatedTarget)) { window.clearTimeout(resumeTimer.current); resumeTimer.current = window.setTimeout(() => setIsPaused(false), 2200); } }} onKeyDown={handleKeyDown}>
        <div className="credential-carousel" ref={carouselRef} onPointerDown={startDrag} onPointerMove={moveDrag} onPointerUp={endDrag} onPointerCancel={endDrag} aria-label="Certification carousel" aria-roledescription="carousel" tabIndex="0">
          <div className="credential-carousel-track">
            {credentials.map((credential, index) => <button type="button" className={`credential-slide${index === selectedIndex ? ' is-selected' : ''}`} key={`${credential.source}-${credential.id}`} ref={element => { slideRefs.current[index] = element; }} onClick={() => { if (!dragState.current?.moved) selectSlide(index); }} aria-pressed={index === selectedIndex} aria-label={`Select certificate preview: ${credential.title}`}>
              <span className="credential-slide-preview"><img src={credential.preview} alt={`${credential.title} certificate`} loading={index < 3 ? 'eager' : 'lazy'} /></span>
            </button>)}
          </div>
        </div>
        <div className="showcase-controls">
          <div className="showcase-arrows"><button type="button" onClick={() => goTo(activeIndex - 1)} aria-label="Previous certification">←</button><button type="button" onClick={() => goTo(activeIndex + 1)} aria-label="Next certification">→</button></div>
          <div className="showcase-dots" role="group" aria-label="Choose a LinkedIn certificate">{credentials.map((credential, index) => <button key={credential.id} type="button" className={index === activeIndex ? 'active' : ''} onClick={() => goTo(index)} aria-label={`Show ${credential.title}`} aria-current={index === activeIndex ? 'true' : undefined} />)}</div>
        </div>
      </div>

      <article className="credential-detail" aria-live="polite" key={active.id}>
        <div className="credential-detail-main"><p className="kicker">{active.category || active.type}</p><h3>{active.title}</h3><p className="credential-detail-description">{shortDescription(active)}</p><div className="credential-detail-meta"><span>{active.issuer}</span>{active.date && <><i>·</i><time>{active.date}</time></>}{active.id && <><i>·</i><span className="credential-detail-id">ID {active.id}</span></>}</div></div>
        <a className="button button-primary credential-detail-link" href={active.url} target="_blank" rel="noreferrer">View Certificate <span>↗</span></a>
      </article>

      <div className="other-credentials">
        <div className="other-credentials-title"><div><p className="kicker">BEYOND COURSERA</p><h3>More <em>credentials.</em></h3></div><span>ALX · KAGGLE</span></div>
        <div className="other-credential-grid">
          {extraCredentials.map((credential, index) => <button type="button" className="other-credential-card" data-reveal key={credential.title} onClick={() => setPreview(credential)} aria-label={`Preview ${credential.title}`}>
            <span className="other-credential-image"><img src={credential.image} alt="" loading="lazy" /></span>
            <span className="other-credential-copy"><span>{credential.issuer === 'Kaggle badge' ? 'KAGGLE' : credential.issuer.toUpperCase()}</span><strong>{credential.title}</strong><small className="other-credential-open">Preview certificate ↗</small></span>
            <span className="other-credential-index">0{index + 1}</span>
          </button>)}
        </div>
      </div>
    </div>
    {preview && <div className="credential-preview-backdrop" role="presentation" onMouseDown={event => { if (event.target === event.currentTarget) setPreview(null); }}>
      <div className="credential-preview-dialog" role="dialog" aria-modal="true" aria-labelledby="credential-preview-title" tabIndex="-1">
        <div className="credential-preview-header"><div><p className="kicker">{preview.issuer === 'Kaggle badge' ? 'KAGGLE' : preview.issuer.toUpperCase()}</p><h3 id="credential-preview-title">{preview.title}</h3></div><button type="button" onClick={() => setPreview(null)} aria-label="Close certificate preview">×</button></div>
        <div className="credential-preview-image"><img src={preview.image} alt={`${preview.title} certificate`} /></div>
      </div>
    </div>}
  </section>
  <section className="section certifications-section coursera-certifications" id="coursera-certificates" aria-labelledby="coursera-certifications-heading">
    <div className="container">
      <div className="section-heading coursera-heading" data-reveal><div><p className="kicker">COURSERA LEARNING</p><h2 id="coursera-certifications-heading">Coursera<br /><em>certificates.</em></h2></div><div className="coursera-count"><span className="coursera-c-mark">C</span><span><b>{courseraCertificates.length} certificates</b><small>Completed learning on Coursera</small></span></div></div>
      <div className="coursera-toolbar"><div className="coursera-filters" role="group" aria-label="Filter Coursera certificates">{courseraTracks.map(track => <button key={track} type="button" className={activeCourseraTrack === track ? 'filter-button active' : 'filter-button'} onClick={() => setActiveCourseraTrack(track)} aria-pressed={activeCourseraTrack === track}>{track}</button>)}</div><span className="visible-count">Showing {visibleCourseraCertificates.length} of {courseraCertificates.length}</span></div>
      {visibleFeaturedCoursera.length > 0 && <div className="featured-certificates">{visibleFeaturedCoursera.map(featured => <a className="featured-cert-preview" data-reveal key={featured.id} href={featured.certificate.url} target="_blank" rel="noreferrer" aria-label={`Open ${featured.certificate.title} certificate`}>
        <img src={featured.certificate.preview} alt={`${featured.certificate.title} Coursera certificate`} loading="lazy" />
      </a>)}</div>}
      <div className="coursera-grid">{gridCourseraCertificates.map(certificate => <a className="coursera-card" data-reveal key={certificate.id} href={certificate.url} target="_blank" rel="noreferrer" aria-label={`Open ${certificate.title} certificate`}>
        <img className="coursera-certificate-preview" src={certificate.preview} alt={`${certificate.title} Coursera certificate`} loading="lazy" />
      </a>)}</div>
    </div>
  </section>
  <section className="section certifications-section credly-certifications" id="digital-badges" aria-labelledby="credly-certifications-heading">
    <div className="container">
      <div className="section-heading" data-reveal><div><p className="kicker">VERIFIED DIGITAL CREDENTIALS</p><h2 id="credly-certifications-heading">Credly<br /><em>badges.</em></h2></div><p className="credly-section-intro">Publicly verifiable badges, grouped by specialization.</p></div>
      {badgeTracks.map(track => <div className="credly-track" key={track}><h3>{track}</h3><div className="credly-grid">{credlyBadges.filter(badge => badge.track === track).map(badge => <article className="credly-card" data-reveal key={badge.id}>
        <div className="credly-card-heading"><span>Credly <i>●</i></span><small>VERIFIED BADGE</small></div><h4 className="credly-badge-title">{badge.title}</h4><p className="credly-badge-issuer">{badge.issuer}</p>
        <div className="credly-embed" data-iframe-width="150" data-iframe-height="270" data-share-badge-id={badge.id} data-share-badge-host="https://www.credly.com"></div><a className="credly-fallback" href={badge.url} target="_blank" rel="noreferrer">Open public badge <span>↗</span></a>
      </article>)}</div></div>)}
    </div>
  </section>
  </>;
}
