import { useEffect, useRef, useState } from 'react';

const stages = [
  { id: 'collection', label: 'DATA COLLECTION' },
  { id: 'analysis', label: 'CLEANING & ANALYSIS' },
  { id: 'visualization', label: 'DATA VISUALIZATION' },
];

function CollectionIllustration() {
  return <svg viewBox="0 0 300 230" role="img" aria-label="A structured data collection form with organized fields and checked entries">
    <path className="paper-shadow" d="M78 29 Q78 23 86 22 L204 31 Q211 32 210 40 L197 194 Q197 202 189 201 L71 190 Q64 189 65 181 Z" />
    <path className="paper-sheet" d="M71 21 Q71 15 79 15 L198 23 Q205 24 204 32 L192 185 Q192 193 184 192 L64 183 Q57 182 58 174 Z" />
    <path className="paper-fold" d="M178 22 L175 48 L201 47" />
    <path className="form-heading" d="M82 51 L151 56 M80 60 L124 63" />
    <circle className="form-dot dot-blue" cx="75" cy="81" r="4" /><path className="form-line" d="M88 81 L171 86" />
    <circle className="form-dot dot-red" cx="73" cy="101" r="4" /><path className="form-line" d="M86 101 L162 106" />
    <circle className="form-dot dot-yellow" cx="71" cy="121" r="4" /><path className="form-line" d="M84 121 L174 126" />
    <path className="table-outline" d="M75 143 L174 151 L171 174 L73 166 Z M75 153 L173 161 M108 146 L106 169 M140 148 L138 171" />
    <path className="form-check" d="M161 69 L166 74 L176 62" />
    <circle className="collect-particle particle-blue" cx="225" cy="77" r="4" /><circle className="collect-particle particle-red" cx="235" cy="94" r="3" /><circle className="collect-particle particle-yellow" cx="221" cy="112" r="3.5" /><circle className="collect-particle particle-green" cx="239" cy="129" r="3" />
    <path className="collection-sweep" d="M213 75 Q249 100 217 137" />
  </svg>;
}

function AnalysisIllustration() {
  return <svg viewBox="0 0 300 230" role="img" aria-label="A brain processing raw data into clean, organized analytical patterns">
    <path className="brain-outline" d="M151 47 C137 28 108 34 103 54 C82 48 67 65 74 83 C54 96 63 119 77 126 C66 146 81 164 100 162 C108 184 132 185 148 169 C164 186 188 180 194 160 C216 162 230 144 219 126 C239 110 229 88 213 82 C219 61 199 46 181 54 C174 38 162 39 151 47 Z" />
    <path className="brain-fold" d="M150 49 C142 66 154 75 145 91 C137 105 151 113 145 128 C140 141 151 153 148 169 M102 58 C118 62 120 77 110 87 C99 98 108 110 121 112 M77 84 C91 85 96 96 89 107 M91 133 C106 127 119 137 115 151 M181 57 C166 63 165 76 178 87 C189 98 179 109 168 113 M216 84 C201 86 197 98 204 108 M208 133 C192 127 180 137 184 151" />
    <path className="analysis-circuit" d="M121 91 L137 91 L143 101 M165 91 L178 91 L183 101 M118 137 L136 137 L145 129 M164 137 L178 137 L184 129" />
    <circle className="brain-node node-blue" cx="138" cy="91" r="4" /><circle className="brain-node node-yellow" cx="178" cy="91" r="4" /><circle className="brain-node node-red" cx="136" cy="137" r="4" /><circle className="brain-node node-green" cx="178" cy="137" r="4" />
    <path className="raw-data-path" d="M15 102 C33 88 44 116 65 102" /><circle className="raw-particle particle-blue" cx="24" cy="98" r="3.5" /><circle className="raw-particle particle-red" cx="42" cy="107" r="3" /><circle className="raw-particle particle-yellow" cx="58" cy="103" r="3.5" />
    <path className="insight-path" d="M226 105 C248 91 260 111 284 96" /><circle className="insight-particle particle-green" cx="239" cy="101" r="3" /><circle className="insight-particle particle-blue" cx="258" cy="103" r="3" /><circle className="insight-particle particle-red" cx="277" cy="99" r="3" />
    <path className="mini-chart" d="M115 116 L115 126 L124 126 M119 123 L123 120 L127 122 L132 116" />
  </svg>;
}

