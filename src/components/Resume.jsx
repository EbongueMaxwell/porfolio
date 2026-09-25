export default function Resume() {
  return <section className="section resume-section" id="resume"><div className="container resume-layout">
    <div className="resume-copy" data-reveal><p className="kicker">A CLOSER LOOK</p><h2>My experience,<br /><em>in one document.</em></h2><p>Review my education, professional experience, and technical background in my resume.</p><a className="button button-primary resume-download" href="/Ebongue%20CV.pdf" download="Ebongue CV.pdf">Download My Resume <span>↓</span></a></div>
    <details className="resume-preview" data-reveal><summary><span>Preview resume</span><span className="preview-chevron">＋</span></summary><div className="resume-frame-wrap"><iframe src="/Ebongue%20CV.pdf#view=FitH" title="Resume preview for Ebongue Nsame Elie Maxwell" loading="lazy"></iframe></div></details>
  </div></section>;
}
