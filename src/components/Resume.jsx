import { useState } from 'react';

const cvOptions = {
  en: {
    short: 'EN',
    flag: '🇬🇧',
    label: 'Ebongue CV – English',
    text: 'English',
    file: '/Ebongue%20CV%20Eng.pdf',
    downloadName: 'Ebongue CV - English.pdf',
  },
  fr: {
    short: 'FR',
    flag: '🇫🇷',
    label: 'Ebongue CV – French',
    text: 'Français',
    file: '/Ebongue%20CV%20Fr.pdf',
    downloadName: 'Ebongue CV - French.pdf',
  },
};

export default function Resume() {
  const [selectedLanguage, setSelectedLanguage] = useState('en');
  const currentCv = cvOptions[selectedLanguage];

  return <section className="section resume-section" id="resume"><div className="container resume-layout">
    <div className="resume-copy" data-reveal>
      <p className="kicker">A CLOSER LOOK</p>
      <h2>My experience,<br /><em>in one document.</em></h2>
      <p>Review my education, professional experience, and technical background in my resume.</p>
      <div className="resume-language-selector" aria-label="Resume language selector">
        <span className="resume-language-label">Language</span>
        <div className="resume-language-switch" role="tablist" aria-label="Resume language selector">
          {Object.entries(cvOptions).map(([key, item]) => <button
            key={key}
            type="button"
            role="tab"
            aria-selected={selectedLanguage === key}
            aria-pressed={selectedLanguage === key}
            className={selectedLanguage === key ? 'is-active' : ''}
            onClick={() => setSelectedLanguage(key)}
          >
            <span className="resume-lang-flag" aria-hidden="true">{item.flag}</span>
            <span className="resume-lang-code">{item.short}</span>
            <span className="resume-lang-name">{item.text}</span>
          </button>)}
        </div>
      </div>
      <a className="button button-primary resume-download" href={currentCv.file} download={currentCv.downloadName}>Download My Resume <span>↓</span></a>
    </div>
    <details className="resume-preview" data-reveal open>
      <summary>
        <span>{currentCv.label}</span>
        <span className="preview-chevron">＋</span>
      </summary>
      <div className="resume-frame-wrap">
        <iframe src={`${currentCv.file}#view=FitH`} title={`Resume preview for ${currentCv.label}`} loading="lazy"></iframe>
      </div>
    </details>
  </div></section>;
}
