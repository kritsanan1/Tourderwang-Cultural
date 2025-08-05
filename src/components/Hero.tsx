import React from 'react';
import { MapPin, Users, Briefcase, Store } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-red-50 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-32 h-32 bg-amber-600 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-32 h-32 bg-red-600 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/2 w-32 h-32 bg-orange-600 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="text-center">
          {/* Logo/Brand */}
          <div className="flex justify-center items-center mb-8">
            <div className="bg-gradient-to-r from-amber-600 to-red-600 p-3 rounded-2xl shadow-lg">
              <MapPin className="h-8 w-8 text-white" />
            </div>
            <h1 className="ml-4 text-3xl sm:text-4xl font-bold bg-gradient-to-r from-amber-700 to-red-700 bg-clip-text text-transparent">
              ที่นี่ วังสามหมอ
            </h1>
          </div>

          {/* Main Headline */}
          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-gray-900 mb-6 leading-tight">
            Discover the Rich
            <span className="block bg-gradient-to-r from-amber-600 via-orange-600 to-red-600 bg-clip-text text-transparent">
              Phu Thai Culture
            </span>
          </h2>

          <p className="text-xl sm:text-2xl text-gray-700 mb-8 max-w-4xl mx-auto leading-relaxed">
            Explore authentic Phu Thai heritage, find local opportunities, and connect with the vibrant community of Wang Sam Mo district, Udon Thani.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 max-w-4xl mx-auto">
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20 hover:shadow-xl transition-all duration-300">
              <Users className="h-8 w-8 text-amber-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-gray-900">50+</div>
              <div className="text-sm text-gray-600">Cultural Sites</div>
            </div>
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20 hover:shadow-xl transition-all duration-300">
              <Briefcase className="h-8 w-8 text-orange-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-gray-900">200+</div>
              <div className="text-sm text-gray-600">Job Opportunities</div>
            </div>
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20 hover:shadow-xl transition-all duration-300">
              <Store className="h-8 w-8 text-red-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-gray-900">150+</div>
              <div className="text-sm text-gray-600">Local Businesses</div>
            </div>
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20 hover:shadow-xl transition-all duration-300">
              <MapPin className="h-8 w-8 text-amber-700 mx-auto mb-2" />
              <div className="text-2xl font-bold text-gray-900">25+</div>
              <div className="text-sm text-gray-600">Tour Routes</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="bg-gradient-to-r from-amber-600 to-red-600 text-white px-8 py-4 rounded-2xl font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 hover:from-amber-700 hover:to-red-700">
              Explore Culture
            </button>
            <button className="bg-white/80 backdrop-blur-sm text-gray-900 px-8 py-4 rounded-2xl font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 border border-gray-200 hover:bg-white">
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