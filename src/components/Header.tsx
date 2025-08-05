import React, { useState, useEffect } from 'react';
import { MapPin, Menu, X, Globe, User } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Culture', href: '#culture' },
    { label: 'Jobs', href: '#jobs' },
    { label: 'Business', href: '#business' },
    { label: 'Map', href: '#map' },
    { label: 'Community', href: '#community' }
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-lg shadow-lg border-b border-gray-200'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-20">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="bg-gradient-to-r from-amber-600 to-red-600 p-2 rounded-xl shadow-lg">
              <MapPin className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-amber-700 to-red-700 bg-clip-text text-transparent">
                ที่นี่ วังสามหมอ
              </h1>
              <p className="text-xs text-gray-600 hidden sm:block">Tourderwang</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={`font-medium transition-colors duration-300 hover:text-amber-600 ${
                  isScrolled ? 'text-gray-700' : 'text-white hover:text-amber-200'
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center space-x-4">
            <button className="flex items-center space-x-2 text-gray-600 hover:text-amber-600 transition-colors duration-300">
              <Globe className="h-4 w-4" />
              <span className="text-sm">EN</span>
            </button>
            <button
              className={`flex items-center space-x-2 px-4 py-2 rounded-xl font-medium transition-all duration-300 ${
                isScrolled
                  ? 'bg-amber-600 text-white hover:bg-amber-700'
                  : 'bg-white/20 backdrop-blur-sm text-white border border-white/30 hover:bg-white/30'
              }`}
            >
              <User className="h-4 w-4" />
              <span>Sign In</span>
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`lg:hidden p-2 rounded-lg transition-colors duration-300 ${
              isScrolled
                ? 'text-gray-700 hover:bg-gray-100'
                : 'text-white hover:bg-white/20'
            }`}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-lg shadow-lg border-b border-gray-200">
            <div className="px-4 py-6 space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="block text-gray-700 font-medium hover:text-amber-600 transition-colors duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <div className="border-t border-gray-200 pt-4 space-y-3">
                <button className="flex items-center space-x-2 text-gray-600 hover:text-amber-600 transition-colors duration-300">
                  <Globe className="h-4 w-4" />
                  <span>Language: English</span>
                </button>
                <button className="w-full flex items-center justify-center space-x-2 bg-amber-600 text-white px-4 py-3 rounded-xl font-medium hover:bg-amber-700 transition-colors duration-300">
                  <User className="h-4 w-4" />
                  <span>Sign In</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;