import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isDrawerOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isDrawerOpen]);

  useEffect(() => {
    setIsDrawerOpen(false);
  }, [location.pathname]);

  const handleLinkClick = (e, path) => {
    if (location.pathname === path) {
      e.preventDefault();
      setIsDrawerOpen(false);
    }
  };

  return (
    <>
      <header id="siteHeader" className={isScrolled ? 'scrolled' : ''}>
        <div className="wrap nav-inner">
          <Link to="/" onClick={(e) => handleLinkClick(e, '/')} className="logo">
            <img 
              src="/logo.png" 
              alt="Eliciton Innovations Logo" 
              className={isScrolled ? '' : 'logo-white'}
              style={{ height: '38px', width: 'auto', objectFit: 'contain', display: 'block', borderRadius: '4px' }} 
            />
          </Link>
          <nav className="links">
            <NavLink to="/" end onClick={(e) => handleLinkClick(e, '/')}>Home</NavLink>
            <NavLink to="/about" onClick={(e) => handleLinkClick(e, '/about')}>About</NavLink>
            <NavLink to="/microbiology" onClick={(e) => handleLinkClick(e, '/microbiology')}>Microbiology</NavLink>
            <NavLink to="/diagnostics" onClick={(e) => handleLinkClick(e, '/diagnostics')}>IVD</NavLink>
            <NavLink to="/research" onClick={(e) => handleLinkClick(e, '/research')}>Research</NavLink>
            <NavLink to="/products" onClick={(e) => handleLinkClick(e, '/products')}>Products</NavLink>
            <NavLink to="/news" onClick={(e) => handleLinkClick(e, '/news')}>News</NavLink>
            <NavLink to="/contact" className="nav-cta" onClick={(e) => handleLinkClick(e, '/contact')}>Contact</NavLink>
          </nav>
          <button 
            className="menu-btn" 
            id="menuBtn" 
            aria-label="Open menu" 
            aria-expanded={isDrawerOpen} 
            onClick={() => setIsDrawerOpen(true)}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M3 6h18M3 12h18M3 18h18" strokeWidth="1.8" strokeLinecap="round" />
            </svg>
          </button>
        </div>
      </header>

      <div 
        className={`drawer-overlay ${isDrawerOpen ? 'open' : ''}`} 
        id="drawerOverlay"
        onClick={() => setIsDrawerOpen(false)}
      ></div>
      <div className={`drawer ${isDrawerOpen ? 'open' : ''}`} id="drawer">
        <button 
          className="drawer-close" 
          id="drawerClose" 
          aria-label="Close menu"
          onClick={() => setIsDrawerOpen(false)}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#584053">
            <path d="M6 6l12 12M18 6L6 18" strokeWidth="1.8" strokeLinecap="round" />
          </svg>
        </button>
        <NavLink to="/" end onClick={(e) => handleLinkClick(e, '/')}>Home</NavLink>
        <NavLink to="/about" onClick={(e) => handleLinkClick(e, '/about')}>About</NavLink>
        <NavLink to="/microbiology" onClick={(e) => handleLinkClick(e, '/microbiology')}>Microbiology</NavLink>
        <NavLink to="/diagnostics" onClick={(e) => handleLinkClick(e, '/diagnostics')}><i>In Vitro Diagnostics</i></NavLink>
        <NavLink to="/research" onClick={(e) => handleLinkClick(e, '/research')}>Research</NavLink>
        <NavLink to="/products" onClick={(e) => handleLinkClick(e, '/products')}>Products</NavLink>
        <NavLink to="/news" onClick={(e) => handleLinkClick(e, '/news')}>News</NavLink>
        <NavLink to="/contact" className="btn btn-primary nav-cta" onClick={(e) => handleLinkClick(e, '/contact')}>Contact Us</NavLink>
      </div>
    </>
  );
}
