import React, { useRef, useEffect } from 'react';
import Hero from '../components/Hero';
import SignalDivider from '../components/SignalDivider';

export default function Products() {
  useEffect(() => {
    document.title = "Featured Technologies — Eliciton Innovations";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', 'Understand the molecular engineering, DIVA capability, and dry-stable lyophilized design behind Eliciton products.');
    }
  }, []);

  const techScrollRef = useRef(null);

  const scrollPrev = () => {
    if (techScrollRef.current) {
      techScrollRef.current.scrollBy({ left: -280, behavior: 'smooth' });
    }
  };

  const scrollNext = () => {
    if (techScrollRef.current) {
      techScrollRef.current.scrollBy({ left: 280, behavior: 'smooth' });
    }
  };

  return (
    <>
      <Hero
        eyebrow="Products &amp; Technologies"
        title="Featured Technologies"
        subtitle="The engineering behind every result"
        compact={true}
      />

      <SignalDivider />

      {/* ================= FEATURED TECH ================= */}
      <section className="section-pad" style={{ background: 'var(--card)' }}>
        <div className="wrap">
          <div className="section-head reveal" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '48px', flexWrap: 'wrap', gap: '24px' }}>
            <div>
              <div className="eyebrow">Featured Tech</div>
              <h2 style={{ maxWidth: '540px', margin: 0 }}>The engineering behind every result</h2>
            </div>
            <div className="tech-arrows">
              <button onClick={scrollPrev} aria-label="Previous technologies">
                <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5M12 19l-7-7 7-7" /></svg>
              </button>
              <button onClick={scrollNext} aria-label="Next technologies">
                <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
              </button>
            </div>
          </div>

          <div className="tech-scroll reveal" ref={techScrollRef} id="techScroll">

            <div className="tech-card">
              <div className="tech-num">01 / COLORIMETRIC</div>
              <h4>ELISA Plate Kits</h4>
              <p>Pre-coated, stable 96-well colorimetric antibody capture configurations matching industry plate readers.</p>
            </div>

            <div className="tech-card">
              <div className="tech-num">02 / SUB-NANOMOLAR</div>
              <h4>Monoclonal Pairing</h4>
              <p>Developing high-affinity antibody pairs matching distinct epitopic regions on target veterinary pathogen isolates.</p>
            </div>

            <div className="tech-card">
              <div className="tech-num">03 / DIVA CAPABILITY</div>
              <h4>DIVA Diagnostic Tests</h4>
              <p>Differentiating Infected from Vaccinated Animals using marker antigen targeting configurations.</p>
            </div>

            <div className="tech-card">
              <div className="tech-num">04 / STABILIZED</div>
              <h4>Lyophilized Formats</h4>
              <p>Dry-stable chemistry components enabling ambient-temperature transport for field diagnostic operations.</p>
            </div>



          </div>
        </div>
      </section>
    </>
  );
}
