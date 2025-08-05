import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'wouter';
import { Menu, X, Globe, User, ChevronDown, Home, BookOpen, Users, Store, Map, ExternalLink } from 'lucide-react';

interface NavigationProps {
  currentLanguage?: 'en' | 'th';
  onLanguageChange?: (language: 'en' | 'th') => void;
}

const Navigation: React.FC<NavigationProps> = ({ 
  currentLanguage = 'th', 
  onLanguageChange = () => {} 
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const navigationItems = {
    th: [
      { label: 'หน้าแรก', href: '/', icon: Home },
      { label: 'วัฒนธรรม', href: '/culture', icon: BookOpen },
      { label: 'ชุมชน', href: '/community', icon: Users },
      { label: 'ธุรกิจ', href: '/business', icon: Store },
      { label: 'สำรวจ', href: '/explore', icon: Map }
    ],
    en: [
      { label: 'Home', href: '/', icon: Home },
      { label: 'Culture', href: '/culture', icon: BookOpen },
      { label: 'Community', href: '/community', icon: Users },
      { label: 'Business', href: '/business', icon: Store },
      { label: 'Explore', href: '/explore', icon: Map }
    ]
  };

  const currentNavItems = navigationItems[currentLanguage];

  const isActiveRoute = (href: string) => {
    if (href === '/') return location === '/';
    return location.startsWith(href);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-lg shadow-lg border-b border-gray-200'
          : 'bg-white/80 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo and Site Title */}
          <Link href="/" className="flex items-center space-x-3 hover:opacity-80 transition-opacity duration-300">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-amber-600 to-red-600 rounded-2xl flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-lg sm:text-xl">ที</span>
            </div>
            <div className="hidden sm:block">
              <div className="font-bold text-gray-900 text-lg sm:text-xl">
                {currentLanguage === 'th' ? 'ที่นี่ วังสามหมอ' : 'Tourderwang'}
              </div>
              <div className="text-xs sm:text-sm text-gray-600">
                {currentLanguage === 'th' ? 'วัฒนธรรมผู้ไทย' : 'Phu Thai Heritage'}
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {currentNavItems.map((item) => {
              const IconComponent = item.icon;
              const isActive = isActiveRoute(item.href);
              
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-2xl font-medium transition-all duration-300 touch-target ${
                    isActive
                      ? 'bg-gradient-to-r from-amber-600 to-red-600 text-white shadow-lg'
                      : 'text-gray-700 hover:text-amber-600 hover:bg-amber-50'
                  }`}
                >
                  <IconComponent className="h-4 w-4" />
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </nav>

          {/* Language Toggle and Mobile Menu Button */}
          <div className="flex items-center space-x-4">
            {/* Language Toggle */}
            <div className="hidden sm:flex bg-white/80 backdrop-blur-sm rounded-full p-1 shadow-lg border border-gray-200">
              <button
                onClick={() => onLanguageChange('th')}
                className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-300 ${
                  currentLanguage === 'th' 
                    ? 'bg-amber-600 text-white shadow-md' 
                    : 'text-gray-600 hover:text-amber-600'
                }`}
              >
                ไทย
              </button>
              <button
                onClick={() => onLanguageChange('en')}
                className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-300 ${
                  currentLanguage === 'en' 
                    ? 'bg-amber-600 text-white shadow-md' 
                    : 'text-gray-600 hover:text-amber-600'
                }`}
              >
                EN
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 rounded-2xl text-gray-700 hover:text-amber-600 hover:bg-amber-50 transition-all duration-300 touch-target"
              aria-label="Toggle navigation menu"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="py-4 border-t border-gray-200 bg-white/95 backdrop-blur-sm rounded-b-3xl shadow-lg">
            {/* Mobile Language Toggle */}
            <div className="flex justify-center mb-4 sm:hidden">
              <div className="bg-gray-100 rounded-full p-1">
                <button
                  onClick={() => onLanguageChange('th')}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    currentLanguage === 'th' 
                      ? 'bg-amber-600 text-white' 
                      : 'text-gray-600'
                  }`}
                >
                  ไทย
                </button>
                <button
                  onClick={() => onLanguageChange('en')}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    currentLanguage === 'en' 
                      ? 'bg-amber-600 text-white' 
                      : 'text-gray-600'
                  }`}
                >
                  English
                </button>
              </div>
            </div>

            {/* Mobile Navigation Items */}
            <nav className="space-y-2 px-4">
              {currentNavItems.map((item) => {
                const IconComponent = item.icon;
                const isActive = isActiveRoute(item.href);
                
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`flex items-center space-x-3 px-4 py-3 rounded-2xl font-medium transition-all duration-300 w-full touch-target ${
                      isActive
                        ? 'bg-gradient-to-r from-amber-600 to-red-600 text-white shadow-lg'
                        : 'text-gray-700 hover:text-amber-600 hover:bg-amber-50'
                    }`}
                  >
                    <IconComponent className="h-5 w-5" />
                    <span className="mobile-text-optimize">{item.label}</span>
                  </Link>
                );
              })}
            </nav>

            {/* Mobile Additional Actions */}
            <div className="mt-6 px-4 pt-4 border-t border-gray-200">
              <button className="w-full bg-gradient-to-r from-amber-600 to-red-600 text-white py-3 px-4 rounded-2xl font-semibold hover:from-amber-700 hover:to-red-700 transition-all duration-300 touch-target flex items-center justify-center space-x-2">
                <User className="h-5 w-5" />
                <span>{currentLanguage === 'th' ? 'เข้าสู่ระบบ' : 'Sign In'}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navigation;