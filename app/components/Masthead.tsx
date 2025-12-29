'use client';

import { useState, useEffect } from 'react';

export default function Masthead() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: 'About', href: '#about' },
    { label: 'News', href: '#news' },
    { label: 'Research', href: '#research' },
    { label: 'Teaching', href: '#teaching' },
    { label: 'Experience', href: '#experience' },
    { label: 'Service', href: '#service' },
    { label: 'Miscellaneous', href: '#miscellaneous' }
  ];

  // Close menu when clicking on a link
  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (isMenuOpen && !target.closest('.masthead')) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isMenuOpen]);

  return (
    <header className="masthead">
      <div className="masthead-inner">
        <div className="site-title">
          <a href="/">Yahya Masri</a>
        </div>

        <nav className="greedy-nav">
          <button
            className="greedy-nav-toggle"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle navigation"
          >
            <div className="hamburger">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </button>

          <ul className={`nav-items ${isMenuOpen ? 'open' : ''}`}>
            {navItems.map((item) => (
              <li key={item.href}>
                <a href={item.href} onClick={handleLinkClick}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="update-time">
          <em>Update Time: 2025-12-28</em>
        </div>
      </div>
    </header>
  );
}
