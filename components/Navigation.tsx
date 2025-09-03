"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import { useI18n } from '@/lib/i18n-context';
import LanguageSwitcher from './LanguageSwitcher';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { t, locale } = useI18n();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when clicking on menu items
  const handleMobileMenuClose = () => {
    setIsMobileMenuOpen(false);
  };

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const navItems = [
    { href: '#home', label: t.nav.home },
    { href: '#products', label: t.nav.products },
    { href: '#gallery', label: t.nav.gallery },
    { href: '#testimonials', label: t.nav.about },
    { href: '#contact', label: t.nav.contact },
  ];

  return (
    <>
      {/* Main Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 backdrop-blur-md shadow-lg ${
        isScrolled ? 'bg-white/90' : 'bg-white/65'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            
            {/* Logo */}
            <Link href="#home" className="flex items-center space-x-3 flex-shrink-0">
              <div className="relative w-12 h-12">
                <Image
                  src="/logo.png"
                  alt="Familia Pușcaș"
                  width={48}
                  height={48}
                  className="rounded-full object-cover"
                />
              </div>
              <div className="transition-colors duration-300 text-gray-900">
                <h1 className="text-lg font-heading font-bold">{locale === 'ro' ? 'Familia Pușcaș' : 'Pușcaș Family'}</h1>
                <p className="text-xs opacity-80">{locale === 'ro' ? 'Legume din Ocolis' : 'Vegetables from Ocolis'}</p>
              </div>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="font-medium transition-colors duration-300 hover:scale-105 text-gray-700 hover:text-emerald-600"
                >
                  {item.label}
                </a>
              ))}
              <LanguageSwitcher />
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg transition-colors duration-300 text-gray-700 hover:bg-gray-100"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
            
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div 
        className={`lg:hidden fixed inset-0 z-40 bg-black/30 backdrop-blur-sm transition-opacity duration-300 ${
          isMobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={handleMobileMenuClose}
      />

      {/* Mobile Menu Slide Panel */}
      <div className={`lg:hidden fixed top-0 right-0 h-full w-80 max-w-[85vw] z-50 bg-white shadow-2xl transition-transform duration-300 ease-in-out ${
        isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        
        {/* Mobile Menu Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-100">
          <div className="flex items-center space-x-3">
            <div className="relative w-10 h-10">
              <Image
                src="/logo.png"
                alt="Familia Pușcaș"
                width={40}
                height={40}
                className="rounded-full object-cover"
              />
            </div>
            <div>
              <h2 className="text-sm font-heading font-bold text-gray-900">{locale === 'ro' ? 'Familia Pușcaș' : 'Pușcaș Family'}</h2>
              <p className="text-xs text-gray-600">{locale === 'ro' ? 'Legume din Ocolis' : 'Vegetables from Ocolis'}</p>
            </div>
          </div>
          <button
            onClick={handleMobileMenuClose}
            className="p-2 rounded-lg text-gray-500 hover:bg-gray-100 transition-colors"
            aria-label="Close menu"
          >
            <X size={20} />
          </button>
        </div>

        {/* Mobile Menu Items */}
        <div className="px-6 py-4 space-y-1">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={handleMobileMenuClose}
              className="flex items-center px-4 py-4 text-gray-700 hover:bg-emerald-50 hover:text-emerald-600 rounded-xl transition-colors font-medium text-lg"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Language Switcher in Mobile Menu */}
        <div className="px-10 py-4 border-t border-gray-100">
          <LanguageSwitcher />
        </div>

      </div>
    </>
  );
}
