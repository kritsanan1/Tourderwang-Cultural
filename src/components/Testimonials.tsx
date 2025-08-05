import React, { useState, useEffect } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import type { Testimonial } from '../types';

const Testimonials: React.FC = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  // Mock testimonials (in a real app, these would come from OpenAI API)
  const testimonials: Testimonial[] = [
    {
      id: '1',
      name: 'Apinya Suthep',
      role: 'Cultural Researcher, Chiang Mai University',
      content: 'Tourderwang has become an invaluable resource for my research on Phu Thai culture. The authentic stories and interactive cultural map helped me discover hidden aspects of Wang Sam Mo\'s heritage that I never knew existed.',
      rating: 5,
      avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
    },
    {
      id: '2',
      name: 'James Mitchell',
      role: 'Travel Blogger & Cultural Enthusiast',
      content: 'As a foreigner fascinated by Thai culture, Tourderwang opened my eyes to the beautiful Phu Thai traditions. The job portal even helped me find freelance work as a cultural content translator. This platform truly connects communities.',
      rating: 5,
      avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
    },
    {
      id: '3',
      name: 'Siriporn Kaewkham',
      role: 'Local Business Owner, Wang Sam Mo',
      content: 'Thanks to Tourderwang\'s business directory, my traditional textile shop has gained visibility among both tourists and locals. The review system helps build trust, and I\'ve connected with other artisans to collaborate on cultural projects.',
      rating: 5,
      avatar: 'https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
    },
    {
      id: '4',
      name: 'Somchai Phongsiri',
      role: 'Recent Graduate, Local Job Seeker',
      content: 'Finding meaningful work in my hometown seemed impossible until I discovered Tourderwang. The job portal connected me with a cultural preservation project that combines my passion for heritage with sustainable income.',
      rating: 5,
      avatar: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
    },
    {
      id: '5',
      name: 'Maria Santos',
      role: 'International Tourist & Culture Lover',
      content: 'Tourderwang transformed my visit to Udon Thani from a typical tourist trip into a deep cultural immersion. The interactive map led me to authentic experiences, and the multi-language support made everything accessible.',
      rating: 5,
      avatar: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
    }
  ];

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-5 w-5 ${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
      />
    ));
  };

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Stories from Our
            <span className="block bg-gradient-to-r from-amber-600 to-red-600 bg-clip-text text-transparent">
              Community
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover how Tourderwang has helped people connect with Phu Thai culture, find opportunities, and build meaningful relationships in Wang Sam Mo.
          </p>
        </div>

        {/* Main Testimonial Display */}
        <div className="relative max-w-4xl mx-auto">
          {/* Navigation Buttons */}
          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 z-10 bg-white shadow-lg rounded-full p-3 hover:shadow-xl transition-all duration-300 hover:scale-110"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-6 w-6 text-gray-600" />
          </button>

          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 z-10 bg-white shadow-lg rounded-full p-3 hover:shadow-xl transition-all duration-300 hover:scale-110"
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-6 w-6 text-gray-600" />
          </button>

          {/* Testimonial Card */}
          <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute top-0 right-0 opacity-5">
              <Quote className="h-32 w-32 text-amber-600" />
            </div>

            <div className="relative z-10">
              {/* Rating */}
              <div className="flex justify-center mb-6">
                <div className="flex space-x-1">
                  {renderStars(testimonials[currentTestimonial].rating)}
                </div>
              </div>

              {/* Testimonial Content */}
              <blockquote className="text-xl md:text-2xl text-gray-800 text-center mb-8 leading-relaxed italic">
                "{testimonials[currentTestimonial].content}"
              </blockquote>

              {/* Author Info */}
              <div className="flex items-center justify-center space-x-4">
                <img
                  src={testimonials[currentTestimonial].avatar}
                  alt={testimonials[currentTestimonial].name}
                  className="w-16 h-16 rounded-full object-cover shadow-lg"
                />
                <div className="text-center">
                  <div className="font-bold text-lg text-gray-900">
                    {testimonials[currentTestimonial].name}
                  </div>
                  <div className="text-gray-600">
                    {testimonials[currentTestimonial].role}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Testimonial Indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentTestimonial
                    ? 'bg-amber-600 w-8'
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Additional Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-6 mt-16">
          {testimonials.slice(0, 3).map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={`bg-gradient-to-br from-white to-gray-50 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 ${
                index === currentTestimonial ? 'ring-2 ring-amber-600 ring-opacity-50' : ''
              }`}
            >
              <div className="flex space-x-1 mb-4">
                {renderStars(testimonial.rating)}
              </div>
              <p className="text-gray-700 mb-4 text-sm leading-relaxed">
                "{testimonial.content.slice(0, 120)}..."
              </p>
              <div className="flex items-center space-x-3">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <div className="font-semibold text-sm text-gray-900">
                    {testimonial.name}
                  </div>
                  <div className="text-xs text-gray-600">
                    {testimonial.role.split(',')[0]}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;