import React from 'react';
import { Link } from 'react-router-dom';

export default function Hero({ 
  eyebrow, 
  title, 
  subtitle, 
  description, 
  primaryCtaText, 
  primaryCtaLink, 
  secondaryCtaText, 
  secondaryCtaLink, 
  compact = false 
}) {
  return (
    <section className={`hero ${compact ? 'compact' : ''}`} id="home">
      <div className="hero-overlay"></div>
      <svg className="hero-signal" viewBox="0 0 1440 60" preserveAspectRatio="none" style={{ height: '60px' }}>
        <path d="M0,30 L200,30 L230,10 L260,50 L290,30 L1440,30" fill="none" stroke="rgba(255,255,255,0.12)" strokeWidth="1.5"/>
      </svg>
      <div className="wrap hero-grid">
        <div className="hero-copy reveal">
          <div className="eyebrow">{eyebrow}</div>
          <h1>{title}</h1>
          <p className="hero-sub">{subtitle}</p>
          {!compact && (
            <>
              {description && <p className="hero-desc">{description}</p>}
              <div className="hero-actions">
                {primaryCtaText && primaryCtaLink && (
                  <Link to={primaryCtaLink} className="btn btn-primary">
                    {primaryCtaText}
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2">
                      <path d="M5 12h14M13 6l6 6-6 6"/>
                    </svg>
                  </Link>
                )}
                {secondaryCtaText && secondaryCtaLink && (
                  <Link to={secondaryCtaLink} className="btn btn-ghost">
                    {secondaryCtaText}
                  </Link>
                )}
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
