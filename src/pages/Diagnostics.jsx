import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import SignalDivider from '../components/SignalDivider';

export default function Diagnostics() {
  useEffect(() => {
    document.title = "In Vitro Diagnostics — Eliciton Innovations";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', 'Development of ELISA kits, lateral flow assays, molecular diagnostics, and rapid veterinary diagnostic platforms.');
    }
  }, []);

  return (
    <>
      <Hero
        eyebrow={<i>In Vitro Diagnostics</i>}
        title={<i>In Vitro Diagnostics</i>}
        subtitle="Veterinary Diagnostics Purpose-built for animal health"
        compact={true}
      />

      <SignalDivider />

      <section className="section-pad">
        <div className="wrap">
          <div className="section-head reveal">
            <div className="eyebrow"><i>In Vitro Diagnostics</i></div>
            <h2>Purpose-built for animal health</h2>
            <p>Veterinary diagnostics require speed without sacrifice. Here is how our framework delivers confidence under field conditions.</p>
          </div>

          <div className="solutions-grid reveal-stagger">
            <div className="solution-card s1">
              <div className="solution-icon"><svg viewBox="0 0 24 24" fill="none" strokeWidth="1.7"><path d="M9 3h6M10 3v5.5L4.5 18a2 2 0 001.7 3h11.6a2 2 0 001.7-3L14 8.5V3M7 15h10" strokeLinecap="round" strokeLinejoin="round" /></svg></div>
              <h3>ELISA Development</h3>
              <p>Developing solid-phase colorimetric assays optimized for standard 96-well format layouts, ready for optical detection.</p>
            </div>
            <div className="solution-card s2">
              <div className="solution-icon"><svg viewBox="0 0 24 24" fill="none" strokeWidth="1.7"><path d="M12 2v6M12 22v-4M4.9 4.9l3.5 3.5M15.6 15.6l3.5 3.5M2 12h6M16 12h6M4.9 19.1l3.5-3.5M15.6 8.4l3.5-3.5" strokeLinecap="round" /></svg></div>
              <h3>Lateral Flow Strip Design</h3>
              <p>Structuring quick colloidal gold and fluorescence-dyed diagnostic strips for rapid point-of-need livestock detection.</p>
            </div>
            <div className="solution-card s3">
              <div className="solution-icon"><svg viewBox="0 0 24 24" fill="none" strokeWidth="1.7"><path d="M8 2l1.5 4M16 2l-1.5 4M12 6v4M7 10h10l-1 4a4 4 0 01-8 0l-1-4z" strokeLinecap="round" strokeLinejoin="round" /></svg></div>
              <h3>Platform Optimization</h3>
              <p>Cooperating with engineering stakeholders to design compatible cartridges, filters, readers, and user applications.</p>
            </div>
          </div>

          <div style={{ marginTop: '64px', textAlign: 'center' }} className="reveal">
            <Link to="/contact" className="btn btn-primary">Request Diagnostic Assay Development
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
