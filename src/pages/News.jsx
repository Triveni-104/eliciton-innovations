import React, { useEffect } from 'react';
import Hero from '../components/Hero';
import SignalDivider from '../components/SignalDivider';

export default function News() {
  useEffect(() => {
    document.title = "Latest News — Eliciton Innovations";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', 'Eliciton updates, diagnostics validation reports, and partnerships in One Health zoonotic surveillance campaigns.');
    }
  }, []);

  return (
    <>
      <Hero
        eyebrow="News &amp; Media"
        title="LATEST NEWS"
        subtitle="From the lab and the field"
        compact={true}
      />

      <SignalDivider />

      {/* ================= NEWS ================= */}
      <section className="section-pad">
        <div className="wrap">
          <div className="section-head reveal">
            <div className="eyebrow">News &amp; Media</div>
            <h2>Updates from the field</h2>
            <p>Research updates, field trials, diagnostic platform validation campaigns, and milestones in veterinary disease surveillance.</p>
          </div>

          <div className="news-grid reveal-stagger">

            <div className="news-card">
              <div className="news-img">
                <svg style={{ width: '100%', height: '100%', background: 'linear-gradient(135deg,var(--plum),var(--plum-700))', display: 'flex', alignItems: 'center', justifyContent: 'center' }} viewBox="0 0 400 190">
                  <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fontFamily="'Outfit', sans-serif" fontWeight="700" fontSize="28" fill="#8DC6BF">ELICITON</text>
                </svg>
              </div>
              <div className="news-body">
                <div className="news-date">MARCH 14, 2026</div>
                <h3>Brucella validation trial completed in regional containment zones</h3>
                <p>Double-blind diagnostic evaluation runs of our stabilized ELISA assay formats completed in three validation zones.</p>
              </div>
            </div>

            <div className="news-card">
              <div className="news-img">
                <svg style={{ width: '100%', height: '100%', background: 'linear-gradient(135deg,var(--plum-700),var(--coral))', display: 'flex', alignItems: 'center', justifyContent: 'center' }} viewBox="0 0 400 190">
                  <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fontFamily="'Outfit', sans-serif" fontWeight="700" fontSize="28" fill="#fff">ELICITON</text>
                </svg>
              </div>
              <div className="news-body">
                <div className="news-date">JANUARY 12, 2026</div>
                <h3>Brucellosis surveillance campaign partnership announced</h3>
                <p>Joint surveillance project initiated with state reference laboratories to supply point-of-need lateral flow diagnostic strips.</p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
