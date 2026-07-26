import React, { useEffect, useRef, useState } from 'react';
import Hero from '../components/Hero';
import SignalDivider from '../components/SignalDivider';

function StatItem({ targetValue, suffix = '', label }) {
  const [value, setValue] = useState(0);
  const elementRef = useRef(null);
  const animatedRef = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && !animatedRef.current) {
        animatedRef.current = true;
        
        const duration = 2000;
        const start = 0;
        const startTime = performance.now();

        const update = (now) => {
          const elapsed = now - startTime;
          const progress = Math.min(elapsed / duration, 1);
          // easeOutCubic
          const ease = 1 - Math.pow(1 - progress, 3);
          const currentVal = start + ease * (targetValue - start);

          setValue(currentVal);

          if (progress < 1) {
            requestAnimationFrame(update);
          } else {
            setValue(targetValue);
          }
        };
        requestAnimationFrame(update);
      }
    }, { threshold: 0.2 });

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }
    return () => observer.disconnect();
  }, [targetValue]);

  let displayValue;
  if (targetValue % 1 !== 0) {
    displayValue = value.toFixed(1);
  } else {
    displayValue = Math.floor(value).toLocaleString();
  }

  return (
    <div className="stat" ref={elementRef}>
      <b>{displayValue}{suffix}</b>
      <span>{label}</span>
    </div>
  );
}

export default function About() {
  useEffect(() => {
    document.title = "About Us — Eliciton Innovations";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', 'Learn more about Eliciton Innovations and how our veterinary diagnostics framework delivers confidence under field conditions.');
    }
  }, []);

  return (
    <>
      <Hero
        eyebrow="About Us"
        title={<>ABOUT ELICITON <em>INNOVATIONS</em></>}
        subtitle="Built for laboratories that can't afford to guess"
        compact={true}
      />

      <SignalDivider />

      {/* ================= WHY ELICITON ================= */}
      <section className="section-pad">
        <div className="wrap">
          <div className="section-head reveal">
            <div className="eyebrow">Why Eliciton</div>
            <h2>Built for laboratories that can't afford to guess</h2>
            <p>Veterinary diagnostics require speed without sacrifice. Here is how our framework delivers confidence under field conditions.</p>
          </div>
          <div className="why-grid reveal-stagger">
            <div className="why-item">
              <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 11-5.93-9.14M22 4L12 14.01l-3-3"/></svg>
              <h4>DIVA Capable</h4>
              <p>Distinguish vaccinated animals from naturally infected ones seamlessly.</p>
            </div>
            <div className="why-item">
              <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
              <h4>Rapid Results</h4>
              <p>ELISA assays optimized for single-hour cycles and lateral flow readouts in minutes.</p>
            </div>
            <div className="why-item">
              <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
              <h4>High Specificity</h4>
              <p>Monoclonal antibodies design limits cross-reactivity with matching animal serum proteins.</p>
            </div>
            <div className="why-item">
              <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z"/><path d="M3.27 6.96L12 12.01l8.73-5.05M12 22.08V12"/></svg>
              <h4>Stable & Field-Ready</h4>
              <p>Lyophilized components shelf-stable at room temperature across tropical veterinary operations.</p>
            </div>
            <div className="why-item">
              <svg viewBox="0 0 24 24" fill="none" strokeWidth="2"><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/><path d="M12 6v6l4 2"/></svg>
              <h4>Pathogen Bench Strength</h4>
              <p>Covering Brucella, Pasteurella, FMDV, PPRV, and other high-priority One Health zoonotic bacterial isolates.</p>
            </div>
            <div className="why-item">
              <svg viewBox="0 0 24 24" fill="none" strokeWidth="2"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/></svg>
              <h4>Validation Compliance</h4>
              <p>All kits cross-validated against regional reference serum repository banks.</p>
            </div>
            <div className="why-item">
              <svg viewBox="0 0 24 24" fill="none" strokeWidth="2"><path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1zM4 22v-7"/></svg>
              <h4>One Health Aligned</h4>
              <p>Integrated platforms tracing diagnostic patterns to optimize national livestock disease containment programs.</p>
            </div>
            <div className="why-item">
              <svg viewBox="0 0 24 24" fill="none" strokeWidth="2"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>
              <h4>Open API Systems</h4>
              <p>Standard colorimetric and fluorometric plate designs matching legacy optical reader installations.</p>
            </div>
          </div>

          {/* ===== stats strip ===== */}
          <div className="stats-strip reveal-stagger" id="statsStrip">
            <StatItem targetValue={99.8} label="ELISA Assay R² Accuracy" />
            <StatItem targetValue={10} label="Zoonotic Pathogens Covered" />
            <StatItem targetValue={60} suffix="m" label="Lateral Flow Run Time" />
            <StatItem targetValue={15000} label="Validated Serum Samples" />
          </div>
        </div>
      </section>
    </>
  );
}
