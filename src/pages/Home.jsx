import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import SignalDivider from '../components/SignalDivider';

export default function Home() {
  useEffect(() => {
    document.title = "Eliciton Innovations — Veterinary Microbiology & In Vitro Diagnostics";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', 'Eliciton operates at the intersection of microbial science and diagnostic engineering — turning laboratory discovery into field-ready tools for the livestock industry.');
    }
  }, []);

  return (
    <>
      <Hero
        eyebrow="Innovation Grows Where Biology Meets Engineering"
        title={<>ELICITON <em>INNOVATIONS</em></>}
        subtitle={<>Advancing Animal Health Through Microbiology & <i>In Vitro Diagnostics</i></>}
        description="Developing veterinary diagnostics, microbiology solutions, vaccines, therapeutics and next-generation in vitro diagnostic technologies that empower laboratories, researchers, veterinarians, governments and the livestock industry under One Health Programme."
        primaryCtaText="Explore Solutions"
        primaryCtaLink="/products"
        secondaryCtaText="Our Research"
        secondaryCtaLink="/research"
      />

      <SignalDivider />

      {/* ================= ABOUT / DOMAINS ================= */}
      <section className="section-pad" id="about">
        <div className="wrap">
          <div className="section-head reveal">
            <div className="eyebrow">Our Domains</div>
            <h2>Two disciplines, one continuum of animal health</h2>
            <p>Eliciton operates at the intersection of microbial science and diagnostic engineering — turning laboratory discovery into field-ready tools for the livestock industry.</p>
          </div>
          <div className="domains-grid">

            <div className="domain-card card-a reveal" id="microbiology">
              <div className="domain-num">01 / MICROBIOLOGY</div>
              <div className="domain-illustration">
                <svg viewBox="0 0 400 230" fill="none">
                  <circle cx="90" cy="95" r="62" stroke="#8DC6BF" strokeWidth="1.4" opacity=".55" />
                  <circle cx="90" cy="95" r="46" stroke="#8DC6BF" strokeWidth="1.4" opacity=".8" />
                  <circle cx="72" cy="82" r="5" fill="#8DC6BF" opacity=".7" />
                  <circle cx="104" cy="70" r="3.5" fill="#584053" opacity=".55" />
                  <circle cx="112" cy="108" r="6" fill="#584053" opacity=".4" />
                  <circle cx="76" cy="115" r="4" fill="#8DC6BF" opacity=".6" />
                  <circle cx="255" cy="60" r="30" stroke="#584053" strokeWidth="1.4" opacity=".3" />
                  <circle cx="255" cy="60" r="30" stroke="#8DC6BF" strokeWidth="1.4" opacity=".5" strokeDasharray="4 4" />
                  <rect x="230" y="120" width="120" height="14" rx="7" stroke="#584053" strokeWidth="1.3" opacity=".4" />
                  <rect x="245" y="140" width="90" height="10" rx="5" stroke="#584053" strokeWidth="1.3" opacity=".3" />
                  <line x1="190" y1="20" x2="190" y2="200" stroke="#584053" strokeWidth="1" opacity=".08" />
                </svg>
              </div>
              <h3>Microbiology</h3>
              <p>Research and innovation in veterinary microbiology, bacterial pathogenesis, antimicrobial solutions, microbial diagnostics and applied biotechnology.</p>
              <Link to="/microbiology" className="domain-link">Explore Microbiology
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
              </Link>
            </div>

            <div className="domain-card card-b reveal" id="diagnostics">
              <div className="domain-num">02 / <i>IN VITRO DIAGNOSTICS</i></div>
              <div className="domain-illustration">
                <svg viewBox="0 0 400 230" fill="none">
                  <g opacity=".85">
                    <rect x="230" y="30" width="140" height="90" rx="8" stroke="#FCBC66" strokeWidth="1.4" />
                    <g stroke="#584053" strokeWidth="1" opacity=".45">
                      <circle cx="250" cy="50" r="6" /><circle cx="275" cy="50" r="6" /><circle cx="300" cy="50" r="6" /><circle cx="325" cy="50" r="6" /><circle cx="350" cy="50" r="6" />
                      <circle cx="250" cy="72" r="6" /><circle cx="275" cy="72" r="6" /><circle cx="300" cy="72" r="6" /><circle cx="325" cy="72" r="6" /><circle cx="350" cy="72" r="6" />
                      <circle cx="250" cy="94" r="6" /><circle cx="275" cy="94" r="6" /><circle cx="300" cy="94" r="6" /><circle cx="325" cy="94" r="6" /><circle cx="350" cy="94" r="6" />
                    </g>
                    <circle cx="300" cy="72" r="6" fill="#F97B4F" opacity=".6" />
                    <circle cx="275" cy="94" r="6" fill="#F97B4F" opacity=".4" />
                  </g>
                  <path d="M40 170 C70 90 110 90 140 170" stroke="#584053" strokeWidth="1.4" opacity=".3" fill="none" />
                  <line x1="40" y1="170" x2="180" y2="170" stroke="#584053" strokeWidth="1.4" opacity=".3" />
                  <circle cx="90" cy="60" r="3" fill="#FCBC66" />
                  <circle cx="120" cy="45" r="2" fill="#FCBC66" opacity=".7" />
                  <circle cx="70" cy="42" r="2" fill="#FCBC66" opacity=".7" />
                </svg>
              </div>
              <h3><i>In&nbsp;Vitro Diagnostics</i></h3>
              <p>Development of ELISA kits, lateral flow assays, molecular diagnostics, DIVA technologies and rapid veterinary diagnostic platforms.</p>
              <Link to="/diagnostics" className="domain-link">Explore Diagnostics
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* ================= SOLUTIONS ================= */}
      <section className="section-pad" style={{ background: 'var(--card)' }}>
        <div className="wrap">
          <div className="section-head reveal">
            <div className="eyebrow">Our Solutions</div>
            <h2>From detection to prevention to cure</h2>
            <p>Three integrated platforms carry a pathogen from first detection through to a therapeutic response, built on the same scientific foundation.</p>
          </div>
          <div className="solutions-grid reveal-stagger">
            <div className="solution-card s1">
              <div className="solution-icon"><svg viewBox="0 0 24 24" fill="none" strokeWidth="1.7"><path d="M9 3h6M10 3v5.5L4.5 18a2 2 0 001.7 3h11.6a2 2 0 001.7-3L14 8.5V3M7 15h10" strokeLinecap="round" strokeLinejoin="round" /></svg></div>
              <h3>Diagnostics</h3>
              <p>Modern laboratory diagnostics spanning ELISA, LFA, PCR and molecular visualization — engineered for accuracy at the point of need.</p>
              <div className="solution-tags"><span>ELISA</span><span>LFA</span><span>PCR</span></div>
            </div>
            <div className="solution-card s2">
              <div className="solution-icon"><svg viewBox="0 0 24 24" fill="none" strokeWidth="1.7"><path d="M12 2v6M12 22v-4M4.9 4.9l3.5 3.5M15.6 15.6l3.5 3.5M2 12h6M16 12h6M4.9 19.1l3.5-3.5M15.6 8.4l3.5-3.5" strokeLinecap="round" /></svg></div>
              <h3>Vaccines</h3>
              <p>Immunology-driven vaccine development from antibody design through sterile, bioreactor-scale manufacturing.</p>
              <div className="solution-tags"><span>DNA</span><span>Antibodies</span><span>Bioreactor</span></div>
            </div>
            <div className="solution-card s3">
              <div className="solution-icon"><svg viewBox="0 0 24 24" fill="none" strokeWidth="1.7"><path d="M8 2l1.5 4M16 2l-1.5 4M12 6v4M7 10h10l-1 4a4 4 0 01-8 0l-1-4z" strokeLinecap="round" strokeLinejoin="round" /></svg></div>
              <h3>Therapeutics</h3>
              <p>Peptide- and nanotechnology-enabled drug delivery for precision veterinary medicine.</p>
              <div className="solution-tags"><span>Peptides</span><span>Nano-delivery</span><span>Small molecules</span></div>
            </div>
            <div className="solution-card s1">
              <div className="solution-icon"><svg viewBox="0 0 24 24" fill="none" strokeWidth="1.7"><path d="M8 2l1.5 4M16 2l-1.5 4M12 6v4M7 10h10l-1 4a4 4 0 01-8 0l-1-4z" strokeLinecap="round" strokeLinejoin="round" /></svg></div>
              <h3>Academia to Commercial Products</h3>
              <p>Advancing scientific discoveries into validated diagnostic solutions through research, development, and manufacturing.</p>
              <div className="solution-tags"><span>Research</span><span>Validation</span><span>Manufacturing</span></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
