import React, { useEffect } from 'react';
import Hero from '../components/Hero';
import SignalDivider from '../components/SignalDivider';

export default function Research() {
  useEffect(() => {
    document.title = "Research & Evidence — Eliciton Innovations";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', 'Explore our research stages, from pathogen profiling to lead optimization and double-blind field validation studies.');
    }
  }, []);

  return (
    <>
      <Hero
        eyebrow="Research &amp; Innovation"
        title="Research &amp; Evidence"
        subtitle="A pipeline built one validated stage at a time"
        compact={true}
      />

      <SignalDivider />

      {/* ================= RESEARCH ================= */}
      <section className="section-pad research">
        <div className="dna-bg">
          <svg viewBox="0 0 1440 800" fill="none" preserveAspectRatio="none">
            <path className="dna-strand" d="M100,50 Q150,150 100,250 T100,450 T100,650" stroke="rgba(141,198,191,0.06)" strokeWidth="2.5" fill="none" />
            <path className="dna-strand" d="M150,50 Q100,150 150,250 T150,450 T150,650" stroke="rgba(252,188,102,0.05)" strokeWidth="1.5" fill="none" />
            <path className="dna-strand" d="M1300,100 Q1350,250 1300,400 T1300,700" stroke="rgba(249,123,79,0.06)" strokeWidth="2" fill="none" />
            <path className="dna-strand" d="M1350,100 Q1300,250 1350,400 T1350,700" stroke="rgba(141,198,191,0.05)" strokeWidth="1.5" fill="none" />
          </svg>
        </div>

        <div className="wrap research-grid">
          <div className="research-left">
            <div className="section-head reveal">
              <div className="eyebrow">Our Research</div>
              <h2>A pipeline built one validated stage at a time</h2>
              <p>From first isolate to field-deployed platform — every stage carries its own evidence bar before it moves forward.</p>
            </div>

            <div className="timeline">
              <div className="timeline-line"></div>
              <div className="timeline-track">

              <div className="t-item active reveal">
                <div className="t-dot"></div>
                <h3>Pathogen Profiling <span className="t-tag">Current Phase</span></h3>
                <p>Running multi-locus sequence typing (MLST) and whole genome sequencing (WGS) on bacterial pathogens isolated from active dairy herds in regional veterinary containment zones.</p>
              </div>

              <div className="t-item reveal">
                <div className="t-dot"></div>
                <h3>Recombinant Antigen Design <span className="t-tag">Validation</span></h3>
                <p>Expression of outer membrane proteins in bacterial systems to select high-yield candidates for immunogenicity validation runs.</p>
              </div>

              <div className="t-item reveal">
                <div className="t-dot"></div>
                <h3>Monoclonal Antibody Selection <span className="t-tag">Lead Optimization</span></h3>
                <p>Hybridoma screening and affinity maturation protocols aimed at identifying antibody pairs with sub-nanomolar dissociation constants for target pathogens.</p>
              </div>

              <div className="t-item reveal">
                <div className="t-dot"></div>
                <h3>Diagnostic Kit Prototype <span className="t-tag">In-Vitro Testing</span></h3>
                <p>Assembling physical solid-phase assays, testing sensitivity baselines with synthetic targets, and defining calibration curves.</p>
              </div>

              <div className="t-item reveal">
                <div className="t-dot"></div>
                <h3>Field Validation Studies <span className="t-tag">Regulatory Preview</span></h3>
                <p>Cooperating with livestock research cooperatives to run dual-blind screening runs alongside reference PCR and microbiology protocols.</p>
              </div>

            </div>
          </div>
          </div>

          <div className="research-right reveal">
            <img src="/TRL.png" alt="Technology Readiness Level" className="trl-image" />
          </div>
        </div>
      </section>
    </>
  );
}
