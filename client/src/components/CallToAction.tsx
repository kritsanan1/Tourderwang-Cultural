import React, { useState } from 'react';
import { ArrowRight, MapPin, Users, Star, CheckCircle } from 'lucide-react';

const CallToAction: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitted(true);
    setIsLoading(false);
    setEmail('');
  };

  return (
    <section className="py-20 bg-gradient-to-br from-amber-600 via-orange-600 to-red-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 left-10 w-20 h-20 bg-white rounded-full"></div>
            <div className="absolute top-32 right-20 w-16 h-16 bg-white rounded-full"></div>
            <div className="absolute bottom-20 left-1/3 w-12 h-12 bg-white rounded-full"></div>
            <div className="absolute bottom-10 right-10 w-24 h-24 bg-white rounded-full"></div>
          </div>

          <div className="relative z-10 text-center text-white">
            {/* Main Heading */}
            <h2 className="text-4xl sm:text-6xl font-bold mb-6 leading-tight">
              Start Your Cultural
              <span className="block">Journey Today</span>
            </h2>

            <p className="text-xl sm:text-2xl mb-12 max-w-3xl mx-auto leading-relaxed opacity-90">
              Join thousands of people discovering Phu Thai culture, finding opportunities, and connecting with the vibrant community of Wang Sam Mo.
            </p>

            {/* Stats Row */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 max-w-4xl mx-auto">
              <div className="flex items-center justify-center space-x-3">
                <MapPin className="h-8 w-8" />
                <div className="text-left">
                  <div className="text-2xl font-bold">50+</div>
                  <div className="text-sm opacity-80">Cultural Sites</div>
                </div>
              </div>
              <div className="flex items-center justify-center space-x-3">
                <Users className="h-8 w-8" />
                <div className="text-left">
                  <div className="text-2xl font-bold">5,000+</div>
                  <div className="text-sm opacity-80">Community Members</div>
                </div>
              </div>
              <div className="flex items-center justify-center space-x-3">
                <Star className="h-8 w-8" />
                <div className="text-left">
                  <div className="text-2xl font-bold">4.9</div>
                  <div className="text-sm opacity-80">User Rating</div>
                </div>
              </div>
            </div>

            {/* Email Signup Form */}
            <div className="max-w-2xl mx-auto">
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 mb-8">
                  <div className="flex-1">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email to get started"
                      required
                      className="w-full px-6 py-4 rounded-2xl text-gray-900 text-lg font-medium shadow-lg focus:outline-none focus:ring-4 focus:ring-white/30 transition-all duration-300"
                      disabled={isLoading}
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={isLoading || !email}
                    className="bg-white text-gray-900 px-8 py-4 rounded-2xl font-bold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:transform-none flex items-center justify-center space-x-2"
                  >
                    {isLoading ? (
                      <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-gray-900"></div>
                    ) : (
                      <>
                        <span>Join Community</span>
                        <ArrowRight className="h-5 w-5" />
                      </>
                    )}
                  </button>
                </form>
              ) : (
                <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-8 mb-8">
                  <CheckCircle className="h-12 w-12 mx-auto mb-4 text-green-300" />
                  <h3 className="text-2xl font-bold mb-2">Welcome to the Community!</h3>
                  <p className="text-lg opacity-90">
                    Check your email for next steps to start exploring Phu Thai culture.
                  </p>
                </div>
              )}

              {/* Alternative CTAs */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white/20 backdrop-blur-sm text-white border-2 border-white/30 px-6 py-3 rounded-2xl font-semibold hover:bg-white/30 transition-all duration-300">
                  Browse Cultural Sites
                </button>
                <button className="bg-white/20 backdrop-blur-sm text-white border-2 border-white/30 px-6 py-3 rounded-2xl font-semibold hover:bg-white/30 transition-all duration-300">
                  Explore Job Opportunities
                </button>
                <button className="bg-white/20 backdrop-blur-sm text-white border-2 border-white/30 px-6 py-3 rounded-2xl font-semibold hover:bg-white/30 transition-all duration-300">
                  Find Local Businesses
                </button>
              </div>

              {/* Trust Indicators */}
              <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                  <div className="text-2xl mb-2">🏛️</div>
                  <div className="font-semibold mb-1">Authentic Heritage</div>
                  <div className="text-sm opacity-80">Verified cultural content</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                  <div className="text-2xl mb-2">🤝</div>
                  <div className="font-semibold mb-1">Community Driven</div>
                  <div className="text-sm opacity-80">By locals, for everyone</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                  <div className="text-2xl mb-2">🔒</div>
                  <div className="font-semibold mb-1">Safe & Secure</div>
                  <div className="text-sm opacity-80">Privacy protected</div>
                </div>
              </div>

              {/* Fine Print */}
              <p className="text-sm opacity-70 mt-8 max-w-lg mx-auto">
                By joining, you agree to our Terms of Service and Privacy Policy. 
                We'll send you updates about cultural events and community news. 
                Unsubscribe anytime.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;