import React from 'react';
import { MapPin, Users, Briefcase, Store } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen mobile-bg-optimize bg-gradient-to-br from-amber-50 via-orange-50 to-red-50 overflow-hidden">
      {/* Background Pattern - Optimized for mobile */}
      <div className="absolute inset-0 opacity-5 gpu-accelerated">
        <div className="absolute top-10 sm:top-20 left-5 sm:left-20 w-20 sm:w-32 h-20 sm:h-32 bg-amber-600 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-20 sm:top-40 right-5 sm:right-20 w-16 sm:w-32 h-16 sm:h-32 bg-red-600 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-16 sm:bottom-20 left-1/2 w-12 sm:w-32 h-12 sm:h-32 bg-orange-600 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="text-center">
          {/* Logo/Brand - Mobile optimized */}
          <div className="flex flex-col sm:flex-row justify-center items-center mb-6 sm:mb-8">
            <div className="bg-gradient-to-r from-amber-600 to-red-600 p-3 rounded-2xl shadow-lg mb-3 sm:mb-0">
              <MapPin className="h-8 w-8 text-white" aria-label="Location pin icon" />
            </div>
            <h1 className="sm:ml-4 text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-amber-700 to-red-700 bg-clip-text text-transparent mobile-text-optimize text-center sm:text-left">
              ที่นี่ วังสามหมอ
            </h1>
          </div>

          {/* Main Headline - Better mobile typography */}
          <h2 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-extrabold text-gray-900 mb-4 sm:mb-6 leading-tight mobile-text-optimize">
            Discover the Rich
            <span className="block bg-gradient-to-r from-amber-600 via-orange-600 to-red-600 bg-clip-text text-transparent">
              Phu Thai Culture
            </span>
          </h2>

          <p className="text-lg sm:text-xl md:text-2xl text-gray-700 mb-6 sm:mb-8 max-w-4xl mx-auto leading-relaxed mobile-text-optimize px-2 sm:px-0">
            Explore authentic Phu Thai heritage, find local opportunities, and connect with the vibrant community of Wang Sam Mo district, Udon Thani.
          </p>

          {/* Stats - Mobile optimized grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6 mb-8 sm:mb-12 max-w-4xl mx-auto px-2 sm:px-0">
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-4 sm:p-6 shadow-lg border border-white/20 hover:shadow-xl transition-all duration-300 touch-feedback">
              <Users className="h-6 sm:h-8 w-6 sm:w-8 text-amber-600 mx-auto mb-2" aria-label="Cultural sites icon" />
              <div className="text-xl sm:text-2xl font-bold text-gray-900">50+</div>
              <div className="text-xs sm:text-sm text-gray-600 mobile-text-optimize">Cultural Sites</div>
            </div>
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-4 sm:p-6 shadow-lg border border-white/20 hover:shadow-xl transition-all duration-300 touch-feedback">
              <Briefcase className="h-6 sm:h-8 w-6 sm:w-8 text-orange-600 mx-auto mb-2" aria-label="Job opportunities icon" />
              <div className="text-xl sm:text-2xl font-bold text-gray-900">200+</div>
              <div className="text-xs sm:text-sm text-gray-600 mobile-text-optimize">Job Opportunities</div>
            </div>
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-4 sm:p-6 shadow-lg border border-white/20 hover:shadow-xl transition-all duration-300 touch-feedback">
              <Store className="h-6 sm:h-8 w-6 sm:w-8 text-red-600 mx-auto mb-2" aria-label="Local businesses icon" />
              <div className="text-xl sm:text-2xl font-bold text-gray-900">150+</div>
              <div className="text-xs sm:text-sm text-gray-600 mobile-text-optimize">Local Businesses</div>
            </div>
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-4 sm:p-6 shadow-lg border border-white/20 hover:shadow-xl transition-all duration-300 touch-feedback">
              <MapPin className="h-6 sm:h-8 w-6 sm:w-8 text-amber-700 mx-auto mb-2" aria-label="Tour routes icon" />
              <div className="text-xl sm:text-2xl font-bold text-gray-900">25+</div>
              <div className="text-xs sm:text-sm text-gray-600 mobile-text-optimize">Tour Routes</div>
            </div>
          </div>

          {/* CTA Buttons - Mobile optimized */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-4 sm:px-0">
            <button 
              className="w-full sm:w-auto bg-gradient-to-r from-amber-600 to-red-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-2xl font-semibold text-base sm:text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 hover:from-amber-700 hover:to-red-700 touch-target touch-feedback"
              aria-label="Explore Phu Thai culture and heritage"
            >
              Explore Culture
            </button>
            <button 
              className="w-full sm:w-auto bg-white/80 backdrop-blur-sm text-gray-900 px-6 sm:px-8 py-3 sm:py-4 rounded-2xl font-semibold text-base sm:text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 border border-gray-200 hover:bg-white touch-target touch-feedback"
              aria-label="Find local jobs and businesses in Wang Sam Mo"
            >
              Find Jobs & Businesses
            </button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 text-center">
            <p className="text-sm text-gray-600 mb-4">Trusted by the Wang Sam Mo community</p>
            <div className="flex justify-center items-center space-x-8 opacity-60">
              <div className="text-lg font-semibold">🏛️ Cultural Heritage</div>
              <div className="text-lg font-semibold">🤝 Community Support</div>
              <div className="text-lg font-semibold">🌟 Local Pride</div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
};

export default Hero;