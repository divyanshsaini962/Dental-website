import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';

interface NavbarProps {
  onBookClick: () => void;
}

export default function Navbar({ onBookClick }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#top' },
    { label: 'Services', href: '#services' },
    { label: 'About', href: '#about' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'Insurance', href: '#insurance' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const targetElement = document.querySelector(href);
    if (targetElement) {
      const offset = isScrolled ? 70 : 80;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 bg-white transition-all duration-300 border-b border-border-divider/50 ${
        isScrolled 
          ? 'h-[60px] shadow-[0_2px_20px_rgba(0,0,0,0.06)]' 
          : 'h-[75px]'
      }`}
    >
      <div className="max-w-[1100px] mx-auto h-full px-4 flex items-center justify-between">
        {/* Brand Logo */}
        <a 
          href="#top" 
          onClick={(e) => handleLinkClick(e, '#top')}
          className="flex items-center gap-2 group focus:outline-none"
        >
          <span className="font-display text-xl sm:text-2xl font-bold text-navy tracking-tight group-hover:text-gold transition-colors duration-200">
            Dr. I Dental
          </span>
          <span className="text-xs uppercase tracking-[2px] font-semibold text-gold hidden sm:block mt-1">
            PC
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className="text-[14px] font-sans font-medium text-navy/90 hover:text-gold transition-colors duration-200 relative py-1 focus:outline-none focus:text-gold"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop CTA Button */}
        <div className="hidden md:block">
          <button
            onClick={onBookClick}
            className="h-10 px-5 bg-gold hover:bg-gold-hover text-white text-[14px] font-sans font-semibold tracking-[0.5px] rounded-[6px] transition-colors duration-200 flex items-center gap-1.5 focus:outline-none focus:ring-2 focus:ring-gold/50 cursor-pointer"
          >
            Book Appointment
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>
        </div>

        {/* Mobile menu triggers */}
        <div className="flex items-center md:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 text-navy hover:text-gold transition-colors duration-200 focus:outline-none"
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile drop-down Menu drawer */}
      <div
        className={`absolute top-full left-0 w-full bg-white border-b border-border-divider/70 shadow-lg transition-all duration-300 origin-top overflow-hidden md:hidden ${
          isMobileMenuOpen 
            ? 'max-h-[350px] opacity-100 py-4 pointer-events-auto' 
            : 'max-h-0 opacity-0 pointer-events-none'
        }`}
      >
        <div className="px-4 flex flex-col gap-3">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className="text-[15px] font-sans font-medium text-navy py-1.5 border-b border-border-divider/30 last:border-0 walk-link hover:text-gold transition-colors block text-left"
            >
              {link.label}
            </a>
          ))}
          <button
            onClick={() => {
              setIsMobileMenuOpen(false);
              onBookClick();
            }}
            className="w-full h-11 mt-2 bg-gold hover:bg-gold-hover text-white font-sans font-semibold text-[14px] tracking-[0.5px] rounded-[6px] transition-colors duration-200 flex items-center justify-center gap-2"
          >
            Book Appointment
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </header>
  );
}
