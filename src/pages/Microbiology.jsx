import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import SignalDivider from '../components/SignalDivider';

export default function Microbiology() {
  useEffect(() => {
    document.title = "Microbiology — Eliciton Innovations";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', 'Research and innovation in veterinary microbiology, bacterial pathogenesis, antimicrobial solutions, and applied biotechnology.');
    }
  }, []);

  return (
    <>
      <Hero
        eyebrow="Microbiology"
        title="MICROBIOLOGY"
        subtitle="Deep bench strength in bacterial pathogenesis"
        compact={true}
      />

      <SignalDivider />

      <section className="section-pad">
        <div className="wrap">
          <div className="section-head reveal">
            <div className="eyebrow">Veterinary Microbiology</div>
            <h2>Pathogen expertise running deep</h2>
            <p>Researching host-pathogen interactions to develop diagnostic targets, custom reagents and solutions for disease control.</p>
          </div>

          <div className="domains-grid">
            <div className="domain-card card-a reveal" style={{ minHeight: 'auto' }}>
              <div className="domain-num">DIAGNOSTIC TARGETS</div>
              <h3>Antigen Identification</h3>
              <p>Identifying immunogenic proteins and mapping epitopes to support lateral flow development and ELISA target designs.</p>
            </div>

            <div className="domain-card card-b reveal" style={{ minHeight: 'auto' }}>
              <div className="domain-num">THERAPEUTIC INTERVENTION</div>
              <h3>Antimicrobial Research</h3>
              <p>Exploring novel peptide designs and active molecules to limit resistance patterns in livestock populations.</p>
            </div>
          </div>

          <div style={{ marginTop: '64px', textAlign: 'center' }} className="reveal">
            <Link to="/contact" className="btn btn-primary">Partner With Our Lab
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
