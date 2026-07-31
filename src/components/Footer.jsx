import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Footer() {
  const location = useLocation();

  const handleLinkClick = (e, path) => {
    if (location.pathname === path) {
      e.preventDefault();
    }
  };

  return (
    <footer>
      <div className="wrap">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="logo">
              <img 
                src="/logo.png" 
                alt="Eliciton Innovations Logo" 
                className="logo-white"
                style={{ height: '52px', width: 'auto', objectFit: 'contain', display: 'block', borderRadius: '4px' }} 
              />
            </div>
            <p>Innovation grows where biology meets engineering. Veterinary diagnostics, microbiology and therapeutics for the livestock industry.</p>
            <div className="footer-social">
              <a href="#" aria-label="LinkedIn">
                <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.7">
                  <rect x="3" y="3" width="18" height="18" rx="3"/><path d="M7 10v7M7 7v.01M11 17v-4.5a2 2 0 014 0V17M11 12.5V17"/>
                </svg>
              </a>
              <a href="#" aria-label="Twitter/X">
                <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.7">
                  <path d="M4 4l16 16M20 4L4 20"/>
                </svg>
              </a>
              <a href="#" aria-label="YouTube">
                <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.7">
                  <rect x="3" y="6" width="18" height="12" rx="3"/><path d="M11 10l4 2-4 2v-4z"/>
                </svg>
              </a>
            </div>
          </div>
          <div className="footer-col">
            <h5>Quick Links</h5>
            <Link to="/about" onClick={(e) => handleLinkClick(e, '/about')}>About</Link>
            <Link to="/research" onClick={(e) => handleLinkClick(e, '/research')}>Research</Link>
            <Link to="/products" onClick={(e) => handleLinkClick(e, '/products')}>Products</Link>
            <Link to="/news" onClick={(e) => handleLinkClick(e, '/news')}>News</Link>
            <Link to="/contact" onClick={(e) => handleLinkClick(e, '/contact')}>Contact</Link>
          </div>
          <div className="footer-col">
            <h5>Products</h5>
            <Link to="/diagnostics" onClick={(e) => handleLinkClick(e, '/diagnostics')}>ELISA Kits</Link>
            <Link to="/diagnostics" onClick={(e) => handleLinkClick(e, '/diagnostics')}>Lateral Flow Assays</Link>
            <Link to="/diagnostics" onClick={(e) => handleLinkClick(e, '/diagnostics')}>Molecular Diagnostics</Link>
            <Link to="/microbiology" onClick={(e) => handleLinkClick(e, '/microbiology')}>DIVA Technologies</Link>
          </div>
          <div className="footer-col">
            <h5>Newsletter</h5>
            <p style={{ fontSize: '13px', color: 'rgba(255,255,255,.5)', lineHeight: '1.6', marginBottom: '14px' }}>
              Research updates, direct to your inbox.
            </p>
            <form className="newsletter-row" onSubmit={(e) => e.preventDefault()}>
              <input type="email" placeholder="Email address" />
              <button aria-label="Subscribe">
                <svg viewBox="0 0 24 24" fill="none" strokeWidth="2">
                  <path d="M5 12h14M13 6l6 6-6 6"/>
                </svg>
              </button>
            </form>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 Eliciton Innovations Pvt. Ltd. All rights reserved.</span>
          <span><a href="#">Privacy Policy</a> &nbsp;·&nbsp; <a href="#">Terms of Use</a></span>
        </div>
      </div>
    </footer>
  );
}
