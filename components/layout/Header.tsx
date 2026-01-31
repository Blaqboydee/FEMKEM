'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import MobileNav from './MobileNav';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState('/');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/services', label: 'Services' },
    { href: '/projects', label: 'Projects' },
    { href: '/contact', label: 'Contact' }
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled 
          ? 'bg-white/80 backdrop-blur-xl shadow-lg shadow-black/5 border-b border-gray-200/50' 
          : 'bg-gradient-to-b from-black/60 via-black/40 to-transparent backdrop-blur-md'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo with animated gradient */}
          <Link href="/" className="flex items-center group relative z-50" onClick={() => setActiveLink('/')}>
            <div className="relative">
              <span className={`text-2xl md:text-3xl font-black transition-all duration-500 bg-clip-text ${
                scrolled 
                  ? 'text-transparent bg-gradient-to-r from-[#1E7F43] via-[#2A9D5F] to-[#1E7F43] bg-[length:200%_auto] animate-gradient' 
                  : 'text-white drop-shadow-[0_2px_8px_rgba(255,255,255,0.3)]'
              }`}>
                Fekem
              </span>
              {/* Decorative dot */}
              <span className={`absolute -right-2 -top-1 w-2 h-2 rounded-full transition-all duration-500 ${
                scrolled ? 'bg-[#1E7F43]' : 'bg-white'
              } group-hover:scale-150`} />
            </div>
          </Link>

          {/* Desktop Navigation with modern hover effects */}
          <div className="hidden md:flex items-center gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setActiveLink(link.href)}
                className={`relative px-5 py-2.5 font-semibold transition-all duration-300 rounded-lg group ${
                  scrolled 
                    ? 'text-gray-700 hover:text-[#1E7F43]' 
                    : 'text-white/90 hover:text-white'
                } ${activeLink === link.href ? (scrolled ? 'text-[#1E7F43]' : 'text-white') : ''}`}
              >
                {link.label}
                {/* Animated underline */}
                <span className={`absolute bottom-1 left-1/2 -translate-x-1/2 h-0.5 transition-all duration-300 rounded-full ${
                  scrolled ? 'bg-[#1E7F43]' : 'bg-white'
                } ${activeLink === link.href ? 'w-8' : 'w-0 group-hover:w-8'}`} />
                {/* Hover background */}
                <span className={`absolute inset-0 rounded-lg transition-all duration-300 -z-10 ${
                  scrolled 
                    ? 'bg-gray-100 opacity-0 group-hover:opacity-100' 
                    : 'bg-white/10 opacity-0 group-hover:opacity-100'
                }`} />
              </Link>
            ))}
            
            {/* Enhanced CTA Button with gradient and shadow */}
            <Link
              href="/contact"
              className={`relative ml-4 px-7 py-3 font-bold rounded-full overflow-hidden group transition-all duration-500 transform hover:scale-105 ${
                scrolled 
                  ? 'bg-gradient-to-r from-[#1E7F43] to-[#2A9D5F] text-white shadow-lg shadow-[#1E7F43]/30 hover:shadow-xl hover:shadow-[#1E7F43]/40' 
                  : 'bg-white text-[#1E7F43] shadow-lg shadow-white/20 hover:shadow-xl hover:shadow-white/30'
              }`}
            >
              <span className="relative z-10 flex items-center gap-2">
                Get Started
                <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
              {/* Animated shine effect */}
              <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
            </Link>
          </div>

          {/* Enhanced Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`md:hidden relative p-3 rounded-xl transition-all duration-300 z-50 transform hover:scale-105 ${
              scrolled 
                ? 'bg-gray-100 hover:bg-gray-200 shadow-md' 
                : 'bg-white/20 hover:bg-white/30 backdrop-blur-sm shadow-lg shadow-black/10'
            }`}
            aria-label="Toggle menu"
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              <span className={`w-full h-0.5 rounded-full transition-all duration-300 ${
                scrolled ? 'bg-[#1E7F43]' : 'bg-white'
              } ${mobileMenuOpen ? 'rotate-45 translate-y-[9px]' : ''}`} />
              <span className={`w-full h-0.5 rounded-full transition-all duration-300 ${
                scrolled ? 'bg-[#1E7F43]' : 'bg-white'
              } ${mobileMenuOpen ? 'opacity-0' : ''}`} />
              <span className={`w-full h-0.5 rounded-full transition-all duration-300 ${
                scrolled ? 'bg-[#1E7F43]' : 'bg-white'
              } ${mobileMenuOpen ? '-rotate-45 -translate-y-[9px]' : ''}`} />
            </div>
          </button>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <MobileNav isOpen={mobileMenuOpen} navLinks={navLinks} onClose={() => setMobileMenuOpen(false)} />
    </header>
  );
}