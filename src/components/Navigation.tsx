"use client";
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'HOME PAGE', href: '/' },
    { label: 'ABOUT THE ARTIST', href: '/#about' },
    { label: 'AFRICAN ART COLLECTION', href: '/gallery' },
    { label: 'CREATIVE HUB', href: '/#events' },
    { label: 'BLOG', href: '/#blog' },
  ];

  const handleMobileMenuClick = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleNavItemClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('/#')) {
      e.preventDefault();
      const targetId = href.substring(2);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsMobileMenuOpen(false); // Close menu when nav item is clicked
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled || isMobileMenuOpen ? 'bg-background/80 backdrop-blur-md border-b border-border' : ''
    }`}>
      <div className="sacred-container py-6">
        <div className="flex items-center justify-between">
          <Link to="/" className="font-playfair text-2xl font-bold text-primary">
            Sacred Canvas
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.href.startsWith('/#') ? '/' : item.href}
                className="nav-link"
                onClick={(e) => handleNavItemClick(e as any, item.href)}
              >
                {item.label}
              </Link>
            ))}
          </div>
          
          {/* Mobile Hamburger Button */}
          <div className="md:hidden">
            <button 
              className="text-foreground p-2 rounded-lg hover:bg-accent/10 transition-colors"
              onClick={handleMobileMenuClick}
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-6 pb-6 border-t border-border/20 pt-6">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  to={item.href.startsWith('/#') ? '/' : item.href}
                  className="nav-link text-lg py-2 px-4 rounded-lg hover:bg-accent/10 transition-colors"
                  onClick={(e) => handleNavItemClick(e as any, item.href)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;