function VisualizationIllustration() {
  return <svg viewBox="0 0 300 230" role="img" aria-label="Animated bars, trend line, and KPI marks turning analyzed data into visual insight">
    <path className="viz-ground" d="M42 182 L253 195" />
    <path className="viz-guide" d="M59 151 L242 162 M62 124 L244 135 M64 97 L246 108" />
    <path className="bar bar-blue" d="M83 177 L85 133 L103 134 L101 178 Z" />
    <path className="bar bar-red" d="M118 179 L120 111 L138 112 L136 180 Z" />
    <path className="bar bar-yellow" d="M153 181 L155 91 L173 92 L171 182 Z" />
    <path className="bar bar-green" d="M188 183 L190 66 L208 67 L206 184 Z" />
    <path className="trend-line" d="M72 101 C99 88 109 118 132 91 S167 80 180 71 S211 78 235 48" />
    <circle className="trend-point point-blue" cx="72" cy="101" r="5" /><circle className="trend-point point-red" cx="132" cy="91" r="5" /><circle className="trend-point point-yellow" cx="180" cy="71" r="5" /><circle className="trend-point point-green" cx="235" cy="48" r="5" />
    <circle className="viz-ring" cx="220" cy="148" r="23" /><path className="viz-ring-accent" d="M220 125 A23 23 0 0 1 240 159" />
    <path className="viz-spark" d="M230 38 L230 27 M224 33 L236 33" />
  </svg>;
}

export default function DataJourney() {
  const [activeStage, setActiveStage] = useState(0);
  const rootRef = useRef(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root || !('IntersectionObserver' in window)) return undefined;
    const observer = new IntersectionObserver(entries => {
      const visible = entries.filter(entry => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (visible) setActiveStage(Number(visible.target.dataset.stage));
    }, { threshold: [0.35, 0.6] });
    root.querySelectorAll('.journey-stage').forEach(stage => observer.observe(stage));
    return () => observer.disconnect();
  }, []);

  return <div className="data-journey" ref={rootRef} data-active-stage={activeStage} aria-labelledby="data-journey-title">
    <h3 id="data-journey-title" className="sr-only">My data analytics workflow</h3>
    <svg className="journey-flow" viewBox="0 0 1000 230" preserveAspectRatio="none" aria-hidden="true">
      <path className="journey-flow-base" d="M232 119 C292 70 345 70 397 119 C440 155 463 158 500 119 C540 81 562 86 603 119 C660 168 711 168 768 119" />
      <path className="journey-flow-active flow-collect" d="M232 119 C292 70 345 70 397 119" />
      <path className="journey-flow-active flow-visualize" d="M603 119 C660 168 711 168 768 119" />
      <circle className="journey-traveler traveler-blue" r="4"><animateMotion dur="8s" repeatCount="indefinite" path="M232 119 C292 70 345 70 397 119 C440 155 463 158 500 119 C540 81 562 86 603 119 C660 168 711 168 768 119" /></circle>
      <circle className="journey-traveler traveler-red" r="3.5"><animateMotion dur="8s" begin="-2.7s" repeatCount="indefinite" path="M232 119 C292 70 345 70 397 119 C440 155 463 158 500 119 C540 81 562 86 603 119 C660 168 711 168 768 119" /></circle>
      <circle className="journey-traveler traveler-yellow" r="3"><animateMotion dur="8s" begin="-5.3s" repeatCount="indefinite" path="M232 119 C292 70 345 70 397 119 C440 155 463 158 500 119 C540 81 562 86 603 119 C660 168 711 168 768 119" /></circle>
    </svg>
    <svg className="journey-flow journey-flow-mobile" viewBox="0 0 100 1000" preserveAspectRatio="none" aria-hidden="true">
      <path className="journey-flow-base" d="M12 0 C12 130 12 200 12 300 S12 540 12 680 S12 850 12 1000" />
      <circle className="journey-traveler traveler-blue" r="3"><animateMotion dur="9s" repeatCount="indefinite" path="M12 0 C12 130 12 200 12 300 S12 540 12 680 S12 850 12 1000" /></circle>
      <circle className="journey-traveler traveler-red" r="3"><animateMotion dur="9s" begin="-3s" repeatCount="indefinite" path="M12 0 C12 130 12 200 12 300 S12 540 12 680 S12 850 12 1000" /></circle>
      <circle className="journey-traveler traveler-yellow" r="3"><animateMotion dur="9s" begin="-6s" repeatCount="indefinite" path="M12 0 C12 130 12 200 12 300 S12 540 12 680 S12 850 12 1000" /></circle>
    </svg>
    <div className="journey-stages">
      {stages.map((stage, index) => <article className={`journey-stage journey-stage-${stage.id}${activeStage === index ? ' is-active' : ''}`} data-stage={index} key={stage.id} style={{ '--reveal-delay': `${index * 180}ms` }} onMouseEnter={() => setActiveStage(index)} onFocus={() => setActiveStage(index)} tabIndex="0" aria-label={`${String(index + 1).padStart(2, '0')} ${stage.label}`}>
        <div className="journey-art"><span className="journey-orbit orbit-a"></span><span className="journey-orbit orbit-b"></span>{index === 0 ? <CollectionIllustration /> : index === 1 ? <AnalysisIllustration /> : <VisualizationIllustration />}</div>
        <p className="journey-label"><span>{String(index + 1).padStart(2, '0')}</span>{stage.label}</p>
      </article>)}
    </div>
    <p className="journey-outcome">From raw data to <em>actionable insight.</em></p>
  </div>;
}
