import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';

const Header: React.FC = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { path: '/', label: 'Startseite' },
    { path: '/produkte', label: 'Produkte' },
    { path: '/naturio', label: 'Naturio' },
    { path: '/forschung', label: 'Forschung' },
    { path: '/unternehmen', label: 'Unternehmen' },
    { path: '/blog', label: 'Blog' },
    { path: '/kontakt', label: 'Kontakt' },
  ];

  return (
    <header className={`header ${isSticky ? 'sticky-header' : ''}`}>
      <div className="header-content">
        <Link to="/" className="logo-container">
          <img src="/mimi-tech-ai-optimized.svg" alt="MIMI Tech AI" className="logo" />
        </Link>

        <button 
          className={`mobile-menu-button ${isMobileMenuOpen ? 'active' : ''}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav className={`navigation ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`nav-item ${location.pathname === item.path ? 'active' : ''}`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
