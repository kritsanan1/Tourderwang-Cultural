import React from 'react';
import { BookOpen, Briefcase, Store, Map, Star, Users, Calendar, Globe } from 'lucide-react';
import type { Feature } from '../types';

const Features: React.FC = () => {
  const features: Feature[] = [
    {
      id: '1',
      title: 'Cultural Heritage Stories',
      description: 'Immerse yourself in authentic Phu Thai traditions, festivals, and historical narratives through interactive multimedia experiences.',
      icon: 'BookOpen',
      category: 'culture'
    },
    {
      id: '2',
      title: 'Local Job Portal',
      description: 'Discover career opportunities within Wang Sam Mo district, from traditional crafts to modern enterprises.',
      icon: 'Briefcase',
      category: 'jobs'
    },
    {
      id: '3',
      title: 'Business Directory',
      description: 'Find authentic local products, accommodations, restaurants, and services with verified reviews and ratings.',
      icon: 'Store',
      category: 'business'
    },
    {
      id: '4',
      title: 'Interactive Cultural Map',
      description: 'Navigate through cultural landmarks, temples, markets, and hidden gems with detailed information and directions.',
      icon: 'Map',
      category: 'tourism'
    },
    {
      id: '5',
      title: 'Community Reviews',
      description: 'Share experiences and read authentic reviews from locals and visitors about cultural sites and businesses.',
      icon: 'Star',
      category: 'tourism'
    },
    {
      id: '6',
      title: 'Cultural Events',
      description: 'Stay updated with traditional festivals, ceremonies, and community gatherings throughout the year.',
      icon: 'Calendar',
      category: 'culture'
    },
    {
      id: '7',
      title: 'Local Network',
      description: 'Connect with artisans, cultural experts, business owners, and fellow enthusiasts of Phu Thai culture.',
      icon: 'Users',
      category: 'culture'
    },
    {
      id: '8',
      title: 'Multi-Language Support',
      description: 'Access content in Thai, English, and local Phu Thai dialect to ensure inclusive cultural preservation.',
      icon: 'Globe',
      category: 'culture'
    }
  ];

  const iconMap = {
    BookOpen,
    Briefcase,
    Store,
    Map,
    Star,
    Users,
    Calendar,
    Globe
  };

  const categoryColors = {
    culture: 'from-amber-500 to-orange-500',
    jobs: 'from-blue-500 to-indigo-500',
    business: 'from-green-500 to-emerald-500',
    tourism: 'from-purple-500 to-pink-500'
  };

  const categoryLabels = {
    culture: 'Cultural Heritage',
    jobs: 'Career Opportunities',
    business: 'Local Business',
    tourism: 'Tourism & Travel'
  };

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Everything You Need to
            <span className="block bg-gradient-to-r from-amber-600 to-red-600 bg-clip-text text-transparent">
              Explore & Connect
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Comprehensive platform connecting you with Phu Thai culture, local opportunities, and community experiences in Wang Sam Mo district.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {features.map((feature) => {
            const IconComponent = iconMap[feature.icon as keyof typeof iconMap];
            const gradientClass = categoryColors[feature.category];
            
            return (
              <div
                key={feature.id}
                className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-gray-200 transform hover:-translate-y-2"
              >
                {/* Category Badge */}
                <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-600 mb-4">
                  {categoryLabels[feature.category]}
                </div>

                {/* Icon */}
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${gradientClass} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <IconComponent className="h-8 w-8 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-amber-700 transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>

                {/* Hover Effect */}
                <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex items-center text-amber-600 text-sm font-medium">
                    Learn more
                    <svg className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-amber-600 to-red-600 rounded-3xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Ready to Explore Wang Sam Mo?</h3>
            <p className="text-lg mb-6 opacity-90">Join our community and start your cultural journey today.</p>
            <button className="bg-white text-gray-900 px-8 py-3 rounded-2xl font-semibold hover:bg-gray-100 transition-colors duration-300 shadow-lg">
              Get Started Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;