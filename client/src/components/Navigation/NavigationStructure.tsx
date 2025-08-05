import React, { useState, useEffect } from 'react';
import { ChevronDown, Globe, Menu, X, Home, BookOpen, Users, Store, Map } from 'lucide-react';
import { siteStructure, userTypeConfigs, type NavigationItem } from '../../types/navigation';

interface NavigationProps {
  currentLanguage: 'en' | 'th';
  onLanguageChange: (language: 'en' | 'th') => void;
  userType?: 'tourist' | 'local' | 'researcher' | 'business';
}

const Navigation: React.FC<NavigationProps> = ({ 
  currentLanguage, 
  onLanguageChange, 
  userType = 'tourist' 
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const iconMap = {
    Home, BookOpen, Users, Store, Map
  };

  const getLabel = (item: NavigationItem) => {
    return currentLanguage === 'th' ? item.labelTh : item.label;
  };

  const isRelevantForUser = (item: NavigationItem) => {
    if (!item.userTypes) return true;
    return item.userTypes.includes(userType);
  };

  const filteredNavigation = siteStructure.primaryNavigation.filter(isRelevantForUser);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-lg shadow-lg border-b border-gray-200' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:h-20">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="bg-gradient-to-r from-amber-600 to-red-600 p-2 rounded-xl shadow-lg">
              <Map className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl lg:text-2xl font-bold bg-gradient-to-r from-amber-700 to-red-700 bg-clip-text text-transparent">
                {currentLanguage === 'th' ? 'ที่นี่ วังสามหมอ' : 'Tourderwang'}
              </h1>
              <p className="text-xs text-gray-600 hidden sm:block">
                {currentLanguage === 'th' ? 'วัฒนธรรมผู้ไทย' : 'Phu Thai Culture'}
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {filteredNavigation.map((item) => (
              <div
                key={item.id}
                className="relative"
                onMouseEnter={() => setActiveDropdown(item.id)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button
                  className={`flex items-center space-x-1 font-medium transition-colors duration-300 ${
                    isScrolled 
                      ? 'text-gray-700 hover:text-amber-600' 
                      : 'text-white hover:text-amber-200'
                  }`}
                >
                  <span>{getLabel(item)}</span>
                  {item.children && <ChevronDown className="h-4 w-4" />}
                </button>

                {/* Dropdown Menu */}
                {item.children && activeDropdown === item.id && (
                  <div className="absolute top-full left-0 mt-2 w-80 bg-white rounded-2xl shadow-2xl border border-gray-100 py-4 z-50">
                    <div className="px-4 pb-3 border-b border-gray-100">
                      <h3 className="font-semibold text-gray-900">{getLabel(item)}</h3>
                      <p className="text-sm text-gray-600 mt-1">{item.description}</p>
                    </div>
                    <div className="py-2">
                      {item.children.filter(isRelevantForUser).map((child) => (
                        <a
                          key={child.id}
                          href={child.href}
                          className="block px-4 py-3 hover:bg-gray-50 transition-colors duration-200"
                        >
                          <div className="font-medium text-gray-900">{getLabel(child)}</div>
                          <div className="text-sm text-gray-600 mt-1">{child.description}</div>
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Language Toggle & Actions */}
          <div className="hidden lg:flex items-center space-x-4">
            {/* Language Toggle */}
            <button
              onClick={() => onLanguageChange(currentLanguage === 'en' ? 'th' : 'en')}
              className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-colors duration-300 ${
                isScrolled
                  ? 'text-gray-600 hover:text-amber-600 hover:bg-gray-100'
                  : 'text-white hover:text-amber-200 hover:bg-white/20'
              }`}
            >
              <Globe className="h-4 w-4" />
              <span className="text-sm font-medium">
                {currentLanguage === 'en' ? 'ไทย' : 'EN'}
              </span>
            </button>

            {/* User Type Specific CTA */}
            <button
              className={`px-6 py-2 rounded-xl font-medium transition-all duration-300 ${
                isScrolled
                  ? 'bg-amber-600 text-white hover:bg-amber-700'
                  : 'bg-white/20 backdrop-blur-sm text-white border border-white/30 hover:bg-white/30'
              }`}
            >
              {userTypeConfigs[userType].callToActions[0]}
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
              {/* Language Toggle Mobile */}
              <div className="flex justify-between items-center pb-4 border-b border-gray-200">
                <span className="font-medium text-gray-900">Language</span>
                <button
                  onClick={() => onLanguageChange(currentLanguage === 'en' ? 'th' : 'en')}
                  className="flex items-center space-x-2 text-amber-600 hover:text-amber-700"
                >
                  <Globe className="h-4 w-4" />
                  <span>{currentLanguage === 'en' ? 'ไทย' : 'English'}</span>
                </button>
              </div>

              {/* Mobile Navigation Items */}
              {siteStructure.mobileNavigation.map((item) => {
                const IconComponent = iconMap[item.icon as keyof typeof iconMap];
                return (
                  <a
                    key={item.id}
                    href={item.href}
                    className="flex items-center space-x-3 text-gray-700 font-medium hover:text-amber-600 transition-colors duration-300"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {IconComponent && <IconComponent className="h-5 w-5" />}
                    <span>{getLabel(item)}</span>
                  </a>
                );
              })}

              {/* Mobile CTA */}
              <div className="pt-4 border-t border-gray-200">
                <button className="w-full bg-amber-600 text-white px-4 py-3 rounded-xl font-medium hover:bg-amber-700 transition-colors duration-300">
                  {userTypeConfigs[userType].callToActions[0]}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;